import http from 'node:http';
import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {handleRequest} from './app.js';

const css=readFileSync(new URL('../public/style.css',import.meta.url));

export const server=http.createServer((req,res)=>{
  if(req.url?.split('?')[0]==='/style.css'){
    res.writeHead(200,{'Content-Type':'text/css; charset=utf-8'});
    return res.end(req.method==='HEAD'?'':css);
  }
  return handleRequest(req,res);
});

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Anticipatory Action listening'));
}
