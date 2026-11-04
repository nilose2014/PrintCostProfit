(function(){
'use strict';
function t(key){return window.PCP_I18N&&typeof window.PCP_I18N.t==='function'?window.PCP_I18N.t(key):key;}
function lang(){const raw=(window.PCP_LANG||document.documentElement.lang||document.querySelector('[data-language]')?.value||'es').slice(0,2).toLowerCase();return ['es','en','fr','de','it','pl','ar','zh'].includes(raw)?raw:'es'}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function styledAlert(message){
 const old=document.getElementById('pcp-global-dialog');if(old)old.remove();
 const overlay=document.createElement('div');overlay.id='pcp-global-dialog';overlay.style.cssText='position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(3,8,20,.72);backdrop-filter:blur(6px)';
 const panel=document.createElement('section');panel.setAttribute('role','alertdialog');panel.setAttribute('aria-modal','true');panel.style.cssText='width:min(560px,100%);max-height:min(78vh,720px);overflow:auto;border:1px solid #38516c;border-radius:18px;background:#121d31;color:#edf4ff;box-shadow:0 24px 80px rgba(0,0,0,.48);padding:24px;font:14px/1.55 system-ui,-apple-system,Segoe UI,sans-serif';
 const msg=String(message??'');const isError=/error|failed|cannot|could not|no se puede|imposible|fehler|errore|stock|inventario/i.test(msg);
 const heading=t('Aviso');
 panel.innerHTML='<div style="display:flex;gap:14px;align-items:flex-start"><div aria-hidden="true" style="width:42px;height:42px;flex:0 0 42px;border-radius:13px;background:'+(isError?'#50351f':'#163f3b')+';display:grid;place-items:center;font-size:22px">'+(isError?'⚠':'✓')+'</div><div style="min-width:0;flex:1"><div style="font-size:19px;font-weight:750;letter-spacing:-.3px;margin:2px 0 10px">'+esc(heading)+'</div><div style="color:#c4d0e0;white-space:pre-wrap;overflow-wrap:anywhere">'+esc(msg)+'</div></div></div><div style="display:flex;justify-content:flex-end;margin-top:22px"><button type="button" data-pcp-close style="border:0;border-radius:10px;background:#63d6c3;color:#08251f;font-weight:750;padding:10px 20px;cursor:pointer">'+esc(t('Aceptar'))+'</button></div>';
 overlay.appendChild(panel);document.body.appendChild(overlay);
 const btn=panel.querySelector('[data-pcp-close]'),close=()=>{overlay.remove();document.removeEventListener('keydown',key)};
 const key=e=>{if(e.key==='Escape'){close()}};
 btn.addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',key);btn.focus();
}
window.alert=styledAlert;


window.PCPNotice=function(message){
 const raw=String(message??'');
 const direct=window.PCP_I18N?.t(raw);
 if(direct&&direct!==raw){styledAlert(direct);return;}
 const key=raw.endsWith('.')?raw.slice(0,-1):raw;
 const translated=window.PCP_I18N?.t(key);
 styledAlert(translated&&translated!==key?(raw.endsWith('.')&&!/[.!?…]$/.test(translated)?translated+'.':translated):raw);
};

window.PCPConfirm=function(message,options={}){
 return new Promise(resolve=>{
  const old=document.getElementById('pcp-global-dialog');if(old)old.remove();
  const overlay=document.createElement('div');overlay.id='pcp-global-dialog';overlay.style.cssText='position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(3,8,20,.72);backdrop-filter:blur(6px)';
  const panel=document.createElement('section');panel.setAttribute('role','alertdialog');panel.setAttribute('aria-modal','true');panel.style.cssText='width:min(560px,100%);max-height:min(78vh,720px);overflow:auto;border:1px solid #38516c;border-radius:18px;background:#121d31;color:#edf4ff;box-shadow:0 24px 80px rgba(0,0,0,.48);padding:24px;font:14px/1.55 system-ui,-apple-system,Segoe UI,sans-serif';
  const labels=[t('¿Confirmar acción?'),t('Cancelar'),t('Continuar')];
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
