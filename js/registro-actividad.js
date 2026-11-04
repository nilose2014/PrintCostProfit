/* v1.7 — registro centralizado local; nunca guarda valores de formularios ni datos sensibles. */
(()=>{
 'use strict';
 const API='/api/logs';
 const MAX_MESSAGE=1200;
 const clean=value=>String(value==null?'':value).replace(/[\r\n\t]+/g,' ').slice(0,MAX_MESSAGE);
 function send(level,module,message,details){
  if(location.protocol!=='http:'||!['127.0.0.1','localhost'].includes(location.hostname)||location.port!=='8700')return;
  const entry={timestamp:new Date().toISOString(),level:['error','warn','info'].includes(level)?level:'info',module:clean(module||'Aplicación').slice(0,80),message:clean(message),details:details&&typeof details==='object'?JSON.stringify(details).slice(0,1800):''};
  try{fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry),keepalive:true}).catch(()=>{});}catch(_){}
 }
 window.PCP_LOG={
  info:(module,message,details)=>send('info',module,message,details),
  warn:(module,message,details)=>send('warn',module,message,details),
  error:(module,message,details)=>send('error',module,message,details),
  refresh:load
 };
 // Captura también errores que la propia aplicación ya intercepta y envía a consola.
 const originalConsoleError=console.error.bind(console), originalConsoleWarn=console.warn.bind(console);
 console.error=function(){
  originalConsoleError(...arguments);
  const first=arguments[0], message=typeof first==='string'?first:(first&&first.message)||'Error registrado en consola';
  send('error','Consola',message);
 };
 console.warn=function(){
  originalConsoleWarn(...arguments);
  const first=arguments[0], message=typeof first==='string'?first:(first&&first.message)||'Advertencia registrada en consola';
  send('warn','Consola',message);
 };
 window.addEventListener('error',event=>{
  const msg=event.message||event.error&&event.error.message||'Error de JavaScript';
  send('error','JavaScript',msg,{file:event.filename||'',line:event.lineno||0,column:event.colno||0});
 });
 window.addEventListener('unhandledrejection',event=>{
  const reason=event.reason;send('error','JavaScript','Promesa rechazada sin gestionar',{reason:clean(reason&&reason.message||reason)});
 });
 function t(s){return window.PCP_I18N?.t(s)||s}
 async function api(method,body){
  const response=await fetch(API,{method,headers:{'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined,cache:'no-store'});
  const data=await response.json().catch(()=>({}));
  if(!response.ok||data.ok===false)throw new Error(data.error||('HTTP '+response.status));
  return data;
 }
 let lastEntries=[];
 async function load(){
  const list=document.getElementById('pcpLogsList'),status=document.getElementById('pcpLogsStatus');
  if(!list)return;
  status.textContent=t('Cargando registros…');
  try{
   const data=await api('GET');
   // La interfaz conserva únicamente los 50 registros más recientes; el servidor mantiene el histórico completo.
   lastEntries=(Array.isArray(data.entries)?data.entries:[]).slice().sort((a,b)=>{
    const ta=Date.parse(a.timestamp||'')||0,tb=Date.parse(b.timestamp||'')||0;
    return tb-ta;
   }).slice(0,50);
   render();
   status.textContent=(window.PCP_I18N?.format('Registros cargados: {count}',{count:lastEntries.length})||('Registros cargados: '+lastEntries.length))+(data.path?' · '+data.path:'');
  }catch(e){status.textContent=window.PCP_I18N?.format('No se pudieron cargar los registros: {message}',{message:e.message})||e.message;window.PCP_LOG?.error('Registro de actividad','No se pudieron cargar los registros',{error:e.message});}
 }
 function repairEncoding(value){let raw=String(value??'');if(/[ÃÂ]/.test(raw)){try{const fixed=decodeURIComponent(escape(raw));if((fixed.match(/�/g)||[]).length<=(raw.match(/�/g)||[]).length)raw=fixed}catch(_){}}return raw}
 function localizeLogText(value){const raw=repairEncoding(value);return window.PCP_I18N?.t(raw)||raw}
 function localizeDetails(raw){
  if(!raw)return '';
  try{const data=JSON.parse(repairEncoding(raw));if(!data||typeof data!=='object')return localizeLogText(raw);
   const labels={version:'Versión',address:'Dirección',logPath:'Archivo de registro',reason:'Motivo',file:'Archivo',line:'Línea',column:'Columna',endpoint:'Ruta',operation:'Operación',exitCode:'Código de salida',control:'Control',error:'Error'};
   return Object.entries(data).map(([key,value])=>{const label=localizeLogText(labels[key]||key);let shown=value;if(typeof value==='string')shown=localizeLogText(value);else if(value&&typeof value==='object')shown=JSON.stringify(value);return label+': '+String(shown)}).join(' · ');
  }catch(_){return localizeLogText(raw)}
 }
 function render(){
  const list=document.getElementById('pcpLogsList');if(!list)return;
  const level=document.getElementById('pcpLogsLevel')?.value||'all';
  const query=(document.getElementById('pcpLogsSearch')?.value||'').trim().toLowerCase();
  const rows=lastEntries.filter(e=>(level==='all'||e.level===level)&&(!query||[e.module,e.message,e.details].join(' ').toLowerCase().includes(query)));
  list.replaceChildren();
  if(!rows.length){list.textContent=t('No hay registros para mostrar.');return;}
  const table=document.createElement('table');table.className='pcp-logs-table';
  const thead=document.createElement('thead'),tr=document.createElement('tr');
  ['Fecha y hora','Nivel','Módulo','Mensaje'].forEach(k=>{const th=document.createElement('th');th.textContent=t(k);tr.appendChild(th)});
  thead.appendChild(tr);table.appendChild(thead);
  const tbody=document.createElement('tbody');
  rows.forEach(e=>{
   const row=document.createElement('tr');
   const levelLabels={info:'Información',warn:'Advertencia',error:'Error'};
   const values=[e.timestamp?new Date(e.timestamp).toLocaleString():'',localizeLogText(levelLabels[e.level]||e.level||''),localizeLogText(e.module||''),localizeLogText(e.message||'')];
   values.forEach((v,i)=>{const td=document.createElement('td');td.textContent=v;if(i===1)td.dataset.level=e.level||'info';row.appendChild(td)});
   if(e.details){const detail=document.createElement('tr'),cell=document.createElement('td');cell.colSpan=4;cell.textContent=localizeDetails(e.details);cell.className='pcp-log-details';detail.appendChild(cell);tbody.appendChild(row);tbody.appendChild(detail);}else tbody.appendChild(row);
  });
  table.appendChild(tbody);list.appendChild(table);
 }
 async function exportLogs(){
  try{const data=await api('GET');const blob=new Blob([JSON.stringify(data.entries||[],null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='PrintCostProfit-logs-'+new Date().toISOString().replace(/[:.]/g,'-')+'.json';a.click();URL.revokeObjectURL(url);}
  catch(e){alert(window.PCP_I18N?.format('No se pudieron cargar los registros: {message}',{message:e.message})||e.message);}
 }
 async function clearLogs(){
  if(!window.PCPConfirm? !confirm(t('¿Quieres borrar todos los registros de actividad?')) : !await window.PCPConfirm(t('¿Quieres borrar todos los registros de actividad?')))return;
  try{await api('DELETE');lastEntries=[];render();document.getElementById('pcpLogsStatus').textContent=t('Registros eliminados.');}
  catch(e){document.getElementById('pcpLogsStatus').textContent=t('No se pudieron guardar los registros.');}
 }
 function init(){
  const refresh=document.getElementById('pcpLogsRefresh'),exportBtn=document.getElementById('pcpLogsExport'),clear=document.getElementById('pcpLogsClear');
  refresh?.addEventListener('click',load);exportBtn?.addEventListener('click',exportLogs);clear?.addEventListener('click',clearLogs);
  document.getElementById('pcpLogsLevel')?.addEventListener('change',render);
  document.getElementById('pcpLogsSearch')?.addEventListener('input',render);
  // Registrar acciones por identificador, sin capturar texto introducido ni contenido de formularios.
  document.addEventListener('click',event=>{
   const el=event.target?.closest('button,[role="button"],a');if(!el)return;
   const id=el.id||el.getAttribute('data-tab')||el.getAttribute('href')||'';
   if(/save|guardar|create|crear|delete|borrar|remove|eliminar|backup|copia|license|licencia|invoice|factura|quote|presupuesto|order|pedido|printer|impresora|register|registrar|login|sesión|iniciar|auth|autenticar|conectar|calcular|calculate|importar|import|exportar|export/i.test(id+' '+(el.textContent||''))){
    send('info','Interfaz','Acción de interfaz',{control:clean(id||el.textContent).slice(0,100)});
   }
  },true);
  send('info','Aplicación','Aplicación iniciada',{version:document.querySelector('#pcp-version-footer')?.textContent?.trim()||'2.0'});
  load();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
