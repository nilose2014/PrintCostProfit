$ErrorActionPreference = 'Stop'
$Root = $PSScriptRoot
$ConfigPath = Join-Path $Root 'u1-printer-config.json'
$StorageDir = Join-Path $env:LOCALAPPDATA 'PrintCostProfit_SQLite_v1.249\data'
$StoragePath = Join-Path $StorageDir 'datos.json'
$BackupDir = Join-Path $StorageDir 'backups'
if (-not (Test-Path -LiteralPath $StorageDir)) { New-Item -ItemType Directory -Path $StorageDir -Force | Out-Null }
if (-not (Test-Path -LiteralPath $BackupDir)) { New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null }
function New-StorageObject { return @{ schema = 1; revision = 0; values = @{}; revisions = @{} } }
function Read-StorageObject {
  if (-not (Test-Path -LiteralPath $StoragePath)) { return (New-StorageObject) }
  try {
    $raw = Get-Content -LiteralPath $StoragePath -Raw -Encoding UTF8
    $obj = $raw | ConvertFrom-Json
    if (-not $obj -or -not $obj.values -or -not $obj.revisions) { throw 'Estructura de almacenamiento inválida.' }
    $values = @{}; $revs = @{}
    foreach ($p in $obj.values.PSObject.Properties) { $values[$p.Name] = [string]$p.Value }
    foreach ($p in $obj.revisions.PSObject.Properties) { $revs[$p.Name] = [int]$p.Value }
    return @{ schema = 1; revision = [int]$obj.revision; values = $values; revisions = $revs }
  } catch { throw ('No se puede leer el almacenamiento; se conserva el archivo original: ' + $_.Exception.Message) }
}
function Save-StorageObject($store) {
  $jsonText = $store | ConvertTo-Json -Depth 20 -Compress
  $tmp = Join-Path $StorageDir ('datos.' + [Guid]::NewGuid().ToString('N') + '.tmp')
  $bytes = [Text.Encoding]::UTF8.GetBytes($jsonText)
  [IO.File]::WriteAllBytes($tmp, $bytes)
  if (Test-Path -LiteralPath $StoragePath) {
    # Limita las copias persistentes a una cada 5 minutos; cada escritura sigue siendo atomica.
    # File.Replace recibe siempre una ruta valida. Si aun no toca copia, se usa una temporal
    # y se elimina tras el reemplazo correcto, conservando intacta la copia de seguridad anterior.
    $latest = Get-ChildItem -LiteralPath $BackupDir -Filter 'datos.*.json.bak' -File -ErrorAction SilentlyContinue |
      Sort-Object LastWriteTime -Descending | Select-Object -First 1
    $makeBackup = (-not $latest) -or ((Get-Date) - $latest.LastWriteTime -ge [TimeSpan]::FromMinutes(5))
    if ($makeBackup) {
      $backup = Join-Path $BackupDir ('datos.' + (Get-Date -Format 'yyyyMMdd_HHmmss_fff') + '_' + [Guid]::NewGuid().ToString('N') + '.json.bak')
    } else {
      $backup = Join-Path $StorageDir ('datos.discard.' + [Guid]::NewGuid().ToString('N') + '.tmp')
    }
    [IO.File]::Replace($tmp, $StoragePath, $backup, $true)
    if (-not $makeBackup -and (Test-Path -LiteralPath $backup)) {
      Remove-Item -LiteralPath $backup -Force -ErrorAction SilentlyContinue
    }
    $backups = @(Get-ChildItem -LiteralPath $BackupDir -Filter 'datos.*.json.bak' -File | Sort-Object LastWriteTime -Descending)
    if ($backups.Count -gt 100) { $backups | Select-Object -Skip 100 | Remove-Item -Force -ErrorAction SilentlyContinue }
  } else { [IO.File]::Move($tmp, $StoragePath) }
}
function Get-StorageRevision($store, [string]$key) {
  if ($store.revisions.ContainsKey($key)) { return [int]$store.revisions[$key] }
  return 0
}
function Get-StorageSnapshot($store) {
  return @{ ok = $true; count = $store.values.Count; revision = $store.revision; values = $store.values; revisions = $store.revisions }
}

$DatabasePath = Join-Path $StorageDir 'printcostprofit.db'
$TimingLog = Join-Path $StorageDir 'diagnostico_tiempos_v1.254.log'
$env:PCP_SQLITE_TIMING_LOG = $TimingLog
function Write-TimingLog([string]$Message) { try { Add-Content -LiteralPath $TimingLog -Value ((Get-Date -Format 'yyyy-MM-dd HH:mm:ss.fff') + ' [Puente] ' + $Message) -Encoding UTF8 } catch {} }
$SQLiteApi = Join-Path $Root 'pcp_sqlite_api.py'
$SQLiteExe = Join-Path $Root 'pcp_sqlite_api.exe'
function Invoke-SqliteCli([string[]]$Arguments) {
  $sw = [Diagnostics.Stopwatch]::StartNew()
  if (Test-Path -LiteralPath $SQLiteExe) { $output = & $SQLiteExe @Arguments 2>&1 } else {
    $python = Get-Command python.exe -ErrorAction SilentlyContinue
    if (-not $python) { $python = Get-Command python -ErrorAction SilentlyContinue }
    if (-not $python) { throw 'No se encuentra pcp_sqlite_api.exe ni Python. Ejecuta el preparador de Windows; no se han eliminado los datos JSON.' }
    $output = & $python.Source $SQLiteApi @Arguments 2>&1
  }
  $sw.Stop()
  Write-TimingLog ('cli args=' + ($Arguments[0]) + ' duration_ms=' + [math]::Round($sw.Elapsed.TotalMilliseconds,1) + ' exit=' + $LASTEXITCODE)
  return @{ output = $output; exitCode = $LASTEXITCODE }
}
function Invoke-SqliteOperation([string]$Operation, $Body = $null) {
  $total = [Diagnostics.Stopwatch]::StartNew()
  $requestFile = Join-Path $env:TEMP ('pcp_sqlite_req_' + [Guid]::NewGuid().ToString('N') + '.json')
  try {
    $prep = [Diagnostics.Stopwatch]::StartNew()
    if ($null -ne $Body) { $Body | ConvertTo-Json -Depth 30 -Compress | Set-Content -LiteralPath $requestFile -Encoding UTF8 }
    else { '{}' | Set-Content -LiteralPath $requestFile -Encoding UTF8 }
    $prep.Stop()
    Write-TimingLog ('request op=' + $Operation + ' prepare_ms=' + [math]::Round($prep.Elapsed.TotalMilliseconds,1))
    $cli = Invoke-SqliteCli @($Operation, $DatabasePath, $BackupDir, $requestFile)
    $output = $cli.output
    $exitCode = $cli.exitCode
    $line = ($output | Out-String).Trim()
    try { $result = $line | ConvertFrom-Json } catch { throw ('El adaptador SQLite no devolvió JSON válido: ' + $line) }
    if ($exitCode -eq 3 -or $result.conflict) { return @{ __status = 409; body = $result } }
    if ($exitCode -ne 0 -or -not $result.ok) { return @{ __status = 500; body = $result } }
    return @{ __status = 200; body = $result }
  } finally { $total.Stop(); Write-TimingLog ('request op=' + $Operation + ' total_ms=' + [math]::Round($total.Elapsed.TotalMilliseconds,1)); Remove-Item -LiteralPath $requestFile -Force -ErrorAction SilentlyContinue }
}
# Primera inicialización: si no existe la base, importa datos.json sin modificarlo.
try {
  if ((Test-Path -LiteralPath $SQLiteExe) -or (Get-Command python.exe -ErrorAction SilentlyContinue) -or (Get-Command python -ErrorAction SilentlyContinue)) {
    # v1.253: base SQLite nueva y vacía. No importar ni leer datos.json/localStorage antiguos.
    $cli = Invoke-SqliteCli @('init', $DatabasePath, $BackupDir, '{}')
    if ($cli.exitCode -ne 0) { Write-Host ('No se pudo inicializar SQLite: ' + ($cli.output | Out-String)) -ForegroundColor Yellow }
  } else { Write-Host 'SQLite no está empaquetado: ejecuta Preparar_Instalador_Windows.ps1.' -ForegroundColor Yellow }
} catch { Write-Host ('Aviso de inicialización SQLite: ' + $_.Exception.Message) -ForegroundColor Yellow }

$Printer = 'http://192.168.1.48:7125'
if (Test-Path -LiteralPath $ConfigPath) { try { $savedConfig = Get-Content -LiteralPath $ConfigPath -Raw | ConvertFrom-Json; if ($savedConfig.ip -match '^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$') { $Printer = 'http://' + $savedConfig.ip + ':7125' } } catch {} }
$U1StatusCachePath = Join-Path $StorageDir 'u1_status_cache.json'
$U1StatusJob = $null
$U1StatusLastLaunch = [DateTime]::MinValue
$Prefix = 'http://127.0.0.1:8700/'
$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add($Prefix)
try { $Listener.Start() } catch {
  Write-Host "No se pudo iniciar el puente local: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host 'Puede que el puerto 8700 ya este ocupado. Si el puente ya funciona, no hace falta iniciar otra instancia.'
  Start-Sleep -Seconds 4
  exit 1
}
Write-Host ''
Write-Host '============================================================' -ForegroundColor DarkCyan
$VersionFile = Join-Path $Root 'VERSION'
$AppVersion = 'desconocida'
if (Test-Path -LiteralPath $VersionFile) {
  $VersionFromFile = (Get-Content -LiteralPath $VersionFile -Raw -ErrorAction SilentlyContinue).Trim()
  if ($VersionFromFile -match '^\d+\.\d+(?:\.\d+)?$') { $AppVersion = $VersionFromFile }
}
Write-Host (' PRINT COST & PROFIT v' + $AppVersion + ' - SERVIDOR LOCAL DE ORCA') -ForegroundColor Cyan
Write-Host '============================================================' -ForegroundColor DarkCyan
Write-Host ''
Write-Host 'NO CIERRES ESTA VENTANA mientras uses la integracion con Orca.' -ForegroundColor Yellow
Write-Host 'ES: Servidor local que conecta Print Cost & Profit con Snapmaker Orca.' -ForegroundColor White
Write-Host 'EN: Local server connecting Print Cost & Profit with Snapmaker Orca.' -ForegroundColor White
Write-Host 'FR: Serveur local reliant Print Cost & Profit a Snapmaker Orca.' -ForegroundColor White
Write-Host 'DE: Lokaler Server zur Verbindung von Print Cost & Profit mit Snapmaker Orca.' -ForegroundColor White
Write-Host 'IT: Server locale che collega Print Cost & Profit a Snapmaker Orca.' -ForegroundColor White
Write-Host ''
Write-Host 'Estado / Status / Etat / Status / Stato: EN EJECUCION' -ForegroundColor Green
Write-Host "Direccion local: $Prefix"
Write-Host "Impresora configurada: $Printer"
Write-Host 'Funciones: atender solicitudes locales, comunicar datos y registrar actividad/errores.'
Write-Host 'Seguridad: escucha solo en 127.0.0.1; no envia comandos de impresion.' -ForegroundColor Gray
Write-Host 'Cierra esta ventana solo cuando hayas terminado de usar la integracion.' -ForegroundColor Yellow
Write-Host ''
Write-Host '--- REGISTRO DE ACTIVIDAD / ACTIVITY LOG / JOURNAL / AKTIVITAT / ATTIVITA ---' -ForegroundColor Cyan
while ($Listener.IsListening) {
  $ctx = $null
  try {
    $ctx = $Listener.GetContext()
    $reqPath = $ctx.Request.Url.AbsolutePath
    Write-Host ('[{0}] Solicitud: {1}' -f (Get-Date -Format 'HH:mm:ss'), $reqPath) -ForegroundColor DarkGray
    if ($reqPath -eq '/api/storage/snapshot') {
      $result = Invoke-SqliteOperation 'snapshot'
      $json = $result.body | ConvertTo-Json -Depth 30 -Compress
      $ctx.Response.StatusCode = [int]$result.__status
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/storage/health') {
      try {
        $check = Invoke-SqliteOperation 'integrity'
        $backupConfig = Invoke-SqliteOperation 'backup_list'
        $backupFiles = @(Get-ChildItem -LiteralPath $BackupDir -Filter 'printcostprofit_*.db' -File -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending)
        $dbInfo = Get-Item -LiteralPath $DatabasePath -ErrorAction Stop
        $lastBackup = $null
        if ($backupFiles.Count -gt 0) { $lastBackup = $backupFiles[0].LastWriteTime.ToString('yyyy-MM-dd HH:mm:ss') }
        $healthOk = ($check.__status -eq 200 -and $check.body.ok -eq $true)
        $json = @{
          ok = [bool]$healthOk
          version = $AppVersion
          database = $DatabasePath
          databaseExists = (Test-Path -LiteralPath $DatabasePath -PathType Leaf)
          databaseBytes = [long]$dbInfo.Length
          integrity = $check.body
          backupDirectory = $BackupDir
          backupCount = $backupFiles.Count
          latestBackup = $lastBackup
          maxBackups = if ($backupConfig.body.maxBackups) { [int]$backupConfig.body.maxBackups } else { 100 }
          backupIntervalMinutes = if ($backupConfig.body.backupIntervalMinutes) { [int]$backupConfig.body.backupIntervalMinutes } else { 5 }
          checkedAt = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
        } | ConvertTo-Json -Depth 8 -Compress
        $ctx.Response.StatusCode = if ($healthOk) { 200 } else { 500 }
      } catch {
        $json = @{ ok = $false; version = $AppVersion; error = $_.Exception.Message; database = $DatabasePath; backupDirectory = $BackupDir } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 500
      }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/storage/import') {
      try {
        $bodyText = (New-Object IO.StreamReader($ctx.Request.InputStream, $ctx.Request.ContentEncoding)).ReadToEnd()
        $body = $bodyText | ConvertFrom-Json
        $result = Invoke-SqliteOperation 'import' $body
        $json = $result.body | ConvertTo-Json -Depth 30 -Compress
        $ctx.Response.StatusCode = [int]$result.__status
      } catch { $json = @{ok=$false;error=$_.Exception.Message}|ConvertTo-Json -Compress; $ctx.Response.StatusCode=500 }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json); $ctx.Response.ContentType = 'application/json; charset=utf-8'; $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/storage/write' -or $reqPath -eq '/api/storage/remove') {
      try {
        $bodyText = (New-Object IO.StreamReader($ctx.Request.InputStream, $ctx.Request.ContentEncoding)).ReadToEnd()
        $body = $bodyText | ConvertFrom-Json
        $op = if ($reqPath -eq '/api/storage/write') { 'write' } else { 'remove' }
        $result = Invoke-SqliteOperation $op $body
        $json = $result.body | ConvertTo-Json -Depth 30 -Compress
        $ctx.Response.StatusCode = [int]$result.__status
      } catch { $json = @{ok=$false;error=$_.Exception.Message}|ConvertTo-Json -Compress; $ctx.Response.StatusCode=500 }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json); $ctx.Response.ContentType = 'application/json; charset=utf-8'; $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/storage/backups') {
      $result = Invoke-SqliteOperation 'backup_list'
      $json = $result.body | ConvertTo-Json -Depth 12 -Compress
      $ctx.Response.StatusCode = [int]$result.__status
      $bytes = [Text.Encoding]::UTF8.GetBytes($json); $ctx.Response.ContentType = 'application/json; charset=utf-8'; $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/storage/backup/create' -or $reqPath -eq '/api/storage/backup/config' -or $reqPath -eq '/api/storage/backup/validate' -or $reqPath -eq '/api/storage/backup/restore') {
      try {
        $bodyText = (New-Object IO.StreamReader($ctx.Request.InputStream, $ctx.Request.ContentEncoding)).ReadToEnd()
        $body = if ([string]::IsNullOrWhiteSpace($bodyText)) { @{} } else { $bodyText | ConvertFrom-Json }
        if ($reqPath -eq '/api/storage/backup/create') { $op = 'backup_now' }
        elseif ($reqPath -eq '/api/storage/backup/config') { $op = 'backup_config' }
        elseif ($reqPath -eq '/api/storage/backup/restore') { $op = 'backup_restore' }
        else { $op = 'backup_validate' }
        $result = Invoke-SqliteOperation $op $body
        $json = $result.body | ConvertTo-Json -Depth 12 -Compress
        $ctx.Response.StatusCode = [int]$result.__status
      } catch { $json = @{ok=$false;error=$_.Exception.Message}|ConvertTo-Json -Compress; $ctx.Response.StatusCode=500 }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json); $ctx.Response.ContentType = 'application/json; charset=utf-8'; $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/installer-language') {
      $installerLanguage = 'es'
      $languageFile = Join-Path $Root 'pcp-installer-language.txt'
      if (Test-Path -LiteralPath $languageFile -PathType Leaf) {
        $candidate = (Get-Content -LiteralPath $languageFile -Raw -ErrorAction SilentlyContinue).Trim().ToLowerInvariant()
        if ($candidate -in @('es','en','fr','de','it','pl')) { $installerLanguage = $candidate }
      }
      $json = @{ ok = $true; language = $installerLanguage } | ConvertTo-Json -Compress
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.StatusCode = 200
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/version') {
      $json = @{ ok = $true; version = $AppVersion; build = ('v' + $AppVersion) } | ConvertTo-Json -Compress
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.StatusCode = 200
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/u1/config') {
      try {
        $ip = [string]$ctx.Request.QueryString['ip']
        if ($ip -notmatch '^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$') { throw 'Dirección IPv4 no válida.' }
        $test = Invoke-RestMethod -Uri "http://$ip`:7125/printer/info" -Method Get -TimeoutSec 3
        @{ ip = $ip; ok = $true } | ConvertTo-Json | Set-Content -LiteralPath $ConfigPath -Encoding UTF8
        $Printer = "http://$ip`:7125"
        # Cambiar de impresora invalida el estado anterior y cualquier consulta en curso.
        if ($null -ne $U1StatusJob) { try { Stop-Job -Job $U1StatusJob -Force -ErrorAction SilentlyContinue } catch {} }
        $U1StatusJob = $null
        $U1StatusLastLaunch = [DateTime]::MinValue
        Remove-Item -LiteralPath $U1StatusCachePath -Force -ErrorAction SilentlyContinue
        $json = @{ ok = $true; ip = $ip; message = 'IP comprobada y guardada para el puente.' } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 200
      } catch {
        $json = @{ ok = $false; error = ('No se pudo validar la impresora en esa IP: ' + $_.Exception.Message) } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 502
      }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/u1/discover') {
      $pending = @()
      try {
        $local = @(Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' -and $_.AddressState -eq 'Preferred' })
        if (-not $local.Count) { throw 'No se ha podido determinar la dirección IPv4 local.' }
        $seen = @{}
        foreach ($nic in $local) {
          $parts = $nic.IPAddress.Split('.'); if ($parts.Count -ne 4) { continue }
          $prefix = ($parts[0..2] -join '.')
          for ($i=1; $i -le 254; $i++) {
            $candidate = "$prefix.$i"
            if ($candidate -eq $nic.IPAddress -or $seen.ContainsKey($candidate)) { continue }
            $seen[$candidate] = $true
            $client = New-Object System.Net.Sockets.TcpClient
            try { $ar = $client.BeginConnect($candidate,7125,$null,$null); $pending += [pscustomobject]@{ IP=$candidate; Client=$client; Async=$ar; Done=$false } } catch { $client.Close() }
          }
        }
        # Recopila todos los equipos que acepten TCP/7125 dentro de la ventana de búsqueda.
        # v1.258: no mantener bloqueado el listener mientras se explora toda la subred.
        $until = (Get-Date).AddSeconds(2); $openIps = @()
        while ((Get-Date) -lt $until -and @($pending | Where-Object { -not $_.Done }).Count -gt 0) {
          foreach ($item in $pending) {
            if (-not $item.Done -and $item.Client -and $item.Async -and $item.Async.AsyncWaitHandle.WaitOne(0)) {
              $item.Done = $true
              try { $item.Client.EndConnect($item.Async); if ($item.Client.Connected) { $openIps += $item.IP } } catch {} finally { $item.Client.Close() }
            }
          }
          Start-Sleep -Milliseconds 30
        }
        foreach ($item in $pending) { try { $item.Client.Close() } catch {} }
        $printers = @()
        foreach ($candidateIp in ($openIps | Select-Object -Unique)) {
          try {
            $info = Invoke-RestMethod -Uri "http://$candidateIp`:7125/printer/info" -Method Get -TimeoutSec 2
            if ($info.result) { $printers += [pscustomobject]@{ ip=$candidateIp; hostname=$info.result.hostname; softwareVersion=$info.result.software_version; state='ready' } }
          } catch {}
        }
        $currentIp = ($Printer -replace '^http://','' -replace ':7125/?$','')
        # Conserva siempre la impresora ya configurada si responde, aunque la exploración de red no la haya enumerado.
        if ($currentIp -match '^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$' -and -not (@($printers | Where-Object { $_.ip -eq $currentIp }).Count)) {
          try { $curInfo = Invoke-RestMethod -Uri "http://$currentIp`:7125/printer/info" -Method Get -TimeoutSec 3; if ($curInfo.result) { $printers += [pscustomobject]@{ ip=$currentIp; hostname=$curInfo.result.hostname; softwareVersion=$curInfo.result.software_version; state='ready' } } } catch {}
        }
        if ($printers.Count -eq 1) {
          $chosen = $printers[0].ip
          @{ ip = $chosen; ok = $true } | ConvertTo-Json | Set-Content -LiteralPath $ConfigPath -Encoding UTF8
          $Printer = "http://$chosen`:7125"
          $json = @{ ok=$true; ip=$chosen; printers=@($printers); message='Impresora detectada y configurada automáticamente.'; printerInfo=@{ hostname=$printers[0].hostname; software_version=$printers[0].softwareVersion } } | ConvertTo-Json -Depth 8 -Compress
        } elseif ($printers.Count -gt 1) {
          $json = @{ ok=$true; ip=$currentIp; printers=@($printers); message='Se encontraron varias impresoras. Selecciona cuál quieres usar.' } | ConvertTo-Json -Depth 8 -Compress
        } else {
          $json = @{ ok=$true; ip=$null; printers=@(); message='No se encontró ninguna impresora Moonraker en la subred IPv4 detectada. Comprueba que estén en la misma red.' } | ConvertTo-Json -Compress
        }
        $ctx.Response.StatusCode = 200
      } catch {
        foreach ($item in $pending) { try { $item.Client.Close() } catch {} }
        $json = @{ ok=$false; error=$_.Exception.Message } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 502
      }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/u1/printer') {
      try {
        $ip = ($Printer -replace '^http://','' -replace ':7125/?$','')
        $info = Invoke-RestMethod -Uri "$Printer/printer/info" -Method Get -TimeoutSec 2
        $state = Invoke-RestMethod -Uri "$Printer/printer/objects/query?print_stats&webhooks" -Method Get -TimeoutSec 2
        $json = @{ ok = $true; ip = $ip; baseUrl = $Printer; name = $info.result.hostname; softwareVersion = $info.result.software_version; state = $state.result.status.print_stats.state; filename = $state.result.status.print_stats.filename; message = 'Impresora conectada y verificada.' } | ConvertTo-Json -Depth 8 -Compress
        $ctx.Response.StatusCode = 200
      } catch {
        $json = @{ ok = $false; ip = $ip; error = $_.Exception.Message; message = 'No se ha podido verificar la impresora configurada.' } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 502
      }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/u1/filaments') {
      try {
        $filename = ''
        $filenameB64 = [string]$ctx.Request.QueryString['filenameB64']
        if (-not [string]::IsNullOrWhiteSpace($filenameB64)) {
          try {
            $b64 = $filenameB64.Replace('-', '+').Replace('_', '/')
            switch ($b64.Length % 4) { 2 { $b64 += '==' } 3 { $b64 += '=' } }
            $filename = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($b64))
          } catch { throw 'El nombre de archivo UTF-8 recibido no es válido.' }
        } else {
          $filename = [string]$ctx.Request.QueryString['filename']
          if ($filename -match '%[0-9A-Fa-f]{2}') { try { $filename = [Uri]::UnescapeDataString($filename) } catch {} }
        }
        $filename = $filename.Normalize([Text.NormalizationForm]::FormC)
        # HttpListener ya decodifica QueryString; no volver a decodificar Unicode.
        if ($filename -match '%[0-9A-Fa-f]{2}') { try { $filename = [Uri]::UnescapeDataString($filename) } catch {} }
        $filename = $filename.Normalize([Text.NormalizationForm]::FormC)
        if ([string]::IsNullOrWhiteSpace($filename) -or $filename -match '[\\/]' -or $filename -match '\.\.') { throw 'Nombre de G-code no válido.' }
        $listing = Invoke-RestMethod -Uri "$Printer/server/files/list?root=gcodes" -Method Get -TimeoutSec 8
        # Moonraker devuelve result como objeto {dirs, files}; no como array directo.
        # Compatibilidad adicional con versiones/puentes que devuelven un array en result.
        $entries = @()
        if ($null -ne $listing.result.files) { $entries = @($listing.result.files) }
        elseif ($listing.result -is [System.Array]) { $entries = @($listing.result) }
        # Si el listado está vacío, se continúa con el nombre activo y se intenta resolver/descargar directamente.
        $match = @($entries | Where-Object {
          $leaf = [string]$_.path
          if ([string]::IsNullOrWhiteSpace($leaf)) { $leaf = [string]$_.filename }
          if ($leaf.Contains('/')) { $leaf = $leaf.Substring($leaf.LastIndexOf('/') + 1) }
          $leaf = $leaf.Normalize([Text.NormalizationForm]::FormC)
          [string]::Equals($leaf, $filename, [StringComparison]::OrdinalIgnoreCase)
        } | Select-Object -First 1)[0]
        # La lista de Moonraker puede omitir el archivo que se está imprimiendo
        # (por diferencias de versión, subcarpetas o nombres Unicode). No abortar
        # solo por no encontrarlo en el listado: intentar descargar la ruta activa.
        $resolvedPath = $filename
        if ($match) {
          $resolvedPath = [string]$match.path
          if ([string]::IsNullOrWhiteSpace($resolvedPath)) { $resolvedPath = [string]$match.filename }
        }
        if ([string]::IsNullOrWhiteSpace($resolvedPath)) { throw 'Moonraker no proporcionó una ruta válida para el G-code activo.' }
        $jobId = [Guid]::NewGuid().ToString('N')
        $stateDir = Join-Path $Root 'u1-read-jobs'
        if (-not (Test-Path $stateDir)) { New-Item -ItemType Directory -Path $stateDir -Force | Out-Null }
        $statePath = Join-Path $stateDir ($jobId + '.json')
        $jobScript = Join-Path $Root 'Leer_Gcode_U1.ps1'
        $jobPrinter = $Printer
        Start-Job -ScriptBlock { param($scriptPath,$baseUrl,$filePath,$fileName,$stateFile) & $scriptPath -PrinterUrl $baseUrl -ResolvedPath $filePath -FileName $fileName -StateFile $stateFile } -ArgumentList $jobScript,$jobPrinter,$resolvedPath,$filename,$statePath | Out-Null
        $json = @{ ok=$true; started=$true; jobId=$jobId; filename=$filename; message='Lectura completa iniciada en segundo plano.' } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 200
      } catch {
        $json = @{ ok=$false; filename=$filename; error=$_.Exception.Message } | ConvertTo-Json -Compress
        $ctx.Response.StatusCode = 502
      }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/u1/filaments/progress') {
      try {
        $jobId = [string]$ctx.Request.QueryString['id']
        if ($jobId -notmatch '^[a-fA-F0-9]{32}$') { throw 'Identificador de lectura no válido.' }
        $statePath = Join-Path (Join-Path $Root 'u1-read-jobs') ($jobId + '.json')
        if (-not (Test-Path -LiteralPath $statePath)) { $payload = @{ok=$true;state='starting';progress=0;message='Preparando lectura…'} }
        else { $payload = Get-Content -LiteralPath $statePath -Raw | ConvertFrom-Json }
        $json = $payload | ConvertTo-Json -Depth 12 -Compress
        $ctx.Response.StatusCode = 200
      } catch { $json = @{ok=$false;error=$_.Exception.Message}|ConvertTo-Json -Compress; $ctx.Response.StatusCode=400 }
      $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } elseif ($reqPath -eq '/api/u1/status') {
      # v1.257: la ruta de estado no consulta la impresora dentro del listener principal.
      # El listener es secuencial; esperar a la U1 aquí bloqueaba escrituras síncronas de saveDraft.
      # Se responde desde caché y se actualiza en un trabajo en segundo plano.
      try {
        $cacheFresh = $false
        if (Test-Path -LiteralPath $U1StatusCachePath) {
          $cacheItem = Get-Item -LiteralPath $U1StatusCachePath
          $cacheFresh = ((Get-Date) - $cacheItem.LastWriteTime).TotalSeconds -lt 5
        }
        if (-not $cacheFresh) {
          $jobRunning = $false
          if ($null -ne $U1StatusJob) {
            try { $jobRunning = ($U1StatusJob.State -eq 'Running') } catch { $jobRunning = $false }
          }
          if (-not $jobRunning -and ((Get-Date) - $U1StatusLastLaunch).TotalSeconds -ge 2) {
            $U1StatusLastLaunch = Get-Date
            $statusCacheTarget = $U1StatusCachePath
            $statusPrinterTarget = $Printer
            $U1StatusJob = Start-Job -ArgumentList $statusPrinterTarget,$statusCacheTarget -ScriptBlock {
              param($baseUrl,$cachePath)
              try {
                $data = Invoke-RestMethod -Uri "$baseUrl/printer/objects/query?print_stats&virtual_sdcard&webhooks" -Method Get -TimeoutSec 2
                $payload = @{ ok=$true; status=$data.result.status; updatedAt=(Get-Date).ToString('o') } | ConvertTo-Json -Depth 20 -Compress
              } catch {
                $payload = @{ ok=$false; error=$_.Exception.Message; updatedAt=(Get-Date).ToString('o') } | ConvertTo-Json -Compress
              }
              $tmpPath = $cachePath + '.' + [Guid]::NewGuid().ToString('N') + '.tmp'
              [IO.File]::WriteAllText($tmpPath,$payload,(New-Object System.Text.UTF8Encoding($false)))
              Move-Item -LiteralPath $tmpPath -Destination $cachePath -Force
            }
          }
        }
        if (Test-Path -LiteralPath $U1StatusCachePath) {
          $cachedText = Get-Content -LiteralPath $U1StatusCachePath -Raw -Encoding UTF8
          $cachedPayload = $cachedText | ConvertFrom-Json
          if ($cachedPayload.ok -and $cachedPayload.status) {
            $json = @{ ok=$true; status=$cachedPayload.status; cached=$true; updatedAt=$cachedPayload.updatedAt } | ConvertTo-Json -Depth 20 -Compress
            $ctx.Response.StatusCode = 200
          } else {
            $cacheError = [string]$cachedPayload.error
            if ([string]::IsNullOrWhiteSpace($cacheError)) { $cacheError = 'La impresora no ha devuelto un estado válido.' }
            $json = @{ ok=$false; error=$cacheError; cached=$true; updatedAt=$cachedPayload.updatedAt } | ConvertTo-Json -Compress
            $ctx.Response.StatusCode = 502
          }
        } else {
          $json = @{ ok=$false; error='Esperando la primera respuesta de la Snapmaker U1.'; cached=$true; updatedAt=$null } | ConvertTo-Json -Compress
          $ctx.Response.StatusCode = 502
        }
        $bytes = [Text.Encoding]::UTF8.GetBytes($json)
      } catch {
        $json = @{ ok=$false; error=$_.Exception.Message; updatedAt=(Get-Date).ToString('o'); endpoint='/api/u1/status'; errorType='unexpected_status_endpoint_error' } | ConvertTo-Json -Compress
        $bytes = [Text.Encoding]::UTF8.GetBytes($json)
        $ctx.Response.StatusCode = 502
      }
      $ctx.Response.ContentType = 'application/json; charset=utf-8'
      $ctx.Response.Headers.Add('Cache-Control','no-store')
    } else {
      if ($reqPath -eq '/' -or $reqPath -eq '/index.html') {
        # Prefer the user's known working integrated file; fall back to the standard filename.
        $integrated = Join-Path $Root 'Print_Cost_Profit_Integrado.html'
        $standard = Join-Path $Root 'Print_Cost_Profit.html'
        if (Test-Path -LiteralPath $integrated -PathType Leaf) { $full = $integrated } else { $full = $standard }
      } else {
        $name = [Uri]::UnescapeDataString($reqPath.TrimStart('/'))
        $full = [IO.Path]::GetFullPath((Join-Path $Root $name))
      }
      $rootFull = [IO.Path]::GetFullPath($Root).TrimEnd('\') + '\'
      if (-not $full.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $full -PathType Leaf)) {
        $ctx.Response.StatusCode = 404
        $bytes = [Text.Encoding]::UTF8.GetBytes('Not found')
        $ctx.Response.ContentType = 'text/plain; charset=utf-8'
      } else {
        $bytes = [IO.File]::ReadAllBytes($full)
        $ext = [IO.Path]::GetExtension($full).ToLowerInvariant()
        $ctx.Response.ContentType = switch ($ext) { '.html' {'text/html; charset=utf-8'} '.js' {'application/javascript; charset=utf-8'} '.css' {'text/css; charset=utf-8'} '.json' {'application/json; charset=utf-8'} '.svg' {'image/svg+xml'} default {'application/octet-stream'} }
        $ctx.Response.StatusCode = 200
      }
    }
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes,0,$bytes.Length)
    $ctx.Response.OutputStream.Close()
  } catch { if ($ctx -and $ctx.Response) { try {$ctx.Response.StatusCode=500;$ctx.Response.Close()} catch {} } }
}
$Listener.Stop(); $Listener.Close()
