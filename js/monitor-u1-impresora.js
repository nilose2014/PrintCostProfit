
(function(){
 const el=id=>document.getElementById(id); const ipInput=el('pcpU1PrinterIp'); const select=el('pcpU1PrinterSelect'); const status=el('pcpPrinterStatus');
 if(!ipInput||!select||!status)return;
 const root=()=>{const v=((el('pcpPrinterUrl')&&el('pcpPrinterUrl').value)||'http://127.0.0.1:8700').trim().replace(/\/+$/,'');return v||'http://127.0.0.1:8700'};
 const tr=(key,values={})=>window.PCP_I18N&&window.PCP_I18N.format?window.PCP_I18N.format(key,values):key; const say=t=>{status.textContent=t;status.style.display='block'};
 const quick=el('u1-quick-printer');
 function syncQuickSelect(){if(!quick||!select)return;const current=select.value;const opts=[...select.options];quick.innerHTML='';opts.forEach(o=>quick.add(new Option(o.textContent,o.value)));quick.value=current;quick.disabled=select.disabled||opts.filter(o=>o.value).length===0;}
 if(quick){quick.addEventListener('change',()=>{if(!quick.value)return;select.value=quick.value;select.dispatchEvent(new Event('change',{bubbles:true}));});select.addEventListener('change',syncQuickSelect);new MutationObserver(syncQuickSelect).observe(select,{childList:true,subtree:true,characterData:true});syncQuickSelect();}
 const DISCOVERED_KEY='pcp_u1_discovered_printers';
 let selectionSequence=0,selectionQueue=Promise.resolve(),selectionController=null;
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
  const map=new Map(savedPrinters.map(p=>[p.ip,p]));let identityChanged=false;
  (list||[]).forEach(p=>{
   if(!p||!p.ip)return;
   const prev=map.get(p.ip)||{};
   // SQLite conserva solo identidad estable. online/state cambian durante cada
   // sondeo y pertenecen a memoria, nunca a la lista persistente de impresoras.
   const next={...prev,ip:p.ip,hostname:p.hostname||prev.hostname||'',softwareVersion:p.softwareVersion||prev.softwareVersion||'',model:p.model||prev.model||''};
   if(!prev.ip||next.hostname!==prev.hostname||next.softwareVersion!==prev.softwareVersion||next.model!==prev.model)identityChanged=true;
   // El estado vivo se conserva para la interfaz sin convertirlo en una escritura.
   next.online=p.online!==undefined?p.online:prev.online;
   next.state=p.state||prev.state||'';
   map.set(p.ip,next);
  });
  savedPrinters=Array.from(map.values());
  if(!storageReady||!identityChanged)return;
  const stable=savedPrinters.map(p=>({ip:p.ip,hostname:p.hostname||'',softwareVersion:p.softwareVersion||'',model:p.model||''}));
  try{localStorage.setItem(DISCOVERED_KEY,JSON.stringify(stable));}catch(e){say(tr('No se pudo guardar la lista de impresoras: {message}',{message:e.message}));}
 };

 const req=async(url,ms=20000)=>{if(window.PCP_PRINTER_DIRECT&&new URL(url,location.href).pathname.startsWith('/api/u1/'))return window.PCP_PRINTER_DIRECT.fetch(url);const c=new AbortController(),t=setTimeout(()=>c.abort(),ms);try{return await fetch(url,{cache:'no-store',signal:c.signal})}finally{clearTimeout(t)}};
 function render(printers,selected){
 const previous=[...readSaved(),...Array.from(select.options).filter(o=>o.value).map(o=>({ip:o.value,hostname:o.dataset.hostname||o.textContent.split(' · ')[1]||'',softwareVersion:o.dataset.softwareVersion||''}))];
 const merged=new Map();previous.forEach(p=>merged.set(p.ip,p));(printers||[]).forEach(p=>{const old=merged.get(p.ip)||{};merged.set(p.ip,{...old,...p,hostname:p.hostname||old.hostname,softwareVersion:p.softwareVersion||old.softwareVersion})});
 const list=Array.from(merged.values());saveDiscovered(list);select.innerHTML='';
 if(!list.length){select.add(new Option(tr('No se han encontrado impresoras'),''));return}
 select.add(new Option(tr('Selecciona una impresora…'),''));
 list.forEach(p=>{const offline=p.online===false||String(p.state||'').toLowerCase()==='offline';let aliases={};try{aliases=JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}')||{}}catch(_){}
  const alias=String(aliases[p.ip]||'').trim();
  const rawName=String(p.model||p.printerModel||p.name||p.printerName||'').trim();
  const safeModel=/^[\p{L}\p{N} ._-]{2,40}$/u.test(rawName)&&!/(dirty|unknown|offline|sin conexión)/i.test(rawName)?rawName:'';
  const displayName=alias||safeModel||('Impresora · '+p.ip);
  const label=displayName;
  const o=new Option(label,p.ip);o.dataset.hostname='';o.dataset.softwareVersion='';o.dataset.displayName=displayName;select.add(o)});
 if(selected&&list.some(p=>p.ip===selected))select.value=selected;syncQuickSelect();
}
async function useIp(ip){
  ip=String(ip||'').trim();
  if(!ip)throw new Error('IP no válida');
  const requestId=++selectionSequence;
  if(selectionController){try{selectionController.abort('superseded')}catch(_){}}
  const controller=new AbortController();
  selectionController=controller;
  select.value=ip;ipInput.value=ip;
  try{
    localStorage.setItem('pcp_u1_manual_ip_v180',ip);
    localStorage.setItem('pcp_printers_detail_selected_ip',ip);
  }catch(_){}
  // La selección se publica inmediatamente. El estado se consulta después
  // directamente contra la IP elegida, sin reconfigurar un trabajador global.
  window.dispatchEvent(new CustomEvent('pcp-u1-printer-changed',{detail:{ip,online:null,pending:true}}));
  say(tr('Consultando impresora {ip}…',{ip}));
  let timeout=null;
  try{
    const url=root()+'/api/u1/config?ip='+encodeURIComponent(ip)+'&t='+Date.now();
    timeout=setTimeout(()=>{try{controller.abort('timeout')}catch(_){}},4000);
    const r=await fetch(url,{cache:'no-store',signal:controller.signal});
    let d={};try{d=await r.json()}catch(_){}
    if(requestId!==selectionSequence||controller.signal.aborted)return true;
    if(!r.ok||!d.ok||String(d.ip||'')!==ip)throw new Error(d.error||tr('No se pudo seleccionar la impresora')+' (HTTP '+r.status+')');
    window.dispatchEvent(new CustomEvent('pcp-u1-printer-changed',{detail:{ip,online:null,confirmed:true}}));
    return true;
  }catch(error){
    if(requestId!==selectionSequence||controller.signal.aborted&&controller.signal.reason==='superseded')return true;
    const message=controller.signal.aborted?tr('No se pudo seleccionar la impresora'):String(error&&error.message?error.message:error);
    window.dispatchEvent(new CustomEvent('pcp-u1-printer-changed',{detail:{ip,failed:true,error:message}}));
    throw new Error(message);
  }finally{
    if(timeout)clearTimeout(timeout);
    if(selectionController===controller)selectionController=null;
  }
 }
 // Punto único de selección: las tarjetas no simulan un cambio del selector;
 // invocan directamente la misma operación que configura el puente U1.
 window.PCPSelectU1Printer=async function(ip){ip=String(ip||'').trim();if(!ip)throw new Error('IP no válida');let option=[...select.options].find(o=>o.value===ip);if(!option){option=new Option('Impresora · '+ip,ip);select.add(option);}select.value=ip;syncQuickSelect();return await useIp(ip);};
 select.addEventListener('change',async()=>{if(!select.value)return;const requested=String(select.value).trim();select.disabled=true;say(tr('Conectando con {ip}…',{ip:requested}));try{await window.PCPSelectU1Printer(requested);}catch(e){if(String(select.value).trim()===requested)say(tr('No se pudo seleccionar la impresora: {message}',{message:e.message}));}finally{select.disabled=false;syncQuickSelect()}});
 async function autoDetect(){
  await loadPrinterStore();
  const saved=localStorage.getItem('pcp_u1_manual_ip_v180')||localStorage.getItem('pcp_u1_manual_ip_v178')||localStorage.getItem('pcp_u1_manual_ip_v177')||localStorage.getItem('pcp_u1_manual_ip_v176')||'';
  const known=readSaved();
  let current=saved||(known[0]&&known[0].ip)||'', verified=null, configSynced=!current, configError='';
  // Al reiniciar el puente, su IP activa puede no coincidir con la última selección
  // guardada por la interfaz. Restauramos primero esa selección en el servidor.
  if(current){
   ipInput.value=current;
   say(tr('Conectando con {ip}…',{ip:current}));
   try{
    const cr=await req(root()+'/api/u1/config?ip='+encodeURIComponent(current)+'&t='+Date.now(),7000),cd=await cr.json();
    if(!cr.ok||!cd.ok)throw new Error(cd.error||('HTTP '+cr.status));
    configSynced=true;
   }catch(e){configError=e.message||String(e);say(tr('No se pudo seleccionar la impresora: {message}',{message:configError}));}
  }
  if(configSynced){
   try{
    const r=await req(root()+'/api/u1/printer?ip='+encodeURIComponent(current||ipInput.value.trim())+'&t='+Date.now(),6000),d=await r.json();
    if(r.ok&&d.ok&&d.ip){
     current=d.ip;verified=d;ipInput.value=d.ip;
     saveDiscovered([{ip:d.ip,hostname:d.name||'',softwareVersion:d.softwareVersion||'',online:d.online!==false,state:d.online===false?'offline':'ready'}]);
    }
   }catch(_){}
  }
  if(current&&!known.some(p=>p.ip===current))known.push({ip:current,hostname:tr('Impresora configurada')});
  render(known,current);
  if(verified&&verified.online!==false)say(tr('IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file}{software}.',{name:verified.name||'Snapmaker U1',ip:verified.ip,state:verified.state||tr('desconocido'),file:verified.filename||tr('ninguno'),software:verified.softwareVersion?' · Software: '+verified.softwareVersion:''}));
  else if(verified&&verified.online===false)say(tr('IMPRESORA SIN CONEXIÓN · {ip}. Se conserva seleccionada y aparecerá conectada cuando vuelva a responder.',{ip:verified.ip||current}));
  else if(!configSynced)say(tr('No se pudo seleccionar la impresora: {message}',{message:configError||window.PCP_I18N?.t('Error de conexión')||'Error de conexión'}));
  else if(known.length)say(tr('Se han cargado {count} impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».',{count:known.length}));
  else say(tr('No hay impresoras guardadas todavía. Pulsa «Buscar automáticamente» para descubrir las impresoras de la red.'));
 }
 const discover=el('pcpDiscoverU1');if(discover){const clone=discover.cloneNode(true);discover.parentNode.replaceChild(clone,discover);clone.addEventListener('click',async()=>{clone.disabled=true;say(tr('Buscando todas las impresoras compatibles en la red local…'));try{const r=await req(root()+'/api/u1/discover?t='+Date.now(),25000);const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||('HTTP '+r.status));const list=Array.isArray(d.printers)?d.printers:[];const configured=ipInput.value.trim();if(configured&&!list.some(p=>p.ip===configured)){list.unshift({ip:configured,hostname:tr('Impresora configurada'),online:false,state:'offline'});}render(list,d.ip||configured||'');if(list.length===1){ipInput.value=list[0].ip;await useIp(list[0].ip);if(list[0].online===false||list[0].state==='offline')say(tr('Impresora encontrada pero está sin conexión: {ip}. Se conserva en la lista.',{ip:list[0].ip}));else say(tr('Impresora encontrada y configurada: {ip}.',{ip:list[0].ip}))}else if(list.length>1){say(tr('Se encontraron {count} impresoras. Selecciona la que quieres usar en el desplegable.',{count:list.length}))}else say(d.message||tr('No se encontraron impresoras'))}catch(e){say(tr('Error durante la búsqueda: {message}',{message:e.message}))}finally{clone.disabled=false}})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',autoDetect,{once:true});else setTimeout(autoDetect,250);
})();
