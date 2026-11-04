/* v4.1 · Inicio: panel visual reordenado en zona principal y columna lateral */
(()=>{'use strict';
const $=id=>document.getElementById(id),t=k=>window.PCP_I18N?.t(k)||k;
const read=(key)=>{try{const v=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(v)?v:[]}catch(_){return[]}};
const num=v=>Number(v)||0, money=v=>new Intl.NumberFormat(window.PCP_LOCALE||'es-ES',{style:'currency',currency:'EUR'}).format(num(v));
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function historyData(){return read('pcp_history')}
function accountingData(){return read('pcp_accounting_moves')}
function accountingRows(){
 const manual=accountingData().map(x=>({...x,source:'manual'})),hiddenSales=new Set();
 // Reproduce la misma normalización de Contabilidad: las ventas antiguas
 // asociadas a un gasto principal se integran en ese movimiento y no se duplican.
 manual.filter(x=>x.kind==='income'&&String(x.jobKey||'').endsWith('|sale')).forEach(sale=>{
  const baseKey=String(sale.jobKey).slice(0,-5),expense=manual.find(x=>x.kind==='orderExpense'&&x.jobKey===baseKey);
  if(expense){expense.customerCharge=Number(sale.saleDetails?.grossRevenue??sale.customerCharge??sale.amount)||0;expense.profit=Number(sale.profit)||0;expense.saleDetails=sale.saleDetails||null;expense.collectedRevenue=Number(sale.saleDetails?.grossRevenue??sale.customerCharge??sale.amount)||0;hiddenSales.add(sale.id)}
 });
 const saved=historyData().map((x,i)=>({...x,source:'tasacion',historyIndex:i,kind:x.accountingType==='order'?'order':'personal',concept:x.name||t('Impresión'),amount:(Number(x.cost)||0)*(Number(x.qty)||1),client:x.accountingClient||'',date:x.date||new Date().toISOString(),revenue:x.accountingType==='order'?(Number(x.sale)||0)*(Number(x.qty)||1):0,customerCharge:x.accountingType==='order'?(Number(x.grossSale??x.sale)||0)*(Number(x.qty)||1):null,profit:x.accountingType==='order'?(Number(x.totalProfit)||((Number(x.profit)||0)*(Number(x.qty)||1))):0})).filter(x=>x.accountingIncluded!==false);
 return [...manual.filter(x=>!hiddenSales.has(x.id)),...saved].sort((a,b)=>String(b.date).localeCompare(String(a.date)));
}
function summarize(){
 const rows=accountingRows();let revenue=0,cost=0,profit=0,collected=0;
 rows.forEach(x=>{
  const personal=x.kind==='personal'||x.kind==='personalExpense';
  const amount=(x.source==='manual'&&x.kind==='income')?0:Math.max(0,num(x.amount));
  let sale=0,p=0;
  if(x.source==='manual'){
   if(x.kind==='personalExpense')cost+=amount;
   else if(x.kind==='orderExpense'){cost+=amount;sale=Math.max(0,num(x.customerCharge));p=num(x.profit)}
   else if(x.kind==='income'){sale=Math.max(0,num(x.customerCharge??x.saleDetails?.grossRevenue??x.amount));collected+=sale;p=num(x.profit)}
   if(x.kind==='orderExpense'&&x.customerCharge!=null)sale=Math.max(0,num(x.customerCharge));
  }else if(personal)cost+=amount;
  else{cost+=amount;sale=Math.max(0,num(x.customerCharge??x.revenue));p=num(x.profit)}
  if(!personal){revenue+=sale;profit+=p}
  if(x.collectedRevenue!=null)collected+=Math.max(0,num(x.collectedRevenue));
  else if(x.source==='manual'&&x.kind==='orderExpense'&&String(x.jobKey||'').startsWith('u1:')&&x.saleDetails?.grossRevenue!=null)collected+=Math.max(0,num(x.saleDetails.grossRevenue));
 });
 return{h:historyData(),a:rows,revenue,cost,profit,collected,margin:revenue>0?profit/revenue*100:0};
}
function trend(data){const now=new Date(),b=[];for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);b.push({date:d,revenue:0,cost:0,profit:0})}data.h.forEach(x=>{const d=new Date((x.date||x.createdAt||'').slice?x.date||x.createdAt:Date.now());if(Number.isNaN(d.getTime()))return;const bucket=b.find(v=>v.date.getFullYear()===d.getFullYear()&&v.date.getMonth()===d.getMonth());if(!bucket)return;const q=Math.max(1,num(x.qty)||1),c=num(x.cost)*q,s=num(x.grossSale??x.salePrice??0)*q,p=num(x.totalProfit??x.profit??(s-c));bucket.cost+=c;if(x.accountingType==='order'||s>0){bucket.revenue+=s;bucket.profit+=p}});return b}
function renderTrend(data){const el=$('homeTrendChart');if(!el)return;const W=720,H=210,L=38,R=12,T=12,B=28,max=Math.max(1,...data.flatMap(x=>[x.revenue,x.cost,x.profit]))*1.15,x=i=>L+i*(W-L-R)/5,y=v=>H-B-(v/max)*(H-T-B),path=k=>data.map((v,i)=>(i?'L':'M')+x(i)+' '+y(v[k])).join(' '),grid=[0,.25,.5,.75,1].map(f=>{const yy=H-B-f*(H-T-B);return `<line class="home-gridline" x1="${L}" x2="${W-R}" y1="${yy}" y2="${yy}"/><text class="home-axis-label" x="${L-8}" y="${yy+3}" text-anchor="end">${Math.round(max*f)}</text>`}).join(''),months=data.map((v,i)=>`<text class="home-axis-label" x="${x(i)}" y="${H-7}" text-anchor="middle">${esc(v.date.toLocaleDateString(window.PCP_LOCALE||'es-ES',{month:'short'}))}</text>`).join('');el.innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('Evolución del negocio'))}">${grid}${months}<path class="home-line home-line-revenue" d="${path('revenue')}"/><path class="home-line home-line-cost" d="${path('cost')}"/><path class="home-line home-line-profit" d="${path('profit')}"/></svg>`}
function renderCosts(data){
 const el=$('homeCostBars');if(!el)return;
 const totals={};
 data.h.forEach(x=>{
  const b=x.costBreakdown||x.breakdown||{};
  [['Filamento','filament'],['Electricidad','electricity'],['Desgaste','wear'],['Mantenimiento','maintenance'],['Mano de obra','laborAndExtras'],['Reserva por fallos','failureReserve']].forEach(([label,key])=>totals[label]=(totals[label]||0)+num(b[key]));
 });
 const palette=['#159df0','#20cf79','#f59e0b','#a855f7','#ec4899','#8bd8ff'];
 const items=Object.entries(totals).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]).slice(0,6);
 const total=items.reduce((sum,item)=>sum+item[1],0);
 if(!items.length){el.innerHTML=`<div class="home-empty">${esc(t('Todavía no hay datos suficientes.'))}</div>`;return}
 let cursor=0;
 const stops=items.map(([label,value],i)=>{const from=cursor;cursor+=value/total*100;return `${palette[i]} ${from.toFixed(2)}% ${cursor.toFixed(2)}%`}).join(',');
 const fmtPct=v=>new Intl.NumberFormat(window.PCP_LOCALE||'es-ES',{minimumFractionDigits:1,maximumFractionDigits:1}).format(v/total*100);
 el.innerHTML=`<div class="home-cost-donut-layout"><div class="home-cost-donut" style="background:conic-gradient(${stops})"><div class="home-cost-donut-hole"><strong>${money(total)}</strong><small>${esc(t('Costes totales'))}</small></div></div><div class="home-cost-legend">${items.map(([label,value],i)=>`<div class="home-cost-legend-row"><i style="--cost-color:${palette[i]}"></i><span>${esc(t(label))}</span><strong>${money(value)}</strong><em>${fmtPct(value)} %</em></div>`).join('')}</div></div>`;
}
function renderRecent(data){const el=$('homeRecentJobs');if(!el)return;const items=[...data.h].sort((a,b)=>String(b.date||b.createdAt||'').localeCompare(String(a.date||a.createdAt||''))).slice(0,4);el.innerHTML=items.length?items.map(x=>{const name=x.name||x.pieceName||x.fileName||t('Impresión'),q=Math.max(1,num(x.qty)||1),cost=num(x.cost)*q,sale=num(x.grossSale??x.salePrice??0)*q,profit=num(x.totalProfit??x.profit??(sale-cost)),img=x.image||x.imageData||x.thumbnail||'';return `<div class="home-job-row">${img?`<img class="home-job-thumb" src="${esc(img)}" alt="">`:`<span class="home-job-thumb home-job-placeholder">◇</span>`}<div><div class="home-job-name">${esc(name)}</div><div class="home-job-meta">${esc(x.printerName||x.printer||'—')} · ${esc(x.date||'')}</div></div><span class="home-job-money">${money(cost)}</span><span class="home-job-money home-job-profit">${profit>=0?'+':''}${money(profit)}</span></div>`}).join(''):`<div class="home-empty">${esc(t('Todavía no hay tasaciones guardadas.'))}</div>`}
function renderSpools(){const el=$('homeSpoolList');if(!el)return;const sp=read('pcp_spools'),list=sp.slice(0,4);el.innerHTML=list.length?list.map(x=>{const initial=Math.max(1,num(x.initial)||1000),left=Math.max(0,num(x.remaining)),pct=Math.max(0,Math.min(100,left/initial*100)),name=[x.material,x.colorName||x.color||x.name].filter(Boolean).join(' · ')||t('Bobina');return `<div class="home-spool-row"><span class="home-status-dot ${pct<15?'':'online'}"></span><div class="home-row-main"><strong>${esc(name)}</strong><small>${esc(x.brand||'')}</small><div class="home-spool-meter"><i style="width:${pct}%;background:${pct<15?'#ff5d72':'#20cf79'}"></i></div></div><span class="home-row-value">${left.toFixed(0)} g</span></div>`}).join(''):`<div class="home-empty">${esc(t('No hay bobinas registradas.'))}</div>`}
let homePrinterRequest=false,homePrinterLast=0;
async function renderPrinters(force=false){
 const el=$('homePrinterStatus');if(!el||homePrinterRequest||(!force&&Date.now()-homePrinterLast<30000))return;
 homePrinterRequest=true;homePrinterLast=Date.now();
 const message=msg=>{el.innerHTML=`<div class="home-empty">${esc(msg)}</div>`};
 try{
  const request=async(url,ms=9000)=>{const c=new AbortController(),timer=setTimeout(()=>c.abort(),ms);try{return await fetch(url,{cache:'no-store',signal:c.signal})}finally{clearTimeout(timer)}};
  // La lista persistente contiene todas las impresoras reconocidas anteriormente.
  let saved=[];
  try{
   const sr=await request('/api/storage/snapshot?t='+Date.now(),7000),sd=await sr.json();
   if(sr.ok&&sd.ok){let raw=sd.values?.pcp_u1_discovered_printers;if(typeof raw==='string')raw=JSON.parse(raw||'[]');if(Array.isArray(raw))saved=raw.filter(p=>p&&p.ip)}
  }catch(_){}
  // El escaneo identifica cuáles responden ahora; las guardadas que no aparecen quedan offline.
  let found=[],scanOk=false,scanMessage='';
  try{
   const r=await request('/api/u1/discover?t='+Date.now(),12000),d=await r.json();
   if(r.ok&&d.ok){found=Array.isArray(d.printers)?d.printers:[];scanOk=true}
   else scanMessage=d.error||('HTTP '+r.status);
  }catch(e){scanMessage=e.name==='AbortError'?t('Tiempo de espera agotado'):e.message}
  const configured=(()=>{try{return localStorage.getItem('pcp_u1_manual_ip_v180')||localStorage.getItem('pcp_u1_manual_ip_v178')||localStorage.getItem('pcp_u1_manual_ip')||''}catch(_){return ''}})();
  // Los nombres personalizados se guardan como alias asociados a la IP.
  // El panel de inicio debe resolverlos igual que el resto de la aplicación.
  let aliases={};
  try{aliases=JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}');if(!aliases||typeof aliases!=='object'||Array.isArray(aliases))aliases={}}catch(_){aliases={}}
  const map=new Map();
  saved.forEach(p=>map.set(p.ip,{...p}));
  found.forEach(p=>{const prev=map.get(p.ip)||{};map.set(p.ip,{...prev,...p,online:p.online!==false&&String(p.state||'').toLowerCase()!=='offline'})});
  if(configured&&!map.has(configured))map.set(configured,{ip:configured,hostname:t('Impresora configurada'),online:false,state:'offline'});
  const printers=[...map.values()].sort((a,b)=>(a.ip===configured?-1:b.ip===configured?1:0)||String(a.hostname||a.ip).localeCompare(String(b.hostname||b.ip)));
  if(!printers.length){message(scanOk?t('No se han reconocido impresoras en la red.'):t('No se pudo consultar el estado de las impresoras.')+(scanMessage?' · '+scanMessage:''));return}
  el.innerHTML=printers.map(p=>{
   const online=scanOk?(found.some(f=>f.ip===p.ip)&&p.online!==false):p.online===true;
   const alias=String(aliases[p.ip]||aliases[p.hostname]||aliases[p.address]||p.alias||p.customName||p.displayName||'').trim();
   const label=alias||p.hostname||p.printerName||p.machineName||p.name||t('Impresora');
   const state=online?t('Conectada'):scanOk?t('Offline'):t('Sin verificar');
   return `<div class="home-printer-live home-printer-device">
    <div class="home-printer-top"><span class="home-status-dot ${online?'online':'offline'}"></span><strong>${esc(label)}</strong><span class="home-printer-state ${online?'is-online':'is-offline'}">${esc(state)}</span></div>
    <div class="home-printer-file">${esc(p.ip)}${p.softwareVersion?' · '+esc(p.softwareVersion):''}</div>
   </div>`;
  }).join('');
  if(!scanOk&&scanMessage)el.insertAdjacentHTML('beforeend',`<div class="home-printer-meta">${esc(t('No se pudo actualizar el estado'))}</div>`);
 }catch(error){message(t('No se pudo consultar el estado de las impresoras')+' · '+(error.message||''))}
 finally{homePrinterRequest=false}
}
function renderAlerts(){const el=$('homeAlertsList'),count=$('homeAlertCount');if(!el)return;const low=read('pcp_spools').filter(x=>num(x.remaining)<Math.max(50,num(x.initial)*.15));const alerts=low.map(x=>({text:`${x.material||'Filamento'} · ${x.colorName||x.color||x.name||''}: ${num(x.remaining).toFixed(0)} g`,critical:true}));let row=el.querySelector('.spool-home-alerts');if(!row){row=document.createElement('div');row.className='spool-home-alerts';el.prepend(row)}row.innerHTML=alerts.slice(0,4).map(a=>`<div class="home-alert-row ${a.critical?'critical':''}">${esc(a.text)}</div>`).join('');const maintenanceCount=el.querySelectorAll('.maintenance-home-alerts .maintenance-alert-line').length;const total=alerts.length+maintenanceCount;let empty=el.querySelector('.home-alerts-empty');if(total===0){if(!empty){empty=document.createElement('div');empty.className='home-empty home-alerts-empty';el.appendChild(empty)}empty.textContent=t('No hay alertas pendientes.')}else if(empty)empty.remove();if(count)count.textContent=String(total)}
function render(){const d=summarize();[['homeRevenue',money(d.revenue)],['homeCosts',money(d.cost)],['homeProfit',money(d.profit)],['homeMargin',d.margin.toLocaleString(window.PCP_LOCALE||'es-ES',{maximumFractionDigits:1})+' %'],['homeCollected',money(d.collected)],['homeMarginGauge',d.margin.toLocaleString(window.PCP_LOCALE||'es-ES',{maximumFractionDigits:1})+' %']].forEach(([id,v])=>{const e=$(id);if(e)e.textContent=v});const gauge=$('homeMarginGauge')?.closest('.home-margin-gauge');if(gauge)gauge.style.setProperty('--margin-angle',(Math.max(0,Math.min(100,d.margin))*1.8)+'deg');const status=$('homeMarginStatus');if(status){const good=d.revenue>0&&d.margin>=50;status.classList.toggle('is-good',good);status.classList.toggle('is-warning',d.revenue>0&&!good);const strong=status.querySelector('strong'),span=status.querySelector('span');if(strong)strong.textContent=t(d.revenue?(good?'Muy rentable':'Margen mejorable'):'Rentabilidad pendiente');if(span)span.textContent=t(d.revenue?(good?'El margen supera el 50 %.':'Revisa los precios y costes.'):'Registra ventas y costes para consultar tu margen.')}renderTrend(trend(d));renderCosts(d);renderRecent(d);renderSpools();renderPrinters();renderAlerts()}
function goTab(id){document.querySelector(`[data-tab="${id}"]`)?.click();window.scrollTo({top:0,behavior:'smooth'})}
function bind(){document.querySelectorAll('[data-home-action="calculator"]').forEach(b=>b.addEventListener('click',()=>{goTab('calculatorView');const target=$('pieceName');target?.focus({preventScroll:true})}));document.querySelectorAll('[data-home-action="gcode"]').forEach(b=>b.addEventListener('click',()=>{goTab('calculatorView');$('gcodeFile')?.click()}));document.querySelectorAll('[data-home-tab]').forEach(b=>b.addEventListener('click',()=>goTab(b.dataset.homeTab)));document.querySelectorAll('[data-home-monitor]').forEach(b=>b.addEventListener('click',()=>{goTab('programOptionsView');setTimeout(()=>{const panel=$('pcpPrinterSettingsPanel'),search=$('pcpDiscoverU1');panel?.scrollIntoView({behavior:'smooth',block:'center'});search?.focus({preventScroll:true});if(search){search.classList.add('pcp-home-find-printers-focus');setTimeout(()=>search.classList.remove('pcp-home-find-printers-focus'),2200);}},280);}));document.querySelectorAll('[data-home-tab="quotesView"]').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>$('quoteClient')?.focus(),250)));document.querySelectorAll('[data-home-tab="invoicesView"]').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>$('invoiceClient')?.focus(),250)));}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{bind();render()},{once:true});else{bind();render()}window.addEventListener('storage',render);window.addEventListener('pcp-external-storage-sync',render);document.addEventListener('change',e=>{if(e.target?.id==='pcpLanguage')setTimeout(render,0)});document.querySelectorAll('[data-tab="homeView"]').forEach(b=>b.addEventListener('click',()=>setTimeout(render,0)));window.PCPRefreshHomeDashboard=render;setInterval(render,15000);
})();
