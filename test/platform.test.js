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
  const homeHtml = layout('Home',home(),'/');
  assert.match(homeHtml, /Anticipatory action for technological disruption/);
  assert.match(homeHtml, /Humanitarian anticipatory action/);
  assert.match(homeHtml, /Fragility can exist inside a strong society/);
  const canadaHtml = layout('Canada Lab',countryPage({code:'CA',name:'Canada',stage:'Validated POC - calibration pending',description:'test'}),'/countries/CA');
  assert.match(canadaHtml,/Canada Lab/);
  assert.match(canadaHtml,/Computational proof of concept and validation/);
  assert.match(canadaHtml,/NOT triggered|not triggered/i);
  assert.match(layout(records[0].title,detail(records[0]),recordPath(records[0])),/Evidence and dependencies/);
  assert.match(catalog(new URL('https://static.local/catalog?type=indicator&country=CA&q=unemployment'),undefined,'Research catalog','test'),/2 records</);
  assert.ok(staticPages['/project']);
  assert.ok(staticPages['/framework']);
  assert.match(staticPages['/framework'][1](),/From technological disruption to anticipatory action/);
  assert.match(staticPages['/framework'][1](),/Priority for anticipatory action/);
  assert.match(staticPages['/actions'][1](),/Candidate activity catalogue/);
  assert.match(staticPages['/actions'][1](),/universal basic income/i);
  assert.ok(staticPages['/canada-poc']);
  assert.ok(staticPages['/glossary']);
  assert.match(staticPages['/canada-poc'][1](),/Occupational Transition Pressure Model/);
  assert.match(staticPages['/canada-poc'][1](),/Transition Velocity and Protected Transition Margin Model/);
  assert.match(staticPages['/glossary'][1](),/Population Exposure Model/);
  assert.match(homeHtml,/abbr class="term" title="Artificial intelligence"/);
  assert.match(layout(records.find(r=>r.id==='AA-MOD-CA-002').title,detail(records.find(r=>r.id==='AA-MOD-CA-002')),recordPath(records.find(r=>r.id==='AA-MOD-CA-002'))),/Terms used on this page/);
});

test('search rendering escapes HTML and keeps honest empty states',()=>{
  const unsafe=catalog(new URL('https://static.local/evidence?q=%3Cscript%3Ealert(1)%3C%2Fscript%3E'),['source','dataset'],'Evidence','test');
  assert.ok(!unsafe.includes('<script>'));
  assert.match(unsafe,/No records match/);
});
