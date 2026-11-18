/* API local de escritorio: sustituye las antiguas rutas HTTP por IPC seguro. */
(function(){
 'use strict';
 if(!window.PCP_LOCAL_API)return;
 const nativeFetch=window.fetch.bind(window);
 const getRawUrl=(input)=>typeof input==='string'?input:(input&&input.url)||String(input);
 const parseLocalApi=(input)=>{
  try{
   const raw=getRawUrl(input);
   // Bajo file://, una ruta absoluta /api/... se convierte en /C:/api/...
   // al resolverla con URL(). Detectamos primero la ruta original y la normalizamos.
   const rawPath=raw.split(/[?#]/,1)[0];
   if(/^\/(?:api\/)/i.test(rawPath))return {pathname:rawPath,search:(raw.match(/\?[^#]*/) || [''])[0],href:'http://pcp.local'+raw};
   const u=new URL(raw,location.href);
   let pathname=u.pathname;
   const fileDrivePrefix=pathname.match(/^\/[A-Za-z]:\/(api\/.*)$/i);
   if(fileDrivePrefix)pathname='/'+fileDrivePrefix[1];
   if(!pathname.startsWith('/api/'))return null;
   const local=u.protocol==='file:'||u.hostname==='127.0.0.1'||u.hostname==='localhost'||u.hostname==='pcp.local';
   return local?{pathname,search:u.search,href:'http://pcp.local'+pathname+u.search}:null;
  }catch(_){return null;}
 };
 window.fetch=async function(input,init){
  const local=parseLocalApi(input);
  if(!local)return nativeFetch(input,init);
  const method=String(init&&init.method||(input&&input.method)||'GET').toUpperCase();
  let body;
  try{
   const rawBody=init&&init.body;
   if(typeof rawBody==='string'&&rawBody)body=JSON.parse(rawBody);
   else if(rawBody&&typeof rawBody==='object'&&!(rawBody instanceof FormData))body=rawBody;
  }catch(_){body={};}
  try{
   if(local.pathname.startsWith('/api/u1/')){
    if(!window.PCP_PRINTER_DIRECT)throw new Error('La conexión directa con Moonraker no está disponible.');
    const response=await window.PCP_PRINTER_DIRECT.fetch(local.href,init||{});
    const data=await response.json();
    return new Response(JSON.stringify(data),{status:response.status||200,headers:{'Content-Type':'application/json'}});
   }
   const data=await window.PCP_LOCAL_API.request(method,local.pathname+local.search,body);
   return new Response(JSON.stringify(data),{status:200,headers:{'Content-Type':'application/json'}});
  }catch(error){
   return new Response(JSON.stringify({ok:false,error:error&&error.message||String(error)}),{status:error&&error.status||500,headers:{'Content-Type':'application/json'}});
  }
 };
 window.PCP_DESKTOP_DIRECT=true;
 console.info('[PCP] API local activa: IPC + SQLite + Moonraker directo; sin servidor HTTP.');
})();
