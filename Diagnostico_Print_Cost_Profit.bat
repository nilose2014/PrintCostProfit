@echo off
setlocal
chcp 65001 >nul
set "PCP_VERSION=desconocida"
if exist "%~dp0VERSION" set /p PCP_VERSION=<"%~dp0VERSION"
title Print Cost ^& Profit v%PCP_VERSION% - Diagnostico SQLite
echo ============================================================
echo PRINT COST ^& PROFIT v%PCP_VERSION% - DIAGNOSTICO Y SEGURIDAD
echo ============================================================
echo.
echo Este comprobador NO modifica ni borra datos.
echo ES: Comprobando el servidor local y la integridad de SQLite...
echo EN: Checking local server and SQLite integrity...
echo FR: Verification du serveur local et de l'integrite SQLite...
echo DE: Pruefung des lokalen Servers und der SQLite-Integritaet...
echo IT: Verifica del server locale e dell'integrita SQLite...
echo.
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -Command ^
 "$ErrorActionPreference='Stop'; try { $r=Invoke-RestMethod -Uri 'http://127.0.0.1:8700/api/storage/health' -TimeoutSec 8; Write-Host ('Servidor: OK | Version: '+$r.version) -ForegroundColor Green; Write-Host ('Base de datos: '+$r.database); Write-Host ('Tamano: '+$r.databaseBytes+' bytes'); Write-Host ('Integridad SQLite: '+(($r.integrity.result) -join ', ')); Write-Host ('Claves almacenadas: '+$r.integrity.count); Write-Host ('Copias de seguridad: '+$r.backupCount+' / '+$r.maxBackups); Write-Host ('Ultima copia: '+$(if($r.latestBackup){$r.latestBackup}else{'todavia no hay copias registradas'})); Write-Host ('Carpeta de copias: '+$r.backupDirectory); if(-not $r.ok){ throw 'La comprobacion de integridad no ha sido satisfactoria.' } } catch { Write-Host ('ERROR: '+$_.Exception.Message) -ForegroundColor Red; Write-Host 'Comprueba que el servidor esta abierto y consulta Integracion_Print_Cost_Profit.log.'; exit 1 }"
echo.
echo Diagnostico terminado. No se han modificado los datos.
pause
