$ErrorActionPreference = 'Stop'
$Root = $PSScriptRoot
$Log = Join-Path $Root 'Integracion_Print_Cost_Profit.log'
$Stdout = Join-Path $Root 'Puente_U1_inicio_stdout.log'
$Stderr = Join-Path $Root 'Puente_U1_inicio_stderr.log'
$Server = Join-Path $Root 'Servidor_Panel_U1.ps1'
$Runner = Join-Path $Root 'Iniciar_Puente_Orca_Independiente.cmd'
$Uri = 'http://127.0.0.1:8700/api/version'
function Write-BridgeLog([string]$Message) {
  try { Add-Content -LiteralPath $Log -Encoding UTF8 -Value ("[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Message) } catch {}
}
function Get-BridgeVersion {
  try {
    $r = Invoke-RestMethod -Uri $Uri -Method Get -TimeoutSec 2
    if ($r.ok -and $r.version) { return [string]$r.version }
  } catch {}
  return 'desconocida'
}
function Test-Bridge {
  try { $r = Invoke-WebRequest -UseBasicParsing -Uri $Uri -TimeoutSec 2; return ($r.StatusCode -eq 200) } catch { return $false }
}
if (Test-Bridge) {
  $bridgeVersion = Get-BridgeVersion
  Write-BridgeLog ('Puente local ya activo; versión informada por /api/version: ' + $bridgeVersion + '. No se inicia otra instancia.')
  exit 0
}
if (-not (Test-Path -LiteralPath $Server -PathType Leaf)) { Write-BridgeLog ("ERROR: no existe el servidor: " + $Server); exit 11 }
if (-not (Test-Path -LiteralPath $Runner -PathType Leaf)) { Write-BridgeLog ("ERROR: no existe el lanzador independiente: " + $Runner); exit 12 }
# El CMD redirige la salida y se crea mediante Win32_Process para evitar que Orca
# termine el servidor al cerrar su árbol de procesos de postprocesado.
try {
  # Win32_Process.Create debe lanzar cmd.exe para ejecutar archivos .cmd.
  # Las comillas dobles exteriores permiten que cmd.exe conserve la ruta completa.
  $ComSpec = Join-Path $env:SystemRoot 'System32\cmd.exe'
  $cmdLine = '"' + $ComSpec + '" /d /s /c ""' + $Runner + '""'
  $created = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = $cmdLine; CurrentDirectory = $Root } -ErrorAction Stop
  if ($created.ReturnValue -ne 0) { Write-BridgeLog ("ERROR Win32_Process.Create: código " + $created.ReturnValue); exit 13 }
  Write-BridgeLog ("Arranque independiente solicitado mediante WMI. PID=" + $created.ProcessId + '; stdout=' + $Stdout + '; stderr=' + $Stderr)
} catch {
  Write-BridgeLog ("ERROR al crear proceso independiente: " + $_.Exception.Message)
  exit 14
}
for ($i = 1; $i -le 25; $i++) {
  Start-Sleep -Seconds 1
  if (Test-Bridge) { $bridgeVersion = Get-BridgeVersion; Write-BridgeLog ("Puente local responde en /api/version tras {0} s; versión informada: {1}." -f $i,$bridgeVersion); exit 0 }
}
Write-BridgeLog 'ERROR: el puente no respondió en 25 segundos. Revisar Puente_U1_inicio_stdout.log y Puente_U1_inicio_stderr.log.'
if (Test-Path -LiteralPath $Stdout) { try { Write-BridgeLog ('Última salida stdout: ' + ((Get-Content -LiteralPath $Stdout -Tail 8 -ErrorAction SilentlyContinue) -join ' | ')) } catch {} }
if (Test-Path -LiteralPath $Stderr) { try { Write-BridgeLog ('Última salida stderr: ' + ((Get-Content -LiteralPath $Stderr -Tail 8 -ErrorAction SilentlyContinue) -join ' | ')) } catch {} }
exit 15
