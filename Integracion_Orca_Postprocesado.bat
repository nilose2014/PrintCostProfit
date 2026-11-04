@echo off
setlocal EnableExtensions
cd /d "%~dp0"
set "LOG=%~dp0Integracion_Print_Cost_Profit.log"

REM v1.324: mismo BAT para apertura manual y postprocesado llamado por Orca.
REM Si Orca pasa un G-code, no abrir otra ventana de la interfaz: procesar y salir.
if not "%~1"=="" goto orca_postprocess

REM Ejecucion manual: quitar la copia temporal generada por el ultimo G-code.
REM Asi el servidor abre siempre el HTML principal actualizado; Orca volvera a generar
REM Print_Cost_Profit_Integrado.html cuando ejecute el BAT con un G-code.
if exist "%~dp0Print_Cost_Profit_Integrado.html" del /q "%~dp0Print_Cost_Profit_Integrado.html" >nul 2>&1
REM Asegurar que el servidor local esta activo y abrir la interfaz.
set "URL=http://127.0.0.1:8700/"
set "LAUNCHER=%~dp0Iniciar_Puente_Orca.ps1"
if not exist "%LAUNCHER%" (
  echo ERROR: No se encuentra Iniciar_Puente_Orca.ps1
  pause
  exit /b 1
)
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%LAUNCHER%"
if errorlevel 1 (
  echo ERROR: El puente local no esta actualizado o no se pudo reiniciar.
  echo Comprueba la ventana del servidor y el archivo Integracion_Print_Cost_Profit.log.
  pause
  exit /b 1
)
:open_ui
start "" "%URL%"
exit /b 0

:orca_postprocess
>>"%LOG%" echo [%date% %time%] Lanzador Orca iniciado. G-code=%~1
>>"%LOG%" echo [%date% %time%] Comprobando/iniciando puente local.
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0Iniciar_Puente_Orca.ps1"
set "BRIDGE_RESULT=%errorlevel%"
if not "%BRIDGE_RESULT%"=="0" (
  >>"%LOG%" echo [%date% %time%] ERROR: El lanzador del puente fallo con codigo %BRIDGE_RESULT%.
  exit /b %BRIDGE_RESULT%
)
REM Mantener el analizador G-code original sin cambios.
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0Integracion_Print_Cost_Profit.ps1" "%~1"
set "RESULT=%errorlevel%"
if not "%RESULT%"=="0" (
  >>"%LOG%" echo [%date% %time%] ERROR: Integracion_Print_Cost_Profit.ps1 termino con codigo %RESULT%.
  exit /b %RESULT%
)
>>"%LOG%" echo [%date% %time%] Postprocesado completado correctamente. No se abre otra ventana del navegador desde el postprocesado.
REM La calculadora se abre desde el lanzador de interfaz; el postprocesado solo procesa el G-code.
REM Evita una segunda ventana cuando Orca ya ha abierto la calculadora.
exit /b 0
