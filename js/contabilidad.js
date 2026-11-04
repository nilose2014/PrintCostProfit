
(()=>{
const $=id=>document.getElementById(id),KEY='pcp_accounting_moves';let accountingSearchTerm='';let accountingSortColumn=localStorage.getItem('pcp_accounting_sort')||'';
const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return []}};
const set=a=>localStorage.setItem(KEY,JSON.stringify(a));
const eur=(n,c='EUR')=>new Intl.NumberFormat((window.PCP_LOCALE||'es-ES'),{style:'currency',currency:c||'EUR'}).format(Number(n)||0);
const collectedAmount=x=>(x.kind==='personalExpense'||x.kind==='personal')?null:(x.kind==='income'?(x.customerCharge??x.saleDetails?.grossRevenue??x.amount):(x.collectedRevenue??(String(x.jobKey||'').startsWith('u1:')?x.saleDetails?.grossRevenue:null)??null));
const h=()=>{try{return JSON.parse(localStorage.getItem('pcp_history')||'[]')}catch(e){return []}};

const getSpools=()=>{try{return JSON.parse(localStorage.getItem('pcp_spools')||'[]')}catch(e){return []}};
const setSpools=a=>localStorage.setItem('pcp_spools',JSON.stringify(a));
const normSpool=v=>String(v||'').trim().toLocaleLowerCase('es').replace(/\s+/g,' ');
const spoolSig=s=>[s.brand,s.material,s.hex,s.colorName||s.color].map(normSpool).join('|');
function allocateFilamentForExpense(breakdown){
 const filaments=Array.isArray(breakdown?.filaments)?breakdown.filaments:[];
 if(!filaments.length)return {ok:true,deductions:[],message:''};
 const spools=getSpools(),deductions=[],issues=[];
 const cleanHex=v=>String(v||'').trim().replace(/^#?/,'').toUpperCase();
 const genericMaterial=v=>!v||['filamento','filament','material','generic','otro','other',''].includes(normSpool(v));
 for(const f of filaments){
  const grams=Math.max(0,Number(f.grams)||0);if(!grams)continue;
  const rawMaterial=f.material||f.type||f.filamentType||'';
  const material=normSpool(rawMaterial);
  // Saved quote filament rows use color as the HEX code and name as a combined label.
  const label=String(f.name||f.label||'');
  const embeddedHex=(label.match(/#([0-9a-f]{6})\b/i)||[])[1]||'';
  const rawHex=f.hex||f.colorHex||f.hexColor||f.color_code||(typeof f.color==='string'&&/^#?[0-9a-f]{6}$/i.test(f.color.trim())?f.color:'')||embeddedHex;
  const hex=cleanHex(rawHex);
  const color=normSpool(f.colorName||f.color_name||label.replace(/#[0-9a-f]{6}/ig,'').split('·').pop()||f.color);
  let candidates=spools.map((spool,index)=>({spool,index,hexMatch:hex&&cleanHex(spool.hex)===hex,colorMatch:color&&[spool.colorName,spool.color,spool.name].some(v=>normSpool(v)===color)})).filter(({spool,hexMatch,colorMatch})=>{
   const materialMatch=genericMaterial(material)||genericMaterial(spool.material)||normSpool(spool.material)===material;
   // Prefer exact HEX; if the saved document has a generic/missing material or stale color name, the HEX is authoritative.
   const colorMatchOK=hex?hexMatch:(color?(colorMatch||[spool.colorName,spool.color,spool.name].some(v=>normSpool(v).includes(color)||color.includes(normSpool(v)))):true);
   return materialMatch&&colorMatchOK;
  });
  // If exact HEX exists in inventory but material label differs (e.g. saved quote says "Filamento"),
  // allow HEX to identify the spool and use material only as a secondary preference.
  if(!candidates.length&&hex)candidates=spools.map((spool,index)=>({spool,index,hexMatch:cleanHex(spool.hex)===hex,colorMatch:false})).filter(x=>x.hexMatch);
  // If no HEX match, use exact normalized color name with material compatibility.
  if(!candidates.length&&color)candidates=spools.map((spool,index)=>({spool,index,hexMatch:false,colorMatch:[spool.colorName,spool.color,spool.name].some(v=>normSpool(v)===color||normSpool(v).includes(color)||color.includes(normSpool(v)))})).filter(({spool})=>genericMaterial(material)||genericMaterial(spool.material)||normSpool(spool.material)===material).filter(x=>x.colorMatch);
  candidates=candidates.sort((a,b)=>(Number(b.spool.remaining)||0)-(Number(a.spool.remaining)||0));
  let left=grams;
  for(const c of candidates){
   const available=Math.max(0,Number(c.spool.remaining)||0),take=Math.min(available,left);
   if(take>0){deductions.push({index:c.index,signature:spoolSig(c.spool),spoolId:c.spool.id??null,brand:c.spool.brand||'',material:c.spool.material||'',hex:c.spool.hex||'',color:c.spool.colorName||c.spool.color||'',grams:take});left-=take;}
   if(left<=0.0001)break;
  }
  if(left>0.0001)issues.push((rawMaterial&&!genericMaterial(rawMaterial)?rawMaterial:'Filamento')+' '+(f.colorName||f.color||rawHex||'')+': faltan '+left.toFixed(2)+' g');
 }
 if(issues.length){
  return {ok:false,deductions:[],message:accT('No se pudo guardar el gasto: falta stock de filamento o no se encuentra la bobina correspondiente.')+'\n'+issues.join('\n')};
 }
 deductions.forEach(d=>{const sp=spools[d.index];sp.remaining=Math.max(0,(Number(sp.remaining)||0)-d.grams);});
 setSpools(spools);
 return {ok:true,deductions,message:''};
}
function refundFilamentForExpense(move){
 const deductions=move?.filamentDeductions;if(!Array.isArray(deductions)||!deductions.length)return;
 const spools=getSpools();
 deductions.forEach(d=>{
  let idx=-1;
  if(d.spoolId!=null)idx=spools.findIndex(s=>String(s.id)===String(d.spoolId));
  if(idx<0&&Number.isInteger(d.index)&&spools[d.index]&&spoolSig(spools[d.index])===d.signature)idx=d.index;
  if(idx<0)idx=spools.findIndex(s=>spoolSig(s)===d.signature);
  if(idx>=0){const sp=spools[idx];sp.remaining=Math.max(0,Number(sp.remaining)||0)+Math.max(0,Number(d.grams)||0);if(Number(sp.initial)>0)sp.remaining=Math.min(Number(sp.initial),sp.remaining);}
 });
 setSpools(spools);
}



function showFilamentNotice(title,subtitle,rows,kind='success'){
 const existing=document.getElementById('pcp-filament-notice');if(existing)existing.remove();
 const overlay=document.createElement('div');overlay.id='pcp-filament-notice';overlay.style.cssText='position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(3,8,20,.72);backdrop-filter:blur(5px)';
 const panel=document.createElement('div');panel.style.cssText='width:min(560px,100%);max-height:80vh;overflow:auto;border:1px solid '+(kind==='error'?'#e4a15a':'#3a8f84')+';border-radius:18px;background:#121d31;color:#edf4ff;box-shadow:0 24px 80px rgba(0,0,0,.45);padding:24px;font:14px/1.5 system-ui,sans-serif';
 const icon=kind==='error'?'⚠':'✓';
 panel.innerHTML=`<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:42px;height:42px;flex:0 0 42px;border-radius:13px;background:${kind==='error'?'#5a3920':'#163f3b'};display:grid;place-items:center;font-size:22px">${icon}</div><div style="flex:1"><div style="font-size:19px;font-weight:750;letter-spacing:-.3px;margin:2px 0 5px">${esc(title)}</div><div style="color:#b8c6da">${esc(subtitle)}</div></div></div><div style="display:grid;gap:9px;margin:18px 0">${rows.map(r=>`<div style="display:flex;justify-content:space-between;gap:12px;padding:11px 13px;border:1px solid #2c3d56;border-radius:11px;background:#17243a"><div><div style="font-weight:650">${esc(r.name)}</div><div style="font-size:12px;color:#a9bad0">${esc(r.detail||'')}</div></div><div style="font-weight:750;white-space:nowrap;color:${kind==='error'?'#ffc98a':'#73dfca'}">${esc(r.amount||'')}</div></div>`).join('')}</div><div style="display:flex;justify-content:flex-end"><button type="button" data-notice-close style="border:0;border-radius:10px;background:#63d6c3;color:#08251f;font-weight:750;padding:10px 18px;cursor:pointer">${esc(accT('Aceptar'))}</button></div>`;
 overlay.appendChild(panel);document.body.appendChild(overlay);
 const close=()=>overlay.remove();overlay.addEventListener('click',e=>{if(e.target===overlay)close()});panel.querySelector('[data-notice-close]').addEventListener('click',close);
 const key=e=>{if(e.key==='Escape'){close();document.removeEventListener('keydown',key)}};document.addEventListener('keydown',key);
}
function filamentSaveMessage(move){
 const rows=(move.filamentDeductions||[]).map(d=>({name:[d.brand,d.material].filter(Boolean).join(' · ')||accT('Bobina'),detail:d.color||d.hex||'',amount:`−${Number(d.grams||0).toFixed(2)} g`}));
 if(!rows.length)rows.push({name:accT('No se ha descontado filamento.'),detail:'',amount:''});
 showFilamentNotice(accT('Gasto guardado correctamente'),accT('Se ha registrado el gasto propio y se ha descontado este filamento del inventario.'),rows,'success');
}
function filamentRefundMessage(move){
 const rows=(move.filamentDeductions||[]).map(d=>({name:[d.brand,d.material].filter(Boolean).join(' · ')||accT('Bobina'),detail:d.color||d.hex||'',amount:`+${Number(d.grams||0).toFixed(2)} g`}));
 if(!rows.length)rows.push({name:accT('Se ha eliminado el movimiento y se ha recuperado el filamento de estas bobinas:'),detail:'',amount:''});
 showFilamentNotice(accT('Filamento devuelto al inventario'),accT('Se ha eliminado el movimiento y se ha recuperado el filamento de estas bobinas:'),rows,'success');
}



const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const accountingPages=window.__pcpAccountingPages||(window.__pcpAccountingPages={});const attachTablePagination=(container,tableSelector,baseId,pageSize=10)=>{const host=typeof container==='string'?document.getElementById(container):container;if(!host)return;const table=host.querySelector(tableSelector);if(!table)return;const body=table.tBodies&&table.tBodies[0];if(!body)return;const rows=Array.from(body.rows);const old=host.querySelector('[data-pager="'+baseId+'"]');if(old)old.remove();if(rows.length<=pageSize){rows.forEach(r=>r.style.display='');return;}const pages=Math.ceil(rows.length/pageSize);let page=Math.min(Math.max(1,Number(accountingPages[baseId]||1)),pages);const nav=document.createElement('div');nav.dataset.pager=baseId;nav.className='acc-pagination';nav.style.cssText='display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:14px;padding:10px';const prev=document.createElement('button');prev.type='button';prev.className='btn';const label=document.createElement('span');const next=document.createElement('button');next.type='button';next.className='btn';const draw=()=>{accountingPages[baseId]=page;rows.forEach((r,i)=>r.style.display=(i>=(page-1)*pageSize&&i<page*pageSize)?'':'none');prev.textContent=accT('Anterior');next.textContent=accT('Siguiente');prev.disabled=page===1;next.disabled=page===pages;label.textContent=(accT('Página'))+' '+page+' / '+pages+' · '+rows.length+' '+(accT('movimientos'));};prev.addEventListener('click',()=>{if(page>1){page--;draw()}});next.addEventListener('click',()=>{if(page<pages){page++;draw()}});nav.append(prev,label,next);host.appendChild(nav);draw();};
const accT=k=>window.PCP_I18N?.t(k)||k;

function discoveredPrinterRecords(){
 try{const list=JSON.parse(localStorage.getItem('pcp_u1_discovered_printers')||'[]');return Array.isArray(list)?list:[]}catch(_){return []}
}
function printerAliases(){try{return JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}')}catch(_){return {}}}
function activeU1Alias(){
 const aliases=printerAliases();let ip='';
 for(const key of ['pcp_u1_manual_ip_v180','pcp_u1_manual_ip_v178','pcp_u1_manual_ip']){try{ip=String(localStorage.getItem(key)||'').trim();if(ip)break}catch(_){}}
 const selector=document.getElementById('pcpU1PrinterSelect');if(selector&&selector.value)ip=String(selector.value).trim();
 if(ip&&typeof aliases[ip]==='string'&&aliases[ip].trim())return aliases[ip].trim();
 const candidates=[];discoveredPrinterRecords().forEach(p=>{const model=String(p.model||p.name||p.printerName||p.machineName||'');const addr=String(p.ip||p.hostname||p.address||'');const alias=String(aliases[addr]||p.alias||'').trim();if(/snapmaker\s*u1/i.test(model+' '+String(p.name||''))&&alias)candidates.push(alias)});
 const unique=[...new Set(candidates)];return unique.length===1?unique[0]:'';
}
function canonicalPrinterName(value){
 const name=String(value||'').trim();if(!name)return 'Sin impresora asignada';
 const aliases=printerAliases();
 if(/^snapmaker\s*u1$/i.test(name)){const active=activeU1Alias();if(active)return active;}
 if(aliases[name]&&String(aliases[name]).trim())return String(aliases[name]).trim();
 const norm=v=>String(v||'').trim().toLocaleLowerCase();
 const record=discoveredPrinterRecords().find(p=>[p.name,p.printerName,p.machineName,p.model,p.hostname,p.ip,p.address,p.id].some(v=>norm(v)===norm(name)));
 if(record){const alias=aliases[record.ip]||aliases[record.hostname]||aliases[record.address]||record.alias;if(alias&&String(alias).trim())return String(alias).trim();}
 const exact=discoveredPrinters().find(v=>norm(v)===norm(name));if(exact)return exact;
 return name;
}
function accountingPrinter(x){
 const raw=String(x.notes||x.client||'');
 const direct=String(x.printerName||x.printer||x.machineName||x.profileName||'').trim();
 // La identidad contable es histórica: nunca resolver un movimiento ya registrado
 // usando el alias de la impresora seleccionada en este momento.
 const endpoint=String(x.printerIp||x.printerIP||x.endpoint||'').trim();
 if(endpoint){const aliases=printerAliases();const alias=String(aliases[endpoint]||'').trim();if(alias)return alias;}
 if(direct){if(x.printerIdentityLocked)return direct; if(/^snapmaker\s*u1$/i.test(direct))return direct;return canonicalPrinterName(direct);}
 const u1=raw.match(/^([^·]+)\s*·\s*(?:finalizada|provisional)\s*·/i);
 if(u1){const label=u1[1].trim();if(/^snapmaker\s*u1$/i.test(label))return label;return canonicalPrinterName(label);}
 const hitem=x.source==='tasacion'?(h()[Number(x.historyIndex)]||{}):{};
 const historical=String(hitem.printerName||hitem.printer||hitem.machineName||hitem.profileName||hitem.profile||'Sin impresora asignada').trim();
 return /^snapmaker\s*u1$/i.test(historical)?historical:canonicalPrinterName(historical);
}
function discoveredPrinters(){
 const aliases=printerAliases();
 return discoveredPrinterRecords().map(p=>String(aliases[p.ip]||aliases[p.hostname]||aliases[p.address]||p.alias||p.name||p.hostname||p.ip||'').trim()).filter(Boolean);
}
function refreshAccountingPrinterSelect(){
 const current=$('accPrinter');if(!current)return;
 const names=[...new Set(discoveredPrinters())].sort((a,b)=>a.localeCompare(b,window.PCP_LOCALE||'es-ES'));
 let select=current;
 if(current.tagName!=='SELECT'){
  select=document.createElement('select');select.id=current.id;select.className=current.className;select.name=current.name||current.id;select.required=true;
  select.setAttribute('aria-label',current.getAttribute('aria-label')||accT('Impresora'));
  current.replaceWith(select);
 }
 const previous=select.value;
 select.innerHTML='';
 const placeholder=document.createElement('option');placeholder.value='';placeholder.textContent=names.length?accT('Selecciona impresora'):accT('No hay impresoras detectadas');placeholder.disabled=true;placeholder.selected=true;select.appendChild(placeholder);
 names.forEach(name=>{const option=document.createElement('option');option.value=name;option.textContent=name;select.appendChild(option)});
 if(names.includes(previous))select.value=previous;else select.value='';
 select.disabled=names.length===0;
}
function accountingType(x){return x.source==='manual'?({'personalExpense':accT('Gasto propio'),'orderExpense':accT('Gasto pedido'),'income':accT('Ingreso cobrado')}[x.kind]||x.kind):(x.kind==='personal'?accT('Personal'):accT('Pedido de venta'))}
function accountingConcept(x){let s=String(x.concept||x.name||accT('Impresión'));if(x.jobKey&&String(x.jobKey).startsWith('u1:')){s=s.replace(/ · impresión en curso \(provisional\)$/i,' · '+accT('Impresión en curso')).replace(/ · impresión finalizada$/i,' · '+accT('Impresión finalizada')).replace(/ · impresión cancelada · coste parcial$/i,' · '+accT('impresión cancelada · coste parcial')).replace(/^Comisión estimada · /,accT('Comisión estimada')+' · ');}return s}
function accountingReference(x){const raw=String(x.notes||x.client||'—');if(x.jobKey&&String(x.jobKey).startsWith('u1:')&&x.breakdown){const m=raw.match(/^(.+?) · (finalizada|provisional) · ([\d.,]+ g) · ([\s\S]*?) · DESGLOSE: /i);if(m){const b=x.breakdown, suffix=raw.includes('detectado del nombre del archivo')?'detectado del nombre del archivo':raw.includes('campo de tiempo de Inicio')?'tomado del campo de tiempo de Inicio':'';const partNames=['Filamento','Electricidad','Desgaste','Mantenimiento','Mano de obra','Reserva'];const partValues=[b.filament,b.electricity,b.wear,b.maintenance,b.laborAndExtras,b.failureReserve];const detail=partNames.map((k,i)=>accT(k)+' '+eur(partValues[i],x.currency)).join('; ')+'; '+accT('Tiempo usado')+' '+Number(b.hours||0).toLocaleString(window.PCP_LOCALE||'es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})+' h'+(suffix?' ('+accT(suffix)+')':'');const parts=window.PCP_I18N?.colorDisplay?.(m[4])||m[4];return canonicalPrinterName(m[1])+' · '+accT(m[2].toLowerCase()==='provisional'?'Provisional':'Finalizada')+' · '+m[3]+' · '+parts+' · '+accT('Desglose')+': '+detail}}
 if(x.jobKey&&String(x.jobKey).includes('|commission')){const m=raw.match(/^Comisión del punto 04 · ([\d.,]+)% sobre ([\d.,]+) (.+) cobrado estimado\.?$/);if(m)return accT('Comisión del punto 04')+' · '+m[1]+'% '+accT('sobre')+' '+m[2]+' '+m[3]+' '+accT('cobrado estimado')}
 return raw}
function editableConcept(x){const raw=String(x.concept||x.name||accT('Impresión'));return x.jobKey&&String(x.jobKey).startsWith('u1:')?raw.replace(/ · impresión (?:finalizada|en curso \(provisional\))$/,''):raw}
function openAccountingEditor(x,index){const charge=collectedAmount(x),profitValue=(x.kind==='personalExpense'||x.kind==='personal')?null:x.profit,dialog=document.createElement('dialog');dialog.className='acc-edit-dialog';dialog.innerHTML='<form method="dialog"><h3>'+esc(accT('Editar movimiento contable'))+'</h3><label>'+esc(accT('Concepto'))+'<input name="concept" value="'+esc(editableConcept(x))+'" required></label><label>'+esc(accT('Importe/coste'))+'<input name="amount" type="number" min="0" step="0.01" value="'+esc(x.amount??0)+'" required></label><label>'+esc(accT('Importe cobrado'))+'<input name="charge" type="number" min="0" step="0.01" '+(charge==null?'':'required')+' value="'+(charge==null?'':esc(charge))+'"></label><label>'+esc(accT('Beneficio estimado'))+'<input name="profit" type="number" step="0.01" value="'+(profitValue==null?'':esc(profitValue))+'"></label><p>'+esc(accT('El detalle de referencia se conserva.'))+'</p><div class="dialog-actions"><button type="button" class="btn" data-editor-cancel>'+esc(accT('Cancelar'))+'</button><button type="submit" class="btn primary">'+esc(accT('Guardar cambios'))+'</button></div></form>';document.body.appendChild(dialog);const close=()=>{dialog.close();dialog.remove()};dialog.querySelector('[data-editor-cancel]').addEventListener('click',close);dialog.addEventListener('close',()=>dialog.remove(),{once:true});dialog.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),concept=String(fd.get('concept')||'').trim(),amount=Number(fd.get('amount')),chargeText=String(fd.get('charge')||'').trim(),profitText=String(fd.get('profit')||'').trim(),newCharge=chargeText===''?null:Number(chargeText),newProfit=profitText===''?null:Number(profitText),suffix=x.jobKey&&String(x.jobKey).startsWith('u1:')?(String(x.concept||'').match(/ · impresión (?:finalizada|en curso \(provisional\))$/)||['',''])[0]:'';if(!concept||!Number.isFinite(amount)||amount<0||(newCharge!==null&&(!Number.isFinite(newCharge)||newCharge<0))||(newProfit!==null&&!Number.isFinite(newProfit))){alert(window.PCP_I18N?.t('Revisa los valores del movimiento.')||'Revisa los valores del movimiento.');return}if(x.source==='manual'){const a=get(),at=a.findIndex(y=>y.id===x.id);if(at<0)return;a[at]={...a[at],concept:concept+suffix,amount,...((a[at].kind==='personalExpense'||a[at].kind==='personal')?{customerCharge:null,profit:null}:{customerCharge:newCharge,profit:newProfit})};set(a)}else{const history=h(),item=history[Number(x.historyIndex)];if(!item)return;const qty=Math.max(1,Number(item.qty)||1);item.name=concept;item.cost=amount/qty;if(newCharge!==null){item.grossSale=newCharge/qty}else if(item.accountingType==='order'){item.grossSale=null}if(newProfit!==null){item.totalProfit=newProfit;item.profit=newProfit/qty}else if(item.accountingType==='order'){item.totalProfit=0;item.profit=0}localStorage.setItem('pcp_history',JSON.stringify(history));renderHistory()}close();render()});dialog.showModal()}
function rows(){
 const manual=get().map(x=>({...x,source:'manual'})), hiddenSales=new Set();
 // Compatibilidad con pedidos guardados antes de esta versión: une la venta asociada al gasto principal.
 manual.filter(x=>x.kind==='income'&&String(x.jobKey||'').endsWith('|sale')).forEach(sale=>{
  const baseKey=String(sale.jobKey).slice(0,-5),expense=manual.find(x=>x.kind==='orderExpense'&&x.jobKey===baseKey);
  if(expense){expense.customerCharge=Number(sale.saleDetails?.grossRevenue??sale.customerCharge??sale.amount)||0;expense.profit=Number(sale.profit)||0;expense.saleDetails=sale.saleDetails||null;expense.collectedRevenue=Number(sale.saleDetails?.grossRevenue??sale.customerCharge??sale.amount)||0;hiddenSales.add(sale.id)}
 });
 const saved=h().map((x,i)=>({...x,source:'tasacion',historyIndex:i,kind:x.accountingType==='order'?'order':'personal',concept:x.name||accT('Impresión'),amount:(Number(x.cost)||0)*(Number(x.qty)||1),client:x.accountingClient||'',date:x.date||new Date().toISOString(),revenue:x.accountingType==='order'?(Number(x.sale)||0)*(Number(x.qty)||1):0,customerCharge:x.accountingType==='order'?(Number(x.grossSale??x.sale)||0)*(Number(x.qty)||1):null,profit:x.accountingType==='order'?(Number(x.totalProfit)||((Number(x.profit)||0)*(Number(x.qty)||1))):0})).filter(x=>x.accountingIncluded!==false);
 return [...manual.filter(x=>!hiddenSales.has(x.id)),...saved].sort((a,b)=>String(b.date).localeCompare(String(a.date)));
}

function showPrinterExpenseDetail(printerName){
 const all=rows().filter(x=>accountingPrinter(x)===printerName&&(x.kind==='personal'||x.kind==='personalExpense'));
 const sums={filament:0,electricity:0,wear:0,maintenance:0,other:0,failure:0,unitemized:0};
 const items=[];
 all.forEach(x=>{let b=x.breakdown||null;if(!b&&x.source==='tasacion')b=(h()[Number(x.historyIndex)]||{}).costBreakdown||null;
 if(b){['filament','electricity','wear','maintenance','other','failure'].forEach(k=>sums[k]+=Number(b[k])||0);items.push({concept:accountingConcept(x),amount:Number(x.amount)||0,has:true});}
 else{sums.unitemized+=Number(x.amount)||0;items.push({concept:accountingConcept(x),amount:Number(x.amount)||0,has:false});}});
 const t=k=>accT(k), money=n=>eur(n,'EUR');
 const dialog=document.createElement('dialog');dialog.className='acc-edit-dialog';

 const detailRows=items.map(x=>'<tr><td>'+esc(x.concept)+'</td><td class="money">'+money(x.amount)+'</td><td><span class="acc-detail-status '+(x.has?'is-available':'is-missing')+'">'+esc(t(x.has?'Detalle disponible':'Desglose no guardado en este registro'))+'</span></td></tr>').join('');
 const summaryRows=[['Filamento',sums.filament],['Electricidad',sums.electricity],['Amortización / desgaste',sums.wear],['Mantenimiento',sums.maintenance],['Mano de obra y extras',sums.other],['Reserva por fallos',sums.failure],['Gastos sin desglose guardado',sums.unitemized]];
 const exportData={printer:printerName,items:items.map(x=>({concept:x.concept,amount:x.amount,breakdownAvailable:x.has})),summary:Object.fromEntries(summaryRows.map(([k,v])=>[t(k),v])),total:Object.values(sums).reduce((a,b)=>a+b,0),currency:'EUR'};
 const csvEscape=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
 const csv='\uFEFF'+[[t('Desglose de gastos propios'),printerName],[],[t('Desglose por impresión'),t('Coste'),t('Detalle disponible')],...items.map(x=>[x.concept,x.amount.toFixed(2),t(x.has?'Detalle disponible':'Desglose no guardado en este registro')]),[],[t('Resumen de costes'),t('Importe')],...summaryRows.map(([k,v])=>[t(k),v.toFixed(2)]),[t('Total de gastos propios'),exportData.total.toFixed(2)]].map(row=>row.map(csvEscape).join(';')).join('\r\n');
 const csvUrl='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);
 dialog.innerHTML='<div class="acc-expense-report">'+
 '<header class="acc-expense-report-head"><div><div class="acc-report-eyebrow">'+esc(t('Resumen de costes'))+'</div><h2>'+esc(t('Desglose de gastos propios'))+'</h2><p>'+esc(printerName)+'</p></div><div class="acc-report-total"><span>'+esc(t('Total de gastos propios'))+'</span><strong>'+money(exportData.total)+'</strong></div></header>'+
 '<div class="acc-report-actions"><a class="btn" download="gastos-propios-'+printerName.replace(/[^a-z0-9_-]+/gi,'_')+'.csv" href="'+csvUrl+'">'+esc(t('Descargar CSV'))+'</a><button type="button" class="btn" data-expense-pdf>'+esc(t('Descargar PDF'))+'</button><button type="button" class="btn primary" data-expense-print>'+esc(t('Imprimir'))+'</button><button type="button" class="btn" data-expense-close>'+esc(t('Cerrar'))+'</button></div>'+
 '<section class="acc-report-section"><h3>'+esc(t('Resumen de costes'))+'</h3><div class="acc-report-cards">'+summaryRows.map(([k,v])=>'<article class="acc-report-card"><span>'+esc(t(k))+'</span><strong>'+money(v)+'</strong></article>').join('')+'</div></section>'+
 '<section class="acc-report-section"><h3>'+esc(t('Desglose por impresión'))+'</h3><div class="accounting-table-wrap"><table class="history acc-report-table"><thead><tr><th>'+esc(t('Impresión'))+'</th><th>'+esc(t('Coste'))+'</th><th>'+esc(t('Detalle disponible'))+'</th></tr></thead><tbody>'+(detailRows||'<tr><td colspan="3">'+esc(t('No hay gastos propios registrados para esta impresora.'))+'</td></tr>')+'</tbody></table></div></section></div>';
  document.body.appendChild(dialog);dialog.addEventListener('close',()=>dialog.remove(),{once:true});dialog.showModal();
 const report=dialog.querySelector('.acc-expense-report');
 const printable=()=>{const w=window.open('','_blank');if(!w)return;w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>'+esc(t('Desglose de gastos propios'))+'</title><style>body{font:14px Arial,sans-serif;padding:28px;color:#182333}h1{font-size:22px}table{width:100%;border-collapse:collapse;margin-top:18px}td,th{padding:9px;border-bottom:1px solid #ddd;text-align:left}.money{text-align:right}.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.card{border:1px solid #ddd;padding:12px;border-radius:8px}strong{font-size:16px}</style></head><body><h1>'+esc(t('Desglose de gastos propios'))+' · '+esc(printerName)+'</h1><h2>'+esc(t('Total de gastos propios'))+': '+money(exportData.total)+'</h2>'+report.querySelector('.acc-report-section').outerHTML+report.querySelectorAll('.acc-report-section')[1].outerHTML+'</body></html>');w.document.close();w.focus();return w;};
 dialog.querySelector('[data-expense-print]').addEventListener('click',()=>{const w=printable();if(w)w.print();});
 dialog.querySelector('[data-expense-pdf]').addEventListener('click',()=>{const w=printable();if(w){w.document.title='gastos-propios-'+printerName.replace(/[^a-z0-9_-]+/gi,'_');w.focus();w.print();}});
 dialog.querySelector('[data-expense-close]').addEventListener('click',()=>dialog.close());
}

function renderAdvancedProfitability(){
 const panel=$('advancedProfitabilityPanel');if(!panel)return;
 const data=rows(),period=$('profitPeriodFilter')?.value||'month',printer=$('profitPrinterFilter')?.value||'all',now=new Date();
 const start=new Date(now.getFullYear(),now.getMonth(),1);if(period==='quarter')start.setMonth(start.getMonth()-2);if(period==='year')start.setMonth(0);
 const dateOf=x=>{const d=new Date(x.date||0);return Number.isFinite(d.getTime())?d:null};
 const printerOK=x=>printer==='all'||accountingPrinter(x)===printer;
 const filtered=data.filter(x=>{const d=dateOf(x);return d&&(period==='all'||d>=start)&&printerOK(x)});
 let revenue=0,costs=0,profit=0,collected=0;const byPrinter={},byCost={filament:0,electricity:0,wear:0,maintenance:0,labor:0,failure:0,other:0};
 filtered.forEach(x=>{
  const isPersonal=x.kind==='personal'||x.kind==='personalExpense';const cost=(x.source==='manual'&&x.kind==='income')?0:Math.max(0,Number(x.amount)||0);let sale=0,p=0;
  if(x.source==='manual'){if(x.kind==='personalExpense')costs+=cost;else if(x.kind==='orderExpense'){costs+=cost;sale=Math.max(0,Number(x.customerCharge)||0);p=Number(x.profit)||0;}else if(x.kind==='income'){sale=Math.max(0,Number(x.customerCharge??x.saleDetails?.grossRevenue??x.amount)||0);collected+=sale;p=Number(x.profit)||0;}if(x.kind==='orderExpense'&&x.customerCharge!=null)sale=Math.max(0,Number(x.customerCharge)||0);}
  else if(isPersonal)costs+=cost;else{costs+=cost;sale=Math.max(0,Number(x.customerCharge??x.revenue)||0);p=Number(x.profit)||0;}
  if(!isPersonal){revenue+=sale;profit+=p;}
  // Los pedidos confirmados desde el diálogo del monitor U1 ya contienen un importe
  // introducido y aceptado por el usuario. Las versiones anteriores no guardaban
  // collectedRevenue, por eso se recupera desde saleDetails para esos registros.
  if(x.collectedRevenue!=null)collected+=Math.max(0,Number(x.collectedRevenue)||0);
  else if(x.source==='manual'&&x.kind==='orderExpense'&&String(x.jobKey||'').startsWith('u1:')&&x.saleDetails?.grossRevenue!=null)collected+=Math.max(0,Number(x.saleDetails.grossRevenue)||0);
  const name=accountingPrinter(x);if(!byPrinter[name])byPrinter[name]={revenue:0,cost:0,profit:0,count:0};const v=byPrinter[name];v.revenue+=sale;v.cost+=cost;v.profit+=p;v.count++;
  let br=x.breakdown||null;if(!br&&x.source==='tasacion')br=(h()[Number(x.historyIndex)]||{}).costBreakdown||null;
  if(br){byCost.filament+=Number(br.filament)||0;byCost.electricity+=Number(br.electricity)||0;byCost.wear+=Number(br.wear)||0;byCost.maintenance+=Number(br.maintenance)||0;byCost.labor+=Number(br.laborAndExtras??br.labor)||0;byCost.failure+=Number(br.failureReserve??br.failure)||0;byCost.other+=Number(br.other)||0;}
 });
 const money=v=>eur(v),fmt=v=>(Number(v)||0).toLocaleString(window.PCP_LOCALE||'es-ES',{minimumFractionDigits:1,maximumFractionDigits:1}),setText=(id,v)=>{const el=$(id);if(el)el.textContent=v};
 setText('profitRevenue',money(revenue));setText('profitCosts',money(costs));setText('profitNet',money(profit));setText('profitMargin',fmt(revenue>0?profit/revenue*100:0)+' %');setText('profitCollected',money(collected));
 const printerSelect=$('profitPrinterFilter');if(printerSelect){const previous=printerSelect.value;const names=[...new Set([...discoveredPrinters(),...data.map(x=>accountingPrinter(x))])].sort((a,b)=>a.localeCompare(b,window.PCP_LOCALE||'es-ES'));printerSelect.innerHTML='<option value="all">'+esc(accT('Todas las impresoras'))+'</option>'+names.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('');printerSelect.value=names.includes(previous)?previous:'all';}
 const entries=Object.entries(byPrinter).sort((a,b)=>b[1].profit-a[1].profit),costLabels=[['filament','Filamento'],['electricity','Electricidad'],['wear','Desgaste de impresora'],['maintenance','Mantenimiento'],['labor','Mano de obra y extras'],['failure','Reserva por fallos'],['other','Otros costes / sin desglose']];
 const known=costLabels.reduce((a,[k])=>a+byCost[k],0);byCost.other+=Math.max(0,costs-known);
 const totalCostParts=costLabels.reduce((a,[k])=>a+byCost[k],0);
 const pHost=$('profitPrinterBreakdown');if(pHost){pHost.innerHTML=entries.length?'<div class="pcp-profit-table-scroll"><table class="pcp-profit-table"><thead><tr><th>'+esc(accT('Impresora'))+'</th><th>'+esc(accT('Ingresos'))+'</th><th>'+esc(accT('Costes'))+'</th><th>'+esc(accT('Beneficio'))+'</th><th>'+esc(accT('Margen'))+'</th></tr></thead><tbody>'+entries.map(([n,v])=>{const m=v.revenue>0?v.profit/v.revenue*100:0;return '<tr><td><span class="pcp-printer-dot"></span><strong>'+esc(n)+'</strong></td><td>'+money(v.revenue)+'</td><td>'+money(v.cost)+'</td><td class="'+(v.profit>=0?'pcp-positive':'pcp-negative')+'">'+money(v.profit)+'</td><td><div class="pcp-margin-cell"><span>'+fmt(m)+' %</span><i><b style="width:'+Math.max(0,Math.min(100,m))+'%"></b></i></div></td></tr>'}).join('')+'</tbody></table></div>': '<div class="pcp-chart-empty">'+esc(accT('Todavía no hay datos suficientes.'))+'</div>';}
 const cHost=$('profitCostBreakdown');if(cHost){const colors=['#159df0','#20cf79','#f59e0b','#a855f7','#facc15','#ec4899','#38bdf8'];let offset=0;const total=totalCostParts||1;const slices=costLabels.map(([k,l],i)=>{const val=byCost[k],pct=val/total*100,start=offset;offset+=pct;return {label:l,value:val,pct,start,color:colors[i]}}).filter(x=>x.value>0);const stops=slices.map(x=>x.color+' '+x.start.toFixed(2)+'% '+(x.start+x.pct).toFixed(2)+'%').join(', ');cHost.innerHTML='<div class="pcp-donut" style="--pcp-donut:'+ (stops||'#26364b 0 100%') +'"><div><strong>'+money(totalCostParts)+'</strong><span>'+esc(accT('Costes'))+'</span></div></div><div class="pcp-donut-legend">'+(slices.length?slices.map(x=>'<div><i style="--dot:'+x.color+'"></i><span>'+esc(accT(x.label))+'</span><strong>'+money(x.value)+'</strong><small>'+fmt(x.pct)+'%</small></div>').join(''):'<div class="pcp-chart-empty">'+esc(accT('Todavía no hay datos suficientes.'))+'</div>')+'</div>';}
 const gauge=$('profitMarginGauge'),margin=revenue>0?profit/revenue*100:0;if(gauge){const clamped=Math.max(0,Math.min(100,margin)),circ=251.2,dash=circ*clamped/100;gauge.innerHTML='<div class="pcp-gauge"><svg viewBox="0 0 220 135" role="img" aria-label="'+esc(accT('Margen sobre ventas'))+'"><path d="M 25 112 A 85 85 0 0 1 195 112" pathLength="100" class="pcp-gauge-track"/><path d="M 25 112 A 85 85 0 0 1 195 112" pathLength="100" class="pcp-gauge-value" style="stroke-dasharray:'+clamped+' 100"/></svg><strong>'+fmt(margin)+' %</strong><span>'+esc(accT('Margen de beneficio'))+'</span></div>';}
 const status=$('profitMarginStatus');if(status){const profitable=margin>=50,positive=margin>0;status.className='pcp-profit-status '+(profitable?'is-good':positive?'is-mid':'is-low');status.innerHTML='<b>'+(profitable?'↗ '+esc(accT('Muy rentable')):positive?'◉ '+esc(accT('Rentabilidad moderada')):'ⓘ '+esc(accT('Margen por mejorar')) )+'</b><span>'+esc(accT(profitable?'El margen supera el 50 %.':positive?'El margen es positivo, pero puede mejorar.':'Todavía no hay margen positivo registrado.'))+'</span>';}
 // Six-month trend, independent of the selected period but respecting the printer filter.
 const buckets=[];for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);buckets.push({date:d,key:d.getFullYear()+'-'+d.getMonth(),revenue:0,cost:0,profit:0});}
 data.filter(printerOK).forEach(x=>{const d=dateOf(x);if(!d)return;const b=buckets.find(z=>z.key===d.getFullYear()+'-'+d.getMonth());if(!b)return;const personal=x.kind==='personal'||x.kind==='personalExpense';const cost=(x.source==='manual'&&x.kind==='income')?0:Math.max(0,Number(x.amount)||0);let sale=0,p=0;if(x.source==='manual'){if(x.kind==='orderExpense'){sale=Math.max(0,Number(x.customerCharge)||0);p=Number(x.profit)||0;}else if(x.kind==='income'){sale=Math.max(0,Number(x.customerCharge??x.saleDetails?.grossRevenue??x.amount)||0);p=Number(x.profit)||0;}}else if(!personal){sale=Math.max(0,Number(x.customerCharge??x.revenue)||0);p=Number(x.profit)||0;}if(!personal){b.revenue+=sale;b.profit+=p;}b.cost+=cost;});
 const trend=$('profitTrendChart');if(trend){const max=Math.max(1,...buckets.flatMap(b=>[b.revenue,b.cost,Math.max(0,b.profit)]))*1.15,W=620,H=220,L=42,R=12,T=16,B=30,x=i=>L+i*(W-L-R)/5,y=v=>T+(H-T-B)*(1-v/max),path=k=>buckets.map((b,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(Math.max(0,b[k])).toFixed(1)).join(' '),grid=[0,.25,.5,.75,1].map(t=>{const yy=T+(H-T-B)*t;return '<line x1="'+L+'" y1="'+yy+'" x2="'+(W-R)+'" y2="'+yy+'"/><text x="'+(L-8)+'" y="'+(yy+4)+'" text-anchor="end">'+(max*(1-t)).toFixed(0)+'</text>'}).join('');trend.innerHTML='<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none" aria-label="'+esc(accT('Evolución de ingresos, costes y beneficio'))+'"><g class="pcp-chart-grid">'+grid+'</g><path class="pcp-area-revenue" d="'+path('revenue')+' L '+x(5)+' '+(H-B)+' L '+x(0)+' '+(H-B)+' Z"/><path class="pcp-line pcp-line-revenue" d="'+path('revenue')+'"/><path class="pcp-line pcp-line-cost" d="'+path('cost')+'"/><path class="pcp-line pcp-line-profit" d="'+path('profit')+'"/>'+buckets.map((b,i)=>'<text class="pcp-chart-month" x="'+x(i)+'" y="'+(H-7)+'" text-anchor="middle">'+esc(b.date.toLocaleDateString(window.PCP_LOCALE||'es-ES',{month:'short'}))+'</text>').join('')+['revenue','cost','profit'].map(k=>buckets.map((b,i)=>'<circle class="pcp-point pcp-point-'+k+'" cx="'+x(i)+'" cy="'+y(Math.max(0,b[k]))+'" r="3.5"/>').join('')).join('')+'</svg>';}
 const share=$('profitPrinterShare');if(share){const sum=entries.reduce((a,[,v])=>a+v.revenue,0);share.innerHTML=entries.length?'<div class="pcp-share-layout"><div class="pcp-share-donut" style="--share:'+entries.map(([,v],i)=>{const cols=['#159df0','#20cf79','#f59e0b','#a855f7','#ec4899'];return cols[i%cols.length]+' '+(v.revenue/sum*100).toFixed(2)+'%' }).join(', ')+'"><div><strong>'+money(sum)+'</strong><span>'+esc(accT('Ingresos'))+'</span></div></div><div class="pcp-share-legend">'+entries.map(([n,v],i)=>'<div><i style="--dot:'+['#159df0','#20cf79','#f59e0b','#a855f7','#ec4899'][i%5]+'"></i><span>'+esc(n)+'</span><b>'+fmt(sum>0?v.revenue/sum*100:0)+'%</b></div>').join('')+'</div></div>':'<div class="pcp-chart-empty">'+esc(accT('Todavía no hay datos suficientes.'))+'</div>';}
 const bars=$('profitCategoryBars');if(bars){const maxBar=Math.max(1,...costLabels.map(([k])=>byCost[k]));bars.innerHTML='<div class="pcp-bars">'+costLabels.map(([k,l],i)=>'<div class="pcp-bar-row"><span>'+esc(accT(l))+'</span><div><i style="width:'+Math.max(0,byCost[k]/maxBar*100)+'%;--bar:'+['#159df0','#20cf79','#f59e0b','#a855f7','#facc15','#ec4899','#38bdf8'][i]+'"></i></div><strong>'+money(byCost[k])+'</strong></div>').join('')+'</div>';}
 const insight=$('profitInsights');if(insight){const top=entries[0],topCost=costLabels.map(([k,l])=>({label:l,value:byCost[k]})).sort((a,b)=>b.value-a.value)[0],periodLabel=now.toLocaleDateString(window.PCP_LOCALE||'es-ES',{month:'long',year:'numeric'});insight.innerHTML='<article class="pcp-insight-main"><span>✦</span><div><h3>'+esc(accT('Conclusiones del periodo'))+'</h3><p>'+esc(accT('Beneficio estimado'))+': <strong>'+money(profit)+'</strong> · '+esc(accT('Margen'))+': <strong>'+fmt(margin)+'%</strong>. '+(top?esc(accT('Impresora más rentable'))+': <strong>'+esc(top[0])+'</strong>. ':'')+(topCost&&topCost.value?esc(accT('Coste principal'))+': <strong>'+esc(accT(topCost.label))+'</strong>.':'')+'</p></div></article><article><span>🏆</span><small>'+esc(accT('Impresora más rentable'))+'</small><strong>'+esc(top?top[0]:'—')+'</strong></article><article><span>▱</span><small>'+esc(accT('Coste principal'))+'</small><strong>'+esc(topCost&&topCost.value?accT(topCost.label):'—')+'</strong></article><article><span>↗</span><small>'+esc(accT('Mejor margen'))+'</small><strong>'+fmt(top&&top[1].revenue>0?top[1].profit/top[1].revenue*100:0)+' %</strong></article><article><span>▦</span><small>'+esc(accT('Periodo analizado'))+'</small><strong>'+esc(periodLabel)+'</strong></article>';}
}
function bindAdvancedProfitability(){const refresh=$('profitRefreshBtn');if(refresh&&!refresh.dataset.bound){refresh.addEventListener('click',renderAdvancedProfitability);refresh.dataset.bound='1';}['profitPeriodFilter','profitPrinterFilter'].forEach(id=>{const el=$(id);if(el&&!el.dataset.bound){el.addEventListener('change',renderAdvancedProfitability);el.dataset.bound='1';}})}

function render(){
 refreshAccountingPrinterSelect();bindAdvancedProfitability();renderAdvancedProfitability();
 const all=rows();let personal=0,orderCost=0,revenue=0,profit=0;
 all.forEach(x=>{
  if(x.source==='manual'){
   if(x.kind==='personalExpense')personal+=Number(x.amount)||0;
   if(x.kind==='orderExpense')orderCost+=Number(x.amount)||0;
   if(x.kind==='income')revenue+=Number(x.customerCharge??x.saleDetails?.grossRevenue??x.amount)||0;
   if(x.kind==='orderExpense'||x.kind==='income')profit+=Number(x.profit)||0;
   if(x.kind==='orderExpense'&&x.customerCharge!==undefined&&x.customerCharge!==null)revenue+=Number(x.customerCharge)||0;
  }else if(x.kind==='personal')personal+=Number(x.amount)||0;
  else{orderCost+=Number(x.amount)||0;revenue+=Number(x.customerCharge??x.revenue)||0;profit+=Number(x.profit)||0;}
 });
 if($('accPersonalTotal'))$('accPersonalTotal').textContent=eur(personal);if($('accOrderCosts'))$('accOrderCosts').textContent=eur(orderCost);if($('accRevenue'))$('accRevenue').textContent=eur(revenue);if($('accProfit'))$('accProfit').textContent=eur(profit);
 const el=$('accountingRows');if(!el)return;const indexedAll=all.map((x,i)=>({x,i}));const visibleRows=indexedAll.filter(({x})=>!accountingSearchTerm||[x.date,accountingType(x),accountingPrinter(x),accountingConcept(x),accountingReference(x),x.amount,x.customerCharge,x.profit].some(v=>String(v??'').toLocaleLowerCase().includes(accountingSearchTerm)));
 if(!all.length){el.className='empty';el.textContent=accT('Todavía no hay movimientos.');return}if(!visibleRows.length){el.className='empty';el.textContent=accountingSearchTerm?accT('No hay resultados para la búsqueda.'):accT('Todavía no hay movimientos.');return}el.className='';
 el.innerHTML='<div class="accounting-table-wrap"><table class="history accounting-history"><thead><tr><th>'+esc(accT('Fecha'))+'</th><th>'+esc(accT('Tipo'))+'</th><th>'+esc(accT('Impresora'))+'</th><th>'+esc(accT('Concepto'))+'</th><th>'+esc(accT('Referencia'))+'</th><th>'+esc(accT('Importe/coste'))+'</th><th>'+esc(accT('Cobrado'))+'</th><th>'+esc(accT('Beneficio'))+'</th><th>'+esc(accT('Acciones'))+'</th></tr></thead><tbody>'+visibleRows.map(({x,i})=>{const charge=collectedAmount(x);const profitValue=(x.kind==='personalExpense'||x.kind==='personal')?null:x.profit;const reference=accountingReference(x);return '<tr><td class="acc-date">'+new Date(x.date).toLocaleDateString((window.PCP_LOCALE||'es-ES'))+'</td><td><span class="acc-type-pill">'+esc(accountingType(x))+'</span></td><td class="acc-printer-name">'+esc(accountingPrinter(x))+'</td><td class="acc-concept">'+esc(accountingConcept(x))+'</td><td class="acc-reference-cell"><details class="acc-reference-details" data-acc-detail-index="'+i+'"><summary>'+esc(accT('Ver detalle'))+'</summary><div>'+esc(reference)+'</div></details></td><td class="acc-money">'+eur(x.amount,x.currency)+'</td><td class="acc-money">'+(charge===undefined||charge===null?'—':eur(charge,x.currency))+'</td><td class="acc-money acc-profit-value">'+(profitValue===undefined||profitValue===null?'—':eur(profitValue,x.currency))+'</td><td class="acc-actions"><button class="btn" data-acc-edit="'+i+'">'+esc(accT('Editar'))+'</button><button class="btn history-delete" data-acc-delete="'+i+'">'+esc(accT('Eliminar'))+'</button></td></tr>'}).join('')+'</tbody></table></div>';
 const savedOpenDetail=sessionStorage.getItem('pcp_accounting_detail_open');
 el.querySelectorAll('.acc-reference-details').forEach(detail=>{
  detail.addEventListener('toggle',()=>{
   if(detail.open)sessionStorage.setItem('pcp_accounting_detail_open',detail.dataset.accDetailIndex);
   else if(sessionStorage.getItem('pcp_accounting_detail_open')===detail.dataset.accDetailIndex)sessionStorage.removeItem('pcp_accounting_detail_open');
  });
  if(savedOpenDetail!==null&&detail.dataset.accDetailIndex===savedOpenDetail)detail.open=true;
 });
 el.querySelectorAll('[data-acc-edit]').forEach(b=>b.addEventListener('click',()=>openAccountingEditor(all[Number(b.dataset.accEdit)],Number(b.dataset.accEdit))));
 el.querySelectorAll('[data-acc-delete]').forEach(b=>b.addEventListener('click',async()=>{const x=all[Number(b.dataset.accDelete)];if(!x)return;const message=window.PCP_I18N?.format('¿Eliminar el movimiento «{name}» de la contabilidad?',{name:accountingConcept(x)})||'¿Eliminar el movimiento «'+accountingConcept(x)+'» de la contabilidad?';if(!(await (window.PCPConfirm?window.PCPConfirm(message):Promise.resolve(confirm(message)))))return;let refundedMove=null;if(x.source==='manual'){const a=get();const target=a.find(m=>m.id===x.id);if(target?.filamentInventoryApplied){refundedMove=target;refundFilamentForExpense(target);if(typeof window.PCPRefreshSpools==='function')window.PCPRefreshSpools();}for(let j=a.length-1;j>=0;j--)if(a[j].id===x.id||(x.jobKey&&a[j].jobKey===x.jobKey+'|commission'))a.splice(j,1);set(a)}else{const history=h();history.splice(Number(x.historyIndex),1);localStorage.setItem('pcp_history',JSON.stringify(history));renderHistory()}render();if(refundedMove)filamentRefundMessage(refundedMove)}));
 const accSort=$('accountingSort');if(accSort){if(accountingSortColumn)accSort.value=accountingSortColumn;const sortAccounting=()=>{accountingSortColumn=accSort.value;localStorage.setItem('pcp_accounting_sort',accountingSortColumn);const tbody=el.querySelector('.accounting-history tbody');if(!tbody)return;const rows=Array.from(tbody.rows);if(accountingSortColumn!==''){const col=Number(accountingSortColumn);rows.sort((a,b)=>{const av=(a.cells[col]?.textContent||'').trim(),bv=(b.cells[col]?.textContent||'').trim();const an=Number(av.replace(/[^0-9,.-]/g,'').replace(',','.')),bn=Number(bv.replace(/[^0-9,.-]/g,'').replace(',','.'));return Number.isFinite(an)&&Number.isFinite(bn)&&av!==''&&bv!==''?an-bn:av.localeCompare(bv,'es',{numeric:true,sensitivity:'base'})});}rows.forEach(r=>tbody.appendChild(r));accountingPages.accounting=1;attachTablePagination(el,'.accounting-history','accounting',10)};if(!accSort.dataset.bound){accSort.addEventListener('change',sortAccounting);accSort.dataset.bound='1'}if(accountingSortColumn)sortAccounting();}attachTablePagination(el,'.accounting-history','accounting',10);
}

const importSource=$('accImportSource'),importWrap=$('accImportDocumentWrap'),importDoc=$('accImportDocument');
const importCache={quote:[],estimate:[]};
function fillImportDocuments(){
 if(!importSource||!importWrap||!importDoc)return;
 const source=importSource.value;importSource.options[0].textContent=accT('Movimiento manual');importSource.options[1].textContent=accT('Presupuesto guardado');importSource.options[2].textContent=accT('Tasación guardada');importWrap.hidden=source==='manual';if(source==='manual'){importDoc.innerHTML='<option value="">'+esc(accT('Seleccionar presupuesto o tasación'))+'</option>';return;}
 const list=source==='quote'?(JSON.parse(localStorage.getItem('pcp_saved_quotes')||'[]')):h();
 importCache[source]=Array.isArray(list)?list:[];
 importDoc.innerHTML='<option value="">'+esc(accT('Seleccionar presupuesto o tasación'))+'</option>';
 importCache[source].forEach((d,i)=>{const o=document.createElement('option');o.value=String(i);const label=source==='quote'?(d.quoteNumber||'Presupuesto')+' · '+(d.product||d.client?.name||'')+' · '+eur(d.total??d.sale??0,d.currency||'EUR'):new Date(d.date||Date.now()).toLocaleDateString()+' · '+(d.name||d.file||'Tasación')+' · '+eur(d.cost??d.costBreakdown?.total??0,d.currency||'EUR');o.textContent=label;importDoc.appendChild(o);});
}
function loadImportedDocument(){
 if(!importSource||!importDoc||importSource.value==='manual'||importDoc.value==='')return;
 const source=importSource.value,d=importCache[source]?.[Number(importDoc.value)];if(!d)return;
 const cost=Number(source==='quote'?(d.costBreakdown?.total??((d.cost??0)*(d.qty||1))):(d.costBreakdown?.total??d.cost??0));
 const sale=Number(source==='quote'?(d.total??d.sale??0):(d.grossSale??d.sale??0));
 const profit=Number(source==='quote'?((d.profit??(sale-(d.cost??0)))*(d.qty||1)):(d.totalProfit??d.profit??sale-cost));
 $('accConcept').value=(source==='quote'?(d.quoteNumber||'Presupuesto')+' · '+(d.product||d.client?.name||''):(d.name||d.file||'Tasación'));
 $('accAmount').value=(source==='quote'?sale:cost).toFixed(2);
 if($('accDate')&&d.date)$('accDate').value=String(d.date).slice(0,10);
 if($('accNotes'))$('accNotes').value=accT('Documento importado')+': '+(source==='quote'?(d.quoteNumber||d.id):(d.name||d.id))+'; coste='+cost.toFixed(2)+'; venta='+sale.toFixed(2)+'; beneficio='+profit.toFixed(2);
 const kind=$('accKind');if(kind)kind.value='personalExpense';
 importDoc.dataset.cost=String(cost);importDoc.dataset.sale=String(sale);importDoc.dataset.profit=String(profit);importDoc.dataset.source=source;importDoc.dataset.docId=String(d.id||'');
}
if(importSource){importSource.addEventListener('change',fillImportDocuments);importDoc?.addEventListener('change',loadImportedDocument);fillImportDocuments();}

const add=$('accAddBtn');if(add)add.addEventListener('click',()=>{const concept=$('accConcept').value.trim(),amount=Number($('accAmount').value)||0,printer=$('accPrinter')?.value||'';if(!printer){alert(accT('Selecciona impresora'));return}if(!concept){alert(accT('Escribe un concepto para el movimiento.'));return}if(amount<0){alert(accT('El importe no puede ser negativo.'));return}const source=importSource?.value||'manual',kind=$('accKind').value,imported=source!=='manual'&&importDoc?.value!=='';
if(source!=='manual'&&!imported){alert(accT('Elige un documento guardado.'));return}
const cost=imported?Number(importDoc.dataset.cost)||0:0,sale=imported?Number(importDoc.dataset.sale)||0:0,profit=imported?Number(importDoc.dataset.profit)||0:0;
const move={id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),date:$('accDate').value||new Date().toISOString().slice(0,10),kind,printerName:printer,concept,amount,notes:$('accNotes').value.trim()};
if(imported){move.sourceDocument=source;move.sourceDocumentId=importDoc.dataset.docId||'';move.cost=cost;move.customerCharge=sale;move.profit=profit;move.importedDocument=true;if(kind==='income'){move.amount=sale;move.customerCharge=sale;move.profit=profit;move.cost=cost;}else if(kind==='orderExpense'){move.amount=cost;move.customerCharge=sale;move.profit=profit;move.cost=cost;}else{move.amount=cost;move.breakdown=source==='estimate'?(importCache.estimate[Number(importDoc.value)]?.costBreakdown||null):(importCache.quote[Number(importDoc.value)]?.costBreakdown||null);}}
if(imported&&(kind==='personalExpense'||kind==='personal')){
 const sourceRecord=source==='estimate'?importCache.estimate[Number(importDoc.value)]:importCache.quote[Number(importDoc.value)];
 const breakdown=sourceRecord?.costBreakdown||null;
 if(!breakdown?.filaments?.length){alert(accT('Este documento no contiene el desglose de filamentos necesario para descontar el inventario. Vuelve a guardar la tasación o presupuesto con una versión que guarde ese detalle.'));return}
 const allocation=allocateFilamentForExpense(breakdown);
 if(!allocation.ok){
 const rows=allocation.message.split('\n').slice(1).map(line=>({name:line,detail:'',amount:''}));
 showFilamentNotice(accT('No se pudo guardar el gasto'),allocation.message.split('\n')[0],rows,'error');return
}
 move.filamentDeductions=allocation.deductions;
 move.breakdown=breakdown;
 move.filamentInventoryApplied=true;
}
const a=get();a.unshift(move);set(a);
if(move.filamentInventoryApplied&&typeof window.PCPRefreshSpools==='function')window.PCPRefreshSpools();
$('accConcept').value='';$('accAmount').value='0';$('accNotes').value='';if($('accPrinter'))$('accPrinter').value='';if(importSource){importSource.value='manual';fillImportDocuments()}render();
if(move.filamentInventoryApplied)filamentSaveMessage(move);});
const totals=data=>{let personal=0,orderCost=0,revenue=0,profit=0;data.forEach(x=>{if(x.source==='manual'){if(x.kind==='personalExpense')personal+=Number(x.amount)||0;if(x.kind==='orderExpense')orderCost+=Number(x.amount)||0;if(x.kind==='income')revenue+=Number(x.customerCharge??x.saleDetails?.grossRevenue??x.amount)||0;if(x.kind==='orderExpense'||x.kind==='income')profit+=Number(x.profit)||0;if(x.kind==='orderExpense'&&x.customerCharge!==undefined&&x.customerCharge!==null)revenue+=Number(x.customerCharge)||0;}else if(x.kind==='personal')personal+=Number(x.amount)||0;else{orderCost+=Number(x.amount)||0;revenue+=Number(x.customerCharge??x.revenue)||0;profit+=Number(x.profit)||0;}});return {personal,orderCost,revenue,profit}};
const exp=$('accExportBtn');if(exp)exp.addEventListener('click',()=>{const data=rows();if(!data.length){alert(accT('No hay movimientos para exportar.'));return}const csv=[[accT('Fecha'),accT('Tipo'),accT('Impresora'),accT('Concepto'),accT('Referencia'),accT('Importe/coste'),accT('Importe cobrado'),accT('Moneda'),accT('Beneficio estimado')],...data.map(x=>[x.date,x.kind||x.accountingType||'',accountingPrinter(x),x.concept||x.name||'',x.notes||x.client||'',x.amount||0,collectedAmount(x)??'',x.currency||'EUR',x.profit||0])].map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(';')).join('\r\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));a.download='Print_Cost_Profit_contabilidad.csv';a.click();URL.revokeObjectURL(a.href)});
const expPdf=$('accExportPdfBtn');if(expPdf)expPdf.addEventListener('click',()=>{const data=rows();if(!data.length){alert(accT('No hay movimientos para exportar.'));return}const t=totals(data),kind=x=>x.source==='manual'?(accT(({personalExpense:'Gasto propio',orderExpense:'Gasto de pedido',income:'Ingreso cobrado'}[x.kind])||x.kind)):(accT(x.kind==='personal'?'Impresión personal':'Pedido de venta'));const table=data.map(x=>{const charge=x.kind==='income'?(x.customerCharge??x.saleDetails?.grossRevenue??x.amount):x.customerCharge;const p=(x.kind==='personalExpense'||x.kind==='personal')?null:x.profit;return '<tr><td>'+esc(new Date(x.date).toLocaleDateString((window.PCP_LOCALE||'es-ES')))+'</td><td>'+esc(kind(x))+'</td><td>'+esc(x.concept||x.name||accT('Impresión'))+'</td><td>'+esc(x.notes||x.client||'—')+'</td><td>'+eur(x.amount,x.currency)+'</td><td>'+(charge==null?'—':eur(charge,x.currency))+'</td><td>'+(p==null?'—':eur(p,x.currency))+'</td></tr>'}).join('');const w=window.open('','_blank');if(!w){alert(accT('El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.'));return}w.document.write('<!doctype html><html lang="es" translate="no"><head><meta charset="utf-8"><title>'+window.PCP_I18N.t('Contabilidad · Print Cost & Profit')+'</title><link rel="stylesheet" href="css/app-13.css"></head><body><h1>'+window.PCP_I18N.t('Contabilidad · Print Cost & Profit')+'</h1><div class="date">'+window.PCP_I18N.t('Informe generado el')+' '+new Date().toLocaleString((window.PCP_LOCALE||'es-ES'))+'</div><div class="summary"><div class="card">'+window.PCP_I18N.t('Gastos propios')+'<strong>'+eur(t.personal)+'</strong></div><div class="card">'+window.PCP_I18N.t('Gastos de pedidos')+'<strong>'+eur(t.orderCost)+'</strong></div><div class="card">'+window.PCP_I18N.t('Ventas estimadas')+'<strong>'+eur(t.revenue)+'</strong></div><div class="card">'+window.PCP_I18N.t('Beneficio estimado')+'<strong>'+eur(t.profit)+'</strong></div></div><table><thead><tr><th>'+window.PCP_I18N.t('Fecha')+'</th><th>'+window.PCP_I18N.t('Tipo')+'</th><th>'+window.PCP_I18N.t('Concepto')+'</th><th>'+window.PCP_I18N.t('Referencia')+'</th><th>'+window.PCP_I18N.t('Importe / coste')+'</th><th>'+window.PCP_I18N.t('Importe cobrado')+'</th><th>'+window.PCP_I18N.t('Beneficio estimado')+'</th></tr></thead><tbody>'+table+'</tbody></table><scr'+'ipt>window.onload=()=>setTimeout(()=>window.print(),250)<\/scr'+'ipt></body></html>');w.document.close()});
const date=$('accDate');if(date)date.value=new Date().toISOString().slice(0,10);document.querySelectorAll('[data-tab="accountingView"]').forEach(b=>b.addEventListener('click',render));window.addEventListener('pcp-external-storage-sync',()=>{if(document.getElementById('accountingView')?.classList.contains('active'))render()});document.addEventListener('change',e=>{if(e.target?.id==='pcpLanguage')setTimeout(render,0)});const oldSave=$('saveBtn');if(oldSave)oldSave.addEventListener('click',()=>setTimeout(render,30));const accSearchInput=$('accountingSearch'),accSearchButton=$('accountingSearchBtn'),accSearchClear=$('accountingSearchClear');if(accSearchButton)accSearchButton.addEventListener('click',()=>{accountingSearchTerm=String(accSearchInput?.value||'').trim().toLocaleLowerCase();render()});if(accSearchInput)accSearchInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();accSearchButton?.click()}});if(accSearchClear)accSearchClear.addEventListener('click',()=>{if(accSearchInput)accSearchInput.value='';accountingSearchTerm='';render()});
render();setTimeout(render,0);
})();
