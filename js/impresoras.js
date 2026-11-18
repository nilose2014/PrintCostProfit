(function(){
 'use strict';
 const $=id=>document.getElementById(id),grid=$('pcpPrintersGrid'),details=$('pcpPrintersDetails'),refresh=$('pcpPrintersRefresh'),overview=$('pcpPrintersOverview');
 if(!grid||!refresh)return;
 const tr=s=>window.PCP_I18N?.t?.(s)||s;
 const esc=s=>String(s??'—').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const root=()=>(( $('pcpPrinterUrl')?.value||'http://127.0.0.1:8700').trim().replace(/\/+$/,''));
 const request=async (path,ms=12000)=>{const url=root()+path+(path.includes('?')?'&':'?')+'_='+Date.now(),c=new AbortController(),timer=setTimeout(()=>c.abort(),ms);try{const r=window.PCP_PRINTER_DIRECT&&path.startsWith('/api/u1/')?await window.PCP_PRINTER_DIRECT.fetch(url):await fetch(url,{cache:'no-store',signal:c.signal});let d={};try{d=await r.json()}catch(_){}if(!r.ok||d.ok===false)throw new Error(d.error||('HTTP '+r.status));return d;}finally{clearTimeout(timer)}};
 const headStatsCache=new Map(),headStatsLoading=new Set();
 const lastGoodPrinterStatus=new Map(),PRINTER_OFFLINE_GRACE_MS=90000;
 let storedPrintersLoaded=false;
 const HEAD_STATS_PREFIX='pcp_printer_head_stats_v4_';
 const HISTORY_SAVE_INTERVAL=1800000,historyLastSaved=new Map();
 function persistIfChanged(key,value){try{const old=localStorage.getItem(key);if(old!==value)localStorage.setItem(key,value);return true;}catch(_){return false;}}
 function loadSavedHeadStats(ip){try{const raw=localStorage.getItem(HEAD_STATS_PREFIX+ip);if(!raw)return null;const data=JSON.parse(raw);return data&&data.schema===3&&data.byHead?data:null;}catch(_){return null;}}
 let loadingModal=null;
 function progress(show,percent=0,message='Cargando impresora…'){
  if(!show&&!loadingModal)return;
  if(show&&!loadingModal){
   loadingModal=document.createElement('div');loadingModal.className='pcp-printer-loading-overlay';
   loadingModal.innerHTML=`<section class="pcp-printer-loading-dialog" role="status" aria-live="polite"><div class="pcp-printer-loading-spinner"></div><h3>${esc(tr('Cargando impresora'))}</h3><p data-loading-message></p><div class="pcp-printer-loading-track"><i data-loading-bar></i></div><strong data-loading-percent>0%</strong></section>`;
   document.body.appendChild(loadingModal);
  }
  if(!show){loadingModal?.remove();loadingModal=null;return;}
  const msg=loadingModal.querySelector('[data-loading-message]'),bar=loadingModal.querySelector('[data-loading-bar]'),pct=loadingModal.querySelector('[data-loading-percent]');
  if(msg)msg.textContent=tr(message);if(bar)bar.style.width=Math.max(0,Math.min(100,percent))+'%';if(pct)pct.textContent=Math.round(percent)+'%';
 }
 async function loadHeadStatistics(ip,force=false){
  if(!ip||headStatsLoading.has(ip))return;
  if(!force&&headStatsCache.has(ip))return;
  headStatsLoading.add(ip);
  const output=$('pcpPrinterEventsOutput'),button=$('pcpPrinterLoadLogs');
  if(output&&!output.dataset.loaded)output.textContent=tr('Leyendo contadores persistentes de los cabezales…');
  if(button)button.disabled=true;
  try{
   const data=await request('/api/printers/logs?ip='+encodeURIComponent(ip),45000);
   const recorder=data.headRecorder&&typeof data.headRecorder==='object'?data.headRecorder:{};
   const heads=Array.from(document.querySelectorAll('.pcp-head-stat-card')).map(card=>card.dataset.headKey).filter(Boolean);
   const byHead={};let available=0;
   for(const key of heads){
    const raw=recorder[key]||recorder[key.toLowerCase()]||null;
    const valid=raw&&['switch_count','retry_count','error_count'].some(k=>raw[k]!==null&&raw[k]!==undefined&&Number.isFinite(Number(raw[k])));
    if(!valid){byHead[key]={changes:null,errors:null,retries:null,fanErrors:null,maintenance:null};continue;}
    available++;
    const num=k=>raw[k]===null||raw[k]===undefined||!Number.isFinite(Number(raw[k]))?null:Math.max(0,Number(raw[k]));
    const errors=num('error_count'),fanErrors=num('fan_error_count');
    byHead[key]={
     changes:num('switch_count'),
     errors:errors===null&&fanErrors===null?null:(errors||0)+(fanErrors||0),
     retries:num('retry_count'),fanErrors,
     maintenance:num('last_maintenance_count')
    };
   }
   if(!data.headRecorderAvailable||!available)throw new Error(data.headRecorderError||tr('Moonraker no ha proporcionado los contadores persistentes de los cabezales.'));
   const stats={schema:3,source:data.headRecorderSource||'moonraker',byHead,updatedAt:data.updatedAt||new Date().toISOString(),recorderPath:data.headRecorderPath||'',headsAvailable:available};
   headStatsCache.set(ip,stats);
   persistIfChanged(HEAD_STATS_PREFIX+ip,JSON.stringify(stats));
   applyHeadStatistics(ip);
   if(output){output.dataset.loaded='1';output.textContent=`${tr('Contadores persistentes leídos desde Moonraker')}: ${available}/${heads.length} · ${tr('Cambios registrados')}: ${Object.values(byHead).reduce((a,v)=>a+(Number.isFinite(v.changes)?v.changes:0),0)} · ${tr('Errores registrados')}: ${Object.values(byHead).reduce((a,v)=>a+(Number.isFinite(v.errors)?v.errors:0),0)}`;}
  }catch(err){
   const cached=headStatsCache.get(ip)||loadSavedHeadStats(ip);
   if(cached&&cached.schema===3){headStatsCache.set(ip,cached);applyHeadStatistics(ip);if(output){output.dataset.loaded='1';output.textContent=tr('Se muestran los últimos contadores persistentes guardados; no se pudieron actualizar.')+' '+String(err.message||err);}}
   else if(output){output.dataset.loaded='1';output.textContent=tr('No se pudieron leer los contadores persistentes de los cabezales: ')+String(err.message||err);}
  }finally{headStatsLoading.delete(ip);if(button)button.disabled=false;}
 }
 function applyHeadStatistics(ip){
  const stats=headStatsCache.get(ip);if(!stats)return;
  document.querySelectorAll('.pcp-head-stat-card').forEach(card=>{
   const values=stats.byHead[card.dataset.headKey];if(!values)return;
   const changes=card.querySelector('[data-head-changes]'),errors=card.querySelector('[data-head-errors]'),retries=card.querySelector('[data-head-retries]');
   if(changes)changes.textContent=Number.isFinite(values.changes)?values.changes:'—';if(errors)errors.textContent=Number.isFinite(values.errors)?values.errors:'—';if(retries)retries.textContent=Number.isFinite(values.retries)?values.retries:'—';
  });
 }
 const get=(o,path)=>path.split('.').reduce((v,k)=>v==null?undefined:v[k],o);
 const first=(...v)=>v.find(x=>x!==undefined&&x!==null&&x!=='');
 const duration=v=>{if(v===undefined||v===null||!Number.isFinite(Number(v)))return '—';let s=Math.max(0,Math.floor(Number(v))),h=Math.floor(s/3600),m=Math.floor(s%3600/60);return h?`${h} h ${m} min`:`${m} min`};
 const aliases=()=>{try{return JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}')}catch(_){return {}}};
 const saved=()=>{try{const a=JSON.parse(localStorage.getItem('pcp_u1_discovered_printers')||'[]');return Array.isArray(a)?a:[]}catch(_){return []}};
 const setStatus=(message,bad=false)=>{$('pcpPrintersConnectionText').textContent=message;$('pcpPrintersConnectionDot').classList.toggle('is-error',bad)};
 function printerCard(p){
  const st=p.status||{},ps=st.print_stats||{},ds=st.display_status||{},vs=st.virtual_sdcard||{};
  const state=String(first(ps.state,p.state,'offline')).toLowerCase(),online=p.online===true;
  const printing=online&&['printing','paused'].includes(state),progress=first(ds.progress,vs.progress);
  const pct=progress===undefined?0:Math.max(0,Math.min(100,Number(progress)>1?Number(progress):Number(progress)*100));
  const findMetric=(root,names)=>{
   const wanted=new Set(names.map(n=>n.toLowerCase()));let found;
   const walk=(value,depth=0)=>{
    if(found!==undefined||!value||typeof value!=='object'||depth>5)return;
    for(const [k,v] of Object.entries(value)){
     if(wanted.has(k.toLowerCase())&&v!==null&&v!==''&&Number.isFinite(Number(v))){found=Number(v);return;}
     if(v&&typeof v==='object')walk(v,depth+1);
    }
   };walk(root);return found;
  };
  const current=first(ps.info?.current_layer,ds.current_layer,ds.layer,ps.current_layer,
   findMetric(st,['current_layer','layer_num','layer_number','layer']));
  const total=first(ps.info?.total_layer,ds.total_layer,ds.layer_count,ps.total_layer,
   findMetric(st,['total_layer','total_layers','layer_count','max_layer']));
  const layers=current===undefined&&total===undefined?tr('No disponible'):`${first(current,'—')} / ${first(total,'—')}`;
  const name=String(aliases()[p.ip]||p.alias||p.name||p.hostname||p.ip),selected=p.ip===localStorage.getItem('pcp_printers_detail_selected_ip');
  const file=printing?first(ps.filename,p.filename,tr('Sin archivo')):tr('Sin impresión activa');
  const statusLabel=!online?tr('Sin conexión'):state==='printing'?tr('Imprimiendo'):state==='paused'?tr('En pausa'):state==='complete'?tr('Finalizada'):state==='error'?tr('Error'):tr('En línea');
  const model=first(p.model,p.printerModel,p.machineModel,p.hostname,tr('No identificado'));
  const elapsed=first(ps.print_duration,ps.total_duration);
  const remain=pct>0&&pct<100&&elapsed!==undefined?Number(elapsed)*(100-pct)/pct:undefined;
  return `<article class="pcp-printer-card pcp-printer-live-card ${online?'is-online':'is-offline'} ${selected?'is-selected':''}" data-printer-ip="${esc(p.ip)}" role="button" tabindex="0" aria-pressed="${selected}" title="${esc(tr('Ver detalles de esta impresora'))}">
   <header class="pcp-live-card-head"><div><h3>${esc(name)}</h3><small>${esc(p.ip)}</small></div><span class="pcp-live-status ${online?'online':'offline'}"><i></i>${esc(statusLabel)}</span></header>
   <div class="pcp-live-model"><span>${esc(tr('Modelo'))}</span><strong>${esc(model)}</strong></div>
   <div class="pcp-live-job"><span>${esc(tr('Pieza actual'))}</span><strong title="${esc(file)}">${esc(file)}</strong></div>
   <div class="pcp-live-progress"><div><span>${esc(tr('Progreso'))}</span><b>${online&&printing?pct.toFixed(1)+'%':'—'}</b></div><div class="pcp-live-track"><i style="width:${online&&printing?pct:0}%"></i></div></div>
   <div class="pcp-live-card-foot"><span>${esc(tr('Capas'))}: <b>${esc(online&&printing?layers:'—')}</b></span><span>${esc(tr('Transcurrido'))}: <b>${esc(online&&printing?duration(elapsed):'—')}</b></span><span>${esc(tr('Restante'))}: <b>${esc(online&&printing?duration(remain):'—')}</b></span></div>
  </article>`;
 }
 function renderCards(list){grid.innerHTML=list.length?list.map(printerCard).join(''):`<article class="pcp-printer-card"><h3>${esc(tr('No hay impresoras guardadas'))}</h3><p>${esc(tr('Pulsa Actualizar para buscar las impresoras conocidas.'))}</p></article>`;}
 function syncPrinterCards(list){
  const wanted=list.map(p=>({p,html:printerCard(p)}));
  const keep=new Set(list.map(p=>String(p.ip)));
  grid.querySelectorAll('[data-printer-ip]').forEach(node=>{if(!keep.has(node.dataset.printerIp))node.remove()});
  if(!wanted.length){grid.replaceChildren();return;}
  const empty=grid.querySelector('.pcp-empty-printers');if(empty)empty.remove();
  wanted.forEach(({p,html},index)=>{
   const tmp=document.createElement('div');tmp.innerHTML=html;
   const fresh=tmp.firstElementChild,old=grid.querySelector(`[data-printer-ip="${CSS.escape(String(p.ip))}"]`);
   if(old){
    if(old.className!==fresh.className)old.className=fresh.className;
    if(old.innerHTML!==fresh.innerHTML)old.innerHTML=fresh.innerHTML;
    old.setAttribute('aria-pressed',fresh.getAttribute('aria-pressed'));
    old.title=fresh.title;
   }else grid.appendChild(fresh);
  });
  // Reorder only if discovery order actually changed; do not detach cards on normal polling.
  const order=wanted.map(x=>String(x.p.ip));
  const current=[...grid.querySelectorAll('[data-printer-ip]')].map(x=>x.dataset.printerIp);
  if(order.some((ip,i)=>current[i]!==ip))order.forEach(ip=>{const node=grid.querySelector(`[data-printer-ip="${CSS.escape(ip)}"]`);if(node)grid.appendChild(node)});
 }

 function render(meta,payload){
  const st=payload?.status||payload?.result?.status||payload||{},ps=st.print_stats||{},ds=st.display_status||{},vs=st.virtual_sdcard||{},wh=st.webhooks||{},bed=st.heater_bed||{},tool=st.toolhead||{};
  const extruderNames=Object.keys(st).filter(k=>/^extruder\d*$/.test(k)).sort((a,b)=>(a==='extruder'?0:Number(a.replace('extruder',''))||0)-(b==='extruder'?0:Number(b.replace('extruder',''))||0));
  const name=first(aliases()[meta.ip],meta.name,meta.hostname,meta.ip,'—'),state=first(ps.state,meta.state,'—'),filename=first(ps.filename,meta.filename,'—'),progress=first(ds.progress,vs.progress);
  const frac=progress===undefined?0:Math.max(0,Math.min(1,Number(progress)>1?Number(progress)/100:Number(progress))),elapsed=first(ps.print_duration,ps.total_duration,ds.print_duration),remaining=frac>0&&frac<1&&elapsed!==undefined?Number(elapsed)*(1-frac)/frac:undefined;
  const findMetric=(root,names)=>{
   const wanted=new Set(names.map(n=>n.toLowerCase()));let found;
   const walk=(value,depth=0)=>{
    if(found!==undefined||!value||typeof value!=='object'||depth>5)return;
    for(const [k,v] of Object.entries(value)){
     if(wanted.has(k.toLowerCase())&&v!==null&&v!==''&&Number.isFinite(Number(v))){found=Number(v);return;}
     if(v&&typeof v==='object')walk(v,depth+1);
    }
   };walk(root);return found;
  };
  const layer=first(ps.info?.current_layer,ds.current_layer,ds.layer,ps.current_layer,findMetric(st,['current_layer','layer_num','layer_number','layer'])),
   totalLayers=first(ps.info?.total_layer,ds.total_layer,ds.layer_count,ps.total_layer,findMetric(st,['total_layer','total_layers','layer_count','max_layer'])),
   layerText=layer===undefined&&totalLayers===undefined?tr('No disponible'):`${first(layer,'—')} / ${first(totalLayers,'—')}`;
  const pct=progress===undefined?'—':(frac*100).toFixed(1)+'%';
  const rawHistoryTotals=payload?.historyTotals||{},historyTotals=rawHistoryTotals.job_totals||rawHistoryTotals.result?.job_totals||rawHistoryTotals,historyJobs=Array.isArray(payload?.historyJobs)?payload.historyJobs:[],bedMesh=st.bed_mesh||{},probe=st.probe||{},cfg=st.configfile?.settings||{};
  // Moonraker /server/history/totals devuelve los acumulados dentro de result.job_totals.
  // Se admiten también respuestas planas de firmwares compatibles.
  const historyCount=first(historyTotals.total_jobs,historyTotals.job_count,historyTotals.total_prints);
  const historySeconds=first(historyTotals.total_print_time,historyTotals.print_time,historyTotals.total_duration);
  const historyPowered=first(historyTotals.total_time,historyTotals.total_machine_time,historyTotals.total_powered_time);
  const historyFilament=first(historyTotals.total_filament_used,historyTotals.filament_used,historyTotals.total_filament);
  const cfgProbe=cfg.probe||{},mesh=bedMesh.mesh_matrix||[],meshRows=Array.isArray(mesh)?mesh.length:0,meshCols=meshRows&&Array.isArray(mesh[0])?mesh[0].length:0;
  // Descubrimiento térmico por capacidades, no por modelo: cualquier objeto
  // publicado por Moonraker con temperatura medida entra en el historial.
  const deviceLabel=key=>{
   const raw=String(key||'').replace(/^(temperature_sensor|heater_generic|temperature_fan|heater_fan|fan_generic)\\s+/i,'');
   const normalized=raw.toLowerCase().replace(/[ -]+/g,'_');
   const exact={
    extruder:'Extrusor',extruder1:'Extrusor 1',heater_bed:'Cama calefactora',
    chamber_heater:'Calentador de cámara',chamber_fan:'Ventilador de cámara',
    chamber_temp:'Temperatura de cámara',chamber_temperature:'Temperatura de cámara',
    mcu_temp:'Temperatura MCU',mcu_temperature:'Temperatura MCU',
    cavity:'Cavidad',x_driver:'Controlador X',y_driver:'Controlador Y'
   };
   if(exact[normalized])return tr(exact[normalized]);
   const extruderMatch=normalized.match(/^extruder(\\d+)$/);if(extruderMatch)return tr('Extrusor '+extruderMatch[1]);
   return raw.replace(/_/g,' ').replace(/\\b[a-z]/g,c=>c.toUpperCase());
  };
  const tempValues=[];
  Object.keys(st).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).forEach(key=>{
   const obj=st[key];
   if(!obj||typeof obj!=='object')return;
   const raw=first(obj.temperature,obj.measured_temp,obj.temperature_value);
   if(raw===undefined||raw===null||raw===''||!Number.isFinite(Number(raw)))return;
   // Fans and other devices are included only if they actually publish a
   // measured temperature; fan speed alone is never plotted as °C.
   tempValues.push({key,label:deviceLabel(key),value:Number(raw),target:first(obj.target,obj.target_temp),power:first(obj.power)});
  });
  const fanValues=Object.keys(st).filter(key=>/(^fan$|\\bfan\\b|fan_)/i.test(key)).map(key=>{
   const obj=st[key]||{},speed=first(obj.speed,obj.value),rpm=first(obj.rpm,obj.rpm_speed);
   if(speed===undefined&&rpm===undefined)return null;
   return {key,label:deviceLabel(key),speed:speed===undefined?undefined:Number(speed),rpm:rpm===undefined?undefined:Number(rpm)};
  }).filter(Boolean);
  const historyKey='pcp_temperature_history_v2093_'+String(meta.ip||'unknown');
  let samples=temperatureHistory.get(meta.ip);
  if(!samples){
   try{const saved=JSON.parse(localStorage.getItem(historyKey)||'[]');samples=Array.isArray(saved)?saved:[]}catch(_){samples=[]}
  }
  const now=Date.now(),windowMs=20*60*1000;
  samples=samples.filter(sample=>sample&&Number.isFinite(Number(sample.time))&&now-Number(sample.time)<=windowMs&&Array.isArray(sample.values));
  if(tempValues.length){
   const last=samples[samples.length-1];
   if(!last||now-Number(last.time)>=30000)samples.push({time:now,values:tempValues.map(({key,label,value})=>({key,label,value}))});
  }
  samples=samples.slice(-140);temperatureHistory.set(meta.ip,samples);
  const lastHistorySave=historyLastSaved.get(historyKey)||0;
  if(now-lastHistorySave>=HISTORY_SAVE_INTERVAL){if(persistIfChanged(historyKey,JSON.stringify(samples)))historyLastSaved.set(historyKey,now);}
  const chartWidth=1000,chartHeight=260,left=58,right=985,top=18,bottom=220,plotW=right-left,plotH=bottom-top;
  const values=samples.flatMap(sample=>sample.values.map(v=>Number(v.value))).filter(Number.isFinite);
  const maxTemp=Math.max(100,Math.ceil(Math.max(300,...values)/50)*50),minTemp=0;
  const yFor=value=>bottom-(Math.max(minTemp,Math.min(maxTemp,value))/maxTemp)*plotH;
  const chartGrid=Array.from({length:7},(_,i)=>{const value=Math.round(maxTemp*i/6/10)*10,y=yFor(value);return `<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" class="pcp-chart-gridline"/><text x="${left-12}" y="${y+4}" text-anchor="end" class="pcp-chart-axis">${value}</text>`}).join('');
  const timeAt=x=>new Date(x).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  const timeTicks=Array.from({length:6},(_,i)=>{const t=now-windowMs+(windowMs*i/5),x=left+plotW*i/5;return `<line x1="${x}" y1="${top}" x2="${x}" y2="${bottom}" class="pcp-chart-gridline pcp-chart-gridline-v"/><text x="${x}" y="${bottom+22}" text-anchor="${i===0?'start':i===5?'end':'middle'}" class="pcp-chart-axis">${esc(timeAt(t))}</text>`}).join('');
  const channels=new Map();tempValues.forEach(v=>channels.set(v.key,v));
  samples.forEach(sample=>sample.values.forEach(v=>{if(!channels.has(v.key))channels.set(v.key,{key:v.key,label:v.label,value:Number(v.value)})}));
  const channelList=[...channels.values()];
  // Paleta de alto contraste. El mapa se guarda para que cada sensor conserve
  // el mismo color entre sesiones y entre actualizaciones del panel.
  const channelPalette=["#22D3EE", "#F97316", "#E879F9", "#84CC16", "#3B82F6", "#EF4444", "#FACC15", "#A78BFA", "#14B8A6", "#FB7185", "#F59E0B", "#94A3B8"];
  const channelColorMapKey='pcp_temperature_sensor_colors_v1';
  let channelColorMap={};try{channelColorMap=JSON.parse(localStorage.getItem(channelColorMapKey)||'{}')||{}}catch(_){channelColorMap={}}
  const channelColor=key=>{
   const id=String(key);
   if(channelColorMap[id])return channelColorMap[id];
   const used=new Set(Object.values(channelColorMap));
   const color=channelPalette.find(c=>!used.has(c))||`hsl(${(Object.keys(channelColorMap).length*137.508)%360} 88% 58%)`;
   channelColorMap[id]=color;
   try{localStorage.setItem(channelColorMapKey,JSON.stringify(channelColorMap))}catch(_){}
   return color;
  };
  const chartLines=channelList.map((item,index)=>{
   const color=channelColor(item.key);
   const pts=samples.map(sample=>{const found=sample.values.find(v=>v.key===item.key);if(!found||!Number.isFinite(Number(found.value)))return null;const x=left+((Number(sample.time)-(now-windowMs))/windowMs)*plotW;return {x,y:yFor(Number(found.value))}}).filter(Boolean);
   return pts.length?`<polyline points="${pts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="2.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"><title>${esc(item.label)}</title></polyline>`:'';
  }).join('');
  const chart=`<section class="pcp-printer-card pcp-printer-chart"><div class="pcp-chart-heading"><div><span class="pcp-printer-eyebrow">${esc(tr('SISTEMA TÉRMICO'))}</span><h3>${esc(tr('Historial de temperaturas'))}</h3><p>${esc(tr('Últimos 20 minutos · actualización automática'))}</p></div><strong>${channelList.length} ${esc(tr('sensores'))}</strong></div><div class="pcp-temp-chart pcp-temp-chart-fluidd"><svg viewBox="0 0 ${chartWidth} ${chartHeight+34}" preserveAspectRatio="none" role="img" aria-label="${esc(tr('Evolución de temperaturas'))}">${chartGrid}${timeTicks}${chartLines}</svg></div><div class="pcp-chart-legend">${tempValues.map(v=>`<span><i style="background:${channelColor(v.key)}"></i>${esc(v.label)} · ${v.value.toFixed(1)} °C${v.target!==undefined&&Number.isFinite(Number(v.target))?` / ${Number(v.target).toFixed(1)} °C`:''}</span>`).join('')}</div></section>`;

  if(overview){const heroMarkup=`<section class="pcp-printer-hero"><div class="pcp-printer-hero-main"><div class="pcp-printer-eyebrow">${esc(tr('ESTADO DE LA MÁQUINA'))}</div><h2>${esc(name)}</h2><div class="pcp-printer-hero-meta"><span class="pcp-live-dot"></span>${esc(tr('Conectada'))} · ${esc(state)} · ${esc(first(meta.ip,'—'))}</div><div class="pcp-current-file"><span>▤</span><div><small>${esc(tr('Impresión actual'))}</small><strong>${esc(filename)}</strong></div></div></div><div class="pcp-progress-ring" style="--progress:${Math.round(frac*100)}"><div><strong>${esc(pct)}</strong><small>${esc(tr('Completado'))}</small></div></div><div class="pcp-hero-stats"><div><small>${esc(tr('Tiempo transcurrido'))}</small><strong>${esc(duration(elapsed))}</strong></div><div><small>${esc(tr('Tiempo restante'))}</small><strong>${esc(duration(remaining))}</strong></div><div><small>${esc(tr('Capas'))}</small><strong>${esc(layerText)}</strong></div></div></section>`;if(overview.innerHTML!==heroMarkup)overview.innerHTML=heroMarkup;}
  const number=(v,u='')=>v===undefined||v===null?'—':(typeof v==='number'&&!Number.isInteger(v)?v.toFixed(1):v)+u;
  const card=(title,rows)=>`<article class="pcp-printer-card"><h3>${esc(tr(title))}</h3><dl>${rows.map(([k,v])=>`<div><dt>${esc(tr(k))}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></article>`;
  const thermal=tempValues.map(sensor=>{
   const obj=st[sensor.key]||{};
   return card(sensor.label,[
    ['Temperatura actual',number(sensor.value,' °C')],
    ['Temperatura objetivo',sensor.target===undefined?'—':number(Number(sensor.target),' °C')],
    ['Potencia',sensor.power===undefined?'—':number(Number(sensor.power)*100,'%')]
   ]);
  }).join('');
  const model=first(meta.model,meta.printerModel,meta.machineModel,meta.hostname,tr('No identificado'));

  const meshValues=Array.isArray(bedMesh.mesh_matrix)?bedMesh.mesh_matrix:(Array.isArray(bedMesh.probed_matrix)?bedMesh.probed_matrix:[]);
  const validMesh=meshValues.length>=2&&meshValues.every(row=>Array.isArray(row)&&row.length===meshValues[0].length&&row.length>=2&&row.every(v=>Number.isFinite(Number(v))));
  const meshFlat=validMesh?meshValues.flat().map(Number):[];
  const meshMin=validMesh?Math.min(...meshFlat):null,meshMax=validMesh?Math.max(...meshFlat):null,meshRange=validMesh?meshMax-meshMin:null;
   // Criterio orientativo de uniformidad; no sustituye la comprobación mecánica del fabricante.
   const MESH_ACCEPTABLE_RANGE_MM=0.20;
   const meshStatus=validMesh?(meshRange<=MESH_ACCEPTABLE_RANGE_MM?'Malla correcta · dentro del rango':'Malla fuera del rango · se recomienda calibrar'):'';
   const meshStatusColor=validMesh?(meshRange<=MESH_ACCEPTABLE_RANGE_MM?'#34d399':'#fbbf24'):'';
  const meshColor=v=>{const p=meshRange>0?(v-meshMin)/meshRange:0.5;const stops=[[40,105,190],[130,205,225],[255,238,160],[255,160,80],[190,35,65]];const x=p*(stops.length-1),i=Math.min(stops.length-2,Math.floor(x)),f=x-i;return '#'+stops[i].map((c,k)=>Math.round(c+(stops[i+1][k]-c)*f).toString(16).padStart(2,'0')).join('');};
  const meshSvg=validMesh?(()=>{
   const rows=meshValues.length,cols=meshValues[0].length;
   // Las mallas densas (p. ej. 30×30) no deben encoger hasta volver
   // ilegibles los números. Se usa una celda compacta y se reservan
   // etiquetas completas para mallas pequeñas; cada celda conserva su Z en title.
   const dense=rows>18||cols>18;
   const cell=dense?24:Math.max(34,Math.min(58,Math.floor(900/cols),Math.floor(620/rows)));
   const left= dense?54:68,top=42,right=54,bottom=48;
   const plotW=cols*cell,plotH=rows*cell,svgW=left+plotW+right,svgH=top+plotH+bottom;
   const xBounds=Array.isArray(bedMesh.mesh_min)&&Array.isArray(bedMesh.mesh_max)?[Number(bedMesh.mesh_min[0]),Number(bedMesh.mesh_max[0])]:null;
   const yBounds=Array.isArray(bedMesh.mesh_min)&&Array.isArray(bedMesh.mesh_max)?[Number(bedMesh.mesh_min[1]),Number(bedMesh.mesh_max[1])]:null;
   const colorTicks=Array.from({length:5},(_,i)=>{const v=meshMin+(meshMax-meshMin)*i/4,y=top+plotH-i*plotH/4;return `<line x1="${left+plotW+8}" y1="${y}" x2="${left+plotW+16}" y2="${y}" stroke="#cbd5e1"/><text x="${left+plotW+22}" y="${y+4}" fill="#29435f" font-size="12">${v.toFixed(3)}</text>`;}).join('');
   const cells=[];
   for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
    const v=Number(meshValues[r][c]),x=left+c*cell,y=top+(rows-1-r)*cell;
    const bright=(v-meshMin)/(meshRange||1),textColor=bright>.68?'#172033':'#f8fafc';
    const valueLabel=`X ${xBounds? (xBounds[0]+(xBounds[1]-xBounds[0])*c/(cols-1)).toFixed(1):c} mm · Y ${yBounds? (yBounds[0]+(yBounds[1]-yBounds[0])*r/(rows-1)).toFixed(1):r} mm · Z ${v.toFixed(4)} mm`;
    cells.push(`<g><title>${valueLabel}</title><rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="${dense?2:4}" fill="${meshColor(v)}" stroke="#172033" stroke-width="${dense?0.8:1.5}"/>${dense?'':`<text x="${x+cell/2}" y="${y+cell/2+4}" text-anchor="middle" fill="${textColor}" font-size="${Math.max(10,Math.min(14,cell*.27))}" font-weight="700">${v.toFixed(3)}</text>`}</g>`);
   }
   const labelIndexes=n=>dense?[0,Math.round((n-1)/4),Math.round((n-1)/2),Math.round(3*(n-1)/4),n-1]:Array.from({length:n},(_,i)=>i);
   const xLabels=labelIndexes(cols).map(c=>{const v=xBounds?xBounds[0]+(xBounds[1]-xBounds[0])*c/(cols-1):c;return `<text x="${left+c*cell+cell/2}" y="${top+plotH+21}" text-anchor="middle" fill="#405a75" font-size="${dense?10:11}">${v.toFixed(0)}</text>`;}).join('');
   const yLabels=labelIndexes(rows).map(r=>{const v=yBounds?yBounds[0]+(yBounds[1]-yBounds[0])*r/(rows-1):r;return `<text x="${left-9}" y="${top+(rows-1-r)*cell+cell/2+3}" text-anchor="end" fill="#405a75" font-size="${dense?10:11}">${v.toFixed(0)}</text>`;}).join('');
   return `<div class="pcp-mesh-controls"><span class="pcp-mesh-hint">${esc(tr(dense?'Malla de alta resolución · pasa el cursor por cada celda para consultar X, Y y Z':'Vista superior · cada celda muestra la altura Z en mm'))}</span><button type="button" class="btn pcp-mesh-fullscreen">${esc(tr('Ampliar malla'))}</button></div><div class="pcp-mesh-viewport" data-mesh-view="1" style="width:100%;overflow:auto;border-radius:12px;background:linear-gradient(145deg,#f4f7fb,#e8eef5);padding:18px;border:1px solid #c8d6e5;box-sizing:border-box"><svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="${esc(tr('Vista superior de la malla de la cama'))}" style="display:block;width:100%;height:auto;max-height:760px;margin:auto;min-width:0"><defs><linearGradient id="pcpMeshScale" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#2869be"/><stop offset="50%" stop-color="#ffefa0"/><stop offset="100%" stop-color="#be2341"/></linearGradient></defs><text x="${left+plotW/2}" y="25" fill="#29435f" text-anchor="middle" font-size="14" font-weight="700">X · mm</text><text x="${left-48}" y="${top+plotH/2}" fill="#29435f" text-anchor="middle" font-size="14" font-weight="700" transform="rotate(-90 ${left-48} ${top+plotH/2})">Y · mm</text>${cells.join('')}${xLabels}${yLabels}<rect x="${left+plotW+8}" y="${top}" width="12" height="${plotH}" rx="6" fill="url(#pcpMeshScale)"/>${colorTicks}</svg></div>`;
  })():`<div class="pcp-no-chart-data">${esc(tr('La impresora no ha publicado una malla de cama válida.'))}</div>`;
   const meshSection=`<section class="pcp-printer-card pcp-bed-mesh-card" style="grid-column:1 / -1;width:100%;min-width:0;box-sizing:border-box;margin:16px 0;padding:16px"><header><div><span class="pcp-printer-eyebrow">${esc(tr('NIVELACIÓN DE CAMA'))}</span><h2>${esc(tr('Malla de la cama'))}</h2></div><span>${validMesh?`${meshValues.length} × ${meshValues[0].length}`:esc(tr('Sin datos'))}</span></header>${meshSvg}<div class="pcp-mesh-summary">${validMesh?`${esc(tr('Mínimo'))}: ${meshMin.toFixed(4)} mm · ${esc(tr('Máximo'))}: ${meshMax.toFixed(4)} mm · ${esc(tr('Rango'))}: ${meshRange.toFixed(4)} mm` : ''}</div>${validMesh?`<div class="pcp-mesh-status" role="status" style="margin-top:12px;padding:12px 14px;border-radius:9px;border:1px solid ${meshStatusColor};background:${meshRange<=MESH_ACCEPTABLE_RANGE_MM?'rgba(52,211,153,.09)':'rgba(251,191,36,.09)'};color:${meshStatusColor};font-weight:700">${esc(tr(meshStatus))}<div style="font-size:12px;font-weight:400;color:#cbd5e1;margin-top:5px">${esc(tr('Rango de referencia'))}: ≤ ${MESH_ACCEPTABLE_RANGE_MM.toFixed(2)} mm</div></div>`:''}</section>`;
  // La vista Impresoras consume el mismo adaptador de filamentos que el monitor.
  // Esto incluye Snapmaker U1, Creality CFS/Box y sistemas multibobina Klipper.
  const liveFilaments=Array.isArray(payload?.printerFilaments)?payload.printerFilaments:[];
  const taskCfg=st.print_task_config||{},detect=st.filament_detect||{},detectInfo=Array.isArray(detect.info)?detect.info:[];
  const arrAt=(v,i)=>Array.isArray(v)?v[i]:undefined;
  const fallbackFilaments=Array.from({length:4},(_,i)=>{
   const info=detectInfo[i]&&typeof detectInfo[i]==='object'?detectInfo[i]:{};
   const material=first(arrAt(taskCfg.filament_type,i),info.MAIN_TYPE,'');
   const subtype=first(arrAt(taskCfg.filament_sub_type,i),info.SUB_TYPE,'');
   const vendor=first(arrAt(taskCfg.filament_vendor,i),info.MANUFACTURER,info.VENDOR,'');
   let color=first(arrAt(taskCfg.filament_color_rgba,i),info.RGB_1,info.ARGB_COLOR,'');
   if(color!==''&&color!==undefined){let raw=String(color).replace(/^#/,'');if(/^\d+$/.test(raw))raw=((Number(raw)>>>0)&0xFFFFFF).toString(16).padStart(6,'0');else if(/^[0-9a-f]{8}$/i.test(raw))raw=raw.slice(0,6);color=/^[0-9a-f]{6}$/i.test(raw)?'#'+raw.toUpperCase():'';}
   const exists=arrAt(taskCfg.filament_exist,i)===true||arrAt(taskCfg.extruders_used,i)===true||!!(material||vendor||info.CARD_UID);
   return {channel:i+1,channelName:tr('Canal {number}').replace('{number}',String(i+1)),exists,material,subtype,vendor,color,official:arrAt(taskCfg.filament_official,i)===true||info.OFFICIAL===true,sku:first(arrAt(taskCfg.filament_sku,i),info.SKU,''),tagWeightGrams:Number(info.WEIGHT)||null,rfidDetected:!!(info.CARD_UID||info.SKU||info.MAIN_TYPE||info.MANUFACTURER)};
  });
  const filamentData=liveFilaments.length?liveFilaments:fallbackFilaments;
  const channelRows=filamentData.map((f,i)=>{
   const material=String(f.material||'').trim(),subtype=String(f.subtype||'').trim(),vendor=String(f.vendor||'').trim();
   const color=String(f.color||'').trim(),sku=String(f.sku||'').trim(),present=!!f.exists;
   const official=!!f.official,tagWeight=Number(f.tagWeightGrams);
   const label=present?tr(f.statusLabel&&f.statusLabel!=='Filamento detectado'?f.statusLabel:'Filamento detectado'):(f.presenceKnown===false&&f.statusLabel?tr(f.statusLabel):tr('Sin filamento detectado'));
   const channelName=String(f.channelName||tr('Canal {number}').replace('{number}',String(f.channel||i+1)));
   const detail=f.detailText?tr(f.detailText):([vendor,material,subtype].filter(Boolean).join(' · ')||(present?tr('Sin identificación RFID'):tr('Sin filamento detectado')));
   return `<article class="pcp-u1-filament-slot"><header><strong>${esc(channelName)}</strong><span>${esc(label)}</span></header><div class="pcp-u1-filament-body">${/^#[0-9a-f]{6}$/i.test(color)?`<i style="display:inline-block;width:13px;height:13px;border-radius:4px;background:${esc(color)};border:1px solid #94a3b8;vertical-align:middle;margin-right:6px"></i>`:''}<b>${esc(detail)}</b></div><small>${esc(color||tr('Color no disponible'))}${sku?` · SKU ${esc(sku)}`:''}${official?' · '+esc(tr('Filamento oficial')):''}</small>${Number.isFinite(tagWeight)&&tagWeight>0?`<small>${esc(tr('Peso indicado en etiqueta'))}: ${tagWeight.toFixed(0)} g</small>`:''}</article>`;
  }).join('');
  const filamentHeading=payload?.filamentAdapter==='snapmaker-u1'?'SNAPMAKER U1':'Filamentos detectados en la impresora';
  const filamentSection=`<section class="pcp-printer-card pcp-u1-filaments"><header><div><span class="pcp-printer-eyebrow">${esc(tr(filamentHeading))}</span><h2>${esc(tr('Filamentos cargados en la máquina'))}</h2></div><span>${esc(tr('Lectura directa del firmware'))}</span></header><div class="pcp-u1-filament-grid">${channelRows||`<p>${esc(tr('Lectura de filamentos no disponible'))}</p>`}</div><p class="pcp-section-note">${esc(tr('El peso de etiqueta RFID no representa los gramos restantes de la bobina.'))}</p></section>`;
  const detailCards=[card('Identificación',[['Nombre',name],['Dirección IP',first(meta.ip,'—')],['Modelo',model],['Estado',state],['Archivo',filename],['Conexión',tr('Conectada')]]),filamentSection,`<section class="pcp-thermal-section"><header><div><span class="pcp-printer-eyebrow">${esc(tr('SISTEMA TÉRMICO'))}</span><h2>${esc(tr('Temperaturas en tiempo real'))}</h2></div><span class="pcp-thermal-count">${extruderNames.length} ${esc(tr(extruderNames.length===1?'extrusor detectado':'extrusores detectados'))}</span></header><div class="pcp-thermal-grid">${thermal||esc(tr('No se detectaron sensores térmicos'))}</div></section>`,card('Movimiento y estado',[['Posición X',number(tool.position?.[0])],['Posición Y',number(tool.position?.[1])],['Posición Z',number(tool.position?.[2])],['Estado del firmware',first(wh.state,'—')],['Velocidad de impresión',number(first(ds.speed,st.gcode_move?.speed_factor))]]),card('Calibraciones y nivelación',[
   ['Perfil de malla',first(bedMesh.profile_name,bedMesh.profile,'—')],
   ['Malla cargada',meshRows?`${meshRows} × ${meshCols}`:tr('No disponible')],
   ['Sonda Z',first(cfgProbe.z_offset,probe.z_offset,'—')],
   ['Estado de malla',first(bedMesh.calibrated?'Calibrada':undefined,bedMesh.profile_name?'Perfil cargado':undefined,tr('No disponible'))]
  ]),
  meshSection,
  chart,
  card('Software y máquina',[['Versión de software',first(meta.softwareVersion,meta.software_version,'—')],['Modelo',model],['Estado de impresión',state],['Actualización de datos',new Date().toLocaleTimeString()]])];
  const filamentMeters=historyFilament===undefined?undefined:Number(historyFilament)/1000;
  // Estimación orientativa: filamento estándar 1,75 mm y densidad PLA 1,24 g/cm³.
  // Moonraker entrega longitud, no masa; el peso se identifica expresamente como aproximado.
  const filamentKg=Number.isFinite(filamentMeters)&&filamentMeters>=0?(filamentMeters*Math.PI*Math.pow(1.75/2,2)*1.24/1000):undefined;
  const filamentDisplay=filamentMeters===undefined?'—':`${filamentMeters.toFixed(2)} m · ${filamentKg.toFixed(2)} kg ${esc(tr('aprox. PLA 1,75 mm'))}`;
  const statsRows=[['Trabajos totales',historyCount===undefined?'—':String(historyCount)],['Tiempo total de impresión',historySeconds===undefined?'—':duration(historySeconds)],['Tiempo total encendida',historyPowered===undefined?'—':duration(historyPowered)],['Filamento total utilizado',filamentDisplay]];
  const jobs=historyJobs.map(j=>{const start=Number(j.start_time),end=Number(j.end_time);const fromDates=Number.isFinite(start)&&Number.isFinite(end)&&end>=start?end-start:undefined;const seconds=first(j.total_duration,j.print_duration,fromDates);return {...j,_duration:seconds===undefined?undefined:Math.max(0,Number(seconds))};}).filter(j=>Number.isFinite(j._duration)&&j._duration>0).slice(0,8);
  const jobDurations=jobs.map(j=>j._duration);
  const maxJobDuration=Math.max(1,...jobDurations);
  const jobsChart=jobs.length?`<div class="pcp-jobs-chart">${jobs.map((job,i)=>`<div class="pcp-job-bar-row"><span title="${esc(first(job.filename,job.name,'—'))}">${esc(first(job.filename,job.name,'—'))}</span><div><i style="width:${Math.max(2,jobDurations[i]/maxJobDuration*100)}%"></i></div><b>${esc(duration(jobDurations[i]))}</b></div>`).join('')}</div>`:`<p class="pcp-no-chart-data">${esc(tr('No hay datos de impresiones anteriores'))}</p>`;
  const statsMarkup=`<section class="pcp-printer-stats-section"><header class="pcp-section-heading"><div><span class="pcp-printer-eyebrow">${esc(tr('RESUMEN DE PRODUCCIÓN'))}</span><h2>${esc(tr('Estadísticas de impresión'))}</h2></div><span>${esc(name)}</span></header><div class="pcp-printer-stats-grid">${statsRows.map(([label,value])=>`<article class="pcp-stat-tile"><span>${esc(tr(label))}</span><strong>${esc(value)}</strong></article>`).join('')}</div><section class="pcp-printer-card pcp-jobs-chart-card"><h3>${esc(tr('Duración de las últimas impresiones'))}</h3>${jobsChart}</section></section>`;
  if(!headStatsCache.has(meta.ip)){const savedStats=loadSavedHeadStats(meta.ip);if(savedStats)headStatsCache.set(meta.ip,savedStats);}
  const extruderDevices=Object.keys(st).filter(key=>/^extruder\d*$/i.test(key)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  const headCards=extruderDevices.length?extruderDevices.map((key,index)=>{
   const device=st[key]||{},headLabel=key.toLowerCase()==='extruder'?tr('Cabezal principal'):tr('Cabezal {number}').replace('{number}',key.match(/\d+/)?.[0]||String(index+1));
   const temp=first(device.temperature,device.measured_temp),target=first(device.target,device.target_temp);
   const cached=headStatsCache.get(meta.ip)?.byHead?.[key];
   return `<article class="pcp-head-stat-card" data-head-key="${esc(key)}"><header><span class="pcp-head-icon">▰</span><strong>${esc(headLabel)}</strong><span class="pcp-head-temp">${temp===undefined?'—':esc(Number(temp).toFixed(1)+' °C')}${target!==undefined?' / '+esc(Number(target).toFixed(1)+' °C'):''}</span></header><div class="pcp-head-stat-grid"><div><small>${esc(tr('Cambios de cabezal'))}</small><b data-head-changes="${esc(key)}">${cached&&Number.isFinite(cached.changes)?cached.changes:"—"}</b></div><div><small>${esc(tr('Errores asociados'))}</small><b data-head-errors="${esc(key)}">${cached&&Number.isFinite(cached.errors)?cached.errors:"—"}</b></div><div><small>${esc(tr('Reintentos de cambio'))}</small><b data-head-retries="${esc(key)}">${cached&&Number.isFinite(cached.retries)?cached.retries:"—"}</b></div></div></article>`;
  }).join(''):`<p class="pcp-no-chart-data">${esc(tr('Esta impresora no publica cabezales individuales en Moonraker.'))}</p>`;
  const eventLogMarkup=`<section class="pcp-printer-card pcp-machine-events"><header class="pcp-section-heading"><div><span class="pcp-printer-eyebrow">${esc(tr('ESTADÍSTICAS DE CABEZALES'))}</span><h3>${esc(tr('Uso y actividad de cabezales'))}</h3><p>${esc(tr('Estadísticas cargadas automáticamente al seleccionar la impresora.'))}</p></div><button type="button" class="btn" id="pcpPrinterLoadLogs" data-printer-ip="${esc(first(meta.ip,''))}">${esc(tr('Actualizar estadísticas'))}</button></header><div class="pcp-head-stat-cards">${headCards}</div><div class="pcp-head-log-summary" id="pcpPrinterEventsOutput"><span>${esc(headStatsCache.has(meta.ip)?tr('Estadísticas guardadas; se actualizarán en segundo plano.'):tr('Las estadísticas se están preparando automáticamente…'))}</span></div></section>`;
  const detailMarkup=`<section class="pcp-printer-detail-section"><header class="pcp-section-heading"><div><span class="pcp-printer-eyebrow">${esc(tr('DETALLE DE EQUIPO'))}</span><h2>${esc(tr('Información de la impresora'))}</h2></div><span>${esc(name)} · ${esc(first(meta.ip,'—'))}</span></header><div class="pcp-printer-detail-grid">${detailCards.join('')}</div></section>${eventLogMarkup}${statsMarkup}`;
  if(details&&details.innerHTML!==detailMarkup)details.innerHTML=detailMarkup;
  applyHeadStatistics(meta.ip);
  if(extruderDevices.length&&!headStatsCache.has(meta.ip)&&!headStatsLoading.has(meta.ip))loadHeadStatistics(meta.ip);
 }
 let busy=false,timer=null,didDiscover=false,pendingSelectedIp='';const temperatureHistory=new Map();
  async function load(discoverNow=false,showProgress=false,preferredIp=''){
   if(busy){if(preferredIp)pendingSelectedIp=String(preferredIp).trim();return;}busy=true;refresh.disabled=true;setStatus(tr('Consultando impresoras…'));if(showProgress)progress(true,5,'Buscando impresoras…');
  try{
   let list=saved();if(showProgress)progress(true,15,'Leyendo impresoras guardadas…');
   if(!storedPrintersLoaded){
    try{const snap=await request('/api/storage/snapshot');let stored=snap.values&&snap.values.pcp_u1_discovered_printers;if(typeof stored==='string'){try{stored=JSON.parse(stored)}catch(_){stored=[]}}if(Array.isArray(stored)){const map=new Map(list.map(p=>[p.ip,p]));stored.forEach(p=>{if(p&&p.ip)map.set(p.ip,{...(map.get(p.ip)||{}),...p})});list=[...map.values()]}}catch(_){}finally{storedPrintersLoaded=true;}
   }
   if(discoverNow||(!didDiscover&&!list.length)){if(showProgress)progress(true,25,'Buscando impresoras en la red…');try{const discovery=await request('/api/u1/discover',30000);if(Array.isArray(discovery.printers)){const map=new Map(list.map(p=>[p.ip,p]));discovery.printers.forEach(p=>map.set(p.ip,{...(map.get(p.ip)||{}),...p}));list=[...map.values()];}didDiscover=true;}catch(_){didDiscover=true;}}
   const selected=String(preferredIp||pendingSelectedIp||$('pcpU1PrinterSelect')?.value||localStorage.getItem('pcp_printers_detail_selected_ip')||localStorage.getItem('pcp_u1_manual_ip_v180')||localStorage.getItem('pcp_u1_manual_ip_v178')||'').trim();
    if(preferredIp||pendingSelectedIp)pendingSelectedIp='';
   if(selected&&!list.some(p=>p.ip===selected))list.push({ip:selected});
   if(!list.length){renderCards([]);setStatus(tr('No hay impresoras guardadas'));return;}
   let completed=0;const statuses=await Promise.all(list.map(async p=>{
    try{
     const live=await request('/api/u1/status?ip='+encodeURIComponent(p.ip),7000);
     const previous=lastGoodPrinterStatus.get(p.ip);
     if(live.connecting&&previous&&previous.data?.status)return {...previous.data,...p,online:true,statusStale:true,connecting:true};
     const fresh={...p,...live,status:live.status||{},statusStale:!!live.connecting};
     if(live.status&&Object.keys(live.status).length)lastGoodPrinterStatus.set(p.ip,{data:fresh,at:Date.now()});
     return fresh;
    }catch(e){
     const previous=lastGoodPrinterStatus.get(p.ip);
     if(previous&&Date.now()-previous.at<PRINTER_OFFLINE_GRACE_MS){
      return {...previous.data,...p,online:true,statusStale:true,error:e.message};
     }
     return {...p,online:false,statusStale:false,error:e.message};
    }finally{completed++;if(showProgress)progress(true,30+(completed/Math.max(1,list.length))*55,'Consultando impresoras…');}
   }));
   // Persistir únicamente identidad/configuración estable. El estado online/offline
   // es temporal y nunca debe provocar escrituras SQLite en cada sondeo.
   if(discoverNow){
    const stable=statuses.map(p=>({ip:p.ip,hostname:p.hostname||p.name||'',model:p.model||''}));
    persistIfChanged('pcp_u1_discovered_printers',JSON.stringify(stable));
   }
   const online=statuses.filter(p=>p.online).length,stale=statuses.some(p=>p.statusStale);
   setStatus(stale?`${online} / ${statuses.length} ${tr('impresoras en línea')} · ${tr('Reintentando conexión; se conserva el último estado conocido.')}`:`${online} / ${statuses.length} ${tr('impresoras en línea')}`,online===0&&!stale);
   // Si el usuario cambia de tarjeta mientras se consultan los estados,
   // descartar este resultado antiguo y procesar primero la selección más reciente.
   const latestSelected=String(localStorage.getItem('pcp_printers_detail_selected_ip')||$('pcpU1PrinterSelect')?.value||'').trim();
   if((pendingSelectedIp&&pendingSelectedIp!==selected)||(latestSelected&&latestSelected!==selected)){
    pendingSelectedIp=String(pendingSelectedIp||latestSelected).trim();
    return;
   }
   const active=statuses.find(p=>p.ip===selected)||statuses.find(p=>p.online);
   if(active?.online){
    if(localStorage.getItem('pcp_printers_detail_selected_ip')!==active.ip)persistIfChanged('pcp_printers_detail_selected_ip',active.ip);
    const data=active;
    if(showProgress)progress(true,95,'Preparando panel de la impresora…');
    grid.style.setProperty('--pcp-card-count',String(Math.min(4,Math.max(1,statuses.length))));
    syncPrinterCards(statuses);
    render(active,data);
   }
   else{const primaryIp=selected||statuses.find(p=>p.online)?.ip;grid.style.setProperty('--pcp-card-count',String(Math.min(4,Math.max(1,statuses.length))));syncPrinterCards(statuses);overview.innerHTML='';if(details)details.innerHTML='';}
   $('pcpPrintersLastUpdate').textContent=new Date().toLocaleTimeString();
  }catch(e){setStatus(tr('No se pudo actualizar')+': '+(e.message||String(e)),true);if(!grid.children.length)renderCards([]);}
  finally{busy=false;refresh.disabled=false;if(showProgress)progress(false);if(pendingSelectedIp){const next=pendingSelectedIp;pendingSelectedIp='';load(false,false,next);}}
 }
 function start(){load(!didDiscover&&!saved().length,true);if(timer)clearInterval(timer);timer=setInterval(()=>{if(!document.hidden&&document.getElementById('printersView')?.classList.contains('active'))load(false)},5000);}

 async function choosePrinter(card){
  const ip=String(card?.dataset?.printerIp||'').trim();if(!ip)return;
  const select=$('pcpU1PrinterSelect');
  if(!select){setStatus(tr('No se pudo seleccionar la impresora'),true);return;}
  // La tarjeta, el selector y el monitor comparten una única IP seleccionada.
  // No se restaura la impresora anterior si el puente aborta una petición: el
  // cambio visual y la identidad elegida por el usuario deben mantenerse.
  persistIfChanged('pcp_printers_detail_selected_ip',ip);
  pendingSelectedIp=ip;
  grid.querySelectorAll('[data-printer-ip]').forEach(node=>{
   const selected=node.dataset.printerIp===ip;
   node.classList.toggle('is-selected',selected);
   node.setAttribute('aria-pressed',selected?'true':'false');
  });
  try{
   setStatus(tr('Conectando con {ip}…').replace('{ip}',ip));
   if(typeof window.PCPSelectU1Printer==='function')await window.PCPSelectU1Printer(ip);
   else {let option=[...select.options].find(o=>o.value===ip);if(!option){option=new Option('Impresora · '+ip,ip);select.add(option);}select.value=ip;select.dispatchEvent(new Event('change',{bubbles:true}));}
   persistIfChanged('pcp_printers_detail_selected_ip',ip);
   if(!busy)load(false,false,ip);
  }catch(error){
   // Mantener la última selección solicitada. Una cancelación/timeout de la
   // configuración no debe devolver las tarjetas a la impresora anterior.
   const current=String($('pcpU1PrinterSelect')?.value||localStorage.getItem('pcp_printers_detail_selected_ip')||ip).trim();
   if(current===ip){persistIfChanged('pcp_printers_detail_selected_ip',ip);pendingSelectedIp=ip;}
   setStatus(tr('No se pudo seleccionar la impresora')+': '+(error?.message||String(error)),true);
  }
 }
 grid.addEventListener('click',e=>{const card=e.target.closest('[data-printer-ip]');if(card)choosePrinter(card);});
 grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest('[data-printer-ip]')){e.preventDefault();choosePrinter(e.target.closest('[data-printer-ip]'));}});
 document.addEventListener('click',e=>{
  const button=e.target.closest('#pcpPrinterLoadLogs');if(!button)return;
  const ip=button.dataset.printerIp;if(ip)loadHeadStatistics(ip,true);
 });
 // La malla se presenta en vista superior para evitar deformaciones de perspectiva.
 document.addEventListener('click',e=>{const full=e.target.closest('.pcp-mesh-fullscreen');if(full){const target=full.closest('.pcp-bed-mesh-card');if(!target)return;if(!document.fullscreenElement)target.requestFullscreen?.();else document.exitFullscreen?.();}});
 document.addEventListener('fullscreenchange',()=>{document.querySelectorAll('.pcp-bed-mesh-card').forEach(card=>{const view=card.querySelector('[data-mesh-view]');if(view){view.style.height=document.fullscreenElement===card?'calc(100vh - 90px)':'';view.style.maxHeight=document.fullscreenElement===card?'calc(100vh - 70px)':'';}});}); refresh.addEventListener('click',()=>load(true,true));
 document.addEventListener('click',e=>{if(e.target.closest('[data-tab="printersView"]'))setTimeout(start,100)});
 window.addEventListener('pcp-u1-printer-changed',event=>{
  // La selección del puente se confirma antes de emitir este evento. Sincronizar
  // aquí la IP de detalle evita que load() lea la IP anterior y vuelva a mostrar
  // la impresora equivocada (el selector y la tarjeta comparten esta identidad).
  const ip=String(event?.detail?.ip||$('pcpU1PrinterSelect')?.value||'').trim();
  if(ip){
   const selector=$('pcpU1PrinterSelect');if(selector&&[...selector.options].some(option=>option.value===ip))selector.value=ip;
   persistIfChanged('pcp_printers_detail_selected_ip',ip);
   grid.querySelectorAll('[data-printer-ip]').forEach(node=>{const selected=node.dataset.printerIp===ip;node.classList.toggle('is-selected',selected);node.setAttribute('aria-pressed',selected?'true':'false');});
   pendingSelectedIp=ip;
  }
  load(false,false,ip);
 });
 window.addEventListener('pcp-language-changed',()=>{if(document.getElementById('printersView')?.classList.contains('active'))load()});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{if(document.getElementById('printersView')?.classList.contains('active'))start()},{once:true});else if(document.getElementById('printersView')?.classList.contains('active'))start();
})();
