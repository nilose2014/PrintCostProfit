@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
set "PCP_VERSION=desconocida"
if exist "%~dp0VERSION" set /p PCP_VERSION=<"%~dp0VERSION"
title Print Cost ^& Profit v%PCP_VERSION% - Diagnostico de version
echo ============================================================
echo PRINT COST ^& PROFIT v%PCP_VERSION% - DIAGNOSTICO DE VERSION
echo ============================================================
echo.
echo Version central: %PCP_VERSION%
echo.
if exist "%~dp0Print_Cost_Profit.html" (
  echo [OK] HTML principal encontrado
  findstr /C:"Print Cost &amp; Profit · Versión %PCP_VERSION%</footer>" "%~dp0Print_Cost_Profit.html" >nul
  if errorlevel 1 (
    echo [AVISO] El HTML no contiene el mismo texto de version que VERSION.
  ) else (
    echo [OK] El pie de pagina contiene la version central.
  )
) else (
  echo [ERROR] Falta Print_Cost_Profit.html
)
if exist "%~dp0Servidor_Panel_U1.ps1" (
  echo [OK] Script del servidor local encontrado
  findstr /C:"$VersionFile" "%~dp0Servidor_Panel_U1.ps1" >nul
  if errorlevel 1 (
    echo [AVISO] El script del servidor podria no leer VERSION.
  ) else (
    echo [OK] El servidor esta preparado para leer VERSION.
  )
) else (
  echo [AVISO] No se encuentra Servidor_Panel_U1.ps1 en la carpeta raiz
)
if exist "%~dp0Print_Cost_Profit_Integrado.html" (
  echo [AVISO] Existe una copia integrada temporal. El BAT manual deberia quitarla al iniciar.
) else (
  echo [OK] No hay copia integrada temporal
)
echo.
echo Diagnostico de solo lectura. No se ha modificado ni eliminado ningun archivo.
pause
