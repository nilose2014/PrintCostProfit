@echo off
setlocal
cd /d "%~dp0"
echo ============================================
echo Print Cost ^& Profit - Diagnostico de escritorio directo
echo ============================================
echo.
for %%F in (Print_Cost_Profit.html desktop-api.js storage-client.js desktop\electron\main.cjs desktop\electron\preload.cjs VERSION) do (
  if exist "%%F" (echo [OK] %%F) else (echo [ERROR] Falta %%F)
)
if exist "Integracion_Orca_Postprocesado.bat" (echo [OK] Integracion de Orca) else (echo [ERROR] Falta integracion de Orca)
echo.
echo Esta version no necesita Servidor_Panel_U1.ps1 ni un servidor en el puerto 8700.
echo La interfaz y SQLite se comunican mediante Electron IPC.
echo Las impresoras se consultan directamente por IP mediante Moonraker.
echo.
pause
