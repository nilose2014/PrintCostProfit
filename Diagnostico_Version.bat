@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
set "PCP_VERSION=desconocida"
if exist "%~dp0VERSION" set /p PCP_VERSION=<"%~dp0VERSION"
title Print Cost ^& Profit v%PCP_VERSION% - Diagnostico de version
echo ============================================================
echo PRINT COST ^& PROFIT v%PCP_VERSION% - DIAGNOSTICO
echo ============================================================
echo.
echo Version central: %PCP_VERSION%
for %%F in (Print_Cost_Profit.html desktop-api.js storage-client.js desktop\electron\main.cjs desktop\electron\preload.cjs js\traducciones.js) do (
  if exist "%%F" (echo [OK] %%F) else (echo [ERROR] Falta %%F)
)
findstr /C:"Versión %PCP_VERSION%" "%~dp0Print_Cost_Profit.html" >nul
if errorlevel 1 (echo [AVISO] Revisa el pie de pagina de la interfaz.) else (echo [OK] Version del pie de pagina coincidente.)
echo.
echo No se comprueba ni se necesita un servidor HTTP local.
pause
