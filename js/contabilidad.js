
(()=>{
const $=id=>document.getElementById(id),KEY='pcp_accounting_moves';let accountingSearchTerm='';let accountingSortColumn=localStorage.getItem('pcp_accounting_sort')||'';
const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return []}};
const set=a=>localStorage.setItem(KEY,JSON.stringify(a));
const eur=(n,c='EUR')=>new Intl.NumberFormat((window.PCP_LOCALE||'es-ES'),{style:'currency',currency:c||'EUR'}).format(Number(n)||0);
const collectedAmount=x=>(x.kind==='personalExpense'||x.kind==='personal')?null:(x.kind==='income'?(x.customerCharge??x.saleDetails?.grossRevenue??x.amount):(x.customerCharge??null));
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
  const lang=(window.PCP_LANG||document.documentElement.lang||'es').slice(0,2),idx=({es:0,en:1,fr:2,de:3,it:4,pl:5})[lang]??0;
  const heads=[
   'No se puede guardar el gasto: falta stock de filamento o no se encuentra la bobina correspondiente.',
   'The expense cannot be saved: filament stock is insufficient or the matching spool was not found.',
   'La dépense ne peut pas être enregistrée : stock de filament insuffisant ou bobine correspondante introuvable.',
   'Die Ausgabe kann nicht gespeichert werden: Filamentbestand unzureichend oder passende Spule nicht gefunden.',
   'Impossibile salvare la spesa: filamento insufficiente o bobina corrispondente non trovata.',
   'Nie można zapisać wydatku: za mało filamentu w magazynie lub nie znaleziono odpowiedniej szpuli.'
  ];
  return {ok:false,deductions:[],message:heads[idx]+'\\n'+issues.join('\\n')};
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
 panel.innerHTML=`<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:42px;height:42px;flex:0 0 42px;border-radius:13px;background:${kind==='error'?'#5a3920':'#163f3b'};display:grid;place-items:center;font-size:22px">${icon}</div><div style="flex:1"><div style="font-size:19px;font-weight:750;letter-spacing:-.3px;margin:2px 0 5px">${esc(title)}</div><div style="color:#b8c6da">${esc(subtitle)}</div></div></div><div style="display:grid;gap:9px;margin:18px 0">${rows.map(r=>`<div style="display:flex;justify-content:space-between;gap:12px;padding:11px 13px;border:1px solid #2c3d56;border-radius:11px;background:#17243a"><div><div style="font-weight:650">${esc(r.name)}</div><div style="font-size:12px;color:#a9bad0">${esc(r.detail||'')}</div></div><div style="font-weight:750;white-space:nowrap;color:${kind==='error'?'#ffc98a':'#73dfca'}">${esc(r.amount||'')}</div></div>`).join('')}</div><div style="display:flex;justify-content:flex-end"><button type="button" data-notice-close style="border:0;border-radius:10px;background:#63d6c3;color:#08251f;font-weight:750;padding:10px 18px;cursor:pointer">OK</button></div>`;
 overlay.appendChild(panel);document.body.appendChild(overlay);
 const close=()=>overlay.remove();overlay.addEventListener('click',e=>{if(e.target===overlay)close()});panel.querySelector('[data-notice-close]').addEventListener('click',close);
 const key=e=>{if(e.key==='Escape'){close();document.removeEventListener('keydown',key)}};document.addEventListener('keydown',key);
}
function filamentSaveMessage(move){
 const lang=(window.PCP_LANG||document.documentElement.lang||'es').slice(0,2),idx=({es:0,en:1,fr:2,de:3,it:4,pl:5})[lang]??0;
 const words={
  title:['Gasto guardado correctamente','Expense saved successfully','Dépense enregistrée','Ausgabe erfolgreich gespeichert','Spesa salvata correttamente','Wydatek został zapisany'],
  body:['Se ha registrado el gasto propio y se ha descontado este filamento del inventario.','The own expense was recorded and this filament was deducted from inventory.','La dépense propre a été enregistrée et ce filament a été déduit du stock.','Die eigene Ausgabe wurde erfasst und dieses Filament wurde vom Bestand abgezogen.','La spesa propria è stata registrata e questo filamento è stato sottratto dal magazzino.','Zapisano wydatek własny i odjęto ten filament od stanu magazynowego.'],
  none:['No se ha descontado filamento.','No filament was deducted.','Aucun filament n’a été déduit.','Es wurde kein Filament abgezogen.','Non è stato sottratto alcun filamento.','Nie odjęto żadnego filamentu.'],
  spool:['Bobina','Spool','Bobine','Spule','Bobina','Szpula'],
  ok:['Aceptar','OK','OK','OK','OK','OK']
 };
 const rows=(move.filamentDeductions||[]).map(d=>({name:[d.brand,d.material].filter(Boolean).join(' · ')||words.spool[idx],detail:d.color||d.hex||'',amount:`−${Number(d.grams||0).toFixed(2)} g`}));
 if(!rows.length)rows.push({name:words.none[idx],detail:'',amount:''});
 showFilamentNotice(words.title[idx],words.body[idx],rows,'success');
}
function filamentRefundMessage(move){
 const lang=(window.PCP_LANG||document.documentElement.lang||'es').slice(0,2),idx=({es:0,en:1,fr:2,de:3,it:4,pl:5})[lang]??0;
 const words={
  title:['Filamento devuelto al inventario','Filament returned to inventory','Filament restitué au stock','Filament dem Bestand gutgeschrieben','Filamento restituito al magazzino','Filament zwrócono do magazynu'],
  body:['Se ha eliminado el movimiento y se ha recuperado el filamento de estas bobinas:','The entry was deleted and filament was returned to these spools:','L’écriture a été supprimée et le filament a été restitué aux bobines suivantes :','Die Buchung wurde gelöscht und Filament wurde diesen Spulen wieder gutgeschrieben:','Il movimento è stato eliminato e il filamento è stato restituito a queste bobine:','Usunięto zapis i przywrócono filament z następujących szpul:'],
  spool:['Bobina','Spool','Bobine','Spule','Bobina','Szpula'],
  ok:['Aceptar','OK','OK','OK','OK','OK']
 };
 const rows=(move.filamentDeductions||[]).map(d=>({name:[d.brand,d.material].filter(Boolean).join(' · ')||words.spool[idx],detail:d.color||d.hex||'',amount:`+${Number(d.grams||0).toFixed(2)} g`}));
 if(!rows.length)rows.push({name:words.body[idx],detail:'',amount:''});
 showFilamentNotice(words.title[idx],words.body[idx],rows,'success');
}


const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const accountingPages=window.__pcpAccountingPages||(window.__pcpAccountingPages={});const attachTablePagination=(container,tableSelector,baseId,pageSize=10)=>{const host=typeof container==='string'?document.getElementById(container):container;if(!host)return;const table=host.querySelector(tableSelector);if(!table)return;const body=table.tBodies&&table.tBodies[0];if(!body)return;const rows=Array.from(body.rows);const old=host.querySelector('[data-pager="'+baseId+'"]');if(old)old.remove();if(rows.length<=pageSize){rows.forEach(r=>r.style.display='');return;}const pages=Math.ceil(rows.length/pageSize);let page=Math.min(Math.max(1,Number(accountingPages[baseId]||1)),pages);const nav=document.createElement('div');nav.dataset.pager=baseId;nav.className='acc-pagination';nav.style.cssText='display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:14px;padding:10px';const prev=document.createElement('button');prev.type='button';prev.className='btn';const label=document.createElement('span');const next=document.createElement('button');next.type='button';next.className='btn';const draw=()=>{accountingPages[baseId]=page;rows.forEach((r,i)=>r.style.display=(i>=(page-1)*pageSize&&i<page*pageSize)?'':'none');prev.textContent=accountWords['Anterior'][Math.max(0,localeIndex())]||'Anterior';next.textContent=accountWords['Siguiente'][Math.max(0,localeIndex())]||'Siguiente';prev.disabled=page===1;next.disabled=page===pages;label.textContent=(accountWords['Página'][Math.max(0,localeIndex())]||'Página')+' '+page+' / '+pages+' · '+rows.length+' '+(accountWords['movimientos'][Math.max(0,localeIndex())]||'registros');};prev.addEventListener('click',()=>{if(page>1){page--;draw()}});next.addEventListener('click',()=>{if(page<pages){page++;draw()}});nav.append(prev,label,next);host.appendChild(nav);draw();};
const localeIndex=()=>({es:0,en:1,fr:2,de:3,it:4,pl:5})[(window.PCP_LANG||document.documentElement.lang||'es').slice(0,2)]||0;
const accountWords={
 'Anterior':['Anterior','Previous','Précédent','Zurück','Precedente','Poprzednia'],
 'Siguiente':['Siguiente','Next','Suivant','Weiter','Successivo','Następna'],
 'Página':['Página','Page','Page','Seite','Pagina','Strona'],
 'movimientos':['movimientos','entries','opérations','Einträge','movimenti','wpisów'],
 'Resumen por impresora':['Resumen por impresora','Printer summary','Résumé par imprimante','Zusammenfassung je Drucker','Riepilogo per stampante','Podsumowanie według drukarki'],
 'Resumen económico':['Resumen económico','Financial summary','Résumé financier','Finanzübersicht','Riepilogo economico','Podsumowanie finansowe'],
 'Gastos propios':['Gastos propios','Own expenses','Dépenses propres','Eigene Ausgaben','Spese proprie','Wydatki własne'],
 'Gastos de pedidos':['Gastos de pedidos','Order expenses','Frais de commande','Auftragskosten','Spese ordini','Koszty zamówień'],
 'Ventas estimadas':['Ventas estimadas','Estimated sales','Ventes estimées','Geschätzte Umsätze','Vendite stimate','Szacowana sprzedaż'],
 'Beneficio estimado':['Beneficio estimado','Estimated profit','Bénéfice estimé','Geschätzter Gewinn','Profitto stimato','Szacowany zysk'],
 'Total de gastos':['Total de gastos','Total expenses','Total des dépenses','Gesamtausgaben','Spese totali','Łączne wydatki'],
 'Ver detalle':['Ver detalle','View details','Voir le détail','Details anzeigen','Visualizza dettagli','Zobacz szczegóły'],
 'Total de todas las impresoras':['Total de todas las impresoras','All printers total','Total de toutes les imprimantes','Gesamtsumme aller Drucker','Totale di tutte le stampanti','Łączna suma ze wszystkich drukarek'],
 'Consolidado general':['Consolidado general','Overall total','Total général','Gesamtübersicht','Totale complessivo','Zestawienie ogólne'],
 'Selecciona impresora':['Selecciona una impresora','Select a printer','Sélectionner une imprimante','Drucker auswählen','Seleziona una stampante','Wybierz drukarkę'],
 'No hay impresoras detectadas':['No hay impresoras detectadas en Opciones','No printers detected in Options','Aucune imprimante détectée dans Options','Keine Drucker in den Optionen erkannt','Nessuna stampante rilevata in Opzioni','Nie wykryto drukarek w ustawieniach'],

 'Gasto propio':['Gasto propio','Own expense','Dépense personnelle','Eigene Ausgabe','Spesa personale','Wydatek własny'],
 'Gasto pedido':['Gasto pedido','Order expense','Dépense de commande','Auftragsausgabe','Spesa ordine','Wydatek związany z zamówieniem'],
 'Ingreso cobrado':['Ingreso cobrado','Collected income','Revenu encaissé','Einnahme','Entrata incassata','Otrzymana płatność'],
 'Personal':['Personal','Personal','Personnel','Privat','Personale','Prywatne'],
 'Pedido de venta':['Pedido de venta','Sales order','Commande de vente','Verkaufsauftrag','Ordine di vendita','Zamówienie sprzedaży'],
 'Filamento':['Filamento','Filament','Filament','Filament','Filamento','Filament'],
 'Electricidad':['Electricidad','Electricity','Électricité','Strom','Elettricità','Energia elektryczna'],
 'Desgaste':['Desgaste y amortización','Wear and depreciation','Usure et amortissement','Verschleiß und Abschreibung','Usura e ammortamento','Zużycie i amortyzacja'],
 'Mantenimiento':['Mantenimiento y recambios','Maintenance and spare parts','Entretien et pièces de rechange','Wartung und Ersatzteile','Manutenzione e ricambi','Konserwacja i części zamienne'],
 'Mano de obra':['Mano de obra y extras','Labour and extras','Main-d’œuvre et extras','Arbeitsaufwand und Extras','Manodopera e extra','Robocizna i dodatki'],
 'Reserva':['Reserva por fallos','Failure allowance','Provision pour échecs','Fehlerreserve','Riserva per errori','Rezerwa na nieudane wydruki'],
 'Tiempo usado':['Tiempo usado','Time used','Temps utilisé','Verwendete Zeit','Tempo usato','Wykorzystany czas'],
 'Desglose':['DESGLOSE','BREAKDOWN','DÉTAIL','AUFSCHLÜSSELUNG','DETTAGLIO','PODSUMOWANIE'],
 'Provisional':['provisional','provisional','provisoire','vorläufig','provvisorio','tymczasowe'],
 'Finalizada':['finalizada','completed','terminée','abgeschlossen','completata','zakończona'],
 'Impresión en curso':['impresión en curso (provisional)','print in progress (provisional)','impression en cours (provisoire)','Druck läuft (vorläufig)','stampa in corso (provvisoria)','drukowanie w toku (tymczasowe)'],
 'Impresión finalizada':['impresión finalizada','print completed','impression terminée','Druck abgeschlossen','stampa completata','drukowanie zakończone'],
 'detectado del nombre del archivo':['detectado del nombre del archivo','detected from filename','détecté à partir du nom de fichier','aus dem Dateinamen erkannt','rilevato dal nome del file','wykryto na podstawie nazwy pliku'],
 'tomado del campo de tiempo de Inicio':['tomado del campo de tiempo de Inicio','from the Home time field','repris du champ de temps de l’accueil','aus dem Zeitfeld auf der Startseite','dal campo tempo della Home','pobrano z pola czasu na ekranie głównym'],
 'Comisión estimada':['Comisión estimada','Estimated commission','Commission estimée','Geschätzte Provision','Commissione stimata','Szacowana prowizja'],
 'Comisión del punto 04':['Comisión del punto 04','Section 04 commission','Commission de la section 04','Provision aus Abschnitt 04','Commissione della sezione 04','Prowizja z sekcji 04'],
 'sobre':['sobre','on','sur','auf','su','od'],
 'cobrado estimado':['cobrado estimado','estimated amount collected','montant estimé encaissé','geschätzter Zahlungseingang','importo stimato incassato','szacunkowa otrzymana kwota'],
 'Editar movimiento contable':['Editar movimiento contable','Edit accounting entry','Modifier l’écriture comptable','Buchung bearbeiten','Modifica movimento contabile','Edytuj zapis księgowy'],
 'Guardar cambios':['Guardar cambios','Save changes','Enregistrer les modifications','Änderungen speichern','Salva modifiche','Zapisz zmiany'],
 'Cancelar':['Cancelar','Cancel','Annuler','Abbrechen','Annulla','Anuluj'],
 'El detalle de referencia se conserva.':['El detalle de referencia se conserva.','The reference details will be kept.','Les détails de référence seront conservés.','Die Referenzdetails bleiben erhalten.','I dettagli di riferimento verranno mantenuti.','Szczegóły referencyjne zostaną zachowane.'],
 'Revisa los valores del movimiento.':['Revisa los valores del movimiento.','Check the entry values.','Vérifiez les valeurs de l’écriture.','Bitte die Buchungswerte prüfen.','Controlla i valori del movimento.','Sprawdź wartości zapisu.'],
 'Añadir desde':['Añadir desde','Add from','Ajouter depuis','Hinzufügen aus','Aggiungi da','Dodaj z'],
 'Movimiento manual':['Movimiento manual','Manual entry','Écriture manuelle','Manuelle Buchung','Movimento manuale','Zapis ręczny'],
 'Presupuesto guardado':['Presupuesto guardado','Saved quote','Devis enregistré','Gespeichertes Angebot','Preventivo salvato','Zapisano ofertę'],
  // "Tasación guardada" se obtiene del diccionario central PCP_I18N.
 'Seleccionar presupuesto o tasación':['Seleccionar presupuesto o tasación','Select quote or estimate','Sélectionner un devis ou une estimation','Angebot oder Kalkulation auswählen','Seleziona preventivo o stima','Wybierz ofertę lub wycenę'],
 'Elige un documento guardado.':['Elige un documento guardado.','Choose a saved document.','Choisissez un document enregistré.','Wählen Sie ein gespeichertes Dokument aus.','Scegli un documento salvato.','Wybierz zapisany dokument.'],
 'Venta':['Venta','Sale','Vente','Verkauf','Vendita','Sprzedaż'],
 'Gasto propio o venta':['¿Registrar como gasto propio o como venta?','Record as own expense or sale?','Enregistrer comme dépense propre ou vente ?','Als eigene Ausgabe oder Verkauf erfassen?','Registrare come spesa propria o vendita?','Zarejestrować jako wydatek własny czy sprzedaż?'],
 'Documento importado':['Documento importado','Imported document','Document importé','Importiertes Dokument','Documento importato','Zaimportowany dokument'],
 'Todavía no hay movimientos.':['Todavía no hay movimientos.','There are no entries yet.','Il n’y a pas encore de mouvements.','Es gibt noch keine Buchungen.','Non ci sono ancora movimenti.','Nie ma jeszcze żadnych wpisów.'],
 'No hay resultados para la búsqueda.':['No hay resultados para la búsqueda.','No results match your search.','Aucun résultat ne correspond à votre recherche.','Keine Suchergebnisse gefunden.','Nessun risultato corrisponde alla ricerca.','Brak wyników wyszukiwania.'],
 'Escribe un concepto para el movimiento.':['Escribe un concepto para el movimiento.','Enter a description for the entry.','Saisissez un libellé pour l’écriture.','Geben Sie eine Beschreibung für die Buchung ein.','Inserisci una descrizione per il movimento.','Wpisz opis wpisu.'],
 'El importe no puede ser negativo.':['El importe no puede ser negativo.','The amount cannot be negative.','Le montant ne peut pas être négatif.','Der Betrag darf nicht negativ sein.','L’importo non può essere negativo.','Kwota nie może być ujemna.'],
 'Este documento no contiene el desglose de filamentos necesario para descontar el inventario. Vuelve a guardar la tasación o presupuesto con una versión que guarde ese detalle.':['Este documento no contiene el desglose de filamentos necesario para descontar el inventario. Vuelve a guardar la tasación o presupuesto con una versión que guarde ese detalle.','This document does not contain the filament breakdown required to deduct inventory. Save the estimate or quote again using a version that stores this detail.','Ce document ne contient pas le détail des filaments nécessaire pour déduire le stock. Enregistrez à nouveau l’estimation ou le devis avec une version qui conserve ce détail.','Dieses Dokument enthält nicht die für den Bestandsabzug erforderliche Filamentaufschlüsselung. Speichern Sie die Kalkulation oder das Angebot erneut mit einer Version, die diese Angaben speichert.','Questo documento non contiene il dettaglio dei filamenti necessario per scaricare l’inventario. Salva di nuovo la stima o il preventivo con una versione che memorizzi questi dettagli.','Ten dokument nie zawiera zestawienia filamentów wymaganego do odjęcia materiału z magazynu. Zapisz ponownie wycenę lub ofertę w wersji, która przechowuje te dane.'],
 'No hay movimientos para exportar.':['No hay movimientos para exportar.','There are no entries to export.','Aucun mouvement à exporter.','Keine Buchungen zum Exportieren vorhanden.','Non ci sono movimenti da esportare.','Brak wpisów do wyeksportowania.'],
 'El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.':['El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.','The browser blocked the report window. Allow pop-ups to export to PDF.','Le navigateur a bloqué la fenêtre du rapport. Autorisez les fenêtres contextuelles pour exporter en PDF.','Der Browser hat das Berichtsfenster blockiert. Erlauben Sie Pop-ups, um als PDF zu exportieren.','Il browser ha bloccato la finestra del report. Consenti i popup per esportare in PDF.','Przeglądarka zablokowała okno raportu. Zezwól na wyskakujące okienka, aby wyeksportować do PDF.']
};
const accLang=()=>({es:0,en:1,fr:2,de:3,it:4,pl:5}[window.PCP_I18N?.language]??0), accT=k=>accountWords[k]?.[accLang()]||window.PCP_I18N?.t(k)||k;
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
function printerTotals(data){
 const map={};
 discoveredPrinters().forEach(name=>{if(!map[name])map[name]={personal:0,orderCost:0,revenue:0,profit:0};});data.forEach(x=>{const p=accountingPrinter(x);if(!map[p])map[p]={personal:0,orderCost:0,revenue:0,profit:0};const t=map[p];
 if(x.source==='manual'){if(x.kind==='personalExpense')t.personal+=Number(x.amount)||0;if(x.kind==='orderExpense')t.orderCost+=Number(x.amount)||0;if(x.kind==='income')t.revenue+=Number(x.customerCharge??x.saleDetails?.grossRevenue??x.amount)||0;if(x.kind==='orderExpense'||x.kind==='income')t.profit+=Number(x.profit)||0;if(x.kind==='orderExpense'&&x.customerCharge!=null)t.revenue+=Number(x.customerCharge)||0;}
 else if(x.kind==='personal')t.personal+=Number(x.amount)||0;else{t.orderCost+=Number(x.amount)||0;t.revenue+=Number(x.customerCharge??x.revenue)||0;t.profit+=Number(x.profit)||0;}
 });return map;
}
function accountingType(x){return x.source==='manual'?({'personalExpense':accT('Gasto propio'),'orderExpense':accT('Gasto pedido'),'income':accT('Ingreso cobrado')}[x.kind]||x.kind):(x.kind==='personal'?accT('Personal'):accT('Pedido de venta'))}
function accountingConcept(x){let s=String(x.concept||x.name||'Impresión');if(x.jobKey&&String(x.jobKey).startsWith('u1:')){s=s.replace(/ · impresión en curso \(provisional\)$/i,' · '+accT('Impresión en curso')).replace(/ · impresión finalizada$/i,' · '+accT('Impresión finalizada')).replace(/ · impresión cancelada · coste parcial$/i,' · '+accT('impresión cancelada · coste parcial')).replace(/^Comisión estimada · /,accT('Comisión estimada')+' · ');}return s}
function accountingReference(x){const raw=String(x.notes||x.client||'—');if(x.jobKey&&String(x.jobKey).startsWith('u1:')&&x.breakdown){const m=raw.match(/^(.+?) · (finalizada|provisional) · ([\d.,]+ g) · ([\s\S]*?) · DESGLOSE: /i);if(m){const b=x.breakdown, suffix=raw.includes('detectado del nombre del archivo')?'detectado del nombre del archivo':raw.includes('campo de tiempo de Inicio')?'tomado del campo de tiempo de Inicio':'';const partNames=['Filamento','Electricidad','Desgaste','Mantenimiento','Mano de obra','Reserva'];const partValues=[b.filament,b.electricity,b.wear,b.maintenance,b.laborAndExtras,b.failureReserve];const detail=partNames.map((k,i)=>accT(k)+' '+eur(partValues[i],x.currency)).join('; ')+'; '+accT('Tiempo usado')+' '+Number(b.hours||0).toLocaleString(window.PCP_LOCALE||'es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})+' h'+(suffix?' ('+accT(suffix)+')':'');const parts=window.PCP_I18N?.colorDisplay?.(m[4])||m[4];return canonicalPrinterName(m[1])+' · '+accT(m[2].toLowerCase()==='provisional'?'Provisional':'Finalizada')+' · '+m[3]+' · '+parts+' · '+accT('Desglose')+': '+detail}}
 if(x.jobKey&&String(x.jobKey).includes('|commission')){const m=raw.match(/^Comisión del punto 04 · ([\d.,]+)% sobre ([\d.,]+) (.+) cobrado estimado\.?$/);if(m)return accT('Comisión del punto 04')+' · '+m[1]+'% '+accT('sobre')+' '+m[2]+' '+m[3]+' '+accT('cobrado estimado')}
 return raw}
function editableConcept(x){const raw=String(x.concept||x.name||'Impresión');return x.jobKey&&String(x.jobKey).startsWith('u1:')?raw.replace(/ · impresión (?:finalizada|en curso \(provisional\))$/,''):raw}
function openAccountingEditor(x,index){const charge=collectedAmount(x),profitValue=(x.kind==='personalExpense'||x.kind==='personal')?null:x.profit,dialog=document.createElement('dialog');dialog.className='acc-edit-dialog';dialog.innerHTML='<form method="dialog"><h3>'+esc(accT('Editar movimiento contable'))+'</h3><label>'+esc(accT('Concepto'))+'<input name="concept" value="'+esc(editableConcept(x))+'" required></label><label>'+esc(accT('Importe/coste'))+'<input name="amount" type="number" min="0" step="0.01" value="'+esc(x.amount??0)+'" required></label><label>'+esc(accT('Importe cobrado'))+'<input name="charge" type="number" min="0" step="0.01" '+(charge==null?'':'required')+' value="'+(charge==null?'':esc(charge))+'"></label><label>'+esc(accT('Beneficio estimado'))+'<input name="profit" type="number" step="0.01" value="'+(profitValue==null?'':esc(profitValue))+'"></label><p>'+esc(accT('El detalle de referencia se conserva.'))+'</p><div class="dialog-actions"><button type="button" class="btn" data-editor-cancel>'+esc(accT('Cancelar'))+'</button><button type="submit" class="btn primary">'+esc(accT('Guardar cambios'))+'</button></div></form>';document.body.appendChild(dialog);const close=()=>{dialog.close();dialog.remove()};dialog.querySelector('[data-editor-cancel]').addEventListener('click',close);dialog.addEventListener('close',()=>dialog.remove(),{once:true});dialog.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),concept=String(fd.get('concept')||'').trim(),amount=Number(fd.get('amount')),chargeText=String(fd.get('charge')||'').trim(),profitText=String(fd.get('profit')||'').trim(),newCharge=chargeText===''?null:Number(chargeText),newProfit=profitText===''?null:Number(profitText),suffix=x.jobKey&&String(x.jobKey).startsWith('u1:')?(String(x.concept||'').match(/ · impresión (?:finalizada|en curso \(provisional\))$/)||['',''])[0]:'';if(!concept||!Number.isFinite(amount)||amount<0||(newCharge!==null&&(!Number.isFinite(newCharge)||newCharge<0))||(newProfit!==null&&!Number.isFinite(newProfit))){alert(window.PCP_I18N?.t('Revisa los valores del movimiento.')||'Revisa los valores del movimiento.');return}if(x.source==='manual'){const a=get(),at=a.findIndex(y=>y.id===x.id);if(at<0)return;a[at]={...a[at],concept:concept+suffix,amount,...((a[at].kind==='personalExpense'||a[at].kind==='personal')?{customerCharge:null,profit:null}:{customerCharge:newCharge,profit:newProfit})};set(a)}else{const history=h(),item=history[Number(x.historyIndex)];if(!item)return;const qty=Math.max(1,Number(item.qty)||1);item.name=concept;item.cost=amount/qty;if(newCharge!==null){item.grossSale=newCharge/qty}else if(item.accountingType==='order'){item.grossSale=null}if(newProfit!==null){item.totalProfit=newProfit;item.profit=newProfit/qty}else if(item.accountingType==='order'){item.totalProfit=0;item.profit=0}localStorage.setItem('pcp_history',JSON.stringify(history));renderHistory()}close();render()});dialog.showModal()}
function rows(){
 const manual=get().map(x=>({...x,source:'manual'})), hiddenSales=new Set();
 // Compatibilidad con pedidos guardados antes de esta versión: une la venta asociada al gasto principal.
 manual.filter(x=>x.kind==='income'&&String(x.jobKey||'').endsWith('|sale')).forEach(sale=>{
  const baseKey=String(sale.jobKey).slice(0,-5),expense=manual.find(x=>x.kind==='orderExpense'&&x.jobKey===baseKey);
  if(expense){expense.customerCharge=Number(sale.saleDetails?.grossRevenue??sale.customerCharge??sale.amount)||0;expense.profit=Number(sale.profit)||0;expense.saleDetails=sale.saleDetails||null;hiddenSales.add(sale.id)}
 });
 const saved=h().map((x,i)=>({...x,source:'tasacion',historyIndex:i,kind:x.accountingType==='order'?'order':'personal',concept:x.name||'Impresión',amount:(Number(x.cost)||0)*(Number(x.qty)||1),client:x.accountingClient||'',date:x.date||new Date().toISOString(),revenue:x.accountingType==='order'?(Number(x.sale)||0)*(Number(x.qty)||1):0,customerCharge:x.accountingType==='order'?(Number(x.grossSale??x.sale)||0)*(Number(x.qty)||1):null,profit:x.accountingType==='order'?(Number(x.totalProfit)||((Number(x.profit)||0)*(Number(x.qty)||1))):0})).filter(x=>x.accountingIncluded!==false);
 return [...manual.filter(x=>!hiddenSales.has(x.id)),...saved].sort((a,b)=>String(b.date).localeCompare(String(a.date)));
}

function showPrinterExpenseDetail(printerName){
 const all=rows().filter(x=>accountingPrinter(x)===printerName&&(x.kind==='personal'||x.kind==='personalExpense'));
 const sums={filament:0,electricity:0,wear:0,maintenance:0,other:0,failure:0,unitemized:0};
 const items=[];
 all.forEach(x=>{let b=x.breakdown||null;if(!b&&x.source==='tasacion')b=(h()[Number(x.historyIndex)]||{}).costBreakdown||null;
 if(b){['filament','electricity','wear','maintenance','other','failure'].forEach(k=>sums[k]+=Number(b[k])||0);items.push({concept:accountingConcept(x),amount:Number(x.amount)||0,has:true});}
 else{sums.unitemized+=Number(x.amount)||0;items.push({concept:accountingConcept(x),amount:Number(x.amount)||0,has:false});}});
 const lang=(window.PCP_LANG||document.documentElement.lang||'es').slice(0,2),idx=({es:0,en:1,fr:2,de:3,it:4,pl:5})[lang]??0;
 const words={
 'Desglose de gastos propios':['Desglose de gastos propios','Own expense breakdown','Détail des dépenses propres','Aufschlüsselung eigener Ausgaben','Dettaglio spese proprie','Zestawienie wydatków własnych'],
 'Filamento':['Filamento','Filament','Filament','Filament','Filamento'],'Electricidad':['Electricidad','Electricity','Électricité','Strom','Elettricità'],
 'Amortización / desgaste':['Amortización / desgaste','Depreciation / wear','Amortissement / usure','Abschreibung / Verschleiß','Ammortamento / usura','Amortyzacja / zużycie'],
 'Mantenimiento':['Mantenimiento','Maintenance','Maintenance','Wartung','Manutenzione','Konserwacja'],
 'Mano de obra y extras':['Mano de obra y extras','Labor and extras','Main-d’œuvre et extras','Arbeitskosten und Extras','Manodopera ed extra','Robocizna i dodatki'],
 'Reserva por fallos':['Reserva por fallos','Failure reserve','Réserve pour échecs','Fehlerreserve','Riserva per errori','Rezerwa na nieudane wydruki'],
 'Gastos sin desglose guardado':['Gastos sin desglose guardado','Expenses without saved breakdown','Dépenses sans détail enregistré','Ausgaben ohne gespeicherte Aufschlüsselung','Spese senza dettaglio salvato','Wydatki bez zapisanego zestawienia'],
 'Total de gastos propios':['Total de gastos propios','Total own expenses','Total des dépenses propres','Gesamte eigene Ausgaben','Totale spese proprie','Łączne wydatki własne'],
 'Impresión':['Impresión','Print','Impression','Druck','Stampa'],'Coste':['Cost','Cost','Coût','Kosten','Costo'],
 'Detalle disponible':['Detalle disponible','Breakdown available','Détail disponible','Aufschlüsselung verfügbar','Dettaglio disponibile','Szczegóły dostępne'],
 'Desglose no guardado en este registro':['Desglose no guardado en este registro','No breakdown was saved for this entry','Aucun détail enregistré pour cette entrée','Für diesen Eintrag wurde keine Aufschlüsselung gespeichert','Nessun dettaglio salvato per questa voce','Nie zapisano zestawienia dla tego wpisu'],
 'Cerrar':['Cerrar','Close','Fermer','Schließen','Chiudi','Zamknij'],
 'No hay gastos propios registrados para esta impresora.':['No hay gastos propios registrados para esta impresora.','No own expenses recorded for this printer.','Aucune dépense propre enregistrée pour cette imprimante.','Keine eigenen Ausgaben für diesen Drucker erfasst.','Nessuna spesa propria registrata per questa stampante.','Brak zarejestrowanych wydatków własnych dla tej drukarki.'],
 'Descargar CSV':['Descargar CSV','Download CSV','Télécharger CSV','CSV herunterladen','Scarica CSV','Pobierz CSV'],
 'Descargar PDF':['Descargar PDF','Download PDF','Télécharger PDF','PDF herunterladen','Scarica PDF','Pobierz PDF'],
 'Imprimir':['Imprimir','Print','Imprimer','Drucken','Stampa','Drukuj'],
 'Categoría':['Categoría','Category','Catégorie','Kategorie','Categoria','Kategoria'],
 'Importe':['Importe','Amount','Montant','Betrag','Importo','Kwota'],
 'Desglose por impresión':['Desglose por impresión','Breakdown by print','Détail par impression','Aufschlüsselung je Druck','Dettaglio per stampa','Zestawienie kosztów wydruku'],
 'Resumen de costes':['Resumen de costes','Cost summary','Résumé des coûts','Kostenübersicht','Riepilogo costi','Podsumowanie kosztów']
 };
 const t=k=>words[k]?.[idx]||k, money=n=>eur(n,'EUR');
 const dialog=document.createElement('dialog');dialog.className='acc-edit-dialog';

 const detailRows=items.map(x=>'<tr><td>'+esc(x.concept)+'</td><td class="money">'+money(x.amount)+'</td><td><span class="acc-detail-status '+(x.has?'is-available':'is-missing')+'">'+esc(t(x.has?'Detalle disponible':'Desglose no guardado en este registro'))+'</span></td></tr>').join('');
 const summaryRows=[['Filamento',sums.filament],['Electricidad',sums.electricity],['Amortización / desgaste',sums.wear],['Mantenimiento',sums.maintenance],['Mano de obra y extras',sums.other],['Reserva por fallos',sums.failure],['Gastos sin desglose guardado',sums.unitemized]];
 const exportData={printer:printerName,items:items.map(x=>({concept:x.concept,amount:x.amount,breakdownAvailable:x.has})),summary:Object.fromEntries(summaryRows.map(([k,v])=>[t(k),v])),total:Object.values(sums).reduce((a,b)=>a+b,0),currency:'EUR'};
 const csvEscape=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
 const csv='\\uFEFF'+[[t('Desglose de gastos propios'),printerName],[],[t('Desglose por impresión'),t('Coste'),t('Detalle disponible')],...items.map(x=>[x.concept,x.amount.toFixed(2),t(x.has?'Detalle disponible':'Desglose no guardado en este registro')]),[],[t('Resumen de costes'),t('Importe')],...summaryRows.map(([k,v])=>[t(k),v.toFixed(2)]),[t('Total de gastos propios'),exportData.total.toFixed(2)]].map(row=>row.map(csvEscape).join(';')).join('\r\n');
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

function render(){
 refreshAccountingPrinterSelect();
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
 const grouped=printerTotals(all), summaryId='accPrinterSummary';let summary=document.getElementById(summaryId);if(!summary){summary=document.createElement('div');summary.id=summaryId;summary.className='acc-printer-summary';el.parentNode.insertBefore(summary,el);}
 summary.innerHTML='<h3>'+esc(accT('Resumen por impresora'))+'</h3><div class="acc-printer-cards">'+Object.entries(grouped).map(([name,t])=>'<section class="panel acc-printer-card"><div class="acc-printer-card-head"><span class="acc-printer-icon">▣</span><div><h4>'+esc(name)+'</h4><small>'+esc(accT('Resumen económico'))+'</small></div></div><div class="acc-printer-metrics"><div class="acc-printer-metric"><span>'+esc(accT('Gastos propios'))+'</span><strong>'+eur(t.personal)+' <button type="button" class="btn acc-printer-detail" data-printer-detail="'+esc(name)+'">'+esc(accT('Ver detalle'))+'</button></strong></div><div class="acc-printer-metric"><span>'+esc(accT('Gastos de pedidos'))+'</span><strong>'+eur(t.orderCost)+'</strong></div><div class="acc-printer-metric"><span>'+esc(accT('Ventas estimadas'))+'</span><strong>'+eur(t.revenue)+'</strong></div><div class="acc-printer-metric is-profit"><span>'+esc(accT('Beneficio estimado'))+'</span><strong>'+eur(t.profit)+'</strong></div></div><div class="acc-printer-total">'+esc(accT('Total de gastos'))+': <strong>'+eur(t.personal+t.orderCost)+'</strong></div></section>').join('')+'</div>';summary.querySelectorAll('[data-printer-detail]').forEach(b=>b.addEventListener('click',()=>showPrinterExpenseDetail(b.dataset.printerDetail)));const accountingSearchBar=document.querySelector('label[for="accountingSearch"]')?.closest('.list-search-bar');if(accountingSearchBar&&summary.parentNode)summary.insertAdjacentElement('afterend',accountingSearchBar);
 if(!all.length){el.className='empty';el.textContent=accT('Todavía no hay movimientos.');return}if(!visibleRows.length){el.className='empty';el.textContent=accountingSearchTerm?accT('No hay resultados para la búsqueda.'):accT('Todavía no hay movimientos.');return}el.className='';
 el.innerHTML='<div class="accounting-table-wrap"><table class="history accounting-history"><thead><tr><th>'+esc(accT('Fecha'))+'</th><th>'+esc(accT('Tipo'))+'</th><th>'+esc(accT('Impresora'))+'</th><th>'+esc(accT('Concepto'))+'</th><th>'+esc(accT('Referencia'))+'</th><th>'+esc(accT('Importe/coste'))+'</th><th>'+esc(accT('Importe cobrado'))+'</th><th>'+esc(accT('Beneficio estimado'))+'</th><th>'+esc(accT('Acciones'))+'</th></tr></thead><tbody>'+visibleRows.map(({x,i})=>{const charge=collectedAmount(x);const profitValue=(x.kind==='personalExpense'||x.kind==='personal')?null:x.profit;return '<tr><td>'+new Date(x.date).toLocaleDateString((window.PCP_LOCALE||'es-ES'))+'</td><td>'+esc(accountingType(x))+'</td><td>'+esc(accountingPrinter(x))+'</td><td>'+esc(accountingConcept(x))+'</td><td>'+esc(accountingReference(x))+'</td><td>'+eur(x.amount,x.currency)+'</td><td>'+(charge===undefined||charge===null?'—':eur(charge,x.currency))+'</td><td>'+(profitValue===undefined||profitValue===null?'—':eur(profitValue,x.currency))+'</td><td class="acc-actions"><button class="btn" data-acc-edit="'+i+'">'+esc(accT('Editar'))+'</button><button class="btn history-delete" data-acc-delete="'+i+'">'+esc(accT('Eliminar'))+'</button></td></tr>'}).join('')+'</tbody></table></div>';
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
 const lang=(window.PCP_LANG||document.documentElement.lang||'es').slice(0,2),idx=({es:0,en:1,fr:2,de:3,it:4,pl:5})[lang]??0;
 const titles=['No se pudo guardar el gasto','Expense could not be saved','Impossible d’enregistrer la dépense','Ausgabe konnte nicht gespeichert werden','Impossibile salvare la spesa','Nie udało się zapisać wydatku'];
 const rows=allocation.message.split('\\n').slice(1).map(line=>({name:line,detail:'',amount:''}));
 showFilamentNotice(titles[idx],allocation.message.split('\\n')[0],rows,'error');return
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
const expPdf=$('accExportPdfBtn');if(expPdf)expPdf.addEventListener('click',()=>{const data=rows();if(!data.length){alert(accT('No hay movimientos para exportar.'));return}const t=totals(data),kind=x=>x.source==='manual'?({'personalExpense':'Gasto propio','orderExpense':'Gasto de pedido','income':'Ingreso cobrado'}[x.kind]||x.kind):(x.kind==='personal'?'Impresión personal':'Pedido de venta');const table=data.map(x=>{const charge=x.kind==='income'?(x.customerCharge??x.saleDetails?.grossRevenue??x.amount):x.customerCharge;const p=(x.kind==='personalExpense'||x.kind==='personal')?null:x.profit;return '<tr><td>'+esc(new Date(x.date).toLocaleDateString((window.PCP_LOCALE||'es-ES')))+'</td><td>'+esc(kind(x))+'</td><td>'+esc(x.concept||x.name||'Impresión')+'</td><td>'+esc(x.notes||x.client||'—')+'</td><td>'+eur(x.amount,x.currency)+'</td><td>'+(charge==null?'—':eur(charge,x.currency))+'</td><td>'+(p==null?'—':eur(p,x.currency))+'</td></tr>'}).join('');const w=window.open('','_blank');if(!w){alert(accT('El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.'));return}w.document.write('<!doctype html><html lang="es" translate="no"><head><meta charset="utf-8"><title>Contabilidad Print Cost & Profit</title><link rel="stylesheet" href="css/app-13.css"></head><body><h1>'+window.PCP_I18N.t('Contabilidad · Print Cost & Profit')+'</h1><div class="date">'+window.PCP_I18N.t('Informe generado el')+' '+new Date().toLocaleString((window.PCP_LOCALE||'es-ES'))+'</div><div class="summary"><div class="card">'+window.PCP_I18N.t('Gastos propios')+'<strong>'+eur(t.personal)+'</strong></div><div class="card">'+window.PCP_I18N.t('Gastos de pedidos')+'<strong>'+eur(t.orderCost)+'</strong></div><div class="card">'+window.PCP_I18N.t('Ventas estimadas')+'<strong>'+eur(t.revenue)+'</strong></div><div class="card">'+window.PCP_I18N.t('Beneficio estimado')+'<strong>'+eur(t.profit)+'</strong></div></div><table><thead><tr><th>'+window.PCP_I18N.t('Fecha')+'</th><th>'+window.PCP_I18N.t('Tipo')+'</th><th>'+window.PCP_I18N.t('Concepto')+'</th><th>'+window.PCP_I18N.t('Referencia')+'</th><th>'+window.PCP_I18N.t('Importe / coste')+'</th><th>'+window.PCP_I18N.t('Importe cobrado')+'</th><th>'+window.PCP_I18N.t('Beneficio estimado')+'</th></tr></thead><tbody>'+table+'</tbody></table><scr'+'ipt>window.onload=()=>setTimeout(()=>window.print(),250)<\/scr'+'ipt></body></html>');w.document.close()});
const date=$('accDate');if(date)date.value=new Date().toISOString().slice(0,10);document.querySelectorAll('[data-tab="accountingView"]').forEach(b=>b.addEventListener('click',render));window.addEventListener('pcp-external-storage-sync',()=>{if(document.getElementById('accountingView')?.classList.contains('active'))render()});document.addEventListener('change',e=>{if(e.target?.id==='pcpLanguage')setTimeout(render,0)});const oldSave=$('saveBtn');if(oldSave)oldSave.addEventListener('click',()=>setTimeout(render,30));const accSearchInput=$('accountingSearch'),accSearchButton=$('accountingSearchBtn'),accSearchClear=$('accountingSearchClear');if(accSearchButton)accSearchButton.addEventListener('click',()=>{accountingSearchTerm=String(accSearchInput?.value||'').trim().toLocaleLowerCase();render()});if(accSearchInput)accSearchInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();accSearchButton?.click()}});if(accSearchClear)accSearchClear.addEventListener('click',()=>{if(accSearchInput)accSearchInput.value='';accountingSearchTerm='';render()});
render();setTimeout(render,0);
})();
