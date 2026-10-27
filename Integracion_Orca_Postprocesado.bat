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
set "API=http://127.0.0.1:8700/api/version"
set "SERVER=%~dp0Servidor_Panel_U1.ps1"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -Command "try { $r=Invoke-WebRequest -UseBasicParsing -Uri '%API%' -TimeoutSec 2; if($r.StatusCode -eq 200){exit 0}else{exit 1} } catch { exit 1 }"
if not errorlevel 1 goto open_ui
if not exist "%SERVER%" (
  echo ERROR: No se encuentra Servidor_Panel_U1.ps1
  pause
  exit /b 1
)
start "Snapmaker U1 - Puente local" /min powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%SERVER%"
set "READY="
for /L %%i in (1,1,25) do (
  powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -Command "try { $r=Invoke-WebRequest -UseBasicParsing -Uri '%API%' -TimeoutSec 1; if($r.StatusCode -eq 200){exit 0}else{exit 1} } catch { exit 1 }"
  if not errorlevel 1 set "READY=1"
  if defined READY goto open_ui
  timeout /t 1 /nobreak >nul
)
echo ERROR: El puente local no responde en el puerto 8700.
echo Revisa los registros del puente.
pause
exit /b 1

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
