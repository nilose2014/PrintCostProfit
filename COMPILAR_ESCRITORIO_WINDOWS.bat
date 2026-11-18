@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0COMPILAR_ESCRITORIO_WINDOWS.ps1"
if errorlevel 1 (
  echo.
  echo La compilacion no se ha completado. Revisa el mensaje anterior.
  pause
  exit /b 1
)
echo.
pause
