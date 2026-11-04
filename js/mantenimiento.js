(()=>{'use strict';
const $=id=>document.getElementById(id),t=k=>window.PCP_I18N?.t(k)||k;
const KEY='pcp_maintenance_v550';
const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return {}}};
const write=d=>localStorage.setItem(KEY,JSON.stringify(d));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dateNow=()=>new Date().toISOString().slice(0,10);
const hoursFmt=n=>Number(n||0).toLocaleString(window.PCP_LOCALE||'es-ES',{maximumFractionDigits:1});
const sourceLinks={
 'Snapmaker U1':'https://wiki.snapmaker.com/en/snapmaker_u1/troubleshooting/Core_Components_Maintenance_Guide.md',
 'Snapmaker J1':'https://wiki.snapmaker.com/en/snapmaker_j1/manual/Lubricating_the_Axes',
 'Snapmaker Artisan':'https://wiki.snapmaker.com/snapmaker_artisan/maintenance/clean_the_extruder_gears',
 'Anycubic Kobra 2 Pro':'https://wiki.anycubic.com/kobra-2/user/Anycubic%20Kobra%202%20Pro%20User%20Manual-EN-V1.3.pdf',
 'Anycubic Kobra 3':'https://wiki.anycubic.com/k3/anycubic_kobra_3_user_manual-en-v1.3.pdf',
 'ELEGOO Neptune 4 Pro':'https://wiki.elegoo.com/machines/neptune/maintenance/neptune-4-series/lead-screw-routine-maintenance',
 'Anycubic Kobra S1 Max':'https://wiki.anycubic.com/M02010206-Kobra%20S1%20Max%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C-EN-260106.pdf',
 'Creality K2 Pro':'https://wiki.creality.com/en/k2-flagship-series/k2-pro',
 'Prusa MK4S':'https://help.prusa3d.com/es/article/mantenimiento-regular-de-la-impresora-mk4-s-mk3-9-s_419000',
 'Flashforge Adventurer 5M Pro':'https://en.fss.flashforge.com/10000/software/591658f80f34f9653eaf43caccaedb14.pdf',
 'Anycubic Kobra 3':'https://wiki.anycubic.com/k3/anycubic_kobra_3_user_manual-en-v1.3.pdf'
};
const schedules={
 u1:[
 ['Limpieza y lubricación de ejes lineales','motion',0,30,'Limpiar los ejes y rodamientos lineales con paño sin pelusa e IPA; aplicar una película fina de grasa blanca de litio NLGI 2–3 o aceite de husillo adecuado. Retirar el exceso.'],
 ['Limpieza de varillas de carbono X','motion',0,30,'Limpiar con paño sin pelusa ligeramente humedecido con IPA/etanol. No aplicar aceite ni grasa a las varillas de carbono.'],
 ['Revisión y limpieza de correas XY','motion',0,30,'Comprobar tensión y desgaste; retirar polvo con paño seco. No contaminar con lubricante.'],
 ['Limpieza y engrase de husillos Z','motion',0,90,'Limpiar roscas con cepillo suave y aplicar una capa fina de grasa blanca de litio. Mover Z para repartir y retirar el exceso.'],
 ['Limpieza y lubricación de pasadores y bolas','motion',0,90,'Limpiar con paño sin pelusa e IPA/etanol y aplicar una cantidad moderada de grasa compatible en los puntos indicados por Snapmaker.'],
 ['Limpieza de contactos pogo pin','electrical',0,150,'Con la máquina apagada, limpiar suavemente en una dirección con paño sin pelusa apenas humedecido con alcohol. Dejar secar.'],
 ['Revisión de extrusor, hotend y ventiladores','extruder',0,30,'Retirar restos visibles de filamento, comprobar el engranaje impulsor, la boquilla y que los ventiladores giren sin obstrucciones. Consultar la guía de desmontaje antes de abrir componentes.']
 ],
 j1:[
 ['Lubricación de ejes X/Y/Z','motion',0,90,'Lubricar guías lineales X/Y y husillo Z con las grasas especificadas por Snapmaker. Adelantar si hay ruido, bloqueo o grasa ennegrecida.'],
 ['Limpieza de engranajes del extrusor','extruder',0,14,'Descargar filamento, apagar la máquina y limpiar las virutas de filamento de los engranajes con un cepillo suave.']
 ],
 artisan:[
 ['Limpieza de engranajes del extrusor','extruder',0,14,'Descargar filamento, apagar la máquina, abrir la cubierta del módulo y retirar residuos de filamento de los engranajes con un cepillo.'],
 ['Revisión de módulos y ventiladores','fans',0,30,'Comprobar polvo, residuos y funcionamiento de ventiladores y módulos. Seguir la guía específica del módulo instalado.']
 ],
 kobra2:[
 ['Lubricación de husillos dobles X/Y','motion',0,30,'Limpiar los husillos metálicos dobles X/Y y aplicar una capa fina de grasa. Mover los ejes para distribuirla.'],
 ['Limpieza y lubricación de husillos Z','motion',0,90,'Limpiar los husillos Z y aplicar una capa fina de grasa. Mover Z varias veces y retirar exceso.']
 ],
 neptune:[
 ['Limpieza y lubricación del husillo Z','motion',0,60,'Desconectar la alimentación. Limpiar el husillo con paño sin polvo y aplicar una capa fina de grasa blanca de litio.'],
 ['Inspección de movimiento y extrusor','extruder',0,30,'Revisar movimiento suave, restos de filamento, boquilla y ventiladores. Consultar el centro de soporte del modelo.']
 ],
 k2:[
 ['Comprobar hotend tras cambio de filamento','extruder',0,0,'Tras cada cambio, comprobar que la alimentación/extrusión sea normal. Si no lo es, revisar posible obstrucción.'],
 ['Lubricación del mecanismo XYZ y husillos','motion',300,0,'Aplicar una pequeña cantidad de grasa en los puntos indicados por el manual y mover los ejes para distribuirla. Evitar exceso y correas.'],
 ['Sustitución del cartucho de filtro','fans',300,0,'Sustituir el cartucho del filtro de aire según el procedimiento del fabricante.'],
 ['Autocomprobación y optimización de vibraciones','general',300,0,'Ejecutar la optimización de vibraciones y la nivelación automática desde la interfaz de la impresora.']
 ],
 bambu:[
 ['Inspección de ventiladores y conductos','fans',0,30,'Revisar acumulación de polvo o filamento en ventiladores y conductos; limpiar con la máquina apagada.'],
 ['Revisión de husillos Z y guías','motion',0,90,'Limpiar y lubricar según el tipo de guía del modelo. No aplicar grasa a varillas de carbono X de X1/P1.'],
 ['Revisión de extrusor y cortador','extruder',0,30,'Retirar restos de filamento y revisar engranajes, cortador y tubo PTFE según desgaste. No lubricar engranajes salvo indicación del manual.'],
 ['Inspección de correas y conectores','electrical',0,90,'Comprobar desgaste, tensión y conectores visibles. Ajustar correas solo siguiendo el procedimiento oficial o avisos del equipo.']
 ],
 prusa:[
 ['Comprobación y lubricación de varillas lisas','motion',200,0,'Comprobar arañazos, limpiar varillas lisas y lubricar con Prusa Lubricant. No lubricar husillos roscados Z ni tuercas trapezoidales.'],
 ['Revisión de correas, poleas y ventiladores','motion',300,0,'Retirar residuos de poleas/correas, comprobar tensión y limpiar ventiladores sin hacerlos girar con aire comprimido.'],
 ['Revisión de conectores eléctricos','electrical',700,0,'Con impresora apagada y desenchufada, revisar conectores de placas, cama, PSU y pantalla.']
 ],
 flash:[
 ['Lubricación de guías lineales','motion',200,0,'Limpiar y aplicar aceite lubricante a las guías según el manual del fabricante.'],
 ['Revisión y cambio de filtro de algodón','fans',300,0,'Revisar oscurecimiento y sustituir el algodón del filtro cuando corresponda.'],
 ],
 anycubic:[
 ['Limpieza y lubricación de husillos dobles X/Y','motion',0,30,'Limpiar los husillos metálicos dobles X/Y y aplicar una capa fina de grasa. Mover los ejes para distribuirla.'],
 ['Limpieza y lubricación de husillos Z','motion',0,90,'Limpiar los husillos Z y aplicar una capa fina de grasa. Mover Z varias veces y retirar exceso.'],
 ['Inspección de extrusor y hotend','extruder',0,30,'Comprobar alimentación, acumulación de filamento, ventilador del hotend y estado de la boquilla.']
 ],
 generic:[
 ['Inspección de correas y movimiento','motion',200,0,'Comprobar tensión, desgaste y suavidad de los ejes. Lubricar solo los elementos que el manual del modelo indique.'],
 ['Revisión de extrusor, hotend y ventiladores','extruder',200,0,'Revisar restos de filamento, boquilla, engranajes y ventiladores. Limpiar con la máquina apagada y fría.'],
 ['Revisión de cables y conectores','electrical',0,90,'Inspeccionar visualmente cables, conectores y elementos móviles. No manipular conexiones con la máquina conectada.']
 ]
};

const careAdvice={
 k2:[['Limpieza de máquina y plataforma','Antes de cada impresión, retira restos sueltos del interior y limpia los residuos de filamento o adhesivo de la plataforma siguiendo las indicaciones del fabricante.']],
 bambu:[['Limpieza de placa y zona de impresión','Mantén limpia la placa y retira restos de filamento antes de imprimir. Utiliza únicamente productos compatibles con el tipo de superficie.']],
 prusa:[['Limpieza de la zona de impresión','Retira restos sueltos y mantén limpia la superficie de impresión con el procedimiento recomendado para el material de la placa.']],
 flash:[['Limpieza del interior de la cámara','Retira los residuos sueltos de filamento del interior cuando sea necesario, con la impresora apagada y siguiendo las instrucciones del fabricante.']],
 generic:[['Limpieza rutinaria','Retira polvo y restos sueltos y limpia la superficie de impresión con productos compatibles con el recubrimiento de tu placa.'],['Limpieza de cama y superficie','Limpia la superficie cuando sea necesario con un producto compatible con el recubrimiento de la placa y revisa si presenta daños visibles.']]
};

// Tareas preventivas comunes. Son orientativas y editables: el manual del modelo siempre prevalece.
const commonTasks=[
 ['Inspección del hotend y bloque calefactor','hotend',0,30,'Con la impresora apagada y fría, comprobar fijación del bloque, restos de plástico, daños visibles y estado del aislamiento. No apretar ni desmontar en caliente salvo procedimiento del fabricante.'],
 ['Limpieza de boquilla y comprobación de obstrucciones','nozzle',0,30,'Comprobar la salida de material y retirar residuos siguiendo el procedimiento del fabricante. Usar la temperatura y herramienta adecuadas; evitar forzar la boquilla en frío.'],
 ['Comprobar desgaste de boquilla y sustituir si procede','nozzle',200,0,'Revisar diámetro, deformación, desgaste y calidad de extrusión. Sustituir si está desgastada, dañada o no puede desatascarse. Intervalo orientativo: adelantar según material abrasivo y síntomas.'],
 ['Revisar calentador, termistor y lectura de temperatura','hotend',0,90,'Comprobar estabilidad de temperatura, calentamiento y ausencia de errores. Con la máquina apagada, inspeccionar visualmente cables y fijaciones; no tirar de los conductores.'],
 ['Limpiar engranajes y recorrido del extrusor','extruder',0,30,'Retirar polvo y virutas de filamento de los engranajes, entrada y recorrido del filamento. Comprobar dientes, presión y alimentación. No lubricar engranajes salvo indicación expresa del fabricante.'],
 ['Inspeccionar correas, poleas y tensores','belts',0,30,'Buscar grietas, desgaste, dientes dañados, rozamiento o holgura. Comprobar alineación y tensión según el procedimiento del modelo. No aplicar lubricante a las correas.'],
 ['Limpiar ventiladores, disipadores y conductos','fans',0,30,'Apagar la impresora y retirar polvo de aspas, rejillas y disipadores con un cepillo suave. Evitar que el ventilador gire a gran velocidad por aire comprimido.'],
 ['Comprobar sensores, nivelación y finales de carrera','sensors',0,30,'Verificar que los sensores detectan correctamente, que la nivelación termina sin errores y que los finales de carrera actúan. No modificar alturas ni offsets sin recalibrar.'],
 ['Inspeccionar cableado y conectores móviles','wiring',0,90,'Con el equipo apagado y desenchufado, revisar visualmente cables de cabezal, cama y cadenas portacables. Buscar pellizcos, rozaduras, aislamiento dañado o conectores flojos. No abrir fuentes de alimentación.']
];

function family(model){
 const m=String(model||'').toLowerCase().replace(/[_-]+/g,' ').replace(/\\s+/g,' ').trim();
 if(m.includes('snapmaker u1')||/^u1$/.test(m))return 'u1';
 if(m.includes('snapmaker j1')||/^j1$/.test(m))return 'j1';
 if(m.includes('snapmaker artisan')||/^artisan$/.test(m))return 'artisan';
 if(m.includes('k2 pro')||m==='k2 pro')return 'k2';
 if(m.includes('kobra 2 pro')||m==='kobra 2 pro')return 'kobra2';
 if(m.includes('kobra 3')||m==='kobra 3')return 'anycubic';
 if(m.includes('neptune 4 pro')||m==='neptune 4 pro')return 'neptune';
 if(m.includes('prusa mk4s')||m==='mk4s')return 'prusa';
 if(m.includes('adventurer 5m pro'))return 'flash';
 if(m.includes('bambu'))return 'bambu';
 return 'generic';
}
function models(){try{return JSON.parse(localStorage.getItem('pcp_machines')||'[]')}catch(_){return []}}
function discovered(){try{return JSON.parse(localStorage.getItem('pcp_u1_discovered_printers')||'[]')}catch(_){return []}}
function aliases(){try{return JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}')}catch(_){return {}}}
let data=read(),active='';
function machineOptions(){
 const out=[],seen=new Set(),als=aliases(),profiles=models();
 discovered().forEach(p=>{
  const ip=String(p.ip||'').trim();if(!ip)return;
  const name=String(als[ip]||p.alias||p.hostname||ip);
  const modelHint=String(p.model||p.printerModel||p.machineModel||'').trim();
  const matched=profiles.find(x=>modelHint&&String(x.name||'').toLowerCase().includes(modelHint.toLowerCase()));
  const fallback=profiles.length===1?profiles[0].name:'';
  const model=modelHint||matched?.name||fallback||name||p.name||p.hostname;
  const id='network:'+ip;
  if(!seen.has(id)){seen.add(id);out.push({id,name,model,ip})}
 });
 profiles.forEach(m=>{
  const name=String(m.name||'').trim();if(!name)return;
  const represented=out.some(o=>String(o.model||'').toLowerCase()===name.toLowerCase()||String(o.name||'').toLowerCase()===name.toLowerCase()||(family(o.model)!=='generic'&&family(o.model)===family(name)));
  if(!represented&&!seen.has('profile:'+name)){seen.add('profile:'+name);out.push({id:'profile:'+name,name,model:name})}
 });
 Object.values(data).forEach(m=>{if(m&&m.custom&&!seen.has(m.id)){seen.add(m.id);out.push({id:m.id,name:m.name,model:m.model||m.name,custom:true})}});
 return out;
}
function taskFromTemplate(a,i,familyKey,common=false){
 const source=common||familyKey==='generic'||familyKey==='bambu'?'Base orientativa · personalizable':'Guía de mantenimiento del fabricante';
 const sourceUrl=familyKey==='u1'?sourceLinks['Snapmaker U1']:familyKey==='j1'?sourceLinks['Snapmaker J1']:familyKey==='artisan'?sourceLinks['Snapmaker Artisan']:familyKey==='kobra2'?sourceLinks['Anycubic Kobra 2 Pro']:familyKey==='neptune'?sourceLinks['ELEGOO Neptune 4 Pro']:familyKey==='k2'?sourceLinks['Creality K2 Pro']:familyKey==='prusa'?sourceLinks['Prusa MK4S']:familyKey==='flash'?sourceLinks['Flashforge Adventurer 5M Pro']:familyKey==='anycubic'?sourceLinks['Anycubic Kobra 3']:'';
 return {id:'d'+i,name:a[0],category:a[1],intervalHours:a[2],intervalDays:a[3],instructions:a[4],lastHours:0,lastDate:dateNow(),source,sourceUrl,doneCount:0};
}
function ensure(m){
 const familyKey=family(m.model||m.name),templates=schedules[familyKey]||schedules.generic;
 if(!data[m.id]){
  data[m.id]={id:m.id,name:m.name,model:m.model||m.name,ip:m.ip||'',hours:0,custom:!!m.custom,tasks:templates.map((a,i)=>taskFromTemplate(a,i,familyKey)).concat(commonTasks.map((a,i)=>taskFromTemplate(a,'c'+i,familyKey,true))),history:[]};
  write(data);
 }
 const record=data[m.id];
 record.name=m.name;record.model=m.model||record.model||m.name;
 record.tasks=Array.isArray(record.tasks)?record.tasks:[];
 // Migration v5.56: daily/after-print cleaning is advice, not scheduled maintenance.
 const adviceNames=new Set(['limpieza de máquina y plataforma','limpieza de placa y zona de impresión','limpieza general y plataforma','limpieza general y hotend','limpieza de residuos de filamento','limpiar cama y revisar superficie de impresión']);
 const beforeTasks=record.tasks.length;
 record.tasks=record.tasks.filter(task=>!adviceNames.has(String(task.name||'').trim().toLocaleLowerCase()));
 const beforeHistory=(record.history||[]).length;
 record.history=(record.history||[]).filter(item=>!adviceNames.has(String(item.name||'').trim().toLocaleLowerCase()));
 let changed=record.tasks.length!==beforeTasks||(record.history||[]).length!==beforeHistory;
 // Migration v5.51: append newly introduced baseline tasks, preserving completed dates,
 // machine hours, custom tasks and the existing history.
 const existingNames=new Set(record.tasks.map(x=>String(x.name||'').trim().toLocaleLowerCase()));
 templates.forEach((a,i)=>{
  const key=String(a[0]).trim().toLocaleLowerCase();
  if(!existingNames.has(key)){
   record.tasks.push(taskFromTemplate(a,'m'+i,familyKey,false));
   existingNames.add(key);changed=true;
  }
 });
 commonTasks.forEach((a,i)=>{
  const key=String(a[0]).trim().toLocaleLowerCase();
  if(!existingNames.has(key)){
   record.tasks.push(taskFromTemplate(a,'c'+i,familyKey,true));
   existingNames.add(key);changed=true;
  }
 });
 if(changed)write(data);
 return record;
}
function due(task,m){
 const hDue=Number(task.intervalHours)>0&&m.hours>=Number(task.lastHours||0)+Number(task.intervalHours);
 const dDue=Number(task.intervalDays)>0&&((Date.now()-new Date(task.lastDate||dateNow()).getTime())/86400000)>=Number(task.intervalDays);
 return {due:!!(hDue||dDue),remainingH:Number(task.intervalHours)>0?Math.max(0,Number(task.lastHours||0)+Number(task.intervalHours)-m.hours):null,remainingD:Number(task.intervalDays)>0?Math.max(0,Number(task.intervalDays)-Math.floor((Date.now()-new Date(task.lastDate||dateNow()).getTime())/86400000)):null};
}
function status(task,m){const d=due(task,m);return d.due?'due':(d.remainingH!==null&&d.remainingH<=20)||(d.remainingD!==null&&d.remainingD<=5)?'soon':'ok'}
function render(){
 const sel=$('maintenanceMachineSelect');if(!sel)return;
 const opts=machineOptions();if(!opts.length)sel.innerHTML=`<option value="">${esc(t('No hay impresoras: añade una máquina'))}</option>`;
 else sel.innerHTML=opts.map(m=>`<option value="${esc(m.id)}">${esc(m.name)}${m.ip?' · '+esc(m.ip):''}</option>`).join('');
 if(active&&!opts.some(m=>m.id===active))active='';if(!active&&opts.length)active=opts[0].id;sel.value=active||'';
 if(!active){$('maintenanceTaskList').innerHTML=`<div class="maintenance-empty">${esc(t('Añade una impresora para comenzar.'))}</div>`;$('maintenanceHistory').innerHTML='';renderKpis(null);return}
 const m=ensure(opts.find(x=>x.id===active)),tasks=m.tasks||[],dueTasks=tasks.filter(x=>status(x,m)==='due'),soon=tasks.filter(x=>status(x,m)==='soon');
 renderKpis({m,dueTasks,soon});
 $('maintenanceTaskList').innerHTML=tasks.length?tasks.map(task=>{const st=status(task,m),d=due(task,m),badge=st==='due'?t('Vencido'):st==='soon'?t('Próximo'):t('Al día');return `<article class="maintenance-task ${st}"><div class="maintenance-task-main"><span class="maintenance-task-icon">${task.category==='motion'?'⚙':task.category==='extruder'?'♨':task.category==='hotend'?'♨':task.category==='nozzle'?'◎':task.category==='belts'?'↔':task.category==='bed'?'▤':task.category==='sensors'?'⌁':task.category==='wiring'?'ϟ':task.category==='fans'?'◉':task.category==='electrical'?'ϟ':'✦'}</span><div><h4>${esc(task.customTask?task.name:t(task.name))}</h4><p>${esc(task.customTask?task.instructions:t(task.instructions))}</p><small>${esc(task.source==='Orientativo · confirmar manual del modelo'?t(task.source):task.source==='Guía de mantenimiento del fabricante'?t(task.source):task.source==='Base orientativa · personalizable'?t(task.source):task.source==='Personalizado'?t(task.source):task.source||t('Personalizado'))}${task.sourceUrl?` · <a href="${esc(task.sourceUrl)}" target="_blank" rel="noopener">${esc(t('Ver guía oficial'))}</a>`:''}</small></div><span class="maintenance-state ${st}">${esc(badge)}</span></div><div class="maintenance-task-foot"><span>${task.intervalHours?`${esc(t('Cada'))} ${hoursFmt(task.intervalHours)} h`:''}${task.intervalHours&&task.intervalDays?' · ':''}${task.intervalDays?`${esc(t('Cada'))} ${task.intervalDays} ${esc(t('días'))}`:''}</span><span>${st==='due'?esc(t('Necesita atención')):d.remainingH!==null?`${esc(t('Quedan'))} ${hoursFmt(d.remainingH)} h`:d.remainingD!==null?`${esc(t('Quedan'))} ${d.remainingD} ${esc(t('días'))}`:esc(t('Sin intervalo'))}</span></div><div class="maintenance-task-actions"><button class="btn primary" data-maint-done="${esc(task.id)}">${esc(t('Marcar realizado'))}</button><button class="btn" data-maint-edit="${esc(task.id)}">${esc(t('Editar'))}</button><button class="btn danger" data-maint-delete="${esc(task.id)}">${esc(t('Eliminar'))}</button></div></article>`}).join(''):`<div class="maintenance-empty">${esc(t('No hay tareas configuradas.'))}</div>`;
 const tips=careAdvice[family(m.model||m.name)]||careAdvice.generic;
 const advice=$('maintenanceAdviceList');if(advice)advice.innerHTML=tips.map(item=>`<article class="maintenance-advice-item"><strong>${esc(t(item[0]))}</strong><p>${esc(t(item[1]))}</p></article>`).join('');
 const hist=m.history||[];$('maintenanceHistory').innerHTML=hist.length?`<div class="maintenance-history-table"><div class="maintenance-history-head"><span>${esc(t('Fecha'))}</span><span>${esc(t('Tarea'))}</span><span>${esc(t('Horas de máquina'))}</span><span>${esc(t('Notas'))}</span></div>${hist.slice().reverse().map(h=>`<div class="maintenance-history-row"><span>${esc(h.date)}</span><strong>${esc(h.customTask?h.name:t(h.name))}</strong><span>${hoursFmt(h.hours)} h</span><span>${esc(h.notes||'—')}</span></div>`).join('')}</div>`:`<div class="maintenance-empty">${esc(t('Todavía no hay mantenimientos registrados.'))}</div>`;
 updateHomeAlerts(opts);
}
function renderKpis(ctx){
 const el=$('maintenanceKpis');if(!el)return;
 const values=ctx?[[t('Horas acumuladas'),hoursFmt(ctx.m.hours)+' h'],[t('Vencidos'),ctx.dueTasks.length],[t('Próximos'),ctx.soon.length],[t('Tareas configuradas'),ctx.m.tasks.length]]:[[t('Horas acumuladas'),'—'],[t('Vencidos'),'—'],[t('Próximos'),'—'],[t('Tareas configuradas'),'—']];
 el.innerHTML=values.map((v,i)=>`<div class="maintenance-kpi"><span>${['◷','!','◌','▤'][i]}</span><small>${esc(v[0])}</small><strong>${esc(v[1])}</strong></div>`).join('');
}
function updateHomeAlerts(opts){
 const el=$('homeAlertsList'),count=$('homeAlertCount');if(!el)return;
 let row=el.querySelector('.maintenance-home-alerts');if(!row){row=document.createElement('div');row.className='maintenance-home-alerts';el.appendChild(row)}
 const alerts=[];opts.forEach(o=>{const m=ensure(o);m.tasks.forEach(task=>{const st=status(task,m);if(st!=='ok')alerts.push({m,task,st})})});
 row.innerHTML=alerts.length?alerts.slice(0,5).map(a=>`<button class="maintenance-alert-line" data-maint-jump="${esc(a.m.id)}"><b>${esc(a.m.name)}</b> · ${esc(a.task.name)} <strong>${esc(a.st==='due'?t('Vencido'):t('Próximo'))}</strong></button>`).join(''):'';
 if(count){let low=0;try{const sp=JSON.parse(localStorage.getItem('pcp_spools')||'[]');low=sp.filter(x=>Number(x.remaining||0)<Math.max(50,Number(x.initial||1000)*.15)).length}catch(_){}count.textContent=String(low+alerts.length)}
 row.querySelectorAll('[data-maint-jump]').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.maintJump;document.querySelector('[data-tab="maintenanceView"]')?.click();render()}));
}
let modalSave=null;
function openModal(title,fields,onSave){
 const root=$('maintenanceModal'),body=$('maintenanceModalBody');if(!root||!body)return;
 $('maintenanceModalTitle').textContent=t(title);
 body.innerHTML=fields.map((f,i)=>`<div class="field"><label for="maintenanceModalField${i}">${esc(t(f.label))}</label>${f.type==='textarea'?`<textarea id="maintenanceModalField${i}" rows="3">${esc(f.value||'')}</textarea>`:`<input id="maintenanceModalField${i}" type="${f.type||'text'}" ${f.min!==undefined?`min="${f.min}"`:''} value="${esc(f.value??'')}" placeholder="${esc(f.placeholder||'')}">`}</div>`).join('');
 modalSave=()=>{const values=fields.map((f,i)=>$('maintenanceModalField'+i).value);onSave(values);closeModal()};
 root.classList.add('open');root.setAttribute('aria-hidden','false');
 $('maintenanceModalField0')?.focus();
}
function closeModal(){const root=$('maintenanceModal');if(root){root.classList.remove('open');root.setAttribute('aria-hidden','true')}modalSave=null}
function done(id){
 const m=data[active],task=m?.tasks.find(x=>x.id===id);if(!task)return;
 openModal('Registrar mantenimiento',[{label:'Observaciones del mantenimiento (opcional):',type:'textarea',value:''}],values=>{
  task.lastHours=Number(m.hours)||0;task.lastDate=dateNow();task.doneCount=(task.doneCount||0)+1;
  m.history=m.history||[];m.history.push({date:dateNow(),name:task.name,customTask:!!task.customTask,hours:m.hours,notes:values[0]||''});
  write(data);render();
 });
}
function editTask(id){
 const m=data[active],task=m?.tasks.find(x=>x.id===id);if(!task)return;
 openModal('Editar tarea',[{label:'Nombre de la tarea',value:task.name},{label:'Intervalo de horas (0 si no aplica)',type:'number',min:0,value:task.intervalHours||0},{label:'Intervalo de días (0 si no aplica)',type:'number',min:0,value:task.intervalDays||0},{label:'Instrucciones',type:'textarea',value:task.instructions||''}],values=>{
  if(!values[0].trim())return;
  task.name=values[0].trim();task.customTask=true;task.intervalHours=Math.max(0,Number(values[1])||0);task.intervalDays=Math.max(0,Number(values[2])||0);task.instructions=values[3];write(data);render();
 });
}
function addMachine(){
 openModal('Añadir máquina',[{label:'Nombre o alias de la impresora',value:''},{label:'Marca y modelo de la impresora',value:''}],values=>{
  const name=values[0].trim(),model=values[1].trim();if(!name||!model)return;
  const id='custom:'+Date.now();data[id]={id,name,model,hours:0,custom:true,tasks:(schedules[family(model)]||schedules.generic).map((a,i)=>taskFromTemplate(a,i,family(model))).concat(commonTasks.map((a,i)=>taskFromTemplate(a,'c'+i,family(model),true))),history:[]};write(data);active=id;render();
 });
}
function addHours(){
 const m=data[active];if(!m)return;
 openModal('Registrar horas',[{label:'Horas de impresión adicionales que quieres registrar',type:'number',min:0.1,value:1}],values=>{
  const n=Number(String(values[0]).replace(',','.'));if(!Number.isFinite(n)||n<=0){alert(t('Introduce un número de horas válido.'));return}
  m.hours=Number(m.hours||0)+n;write(data);render();
 });
}
function saveTask(){
 const name=$('maintenanceTaskName').value.trim();if(!name){$('maintenanceTaskName').focus();return}
 const m=data[active];if(!m){alert(t('Selecciona o añade una impresora primero.'));return}
 const id='c'+Date.now(),hours=Math.max(0,Number($('maintenanceTaskInterval').value)||0),days=Math.max(0,Number($('maintenanceTaskDays').value)||0);
 if(!hours&&!days){alert(t('Indica un intervalo en horas o días.'));return}
 m.tasks.push({id,name,category:$('maintenanceTaskCategory').value,intervalHours:hours,intervalDays:days,instructions:$('maintenanceTaskInstructions').value.trim(),lastHours:Number(m.hours)||0,lastDate:dateNow(),source:'Personalizado',customTask:true,doneCount:0});
 write(data);['maintenanceTaskName','maintenanceTaskInterval','maintenanceTaskDays','maintenanceTaskInstructions'].forEach(id=>$ (id).value='');render();
}
document.addEventListener('DOMContentLoaded',()=>{
 $('maintenanceMachineSelect')?.addEventListener('change',e=>{active=e.target.value;render()});
 $('maintenanceAddMachine')?.addEventListener('click',addMachine);
 $('maintenanceAddHours')?.addEventListener('click',addHours);
 $('maintenanceSaveTask')?.addEventListener('click',saveTask);
 $('maintenanceModalSave')?.addEventListener('click',()=>{if(modalSave)modalSave()});document.querySelectorAll('[data-maint-close]').forEach(b=>b.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
 $('maintenanceTaskList')?.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.maintDone)done(b.dataset.maintDone);if(b.dataset.maintEdit)editTask(b.dataset.maintEdit);if(b.dataset.maintDelete){const m=data[active];m.tasks=m.tasks.filter(x=>x.id!==b.dataset.maintDelete);write(data);render()}});
 document.querySelectorAll('[data-tab="maintenanceView"]').forEach(b=>b.addEventListener('click',()=>setTimeout(render,0)));
 document.addEventListener('storage',e=>{if(e.key==='pcp_machines'||e.key==='pcp_u1_discovered_printers'||e.key==='pcp_u1_printer_aliases')render()});$('pcpLanguage')?.addEventListener('change',()=>setTimeout(render,100));
 render();setTimeout(()=>updateHomeAlerts(machineOptions()),900);setInterval(()=>updateHomeAlerts(machineOptions()),30000);
});
})();