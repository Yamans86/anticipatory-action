import {test, before, after} from 'node:test';
import assert from 'node:assert/strict';
import {server} from '../src/server.js';
import {records,validateCatalog,recordPath,filterRecords} from '../src/catalog.js';
let base;
before(async()=>{await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));base=`http://127.0.0.1:${server.address().port}`;});
after(()=>new Promise(resolve=>server.close(resolve)));
test('catalog rejects duplicate identities and dangling evidence references',()=>{
  assert.equal(validateCatalog(),true);
  assert.throws(()=>validateCatalog([...records,records[0]]),/Duplicate/);
  const broken=structuredClone(records);broken[1].links[0].version='99.0.0';
  assert.throws(()=>validateCatalog(broken),/Broken evidence link/);
});
test('filters combine country, type and text',()=>{
  assert.equal(filterRecords({q:'unemployment',type:'indicator',country:'CA'}).length,1);
  assert.equal(filterRecords({q:'nonexistent'}).length,0);
  assert.equal(filterRecords({country:'XX'}).length,0);
});
test('every published page and its internal links resolve',async()=>{
  const paths=['/','/why','/evidence','/catalog','/countries','/countries/CA','/indicators','/experiments','/early-warning','/actions','/methodology','/project','/roadmap','/changelog',...records.map(recordPath)];
  const links=new Set();
  for(const path of paths){const r=await fetch(base+path);assert.equal(r.status,200,path);const html=await r.text();assert.match(html,/<h1>/);for(const match of html.matchAll(/href="(\/[^"#]*)"/g))links.add(match[1]);}
  for(const path of links)assert.equal((await fetch(base+path)).status,200,path);
});
test('version permalinks, latest redirects, JSON and missing versions',async()=>{
  const r=records[0];
  const redirect=await fetch(`${base}/objects/${r.id}`,{redirect:'manual'});
  assert.equal(redirect.status,302);assert.equal(redirect.headers.get('location'),recordPath(r));
  assert.deepEqual(await(await fetch(`${base}/api/objects/${r.id}/v/${r.version}.json`)).json(),r);
  assert.equal((await fetch(`${base}/objects/${r.id}/v/99.0.0`)).status,404);
  assert.equal((await fetch(`${base}/missing`)).status,404);
});
test('search escapes HTML and provides an honest empty state',async()=>{
  const html=await(await fetch(`${base}/evidence?q=${encodeURIComponent('<script>alert(1)</script>')}`)).text();
  assert.ok(!html.includes('<script>'));assert.match(html,/No records match/);
  const search=await(await fetch(`${base}/catalog?type=indicator&country=CA&q=unemployment`)).text();
  assert.match(search,/1 record</);assert.match(search,/Change in unemployment rate/);
});
test('health, read-only methods and security headers',async()=>{
  const health=await fetch(base+'/health');assert.equal((await health.json()).status,'ok');
  assert.match(health.headers.get('content-security-policy'),/frame-ancestors 'none'/);
  assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
  assert.equal(await(await fetch(base+'/',{method:'HEAD'})).text(),'');
});
