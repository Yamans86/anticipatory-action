import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runExperiment } from '../analysis/canada/exp-ca-002.js';

function monthAt(startYear, startMonth, offset) {
  const ordinal = startYear * 12 + (startMonth - 1) + offset;
  const year = Math.floor(ordinal / 12);
  const month = ordinal % 12 + 1;
  return `${year}-${String(month).padStart(2, '0')}`;
}

function syntheticSeries(length = 72) {
  const rows = [];
  let unemployment = 6;
  let employmentIndex = 100;
  for (let t = 0; t < length; t += 1) {
    const coolingWave = Math.sin(t / 4) * 0.9 + Math.cos(t / 9) * 0.4;
    employmentIndex *= 1 + (0.0015 - coolingWave * 0.0018);
    unemployment += 0.01 + coolingWave * 0.035 + Math.sin(t / 7) * 0.005;
    rows.push({
      date: monthAt(2019, 1, t),
      recentImmigrantUnemploymentRate: Number(unemployment.toFixed(4)),
      helcEmploymentIndex: Number(employmentIndex.toFixed(4))
    });
  }
  return rows;
}

test('AA-EXP-CA-002 produces leakage-aware held-out metrics', () => {
  const result = runExperiment(syntheticSeries(), { minTrain: 18 });
  assert.equal(result.experiment, 'AA-EXP-CA-002');
  assert.ok(result.heldOutPredictions > 10);
  assert.ok(Number.isFinite(result.baseline.rmse));
  assert.ok(Number.isFinite(result.expanded.rmse));
  for (const prediction of result.predictions) {
    assert.ok(prediction.trainSamples >= 18);
    assert.ok(prediction.targetDate > prediction.originDate);
  }
});

test('AA-EXP-CA-002 rejects gaps and invalid values', () => {
  const rows = syntheticSeries(40);
  rows.splice(10, 1);
  assert.throws(() => runExperiment(rows, { minTrain: 8 }), /contiguous/);
  const bad = syntheticSeries(40);
  bad[4].helcEmploymentIndex = 0;
  assert.throws(() => runExperiment(bad, { minTrain: 8 }), /positive/);
});
