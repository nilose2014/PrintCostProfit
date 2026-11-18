/* PCP 2.0.274 — evita que una posición horizontal residual deje fuera
   el logotipo, el menú lateral o los extremos de la aplicación. */
(() => {
  'use strict';
  const resetHorizontalOffset = () => {
    try {
      if (document.documentElement) document.documentElement.scrollLeft = 0;
      if (document.body) document.body.scrollLeft = 0;
      if (window.scrollX) window.scrollTo({ left: 0, top: window.scrollY, behavior: 'instant' });
    } catch (_) {}
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', resetHorizontalOffset, { once:true });
  } else {
    resetHorizontalOffset();
  }
  window.addEventListener('load', resetHorizontalOffset, { once:true });
  window.addEventListener('resize', resetHorizontalOffset, { passive:true });
})();
