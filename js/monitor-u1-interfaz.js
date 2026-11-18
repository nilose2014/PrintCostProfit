
(function(){'use strict';const $=id=>document.getElementById(id);
 // Electron puede ejecutar el renderer sin el diálogo global alert. Mantener una salida segura
 // para que una notificación nunca interrumpa el sondeo de la impresora.
 function alert(message){const text=String(message??'');try{if(typeof window.alert==='function'){window.alert(text);return;}}catch(e){}try{const note=$('u1-error');if(note)note.textContent=text;else console.warn('[PCP Monitor]',text);}catch(e){console.warn('[PCP Monitor]',text)}}
 let minimized=false;
// Keep monitor outside tab panes: some app navigation hides/rebuilds the active section.
function pinPanelToBody(){const panel=document.getElementById('u1-monitor-panel');if(panel&&panel.parentElement!==document.body){document.body.appendChild(panel);}}
pinPanelToBody();window.addEventListener('DOMContentLoaded',pinPanelToBody);setTimeout(pinPanelToBody,0);
const u1Observer=new MutationObserver(()=>{if(!document.getElementById('u1-monitor-panel')){return;}pinPanelToBody();});u1Observer.observe(document.documentElement,{childList:true,subtree:true});
function duration(n){if(!Number.isFinite(n)||n<0)return '—';return Math.floor(n/3600)+' h '+String(Math.floor(n%3600/60)).padStart(2,'0')+' min'}
function u1AgeLabel(value){const stamp=Date.parse(value||'');if(!Number.isFinite(stamp)||stamp>Date.now()+60000)return 'fecha de estado desconocida';const seconds=Math.max(0,Math.floor((Date.now()-stamp)/1000));return seconds<60?'hace '+seconds+' s':seconds<3600?'hace '+Math.floor(seconds/60)+' min':'hace '+Math.floor(seconds/3600)+' h '+String(Math.floor(seconds%3600/60)).padStart(2,'0')+' min'}
let u1MetadataFile='';let u1GcodeReadDone='';let u1GcodeReadInFlight='';let u1GcodeRetryAfter=0;let u1PollBusy=false;let u1PollRequested=false;let u1PollController=null;const u1GcodeJobs=new Map();let u1GcodeReadGeneration=0;let u1PollGeneration=0;
// v1.409: cerrar registros provisionales antiguos al confirmar otro archivo activo en la U1.
let lastU1State='', lastU1File='', u1LastProgress=0;
function u1RefreshMonitorTitle(ipHint){
 const title=$('u1-monitor-title');if(!title)return;
 let ip=String(ipHint||'').trim();
 if(!ip){const sel=$('pcpU1PrinterSelect');ip=String((sel&&sel.value)||localStorage.getItem('pcp_u1_manual_ip_v180')||localStorage.getItem('pcp_u1_manual_ip_v178')||localStorage.getItem('pcp_u1_manual_ip')||'').trim();}
 let aliases={};try{aliases=JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}')}catch(_){}
 const alias=ip&&typeof aliases[ip]==='string'?aliases[ip].trim():'';
 title.textContent=(alias||'Snapmaker U1')+' · MONITOR';
 title.title=ip?(window.PCP_I18N?.format('Impresora seleccionada · {ip}',{ip})||('Impresora seleccionada · '+ip)):(window.PCP_I18N?.t('Impresora seleccionada')||'Impresora seleccionada');
}
u1RefreshMonitorTitle();
window.addEventListener('storage',function(e){if(!e.key||e.key==='pcp_u1_printer_aliases'||e.key.indexOf('pcp_u1_manual_ip')===0)u1RefreshMonitorTitle();});
window.addEventListener('pcp-u1-printer-changed',function(e){u1RefreshMonitorTitle(e.detail&&e.detail.ip);});
function u1CancelGcodeJob(jobId){
 const id=String(jobId||'').trim();if(!/^[a-f0-9]{32}$/i.test(id))return;
 const apiBase=String(($('pcpPrinterUrl')&&$('pcpPrinterUrl').value)||'http://127.0.0.1:8700').trim().replace(/\/+$/,'')||'http://127.0.0.1:8700';
 (window.PCP_PRINTER_DIRECT?window.PCP_PRINTER_DIRECT.fetch(apiBase+'/api/u1/filaments/cancel?id='+encodeURIComponent(id)+'&t='+Date.now()):fetch(apiBase+'/api/u1/filaments/cancel?id='+encodeURIComponent(id)+'&t='+Date.now(),{cache:'no-store',keepalive:true})).catch(()=>{});
}
function u1CancelActiveGcodeRead(){
 for(const [generation,jobId] of u1GcodeJobs){u1GcodeJobs.delete(generation);u1CancelGcodeJob(jobId);}
}
window.addEventListener('pcp-u1-printer-changed',function(e){
  u1CancelActiveGcodeRead();
  // Cancelar el sondeo anterior antes de invalidar su generación.
  if(u1PollController){try{u1PollController.abort()}catch(e){}u1PollController=null;}
 u1GcodeReadGeneration++;u1PollGeneration++;
 lastU1State='';lastU1File='';u1MetadataFile='';u1GcodeReadDone='';u1GcodeReadInFlight='';u1GcodeRetryAfter=0;u1LastProgress=0;
 const active=u1ReadActive();
 // Mostrar inmediatamente el trabajo guardado para la impresora seleccionada.
 if(active)u1RenderConsumption(active);
 else{
  const rows=$('u1-consumption-rows');if(rows)rows.innerHTML='<tr><td colspan="3">'+(window.PCP_I18N?.t('Sin datos de consumo para esta impresora.')||'Sin datos de consumo para esta impresora.')+'</td></tr>';
  const summary=$('u1-consumption-summary');if(summary)summary.textContent=window.PCP_I18N?.t('No hay un trabajo guardado para esta impresora.')||'No hay un trabajo guardado para esta impresora.';
  const total=$('u1-consumption-total');if(total)total.textContent=window.PCP_I18N?.t('Total previsto: —')||'Total previsto: —';
 }
 // Mantener la identidad original del trabajo; cambiar de impresora no debe reasignarlo.
 if(active&&!active.printerName){active.printerName=u1ResolvePrinterAlias();try{u1WriteActive(active)}catch(e){}}
 ['u1-state','u1-file','u1-progress','u1-layers','u1-duration','u1-filament'].forEach(id=>{const node=$(id);if(node)node.textContent='—'});
 const conn=$('u1-connection');if(conn)conn.textContent=window.PCP_I18N?.t('La impresora cambió. Esperando el estado actualizado.')||'La impresora cambió. Esperando el estado actualizado.';
 const dot=$('u1-dot');if(dot)dot.className='u1-dot warn';
 const rows=$('u1-consumption-rows');if(rows)rows.innerHTML='<tr><td colspan="3">'+(window.PCP_I18N?.t('Consultando el consumo de la impresora seleccionada…')||'Consultando el consumo de la impresora seleccionada…')+'</td></tr>';
 const summary=$('u1-consumption-summary');if(summary)summary.textContent=window.PCP_I18N?.t('Esperando datos de la nueva impresora.')||'Esperando datos de la nueva impresora.';
 const total=$('u1-consumption-total');if(total)total.textContent=window.PCP_I18N?.t('Total previsto: —')||'Total previsto: —';
 u1SetNote(window.PCP_I18N?.t('La impresora cambió. Esperando el estado actualizado.')||'La impresora cambió. Esperando el estado actualizado.');
 // Mientras el puente configura la nueva IP no se consulta /status, porque
 // ese endpoint todavía podría devolver datos de la impresora anterior.
 if(e&&e.detail&&e.detail.pending)return;
 if(e&&e.detail&&e.detail.failed){const error=$('u1-error');if(error)error.textContent=String(e.detail.error||'No se pudo configurar la impresora seleccionada.');return;}
 setTimeout(poll,150);
});
async function u1LoadPrinterGcode(file){const fn=String(file||'').split(/[\\/]/).pop();if(!fn)return;const printerIp=u1SelectedPrinterIp();const identity=printerIp+'|'+fn;if(identity===u1GcodeReadDone||identity===u1GcodeReadInFlight)return;if(identity===u1MetadataFile&&Date.now()<u1GcodeRetryAfter)return;const readGeneration=++u1GcodeReadGeneration;const isCurrentRead=()=>readGeneration===u1GcodeReadGeneration&&printerIp===u1SelectedPrinterIp();u1MetadataFile=identity;u1GcodeReadInFlight=identity;const src=document.getElementById('u1-source-file');if(src)src.textContent=window.PCP_I18N.format('Fuente: leyendo G-code activo de {printer}: {file}',{printer:u1ResolvePrinterAlias(),file:fn});try{const wrap=document.getElementById('u1-read-progress-wrap'),bar=document.getElementById('u1-read-progress'),label=document.getElementById('u1-read-progress-label');if(wrap)wrap.style.display='block';if(bar)bar.value=0;if(label)label.textContent=window.PCP_I18N.format('Leyendo datos del G-code… {progress}%',{progress:0});const startUrl='/api/u1/filaments?ip='+encodeURIComponent(printerIp)+'&filenameB64='+encodeURIComponent(btoa(unescape(encodeURIComponent(fn))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''))+'&t='+Date.now();const r=window.PCP_PRINTER_DIRECT?await window.PCP_PRINTER_DIRECT.fetch(startUrl):await fetch(startUrl,{cache:'no-store'});if(!r.ok){let detail='';try{const err=await r.json();detail=err.error||err.message||''}catch{}throw new Error('HTTP '+r.status+(detail?' · '+detail:''))}const started=await r.json();if(!started.ok||!started.jobId)throw new Error(started.error||window.PCP_I18N.t('No se pudo iniciar la lectura del G-code'));u1GcodeJobs.set(readGeneration,String(started.jobId));if(!isCurrentRead()){u1GcodeJobs.delete(readGeneration);u1CancelGcodeJob(started.jobId);return;}let d=null,lastProgress=-1,unchangedProgress=0;const readDeadline=Date.now()+15*60*1000;for(let attempt=0;attempt<900&&Date.now()<readDeadline;attempt++){await new Promise(resolve=>setTimeout(resolve,unchangedProgress>=8?2000:(unchangedProgress>=4?1000:500)));if(!isCurrentRead())return;const progressUrl='/api/u1/filaments/progress?id='+encodeURIComponent(started.jobId)+'&t='+Date.now();const progressController=new AbortController(),progressTimeout=setTimeout(()=>progressController.abort(),12000);let pr;try{pr=window.PCP_PRINTER_DIRECT?await window.PCP_PRINTER_DIRECT.fetch(progressUrl):await fetch(progressUrl,{cache:'no-store',signal:progressController.signal})}finally{clearTimeout(progressTimeout)}if(!pr.ok){let detail='';try{const err=await pr.json();detail=err.error||err.message||''}catch{}throw new Error((window.PCP_I18N?.format('Error consultando el progreso: HTTP {status}',{status:pr.status})||('Error consultando el progreso: HTTP '+pr.status))+(detail?' · '+detail:''))}const pd=await pr.json();if(!isCurrentRead())return;const progressPct=Math.max(0,Math.min(100,Number(pd.progress)||0));if(progressPct>lastProgress){lastProgress=progressPct;unchangedProgress=0}else{unchangedProgress++}if(bar)bar.value=progressPct;const rawProgressMessage=String(pd.message||'').replace(/G-codeâ€¦/gi,'G-code…').replace(/â€¦/g,'…').replace(/â€”/g,'—').replace(/â€“/g,'–').replace(/Ã¡/g,'á').replace(/Ã©/g,'é').replace(/Ã­/g,'í').replace(/Ã³/g,'ó').replace(/Ãº/g,'ú').replace(/Ã±/g,'ñ');let progressMessage='';if(/^Leyendo datos del G-code…(?:\\s*\\d+%)?$/i.test(rawProgressMessage)){progressMessage=window.PCP_I18N.format('Leyendo datos del G-code… {progress}%',{progress:progressPct});}else if(/^Analizando los metadatos de los filamentos…$/i.test(rawProgressMessage)){progressMessage=window.PCP_I18N.t('Analizando los metadatos de los filamentos…');}else{progressMessage=window.PCP_I18N.t(rawProgressMessage)||rawProgressMessage||window.PCP_I18N.t('Leyendo datos del G-code…');}if(label)label.textContent=progressMessage;if(src)src.textContent=window.PCP_I18N.format('Fuente: {message} · {file}',{message:progressMessage,file:fn});if(pd.state==='completed'){d=pd;break}if(pd.state==='error'||pd.ok===false)throw new Error(pd.error||pd.message||window.PCP_I18N.t('Falló la lectura completa del G-code'))}if(!d)throw new Error(window.PCP_I18N.t('La lectura del G-code supera los 15 minutos y se ha detenido la espera.'));u1GcodeJobs.delete(readGeneration);if(!Array.isArray(d.items)||!d.items.length)throw new Error(d.error||window.PCP_I18N.t('El G-code activo no contiene metadatos de filamento'));if(wrap)wrap.style.display='none';if(!isCurrentRead())return;if(String(d.filename||'')!==fn)throw new Error(window.PCP_I18N.t('El puente devolvió un archivo distinto del activo'));const old=u1ReadActive();const spools=u1Spools();const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9+]/g,'');const hx=v=>window.PCPColorUtils?.parseHex(String(v||'').trim())?.rgb||'';const items=d.items.map(f=>{const material=f.material||f.name||'Filamento',color=f.color||f.hex||'',grams=Math.max(0,Number(f.grams)||0);let spoolIndex=null;const fc=hx(color),fm=norm(material);if(old&&old.file===fn&&Array.isArray(old.items)){const prior=old.items.filter(x=>{const pc=hx(x.color||x.hex||''),pm=norm(x.material||x.name||'');return (fc&&pc===fc)&&(!fm||!pm||fm===pm||fm.startsWith(pm)||pm.startsWith(fm))&&x.spoolIndex!==null&&x.spoolIndex!==''&&Number.isInteger(Number(x.spoolIndex))});if(prior.length===1)spoolIndex=Number(prior[0].spoolIndex)}if(spoolIndex===null){const matches=spools.map((sp,i)=>({sp,i})).filter(({sp})=>{const sc=hx(sp.hex||sp.color||'');const sm=norm(sp.material);return fc&&sc===fc&&(!fm||!sm||fm===sm||fm.startsWith(sm)||sm.startsWith(fm))&&Number(sp.remaining)>0});if(matches.length===1)spoolIndex=matches[0].i}const parsed=window.PCPColorUtils?.parseHex(color||f.hex||'');const supplied=String(f.colorName||'').trim();const colorName=supplied&&!window.PCPColorUtils?.parseHex(supplied)?supplied:(parsed?window.PCPColorUtils.namedColor(parsed.rgb):'');return {name:f.name||material,material,color:parsed?.full||color,colorName,grams,spoolIndex}});const sameLiveSession=!!(old&&old.file===fn&&!old.deducted&&old.startedAt);const sessionStamp=sameLiveSession?old.startedAt:new Date().toISOString();const job={id:fn+'|'+(sameLiveSession?sessionStamp:Date.now()+'-'+Math.random().toString(36).slice(2,8)),file:fn,startedAt:sessionStamp,printerName:u1ResolvePrinterAlias(),printerIp,thumbnailData:typeof d.thumbnailData==='string'&&/^data:image\/(?:png|jpeg|webp);base64,/i.test(d.thumbnailData)?d.thumbnailData:'',items,deducted:false,source:(window.PCP_I18N?.t('G-code activo en impresora')||'G-code activo en impresora'),totalGrams:Number(d.totalGrams)||items.reduce((a,x)=>a+x.grams,0)};try{u1WriteActive(job)}catch(e){}u1RenderConsumption(job);u1GcodeReadDone=identity;u1GcodeReadInFlight='';u1GcodeRetryAfter=0;if(src)src.textContent=window.PCP_I18N.format('Fuente confirmada: G-code activo de {printer} · {file}',{printer:job.printerName,file:fn});const assigned=items.filter(x=>x.spoolIndex!==null&&x.grams>0).length;u1SetNote((window.PCP_I18N?.t('Consumo leído del G-code activo: ')||'Consumo leído del G-code activo: ')+job.totalGrams.toFixed(2)+' g previstos. '+(window.PCP_I18N?.format('Bobinas asignadas: {assigned}/{total}. Comprueba las asignaciones antes del descuento.',{assigned,total:items.filter(x=>x.grams>0).length})||('Bobinas asignadas: '+assigned+'/'+items.filter(x=>x.grams>0).length+'. Comprueba las asignaciones antes del descuento.')))}catch(e){u1GcodeJobs.delete(readGeneration);if(!isCurrentRead())return;u1GcodeReadInFlight='';u1GcodeRetryAfter=Date.now()+60000;const wrap=document.getElementById('u1-read-progress-wrap');if(wrap)wrap.style.display='block';if(src)src.textContent=window.PCP_I18N?.format('Fuente no confirmada para {file}: {message}',{file:fn,message:e&&e.message?e.message:String(e)})||('Fuente no confirmada para '+fn+' · '+(e&&e.message?e.message:String(e)));const rows=document.getElementById('u1-consumption-rows');if(rows)rows.innerHTML='<tr><td colspan="3">'+(window.PCP_I18N?.t('No se muestran gramos: no se pudo leer el G-code activo de la U1.')||'No se muestran gramos: no se pudo leer el G-code activo de la U1.')+'</td></tr>';const sum=document.getElementById('u1-consumption-summary');if(sum)sum.textContent=window.PCP_I18N.t('Consumo no disponible. No se debe descontar usando datos del cálculo cargado.');u1SetNote(window.PCP_I18N.t('No se pudo leer el G-code activo de la U1. No se aplicará el descuento.'))}}

 function u1ReportPrinterIssue(payload,status){
  try{
   const printer=u1ResolvePrinterAlias(),ip=u1SelectedPrinterIp();
   const webhooks=status&&status.webhooks||{},printStats=status&&status.print_stats||{};
   const states=[webhooks.state,printStats.state,status&&status.klippy_state,status&&status.printer_state,payload&&payload.state,payload&&payload.printerState].map(v=>String(v||'').trim()).filter(Boolean);
   const faultState=states.find(v=>/^(error|fault|alarm|shutdown|emergency_stop|emergency stop|halted|failed)$/i.test(v));
   const rawMessage=[payload&&payload.error,status&&status.error,webhooks.error,(faultState?webhooks.message:'') ,(faultState?webhooks.state_message:''),status&&status.klippy_message].map(v=>String(v||'').trim()).find(Boolean)||'';
   const offline=!!(payload&&(payload.printerOffline||payload.online===false));
   const message=offline?(window.PCP_I18N?.t('La impresora no está conectada o no responde.')||'La impresora no está conectada o no responde.'):(rawMessage||faultState||'');
   window.PCPNotifications?.reportPrinterIssue?.({printer,ip,message});
  }catch(e){console.warn('[PCP] No se pudo actualizar el aviso de impresora:',e)}
 }
function u1RenderLiveFilaments(channels){
 const grid=$('u1-live-filament-grid');if(!grid)return;const list=Array.isArray(channels)?channels:[];
 if(!list.length){
  const diag=window.PCP_PRINTER_DIAGNOSTICS||{},names=Array.isArray(diag.objects)?diag.objects:[];
  const summary=names.length?names.join(' · '):(window.PCP_I18N?.t('La impresora no publica objetos de bobinas o sistema multicolor')||'La impresora no publica objetos de bobinas o sistema multicolor');
  const shape=diag.summary&&Object.keys(diag.summary).length?JSON.stringify(diag.summary):'';
  grid.innerHTML='<div>'+u1Esc(window.PCP_I18N?.t('Lectura de filamentos no disponible')||'Lectura de filamentos no disponible')+'</div><small style="display:block;margin-top:7px;color:#b9c9df;overflow-wrap:anywhere"><b>'+u1Esc(window.PCP_I18N?.t('Objetos de filamento publicados por la impresora:')||'Objetos de filamento publicados por la impresora:')+'</b> '+u1Esc(summary)+(shape?'<br><b>'+u1Esc(window.PCP_I18N?.t('Estructura comunicada:')||'Estructura comunicada:')+'</b> '+u1Esc(shape):'')+'</small>';
  return;
 }
 const spools=u1Spools(),norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9+]/g,''),hx=v=>window.PCPColorUtils?.parseHex(String(v||'').trim())?.rgb||'';
 grid.innerHTML=list.map((f,i)=>{const material=String(f.material||'').trim(),subtype=String(f.subtype||'').trim(),vendor=String(f.vendor||'').trim(),color=String(f.color||'').trim(),sku=String(f.sku||'').trim(),present=!!f.exists;
 const matches=present?spools.filter(sp=>(!material||!sp.material||norm(sp.material)===norm(material)||norm(sp.material).startsWith(norm(material))||norm(material).startsWith(norm(sp.material)))&&(!color||hx(sp.hex||sp.colorHex||sp.color)===hx(color))):[];
 const label=f.statusLabel?(window.PCP_I18N?.t(f.statusLabel)||f.statusLabel):(f.presenceKnown===false?(window.PCP_I18N?.t('Sensor de filamento no disponible')||'Sensor de filamento no disponible'):(window.PCP_I18N?.t(present?'Filamento detectado':'Sin filamento detectado')||(present?'Filamento detectado':'Sin filamento detectado'))),detail=f.detailText?(window.PCP_I18N?.t(f.detailText)||f.detailText):([vendor,material,subtype].filter(Boolean).join(' · ')||(present?'Sin identificación RFID':(f.presenceKnown===false?'Extrusor detectado; sin sensor de filamento':'Sin filamento detectado'))),meta=[color,sku?'SKU '+sku:'',f.official?'Filamento oficial':'',f.sensor?(window.PCP_I18N?.t('Sensor:')||'Sensor:')+' '+f.sensor:''].filter(Boolean).join(' · ');
 const weight=Number(f.tagWeightGrams)>0?'<small style="display:block;color:#b9c9df">'+(window.PCP_I18N?.t('Peso indicado en etiqueta')||'Peso indicado en etiqueta')+': '+Number(f.tagWeightGrams).toFixed(0)+' g</small>':'';
 const button=present&&!matches.length&&/^#[0-9a-f]{6}$/i.test(color)?'<button type="button" data-u1-live-create="'+i+'" style="margin-top:6px;padding:4px 7px;border-radius:6px;border:1px solid #14b8a6;background:#164e45;color:#fff;font-size:11px">＋ '+(window.PCP_I18N?.t('Crear bobina en inventario')||'Crear bobina en inventario')+'</button>':'';
 return '<article style="min-width:0;padding:8px;border:1px solid #344b67;border-radius:8px;background:#17283f"><div style="display:flex;justify-content:space-between;gap:5px;font-size:11px"><b>'+(f.channelName?u1Esc(f.channelName):(window.PCP_I18N?.format('Canal {number}',{number:f.channel||i+1})||('Canal '+(f.channel||i+1))))+'</b><span style="color:'+(present?'#5eead4':'#fbbf24')+'">'+u1Esc(label)+'</span></div><div style="margin-top:5px;font-size:12px;overflow-wrap:anywhere">'+(color?'<i style="display:inline-block;width:12px;height:12px;border-radius:4px;background:'+u1Esc(color)+';border:1px solid #94a3b8;margin-right:5px;vertical-align:middle"></i>':'')+u1Esc(detail)+'</div><small style="display:block;color:#b9c9df;margin-top:3px">'+u1Esc(meta||'Color no disponible')+'</small>'+weight+(present?'<small style="display:block;color:'+(matches.length?'#5eead4':'#fbbf24')+';margin-top:4px">'+(window.PCP_I18N?.t(matches.length?'Bobina encontrada en inventario':'No existe bobina coincidente en inventario')||(matches.length?'Bobina encontrada en inventario':'No existe bobina coincidente en inventario'))+'</small>':'')+button+'</article>';}).join('');
 if(!grid.dataset.liveHandler){grid.dataset.liveHandler='1';grid.addEventListener('click',e=>{const btn=e.target.closest('[data-u1-live-create]');if(!btn)return;const i=Number(btn.dataset.u1LiveCreate),f=(window.PCP_U1_LIVE_FILAMENTS||[])[i];if(!f||!f.exists)return;const color=String(f.color||'');if(!/^#[0-9a-f]{6}$/i.test(color)){u1SetNote('No se puede crear la bobina porque el firmware no ha proporcionado un color válido.');return;}window.PCPOpenQuickSpoolDialog?.({index:i,material:[f.material,f.subtype].filter(Boolean).join(' ')||'PLA',hex:color,grams:0,source:'monitor-live',channel:Number(f.channel)||i+1,brand:f.vendor||'',tagWeightGrams:Number(f.tagWeightGrams)||0});});}
}
 async function poll(){if(u1PollBusy||document.visibilityState==='hidden')return;u1PollBusy=true;const pollGeneration=++u1PollGeneration,pollIp=u1SelectedPrinterIp(),c=new AbortController();u1PollController=c;try{const t=setTimeout(()=>c.abort(),10000);let r;try{const apiBase=String(($('pcpPrinterUrl')&&$('pcpPrinterUrl').value)||'http://127.0.0.1:8700').trim().replace(/\/+$/,'');const statusUrl=(apiBase||'http://127.0.0.1:8700')+'/api/u1/status?ip='+encodeURIComponent(pollIp)+'&t='+Date.now();r=window.PCP_PRINTER_DIRECT?await window.PCP_PRINTER_DIRECT.fetch(statusUrl):await fetch(statusUrl,{cache:'no-store',signal:c.signal})}finally{clearTimeout(t)}let d;try{d=await r.json()}catch{d={}}if(pollGeneration!==u1PollGeneration||pollIp!==u1SelectedPrinterIp())return;if(d.printerIp&&String(d.printerIp)!==pollIp)return;if(!d.connecting)u1ReportPrinterIssue(d,d.status||{});if(d.connecting){$('u1-connection').textContent=window.PCP_I18N?.t('Comprobando conexión con la impresora…')||'Comprobando conexión con la impresora…';$('u1-dot').className='u1-dot warn';$('u1-state').textContent='—';$('u1-file').textContent='—';$('u1-progress').textContent='—';$('u1-layers').textContent='— / —';$('u1-duration').textContent='—';$('u1-filament').textContent='—';const source=$('u1-source-file');if(source)source.textContent=window.PCP_I18N?.t('Esperando datos de la impresora seleccionada…')||'Esperando datos de la impresora seleccionada…';u1MetadataFile='';u1GcodeReadDone='';u1GcodeReadInFlight='';return}if(d.printerOffline||d.online===false){const offlineText=window.PCP_I18N?.t('Impresora sin conexión')||'Impresora sin conexión';$('u1-connection').textContent=offlineText;$('u1-dot').className='u1-dot warn';$('u1-error').textContent=offlineText+'. '+(u1LocalizeRuntimeError(d.error)||window.PCP_I18N?.t('La impresora está apagada o no responde. Se conserva su configuración.')||'La impresora está apagada o no responde. Se conserva su configuración.');if(!d.status){$('u1-state').textContent=offlineText;$('u1-file').textContent=window.PCP_I18N?.t('Sin archivo')||'Sin archivo';$('u1-progress').textContent='0.0%';$('u1-layers').textContent='— / —';$('u1-duration').textContent=duration(0);$('u1-filament').textContent='—';u1MetadataFile='';const wrap=$('u1-read-progress-wrap');if(wrap)wrap.style.display='none';return}}if(!r.ok||d.ok===false)throw new Error((d.error||d.message||(window.PCP_I18N?.format('Puente HTTP {status}',{status:r.status})||('Puente HTTP '+r.status)))+(d.updatedAt?' · estado actualizado '+u1AgeLabel(d.updatedAt):''));const s=d.status||{},p=s.print_stats||{},v=s.virtual_sdcard||{};window.PCP_PRINTER_DIAGNOSTICS={objects:Array.isArray(d.printerFilamentObjectNames)?d.printerFilamentObjectNames:[],summary:d.printerFilamentObjectSummary||{},statusKeys:Array.isArray(d.printerStatusKeys)?d.printerStatusKeys:[]};window.PCP_U1_LIVE_FILAMENTS=Array.isArray(d.printerFilaments)?d.printerFilaments:(Array.isArray(d.u1Filaments)?d.u1Filaments:[]);u1RenderLiveFilaments(window.PCP_U1_LIVE_FILAMENTS);try{u1RepairCancelledAccountingAliases()}catch(postError){console.warn('[PCP Monitor] Error reparando movimientos antiguos:',postError)}const statusStamp=Date.parse(d.lastSuccessAt||d.updatedAt||'');const statusNow=Date.now();const statusAge=Number.isFinite(statusStamp)&&statusStamp<=statusNow+60000?Math.max(0,Math.floor((statusNow-statusStamp)/1000)):null;$('u1-connection').textContent=(d.online===false?(window.PCP_I18N?.t('Impresora sin conexión')||'Impresora sin conexión'):(window.PCP_I18N?.t('Conectada')||'Conectada'))+(statusAge===null?' · '+(window.PCP_I18N?.t('fecha de estado desconocida')||'fecha de estado desconocida'):statusAge>10?' · '+(window.PCP_I18N?.t('datos de hace')||'datos de hace')+' '+statusAge+' s':'');const rawState=String(p.state||s.webhooks?.state||'').trim();$('u1-state').textContent=rawState?(window.PCP_I18N?.t(rawState.toLowerCase())||rawState):(window.PCP_I18N?.t('Desconocido')||'Desconocido');$('u1-file').textContent=p.filename||(window.PCP_I18N?.t('Sin archivo')||'Sin archivo');$('u1-progress').textContent=(Math.max(0,Math.min(100,(Number(v.progress)||0)*100))).toFixed(1)+'%';$('u1-layers').textContent=((p.info&&p.info.current_layer)!=null?p.info.current_layer:'—')+' / '+((p.info&&p.info.total_layer)!=null?p.info.total_layer:'—');$('u1-duration').textContent=duration(Number(p.total_duration));$('u1-filament').textContent=Number.isFinite(Number(p.filament_used))?(Number(p.filament_used)/1000).toFixed(2)+' m':'—';$('u1-dot').className='u1-dot '+(d.online===false||statusAge===null||statusAge>10?'warn':'ok');u1LastProgress=Math.max(u1LastProgress,Math.max(0,Math.min(1,Number(v.progress)||0)));/* duration telemetry is persisted before state transition handlers finalize the job */
if(p.filename){
 const activeJob=u1ReadActive(),stateNow=String(p.state||s.webhooks?.state||'').toLowerCase();
 // Moonraker print_stats.filament_used is reported in millimetres.
 // Persist the highest value observed for this print so completion can use
 // printer telemetry rather than relying only on the G-code estimate.
 const reportedFilamentMm=Number(p.filament_used);
 if(activeJob&&activeJob.file===String(p.filename).split(/[\\\\/]/).pop()&&Number.isFinite(reportedFilamentMm)&&reportedFilamentMm>0&&['printing','paused','complete','completed','cancelled','canceled','cancel','canceling','cancelling','standby','ready','idle'].includes(stateNow)){
  const previousMm=Number(activeJob.actualFilamentUsedMm)||0;
  if(reportedFilamentMm>previousMm+0.01){
   activeJob.actualFilamentUsedMm=reportedFilamentMm;
   activeJob.actualFilamentUsedMeters=Number((reportedFilamentMm/1000).toFixed(3));
   activeJob.actualFilamentSource='moonraker.print_stats.filament_used';
   u1WriteActive(activeJob,true);
  }
 }
 const reportedSeconds=Number(p.print_duration)>0?Number(p.print_duration):Number(p.total_duration);
 if(activeJob&&activeJob.file===String(p.filename).split(/[\\\\/]/).pop()&&Number.isFinite(reportedSeconds)&&reportedSeconds>0&&['printing','paused','complete','completed','cancelled','canceled','cancel','canceling','cancelling','standby','ready','idle'].includes(stateNow)){
  const previousSeconds=Number(activeJob.actualPrintSeconds)||0;
  const nextSeconds=Math.max(previousSeconds,reportedSeconds);
  const previousState=String(activeJob.printingState||'').toLowerCase();
  const stateChanged=previousState!==stateNow;
  // lastPrintStatsAt es efímero; no se usa para detectar la primera escritura
  // porque se excluye deliberadamente del registro persistido.
  const firstTelemetry=!(Number(activeJob.actualPrintSeconds)>0);
  const fiveMinuteAdvanced=Math.floor(nextSeconds/300)>Math.floor(previousSeconds/300);
  if(stateChanged||fiveMinuteAdvanced||firstTelemetry){
   activeJob.actualPrintSeconds=nextSeconds;
   activeJob.lastPrintStatsAt=new Date().toISOString();
   activeJob.printingState=stateNow;
   // Los cambios de estado son críticos y se guardan inmediatamente; el tiempo
   // transcurrido se persiste cada cinco minutos, no en cada minuto de sondeo.
   u1WriteActive(activeJob, stateChanged||firstTelemetry);
  }
 }
 if(['printing','paused'].includes(stateNow))u1LoadPrinterGcode(p.filename);
}
try{u1TrackJob(p.state||s.webhooks?.state||'',p.filename||'')}catch(trackError){console.error('[PCP Monitor] Error procesando el estado del trabajo:',trackError);u1SetNote(window.PCP_I18N?.format('La impresora responde, pero no se pudo actualizar el seguimiento del trabajo: {error}',{error:trackError&&trackError.message?trackError.message:String(trackError)})||('La impresora responde, pero no se pudo actualizar el seguimiento del trabajo: '+(trackError&&trackError.message?trackError.message:String(trackError))))}if(!$('u1-error').textContent.startsWith('Trabajo registrado')&&!$('u1-error').textContent.startsWith('Descuento aplicado')&&!$('u1-error').textContent.startsWith('Impresión finalizada')&&!$('u1-error').textContent.startsWith('La impresión terminó'))$('u1-error').textContent=''}catch(e){const aborted=e&&(/AbortError/i.test(String(e.name||''))||/signal is aborted|aborted without reason|the operation was aborted/i.test(String(e.message||e)));if(!aborted&&pollGeneration===u1PollGeneration&&pollIp===u1SelectedPrinterIp()){$('u1-connection').textContent=window.PCP_I18N?.t('Sin conexión')||'Sin conexión';$('u1-dot').className='u1-dot bad';$('u1-error').textContent=window.PCP_I18N?.format('Puente no disponible: {error} · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.',{error:e.message||e})||('Puente no disponible: '+(e.message||e)+' · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.')}}finally{if(u1PollController===c)u1PollController=null;const rerun=u1PollRequested||pollGeneration!==u1PollGeneration||pollIp!==u1SelectedPrinterIp();u1PollBusy=false;if(rerun&&document.visibilityState!=='hidden')setTimeout(poll,100)}}

// v1.157: previsualización de consumo y seguimiento idempotente de trabajos U1 y descuento estimado de bobinas al completar.
const JOB_KEY='pcp_u1_active_job_v156', DONE_KEY='pcp_u1_deducted_jobs_v156';
// v1.579: la contabilidad conserva la impresora histórica; no resolver alias por selección actual.
function u1SelectedPrinterIp(){const sel=document.getElementById('pcpU1PrinterSelect');let ip=String(sel&&sel.value||'').trim();if(!ip)for(const k of ['pcp_u1_manual_ip_v180','pcp_u1_manual_ip_v178','pcp_u1_manual_ip']){ip=String(localStorage.getItem(k)||'').trim();if(ip)break;}return ip;}
function u1JobKeyForIp(ip){const normalized=String(ip||'sin-endpoint').trim().toLowerCase().replace(/[^a-z0-9.-]+/g,'_');return 'pcp_active_job_by_printer_v1577_'+normalized;}
const u1ActiveWriteState=new Map();
function u1JobThumbnailKeyForIp(ip){const normalized=String(ip||'sin-endpoint').trim().toLowerCase().replace(/[^a-z0-9.-]+/g,'_');return 'pcp_active_job_thumbnail_by_printer_v1_'+normalized;}
function u1WriteActive(job,force=false){
 if(!job)return;
 const ip=String(job.printerIp||u1SelectedPrinterIp()).trim();
 if(!job.printerIp&&ip)job.printerIp=ip;
 if(!job.printerName)job.printerName=u1ResolvePrinterAlias();
 const key=u1JobKeyForIp(ip),thumbnailKey=u1JobThumbnailKeyForIp(ip),now=Date.now();
 // La miniatura base64 se guarda aparte y solo cuando cambia, no en cada
 // actualización periódica del progreso de impresión.
 const thumbnail=typeof job.thumbnailData==='string'&&/^data:image\/(?:png|jpeg|webp);base64,/i.test(job.thumbnailData)?job.thumbnailData:'';
 const stable={...job};delete stable.thumbnailData;
 // Persistir telemetría en bloques de cinco minutos; el sondeo frecuente no debe saturar SQLite.
 stable.actualPrintMinute=Math.floor((Number(job.actualPrintSeconds)||0)/300)*5;
 delete stable.actualPrintSeconds;delete stable.lastPrintStatsAt;
 const signature=JSON.stringify(stable),previous=u1ActiveWriteState.get(key);
 const stateChanged=!previous||previous.signature!==signature;
 const thumbnailRecord=thumbnail?JSON.stringify({file:String(job.file||''),data:thumbnail}):'';
 let thumbnailChanged=false;
 try{thumbnailChanged=!!thumbnail&&localStorage.getItem(thumbnailKey)!==thumbnailRecord}catch(_){}
 if(!force&&previous&&(!stateChanged||now-previous.at<30000)&&!thumbnailChanged)return;
 try{
  if(thumbnailChanged)localStorage.setItem(thumbnailKey,thumbnailRecord);
  const persisted={...job};delete persisted.thumbnailData;delete persisted.lastPrintStatsAt;
  localStorage.setItem(key,JSON.stringify(persisted));
  u1ActiveWriteState.set(key,{signature,at:now});
 }catch(e){console.warn('[PCP] No se pudo guardar trabajo por impresora',e);}
}
function u1LocalizeRuntimeError(value){
 const raw=String(value||'').trim();if(!raw)return '';
 const t=k=>window.PCP_I18N?.t(k)||k;
 if(/(?:GetResponse|Error en el servidor remoto|remote server returned|404|not found|no se encontr[oó])/i.test(raw)&&/(?:404|no se encontr[oó]|not found)/i.test(raw))return t('El servidor no encontró el archivo G-code solicitado. Comprueba la ruta del archivo y vuelve a intentarlo.');
 if(/(?:502|bad gateway|gateway error|puente no disponible)/i.test(raw))return t('El servidor local de la impresora no responde (error 502). Comprueba que esté iniciado y vuelve a intentarlo.');
 if(/(?:AbortError|aborted|timed out|timeout|tiempo de espera)/i.test(raw))return t('Se agotó el tiempo de espera al consultar la impresora. Comprueba la conexión y vuelve a intentarlo.');
 if(/(?:Failed to fetch|NetworkError|fetch failed|error de red)/i.test(raw))return t('No se pudo conectar con el servidor local de la impresora. Comprueba la conexión.');
 const translated=window.PCP_I18N?.t(raw);return translated&&translated!==raw?translated:raw;
}
function u1SetNote(msg){const el=$('u1-error');if(!el)return;let text=u1LocalizeRuntimeError(msg);const translated=window.PCP_I18N?.t('impresión cancelada · coste parcial');if(translated&&translated!=='impresión cancelada · coste parcial')text=text.replace(/impresión cancelada · coste parcial/gi,translated);el.textContent=text}
function u1Esc(v){return String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function u1SpoolUnitGrams(sp){const q=Math.max(1,Math.floor(Number(sp.quantity)||1));if(Array.isArray(sp.remainingBySpool)&&sp.remainingBySpool.length===q)return sp.remainingBySpool.map(v=>Math.max(0,Number(v)||0));return Array(q).fill(Math.max(0,Number(sp.remaining)||0));}
function u1RenderConsumption(jobOverride){
 const body=$('u1-consumption-rows'),summary=$('u1-consumption-summary'),total=$('u1-consumption-total');if(!body||!summary||!total)return;
 let rows=[];try{rows=(jobOverride&&Array.isArray(jobOverride.items)&&jobOverride.items.length)?jobOverride.items:((typeof getFilaments==='function')?getFilaments():[])}catch(e){}
 if(!rows.length){try{const d=window.PCP_INTEGRATION_DATA||(window.PCP_INTEGRATION_DATA&&window.PCP_INTEGRATION_DATA.data);if(d&&Array.isArray(d.filaments)){rows=d.filaments.map(f=>({name:f.name||f.material||'Filamento',material:f.material||f.name||'Filamento',grams:Math.max(0,Number(f.grams)||0),color:f.color||f.hex||f.colorHex||'',colorName:f.colorName||'',spoolIndex:''}));}}catch(e){}}
 const spools=u1Spools();
 const t=k=>window.PCP_I18N?.t(k)||k;
 const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9+]/g,'');
 const hx=v=>window.PCPColorUtils?.parseHex(String(v||'').trim())?.rgb||'';
 const dist=(a,b)=>{a=hx(a);b=hx(b);if(!a||!b)return 999;const A=[1,3,5].map(i=>parseInt(a.slice(i,i+2),16)),B=[1,3,5].map(i=>parseInt(b.slice(i,i+2),16));return Math.sqrt(A.reduce((n,v,i)=>n+(v-B[i])**2,0));};const sameColorFamily=(a,b)=>{const rgb=v=>{const h=hx(v);if(!h)return null;return [1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255)};const hue=v=>{const c=rgb(v);if(!c)return null;const [r,g,b]=c,max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;if(!d)return 0;let h;if(max===r)h=60*(((g-b)/d)%6);else if(max===g)h=60*((b-r)/d+2);else h=60*((r-g)/d+4);return (h+360)%360};const family=h=>h>=345||h<15?'red':h<45?'orange':h<70?'yellow':h<170?'green':h<200?'cyan':h<255?'blue':h<300?'purple':'pink';const x=hue(a),y=hue(b);if(x===null||y===null)return false;const fx=family(x),fy=family(y);return fx===fy||((fx==='red'&&fy==='orange')||(fx==='orange'&&fy==='red'));};
 let sum=0,assigned=0,missing=0;
 const html=rows.map((f,rowIndex)=>{const grams=Math.max(0,Number(f.grams)||0);sum+=grams;let idx=null;const savedSpoolId=f.spoolId??f.selectedSpoolId??null;if(savedSpoolId!==null&&savedSpoolId!==undefined){const foundById=spools.findIndex(sp=>String(sp.id??'')===String(savedSpoolId));if(foundById>=0)idx=foundById;}if(idx===null&&f.spoolIndex!==''&&f.spoolIndex!=null&&Number.isInteger(Number(f.spoolIndex))){const candidate=Number(f.spoolIndex);if(candidate>=0&&candidate<spools.length)idx=candidate;}
 const fc=hx(f.color||f.hex||''),fm=norm(f.material||f.name||'');const compatible=grams>0?spools.map((sp,i)=>({sp,i,d:dist(fc,sp.hex||sp.colorHex||sp.color)})).filter(({sp,d})=>{const sm=norm(sp.material);return (fc?d===0:norm(sp.colorName||sp.color)===norm(f.colorName||''))&&(!fm||!sm||sm===fm||sm.startsWith(fm)||fm.startsWith(sm))&&u1SpoolUnitGrams(sp).some(v=>v>0);}):[];if((idx===null||!spools[idx])&&compatible.length)idx=compatible[0].i;
 // Una selección manual es explícita: debe prevalecer aunque el HEX de la bobina
 // sea distinto del G-code (por ejemplo, rojo intenso para un rojo aproximado).
 const selectedSpool=idx!==null?spools[idx]:null;const selectedUnits=selectedSpool?u1SpoolUnitGrams(selectedSpool):[];const selectedStock=selectedUnits.reduce((a,v)=>a+v,0);
 const displayMatches=selectedSpool?[{sp:selectedSpool,i:idx}]:compatible;
 let spoolName=window.PCP_I18N?.t('Sin asignar')||'Sin asignar',status=window.PCP_I18N?.t('Sin asignar')||'Sin asignar',stock=0,isAssigned=false;if(displayMatches.length){const sp=displayMatches[0].sp;const rawColor=String(sp.colorName||sp.color||'');const displayColor=window.PCP_I18N?.colorDisplay?window.PCP_I18N.colorDisplay(rawColor):rawColor;const brand=sp.brand||'',material=sp.material||'',groupCount=selectedSpool?selectedUnits.length:compatible.reduce((n,x)=>n+u1SpoolUnitGrams(x.sp).length,0);spoolName=[brand,material,displayColor].filter(Boolean).join(' · ')+(groupCount>1?' · '+groupCount+' '+(window.PCP_I18N?.t('bobinas')||'bobinas'):'');stock=selectedSpool?selectedStock:compatible.reduce((n,x)=>n+u1SpoolUnitGrams(x.sp).reduce((a,v)=>a+v,0),0);if(stock+0.0001>=grams){isAssigned=true;status=window.PCP_I18N?.t('Asignada')||'Asignada';assigned++}else{status=window.PCP_I18N?.t('Stock insuficiente')||'Stock insuficiente';missing++}}else if(grams>0){missing++}
 const selectedDistance=selectedSpool?dist(fc,selectedSpool.hex||selectedSpool.colorHex||selectedSpool.color):999;
 const needsChoice=grams>0&&(!selectedSpool||stock<grams);
 const alternatives=needsChoice?spools.map((sp,i)=>({sp,i,d:dist(fc,sp.hex||sp.colorHex||sp.color)})).filter(({sp,i,d})=>i!==idx&&Number(sp.remaining)>0&&u1SpoolUnitGrams(sp).reduce((a,v)=>a+v,0)>0&&(d<=52||sameColorFamily(fc,sp.hex||sp.colorHex||sp.color))&&(!fm||!norm(sp.material)||norm(sp.material)===fm||norm(sp.material).startsWith(fm)||fm.startsWith(norm(sp.material)))).sort((a,b)=>a.d-b.d).slice(0,6):[];
 const createSpoolBtn=needsChoice?`<button type="button" data-u1-create-spool="${rowIndex}" style="display:block;margin-top:5px;font-size:11px;padding:5px 7px;border:1px solid #0f766e;border-radius:6px;background:#d1fae5;color:#064e3b;cursor:pointer">${t("＋ Crear bobina en inventario")}</button>`:'';const buttons=alternatives.length?`<div style="margin-top:5px;font-size:10px;color:#b9c9df">${t("Bobinas alternativas por material y color similar")}</div><select data-u1-alt-select="${rowIndex}" aria-label="${t("Bobinas alternativas por material y color similar")}" style="display:block;box-sizing:border-box;width:100%;max-width:100%;min-width:0;margin-top:4px;padding:5px 6px;border:1px solid #64748b;border-radius:6px;background:#172033;color:#f8fafc;font-size:11px"><option value="">${t("Bobinas alternativas por material y color similar")}</option>${alternatives.map(({sp,i})=>`<option value="${i}">${u1Esc([sp.brand||'Sin marca',sp.material||f.material||'',sp.colorName||sp.color||''].filter(Boolean).join(' · '))} · ${(u1SpoolUnitGrams(sp).reduce((a,v)=>a+v,0)).toFixed(1)} g</option>`).join('')}</select>${createSpoolBtn}`:(needsChoice?`<div style="font-size:10px;color:#fbbf24;margin-top:4px">${t("No hay bobinas alternativas con stock y color similar.")}</div>${createSpoolBtn}`:'');
 const selectedNote=jobOverride&&jobOverride.items&&jobOverride.items[rowIndex]&&jobOverride.items[rowIndex].alternateSpoolSelected?`<div style="font-size:11px;color:#86efac;margin-top:4px">${t("Alternativa seleccionada para esta impresión")}</div>`:'';
 const rawMaterial=String(f.material||f.name||'Filamento');
 const colorValue=String(f.color||f.hex||f.colorHex||'');
 const parsedColor=window.PCPColorUtils?.parseHex(colorValue)||window.PCPColorUtils?.parseHex(rawMaterial);
 const displayHex=parsedColor?.rgb||'';
 const materialLabel=rawMaterial.replace(/\s*[·|,/:-]?\s*#?[0-9a-f]{6}(?:[0-9a-f]{2})?\b/ig,'').trim()||'Filamento';
 const suppliedName=String(f.colorName||'').trim();
 const assignedSpool=idx!==null?spools[idx]:null;const spoolColorName=assignedSpool?String(assignedSpool.colorName||assignedSpool.color||'').trim():'';const colorName=suppliedName&&!window.PCPColorUtils?.parseHex(suppliedName)?suppliedName:(spoolColorName&&!window.PCPColorUtils?.parseHex(spoolColorName)?spoolColorName:(parsedColor?window.PCPColorUtils.namedColor(parsedColor.rgb):''));
 const cleanMaterial=materialLabel.replace(/(?:\s*[·|,/:-]?\s*#?[0-9a-f]{3,8}\b)+/ig,'').trim()||'Filamento';
 const label=[cleanMaterial,colorName,displayHex].filter((v,i,a)=>v&&a.indexOf(v)===i).join(' · ');
 return `<tr><td>${u1Esc(label)}<div class="${(isAssigned?'u1-ok':'u1-warn')}">${u1Esc(status)}</div></td><td>${u1Esc(spoolName)}${selectedNote}${buttons}</td><td>${grams.toFixed(1)}</td></tr>`}).join('');
 body.innerHTML=html||'<tr><td colspan="3">'+(window.PCP_I18N?.t('No hay filamentos del trabajo disponibles. Carga o vuelve a enviar el G-code desde Orca.')||'No hay filamentos del trabajo disponibles. Carga o vuelve a enviar el G-code desde Orca.')+'</td></tr>';
 summary.textContent=rows.length?(window.PCP_I18N?.format('Resumen de filamentos: {count} · asignados correctamente: {assigned} · pendientes de revisar: {missing}',{count:rows.length,assigned,missing})||`${rows.length} ${t('filamento(s)')} · ${assigned} ${t("asignación(es) correctas")} · ${missing} ${t("pendiente(s) de revisar")}`):(window.PCP_I18N?.t('Orca aún no ha proporcionado los materiales de este trabajo.')||'Orca aún no ha proporcionado los materiales de este trabajo.');
 total.textContent=rows.length?(window.PCP_I18N?.format('Total previsto: {grams} g',{grams:sum.toFixed(1)})||`${t('Total previsto')}: ${sum.toFixed(1)} g`):`${t('Total previsto')}: —`;
 if(!body.dataset.altHandler){body.dataset.altHandler='1';body.addEventListener('click',e=>{const create=e.target.closest('[data-u1-create-spool]');if(create){const row=Number(create.dataset.u1CreateSpool),job=u1ReadActive();if(!job||!Array.isArray(job.items)||!job.items[row])return;const f=job.items[row];let hex=String(f.color||f.hex||'').trim().toUpperCase().replace(/^#/,'');if(/^[0-9A-F]{8}$/.test(hex))hex=hex.slice(0,6);if(!/^[0-9A-F]{6}$/.test(hex)){alert(t('No se puede crear la bobina: el color del G-code no es un HEX válido de 6 u 8 dígitos.'));return;}const colorHex='#'+hex;const materialRaw=String(f.material||f.name||'PLA').trim();const material=materialRaw.replace(/\s*#?[0-9A-F]{6}\b/ig,'').replace(/[·|,:-]+$/,'').trim()||'PLA';window.PCPOpenQuickSpoolDialog?.({index:row,material,hex:colorHex,grams:Number(f.grams)||0,source:'monitor',jobId:job.id});return;}const btn=e.target.closest('[data-u1-alt-spool]');if(!btn)return;const idx=Number(btn.dataset.u1AltSpool),row=Number(btn.dataset.u1AltRow),job=u1ReadActive();if(!job||!Array.isArray(job.items)||!job.items[row]||!spools[idx])return;job.items[row].spoolIndex=idx;job.items[row].spoolId=spools[idx].id??null;job.items[row].selectedSpoolId=spools[idx].id??null;job.items[row].alternateSpoolSelected=true;try{u1WriteActive(job,true);}catch(_){}u1RenderConsumption(job);u1SetNote(t('Bobina alternativa asignada a este material para la impresión actual.'));});}
 if(!body.dataset.altChangeHandler){body.dataset.altChangeHandler='1';body.addEventListener('change',e=>{const sel=e.target.closest('[data-u1-alt-select]');if(!sel||sel.value==='')return;const idx=Number(sel.value),row=Number(sel.dataset.u1AltSelect),job=u1ReadActive();if(!job||!Array.isArray(job.items)||!job.items[row]||!spools[idx])return;job.items[row].spoolIndex=idx;job.items[row].spoolId=spools[idx].id??null;job.items[row].selectedSpoolId=spools[idx].id??null;job.items[row].alternateSpoolSelected=true;try{u1WriteActive(job,true);}catch(_){}u1RenderConsumption(job);u1SetNote(t('Bobina alternativa asignada a este material para la impresión actual.'));});}
}

function u1ReadActive(){try{const ip=u1SelectedPrinterIp(),key=u1JobKeyForIp(ip),saved=localStorage.getItem(key);if(saved){const job=JSON.parse(saved);if(job&&((!ip&&!job.printerIp)||(ip&&String(job.printerIp||'').trim()===ip))){if(!job.thumbnailData){try{const rawThumb=localStorage.getItem(u1JobThumbnailKeyForIp(ip));if(rawThumb){if(/^data:image\/(?:png|jpeg|webp);base64,/i.test(rawThumb))job.thumbnailData=rawThumb;else{const thumbRecord=JSON.parse(rawThumb);if(thumbRecord&&String(thumbRecord.file||'')===String(job.file||''))job.thumbnailData=String(thumbRecord.data||'')}}}catch(_){}}return job;}}const legacy=JSON.parse(localStorage.getItem(JOB_KEY)||'null');if(legacy){const legacyIp=String(legacy.printerIp||'').trim();if(legacyIp&&ip&&legacyIp===ip){u1WriteActive(legacy);return legacy;} /* Los trabajos heredados sin IP no se reasignan automáticamente al cambiar de impresora. */}return null;}catch(e){return null}}
function u1Spools(){try{return JSON.parse(localStorage.getItem('pcp_spools')||'[]')}catch(e){return []}}
function u1SaveSpools(a){try{if(window.STORE&&typeof STORE.set==='function')return STORE.set('pcp_spools',JSON.stringify(a));localStorage.setItem('pcp_spools',JSON.stringify(a));return true}catch(e){return false}}
function u1RepairCancelledAccountingAliases(){
 try{
  const raw=localStorage.getItem('pcp_accounting_moves');if(!raw)return false;
  const moves=JSON.parse(raw);if(!Array.isArray(moves))return false;
  const alias=u1ResolvePrinterAlias();if(!alias)return false;
  let changed=false;
  for(const move of moves){
   if(!move||!(move.cancelled===true||/impresi[oó]n cancelada|cancelled print|impression annul[ée]e|druck abgebrochen|stampa annullata/i.test(String(move.concept||'')+' '+String(move.notes||''))))continue;
   const current=String(move.printerName||move.printer||move.machineName||'').trim();
   if(!current||/^(sin impresora asignada|unassigned|no printer assigned)$/i.test(current)){
    move.printerName=alias;move.printer=alias;move.machineName=alias;
    if(typeof move.notes==='string')move.notes=move.notes.replace(/^(?:Snapmaker\s*U1|Sin impresora asignada|Unassigned|No printer assigned)\s*·/i,alias+' ·');
    changed=true;
   }
  }
  if(changed){localStorage.setItem('pcp_accounting_moves',JSON.stringify(moves));try{window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'))}catch(_){}}
  return changed;
 }catch(e){console.warn('[PCP] No se pudieron reparar los alias de impresiones canceladas',e);return false}
}
function u1ResolvePrinterAlias(){
 let alias='';
 try{
  const title=String(document.getElementById('u1-monitor-title')?.textContent||'').replace(/\s*[·|]\s*MONITOR\s*$/i,'').trim();
  if(title&&!/^(snapmaker\s*u1|monitor)$/i.test(title))alias=title;
  const aliases=JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}');
  let ip='';const sel=document.getElementById('pcpU1PrinterSelect');
  if(sel&&sel.value)ip=String(sel.value).trim();
  if(!ip)for(const k of ['pcp_u1_manual_ip_v180','pcp_u1_manual_ip_v178','pcp_u1_manual_ip']){ip=String(localStorage.getItem(k)||'').trim();if(ip)break;}
  if(!alias&&ip&&typeof aliases[ip]==='string')alias=aliases[ip].trim();
  if(!alias){const vals=Object.values(aliases).filter(v=>typeof v==='string'&&v.trim());if(vals.length===1)alias=vals[0].trim();}
 }catch(_){}
 return alias||'Snapmaker U1';
}
function u1MakeJob(file){
 let rows=[];try{if(typeof getFilaments==='function')rows=getFilaments()}catch(e){}
 const clean=String(file||'').split(/[\\/]/).pop();
 // Conserva en el trabajo activo los metadatos visuales y el tiempo que Orca
 // incrustó al abrir la calculadora mediante el puente de integración.
 const integration=window.PCP_INTEGRATION_DATA||{};
 const filenameHours=(()=>{const m=clean.match(/(?:^|[_\s-])(?=\d)(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?(?=\.(?:gcode|gco|gc|bgcode)$|$)/i);return m&&m[0]&&/[dhms]/i.test(m[0])?(Number(m[1]||0)*24+Number(m[2]||0)+Number(m[3]||0)/60+Number(m[4]||0)/3600):0})();
 const hours=Math.max(0,Number(integration.hours)||filenameHours);
 const thumbnailData=typeof integration.thumbnailData==='string'&&/^data:image\/(?:png|jpeg|webp);base64,/i.test(integration.thumbnailData)?integration.thumbnailData:'';
 return {id:clean+'|'+Date.now(),file:clean,startedAt:new Date().toISOString(),actualPrintSeconds:0,lastPrintStatsAt:null,printingState:'printing',printerName:u1ResolvePrinterAlias(),printerIp:u1SelectedPrinterIp(),hours,thumbnailData,pieceName:String(integration.pieceName||clean.replace(/\.(gcode|gco|gc|bgcode)$/i,'')).trim(),items:rows.map(f=>{const parsed=window.PCPColorUtils?.parseHex(f.color||'');return {name:f.name||'Filamento',grams:Math.max(0,Number(f.grams)||0),spoolIndex:(f.spoolIndex!==''&&f.spoolIndex!=null&&Number.isInteger(Number(f.spoolIndex)))?Number(f.spoolIndex):null,color:parsed?.full||f.color||'',colorName:f.colorName||((parsed)?window.PCPColorUtils.namedColor(parsed.rgb):''),material:f.material||f.name||''}}),deducted:false};
}
function u1StartJob(file){
 const existing=u1ReadActive(); if(existing&&existing.file===file&&!existing.deducted)return;
 const job=u1MakeJob(file); if(!job.items.length){u1RenderConsumption(null);u1SetNote(window.PCP_I18N?.format('Trabajo detectado ({file}), pero el cálculo no contiene filamentos. No se descontará ninguna bobina. Carga el G-code de este mismo trabajo y vuelve a comprobar.',{file:String(file||'').split(/[\\/]/).pop()})||('Trabajo detectado ('+String(file||'').split(/[\\/]/).pop()+'), pero el cálculo no contiene filamentos. No se descontará ninguna bobina. Carga el G-code de este mismo trabajo y vuelve a comprobar.'));return}
 try{u1WriteActive(job);}catch(e){}
 const mapped=job.items.filter(x=>x.spoolIndex!==null&&x.grams>0).length;
 const unmapped=job.items.filter(x=>(x.spoolIndex===null)&&x.grams>0).length;
 u1RenderConsumption(job);u1SetNote((window.PCP_I18N?.format('Trabajo registrado. Bobinas asignadas: {mapped}/{total}. El descuento se intentará al finalizar; consumo estimado del G-code.',{mapped,total:job.items.filter(x=>x.grams>0).length})||('Trabajo registrado. Bobinas asignadas: '+mapped+'/'+job.items.filter(x=>x.grams>0).length+'. El descuento se intentará al finalizar; consumo estimado del G-code.'))+(unmapped?' '+(window.PCP_I18N?.t('Hay filamentos sin bobina asignada y no se descontarán.')||'Hay filamentos sin bobina asignada y no se descontarán.'):''));
}
function u1CompleteJob(file){
 let job=u1ReadActive(); if(!job||job.file!==file||job.deducted)return;
 // La finalización se registra antes de cualquier intento de descuento.
 if(!job.completedAt){job.completedAt=new Date().toISOString();job.printCompleted=true;try{u1WriteActive(job,true)}catch(e){}}
 // La impresión está terminada aunque el descuento no pueda aplicarse por falta de stock.
 if(!job.completedAt){job.completedAt=new Date().toISOString();job.printCompleted=true;try{u1WriteActive(job,true)}catch(e){}}
 let done=[];try{done=JSON.parse(localStorage.getItem(DONE_KEY)||'[]')}catch(e){}
 if(done.includes(job.id)||job.deductionState==='applied'){job.deducted=true;job.deductionState='applied';try{u1WriteActive(job,true)}catch(e){}u1PublishCompletionNotice(job);return}
 // Recuperación idempotente: si PCP se cerró entre guardar el inventario y confirmar
 // el descuento, se vuelve a escribir el resultado calculado, nunca se resta otra vez.
 if(job.deductionState==='prepared'&&Array.isArray(job.deductionResultSpools)){
  if(!u1SaveSpools(job.deductionResultSpools)){u1SetNote(window.PCP_I18N?.t('No se pudo recuperar el descuento pendiente. El inventario no se ha vuelto a modificar.')||'No se pudo recuperar el descuento pendiente. El inventario no se ha vuelto a modificar.');return}
  done.push(job.id);try{localStorage.setItem(DONE_KEY,JSON.stringify([...new Set(done)].slice(-200)))}catch(_){}
  job.deducted=true;job.deductionState='applied';job.deductionBySpool=job.deductionBySpool||{};delete job.deductionResultSpools;try{u1WriteActive(job,true)}catch(_){}
  u1PublishCompletionNotice(job);return;
 }
 // Reescala el reparto estimado por color/material con la longitud total
 // realmente consumida que informa Moonraker. Se conserva la proporción por
 // material del G-code, pero el total procede de la impresora.
 if(!job.actualConsumptionApplied&&Number(job.actualFilamentUsedMm)>0&&Array.isArray(job.items)&&job.items.length){
  const densityFor=material=>{
   const v=String(material||'').toUpperCase();
   if(/\b(ABS)\b/.test(v))return 1.04;
   if(/\bASA\b/.test(v))return 1.07;
   if(/\bTPU|TPE\b/.test(v))return 1.21;
   if(/\bPA|NYLON\b/.test(v))return 1.14;
   if(/\bPC\b/.test(v))return 1.20;
   if(/\bPETG\b/.test(v))return 1.27;
   return 1.24; // PLA por defecto
  };
  const area=Math.PI*Math.pow(1.75/2,2);
  let predictedLengthMm=0,predictedGrams=0;
  for(const item of job.items){
   const grams=Math.max(0,Number(item.grams)||0);
   if(!grams)continue;
   const gramsPerMm=area*densityFor(item.material||item.name)/1000;
   predictedLengthMm+=grams/gramsPerMm;
   predictedGrams+=grams;
  }
  if(predictedLengthMm>0&&predictedGrams>0){
   const actualLengthMm=Math.max(0,Number(job.actualFilamentUsedMm)||0);
   const correction=Math.max(0,actualLengthMm/predictedLengthMm);
   for(const item of job.items)item.grams=Number((Math.max(0,Number(item.grams)||0)*correction).toFixed(3));
   job.actualConsumptionApplied=true;
   job.actualConsumptionSource='moonraker.print_stats.filament_used';
   job.actualConsumptionCorrection=Number(correction.toFixed(5));
   job.actualConsumptionGrams=Number((predictedGrams*correction).toFixed(2));
   try{u1WriteActive(job,true)}catch(_){}
  }
 }
 const items=job.items.filter(x=>x.grams>0);
 if(!items.length){u1SetNote(t('Impresión finalizada, pero no había consumo de filamento válido. No se modificó el inventario.'));return}
 const spools=u1Spools(), planned={}, remaining=spools.map(sp=>u1SpoolUnitGrams(sp).reduce((a,v)=>a+v,0));
 const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9+]/g,'');
 const hx=v=>{const raw=String(v||'').trim().toUpperCase();const m=raw.match(/#?([0-9A-F]{8}|[0-9A-F]{6})/);if(!m)return '';let x=m[1];if(x.length===8)x=x.slice(0,6);return /^[0-9A-F]{6}$/.test(x)?'#'+x:''};
 const spoolColor=sp=>hx(sp.hex||sp.colorHex||sp.color)||norm(sp.colorName||sp.color);
 const itemColor=it=>hx(it.color||it.hex||it.colorHex)||norm(it.colorName||it.color);
 const sameFilament=(it,sp)=>{
  const ic=itemColor(it),sc=spoolColor(sp),im=norm(it.material||it.name||''),sm=norm(sp.material||'');
  return !!ic&&!!sc&&ic===sc&&(!im||!sm||im===sm||im.startsWith(sm)||sm.startsWith(im));
 };
 const shortages=[];
 for(const it of items){
  let need=Math.max(0,Number(it.grams)||0);
  if(!need)continue;
  const preferred=Number.isInteger(Number(it.spoolIndex))&&it.spoolIndex!==''&&it.spoolIndex!=null?Number(it.spoolIndex):-1;
  const candidates=[];
  if(preferred>=0&&preferred<spools.length)candidates.push(preferred);
  for(let i=0;i<spools.length;i++){
   if(i!==preferred&&sameFilament(it,spools[i]))candidates.push(i);
  }
  // Never substitute a different material/color. The explicitly assigned spool is tried first;
  // remaining demand may be split across other matching spools in inventory order.
  for(const i of candidates){
   if(need<=0.0001)break;
   const available=remaining[i];
   if(available<=0)continue;
   const take=Math.min(available,need);
   remaining[i]-=take;need-=take;
   planned[i]=(planned[i]||0)+take;
  }
  if(need>0.0001){
   const label=[it.material||it.name||'Filamento',it.colorName||it.color||''].filter(Boolean).join(' · ');
   shortages.push(label+': faltan '+need.toFixed(1)+' g tras revisar las bobinas compatibles');
  }
 }
 if(shortages.length){
  u1SetNote('No se descontó ninguna bobina: el stock combinado de las bobinas compatibles no cubre todo el consumo. '+shortages.join(' · ')+'. Añade stock o revisa las asignaciones y vuelve a comprobar el trabajo.');
  return;
 }
 if(!Object.keys(planned).length){u1SetNote(window.PCP_I18N?.t('Impresión finalizada, pero no se pudo asociar el consumo a ninguna bobina. No se descontó nada.')||'Impresión finalizada, pero no se pudo asociar el consumo a ninguna bobina. No se descontó nada.');return}
 const changes=[];
 for(const [key,grams] of Object.entries(planned)){
  const i=Number(key),sp=spools[i],quantity=Math.max(1,Math.floor(Number(sp.quantity)||1)),units=u1SpoolUnitGrams(sp);let toDeduct=grams;for(let u=0;u<units.length&&toDeduct>0.0001;u++){const take=Math.min(units[u],toDeduct);units[u]=Number((units[u]-take).toFixed(2));toDeduct-=take;}sp.remainingBySpool=units;sp.remaining=Number((units.reduce((a,v)=>a+v,0)/quantity).toFixed(2));
  changes.push((sp.brand||'')+' '+(sp.material||'')+' '+(sp.colorName||sp.color||'')+': −'+grams.toFixed(1)+' g total ('+quantity+' bobinas; quedan '+(units.reduce((a,v)=>a+v,0)).toFixed(1)+' g en conjunto)');
 }
 // Primero se persiste el resultado exacto previsto. Si la aplicación se cierra
 // durante el guardado, la siguiente ejecución reescribe ese mismo resultado sin restar otra vez.
 job.deductionState='prepared';job.deductionResultSpools=spools;job.deductionBySpool=planned;try{u1WriteActive(job,true)}catch(_){}
 if(!u1SaveSpools(spools)){job.deductionState='';delete job.deductionResultSpools;delete job.deductionBySpool;try{u1WriteActive(job,true)}catch(_){}u1SetNote(window.PCP_I18N?.t('La impresión terminó, pero no se pudo guardar el inventario. No cierres la aplicación; revisa almacenamiento local.')||'La impresión terminó, pero no se pudo guardar el inventario. No cierres la aplicación; revisa almacenamiento local.');return}
 try{done.push(job.id);localStorage.setItem(DONE_KEY,JSON.stringify([...new Set(done)].slice(-200)));job.deducted=true;job.deductionState='applied';job.completedAt=job.completedAt||new Date().toISOString();delete job.deductionResultSpools;u1WriteActive(job,true);}catch(e){}
 // Vincula el descuento real de bobinas al movimiento U1 de Contabilidad para que el centro de avisos solo notifique consumos confirmados.
 try{
  const moves=JSON.parse(localStorage.getItem('pcp_accounting_moves')||'[]');
  const cleanFile=value=>String(value||'').split(/[\\/]/).pop().trim().toLocaleLowerCase();
  const jobStartedAt=String(job.startedAt||'').trim();
  const deductions=Object.entries(planned).map(([index,grams])=>{const spool=spools[Number(index)]||{};return {index:Number(index),spoolId:spool.id??null,brand:spool.brand||'',material:spool.material||'',hex:spool.hex||spool.colorHex||'',color:spool.colorName||spool.color||'',grams:Number(grams)||0};}).filter(item=>item.grams>0);
  let linked=false;
  for(const move of moves){
   const key=String(move?.jobKey||'');
   const keyParts=key.startsWith('u1:')?key.slice(3).split('|'):[];
   // Exigir archivo y marca temporal de la sesión: el mismo G-code puede haberse impreso en varias máquinas o intentos.
   if(!jobStartedAt||!key.startsWith('u1:')||cleanFile(keyParts[0])!==cleanFile(file)||String(keyParts[1]||'').trim()!==jobStartedAt||key.endsWith('|commission')||key.endsWith('|sale'))continue;
   move.filamentDeductions=deductions;move.filamentInventoryApplied=deductions.length>0;move.filamentDeductedAt=job.completedAt;move.filamentDeductionGrams=deductions.reduce((sum,item)=>sum+item.grams,0);linked=true;
  }
  if(linked){localStorage.setItem('pcp_accounting_moves',JSON.stringify(moves));window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));}
 }catch(e){console.warn('[PCP] No se pudo asociar el descuento de filamento al movimiento contable',e)}
 try{if(typeof renderSpools==='function')renderSpools()}catch(e){}
 try{window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));window.dispatchEvent(new CustomEvent('pcp-spools-updated'))}catch(e){}
 u1SetNote((window.PCP_I18N?.format('Descuento aplicado (estimación del G-code): {details}',{details:changes.join(' · ')})||'G-code estimated deduction applied: '+changes.join(' · '))+(job.items.some(x=>x.spoolIndex===null&&x.grams>0)?' · '+(window.PCP_I18N?.t('Se ha repartido el consumo entre bobinas compatibles cuando ha sido necesario.')||'Se ha repartido el consumo entre bobinas compatibles cuando ha sido necesario.') :''));
 
}
function u1FinalizeAccountingMoves(file, options={}){
 try{
  const clean=v=>String(v||'').split(/[\\/]/).pop().trim();
  const requested=clean(file), activeFile=clean(options.activeFile||'');
  const closeOlder=!!activeFile;
  const moves=JSON.parse(localStorage.getItem('pcp_accounting_moves')||'[]');
  const trackedJob=u1ReadActive(),trackedSeconds=trackedJob&&(!requested||clean(trackedJob.file)===requested)?Math.max(0,Number(trackedJob.actualPrintSeconds)||0):0;
  let candidates=requested?[requested]:[];
  if(!candidates.length&&!closeOlder){
   const names=[...new Set(moves.filter(m=>m&&m.provisional!==false&&typeof m.jobKey==='string'&&m.jobKey.startsWith('u1:')).map(m=>clean(m.jobKey.slice(3).split('|')[0])).filter(Boolean))];
   if(names.length===1)candidates=names;
  }
  if(!candidates.length&&!closeOlder)return false;
  let changed=false;
  for(const move of moves){
   if(!move||typeof move.jobKey!=='string'||!move.jobKey.startsWith('u1:'))continue;
   const keyFile=clean(move.jobKey.slice(3).split('|')[0]);
   if(closeOlder ? (!keyFile||keyFile===activeFile) : !candidates.includes(keyFile))continue;
   const selectedEndpoint=String(u1SelectedPrinterIp()||'').trim().toLowerCase();
   const moveEndpoint=String(move.printerIp||'').trim().toLowerCase();
   if(moveEndpoint&&selectedEndpoint&&moveEndpoint!==selectedEndpoint)continue;
   // Legacy movements with no endpoint are not relabelled or finalized by a different printer session.
   if(!moveEndpoint&&selectedEndpoint&&move.printerIdentityLocked)continue;
   const oldConcept=String(move.concept||''), oldNotes=String(move.notes||'');
   const newConcept=oldConcept.replace(/ · impresión en curso \(provisional\)$/i,' · impresión finalizada');
   const newNotes=oldNotes.replace(/^Snapmaker U1 · provisional ·/i,'Snapmaker U1 · finalizada ·');
   if(move.provisional!==false||newConcept!==oldConcept||newNotes!==oldNotes){move.provisional=false;if(typeof move.concept==='string')move.concept=newConcept;if(typeof move.notes==='string')move.notes=newNotes;changed=true;}if(trackedSeconds>0&&(!move.printerIp||!trackedJob?.printerIp||String(move.printerIp).trim()===String(trackedJob.printerIp).trim())){move.actualPrintSeconds=Math.max(Number(move.actualPrintSeconds)||0,trackedSeconds);move.actualPrintHours=move.actualPrintSeconds/3600;move.actualPrintDurationSource='moonraker.print_stats';changed=true;}
  }
  if(changed){localStorage.setItem('pcp_accounting_moves',JSON.stringify(moves));try{window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));}catch(_){}}
  return changed;
 }catch(e){console.warn('[PCP] No se pudo actualizar el estado contable de la impresión finalizada',e);return false}
}

function u1CancelAccountingMoves(file, progressValue){
 try{
  const clean=v=>String(v||'').split(/[\\/]/).pop().trim(), target=clean(file);
  if(!target)return false;
  const moves=JSON.parse(localStorage.getItem('pcp_accounting_moves')||'[]'), ratio=Math.max(0,Math.min(1,Number(progressValue)||0)),trackedJob=u1ReadActive(),trackedSeconds=trackedJob&&clean(trackedJob.file)===target?Math.max(0,Number(trackedJob.actualPrintSeconds)||0):0;
  let changed=false,found=false; const keep=[];
  for(const move of moves){
   const key=String(move?.jobKey||'');
   if(!key.startsWith('u1:')||clean(key.slice(3).split('|')[0])!==target){keep.push(move);continue;}
   if(key.endsWith('|commission')||key.endsWith('|sale')){changed=true;continue;}
   if(move.provisional!==true){keep.push(move);continue;}
   found=true;changed=true;
   const b=move.breakdown&&typeof move.breakdown==='object'?move.breakdown:{};
   const original={filament:Number(b.filament)||0,electricity:Number(b.electricity)||0,wear:Number(b.wear)||0,maintenance:Number(b.maintenance)||0,laborAndExtras:Number(b.laborAndExtras)||0,failureReserve:Number(b.failureReserve)||0,hours:Number(b.hours)||0};
   const partial={};for(const [k,v] of Object.entries(original))partial[k]=v*ratio;
   const amount=partial.filament+partial.electricity+partial.wear+partial.maintenance+partial.laborAndExtras+partial.failureReserve, fmt=n=>n.toFixed(2);
   move.kind='personalExpense';move.amount=Math.max(0,amount);move.customerCharge=null;move.profit=0;delete move.saleDetails;move.breakdown=partial;move.provisional=false;move.cancelled=true;move.cancelledAt=new Date().toISOString();if(trackedSeconds>0){move.actualPrintSeconds=Math.max(Number(move.actualPrintSeconds)||0,trackedSeconds);move.actualPrintHours=move.actualPrintSeconds/3600;move.actualPrintDurationSource='moonraker.print_stats';if(trackedJob){trackedJob.cancelledAt=move.cancelledAt;u1WriteActive(trackedJob);}}
   const existingName=String(move.printerName||move.printer||move.machineName||'').trim();const printerName=!/^(sin impresora asignada|unassigned|no printer assigned)$/i.test(existingName)?existingName:u1ResolvePrinterAlias();
   move.printerName=printerName;move.printer=printerName;move.machineName=printerName;
   const i18n=window.PCP_I18N;
   const concept=i18n?.t('impresión cancelada · coste parcial')||'impresión cancelada · coste parcial';
   move.concept=target+' · '+concept;
   const noteKey="{printer} · cancelada · progreso estimado {progress}% · {hours} h · DESGLOSE: Filamento {filament} €; electricidad {electricity} €; desgaste {wear} €; mantenimiento/recambios {maintenance} €; mano de obra y extras {labor} €; reserva fallos {reserve} €. Coste parcial estimado hasta la cancelación; sin venta ni beneficio.";
   const noteValues={printer:printerName,progress:(ratio*100).toFixed(1),hours:partial.hours.toFixed(2),filament:fmt(partial.filament),electricity:fmt(partial.electricity),wear:fmt(partial.wear),maintenance:fmt(partial.maintenance),labor:fmt(partial.laborAndExtras),reserve:fmt(partial.failureReserve)};
   move.notes=i18n?.format(noteKey,noteValues)||`${printerName} · cancelada · progreso estimado ${noteValues.progress}% · ${noteValues.hours} h · DESGLOSE: Filamento ${noteValues.filament} €; electricidad ${noteValues.electricity} €; desgaste ${noteValues.wear} €; mantenimiento/recambios ${noteValues.maintenance} €; mano de obra y extras ${noteValues.labor} €; reserva fallos ${noteValues.reserve} €. Coste parcial estimado hasta la cancelación; sin venta ni beneficio.`;
   keep.push(move);
  }
  if(changed){localStorage.setItem('pcp_accounting_moves',JSON.stringify(keep));try{window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));}catch(_){}}
  return found;
 }catch(e){console.warn('[PCP] No se pudo recalcular el coste parcial de la impresión cancelada',e);return false}
}


function u1PublishCompletionNotice(job){
 if(!job||!job.completedAt||job.completionNoticeCreated)return;
 const grams=(job.items||[]).reduce((sum,item)=>sum+Math.max(0,Number(item.grams)||0),0);
 const seconds=Math.max(0,Number(job.actualPrintSeconds)||0),time=Math.floor(seconds/3600)+' h '+String(Math.floor(seconds%3600/60)).padStart(2,'0')+' min';
 const printer=String(job.printerName||u1ResolvePrinterAlias()||'—');
 try{
  const notice=window.PCPNotifications?.add({type:'accounting',titleKey:'Impresión finalizada',messageKey:'La impresora {printer} ha terminado {file}. Consumo: {grams} g. Tiempo real: {time}. {deduction}',params:{printer,file:job.file||'—',grams:grams.toFixed(1),time,deduction:job.deducted?'Descuento aplicado':'Descuento no aplicado'},action:'spools',dedupeKey:'print-completed:'+String(job.id),priority:'normal'});
  if(notice){job.completionNoticeCreated=true;u1WriteActive(job,true)}
 }catch(error){console.warn('[PCP] No se pudo publicar el aviso de finalización:',error)}
}

function u1ShowCompletionSummary(job){
 if(!job||!job.completedAt||!job.id)return;
 const shownKey='pcp_u1_completion_summary_shown_v1';
 let shown=[];try{shown=JSON.parse(localStorage.getItem(shownKey)||'[]')}catch(e){}
 if(shown.includes(job.id))return;
 shown.push(job.id);try{localStorage.setItem(shownKey,JSON.stringify(shown.slice(-200)))}catch(e){}
 const words={"title": "Impresión finalizada · Resumen de costes", "file": "Archivo", "filament": "Filamento", "electricity": "Electricidad", "wear": "Desgaste de impresora", "maintenance": "Mantenimiento", "labor": "Mano de obra y extras", "failure": "Reserva por fallos", "total": "Coste total estimado", "grams": "Consumo de filamento", "close": "Cerrar", "note": "Resumen informativo: no se ha registrado ningún gasto ni pedido."};

 const t=k=>window.PCP_I18N?.t(words[k]||k)||words[k]||k, money=n=>{try{return typeof formatMoney==='function'?formatMoney(n,document.getElementById('currency')?.value||'EUR'):Number(n||0).toFixed(2)+' €'}catch(e){return Number(n||0).toFixed(2)+' €'}};
 const printerName=String(job.printerName||u1ResolvePrinterAlias()||'—');
 const seconds=Math.max(0,Number(job.actualPrintSeconds)||0),elapsed=Math.floor(seconds/3600)+' h '+String(Math.floor(seconds%3600/60)).padStart(2,'0')+' min';
 const spools=(()=>{try{return JSON.parse(localStorage.getItem('pcp_spools')||'[]')}catch(e){return []}})();
 let filament=0,grams=0;for(const it of job.items||[]){const g=Math.max(0,Number(it.grams)||0);grams+=g;const sp=Number.isInteger(it.spoolIndex)?spools[it.spoolIndex]:null;if(sp&&Number(sp.initial)>0&&Number(sp.price)>=0)filament+=g*Number(sp.price)/Number(sp.initial)}
 const val=id=>Math.max(0,Number(document.getElementById(id)?.value)||0);
 const hours=(()=>{const n=String(job.file||'').match(/(?:^|[_\s-])(?=\d)(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?(?=\.gcode$|$)/i);if(n&&n[0]&&/[dhms]/i.test(n[0]))return Number(n[1]||0)*24+Number(n[2]||0)+Number(n[3]||0)/60+Number(n[4]||0)/3600;return val('printHours')})();
 const electricity=hours*val('watts')/1000*val('electricity'),wear=hours*val('wear'),maintenance=hours*val('maintenanceHour');
 const labor=val('labor')+val('extra')+val('packing')*Math.max(1,Math.floor(val('qty')||1))+((val('postMinutes')+val('assemblyMinutes'))/60*val('hourlyLabor')*Math.max(1,Math.floor(val('qty')||1)))+val('finishCost')*Math.max(1,Math.floor(val('qty')||1));
 const reserve=(filament+electricity+wear+maintenance+labor)*val('failurePct')/100,total=filament+electricity+wear+maintenance+labor+reserve;
 const overlay=document.createElement('div');overlay.id='pcp-u1-completion-summary';overlay.style.cssText='position:fixed;inset:0;z-index:2147483647;background:rgba(4,10,20,.78);display:flex;align-items:center;justify-content:center;padding:18px;font:14px Arial,sans-serif;color:#eaf1fb';
 const rows=[['filament',filament],['electricity',electricity],['wear',wear],['maintenance',maintenance],['labor',labor],['failure',reserve]];
 overlay.innerHTML='<section class="pcp-print-completion-dialog" role="dialog" aria-modal="true" style="width:min(520px,100%);max-height:90vh;overflow:auto;background:#142238;border:1px solid #55708f;border-radius:14px;box-shadow:0 20px 70px #000;padding:22px"><h2 style="margin:0 0 8px;font-size:20px">'+t('title')+'</h2><p class="pcp-completion-muted" style="margin:0 0 8px;color:#b9c9df">'+t('Impresora')+': <strong>'+u1Esc(printerName)+'</strong></p><p class="pcp-completion-muted" style="margin:0 0 8px;color:#b9c9df;overflow-wrap:anywhere">'+t("Archivo")+': '+u1Esc(job.file||'—')+'</p><p style="margin:0 0 8px;color:#b9c9df">'+t('Tiempo real')+': <strong>'+u1Esc(elapsed)+'</strong></p><p class="pcp-completion-muted" style="margin:0 0 12px;color:#b9c9df">'+t('Filamento consumido')+': <strong>'+grams.toFixed(1)+' g</strong></p><p class="pcp-completion-muted" style="margin:0 0 12px;color:#b9c9df">'+t(job.deducted?'Descuento aplicado':'Descuento no aplicado')+'</p><div>'+rows.map(r=>'<div class="pcp-completion-row" style="display:flex;justify-content:space-between;gap:16px;padding:9px 0;border-bottom:1px solid #34465e"><span>'+t(r[0])+'</span><strong>'+u1Esc(money(r[1]))+'</strong></div>').join('')+'</div><div style="display:flex;justify-content:space-between;gap:16px;padding:15px 0;font-size:18px"><strong>'+t('total')+'</strong><strong>'+u1Esc(money(total))+'</strong></div><p class="pcp-completion-muted" style="font-size:12px;color:#b9c9df">'+t('note')+'</p><button type="button" style="width:100%;padding:11px;border-radius:8px;border:1px solid #65d6c4;background:#164e45;color:white;font-weight:bold;cursor:pointer">'+t('close')+'</button></section>';
 const close=()=>{overlay.remove()};
 overlay.querySelector('button').addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',function esc(e){if(e.key==='Escape'&&overlay.isConnected){close();document.removeEventListener('keydown',esc)}});document.body.appendChild(overlay);
}

function u1ShowCancellationSummary(job, progressValue){
 const shownKey='pcp_u1_cancellation_summary_shown_v1';
 const id=String(job?.id||job?.file||'');if(!id)return;
 let shown=[];try{shown=JSON.parse(localStorage.getItem(shownKey)||'[]')}catch(_){}
 if(shown.includes(id))return;
 shown.push(id);try{localStorage.setItem(shownKey,JSON.stringify(shown.slice(-200)))}catch(_){}
 const t=k=>window.PCP_I18N?.t(k)||k;
 const pct=Math.max(0,Math.min(100,Number(progressValue)||0));
 const overlay=document.createElement('div');overlay.id='pcp-u1-cancellation-summary';
 overlay.style.cssText='position:fixed;inset:0;z-index:2147483647;background:rgba(4,10,20,.78);display:flex;align-items:center;justify-content:center;padding:18px;font:14px Arial,sans-serif;color:#eaf1fb';
 overlay.innerHTML='<section role="dialog" aria-modal="true" style="width:min(480px,100%);background:#142238;border:1px solid #55708f;border-radius:14px;box-shadow:0 20px 70px #000;padding:22px"><h2 style="margin:0 0 10px;font-size:20px">'+u1Esc(t('Impresión cancelada'))+'</h2><p style="margin:0 0 10px;color:#d5e1f0;overflow-wrap:anywhere">'+u1Esc(job.file||'—')+'</p><p style="margin:0 0 16px;color:#b9c9df">'+u1Esc(t('La impresión se ha cancelado. Se ha conservado el coste parcial estimado y no se ha registrado ninguna venta.'))+'</p><p style="margin:0 0 18px;color:#b9c9df">'+u1Esc(t('Progreso al cancelar'))+': <strong>'+pct.toFixed(0)+'%</strong></p><button type="button" style="width:100%;padding:11px;border-radius:8px;border:1px solid #65d6c4;background:#164e45;color:white;font-weight:bold;cursor:pointer">'+u1Esc(t('Cerrar'))+'</button></section>';
 const close=()=>overlay.remove();overlay.querySelector('button').addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',function esc(e){if(e.key==='Escape'&&overlay.isConnected){close();document.removeEventListener('keydown',esc)}});document.body.appendChild(overlay);
}

function u1TrackJob(state,file){
 const st=String(state||'').trim().toLowerCase(), fn=String(file||'').split(/[\\/]/).pop();
 const printing=['printing','paused'].includes(st);
 if(printing&&fn){
  u1FinalizeAccountingMoves('',{activeFile:fn});
 }
 if(printing&&fn&&(!lastU1State||!['printing','paused'].includes(lastU1State)||fn!==lastU1File)){
  if(fn!==lastU1File||!['printing','paused'].includes(lastU1State))u1MetadataFile='';
  u1StartJob(fn);
 }
 // "canceling/cancelling" es una transición, no una cancelación confirmada.
 const cancelled=['cancelled','canceled'].includes(st);
 // No interpretar standby/ready/idle como fin: son estados normales entre trabajos
 // y pueden aparecer mientras el trabajo anterior sigue activo o al cambiar de impresora.
 const completed=['complete','completed','finished'].includes(st) || (['standby','ready','idle'].includes(st) && ['printing','paused'].includes(lastU1State) && u1LastProgress >= 0.995);
 if(cancelled){
  const candidate=fn||lastU1File, activeJob=u1ReadActive();
  const saved=candidate&&u1CancelAccountingMoves(candidate,u1LastProgress);
  u1SetNote(saved?(window.PCP_I18N?.t('Impresión cancelada: coste parcial estimado guardado, sin venta ni beneficio.')||'Impresión cancelada: coste parcial estimado guardado, sin venta ni beneficio.'):(window.PCP_I18N?.t('Impresión cancelada: no se encontró gasto provisional para recalcular.')||'Impresión cancelada: no se encontró gasto provisional para recalcular.'));
  if(activeJob&&candidate&&activeJob.file===candidate)u1ShowCancellationSummary(activeJob,u1LastProgress);
  lastU1State=st;if(fn)lastU1File=fn;u1LastProgress=0;u1RenderConsumption(u1ReadActive());return;
 }
 if(completed){
  const activeJob=u1ReadActive();
  const candidate=fn||lastU1File||(activeJob&&activeJob.file)||'';
  if(activeJob&&candidate&&activeJob.file===candidate&&!activeJob.deducted){
   u1FinalizeAccountingMoves(candidate);
   u1CompleteJob(candidate);
  }
  const completedJob=u1ReadActive();
  if(completedJob&&candidate&&completedJob.file===candidate&&completedJob.completedAt){
   u1PublishCompletionNotice(completedJob);
   u1ShowCompletionSummary(completedJob);
  }
 }
 lastU1State=st;if(fn)lastU1File=fn;u1RenderConsumption(u1ReadActive());
}
function u1ShowCostDialog(options){
 
 
  const t=k=>window.PCP_I18N?.t(k)||k,format=n=>options.formatMoney(n,options.currency),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),minutesTotal=Math.round(Math.max(0,Number(options.hours)||0)*60),hoursText=Math.floor(minutesTotal/60)+' '+t("h")+(minutesTotal%60?' '+(minutesTotal%60)+' '+t("min"):'');
 return new Promise(resolve=>{
  const overlay=document.createElement('div');overlay.className='u1-cost-overlay';overlay.innerHTML='<section class="u1-cost-dialog" role="dialog" aria-modal="true" aria-labelledby="u1CostTitle"><header class="u1-cost-head"><div class="u1-cost-mark" aria-hidden="true">'+(options.kind==='order'?'€':'▣')+'</div><div><h2 id="u1CostTitle">'+esc(t(options.kind==='order'?'Registrar impresión como pedido':'Registrar impresión como gasto personal'))+'</h2><p>'+esc(t(options.kind==='order'?'Revisa el precio cobrado y el desglose antes de registrar el pedido.':'Revisa el coste de fabricación antes de registrarlo en Contabilidad.'))+'</p></div></header><div class="u1-cost-body"><div class="u1-cost-file"><strong>'+esc(t("Archivo"))+':</strong> '+esc(options.file)+'</div><span class="u1-cost-label">'+esc(t("Desglose del coste de fabricación"))+'</span><div class="u1-cost-grid">'+options.lines.map(x=>'<div class="u1-cost-item"><span>'+esc(t(x[0]))+'</span><strong>'+esc(format(x[1]))+'</strong></div>').join('')+'</div><p class="u1-cost-time">'+esc(t("Tiempo de impresión"))+': <strong>'+esc(hoursText)+'</strong></p>'+(options.kind==='order'?'<section class="u1-cost-sale"><span class="u1-cost-label">'+esc(t("Resumen de venta"))+'</span><div class="u1-cost-sale-grid"><div class="u1-cost-item"><span>'+esc(t("Precio configurado por unidad"))+'</span><strong>'+esc(format(options.configured))+'</strong></div><div class="u1-cost-item"><span>'+esc(t("Precio recomendado con impuestos"))+'</span><strong>'+esc(format(options.recommended))+'</strong></div><div class="u1-cost-item"><span>'+esc(t("Base sin impuestos"))+'</span><strong>'+esc(format(options.net))+'</strong></div><div class="u1-cost-item"><span>'+esc(t("Impuestos"))+'</span><strong>'+esc(format(options.tax))+' · '+Number(options.taxPercent||0).toLocaleString(window.PCP_LOCALE||'es-ES',{maximumFractionDigits:2})+'%</strong></div><div class="u1-cost-item"><span>'+esc(t("Comisión"))+'</span><strong>'+esc(format(options.commission))+' · '+Number(options.commissionPercent||0).toLocaleString(window.PCP_LOCALE||'es-ES',{maximumFractionDigits:2})+'%'+'</strong></div></div><p class="u1-cost-hint">'+esc(t("Objetivo de beneficio"))+': '+Number(options.targetMarginPercent||0).toLocaleString(window.PCP_LOCALE||'es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})+'% '+t("o")+' '+esc(format(options.targetProfit||0))+' '+t("mínimo")+'</p><div class="u1-cost-profit" data-profit>'+esc(t("Beneficio estimado"))+': '+esc(format(options.profit))+'</div></section>':'<p class="u1-cost-hint">'+esc(t("Este registro solo contabiliza el gasto. No añade ventas ni beneficio."))+'</p>')+'<div class="u1-cost-entry"><label for="u1CostAmount">'+esc(t(options.kind==='order'?'Importe cobrado':'Coste a registrar'))+'</label><input id="u1CostAmount" type="number" min="0" step="0.01" value="'+Number(options.defaultAmount).toFixed(2)+'" inputmode="decimal"></div></div><footer class="u1-cost-actions"><button type="button" data-cancel>'+esc(t("Cancelar"))+'</button><button type="button" class="primary" data-accept>'+(esc(t(options.kind==='order'?'Confirmar pedido':'Confirmar gasto personal')))+'</button></footer></section>';
  const input=overlay.querySelector('#u1CostAmount'),finish=value=>{overlay.remove();document.removeEventListener('keydown',onKey);resolve(value)},onKey=e=>{if(e.key==='Escape')finish(null);if(e.key==='Enter'){e.preventDefault();accept()}},accept=()=>{const n=Number(String(input.value).replace(',','.'));if(!Number.isFinite(n)||n<0){input.setCustomValidity(t("Introduce un importe válido igual o mayor que cero."));input.reportValidity();return}finish(n)};
  overlay.addEventListener('click',e=>{if(e.target===overlay)finish(null)});overlay.querySelector('[data-cancel]').addEventListener('click',()=>finish(null));overlay.querySelector('[data-accept]').addEventListener('click',accept);document.addEventListener('keydown',onKey);document.body.appendChild(overlay);input.focus();input.select();
  if(options.kind==='order'){const profitEl=overlay.querySelector('[data-profit]');input.addEventListener('input',async ()=>{const gross=Math.max(0,Number(input.value)||0),net=options.taxRate>0?gross/(1+options.taxRate):gross,fee=gross*options.commissionRate+options.fixedFee*options.quantity,profit=net-fee-options.cost;profitEl.textContent=t("Beneficio estimado")+': '+format(profit)})}
 });
}
async function u1RegisterAccounting(kind){
 const t=key=>window.PCP_I18N?.t(key)||key;
 const formatMoney=(n,c='EUR')=>{const value=Number(n);try{return new Intl.NumberFormat(window.PCP_LOCALE||'es-ES',{style:'currency',currency:c||'EUR'}).format(Number.isFinite(value)?value:0)}catch(e){return (Number.isFinite(value)?value:0).toFixed(2)+' '+(c||'EUR')}};
 const job=u1ReadActive();if(!job||!job.file){alert(window.PCP_I18N?.t(t('Todavía no hay una impresión activa detectada. Espera a que el panel muestre el archivo.'))||t('Todavía no hay una impresión activa detectada. Espera a que el panel muestre el archivo.'));return;}
 const stateRaw=String(($('u1-state')&&$('u1-state').textContent)||'').trim().toLowerCase();
 const state=stateRaw.normalize('NFD').replace(/[\\u0300-\\u036f]/g,'');
 // El estado visible está traducido según el idioma seleccionado. Aceptar sus equivalentes para no pedir confirmación provisional durante una impresión activa.
 const knownState=/printing|imprim|druckt|stampa|打印|印刷|طباعة|paused|pause|pausad|pausiert|in pausa|暂停|مؤقت|complete|completed|finished|terminad|finaliz|termine|abgesch|complet|fertig|已完成|完成|standby|ready|listo|prepar|bereit|pronto|espera|attente|待机|就绪|idle|inactivo|inactif|inattivo|leerlauf|空闲|خامل/.test(state);
 if(!knownState){if(!await window.PCPConfirm(window.PCP_I18N?.t(t('El estado de la impresora no está claro. ¿Quieres registrar este trabajo igualmente como provisional?'))||t('El estado de la impresora no está claro. ¿Quieres registrar este trabajo igualmente como provisional?')))return;}
 const moves=(()=>{try{return JSON.parse(localStorage.getItem('pcp_accounting_moves')||'[]')}catch(e){return []}})();
  // Cada trabajo se identifica también por la impresora. El nombre de archivo/startedAt por sí solo no es único entre máquinas.
  const printerIdentity=String(job.printerName||u1ReadActive()?.printerName||u1ResolvePrinterAlias()||'Sin impresora asignada').trim();
  const printerIdentityKey=printerIdentity.toLocaleLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/[^a-z0-9_-]+/g,'_');
  const printerEndpoint=String(job.printerIp||document.getElementById('pcpU1PrinterSelect')?.value||localStorage.getItem('pcp_u1_manual_ip_v180')||localStorage.getItem('pcp_u1_manual_ip_v178')||localStorage.getItem('pcp_u1_manual_ip')||'').trim().toLowerCase();
  let key='u1:'+job.file+'|'+job.startedAt+'|printer:'+printerIdentityKey+(printerEndpoint?'|endpoint:'+printerEndpoint:'');
 const isCancelledPartial=x=>!!x&&(x.cancelled===true||/impresi[oó]n cancelada|cancelled print|impression annul[ée]e|druck abgebrochen|stampa annullata/i.test(String(x.concept||'')+' '+String(x.notes||'')));
 const isCompletedRecord=x=>!!x&&!isCancelledPartial(x)&&/impresi[oó]n finalizada|finished print|impression terminée|druck abgeschlossen|stampa completata/i.test(String(x.concept||'')+' '+String(x.notes||''));
 // Avisar si el mismo archivo ya se registró como impresión finalizada, indicando la fecha y permitiendo crear un nuevo intento independiente.
 const priorCompleted=moves.filter(x=>isCompletedRecord(x)&&String(x.concept||'').toLocaleLowerCase().startsWith(String(job.file||'').toLocaleLowerCase())&&String(x.printerName||x.printer||x.machineName||'').trim().toLocaleLowerCase()===printerIdentity.toLocaleLowerCase()).sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')))[0];
 if(priorCompleted){const dateText=priorCompleted.date?new Date(priorCompleted.date+'T12:00:00').toLocaleDateString(window.PCP_LOCALE||'es-ES'):'—';const message=window.PCP_I18N?.format('Este archivo ya se imprimió y se registró el {date}. ¿Quieres registrarlo como una nueva impresión? Se conservará el movimiento anterior y se creará otro independiente.',{date:dateText})||(window.PCP_I18N?.format('Este archivo ya se imprimió y se registró el {date}. ¿Quieres registrarlo como una nueva impresión? Se conservará el movimiento anterior y se creará otro independiente.',{date:dateText})||`This file was already printed on ${dateText}. Register it as a new print?`);if(!await window.PCPConfirm(message))return;key=key+'|repeat:'+String(job.startedAt||Date.now())+':'+Date.now();}
 let previous=moves.find(x=>x.jobKey===key);
 // Una cancelación conserva su coste parcial, pero no bloquea un nuevo intento del mismo archivo.
 if(previous&&isCancelledPartial(previous)){key=key+'|retry:'+String(job.startedAt||Date.now());previous=moves.find(x=>x.jobKey===key);}
 if(previous){const previousType=previous.kind==='personalExpense'?'personal':'pedido',nextType=kind==='order'?'pedido':'personal';if(previousType===nextType){try{const accountingTab=document.querySelector('[data-tab="accountingView"]');if(accountingTab)accountingTab.click();setTimeout(()=>{window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));const accountingRows=document.getElementById('accountingRows');if(accountingRows&&!accountingRows.querySelector('tbody tr')){const count=(()=>{try{return JSON.parse(localStorage.getItem('pcp_accounting_moves')||'[]').length}catch(_){return -1}})();accountingRows.className='empty';accountingRows.textContent=count>0?(window.PCP_I18N?.format('Se han encontrado {count} movimientos guardados, pero no se han podido mostrar. Recarga la página para sincronizar Contabilidad.',{count})||('Se han encontrado '+count+' movimientos guardados, pero no se han podido mostrar. Recarga la página para sincronizar Contabilidad.')): 'El trabajo figura como registrado, pero no se encuentran movimientos contables guardados. Comprueba la copia de seguridad y el almacenamiento SQLite.';}},80);}catch(e){console.error('[PCP Contabilidad] no se pudo actualizar la vista',e)}alert(window.PCP_I18N?.t('Este trabajo ya figura como registrado. He abierto Contabilidad y solicitado actualizar la lista. Si no aparece el movimiento, no vuelvas a registrarlo: revisa el estado del almacenamiento y la copia de seguridad.')||'Este trabajo ya figura como registrado. He abierto Contabilidad y solicitado actualizar la lista. Si no aparece el movimiento, no vuelvas a registrarlo: revisa el estado del almacenamiento y la copia de seguridad.');return;}const typeLabel=value=>window.PCP_I18N?.t(value==='pedido'?'Pedido de venta':'Gasto propio')||value;const switchMessage=window.PCP_I18N?.format('Este trabajo ya está registrado como {previous}. ¿Quieres cambiarlo a {next}? Se sustituirán las entradas anteriores de este G-code.',{previous:typeLabel(previousType),next:typeLabel(nextType)})||'Este trabajo ya está registrado como '+previousType+'. ¿Quieres cambiarlo a '+nextType+'? Se sustituirán las entradas anteriores de este G-code.';if(!await window.PCPConfirm(switchMessage))return;for(let j=moves.length-1;j>=0;j--)if([key,key+'|sale',key+'|commission'].includes(moves[j].jobKey))moves.splice(j,1)}
 let spools=[];try{spools=JSON.parse(localStorage.getItem('pcp_spools')||'[]')}catch(e){}
 let grams=0,filamentCost=0;const parts=[];(job.items||[]).forEach(it=>{const g=Math.max(0,Number(it.grams)||0);grams+=g;const sp=Number.isInteger(it.spoolIndex)?spools[it.spoolIndex]:null;if(sp&&Number(sp.initial)>0&&Number(sp.price)>=0){filamentCost+=g*Number(sp.price)/Number(sp.initial);parts.push((it.material||it.name||'Filamento')+' '+g.toFixed(1)+' g')}else if(g>0)parts.push((it.material||it.name||'Filamento')+' '+g.toFixed(1)+' g (bobina sin asignar)')});
 // Calcula el coste completo usando los parámetros actuales de la calculadora.
 // Las horas no las proporciona de forma fiable el monitor en todos los estados, por eso se toma el tiempo configurado en Inicio y se pide revisar el desglose.
 const filenameTime=(()=>{const n=String(job.file||'');const m=n.match(/(?:^|[_\s-])(?=\d)(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?(?=\.gcode$|$)/i);if(!m||!m[0]||!/[dhms]/i.test(m[0]))return 0;return (Number(m[1]||0)*24)+Number(m[2]||0)+Number(m[3]||0)/60+Number(m[4]||0)/3600;})();const hours=Math.max(0,filenameTime||Number($('printHours')?.value)||0), watts=Math.max(0,Number($('watts')?.value)||0), electricityRate=Math.max(0,Number($('electricity')?.value)||0), wearRate=Math.max(0,Number($('wear')?.value)||0), maintenanceRate=Math.max(0,Number($('maintenanceHour')?.value)||0), laborJob=Math.max(0,Number($('labor')?.value)||0), extras=Math.max(0,Number($('extra')?.value)||0), packing=Math.max(0,Number($('packing')?.value)||0), qty=Math.max(1,Math.floor(Number($('qty')?.value)||1)), postMinutes=Math.max(0,Number($('postMinutes')?.value)||0), assemblyMinutes=Math.max(0,Number($('assemblyMinutes')?.value)||0), hourlyLabor=Math.max(0,Number($('hourlyLabor')?.value)||0), finishCost=Math.max(0,Number($('finishCost')?.value)||0), failurePct=Math.max(0,Number($('failurePct')?.value)||0);
 const electricityCost=hours*watts/1000*electricityRate, wearCost=hours*wearRate, maintenanceCost=hours*maintenanceRate, laborCost=laborJob+extras+packing*qty+((postMinutes+assemblyMinutes)/60*hourlyLabor*qty)+(finishCost*qty), failureCost=(filamentCost+electricityCost+wearCost+maintenanceCost+laborCost)*failurePct/100, estimatedTotal=filamentCost+electricityCost+wearCost+maintenanceCost+laborCost+failureCost;
 if(filenameTime>0&&$('printHours'))$('printHours').value=filenameTime.toFixed(3);const breakdown='Filamento '+filamentCost.toFixed(2)+' €; electricidad '+electricityCost.toFixed(2)+' €; desgaste '+wearCost.toFixed(2)+' €; mantenimiento/recambios '+maintenanceCost.toFixed(2)+' €; mano de obra y extras '+laborCost.toFixed(2)+' €; reserva fallos '+failureCost.toFixed(2)+' €; tiempo usado '+hours.toFixed(2)+' h'+(filenameTime>0?' (detectado del nombre del archivo)':' (campo de tiempo de Inicio)');
 const currencyCode=$('currency')?.value||'EUR',orderQty=Math.max(1,Math.floor(Number($('qty')?.value)||1)),configuredSalePrice=Math.max(0,Number($('salePrice')?.value)||0),taxPercent=$('taxEnabled')?.checked?Math.min(100,Math.max(0,Number($('taxRate')?.value)||0)):0,taxRate=taxPercent/100,commissionPercent=Math.min(99,Math.max(0,Number($('commission')?.value)||0)),commissionRate=commissionPercent/100,fixedFee=Math.max(0,Number($('fixedCommission')?.value)||0),targetMarginPercent=Math.max(0,Number($('targetMargin')?.value)||0),targetMargin=targetMarginPercent/100,targetProfit=Math.max(0,Number($('targetProfit')?.value)||0),taxCountry=($('taxCountry')?.selectedOptions?.[0]?.textContent||'').trim(),roundingMode=$('priceRounding')?.value||'none';
 const roundGross=value=>{if(!Number.isFinite(value)||value<=0||roundingMode==='none')return value;const cents=Math.round(value*100);if(roundingMode==='up99'||roundingMode==='up95'||roundingMode==='up49'){const ending=roundingMode==='up99'?99:(roundingMode==='up95'?95:49);let whole=Math.floor(cents/100),candidate=whole*100+ending;if(candidate<cents)candidate+=100;return candidate/100;}if(roundingMode==='half')return Math.ceil((value-1e-9)*2)/2;if(roundingMode==='whole')return Math.ceil(value-1e-9);return value;};
 const recommendedForCost=cost=>{const unitCost=Math.max(0,cost)/orderQty,denominator=1-commissionRate*(1+taxRate);if(denominator<=0)return configuredSalePrice;const markupNet=(unitCost*(1+targetMargin)+fixedFee)/denominator,minimumNet=(unitCost+targetProfit+fixedFee)/denominator,requiredGross=roundGross(Math.max(markupNet,minimumNet)*(1+taxRate));return requiredGross/(1+taxRate);};
 let salePrice=kind==='order'?Math.max(configuredSalePrice,recommendedForCost(estimatedTotal)):0,revenue=0,taxAmount=0,grossRevenue=0,commissionAmount=0;
 const refreshSaleTotals=()=>{revenue=kind==='order'?salePrice*orderQty:0;taxAmount=revenue*taxRate;grossRevenue=revenue+taxAmount;commissionAmount=kind==='order'?grossRevenue*commissionRate+fixedFee*orderQty:0;};refreshSaleTotals();
 const buildOrderContext=cost=>{if(kind!=='order')return window.PCP_I18N?.t('No registra ventas, IVA ni beneficios.')||'No registra ventas, IVA ni beneficios.';const applied=Math.max(configuredSalePrice,recommendedForCost(cost)),net=applied*orderQty,tax=net*taxRate,gross=net+tax,fee=gross*commissionRate+fixedFee*orderQty,profit=net-fee-cost;return window.PCP_I18N?.format('Punto 04: precio introducido {entered}; objetivo {margin}% o mínimo {minimum}; precio base aplicado {applied}; venta base total {net}; impuesto {tax} ({rate}%); total al cliente {gross}; comisión {commission}; beneficio estimado {profit}.',{entered:formatMoney(configuredSalePrice,currencyCode),margin:targetMarginPercent.toFixed(2),minimum:formatMoney(targetProfit,currencyCode),applied:formatMoney(applied,currencyCode),net:formatMoney(net,currencyCode),tax:formatMoney(tax,currencyCode),rate:taxPercent.toFixed(2),gross:formatMoney(gross,currencyCode),commission:formatMoney(fee,currencyCode),profit:formatMoney(profit,currencyCode)})||'Punto 04: precio introducido '+formatMoney(configuredSalePrice,currencyCode)+'; objetivo '+targetMarginPercent.toFixed(2)+'% o mínimo '+formatMoney(targetProfit,currencyCode)+'; precio base aplicado '+formatMoney(applied,currencyCode)+'; venta base total '+formatMoney(net,currencyCode)+'; impuesto '+formatMoney(tax,currencyCode)+' ('+taxPercent.toFixed(2)+'%); total al cliente '+formatMoney(gross,currencyCode)+'; comisión '+formatMoney(fee,currencyCode)+'; beneficio estimado '+formatMoney(profit,currencyCode)+'.';};
  const promptDefault=kind==='order'?grossRevenue:estimatedTotal,inputAmount=await u1ShowCostDialog({kind,file:job.file,currency:currencyCode,formatMoney,defaultAmount:promptDefault,lines:[['Filamento',filamentCost],['Electricidad',electricityCost],['Desgaste de impresora',wearCost],['Mantenimiento',maintenanceCost],['Mano de obra y extras',laborCost],['Reserva por fallos',failureCost]],hours,recommended:grossRevenue,configured:configuredSalePrice,net:revenue,tax:taxAmount,taxPercent, taxCountry,commission:commissionAmount,commissionPercent,profit:revenue-commissionAmount-estimatedTotal,targetMarginPercent,targetProfit,taxRate,fixedFee,commissionRate,quantity:orderQty,cost:estimatedTotal});if(inputAmount===null)return;
  let amount=kind==='order'?estimatedTotal:inputAmount;
  if(kind==='order'){grossRevenue=inputAmount;revenue=taxRate>0?grossRevenue/(1+taxRate):grossRevenue;taxAmount=grossRevenue-revenue;salePrice=revenue/orderQty;commissionAmount=grossRevenue*commissionRate+fixedFee*orderQty;}

  const profitEstimate=kind==='order'?revenue-commissionAmount-amount:0;const date=new Date().toISOString().slice(0,10),concept=job.file+(job.completedAt?' · impresión finalizada':' · impresión en curso (provisional)'),provisional=!job.completedAt,accountingNotes=printerIdentity+' · '+(job.completedAt?'finalizada':'provisional')+' · '+grams.toFixed(1)+' g · '+parts.join(', ')+' · DESGLOSE: '+breakdown;const orderSaleDetails=kind==='order'?{unitPrice:salePrice,configuredUnitPrice:configuredSalePrice,appliedUnitPrice:salePrice,quantity:orderQty,currency:currencyCode,taxPercent,taxAmount,grossRevenue,commissionPercent,commissionAmount,taxCountry,targetMarginPercent,targetProfit,achievedMarginPercent:amount>0?profitEstimate/amount*100:0}:undefined;const accountingMove={id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),date,kind:kind==='order'?'orderExpense':'personalExpense',printerName:printerIdentity,printer:printerIdentity,machineName:printerIdentity,printerIp:printerEndpoint,printerIdentityLocked:true,concept,amount,currency:currencyCode,customerCharge:kind==='order'?grossRevenue:null,collectedRevenue:kind==='order'?grossRevenue:null,profit:profitEstimate,notes:accountingNotes,breakdown:{filament:filamentCost,electricity:electricityCost,wear:wearCost,maintenance:maintenanceCost,laborAndExtras:laborCost,failureReserve:failureCost,hours},saleDetails:orderSaleDetails,jobKey:key,provisional};
 if(job.deducted&&job.deductionBySpool&&typeof job.deductionBySpool==='object'){
  const currentSpools=u1Spools();
  accountingMove.filamentDeductions=Object.entries(job.deductionBySpool).map(([index,grams])=>{const spool=currentSpools[Number(index)]||{};return {index:Number(index),spoolId:spool.id??null,brand:spool.brand||'',material:spool.material||'',hex:spool.hex||spool.colorHex||'',color:spool.colorName||spool.color||'',grams:Number(grams)||0};}).filter(item=>item.grams>0);
  accountingMove.filamentInventoryApplied=accountingMove.filamentDeductions.length>0;
  accountingMove.filamentDeductedAt=job.completedAt||new Date().toISOString();
  accountingMove.filamentDeductionGrams=accountingMove.filamentDeductions.reduce((sum,item)=>sum+item.grams,0);
 }
 moves.unshift(accountingMove);if(kind==='order'&&commissionAmount>0)moves.unshift({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),date,kind:'orderExpense',concept:'Comisión estimada · '+job.file,amount:commissionAmount,currency:currencyCode,notes:'Comisión del punto 04 · '+commissionPercent.toFixed(2)+'% sobre '+grossRevenue.toFixed(2)+' '+currencyCode+' cobrado estimado.',jobKey:key+'|commission',provisional});localStorage.setItem('pcp_accounting_moves',JSON.stringify(moves));try{window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));}catch(_){}const cur=n=>formatMoney(n,currencyCode);const notice=kind==='order'?(window.PCP_I18N?.format('Pedido U1 registrado con el punto 04. Coste de fabricación: {cost}. Venta base sin impuestos: {net}. Impuesto: {tax}. Total cobrado estimado: {gross}. Comisión: {commission}. Beneficio estimado: {profit}.',{cost:cur(amount),net:cur(revenue),tax:cur(taxAmount),gross:cur(grossRevenue),commission:cur(commissionAmount),profit:cur(profitEstimate)})||window.PCP_I18N?.t('Pedido U1 registrado usando el punto 04.')||'Pedido U1 registrado usando el punto 04.'): (window.PCP_I18N?.format('Impresión U1 registrada como gasto personal. Coste total de fabricación: {cost}.',{cost:cur(amount)})||window.PCP_I18N?.t('Impresión U1 registrada como gasto personal.')||'Impresión U1 registrada como gasto personal.');alert(notice+(provisional?' '+(window.PCP_I18N?.t('Está marcada como provisional; revísala cuando termine la impresión.')||'Está marcada como provisional; revísala cuando termine la impresión.'):'') );try{document.querySelector('[data-tab="accountingView"]')?.click()}catch(e){}
 }
  const regPersonal=$('u1-register-personal'),regOrder=$('u1-register-order');if(regPersonal)regPersonal.addEventListener('click',async()=>{try{await u1RegisterAccounting('personal')}catch(e){console.error('Registro personal U1:',e);alert(window.PCP_I18N?.format('No se pudo registrar como personal: {message}',{message:e&&e.message?e.message:'error inesperado'})||('No se pudo registrar como personal: '+(e&&e.message?e.message:'error inesperado')))}});if(regOrder)regOrder.addEventListener('click',async()=>{try{await u1RegisterAccounting('order')}catch(e){console.error('Registro de pedido U1:',e);alert(window.PCP_I18N?.format('No se pudo registrar como pedido: {message}',{message:e&&e.message?e.message:'error inesperado'})||('No se pudo registrar como pedido: '+(e&&e.message?e.message:'error inesperado')))}});
 const sendCalc=$('u1-send-calculate');if(sendCalc)sendCalc.addEventListener('click',()=>{const job=u1ReadActive();if(!job||!Array.isArray(job.items)||!job.items.length){u1SetNote(window.PCP_I18N?.t('No hay un G-code activo con filamentos para enviar a la calculadora.')||'No hay un G-code activo con filamentos para enviar a la calculadora.');return;}if(typeof window.PCPImportMonitorJob!=='function'){u1SetNote(window.PCP_I18N?.t('La calculadora todavía no está preparada para recibir los datos.')||'La calculadora todavía no está preparada para recibir los datos.');return;}window.PCPImportMonitorJob(job);});
 $('u1-refresh').addEventListener('click',()=>{u1RenderConsumption(u1ReadActive());poll()});const fr=document.getElementById('filamentRows');if(fr){fr.addEventListener('input',()=>u1RenderConsumption(u1ReadActive()));fr.addEventListener('change',()=>u1RenderConsumption(u1ReadActive()));}u1RenderConsumption(u1ReadActive());const syncMinimizeButton=()=>{const button=$('u1-minimize'),content=$('u1-monitor-content');if(!button||!content)return;content.style.display=minimized?'none':'';const key=minimized?'Mostrar':'Ocultar';button.dataset.i18n=key;button.textContent=window.PCP_I18N?.t(key)||key;button.setAttribute('aria-expanded',String(!minimized));button.setAttribute('aria-label',window.PCP_I18N?.t(key)||key);};
syncMinimizeButton();
$('u1-minimize').addEventListener('click',()=>{minimized=!minimized;syncMinimizeButton();});
window.addEventListener('pcp-language-changed',syncMinimizeButton);window.addEventListener('pcp-app-resumed',()=>{poll()});document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){poll()}});$('u1-hide').addEventListener('click',()=>{$('u1-monitor-panel').hidden=true;$('u1-restore-floating').style.display='block'});$('u1-restore-floating').addEventListener('click',()=>{$('u1-monitor-panel').hidden=false;$('u1-restore-floating').style.display='none';poll()});poll();setInterval(poll,5000);window.addEventListener('pcp-u1-live-spool-created',event=>{const detail=event.detail||{},job=u1ReadActive(),idx=Number(detail.spoolIndex);if(!job||!Array.isArray(job.items)||!Number.isInteger(idx))return;const sp=u1Spools()[idx];if(!sp)return;const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9+]/g,''),hex=String(sp.hex||sp.colorHex||'').toUpperCase();const matches=job.items.filter(item=>(item.spoolIndex===''||item.spoolIndex==null)&&(!item.material||!sp.material||norm(item.material)===norm(sp.material)||norm(item.material).startsWith(norm(sp.material))||norm(sp.material).startsWith(norm(item.material)))&&(!item.color||!hex||String(item.color).toUpperCase()===hex));if(matches.length===1){matches[0].spoolIndex=idx;matches[0].spoolId=sp.id??null;matches[0].selectedSpoolId=sp.id??null;u1WriteActive(job);u1RenderConsumption(job);u1SetNote('Bobina creada y asignada al material coincidente del trabajo actual.');}else{u1SetNote('Bobina creada en inventario. Revisa la asignación en el consumo del trabajo.');}});window.addEventListener('pcp-u1-spool-assigned',event=>{const detail=event.detail||{},job=u1ReadActive(),row=Number(detail.row),index=Number(detail.spoolIndex);if(!job||!Array.isArray(job.items)||!job.items[row]||(detail.jobId&&job.id!==detail.jobId))return;job.items[row].spoolIndex=index;job.items[row].alternateSpoolSelected=true;u1WriteActive(job);u1RenderConsumption(job);u1SetNote(window.PCP_I18N?.t('Bobina creada y asignada. Se descontará el consumo al finalizar la impresión.')||'Bobina creada y asignada. Se descontará el consumo al finalizar la impresión.');});})();
