import {test} from 'node:test';
import assert from 'node:assert/strict';
import {records,validateCatalog,recordPath,filterRecords} from '../src/catalog.js';
import {layout,home,catalog,detail,countryPage,staticPages} from '../src/pages.js';

test('catalog rejects duplicate identities and dangling evidence references',()=>{
  assert.equal(validateCatalog(),true);
  assert.throws(()=>validateCatalog([...records,records[0]]),/Duplicate/);
  const broken=structuredClone(records);
  broken[1].links[0].version='99.0.0';
  assert.throws(()=>validateCatalog(broken),/Broken evidence link/);
});

test('filters combine country, type and text',()=>{
  assert.equal(filterRecords({q:'unemployment',type:'indicator',country:'CA'}).length,2);
  assert.equal(filterRecords({q:'nonexistent'}).length,0);
  assert.equal(filterRecords({country:'XX'}).length,0);
});

test('core renderers produce HTML without a runtime server',()=>{
  assert.match(layout('Home',home(),'/'),/<h1>Understand change/);
  assert.match(layout('Canada Lab',countryPage({code:'CA',name:'Canada',stage:'Evidence build',description:'test'}),'/countries/CA'),/Canada Lab/);
  assert.match(layout(records[0].title,detail(records[0]),recordPath(records[0])),/Evidence and dependencies/);
  assert.match(catalog(new URL('https://static.local/catalog?type=indicator&country=CA&q=unemployment'),undefined,'Research catalog','test'),/2 records</);
  assert.ok(staticPages['/project']);
});

test('search rendering escapes HTML and keeps honest empty states',()=>{
  const unsafe=catalog(new URL('https://static.local/evidence?q=%3Cscript%3Ealert(1)%3C%2Fscript%3E'),['source','dataset'],'Evidence','test');
  assert.ok(!unsafe.includes('<script>'));
  assert.match(unsafe,/No records match/);
});
