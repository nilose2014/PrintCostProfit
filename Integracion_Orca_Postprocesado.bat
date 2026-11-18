@echo off
setlocal EnableExtensions
cd /d "%~dp0"
set "LOG=%~dp0Integracion_Print_Cost_Profit.log"

REM v1.324: mismo BAT para apertura manual y postprocesado llamado por Orca.
REM Si Orca pasa un G-code, no abrir otra ventana de la interfaz: procesar y salir.
if not "%~1"=="" goto orca_postprocess

REM Apertura manual: usar la aplicación de escritorio, sin servidor local.
set "INSTALL_DIR="
if exist "%~dp0PCP_InstallPath.txt" set /p INSTALL_DIR=<"%~dp0PCP_InstallPath.txt"
if defined INSTALL_DIR if exist "%INSTALL_DIR%\Print Cost & Profit.exe" (
  start "" "%INSTALL_DIR%\Print Cost & Profit.exe"
  exit /b 0
)
echo ERROR: No se encuentra Print Cost ^& Profit.exe.
echo Comprueba PCP_InstallPath.txt en esta carpeta o ejecuta la aplicacion desde el menu Inicio.
pause
exit /b 1

:orca_postprocess
>>"%LOG%" echo [%date% %time%] Lanzador Orca iniciado. G-code=%~1
>>"%LOG%" echo [%date% %time%] Ejecutando analizador G-code sin servidor HTTP.
REM Mantener el analizador G-code original sin cambios.
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0Integracion_Print_Cost_Profit.ps1" "%~1"
set "RESULT=%errorlevel%"
if not "%RESULT%"=="0" (
  >>"%LOG%" echo [%date% %time%] ERROR: Integracion_Print_Cost_Profit.ps1 termino con codigo %RESULT%.
  exit /b %RESULT%
)
>>"%LOG%" echo [%date% %time%] Postprocesado completado correctamente. No se utiliza servidor HTTP.
REM Los datos se entregan a Electron mediante la bandeja local de integración.
REM Evita una segunda ventana cuando Orca ya ha abierto la calculadora.
exit /b 0
