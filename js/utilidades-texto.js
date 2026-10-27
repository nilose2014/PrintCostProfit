(()=>{'use strict';
const normalizeOrcaText=value=>{return String(value??'').replace(/integraciÃ³n/g,'integración').replace(/integraciÃƒÂ³n/g,'integración').replace(/integraciÃƒÂ³n/g,'integración').replace(/Ã‚Â·/g,'·').replace(/Â·/g,'·').replace(/ÃƒÂ³/g,'ó').replace(/Ã³/g,'ó').replace(/ÃƒÂ­/g,'í').replace(/Ã­/g,'í').replace(/ÃƒÂ±/g,'ñ').replace(/Ã±/g,'ñ');};
const normalizeHistoryNote=value=>{const raw=String(value??'').replace(/seg[·ÀÃ]n/gi,'según').replace(/Impuestos desglosados seg[·ÀÃ]n el perfil configurable/gi,'Impuestos desglosados según el perfil configurable');return window.PCP_I18N?.t(raw)||raw};
window.PCPTextUtils=Object.freeze({normalizeOrcaText,normalizeHistoryNote});
})();
