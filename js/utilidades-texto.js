(()=>{'use strict';
const normalizeOrcaText=value=>{return String(value??'').replace(/integraciÃ³n/g,'integración').replace(/integraciÃƒÂ³n/g,'integración').replace(/integraciÃƒÂ³n/g,'integración').replace(/Ã‚Â·/g,'·').replace(/Â·/g,'·').replace(/ÃƒÂ³/g,'ó').replace(/Ã³/g,'ó').replace(/ÃƒÂ­/g,'í').replace(/Ã­/g,'í').replace(/ÃƒÂ±/g,'ñ').replace(/Ã±/g,'ñ');};
const normalizeHistoryNote=value=>{
 const raw=String(value??'').replace(/seg[·ÀÃ]n/gi,'según').replace(/Impuestos desglosados seg[·ÀÃ]n el perfil configurable/gi,'Impuestos desglosados según el perfil configurable');
 const i18n=window.PCP_I18N;
 if(!i18n)return raw;
 const dictionary=i18n.dictionary||{};
 // Resolve either the Spanish source or any already-rendered translation back to
 // the one canonical key, so changing language never leaves this note in Spanish.
 for(const [key,translations] of Object.entries(dictionary)){
  if(key===raw||(Array.isArray(translations)&&translations.includes(raw)))return i18n.t(key);
 }
 return i18n.t(raw)||raw;
};
const refreshHistoryNoteField=()=>{
 const field=document.getElementById('jobNotes');
 if(!field)return;
 const translated=normalizeHistoryNote(field.value);
 if(translated!==field.value)field.value=translated;
};
window.addEventListener('pcp-language-changed',refreshHistoryNoteField);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refreshHistoryNoteField,{once:true});
else refreshHistoryNoteField();
window.PCPTextUtils=Object.freeze({normalizeOrcaText,normalizeHistoryNote});
})();
