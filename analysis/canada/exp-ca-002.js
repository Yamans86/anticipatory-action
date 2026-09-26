import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

function monthOrdinal(value) {
  if (!/^\d{4}-\d{2}$/.test(value)) throw new Error(`Invalid month: ${value}`);
  const [year, month] = value.split('-').map(Number);
  if (month < 1 || month > 12) throw new Error(`Invalid month: ${value}`);
  return year * 12 + month - 1;
}

function finiteNumber(value, label) {
  const n = Number(value);
  if (!Number.isFinite(n)) throw new Error(`Invalid numeric value for ${label}`);
  return n;
}

function solveLinearSystem(matrix, vector) {
  const n = vector.length;
  const a = matrix.map((row, i) => [...row, vector[i]]);
  for (let i = 0; i < n; i += 1) {
    let pivot = i;
    for (let r = i + 1; r < n; r += 1) {
      if (Math.abs(a[r][i]) > Math.abs(a[pivot][i])) pivot = r;
    }
    [a[i], a[pivot]] = [a[pivot], a[i]];
    if (Math.abs(a[i][i]) < 1e-10) a[i][i] += 1e-8;
    const divisor = a[i][i];
    for (let c = i; c <= n; c += 1) a[i][c] /= divisor;
    for (let r = 0; r < n; r += 1) {
      if (r === i) continue;
      const factor = a[r][i];
      for (let c = i; c <= n; c += 1) a[r][c] -= factor * a[i][c];
    }
  }
  return a.map(row => row[n]);
}

function fitOls(features, target) {
  if (!features.length) throw new Error('No training rows');
  const p = features[0].length;
  const xtx = Array.from({ length: p }, () => Array(p).fill(0));
  const xty = Array(p).fill(0);
  for (let i = 0; i < features.length; i += 1) {
    for (let r = 0; r < p; r += 1) {
      xty[r] += features[i][r] * target[i];
      for (let c = 0; c < p; c += 1) xtx[r][c] += features[i][r] * features[i][c];
    }
  }
  for (let i = 0; i < p; i += 1) xtx[i][i] += 1e-8;
  return solveLinearSystem(xtx, xty);
}

const predict = (beta, x) => beta.reduce((sum, b, i) => sum + b * x[i], 0);

function metrics(errors) {
  if (!errors.length) throw new Error('No held-out predictions');
  const mae = errors.reduce((sum, e) => sum + Math.abs(e), 0) / errors.length;
  const rmse = Math.sqrt(errors.reduce((sum, e) => sum + e * e, 0) / errors.length);
  return { mae, rmse };
}

function normalizeRows(input) {
  if (!Array.isArray(input) || !input.length) throw new Error('Input must be a non-empty array');
  const rows = input.map(row => ({
    date: String(row.date),
    recentImmigrantUnemploymentRate: finiteNumber(row.recentImmigrantUnemploymentRate, 'recentImmigrantUnemploymentRate'),
    helcEmploymentIndex: finiteNumber(row.helcEmploymentIndex, 'helcEmploymentIndex')
  })).sort((a, b) => monthOrdinal(a.date) - monthOrdinal(b.date));
  for (let i = 1; i < rows.length; i += 1) {
    const gap = monthOrdinal(rows[i].date) - monthOrdinal(rows[i - 1].date);
    if (gap !== 1) throw new Error(`Monthly series must be contiguous: ${rows[i - 1].date} -> ${rows[i].date}`);
    if (rows[i].date === rows[i - 1].date) throw new Error(`Duplicate month: ${rows[i].date}`);
  }
  if (rows.some(row => row.helcEmploymentIndex <= 0)) throw new Error('helcEmploymentIndex must be positive');
  return rows;
}

export function runExperiment(input, {
  horizon = 3,
  momentumWindow = 3,
  minTrain = 24
} = {}) {
  if (!Number.isInteger(horizon) || horizon < 1) throw new Error('horizon must be a positive integer');
  if (!Number.isInteger(momentumWindow) || momentumWindow < 1) throw new Error('momentumWindow must be a positive integer');
  if (!Number.isInteger(minTrain) || minTrain < 6) throw new Error('minTrain must be an integer >= 6');

  const rows = normalizeRows(input);
  const samples = [];
  for (let i = momentumWindow; i + horizon < rows.length; i += 1) {
    const now = rows[i];
    const prior = rows[i - momentumWindow];
    const future = rows[i + horizon];
    const unemploymentMomentum = now.recentImmigrantUnemploymentRate - prior.recentImmigrantUnemploymentRate;
    const helcCooling = -100 * (now.helcEmploymentIndex / prior.helcEmploymentIndex - 1);
    samples.push({
      originIndex: i,
      targetIndex: i + horizon,
      originDate: now.date,
      targetDate: future.date,
      unemploymentMomentum,
      helcCooling,
      target: future.recentImmigrantUnemploymentRate - now.recentImmigrantUnemploymentRate
    });
  }

  const predictions = [];
  for (const current of samples) {
    const train = samples.filter(sample => sample.targetIndex <= current.originIndex);
    if (train.length < minTrain) continue;

    const baselineX = train.map(sample => [1, sample.unemploymentMomentum]);
    const expandedX = train.map(sample => [1, sample.unemploymentMomentum, sample.helcCooling]);
    const y = train.map(sample => sample.target);
    const baselineBeta = fitOls(baselineX, y);
    const expandedBeta = fitOls(expandedX, y);

    predictions.push({
      originDate: current.originDate,
      targetDate: current.targetDate,
      trainSamples: train.length,
      actual: current.target,
      baseline: predict(baselineBeta, [1, current.unemploymentMomentum]),
      expanded: predict(expandedBeta, [1, current.unemploymentMomentum, current.helcCooling])
    });
  }

  if (!predictions.length) throw new Error('Not enough history for held-out predictions');

  const baselineErrors = predictions.map(p => p.actual - p.baseline);
  const expandedErrors = predictions.map(p => p.actual - p.expanded);
  const baseline = metrics(baselineErrors);
  const expanded = metrics(expandedErrors);

  return {
    experiment: 'AA-EXP-CA-002',
    specification: { horizon, momentumWindow, minTrain },
    inputMonths: rows.length,
    eligibleSamples: samples.length,
    heldOutPredictions: predictions.length,
    baseline,
    expanded,
    deltaRmse: expanded.rmse - baseline.rmse,
    deltaMae: expanded.mae - baseline.mae,
    interpretation: expanded.rmse < baseline.rmse
      ? 'Expanded model had lower held-out RMSE in this run.'
      : 'Expanded model did not have lower held-out RMSE in this run.',
    predictions
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node analysis/canada/exp-ca-002.js <prepared-series.json>');
    process.exit(2);
  }
  const input = JSON.parse(readFileSync(file, 'utf8'));
  console.log(JSON.stringify(runExperiment(input), null, 2));
}
