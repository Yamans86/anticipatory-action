import {execFileSync} from 'node:child_process';
import {records} from './catalog.js';
const ref=process.argv[2];
if(!ref)throw Error('Supply a base Git ref');
const old=JSON.parse(execFileSync('git',['show',`${ref}:content/records.json`],{encoding:'utf8'}));
for(const previous of old){
  const current=records.find(r=>r.id===previous.id&&r.version===previous.version);
  if(JSON.stringify(current)!==JSON.stringify(previous))throw Error(`Published version changed or removed: ${previous.id}@${previous.version}. Append a new version instead.`);
}
console.log('Published record versions preserved.');
