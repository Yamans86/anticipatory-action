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

  assert.match(home, /<h1>Understand change/);
  assert.match(canada, /Canada Lab/);
  assert.equal(health.status, 'ok');
  assert.equal(health.version, '0.3.4');
  assert.equal(catalog.release, '0.3.4');
  assert.ok(catalog.records.length >= 20);
  assert.match(css, /--teal/);
});
