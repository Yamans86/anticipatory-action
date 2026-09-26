import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import handler from '../api/index.js';
import { recordsData, countriesData } from '../src/content-data.js';

function invoke(url = '/') {
  return new Promise((resolve, reject) => {
    const headers = {};
    const req = { method: 'GET', url, headers: { host: 'localhost' } };
    const res = {
      statusCode: 200,
      headers,
      setHeader(name, value) { headers[name.toLowerCase()] = value; },
      writeHead(status, extra = {}) {
        this.statusCode = status;
        for (const [k,v] of Object.entries(extra)) this.setHeader(k,v);
        return this;
      },
      end(body = '') { resolve({status:this.statusCode, headers, body:String(body)}); }
    };
    try {
      const result = handler(req, res);
      if (result?.catch) result.catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}

test('Vercel entrypoint renders home page without startup failure', async () => {
  const r = await invoke('/');
  assert.equal(r.status, 200);
  assert.match(r.body, /<h1>Understand change/);
});

test('Vercel entrypoint serves health and bundled stylesheet', async () => {
  const health = await invoke('/health');
  assert.equal(health.status, 200);
  const payload = JSON.parse(health.body);
  assert.equal(payload.status, 'ok');
  assert.equal(payload.version, '0.3.3');

  const css = await invoke('/style.css');
  assert.equal(css.status, 200);
  assert.match(css.body, /--teal/);
});

test('deployment-safe content module matches canonical JSON', () => {
  const canonicalRecords = JSON.parse(readFileSync(new URL('../content/records.json', import.meta.url), 'utf8'));
  const canonicalCountries = JSON.parse(readFileSync(new URL('../content/countries.json', import.meta.url), 'utf8'));
  assert.deepEqual(recordsData, canonicalRecords);
  assert.deepEqual(countriesData, canonicalCountries);
});
