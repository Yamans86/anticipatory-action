import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

test('static production build renders core routes and data', () => {
  execFileSync(process.execPath, ['scripts/build-static.js'], { stdio: 'pipe' });

  const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  const health = JSON.parse(readFileSync(new URL('../dist/health.json', import.meta.url), 'utf8'));
  const catalog = JSON.parse(readFileSync(new URL('../dist/api/catalog.json', import.meta.url), 'utf8'));
  const css = readFileSync(new URL('../dist/style.css', import.meta.url), 'utf8');
  const canada = readFileSync(new URL('../dist/countries/CA.html', import.meta.url), 'utf8');
  const canadaPoc = readFileSync(new URL('../dist/canada-poc.html', import.meta.url), 'utf8');
  const glossary = readFileSync(new URL('../dist/glossary.html', import.meta.url), 'utf8');
  const framework = readFileSync(new URL('../dist/framework.html', import.meta.url), 'utf8');
  const actions = readFileSync(new URL('../dist/actions.html', import.meta.url), 'utf8');

  assert.match(home, /<h1>Anticipatory action for technological disruption/);
  assert.match(canada, /Canada Lab/);
  assert.match(canada, /Current proof-of-concept verdict/);
  assert.match(canadaPoc, /SHARE WITH CAVEATS/);
  assert.match(canadaPoc, /NOT TRIGGERED/);
  assert.match(canadaPoc, /Occupational Transition Pressure Model/);
  assert.match(canadaPoc, /Population Exposure Model/);
  assert.match(canadaPoc, /Vulnerability and Adaptive Capacity Model/);
  assert.match(canadaPoc, /Policy Buffer and Protection Gap Model/);
  assert.match(canadaPoc, /Transition Velocity and Protected Transition Margin Model/);
  assert.match(glossary, /Minimum viable product/);
  assert.match(glossary, /Complementarity-Adjusted Artificial Intelligence Occupational Exposure/);
  assert.match(framework, /Humanitarian anticipatory action/);
  assert.match(framework, /Who may need anticipatory support/);
  assert.match(framework, /Compare the cost of acting early with the cost of waiting/);
  assert.match(actions, /Likely phase-out/);
  assert.match(actions, /universal basic income/i);
  assert.equal(health.status, 'ok');
  assert.equal(health.version, '0.5.0');
  assert.equal(catalog.release, '0.5.0');
  assert.ok(catalog.records.length >= 51);
  assert.match(css, /--teal/);
  assert.match(css, /abbr\.term/);
});


test('src-root production build renders the same static site', () => {
  execFileSync(process.execPath, ['scripts/build-static.js', 'src/dist'], { stdio: 'pipe' });
  const home = readFileSync(new URL('../src/dist/index.html', import.meta.url), 'utf8');
  const health = JSON.parse(readFileSync(new URL('../src/dist/health.json', import.meta.url), 'utf8'));
  assert.match(home, /<h1>Anticipatory action for technological disruption/);
  assert.equal(health.version, '0.5.0');
});


test('legacy src/server.js command only generates static outputs', () => {
  execFileSync(process.execPath, ['src/server.js'], { stdio: 'pipe' });
  const rootHealth = JSON.parse(readFileSync(new URL('../dist/health.json', import.meta.url), 'utf8'));
  const srcHealth = JSON.parse(readFileSync(new URL('../src/dist/health.json', import.meta.url), 'utf8'));
  assert.equal(rootHealth.version, '0.5.0');
  assert.equal(srcHealth.version, '0.5.0');
});


test('GitHub Pages build prefixes internal absolute URLs', () => {
  execFileSync(process.execPath, ['scripts/build-static.js'], { stdio: 'pipe', env: {...process.env, BASE_PATH: '/anticipatory-action'} });
  const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(home, /href="\/anticipatory-action\/style\.css"/);
  assert.match(home, /href="\/anticipatory-action\/evidence"/);
  assert.ok(!home.includes('href="/evidence"'));
});
