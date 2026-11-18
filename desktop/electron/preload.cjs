'use strict';
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('PCP_STORAGE_DIRECT', Object.freeze({ snapshotSync:()=>ipcRenderer.sendSync('pcp-storage:snapshot-sync'), request:(method,path,body)=>ipcRenderer.invoke('pcp-storage:request',method,path,body) }));
contextBridge.exposeInMainWorld('PCP_LOCAL_API', Object.freeze({ request:(method,path,body)=>ipcRenderer.invoke('pcp-local-api:request',method,path,body) }));

contextBridge.exposeInMainWorld('PCP_PRINTER_DIRECT', Object.freeze({
 request:(ip,action,params)=>ipcRenderer.invoke('pcp-printer:request',ip,action,params||{}),
 fetch:async(rawUrl,options={})=>{
  const url=new URL(String(rawUrl),'http://pcp.local'),path=url.pathname,q=url.searchParams;
  if(!['http://pcp.local','http://127.0.0.1:8700'].includes(url.origin)||!path.startsWith('/api/u1/'))throw new Error('Ruta de impresora no permitida.');
  const ip=q.get('ip')||'',id=q.get('id')||'';let action='',params={};
  if(path==='/api/u1/discover')action='discover';
  else if(path==='/api/u1/config')action='config';
  else if(path==='/api/u1/status')action='status';
  else if(path==='/api/u1/printer')action='printer';
  else if(path==='/api/u1/filaments'){
   action='gcode-start';const encoded=q.get('filenameB64')||'';
   try{const raw=atob(encoded.replace(/-/g,'+').replace(/_/g,'/'));params.filename=new TextDecoder().decode(Uint8Array.from(raw,c=>c.charCodeAt(0)));}catch(_){params.filename=atob(encoded.replace(/-/g,'+').replace(/_/g,'/'));}
  }else if(path==='/api/u1/filaments/progress'){action='gcode-progress';params.id=id;}
  else if(path==='/api/u1/filaments/cancel'){action='gcode-cancel';params.id=id;}
  else throw new Error('Operación directa de impresora no admitida.');
  try{const data=await ipcRenderer.invoke('pcp-printer:request',ip,action,params);return {ok:data?.ok!==false,status:data?.ok===false?502:200,json:async()=>data,text:async()=>JSON.stringify(data)};}
  catch(error){const data={ok:false,error:error?.message||String(error)};return {ok:false,status:502,json:async()=>data,text:async()=>JSON.stringify(data)};}
 }
}));
contextBridge.exposeInMainWorld('PCP_ORCA', Object.freeze({ launch:()=>ipcRenderer.invoke('pcp-orca:launch'), launchExternal:()=>ipcRenderer.invoke('pcp-orca:launch-external'), detach:()=>ipcRenderer.invoke('pcp-orca:detach'), close:()=>ipcRenderer.invoke('pcp-orca:close'), visibility:value=>ipcRenderer.invoke('pcp-orca:visibility',Boolean(value)), place:rect=>ipcRenderer.invoke('pcp-orca:place',rect), scrollOptions:steps=>ipcRenderer.invoke('pcp-orca:scroll-options',steps) }));
