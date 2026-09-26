import { mkdirSync, rmSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { records, latest, countries, validateCatalog, recordPath } from '../src/catalog.js';
import { layout, home, catalog, detail, countryPage, staticPages } from '../src/pages.js';

validateCatalog();

const outputArg = process.argv[2] || 'dist';
if (!/^[A-Za-z0-9_./-]+$/.test(outputArg) || outputArg.includes('..')) throw new Error('Unsafe output directory');
const out = new URL('../' + outputArg.replace(/^\.\//,'').replace(/\/$/,'') + '/', import.meta.url);
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

function outputPath(route, extension = '.html') {
  if (route === '/') return new URL('index.html', out);
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  return new URL(clean + extension, out);
}

function writeRoute(route, title, body) {
  const file = outputPath(route);
  mkdirSync(dirname(file.pathname), { recursive: true });
  writeFileSync(file, layout(title, body, route));
}

writeRoute('/', 'Home', home());

const catalogs = {
  '/catalog': [undefined, 'Research catalog', 'Follow each research object and its evidence chain.'],
  '/evidence': [['source','dataset'], 'Evidence and data', 'Inspect the sources before following the conclusions.'],
  '/indicators': [['indicator'], 'Indicators', 'Inspect definitions before interpreting signals.'],
  '/experiments': [['experiment'], 'Experiments', 'Read the protocol, then inspect the results.']
};

for (const [route, spec] of Object.entries(catalogs)) {
  const url = new URL('https://static.local' + route);
  writeRoute(route, spec[1], catalog(url, ...spec));
}

for (const country of countries) {
  const route = `/countries/${country.code}`;
  writeRoute(route, `${country.name} Lab`, countryPage(country));
}

for (const [route, [title, render]] of Object.entries(staticPages)) {
  writeRoute(route, title, render());
}

for (const record of records) {
  const route = recordPath(record);
  writeRoute(route, record.title, detail(record));
}

for (const record of latest) {
  const route = `/objects/${record.id}`;
  writeRoute(route, record.title, detail(record));
}

const catalogJson = new URL('api/catalog.json', out);
mkdirSync(dirname(catalogJson.pathname), { recursive: true });
writeFileSync(catalogJson, JSON.stringify({ schemaVersion: '1.0.0', release: '0.3.8', countries, records }, null, 2));

for (const record of records) {
  const file = new URL(`api/objects/${record.id}/v/${record.version}.json`, out);
  mkdirSync(dirname(file.pathname), { recursive: true });
  writeFileSync(file, JSON.stringify(record, null, 2));
}

writeFileSync(new URL('health.json', out), JSON.stringify({ status: 'ok', version: '0.3.8', records: records.length }, null, 2));
copyFileSync(new URL('../public/style.css', import.meta.url), new URL('style.css', out));

const notFound = layout('Page not found', '<div class="intro"><h1>Page not found</h1><p>This page or record version does not exist.</p><a href="/catalog">Browse the research catalog</a></div>', '/404');
writeFileSync(new URL('404.html', out), notFound);

console.log(`Built static site with ${records.length} versioned research records.`);
