/* Print Cost & Profit v1.554 — sesión persistente de Firebase y consulta de licencia.
 * Usa Firebase Authentication y la callable getMyLicense del proyecto privado.
 * No necesita una API REST propia. No incluir secretos ni claves privadas aquí.
 */
(function (global) {
  'use strict';
  const FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  };
  let auth = null, getLicenseCallable = null, firebaseReady = null, authStateReady = null, authModRef = null;
  let lastLicense = null;
  const SESSION_KEY = 'pcp.firebase.license.last.v1';
  function t(s) { return global.PCP_I18N && typeof global.PCP_I18N.t === 'function' ? global.PCP_I18N.t(s) : s; }
  function readCache() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch (_) { return null; } }
  function writeCache(value) { try { localStorage.setItem(SESSION_KEY, JSON.stringify(value)); } catch (_) {} }
  function statusLabel(license) {
    const status = String(license && license.status || 'inactive').toLowerCase();
    const plan = String(license && license.plan || 'free').toLowerCase();
    const planText = plan === 'pro' ? t('Licencia Pro') : t('Licencia Gratis');
    const statusText = ({active:t('Activa'),trial:t('En prueba'),manual:t('Activada manualmente'),inactive:t('Sin licencia Pro activa'),expired:t('Caducada')})[status] || status;
    return planText + ' · ' + statusText;
  }
  async function initFirebase() {
    if (firebaseReady) return firebaseReady;
    firebaseReady = (async () => {
      const [appMod, authMod, fnMod] = await Promise.all([
        import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js'),
        import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js'),
        import('https://www.gstatic.com/firebasejs/11.10.0/firebase-functions.js')
      ]);
      const app = appMod.getApps().find(a => a.name === 'print-cost-profit') || appMod.initializeApp(FIREBASE_CONFIG, 'print-cost-profit');
      // Inicializa Auth con persistencia local explícita; IndexedDB primero y
      // localStorage como alternativa para instalaciones donde IndexedDB no esté disponible.
      try {
        auth = authMod.getAuth(app);
        await authMod.setPersistence(auth, authMod.indexedDBLocalPersistence || authMod.browserLocalPersistence);
      } catch (persistenceError) {
        auth = authMod.getAuth(app);
        await authMod.setPersistence(auth, authMod.browserLocalPersistence);
      }
      authModRef = authMod;
      // Espera el primer estado de Firebase en cada arranque antes de habilitar Pro.
      authStateReady = new Promise(resolve => {
        let unsubscribe = null;
        unsubscribe = authMod.onAuthStateChanged(auth, user => {
          if (unsubscribe) unsubscribe();
          resolve(user || null);
        }, () => resolve(null));
      });
      await authStateReady;
      const functions = fnMod.getFunctions(app, 'europe-southwest1');
      getLicenseCallable = fnMod.httpsCallable(functions, 'getMyLicense');
      return {authMod, fnMod, app};
    })();
    return firebaseReady;
  }
  async function login(email, password) {
    if (!email || !password) return {ok:false,status:'missing_credentials',message:t('Introduce tu correo electrónico y contraseña.')};
    try {
      const mods = await initFirebase();
      const credential = await mods.authMod.signInWithEmailAndPassword(auth, String(email).trim(), String(password));
      await mods.authMod.reload(credential.user);
      const user = auth.currentUser || credential.user;
      if (!user.emailVerified) {
        try { await mods.authMod.sendEmailVerification(user); } catch (_) {}
        await mods.authMod.signOut(auth);
        return {ok:false,status:'email_not_verified',message:t('Debes verificar tu correo electrónico antes de consultar la licencia. Te hemos enviado un enlace de verificación.')};
      }
      const license = await fetchLicense();
      return {ok:true,status:'signed_in',data:{user:{uid:user.uid,email:user.email},license}};
    } catch (e) {
      const code = e && e.code || '';
      const messages = {
        'auth/invalid-credential':t('Correo o contraseña incorrectos.'),
        'auth/invalid-email':t('Introduce un correo electrónico válido.'),
        'auth/too-many-requests':t('Demasiados intentos. Espera un poco y vuelve a intentarlo.'),
        'auth/network-request-failed':t('No se pudo conectar con la web de licencias.'),
        'functions/unauthenticated':t('La sesión no es válida. Inicia sesión de nuevo.'),
        'functions/failed-precondition':t('Verifica tu correo electrónico antes de consultar la licencia.'),
        'functions/unavailable':t('El servicio de licencias no está disponible en este momento.')
      };
      return {ok:false,status:'login_error',message:messages[code] || (e && e.message) || t('No se pudo iniciar sesión. Comprueba tus datos y la conexión.')};
    }
  }
  async function fetchLicense() {
    await initFirebase();
    if (!auth.currentUser) throw new Error(t('Inicia sesión para consultar la licencia.'));
    await auth.currentUser.getIdToken(true);
    const result = await getLicenseCallable();
    const license = result && result.data ? result.data : {plan:'free',status:'inactive',proEnabled:false,expiresAt:null};
    lastLicense = license;
    writeCache({license, checkedAt:Date.now(), email:auth.currentUser.email || null});
    return license;
  }
  async function refresh() {
    try {
      await initFirebase();
      if (authStateReady) await authStateReady;
      if (!auth.currentUser) return {ok:false,status:'signed_out',message:t('Inicia sesión para consultar la licencia.')};
      if (!auth.currentUser.emailVerified) return {ok:false,status:'email_not_verified',message:t('Debes verificar tu correo electrónico antes de consultar la licencia.')};
      const license = await fetchLicense();
      return {ok:true,status:'license_loaded',mode:'online',data:{user:{uid:auth.currentUser.uid,email:auth.currentUser.email},license},message:statusLabel(license)};
    } catch (e) {
      return {ok:false,status:'license_check_failed',mode:'offline',message:(e && e.message) || t('No se pudo consultar la licencia en la web.')};
    }
  }
  async function getStatus() {
    const result = await refresh();
    if (result.ok) return result;
    const cached = readCache();
    if (cached && cached.license) return {ok:true,status:'cached_license',mode:'offline',data:{user:{email:cached.email || null},license:cached.license},checkedAt:cached.checkedAt,message:t('No hay conexión. Se muestra la última licencia consultada; vuelve a conectarte para validarla.')};
    return result;
  }
  async function logout() {
    try { await initFirebase(); if (auth && auth.currentUser) { const m = authModRef || await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js'); await m.signOut(auth); } } catch (_) {}
    lastLicense = null;
    try { localStorage.removeItem(SESSION_KEY); } catch (_) {}
    return {ok:true,status:'signed_out'};
  }
  function getConfig() {
    const cfg = global.PCP_LICENSE_CONFIG || {};
    return {
      enabled: cfg.enabled === true,
      webUrl: cfg.webUrl || 'https://print-cost-profit-web.web.app/',
      appId: cfg.appId || 'print-cost-profit',
      offlineGraceHours: Number(cfg.offlineGraceHours) || 72
    };
  }
  global.PCP_LICENSES = Object.freeze({version:'1.560',getConfig,login,logout,getStatus,refresh,isSignedIn:()=>!!(auth && auth.currentUser && auth.currentUser.emailVerified),isConfigured:()=>true,initFirebase});
  // Inicializar pronto para que Firebase restaure la sesión persistente al arrancar.
  initFirebase().catch(() => {});
})(window);
