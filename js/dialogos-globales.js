(function(){
'use strict';
const words={
 close:{es:'Aceptar',en:'OK',fr:'OK',de:'OK',it:'OK',pl:'OK'},
 title:{es:'Aviso',en:'Notice',fr:'Information',de:'Hinweis',it:'Avviso',pl:'Informacja'}
};
function lang(){const raw=(window.PCP_LANG||document.documentElement.lang||document.querySelector('[data-language]')?.value||'es').slice(0,2).toLowerCase();return ['es','en','fr','de','it','pl'].includes(raw)?raw:'es'}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function styledAlert(message){
 const l=lang(),old=document.getElementById('pcp-global-dialog');if(old)old.remove();
 const overlay=document.createElement('div');overlay.id='pcp-global-dialog';overlay.style.cssText='position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(3,8,20,.72);backdrop-filter:blur(6px)';
 const panel=document.createElement('section');panel.setAttribute('role','alertdialog');panel.setAttribute('aria-modal','true');panel.style.cssText='width:min(560px,100%);max-height:min(78vh,720px);overflow:auto;border:1px solid #38516c;border-radius:18px;background:#121d31;color:#edf4ff;box-shadow:0 24px 80px rgba(0,0,0,.48);padding:24px;font:14px/1.55 system-ui,-apple-system,Segoe UI,sans-serif';
 const msg=String(message??'');const isError=/error|failed|cannot|could not|no se puede|imposible|fehler|errore|stock|inventario/i.test(msg);
 const heading=words.title[l];
 panel.innerHTML='<div style="display:flex;gap:14px;align-items:flex-start"><div aria-hidden="true" style="width:42px;height:42px;flex:0 0 42px;border-radius:13px;background:'+(isError?'#50351f':'#163f3b')+';display:grid;place-items:center;font-size:22px">'+(isError?'⚠':'✓')+'</div><div style="min-width:0;flex:1"><div style="font-size:19px;font-weight:750;letter-spacing:-.3px;margin:2px 0 10px">'+esc(heading)+'</div><div style="color:#c4d0e0;white-space:pre-wrap;overflow-wrap:anywhere">'+esc(msg)+'</div></div></div><div style="display:flex;justify-content:flex-end;margin-top:22px"><button type="button" data-pcp-close style="border:0;border-radius:10px;background:#63d6c3;color:#08251f;font-weight:750;padding:10px 20px;cursor:pointer">'+esc(words.close[l])+'</button></div>';
 overlay.appendChild(panel);document.body.appendChild(overlay);
 const btn=panel.querySelector('[data-pcp-close]'),close=()=>{overlay.remove();document.removeEventListener('keydown',key)};
 const key=e=>{if(e.key==='Escape'){close()}};
 btn.addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',key);btn.focus();
}
window.alert=styledAlert;


window.PCPNotice=function(message){
 const l=lang(),raw=String(message??'');
 const exact={
 'Cliente guardado en este navegador.':{
 es:'Cliente guardado. Ya está disponible en presupuestos, facturas y pedidos.',en:'Customer saved. It is now available in quotes, invoices, and orders.',fr:'Client enregistré. Il est maintenant disponible dans les devis, factures et commandes.',de:'Kunde gespeichert. Er ist jetzt in Angeboten, Rechnungen und Aufträgen verfügbar.',it:'Cliente salvato. Ora è disponibile in preventivi, fatture e ordini.',pl:'Klient został zapisany. Jest teraz dostępny w ofertach, fakturach i zamówieniach.'},
 'Cliente eliminado de la agenda. Los documentos históricos se conservan.':{
 es:'Cliente eliminado de la agenda. Los documentos históricos se conservan.',en:'Customer removed from the address book. Historical documents are preserved.',fr:'Client supprimé du répertoire. Les documents historiques sont conservés.',de:'Kunde aus dem Adressbuch gelöscht. Historische Dokumente bleiben erhalten.',it:'Cliente eliminato dalla rubrica. I documenti storici vengono conservati.',pl:'Klient został usunięty z książki adresowej. Dokumenty historyczne pozostają zachowane.'},
 'Datos del vendedor guardados en la base de datos SQLite de este PC.':{
 es:'Datos del vendedor guardados en la base de datos SQLite de este PC.',en:'Seller details saved to this PC’s SQLite database.',fr:'Coordonnées du vendeur enregistrées dans la base SQLite de ce PC.',de:'Verkäuferdaten wurden in der SQLite-Datenbank dieses PCs gespeichert.',it:'Dati del venditore salvati nel database SQLite di questo PC.',pl:'Dane sprzedawcy zapisano w bazie danych SQLite na tym komputerze.'},
 'Moneda e impuestos guardados.':{
 es:'Moneda e impuestos guardados.',en:'Currency and tax settings saved.',fr:'Devise et taxes enregistrées.',de:'Währung und Steuern gespeichert.',it:'Valuta e imposte salvate.',pl:'Zapisano walutę i ustawienia podatków.'},
 'Presupuesto guardado. El cliente está disponible en la pestaña «Clientes».':{
 es:'Presupuesto guardado. El cliente está disponible en la pestaña «Clientes».',en:'Quote saved. The customer is available in the “Customers” tab.',fr:'Devis enregistré. Le client est disponible dans l’onglet « Clients ».',de:'Angebot gespeichert. Der Kunde ist im Tab „Kunden“ verfügbar.',it:'Preventivo salvato. Il cliente è disponibile nella scheda «Clienti».',pl:'Zapisano ofertę. Klient jest dostępny w zakładce „Klienci”.'},
 'Presupuesto guardado.':{es:'Presupuesto guardado.',en:'Quote saved.',fr:'Devis enregistré.',de:'Angebot gespeichert.',it:'Preventivo salvato.',pl:'Zapisano ofertę.'},
 'Cálculo guardado en este navegador.':{es:'Tasación guardada correctamente. Puedes cargarla desde el historial.',en:'Estimate saved successfully. You can load it from the history.',fr:'Estimation enregistrée. Vous pouvez la charger depuis l’historique.',de:'Kalkulation gespeichert. Sie können sie aus dem Verlauf laden.',it:'Stima salvata correttamente. Puoi caricarla dalla cronologia.',pl:'Wycena została zapisana. Możesz ją wczytać z historii.'},
 'Cliente guardado en este navegador.':{es:'Cliente guardado. Ya está disponible en presupuestos, facturas y pedidos.',en:'Customer saved. It is now available in quotes, invoices, and orders.',fr:'Client enregistré. Il est maintenant disponible dans les devis, factures et commandes.',de:'Kunde gespeichert. Er ist jetzt in Angeboten, Rechnungen und Aufträgen verfügbar.',it:'Cliente salvato. Ora è disponibile in preventivi, fatture e ordini.'},
 'Cliente borrado.':{es:'Cliente eliminado de la agenda. Los documentos históricos se conservan.',en:'Customer removed from the address book. Historical documents are preserved.',fr:'Client supprimé du répertoire. Les documents historiques sont conservés.',de:'Kunde aus dem Adressbuch gelöscht. Historische Dokumente bleiben erhalten.',it:'Cliente eliminato dalla rubrica. I documenti storici vengono conservati.',pl:'Klient został usunięty z książki adresowej. Dokumenty historyczne pozostają zachowane.'},
 'Presupuesto guardado. El cliente está disponible en la pestaña «Clientes».':{es:'Presupuesto guardado. El cliente está disponible en la pestaña «Clientes».',en:'Quote saved. The customer is available in the “Customers” tab.',fr:'Devis enregistré. Le client est disponible dans l’onglet « Clients ».',de:'Angebot gespeichert. Der Kunde ist im Tab „Kunden“ verfügbar.',it:'Preventivo salvato. Il cliente è disponibile nella scheda «Clienti».'}
 };
 const match=exact[raw];
 if(match){styledAlert(match[l]||match.es);return;}
 // Reutiliza el diccionario central para no mantener otra copia de cada traducción.
 const centralKey=raw.endsWith('.')?raw.slice(0,-1):raw;
 const translated=window.PCP_I18N?.t(centralKey);
 styledAlert(translated&&translated!==centralKey?(raw.endsWith('.')&&!/[.!?…]$/.test(translated)?translated+'.':translated):raw);
};

window.PCPConfirm=function(message,options={}){
 return new Promise(resolve=>{
  const l=lang(),old=document.getElementById('pcp-global-dialog');if(old)old.remove();
  const overlay=document.createElement('div');overlay.id='pcp-global-dialog';overlay.style.cssText='position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(3,8,20,.72);backdrop-filter:blur(6px)';
  const panel=document.createElement('section');panel.setAttribute('role','alertdialog');panel.setAttribute('aria-modal','true');panel.style.cssText='width:min(560px,100%);max-height:min(78vh,720px);overflow:auto;border:1px solid #38516c;border-radius:18px;background:#121d31;color:#edf4ff;box-shadow:0 24px 80px rgba(0,0,0,.48);padding:24px;font:14px/1.55 system-ui,-apple-system,Segoe UI,sans-serif';
  const labels={es:['¿Confirmar acción?','Cancelar','Continuar'],en:['Confirm action?','Cancel','Continue'],fr:['Confirmer l’action ?','Annuler','Continuer'],de:['Aktion bestätigen?','Abbrechen','Fortfahren'],it:['Confermare l’azione?','Annulla','Continua'],pl:['Potwierdzić działanie?','Anuluj','Kontynuuj']}[l]||['¿Confirmar acción?','Cancelar','Continuar'];
  panel.innerHTML='<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:42px;height:42px;flex:0 0 42px;border-radius:13px;background:#50351f;display:grid;place-items:center;font-size:22px">?</div><div style="min-width:0;flex:1"><div style="font-size:19px;font-weight:750;margin:2px 0 10px">'+esc(labels[0])+'</div><div style="color:#c4d0e0;white-space:pre-wrap;overflow-wrap:anywhere">'+esc(message)+'</div></div></div><div style="display:flex;justify-content:flex-end;gap:10px;margin-top:22px"><button type="button" data-pcp-cancel style="border:1px solid #3b4e68;border-radius:10px;background:#24334a;color:#edf4ff;font-weight:700;padding:10px 16px;cursor:pointer">'+esc(labels[1])+'</button><button type="button" data-pcp-ok style="border:0;border-radius:10px;background:#63d6c3;color:#08251f;font-weight:750;padding:10px 18px;cursor:pointer">'+esc(labels[2])+'</button></div>';
  overlay.appendChild(panel);document.body.appendChild(overlay);
  const finish=value=>{overlay.remove();document.removeEventListener('keydown',key);resolve(value)};
  const key=e=>{if(e.key==='Escape'){finish(false)}};
  panel.querySelector('[data-pcp-cancel]').addEventListener('click',()=>finish(false));
  panel.querySelector('[data-pcp-ok]').addEventListener('click',()=>finish(true));
  overlay.addEventListener('click',e=>{if(e.target===overlay)finish(false)});
  document.addEventListener('keydown',key);panel.querySelector('[data-pcp-ok]').focus();
 });
};

})();
