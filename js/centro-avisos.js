/* Print Cost & Profit 2.0.3 — Centro centralizado de avisos. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id);
 const NOTICES_KEY='pcp_notifications_v1';
 const SETTINGS_KEY='pcp_notification_settings_v1';
 const ACCOUNTING_SEEN_KEY='pcp_notifications_accounting_seen_v1';
 const DEFAULTS={maintenance:true,accounting:true,stock:true,printerErrors:true,stockMode:'grams',stockGrams:200,stockSpools:1,updates:true,backups:true};
 let settings={...DEFAULTS};
 let notices=[];
 let panelOpen=false;
 let initialized=false;
 const t=key=>window.PCP_I18N?.t(key)||key;const pcpEmbeddedTimeLabel=(kind)=>{let lang='es';try{lang=localStorage.getItem('pcp_language')||'es'}catch(_){}const labels={total:['tiempo total estimado:','total estimated time:','temps total estimé :','geschätzte Gesamtzeit:','tempo totale stimato:','szacowany całkowity czas:','الوقت الإجمالي المقدر:','预计总时间：'],model:['tiempo de impresión del modelo:','model printing time:','temps d’impression du modèle :','Modell-Druckzeit:','tempo di stampa del modello:','czas drukowania modelu:','وقت طباعة النموذج:','模型打印时间：']};const order=['es','en','fr','de','it','pl','ar','zh-CN'];return labels[kind][Math.max(0,order.indexOf(lang))]||labels[kind][0]};
 const fmt=(key,values={})=>window.PCP_I18N?.format(key,values)||String(key).replace(/\{(\w+)\}/g,(_,k)=>values[k]??'');
 const localizeEmbeddedMetadata=value=>String(value??'').replace(/(?:total estimated time|tiempo total estimado)\s*:/ig,pcpEmbeddedTimeLabel('total')).replace(/(?:model printing time|tiempo de impresión del modelo)\s*:/ig,pcpEmbeddedTimeLabel('model')).replace(/G-codeâ€¦/g,'G-code…').replace(/â€¦/g,'…').replace(/â€”/g,'—').replace(/â€“/g,'–').replace(/Ã¡/g,'á').replace(/Ã©/g,'é').replace(/Ã­/g,'í').replace(/Ã³/g,'ó').replace(/Ãº/g,'ú').replace(/Ã±/g,'ñ');
 const safeJson=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key)||'null');return v==null?fallback:v}catch(_){return fallback}};
 const saveNotices=()=>{try{localStorage.setItem(NOTICES_KEY,JSON.stringify(notices.slice(0,200)))}catch(e){console.warn('[PCP notifications] No se pudieron guardar los avisos',e)}};
 const readSettings=()=>{const stored=safeJson(SETTINGS_KEY,{});const value={...DEFAULTS,...(stored&&typeof stored==='object'?stored:{})};value.stockMode=['grams','spools','both'].includes(value.stockMode)?value.stockMode:'grams';value.stockGrams=Math.max(1,Math.min(100000,number(value.stockGrams)||200));value.stockSpools=Math.max(1,Math.min(10000,Math.floor(number(value.stockSpools)||1)));['maintenance','accounting','stock','printerErrors','updates','backups'].forEach(k=>value[k]=value[k]!==false);return value};
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const normalize=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLocaleLowerCase();
 const number=n=>Number.isFinite(Number(n))?Number(n):0;
 const gramsText=n=>number(n).toLocaleString(window.PCP_LOCALE||'es-ES',{minimumFractionDigits:0,maximumFractionDigits:2});
 const id=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
 const isOpen=()=>panelOpen;
 function setBadge(){
  const badge=$('pcpTopNotificationBadge'),button=$('pcpTopNotifications');
  if(!badge)return;
  const unread=notices.filter(n=>!n.readAt&&!n.resolvedAt).length;
  badge.textContent=unread>99?'99+':String(unread);badge.hidden=unread===0;
  if(button)button.setAttribute('aria-label',fmt('Avisos, {count} sin leer',{count:unread}));
 }
 function addNotice(item){
  if(!item||!item.type||!item.titleKey||!item.messageKey)return null;
  const existing=item.dedupeKey&&notices.find(n=>n.dedupeKey===item.dedupeKey&&!n.resolvedAt);
  if(existing){
   const nextParams=item.params||existing.params;
   const changed=JSON.stringify(existing.params||{})!==JSON.stringify(nextParams||{})||existing.priority!==(item.priority||'normal')||existing.titleKey!==item.titleKey||existing.messageKey!==item.messageKey;
   if(changed){existing.params=nextParams;existing.priority=item.priority||'normal';existing.titleKey=item.titleKey||existing.titleKey;existing.messageKey=item.messageKey||existing.messageKey;existing.action=item.action||existing.action;existing.updatedAt=new Date().toISOString();saveNotices();render();}
   return existing;
  }
  const notice={id:id(),type:item.type,titleKey:item.titleKey,messageKey:item.messageKey,params:item.params||{},action:item.action||'',machineId:item.machineId||'',url:item.url||'',version:item.version||'',dedupeKey:item.dedupeKey||'',priority:item.priority||'normal',createdAt:new Date().toISOString(),readAt:null,resolvedAt:null};
  notices.unshift(notice);notices=notices.slice(0,200);saveNotices();render();return notice;
 }
 function resolveInactive(type,activeKeys){
  const set=new Set(activeKeys);
  let changed=false;
  for(const n of notices){if(n.type===type&&!n.resolvedAt&&n.dedupeKey&&!set.has(n.dedupeKey)){n.resolvedAt=new Date().toISOString();changed=true;}}
  if(changed)saveNotices();
 }
 function maintenanceStatus(task,machine){
  const hoursDue=number(task.intervalHours)>0&&number(machine.hours)>=number(task.lastHours)+number(task.intervalHours);
  const last=new Date(String(task.lastDate||new Date().toISOString().slice(0,10))+'T00:00:00');
  const daysElapsed=Number.isFinite(last.getTime())?Math.max(0,(Date.now()-last.getTime())/86400000):0;
  const daysDue=number(task.intervalDays)>0&&daysElapsed>=number(task.intervalDays);
  if(hoursDue||daysDue)return 'due';
  const remainingHours=number(task.intervalHours)>0?Math.max(0,number(task.lastHours)+number(task.intervalHours)-number(machine.hours)):null;
  const remainingDays=number(task.intervalDays)>0?Math.max(0,number(task.intervalDays)-Math.floor(daysElapsed)):null;
  return (remainingHours!==null&&remainingHours<=20)||(remainingDays!==null&&remainingDays<=5)?'soon':'ok';
 }
 function maintenancePrintedHours(machine){
  const ip=String(machine.ip||String(machine.id||'').replace(/^network:/,'')).trim().toLowerCase();
  const name=String(machine.name||'').trim().toLocaleLowerCase();
  const seen=new Set();let total=0;
  try{
   for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);if(!key||!key.startsWith('pcp_active_job_by_printer_v1577_'))continue;
    const job=safeJson(key,null);if(!job||job.deducted||job.completedAt||job.cancelledAt||!['printing','paused'].includes(String(job.printingState||'')))continue;
    const jip=String(job.printerIp||'').trim().toLowerCase(),jn=String(job.printerName||'').trim().toLocaleLowerCase();
    if(!(ip&&jip?ip===jip:(name&&jn===name)))continue;
    const seconds=Math.max(0,number(job.actualPrintSeconds));if(seconds>0)total+=seconds/3600;
   }
  }catch(_){}
  const moves=safeJson('pcp_accounting_moves',[]);
  if(Array.isArray(moves))for(const move of moves){
   if(!move||!String(move.jobKey||'').startsWith('u1:')||move.provisional===true&&!move.cancelled)continue;
   const mip=String(move.printerIp||'').trim().toLowerCase(),mn=String(move.printerName||move.printer||move.machineName||'').trim().toLocaleLowerCase();
   if(!(ip&&mip?ip===mip:(name&&mn===name)))continue;
   const identity=String(move.jobKey||move.id||'');if(seen.has(identity))continue;seen.add(identity);
   const seconds=number(move.actualPrintSeconds),hours=number(move.actualPrintHours);
   if(seconds>0)total+=seconds/3600;else if(hours>0)total+=hours;
  }
  return total;
 }
 function scanMaintenance(){
  if(!settings.maintenance)return;
  const active=[];
  const records=safeJson('pcp_maintenance_v550',{});
  if(records&&typeof records==='object')for(const machine of Object.values(records)){
   if(!machine||typeof machine!=='object'||!Array.isArray(machine.tasks))continue;
   // La pantalla de mantenimiento suma horas registradas + horas reales de impresión.
   const effective={...machine,hours:number(machine.hours)+maintenancePrintedHours(machine)};
   for(const task of machine.tasks){
    const status=maintenanceStatus(task,effective);if(status==='ok')continue;
    const cycle=[machine.id||machine.name,task.id,task.lastDate||'',number(task.lastHours)].map(v=>String(v)).join('|');
    const key='maintenance:'+cycle+':'+status;active.push(key);
    addNotice({type:'maintenance',titleKey:status==='due'?'Mantenimiento vencido':'Mantenimiento próximo',messageKey:status==='due'?'La impresora {printer} necesita realizar esta tarea: {task}.':'La tarea {task} de {printer} se acerca a su fecha de mantenimiento.',params:{printer:machine.name||machine.model||t('Impresora'),task:task.name||t('Tarea de mantenimiento')},action:'maintenance',machineId:machine.id||'',dedupeKey:key,priority:status==='due'?'high':'normal'});
   }
  }
  resolveInactive('maintenance',active);
 }
 function spoolLabel(spool){
  const material=String(spool.material||spool.type||t('Filamento')).trim();
  const color=String(spool.colorName||spool.color||spool.hex||'').trim();
  const brand=String(spool.brand||'').trim();
  return [material,color,brand].filter(Boolean).join(' · ')||t('Bobina');
 }
 function spoolIdentity(spool,index){
  if(spool.id!==undefined&&spool.id!==null&&String(spool.id)!=='')return 'id:'+String(spool.id);
  return 'spool:'+[spool.brand,spool.material,spool.hex,spool.colorName||spool.color,index].map(normalize).join('|');
 }
 function scanStock(){
  if(!settings.stock)return;
  const active=[];
  const spools=safeJson('pcp_spools',[]);
  const list=Array.isArray(spools)?spools:[];
  {
   const mode=['grams','spools','both'].includes(settings.stockMode)?settings.stockMode:'grams';
   if(mode==='grams'||mode==='both'){
    const threshold=Math.max(1,number(settings.stockGrams)||200);
    list.forEach((spool,index)=>{
     if(!spool||typeof spool!=='object')return;
     const remaining=Math.max(0,number(spool.remaining??spool.remainingGrams));
     if(remaining>=threshold)return;
     const key='stock:grams:'+spoolIdentity(spool,index)+':'+threshold;active.push(key);
     addNotice({type:'stock',titleKey:remaining<=0?'Bobina agotada':'Queda poco filamento',messageKey:remaining<=0?'La bobina {spool} está agotada.':'En la bobina {spool} quedan {grams} g; el umbral configurado es {threshold} g.',params:{spool:spoolLabel(spool),grams:gramsText(remaining),threshold:gramsText(threshold)},action:'spools',dedupeKey:key,priority:remaining<=0?'high':'normal'});
    });
   }
   if(mode==='spools'||mode==='both'){
    const threshold=Math.max(1,Math.floor(number(settings.stockSpools)||1));
    const available=list.reduce((sum,spool)=>{
     if(!spool||typeof spool!=='object'||number(spool.remaining??spool.remainingGrams)<=0)return sum;
     const quantity=spool.quantity==null?1:Math.max(0,Math.floor(number(spool.quantity)));
     return sum+quantity;
    },0);
    if(available<=threshold){const key='stock:spool-count:'+threshold;active.push(key);addNotice({type:'stock',titleKey:'Quedan pocas bobinas',messageKey:'Solo quedan {count} bobinas con filamento disponible; el aviso está configurado para {threshold} o menos.',params:{count:available,threshold},action:'spools',dedupeKey:key,priority:available===0?'high':'normal'});}
   }
  }
  resolveInactive('stock',active);
 }
 function deductionInfo(move){
  const deductions=Array.isArray(move?.filamentDeductions)?move.filamentDeductions:[];
  const grams=deductions.reduce((sum,d)=>sum+Math.max(0,number(d?.grams)),0);
  const recorded=grams>0?grams:Math.max(0,number(move?.filamentDeductionGrams));
  return {deductions,grams:recorded,has:move?.filamentInventoryApplied===true||recorded>0};
 }
 function readAccounting(){const value=safeJson('pcp_accounting_moves',[]);return Array.isArray(value)?value:[]}
 function accountingIdentity(move,index){return String(move?.id||move?.jobKey||('row:'+index));}
 function accountingSignature(move){
  const info=deductionInfo(move);
  return [move?.provisional===true?'provisional':'final',move?.cancelled===true?'cancelled':'not-cancelled',info.has?'deducted':'not-deducted',info.grams.toFixed(2),String(move?.concept||'')].join('|');
 }
 function accountingFile(move){
  const raw=String(move?.jobKey||'').startsWith('u1:')?String(move.jobKey).slice(3).split('|')[0]:String(move?.concept||move?.name||t('Impresión'));
  return raw.split(/[\\/]/).pop().trim()||t('Impresión');
 }
 function scanAccounting(){
  const moves=readAccounting();
  let seen=safeJson(ACCOUNTING_SEEN_KEY,null);
  if(!seen||typeof seen!=='object'||Array.isArray(seen)){
   seen={};moves.forEach((move,index)=>{seen[accountingIdentity(move,index)]=accountingSignature(move)});
   try{localStorage.setItem(ACCOUNTING_SEEN_KEY,JSON.stringify(seen))}catch(_){}
   return;
  }
  let changed=false;
  moves.forEach((move,index)=>{
   if(!move||typeof move!=='object'||String(move.jobKey||'').endsWith('|commission')||String(move.jobKey||'').endsWith('|sale'))return;
   const identity=accountingIdentity(move,index),signature=accountingSignature(move),previous=seen[identity];
   const info=deductionInfo(move);
   const cancelled=move.cancelled===true||/impresi[oó]n cancelada|cancelled print|impression annul[ée]e|druck abgebrochen|stampa annullata/i.test(String(move.concept||'')+' '+String(move.notes||''));
   const u1=String(move.jobKey||'').startsWith('u1:');
   const completed=u1&&!cancelled&&move.provisional===false;
   const changedNow=previous!==signature;
   // Las impresiones U1 ya publican su aviso único desde el ciclo de finalización
   // del monitor. No generar un segundo aviso de contabilidad para ese mismo trabajo.
   if(settings.accounting&&changedNow&&info.has&&info.grams>0){
    if(u1&&completed){
     // Se conserva la firma para no volver a evaluar este movimiento en cada sondeo.
    }else if(u1&&cancelled){
     const status=cancelled?'cancelled':'completed';
     const key='accounting:'+identity+':'+status+':'+info.grams.toFixed(2);
     addNotice({type:'accounting',titleKey:cancelled?'Impresión cancelada con descuento de filamento':'Impresión finalizada con descuento de filamento',messageKey:cancelled?'El movimiento de {file} se ha cancelado y registra un descuento de {grams} g de filamento.':'La impresión de {file} ha terminado y se han descontado {grams} g de filamento del inventario.',params:{file:accountingFile(move),grams:gramsText(info.grams)},action:'accounting',dedupeKey:key,priority:'normal'});
    }else if(!u1&&previous===undefined){
     addNotice({type:'accounting',titleKey:'Descuento de filamento registrado',messageKey:'El movimiento «{concept}» ha descontado {grams} g de filamento del inventario.',params:{concept:String(move.concept||move.name||t('Movimiento contable')),grams:gramsText(info.grams)},action:'accounting',dedupeKey:'accounting-deduction:'+identity,priority:'normal'});
    }
   }
   seen[identity]=signature;changed=true;
  });
  const keys=Object.keys(seen);if(keys.length>700){const keep={};keys.slice(-500).forEach(k=>keep[k]=seen[k]);seen=keep;}
  if(changed)try{localStorage.setItem(ACCOUNTING_SEEN_KEY,JSON.stringify(seen))}catch(_){}
 }
 function getIcon(type){return ({maintenance:'🔧',stock:'🧵',accounting:'💶',update:'⬆',backup:'💾',printerError:'🖨️'})[type]||'•'}
 function labelForType(type){return t(({maintenance:'Mantenimiento',stock:'Stock de filamento',accounting:'Contabilidad',update:'Actualizaciones',backup:'Copias de seguridad',printerError:'Impresoras'})[type]||'Avisos')}
 function openDestination(notice){
  if(!notice)return;
  // Algunas alertas históricas guardan la acción como «spools», mientras que
  // otras versiones usaban el tipo «stock». Normalizamos ambos formatos.
  const rawAction=String(notice.action||notice.type||'').trim();
  const action=({spools:'stock',filament:'stock',inventory:'stock',printer:'printers',printerError:'printers',options:'update'})[rawAction]||rawAction;
  const destinations={
   maintenance:'maintenanceView',
   stock:'spoolsView',
   accounting:'accountingView',
   update:'programOptionsView',
   backup:'programOptionsView',
   printers:'printersView'
  };
  const tabId=destinations[action];
  const tabButton=tabId?document.querySelector(`.tab-button[data-tab="${tabId}"]`):null;

  // Oculta el panel antes de cambiar de sección para que no tape el destino.
  togglePanel(false);
  if(tabButton){
   tabButton.click();
   const page=$(tabId);
   requestAnimationFrame(()=>page?.scrollIntoView({behavior:'smooth',block:'start'}));
  }

  if(action==='maintenance'&&notice.machineId){
   const select=$('maintenanceMachineSelect');
   if(select){
    select.value=notice.machineId;
    select.dispatchEvent(new Event('change',{bubbles:true}));
   }
  }
  if(action==='update'&&notice.url){
   window.open(notice.url,'_blank','noopener,noreferrer');
  }
  if(action==='backup'){
   requestAnimationFrame(()=>$('pcpBackupSettingsPanel')?.scrollIntoView({behavior:'smooth',block:'center'}));
  }
 }
 function render(){
  const list=$('pcpNotificationList'),panel=$('pcpNotificationPanel');if(!list||!panel)return;
  const visible=notices.slice().sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||'')));
  list.replaceChildren();
  if(!visible.length){const empty=document.createElement('div');empty.className='pcp-notification-empty';empty.textContent=t('No hay avisos por ahora.');list.appendChild(empty);}
  visible.forEach(notice=>{
   const article=document.createElement('article');article.className='pcp-notification-item'+(notice.readAt?' is-read':'')+(notice.resolvedAt?' is-resolved':'')+' priority-'+(notice.priority||'normal');article.dataset.type=notice.type;
   const icon=document.createElement('span');icon.className='pcp-notification-item-icon';icon.textContent=getIcon(notice.type);icon.setAttribute('aria-hidden','true');
   const body=document.createElement('div');body.className='pcp-notification-item-body';
   const meta=document.createElement('div');meta.className='pcp-notification-item-meta';
   const category=document.createElement('span');category.className='pcp-notification-category';category.textContent=labelForType(notice.type);
   const date=document.createElement('time');date.dateTime=notice.createdAt||'';try{date.textContent=new Intl.DateTimeFormat(window.PCP_LOCALE||'es-ES',{dateStyle:'short',timeStyle:'short'}).format(new Date(notice.createdAt))}catch(_){date.textContent=''}
   meta.append(category,date);
   const title=document.createElement('strong');title.className='pcp-notification-title';title.style.display='block';title.style.marginBottom='5px';title.textContent=t(notice.titleKey);
   const message=document.createElement('p');message.className='pcp-notification-message';message.style.display='block';message.style.margin='4px 0 9px';message.style.whiteSpace='normal';message.textContent=localizeEmbeddedMetadata(fmt(notice.messageKey,notice.params||{}));
   const actions=document.createElement('div');actions.className='pcp-notification-actions';
   if(notice.action){const open=document.createElement('button');open.type='button';open.className='pcp-notification-open';open.textContent=t('Abrir');open.addEventListener('click',()=>{markRead(notice.id);openDestination(notice)});actions.appendChild(open)}
   if(!notice.readAt){const read=document.createElement('button');read.type='button';read.className='pcp-notification-read';read.textContent=t('Marcar como leído');read.addEventListener('click',()=>markRead(notice.id));actions.appendChild(read)}
   if(notice.resolvedAt){const resolved=document.createElement('span');resolved.className='pcp-notification-resolved';resolved.textContent=t('Resuelto');actions.appendChild(resolved)}
   body.append(meta,title,message,actions);article.append(icon,body);list.appendChild(article);
  });
  const clear=$('pcpNotificationsClearRead');if(clear)clear.disabled=!notices.some(n=>n.readAt||n.resolvedAt);
  const mark=$('pcpNotificationsMarkAll');if(mark)mark.disabled=!notices.some(n=>!n.readAt&&!n.resolvedAt);
  setBadge();
  try{window.dispatchEvent(new CustomEvent('pcp-notifications-updated'));}catch(_){}
 }
 function markRead(noticeId){const n=notices.find(x=>x.id===noticeId);if(!n)return;n.readAt=new Date().toISOString();saveNotices();render();}
 function markAllRead(){const now=new Date().toISOString();notices.forEach(n=>{if(!n.readAt&&!n.resolvedAt)n.readAt=now});saveNotices();render();}
 function clearRead(){notices=notices.filter(n=>!n.readAt&&!n.resolvedAt);saveNotices();render();}
 function togglePanel(force){const panel=$('pcpNotificationPanel'),button=$('pcpTopNotifications');if(!panel)return;panelOpen=typeof force==='boolean'?force:!panelOpen;panel.hidden=!panelOpen;panel.setAttribute('aria-hidden',panelOpen?'false':'true');button?.setAttribute('aria-expanded',panelOpen?'true':'false');if(panelOpen){render();$('pcpNotificationsClose')?.focus();}}
 function saveSettingsFromForm(){
  const grams=Math.max(1,Math.min(100000,number($('pcpNotificationStockGrams')?.value)||200));
  const spools=Math.max(1,Math.min(10000,Math.floor(number($('pcpNotificationStockSpools')?.value)||1)));
  settings={maintenance:!!$('pcpNotificationMaintenance')?.checked,accounting:!!$('pcpNotificationAccounting')?.checked,stock:!!$('pcpNotificationStock')?.checked,stockMode:['grams','spools','both'].includes($('pcpNotificationStockMode')?.value)?$('pcpNotificationStockMode').value:'grams',stockGrams:grams,stockSpools:spools,updates:!!$('pcpNotificationUpdates')?.checked,backups:!!$('pcpNotificationBackups')?.checked,printerErrors:!!$('pcpNotificationPrinterErrors')?.checked};
  try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));}catch(e){console.warn('[PCP notifications] No se pudieron guardar las preferencias',e)}
  if(!settings.updates)$('pcp-update-notice')?.remove();
  const status=$('pcpNotificationSettingsStatus');if(status)status.textContent=t('Preferencias de avisos guardadas.');syncSettingsForm();scanAll();
 }
 function syncSettingsForm(){
  const fields={pcpNotificationMaintenance:settings.maintenance,pcpNotificationAccounting:settings.accounting,pcpNotificationStock:settings.stock,pcpNotificationUpdates:settings.updates,pcpNotificationBackups:settings.backups,pcpNotificationPrinterErrors:settings.printerErrors};
  Object.entries(fields).forEach(([key,value])=>{const el=$(key);if(el)el.checked=!!value});
  const mode=$('pcpNotificationStockMode'),grams=$('pcpNotificationStockGrams'),spools=$('pcpNotificationStockSpools');if(mode)mode.value=settings.stockMode||'grams';if(grams)grams.value=String(settings.stockGrams||200);if(spools)spools.value=String(settings.stockSpools||1);
  const gramsWrap=$('pcpNotificationStockGramsWrap'),spoolsWrap=$('pcpNotificationStockSpoolsWrap');if(gramsWrap)gramsWrap.hidden=!['grams','both'].includes(settings.stockMode);if(spoolsWrap)spoolsWrap.hidden=!['spools','both'].includes(settings.stockMode);
 }
 function scanAll(){scanMaintenance();scanStock();scanAccounting();render();}
 function reportPrinterIssue(detail={}){settings=readSettings();const printer=String(detail.printer||t('Impresora')).trim(),ip=String(detail.ip||'').trim(),message=String(detail.message||'').trim();const identity=ip||normalize(printer),prefix='printer-error:'+identity;if(!settings.printerErrors||!message){let changed=false;const now=new Date().toISOString();for(const n of notices){if(n.type==='printerError'&&!n.resolvedAt&&(!settings.printerErrors||String(n.dedupeKey||'')===prefix)){n.resolvedAt=now;changed=true;}}if(changed){saveNotices();render();}return null;}const notice=addNotice({type:'printerError',titleKey:'Problema de impresora',messageKey:'La impresora {printer} ha informado de un problema: {message}',params:{printer,message},action:'printers',machineId:ip,dedupeKey:prefix,priority:'high'});return notice;}
 function resolveNotice(key){
  let changed=false;const now=new Date().toISOString();
  for(const notice of notices){if(notice.dedupeKey===key&&!notice.resolvedAt){notice.resolvedAt=now;changed=true;}}
  if(changed){saveNotices();render();}
 }
 function onBackupFailed(event){
  settings=readSettings();if(!settings.backups)return;
  const detail=event?.detail||{},operation=String(detail.operation||'create');
  addNotice({type:'backup',titleKey:'Error en copia de seguridad',messageKey:'No se pudo completar la copia de seguridad: {message}',params:{message:String(detail.message||t('Comprueba el servidor local y el espacio disponible.'))},action:'backup',dedupeKey:'backup-failed:'+operation,priority:'high'});
 }
 function onBackupSucceeded(event){
  const operation=String(event?.detail?.operation||'create');
  resolveNotice('backup-failed:'+operation);
 }
 function onUpdateAvailable(event){
  settings=readSettings();if(!settings.updates)return;const detail=event?.detail||{},version=String(detail.version||'').trim();if(!version)return;
  addNotice({type:'update',titleKey:'Nueva versión disponible',messageKey:'Se ha publicado la versión {version}. Ya puedes consultar y descargar la actualización.',params:{version},action:'update',url:String(detail.url||''),version,dedupeKey:'update:'+version,priority:'high'});
 }
 function normalizeLegacyNotice(notice){
  if(!notice||typeof notice!=='object')return notice;
  const rawTitle=String(notice.titleKey||''),rawMessage=String(notice.messageKey||'');
  if(/[\u3400-\u9fff]/.test(rawTitle+rawMessage)){
   const chinese=rawTitle+' '+rawMessage;
   notice.params=notice.params&&typeof notice.params==='object'?notice.params:{};
   const grams=notice.params.grams??notice.params.amount??notice.params.weight??notice.params.filamentGrams??'—';
   const concept=notice.params.concept??notice.params.file??notice.params.name??'Impresión';
   if(notice.type==='accounting'&&/(退回|归还|返还|恢复库存|入库)/.test(chinese)){
    notice.titleKey='Filamento devuelto al inventario';
    notice.messageKey='Al eliminar el movimiento «{concept}», se han devuelto {grams} g de filamento al inventario.';
    notice.params={...notice.params,concept,grams};
   }else if(notice.type==='accounting'&&/(扣减|扣除|耗材|线材|减少)/.test(chinese)){
    notice.titleKey='Descuento de filamento registrado';
    notice.messageKey='El movimiento «{concept}» ha descontado {grams} g de filamento del inventario.';
    notice.params={...notice.params,concept,grams};
   }else if(notice.type==='accounting'){
    // No dejar textos heredados en chino: mostrar una descripción española segura.
    notice.titleKey='Movimiento contable actualizado';
    notice.messageKey='Se ha actualizado el movimiento contable «{concept}». Revisa el detalle en Contabilidad.';
    notice.params={...notice.params,concept};
   }
  }
  return notice;
 }
 function init(){
  if(initialized)return;initialized=true;settings=readSettings();notices=safeJson(NOTICES_KEY,[]);if(!Array.isArray(notices))notices=[];
  const normalized=notices.map(normalizeLegacyNotice);if(JSON.stringify(normalized)!==JSON.stringify(notices)){notices=normalized;saveNotices();}
  const panel=$('pcpNotificationPanel'),button=$('pcpTopNotifications');
  if(panel){panel.hidden=true;panel.setAttribute('aria-hidden','true')}
  if(button){button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','pcpNotificationPanel');button.addEventListener('click',()=>togglePanel());}
  $('pcpNotificationsClose')?.addEventListener('click',()=>togglePanel(false));
  $('pcpNotificationsMarkAll')?.addEventListener('click',markAllRead);
  $('pcpNotificationsClearRead')?.addEventListener('click',clearRead);
  $('pcpNotificationSettingsSave')?.addEventListener('click',saveSettingsFromForm);
  $('pcpNotificationStockMode')?.addEventListener('change',()=>{settings.stockMode=$('pcpNotificationStockMode').value;syncSettingsForm()});
  document.addEventListener('pointerdown',event=>{if(!panelOpen)return;if(panel?.contains(event.target)||button?.contains(event.target))return;togglePanel(false)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panelOpen){togglePanel(false);button?.focus()}});
  window.addEventListener('pcp-external-storage-sync',scanAll);
  window.addEventListener('pcp-maintenance-updated',scanMaintenance);
  window.addEventListener('pcp-spools-updated',scanStock);
  window.addEventListener('storage',event=>{if(!event.key||['pcp_spools','pcp_maintenance_v550','pcp_accounting_moves',SETTINGS_KEY,NOTICES_KEY].includes(event.key)){settings=readSettings();notices=safeJson(NOTICES_KEY,notices)||notices;scanAll()}});
  window.addEventListener('pcp-language-changed',()=>{settings=readSettings();render();});
  syncSettingsForm();
  // Prime the accounting snapshot once so legacy movements do not create a flood of old notifications.
  if(!localStorage.getItem(ACCOUNTING_SEEN_KEY)){
   const baseline={};readAccounting().forEach((move,index)=>baseline[accountingIdentity(move,index)]=accountingSignature(move));
   try{localStorage.setItem(ACCOUNTING_SEEN_KEY,JSON.stringify(baseline))}catch(_){}
  }
  // Escaneo inicial y por cambios reales de almacenamiento; evitar releer inventario y contabilidad cada 5 s.
  scanAll();
  // Reevalúa vencimientos mientras una impresión está en curso y sus horas aumentan.
  window.setInterval(scanMaintenance,30000);
 }
 window.addEventListener('pcp-update-available',onUpdateAvailable);
 window.addEventListener('pcp-backup-failed',onBackupFailed);
 window.addEventListener('pcp-backup-succeeded',onBackupSucceeded);
 function showCompletionToast(detail={}){
  const old=document.getElementById('pcp-print-completion-toast');if(old)old.remove();
  const toast=document.createElement('section');toast.id='pcp-print-completion-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');
  toast.style.cssText='position:fixed;right:22px;bottom:22px;z-index:2147483000;width:min(430px,calc(100vw - 32px));padding:18px;border:1px solid #38bdf8;border-radius:14px;background:#0b1729;color:#eff6ff;box-shadow:0 18px 55px #0009;font:14px/1.45 system-ui,sans-serif';
  const title=document.createElement('strong');title.textContent=t('Impresión finalizada');title.style.cssText='display:block;font-size:16px;margin-bottom:8px';
  const body=document.createElement('div');body.textContent=[detail.printer,detail.file,detail.duration,detail.filament,detail.deduction].filter(Boolean).join(' · ');body.style.cssText='overflow-wrap:anywhere';
  const close=document.createElement('button');close.type='button';close.textContent=t('Cerrar');close.style.cssText='margin-top:12px;padding:7px 12px;border:1px solid #49627f;border-radius:8px;background:#172b45;color:#fff;cursor:pointer';close.addEventListener('click',()=>toast.remove());
  toast.append(title,body,close);document.body.appendChild(toast);setTimeout(()=>toast.remove(),15000);
 }
 window.PCPNotifications={showCompletionToast,add:addNotice,scan:scanAll,isEnabled(type){return !!settings[type==='backup'?'backups':type==='printerError'?'printerErrors':type]},getSettings(){return {...settings}},getActive(){return notices.filter(n=>!n.resolvedAt).slice().sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||'')))},reportBackupFailure(detail={}){onBackupFailed({detail})},reportPrinterIssue,open(){togglePanel(true)},close(){togglePanel(false)}};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
