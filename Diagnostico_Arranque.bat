@echo off
setlocal
cd /d "%~dp0"
echo ============================================
echo Print Cost ^& Profit - Diagnostico de arranque
echo ============================================
echo.
if exist "Print_Cost_Profit.html" (
  echo [OK] HTML principal encontrado
) else (
  echo [ERROR] Falta Print_Cost_Profit.html
)
if exist "Integracion_Orca_Postprocesado.bat" (
  echo [OK] BAT de integracion encontrado
) else (
  echo [ERROR] Falta Integracion_Orca_Postprocesado.bat
)
if exist "Servidor_Panel_U1.ps1" (
  echo [OK] Servidor_Panel_U1.ps1 encontrado
) else (
  echo [AVISO] No se encuentra Servidor_Panel_U1.ps1 en la carpeta raiz
)
if exist "Print_Cost_Profit_Integrado.html" (
  echo [AVISO] Existe una copia integrada temporal.
  echo El BAT principal la elimina al arrancar manualmente.
) else (
  echo [OK] No hay copia integrada temporal antigua
)
echo.
echo Este diagnostico solo comprueba archivos. No modifica ni elimina nada.
pause
