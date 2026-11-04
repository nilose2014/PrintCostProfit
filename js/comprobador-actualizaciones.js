/* Print Cost & Profit v1.4 — comprobación automática y manual de actualizaciones desde GitHub Releases. */
(function(){
 'use strict';
 const API='https://api.github.com/repos/nilose2014/PrintCostProfit/releases/latest';
 const INTERVAL=6*60*60*1000, KEY='pcp.update.dismissed';
 let autoBusy=false,manualBusy=false;
 function t(s){return window.PCP_I18N&&typeof window.PCP_I18N.t==='function'?window.PCP_I18N.t(s):s;}
 function parts(v){const m=String(v||'').trim().replace(/^v/i,'').match(/^(\d+)\.(\d+)(?:\.(\d+))?/);return m?m.slice(1).map(Number):null;}
 function newer(a,b){a=parts(a);b=parts(b);if(!a||!b)return false;for(let i=0;i<3;i++){const av=a[i]??0,bv=b[i]??0;if(av>bv)return true;if(av<bv)return false;}return false;}
 async function localVersion(){
  const header=document.getElementById('pcp-version-header');
  const hm=header&&header.textContent.match(/v?(\d+\.\d+(?:\.\d+)?)/i);if(hm)return hm[1];
  const footer=document.getElementById('pcp-version-footer');
  const fm=footer&&footer.textContent.match(/(?:v|versión\s*)(\d+\.\d+(?:\.\d+)?)/i);if(fm)return fm[1];
  try{const r=await fetch('/api/version',{cache:'no-store'});if(r.ok){const d=await r.json();if(d.version)return String(d.version);}}catch(_){}
  return null;
 }
 async function latestRelease(){
  const r=await fetch(API,{cache:'no-store',headers:{Accept:'application/vnd.github+json'}});
  if(!r.ok)throw new Error('GitHub HTTP '+r.status);
  const rel=await r.json();if(!rel||rel.draft||rel.prerelease||!rel.tag_name)throw new Error('No hay una publicación estable.');
  return rel;
 }
 function showAutomaticNotice(rel,installed){
  const tag=String(rel.tag_name||'').trim(),latest=tag.replace(/^v/i,'');
  if(!rel.html_url||!newer(latest,installed)||sessionStorage.getItem(KEY)===tag||document.getElementById('pcp-update-notice'))return;
  const style=document.createElement('style');
  style.textContent='#pcp-update-notice{display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin:12px auto;padding:14px 16px;max-width:1500px;border:1px solid #d89a32;border-left:5px solid #e4a43b;border-radius:12px;background:rgba(229,164,59,.12);color:var(--text,#e8edf5)}#pcp-update-notice .copy{flex:1;min-width:220px}#pcp-update-notice p{margin:4px 0 0;font-size:13px;color:var(--muted,#aab4c4)}#pcp-update-notice a,#pcp-update-notice button{padding:9px 13px;border-radius:8px;cursor:pointer}#pcp-update-notice a{background:#d99a32;color:#172033;font-weight:700;text-decoration:none}';
  document.head.appendChild(style);
  const box=document.createElement('section');box.id='pcp-update-notice';box.setAttribute('role','status');
  const copy=document.createElement('div');copy.className='copy';const title=document.createElement('strong');title.textContent=t('Hay una nueva versión de Print Cost & Profit disponible');
  const detail=document.createElement('p');detail.textContent=t('Versión instalada: {installed} · Nueva versión: {latest}. Antes de actualizar, crea una copia de seguridad de tus datos.').replace('{installed}',installed).replace('{latest}',latest);copy.append(title,detail);
  const a=document.createElement('a');a.href=rel.html_url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=t('Ver actualización y descargar');
  const close=document.createElement('button');close.type='button';close.textContent=t('Recordármelo más tarde');close.addEventListener('click',()=>{sessionStorage.setItem(KEY,tag);box.remove();});
  box.append(copy,a,close);const header=document.querySelector('header');if(header)header.insertAdjacentElement('afterend',box);else document.body.prepend(box);
 }
 async function automaticCheck(){if(autoBusy||!navigator.onLine)return;autoBusy=true;try{const installed=await localVersion();if(!installed)return;const rel=await latestRelease();showAutomaticNotice(rel,installed);}catch(_){}finally{autoBusy=false;}}
 function setupOptions(){
  const versionEl=document.getElementById('pcpInstalledVersion'),button=document.getElementById('pcpCheckUpdates'),status=document.getElementById('pcpUpdateStatus'),link=document.getElementById('pcpUpdateDownload');
  if(!button||button.dataset.ready==='1')return;button.dataset.ready='1';if(link){link.hidden=true;link.style.display='none';}
  localVersion().then(v=>{if(versionEl&&v)versionEl.textContent=v;});
  button.addEventListener('click',async()=>{
   if(manualBusy)return;manualBusy=true;button.disabled=true;if(status)status.textContent=t('Comprobando actualizaciones…');
   if(link){link.hidden=true;link.style.display='none';link.removeAttribute('href');}
   try{
    const installed=await localVersion();if(!installed)throw new Error('No se pudo leer la versión local.');
    if(versionEl)versionEl.textContent=installed;
    const rel=await latestRelease(),latest=String(rel.tag_name).replace(/^v/i,'');
    if(newer(latest,installed)){
     if(status)status.textContent=t('Hay una actualización disponible: v{latest}.').replace('{latest}',latest);
     const assets=rel.assets||[];const asset=assets.find(a=>/windows.*installer.*\.zip$/i.test(a.name||''))||assets.find(a=>/installer.*\.zip$/i.test(a.name||''));
     if(link){link.href=asset&&asset.browser_download_url?asset.browser_download_url:rel.html_url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=t('Descargar versión {latest}').replace('{latest}',latest);link.hidden=false;link.style.display='inline-flex';}
    }else if(status){status.textContent=t('No hay una versión más reciente publicada en GitHub.');}
   }catch(e){if(status)status.textContent=t('No se pudo comprobar si hay actualizaciones. Comprueba tu conexión a Internet.');}
   finally{manualBusy=false;button.disabled=false;}
  });
 }
 function start(){setupOptions();automaticCheck();setInterval(automaticCheck,INTERVAL);window.addEventListener('online',automaticCheck);}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
