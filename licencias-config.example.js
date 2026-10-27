/* Ejemplo público: sin secretos. La clave JWK es PÚBLICA, nunca una clave privada.
 * El servidor privado deberá emitir offlineGrant firmado con RS256 y contrato del servicio de licencias privado.
 * No activar hasta conectar y probar la API real.
 */
window.PCP_LICENSE_CONFIG = {
  enabled: false,
  apiBaseUrl: '',
  appId: 'print-cost-profit',
  timeoutMs: 8000,
  offlineGraceHours: 72,
  publicKeyJwk: null
};
