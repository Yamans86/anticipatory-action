import http from 'node:http';
import {pathToFileURL} from 'node:url';
import {handleRequest} from './app.js';

export const server=http.createServer(handleRequest);

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Anticipatory Action listening'));
}
