
(function(){
 const el=id=>document.getElementById(id); const ipInput=el('pcpU1PrinterIp'); const select=el('pcpU1PrinterSelect'); const status=el('pcpPrinterStatus');
 if(!ipInput||!select||!status)return;
 const root=()=>{const v=((el('pcpPrinterUrl')&&el('pcpPrinterUrl').value)||'http://127.0.0.1:8700').trim().replace(/\/+$/,'');return v||'http://127.0.0.1:8700'};
 const tr=(key,values={})=>window.PCP_I18N&&window.PCP_I18N.format?window.PCP_I18N.format(key,values):key; const say=t=>{status.textContent=t;status.style.display='block'};
 const quick=el('u1-quick-printer');
 function syncQuickSelect(){if(!quick||!select)return;const current=select.value;const opts=[...select.options];quick.innerHTML='';opts.forEach(o=>quick.add(new Option(o.textContent,o.value)));quick.value=current;quick.disabled=select.disabled||opts.filter(o=>o.value).length===0;}
 if(quick){quick.addEventListener('change',()=>{if(!quick.value)return;select.value=quick.value;select.dispatchEvent(new Event('change',{bubbles:true}));});select.addEventListener('change',syncQuickSelect);new MutationObserver(syncQuickSelect).observe(select,{childList:true,subtree:true,characterData:true});syncQuickSelect();}
 const DISCOVERED_KEY='pcp_u1_discovered_printers';
 let sqliteRevision=0, savedPrinters=[], storageReady=false, pendingSave=Promise.resolve();
 async function loadPrinterStore(){
  try{
   const r=await req(root()+'/api/storage/snapshot?t='+Date.now(),8000),d=await r.json();
   if(!r.ok||!d.ok)throw new Error(d.error||('HTTP '+r.status));
   const stored=d.values&&d.values[DISCOVERED_KEY];let raw=stored;
   if(typeof raw==='string'){try{raw=JSON.parse(raw)}catch(_){raw=[]}}
   savedPrinters=Array.isArray(raw)?raw.filter(p=>p&&p.ip):[];
   sqliteRevision=Number(d.revisions&&d.revisions[DISCOVERED_KEY])||0;
   storageReady=true;return savedPrinters.slice();
  }catch(e){
   storageReady=false;
   // Compatibility: show any old browser-saved list if SQLite is temporarily unavailable,
   // but never write new data to browser storage.
   try{const a=JSON.parse(localStorage.getItem('pcp_u1_discovered_printers_v1385')||'[]');return Array.isArray(a)?a.filter(p=>p&&p.ip):[]}catch(_){return []}
  }
 }
 const readSaved=()=>savedPrinters.slice();
 const saveDiscovered=list=>{
  const map=new Map(savedPrinters.map(p=>[p.ip,p]));
  (list||[]).forEach(p=>{if(p&&p.ip){const prev=map.get(p.ip)||{};map.set(p.ip,{...prev,...p,hostname:p.hostname||prev.hostname||'',softwareVersion:p.softwareVersion||prev.softwareVersion||'',lastSeen:new Date().toISOString()})}});
  savedPrinters=Array.from(map.values());
  if(!storageReady)return;
  pendingSave=pendingSave.then(async()=>{
   const snap=await req(root()+'/api/storage/snapshot?t='+Date.now(),8000),sd=await snap.json();
   if(!snap.ok||!sd.ok)throw new Error(sd.error||tr('No se pudo leer SQLite'));
   const revision=Number(sd.revisions&&sd.revisions[DISCOVERED_KEY])||0;
   const wr=await fetch(root()+'/api/storage/write',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:DISCOVERED_KEY,value:JSON.stringify(savedPrinters),expectedRevision:revision}),cache:'no-store'});
   const wd=await wr.json();if(!wr.ok||!wd.ok)throw new Error(wd.error||tr('No se pudo guardar la lista en SQLite'));
   sqliteRevision=Number(wd.revision)||revision+1;
  }).catch(e=>say(tr('No se pudo guardar la lista de impresoras en SQLite: {message}',{message:e.message})));
 };

 const req=async(url,ms=20000)=>{const c=new AbortController(),t=setTimeout(()=>c.abort(),ms);try{return await fetch(url,{cache:'no-store',signal:c.signal})}finally{clearTimeout(t)}};
 function render(printers,selected){
 const previous=[...readSaved(),...Array.from(select.options).filter(o=>o.value).map(o=>({ip:o.value,hostname:o.dataset.hostname||o.textContent.split(' · ')[1]||'',softwareVersion:o.dataset.softwareVersion||''}))];
 const merged=new Map();previous.forEach(p=>merged.set(p.ip,p));(printers||[]).forEach(p=>{const old=merged.get(p.ip)||{};merged.set(p.ip,{...old,...p,hostname:p.hostname||old.hostname,softwareVersion:p.softwareVersion||old.softwareVersion})});
 const list=Array.from(merged.values());saveDiscovered(list);select.innerHTML='';
 if(!list.length){select.add(new Option(tr('No se han encontrado impresoras'),''));return}
 select.add(new Option(tr('Selecciona una impresora…'),''));
 list.forEach(p=>{const label=p.ip+(p.hostname?' · '+p.hostname:'')+(p.softwareVersion?' · '+p.softwareVersion:'');const o=new Option(label,p.ip);o.dataset.hostname=p.hostname||'';o.dataset.softwareVersion=p.softwareVersion||'';select.add(o)});
 if(selected&&list.some(p=>p.ip===selected))select.value=selected;syncQuickSelect();
}
async function useIp(ip){if(!ip)return;ipInput.value=ip;try{localStorage.setItem('pcp_u1_manual_ip_v180',ip);localStorage.setItem('pcp_u1_manual_ip_v178',ip);localStorage.setItem('pcp_u1_manual_ip_v177',ip);localStorage.setItem('pcp_u1_manual_ip_v176',ip)}catch(_){}const r=await req(root()+'/api/u1/config?ip='+encodeURIComponent(ip)+'&t='+Date.now(),7000);let d={};try{d=await r.json()}catch(_){}if(!r.ok||!d.ok)throw new Error(d.error||('HTTP '+r.status));say(tr('Impresora seleccionada y conectada: {ip}.',{ip}));window.dispatchEvent(new CustomEvent('pcp-u1-printer-changed',{detail:{ip}}));}
 select.addEventListener('change',async()=>{if(!select.value)return;select.disabled=true;say(tr('Conectando con {ip}…',{ip:select.value}));try{await useIp(select.value);const r=await req(root()+'/api/u1/printer?t='+Date.now(),6000);const d=await r.json();if(d.ok)say(tr('IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file}{software}.',{name:d.name||'Snapmaker U1',ip:d.ip,state:d.state||tr('desconocido'),file:d.filename||tr('ninguno'),software:d.softwareVersion?' · Software: '+d.softwareVersion:''}));}catch(e){say(tr('No se pudo seleccionar la impresora: {message}',{message:e.message}))}finally{select.disabled=false;syncQuickSelect()}});
 async function autoDetect(){
  await loadPrinterStore();
  const saved=localStorage.getItem('pcp_u1_manual_ip_v180')||localStorage.getItem('pcp_u1_manual_ip_v178')||localStorage.getItem('pcp_u1_manual_ip_v177')||localStorage.getItem('pcp_u1_manual_ip_v176')||'';
  const known=readSaved();
  let current=saved;
  try{
   const r=await req(root()+'/api/u1/printer?t='+Date.now(),6000),d=await r.json();
   if(r.ok&&d.ok&&d.ip){current=d.ip;ipInput.value=d.ip;saveDiscovered([{ip:d.ip,hostname:d.name||'',softwareVersion:d.softwareVersion||''}]);}
  }catch(_){}
  if(current&&!known.some(p=>p.ip===current))known.push({ip:current,hostname:tr('Impresora configurada')});
  render(known,current);
  if(known.length)say(tr('Se han cargado {count} impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».',{count:known.length}));
  else say(tr('No hay impresoras guardadas todavía. Pulsa «Buscar automáticamente» para descubrir las impresoras de la red.'));
 }
 const discover=el('pcpDiscoverU1');if(discover){const clone=discover.cloneNode(true);discover.parentNode.replaceChild(clone,discover);clone.addEventListener('click',async()=>{clone.disabled=true;say(tr('Buscando todas las impresoras compatibles en la red local…'));try{const r=await req(root()+'/api/u1/discover?t='+Date.now(),25000);const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||('HTTP '+r.status));const list=Array.isArray(d.printers)?d.printers:[];const configured=ipInput.value.trim();if(configured&&!list.some(p=>p.ip===configured)){list.unshift({ip:configured,hostname:tr('Impresora configurada')});}render(list,d.ip||configured||'');if(list.length===1){ipInput.value=list[0].ip;await useIp(list[0].ip);say(tr('Impresora encontrada y configurada: {ip}.',{ip:list[0].ip}))}else if(list.length>1){say(tr('Se encontraron {count} impresoras. Selecciona la que quieres usar en el desplegable.',{count:list.length}))}else say(d.message||tr('No se encontraron impresoras'))}catch(e){say(tr('Error durante la búsqueda: {message}',{message:e.message}))}finally{clone.disabled=false}})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',autoDetect,{once:true});else setTimeout(autoDetect,250);
})();
