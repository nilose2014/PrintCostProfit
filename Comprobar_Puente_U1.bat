@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "try { $r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8700/api/u1/status' -TimeoutSec 3; Write-Host ('HTTP '+$r.StatusCode); Write-Host $r.Content } catch { Write-Host 'No responde el puente U1:' $_.Exception.Message -ForegroundColor Red; exit 1 }"
echo.
pause
