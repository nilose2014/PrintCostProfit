@echo off
setlocal
cd /d "%~dp0"
set "ROOT=%~dp0"
set "LOG=%ROOT%Integracion_Print_Cost_Profit.log"
set "OUT=%ROOT%Puente_U1_inicio_stdout.log"
set "ERR=%ROOT%Puente_U1_inicio_stderr.log"
>>"%LOG%" echo [%date% %time%] Proceso independiente del puente iniciado.
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -ExecutionPolicy Bypass -NoExit -File "%ROOT%Servidor_Panel_U1.ps1"
set "RC=%errorlevel%"
>>"%LOG%" echo [%date% %time%] El servidor terminó con código %RC%.
exit /b %RC%
