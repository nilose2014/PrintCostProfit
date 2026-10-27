
(function(){
  function setup(){
    const panel=document.getElementById('machinesPanel');
    const options=document.getElementById('programOptionsView');
    if(panel&&options&&panel.parentElement!==options){
      const heading=options.querySelector('section.panel');
      if(heading&&heading.parentElement===options) heading.insertAdjacentElement('afterend',panel); else options.appendChild(panel);
    }
    const sel=document.getElementById('profileName');
    if(sel){
      const u1='Snapmaker U1';const oldU1='Snapmaker U1 · perfil habitual';try{if(localStorage.getItem('pcp_profile_name')===oldU1){localStorage.setItem('pcp_profile_name',u1);const oldMaint=document.getElementById('maintenanceHour');if(oldMaint&&(oldMaint.value==='0.18'||oldMaint.value==='0.10'))oldMaint.value='0';}}catch(e){}
      if(!localStorage.getItem('pcp_profile_name') && (!sel.value || sel.value==='')) sel.value=u1;
      if(!sel.value) sel.value=u1;
      const chosen=sel.value||u1;
      const nameInput=document.getElementById('machineName');
      // If there is no saved profile yet, use the requested U1 defaults for the calculator.
      if(chosen===u1 && !(typeof getMachines==='function' && getMachines().some(m=>m.name===u1))){
        const p=typeof MACHINE_PRESETS!=='undefined'?MACHINE_PRESETS.find(x=>x.brand==='Snapmaker'&&x.model==='U1'):null, hours=p?.lifetimeHours||10000;const w=document.getElementById('watts'), wear=document.getElementById('wear'), maint=document.getElementById('maintenanceHour');
        if(w && (!w.value || w.value==='0')) w.value=String(p?.watts||127);
        if(wear && (!wear.value || wear.value==='0')) wear.value=p?.purchasePrice?(p.purchasePrice/hours).toFixed(4):'0';
        if(maint && (!maint.value || maint.value==='0' || maint.value==='0.18' || maint.value==='0.10')) maint.value=String(p?.maintenance||0);
      }
      sel.addEventListener('change',()=>{try{localStorage.setItem('pcp_profile_name',sel.value||u1)}catch(e){}});
    }
    const summary=document.getElementById('spoolInventorySummary');
    if(summary){summary.style.marginTop='16px';summary.style.marginBottom='22px';summary.style.display='block';}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
