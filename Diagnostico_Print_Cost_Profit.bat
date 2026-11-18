@echo off
setlocal
chcp 65001 >nul
set "PCP_VERSION=desconocida"
if exist "%~dp0VERSION" set /p PCP_VERSION=<"%~dp0VERSION"
title Print Cost ^& Profit v%PCP_VERSION% - Diagnostico SQLite
echo ============================================================
echo PRINT COST ^& PROFIT v%PCP_VERSION% - DIAGNOSTICO SQLITE
echo ============================================================
echo.
echo La base de datos se abre desde Electron mediante IPC.
echo Este comprobador no inicia servidores ni modifica la base de datos.
echo.
echo 1. Abre Print Cost ^& Profit.
echo 2. Entra en Opciones y abre el apartado de copias de seguridad.
echo 3. Comprueba que el estado de SQLite indica integridad correcta.
echo 4. Crea una copia manual y valida la copia creada.
echo.
echo Para consultar errores de Electron, abre las herramientas con Ctrl+Shift+I o F12.
echo.
pause
