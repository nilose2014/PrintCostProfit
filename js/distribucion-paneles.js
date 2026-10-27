
/* Colocación adaptable del bloque de acciones: un color a la izquierda; varios a la derecha. */
(function(){
  function initCalculateDockLayout(){
    const dock=document.querySelector('.calculate-dock');
    const anchor=document.getElementById('calculateDockAnchor');
    const rows=document.getElementById('filamentRows');
    const main=document.querySelector('.grid > main');
    const aside=document.querySelector('.grid > aside');
    if(!dock||!anchor||!rows||!main||!aside)return;
    const firstAsidePanel=aside.querySelector(':scope > section');
    function update(){
      const count=rows.querySelectorAll('.filament-row').length;
      const multi=count>1;
      if(multi){
        /* En multicolor, colocar el bloque al final de la columna derecha,
           después de todos sus paneles, para que no quede a media altura. */
        if(dock.parentElement!==aside || dock!==aside.lastElementChild){
          aside.appendChild(dock);
        }
        dock.classList.add('calculate-dock-multicolor');
      }else{
        if(dock.parentElement!==main) anchor.parentNode.insertBefore(dock,anchor.nextSibling);
        dock.classList.remove('calculate-dock-multicolor');
      }
    }
    const observer=new MutationObserver(update);
    observer.observe(rows,{childList:true,subtree:true});
    document.addEventListener('change',function(e){if(e.target && e.target.closest('#filamentRows'))update();},true);
    window.addEventListener('resize',update);
    update();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initCalculateDockLayout);else initCalculateDockLayout();
})();
