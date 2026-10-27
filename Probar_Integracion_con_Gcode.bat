@echo off
setlocal
cd /d "%~dp0"
if "%~1"=="" (
  echo Arrastra un archivo .gcode encima de este BAT para probar la integración v1.43.
  pause
  exit /b 1
)
powershell.exe -NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "%~dp0Integracion_Print_Cost_Profit.ps1" "%~1"
exit /b %errorlevel%
