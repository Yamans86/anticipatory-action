import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const buildScript = fileURLToPath(new URL('../scripts/build-static.js', import.meta.url));

execFileSync(process.execPath, [buildScript, 'dist'], { stdio: 'inherit' });
execFileSync(process.execPath, [buildScript, 'src/dist'], { stdio: 'inherit' });

console.log('Static build compatibility entrypoint completed.');
