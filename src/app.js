import {records,countries,findRecord,validateCatalog,recordPath} from './catalog.js';
import {layout,home,catalog,detail,countryPage,staticPages} from './pages.js';
import {css} from './style.js';

validateCatalog();

export function handleRequest(req,res){
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('Content-Security-Policy',"default-src 'none'; style-src 'self'; img-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'");
  res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
  const send=(status,body,type='text/html; charset=utf-8')=>{res.writeHead(status,{'Content-Type':type});res.end(req.method==='HEAD'?'':body);};
  if (!['GET','HEAD'].includes(req.method)) {res.setHeader('Allow','GET, HEAD');return send(405,'Method not allowed','text/plain');}
  let url;
  try {url=new URL(req.url,'http://localhost');} catch {return send(400,'Bad request','text/plain');}
  const path=url.pathname;
  if(path==='/health')return send(200,JSON.stringify({status:'ok',version:'0.3.2',records:records.length}),'application/json');
  if(path==='/style.css')return send(200,css,'text/css; charset=utf-8');
  if(path==='/favicon.ico')return send(204,'');
  if(path==='/api/catalog.json')return send(200,JSON.stringify({schemaVersion:'1.0.0',release:'0.3.2',countries,records},null,2),'application/json');
  const api=path.match(/^\/api\/objects\/(AA-[A-Z]{3}-[A-Z]{2}-\d{3})\/v\/(\d+\.\d+\.\d+)\.json$/);
  if(api){const r=findRecord(api[1],api[2]);return send(r?200:404,JSON.stringify(r||{error:'Record version not found'}),'application/json');}
  const obj=path.match(/^\/objects\/(AA-[A-Z]{3}-[A-Z]{2}-\d{3})(?:\/v\/(\d+\.\d+\.\d+))?$/);
  if(obj){const r=findRecord(obj[1],obj[2]);if(r){if(!obj[2]){res.writeHead(302,{Location:recordPath(r)});return res.end();}return send(200,layout(r.title,detail(r),path));}}
  if(path==='/')return send(200,layout('Home',home(),path));
  const catalogs={'/catalog':[undefined,'Research catalog','Follow each research object and its evidence chain.'],'/evidence':[['source','dataset'],'Evidence and data','Inspect the sources before following the conclusions.'],'/indicators':[['indicator'],'Indicators','Inspect definitions before interpreting signals.'],'/experiments':[['experiment'],'Experiments','Read the protocol, then inspect the results.']};
  if(catalogs[path])return send(200,layout(catalogs[path][1],catalog(url,...catalogs[path]),path));
  const c=countries.find(c=>path===`/countries/${c.code}`);
  if(c)return send(200,layout(`${c.name} Lab`,countryPage(c),path));
  if(staticPages[path])return send(200,layout(staticPages[path][0],staticPages[path][1](),path));
  return send(404,layout('Page not found','<div class="intro"><h1>Page not found</h1><p>This page or record version does not exist.</p><a href="/catalog">Browse the research catalog</a></div>',path));
}
