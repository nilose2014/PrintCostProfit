/* Print Cost & Profit 2.0 — actualizaciones por último archivo publicado en GitHub.
   No compara números de versión: compara el identificador/fecha del ZIP publicado.
   Compatibilidad: el actualizador de v1.4 detecta el lanzamiento v2.0. */
(function(){
 'use strict';
 const API='https://api.github.com/repos/nilose2014/PrintCostProfit/releases?per_page=100';
 const BASELINE_TAG='v2.0';
 const INTERVAL=6*60*60*1000;
 const BASELINE_KEY='pcp.update.baseline.asset.v2';
 const DISMISS_KEY='pcp.update.dismissed.asset.v2';
 let autoBusy=false,manualBusy=false,baselinePromise=null;
 function t(s){return window.PCP_I18N&&typeof window.PCP_I18N.t==='function'?window.PCP_I18N.t(s):s;}
 function parseTime(v){const n=Date.parse(v||'');return Number.isFinite(n)?n:0;}
 function localVersion(){
  const header=document.getElementById('pcp-version-header');
  const hm=header&&header.textContent.match(/v?(\d+\.\d+(?:\.\d+)?)/i);if(hm)return hm[1];
  const small=document.querySelector('.pcp-brand h1 small');
  const sm=small&&small.textContent.match(/v?(\d+\.\d+(?:\.\d+)?)/i);if(sm)return sm[1];
  const footer=document.getElementById('pcp-version-footer');
  const fm=footer&&footer.textContent.match(/(?:v|versión\s*)(\d+\.\d+(?:\.\d+)?)/i);if(fm)return fm[1];
  return '2.0';
 }
 function chooseAsset(release){
  const assets=Array.isArray(release.assets)?release.assets.filter(a=>a&&a.state==='uploaded'&&/\.zip$/i.test(a.name||'')):[];
  if(!assets.length)return null;
  const score=a=>/windows.*(installer|setup).*\.zip$/i.test(a.name||'')?5:/installer.*\.zip$/i.test(a.name||'')?4:/print.?cost.?profit.*\.zip$/i.test(a.name||'')?3:1;
  return assets.sort((a,b)=>score(b)-score(a)||parseTime(b.updated_at||b.created_at)-parseTime(a.updated_at||a.created_at))[0];
 }
 function assetRecord(release){
  const asset=chooseAsset(release);if(!asset)return null;
  return {release,asset,fingerprint:[asset.id,asset.updated_at||asset.created_at||'',asset.size||0,asset.name||''].join('|'),uploadedAt:parseTime(asset.updated_at||asset.created_at)};
 }
 async function releases(){
  const r=await fetch(API,{cache:'no-store',headers:{Accept:'application/vnd.github+json'}});
  if(!r.ok)throw new Error('GitHub HTTP '+r.status);
  const data=await r.json();if(!Array.isArray(data))throw new Error('Respuesta de GitHub no válida');
  return data.filter(x=>x&&!x.draft&&!x.prerelease);
 }
 function latestUploaded(list){
  return list.map(assetRecord).filter(Boolean).sort((a,b)=>b.uploadedAt-a.uploadedAt||Number(b.asset.id)-Number(a.asset.id))[0]||null;
 }
 async function baseline(list){
  if(baselinePromise)return baselinePromise;
  baselinePromise=(async()=>{
   let stored=null;try{stored=JSON.parse(localStorage.getItem(BASELINE_KEY)||'null');}catch(_){}
   if(stored&&stored.fingerprint&&String(stored.tag||'').toLowerCase()===BASELINE_TAG.toLowerCase())return stored;
   const bridge=list.find(r=>String(r.tag_name||'').toLowerCase()===BASELINE_TAG.toLowerCase());
   const bridgeRecord=bridge&&assetRecord(bridge);
   if(bridgeRecord){
    const saved={fingerprint:bridgeRecord.fingerprint,uploadedAt:bridgeRecord.uploadedAt,assetId:bridgeRecord.asset.id,tag:bridgeRecord.release.tag_name};
    try{localStorage.setItem(BASELINE_KEY,JSON.stringify(saved));}catch(_){}
    return saved;
   }
   if(stored&&stored.fingerprint)return stored;
   const current=latestUploaded(list);
   if(current){try{localStorage.setItem(BASELINE_KEY,JSON.stringify({fingerprint:current.fingerprint,uploadedAt:current.uploadedAt,assetId:current.asset.id,tag:current.release.tag_name}));}catch(_){}}
   return current;
  })();
  return baselinePromise;
 }
 function isNewUpload(current,base){
  if(!current||!base)return false;
  if(current.fingerprint===base.fingerprint)return false;
  const currentId=Number(current.asset.id)||0,baseId=Number(base.assetId||String(base.fingerprint||'').split('|')[0])||0;
  return current.uploadedAt>(Number(base.uploadedAt)||0)||currentId>baseId;
 }
 function updateLabel(record){
  return String(record.release.name||record.release.tag_name||'Actualización de Print Cost & Profit 2.0').trim();
 }
 function notify(record){
  const label=updateLabel(record),url=record.asset.browser_download_url||record.release.html_url;
  window.dispatchEvent(new CustomEvent('pcp-update-available',{detail:{version:label,url,fingerprint:record.fingerprint}}));
 }
 function showAutomaticNotice(record){
  if(!record||!isNewUpload(record,window.__PCP_UPDATE_BASELINE__))return;
  notify(record);
  if(!notificationsEnabled()||sessionStorage.getItem(DISMISS_KEY)===record.fingerprint||document.getElementById('pcp-update-notice'))return;
  const style=document.createElement('style');
  style.textContent='#pcp-update-notice{display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin:12px auto;padding:14px 16px;max-width:1500px;border:1px solid #d89a32;border-left:5px solid #e4a43b;border-radius:12px;background:rgba(229,164,59,.12);color:var(--text,#e8edf5)}#pcp-update-notice .copy{flex:1;min-width:220px}#pcp-update-notice p{margin:4px 0 0;font-size:13px;color:var(--muted,#aab4c4)}#pcp-update-notice a,#pcp-update-notice button{padding:9px 13px;border-radius:8px;cursor:pointer}#pcp-update-notice a{background:#d99a32;color:#172033;font-weight:700;text-decoration:none}';
  document.head.appendChild(style);
  const box=document.createElement('section');box.id='pcp-update-notice';box.setAttribute('role','status');
  const copy=document.createElement('div');copy.className='copy';const title=document.createElement('strong');title.textContent=t('Hay una nueva versión de Print Cost & Profit disponible');
  const detail=document.createElement('p');detail.textContent=t('Versión instalada: {installed} · Nueva versión: {latest}. Antes de actualizar, crea una copia de seguridad de tus datos.').replace('{installed}',localVersion()).replace('{latest}',label);copy.append(title,detail);
  const a=document.createElement('a');a.href=record.asset.browser_download_url||record.release.html_url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=t('Ver actualización y descargar');
  const close=document.createElement('button');close.type='button';close.textContent=t('Recordármelo más tarde');close.addEventListener('click',()=>{sessionStorage.setItem(DISMISS_KEY,record.fingerprint);box.remove();});
  box.append(copy,a,close);const header=document.querySelector('header');if(header)header.insertAdjacentElement('afterend',box);else document.body.prepend(box);
 }
 function notificationsEnabled(){try{const value=JSON.parse(localStorage.getItem('pcp_notification_settings_v1')||'{}');return value.updates!==false;}catch(_){return true;}}
 async function checkForUpload(){
  const list=await releases(),base=await baseline(list),latest=latestUploaded(list);
  window.__PCP_UPDATE_BASELINE__=base;
  return {base,latest,available:isNewUpload(latest,base)};
 }
 async function automaticCheck(){
  if(autoBusy||!navigator.onLine)return;autoBusy=true;
  try{const result=await checkForUpload();if(result.available)showAutomaticNotice(result.latest);}catch(_){}finally{autoBusy=false;}
 }
 function setupOptions(){
  const versionEl=document.getElementById('pcpInstalledVersion'),button=document.getElementById('pcpCheckUpdates'),status=document.getElementById('pcpUpdateStatus'),link=document.getElementById('pcpUpdateDownload');
  if(versionEl)versionEl.textContent=localVersion();
  if(!button||button.dataset.ready==='1')return;button.dataset.ready='1';if(link){link.hidden=true;link.style.display='none';}
  button.addEventListener('click',async()=>{
   if(manualBusy)return;manualBusy=true;button.disabled=true;if(status)status.textContent=t('Comprobando actualizaciones…');
   if(link){link.hidden=true;link.style.display='none';link.removeAttribute('href');}
   try{
    const result=await checkForUpload();
    if(result.available){
     const record=result.latest,label=updateLabel(record);notify(record);
     if(status)status.textContent=t('Hay una actualización disponible: v{latest}.').replace('{latest}',label);
     if(link){link.href=record.asset.browser_download_url||record.release.html_url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=t('Descargar versión {latest}').replace('{latest}',label);link.hidden=false;link.style.display='inline-flex';}
    }else if(status){status.textContent=t('No hay una versión más reciente publicada en GitHub.');}
   }catch(e){if(status)status.textContent=t('No se pudo comprobar si hay actualizaciones. Comprueba tu conexión a Internet.');}
   finally{manualBusy=false;button.disabled=false;}
  });
 }
 function start(){setupOptions();automaticCheck();setInterval(automaticCheck,INTERVAL);window.addEventListener('online',automaticCheck);}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
