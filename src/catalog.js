import { readFileSync } from 'node:fs';
export const records = JSON.parse(readFileSync(new URL('../content/records.json', import.meta.url)));
export const countries = JSON.parse(readFileSync(new URL('../content/countries.json', import.meta.url)));
export const types = ['source', 'dataset', 'hypothesis', 'indicator', 'experiment', 'model', 'action'];
export const latest = [...new Set(records.map(r => r.id))].map(id => records.filter(r => r.id === id).sort((a,b) => b.version.localeCompare(a.version, undefined, {numeric:true}))[0]);
export const findRecord = (id, version) => (version ? records : latest).find(r => r.id === id && (!version || r.version === version));
export const recordPath = r => `/objects/${r.id}/v/${r.version}`;
export const countryName = code => countries.find(c => c.code === code)?.name || code;
export function filterRecords({q='',type='',country=''} = {}, input = latest) {
  return input.filter(r => (!type || r.type === type) && (!country || r.country === country) && `${r.id} ${r.title} ${r.summary}`.toLowerCase().includes(q.toLowerCase()));
}
export function validateCatalog(items = records) {
  const keys = new Set();
  for (const r of items) {
    for (const key of ['id','version','type','country','title','status','updated','summary','body']) if (!r[key] || typeof r[key] !== 'string') throw Error(`Missing ${key}`);
    if (!/^AA-[A-Z]{3}-[A-Z]{2}-\d{3}$/.test(r.id) || !/^\d+\.\d+\.\d+$/.test(r.version)) throw Error(`Invalid identity: ${r.id}`);
    if (!types.includes(r.type) || !countries.some(c=>c.code===r.country)) throw Error(`Invalid taxonomy: ${r.id}`);
    if (!['catalogued','planned','proposed','concept','validated','retired'].includes(r.status)) throw Error(`Invalid status: ${r.id}`);
    if (!Array.isArray(r.limitations) || !r.limitations.length || !r.provenance?.origin || !r.provenance?.license || !Array.isArray(r.links)) throw Error(`Missing evidence metadata: ${r.id}`);
    if (r.provenance.url && !/^https:\/\//.test(r.provenance.url)) throw Error(`Unsafe source URL: ${r.id}`);
    const key = `${r.id}@${r.version}`;
    if (keys.has(key)) throw Error(`Duplicate: ${key}`);
    keys.add(key);
  }
  for (const r of items) for (const l of r.links) if (!keys.has(`${l.id}@${l.version}`) || !l.relation) throw Error(`Broken evidence link: ${r.id}`);
  return true;
}
