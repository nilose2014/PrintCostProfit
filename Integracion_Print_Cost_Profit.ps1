param([Parameter(ValueFromRemainingArguments=$true)][string[]]$InputArgs)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$logPath = Join-Path $root 'Integracion_Print_Cost_Profit.log'
function Write-IntegrationLog([string]$message) {
  try { Add-Content -LiteralPath $logPath -Value ('[' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + '] ' + $message) -Encoding UTF8 } catch { }
}
$versionFile = Join-Path $root 'VERSION'
$appVersion = 'desconocida'
if (Test-Path -LiteralPath $versionFile) {
  $versionValue = (Get-Content -LiteralPath $versionFile -Raw -ErrorAction SilentlyContinue).Trim()
  if ($versionValue -match '^\d+\.\d+(?:\.\d+)?$') { $appVersion = $versionValue }
}
Write-IntegrationLog ('Inicio del postprocesado v' + $appVersion + ' (HTML único; copia integrada temporal generada desde Print_Cost_Profit.html).')
trap { Write-IntegrationLog ('ERROR: ' + $_.Exception.Message); throw }
$htmlPath = Join-Path $root 'Print_Cost_Profit.html'
if (-not (Test-Path -LiteralPath $htmlPath)) { throw "No se encuentra la calculadora: $htmlPath" }
# Acepta la ruta recibida por Orca o por el BAT de prueba, aunque haya espacios.
$gcodePath = $null
foreach ($arg in $InputArgs) {
  if ($arg) {
    $candidate = [string]$arg
    $candidate = $candidate.Trim().Trim('"')
    if ((Test-Path -LiteralPath $candidate -PathType Leaf) -and ([IO.Path]::GetExtension($candidate) -match '^\.(gcode|gco|gc|pp)$')) {
      $gcodePath = (Resolve-Path -LiteralPath $candidate).Path
      break
    }
  }
}
if (-not $gcodePath) {
  Write-IntegrationLog ('No se encontró una ruta G-code válida. Argumentos recibidos: ' + ($InputArgs -join ' | '))
  throw 'No se recibió una ruta válida de G-code. Orca puede pasar un archivo temporal con extensión .gcode.pp; la integración 1.13 también admite esa extensión. Para probar manualmente, arrastra un .gcode sobre Probar_Integracion_con_Gcode.bat.'
}
Write-IntegrationLog ('G-code detectado: ' + $gcodePath)
# Lee como UTF-8 y elimina BOM si lo hubiera.
$text = [IO.File]::ReadAllText($gcodePath, [Text.Encoding]::UTF8)
function Find-LineValue([string]$pattern) {
  $m = [regex]::Match($text, $pattern, [Text.RegularExpressions.RegexOptions]::IgnoreCase -bor [Text.RegularExpressions.RegexOptions]::Multiline)
  if ($m.Success) { return $m.Groups[1].Value.Trim() }
  return ''
}
function Parse-Number([string]$s) {
  $s = ([string]$s).Trim().Replace(',', '.')
  $v = 0.0
  [void][double]::TryParse($s,[Globalization.NumberStyles]::Float,[Globalization.CultureInfo]::InvariantCulture,[ref]$v)
  return $v
}
function Get-ColorName([string]$hex) {
  $h = ([string]$hex).Trim().TrimStart('#').ToUpperInvariant()
  switch ($h) {
    '000000' { return 'Negro' }
    'FFFFFF' { return 'Blanco' }
    'FF0000' { return 'Rojo' }
    '00FF00' { return 'Verde' }
    '0000FF' { return 'Azul' }
    'FFFF00' { return 'Amarillo' }
    'FF00FF' { return 'Magenta' }
    'FF80C0' { return 'Rosa' }
    'FFC0CB' { return 'Rosa' }
    '9D2235' { return 'Burdeos' }
    '800000' { return 'Granate' }
    '808080' { return 'Gris' }
    'C0C0C0' { return 'Gris plata' }
    'A52A2A' { return 'Marrón' }
    'FFA500' { return 'Naranja' }
    'FF8000' { return 'Naranja' }
    '800080' { return 'Morado' }
    'A020F0' { return 'Púrpura' }
    '00FFFF' { return 'Cian' }
    '008000' { return 'Verde oscuro' }
    '000080' { return 'Azul marino' }
    'F5F5DC' { return 'Beige' }
    'FFD700' { return 'Dorado' }
    'F5F5F5' { return 'Blanco roto' }
    default { return 'Color personalizado' }
  }
}
function Parse-Hours([string]$s) {
  $s = ([string]$s).Trim()
  $m = [regex]::Match($s,'(?:(\d+)d\s*)?(?:(\d+)h\s*)?(?:(\d+)m\s*)?(?:(\d+)s)?',[Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if (-not $m.Success -or -not $m.Value.Trim()) { return 0.0 }
  $d=0.0;$h=0.0;$mi=0.0;$sec=0.0
  if($m.Groups[1].Success){$d=Parse-Number $m.Groups[1].Value}
  if($m.Groups[2].Success){$h=Parse-Number $m.Groups[2].Value}
  if($m.Groups[3].Success){$mi=Parse-Number $m.Groups[3].Value}
  if($m.Groups[4].Success){$sec=Parse-Number $m.Groups[4].Value}
  return $d*24+$h+$mi/60+$sec/3600
}
$rawFileName = [IO.Path]::GetFileName($gcodePath)
# Orca puede pasar un archivo temporal .<id>.<id>.gcode.pp. Elimina ambas extensiones para detectar correctamente el nombre temporal.
$base = $rawFileName -replace '(?i)\.gcode\.pp$','' -replace '(?i)\.(gcode|gco|gc|pp)$',''
$isTemporaryOrcaName = ($rawFileName -match '(?i)^\.?\d+(?:\.\d+)+\.gcode(?:\.pp)?$') -or ($rawFileName -match '(?i)^\.?\d+(?:\.\d+)+$')
# Orca puede pasar un archivo temporal (.54640.1.gcode.pp); prioriza el nombre del proyecto/modelo dentro del G-code.
$projectName = Find-LineValue '^;\s*(?:project_name|project name|model_name|model name|object name|print name|plate_name|plate name)\s*[:=]\s*(.+)$'
if ($projectName -and $projectName -notmatch '(?i)\.gcode(?:\.pp)?$' -and $projectName -notmatch '^\.?\d+(?:\.\d+)+$') { $base = $projectName.Trim() }
elseif ($isTemporaryOrcaName -or $base -match '^\.?\d+(?:\.\d+)+$') { $base = '' }
# Si Orca entrega un archivo temporal, recupera el nombre a partir de los objetos comentados en el G-code.
if (-not $base) {
  $objectNames = [regex]::Matches($text, '(?im)^;\s*printing object\s+(.+?)\s+id:') | ForEach-Object { $_.Groups[1].Value.Trim() -replace '\.(stl|3mf|obj|amf)$','' } | Where-Object { $_ } | Select-Object -Unique
  $bestObject = $objectNames | Sort-Object { $_.Length } -Descending | Select-Object -First 1
  if ($bestObject) { $base = $bestObject }
}
if (-not $base) { $base = 'Pieza importada' }
$timeText = Find-LineValue '^;\s*estimated printing time(?:\s*\([^)]*\))?\s*=\s*(.+)$'
if (-not $timeText) { $timeText = Find-LineValue '^;\s*(?:total estimated time|model printing time)\s*[:=]\s*(.+)$' }
$hours = Parse-Hours $timeText
if ($hours -le 0) {
  $tm = [regex]::Match($base,'(?:(\d+)h)?(\d+)m(?:(\d+)s)?','IgnoreCase')
  if ($tm.Success) {
    $hh=0.0;$mm=0.0;$ss=0.0
    if($tm.Groups[1].Success){$hh=Parse-Number $tm.Groups[1].Value}
    if($tm.Groups[2].Success){$mm=Parse-Number $tm.Groups[2].Value}
    if($tm.Groups[3].Success){$ss=Parse-Number $tm.Groups[3].Value}
    $hours=$hh+$mm/60+$ss/3600
    $timeText='detectado del nombre del archivo'
  }
}
# Importante: busca el comentario por herramienta, no confunde el total agregado con la lista de herramientas.
$weightsLine = Find-LineValue '^;\s*filament used\s*\[g\]\s*=\s*(.+)$'
$weightValues = @()
if ($weightsLine) { $weightValues = @($weightsLine -split '[,;]' | ForEach-Object { Parse-Number $_ }) }
if (-not ($weightValues | Where-Object { $_ -gt 0 })) {
  $totalLine = Find-LineValue '^;\s*total filament used\s*\[g\]\s*=\s*([\d.,]+)'
  if ($totalLine) { $weightValues = @((Parse-Number $totalLine)) }
}
$typesLine = Find-LineValue '^;\s*filament_type\s*=\s*(.+)$'
if (-not $typesLine) { $typesLine = Find-LineValue '^;\s*filament type\s*=\s*(.+)$' }
$types = if ($typesLine) { @($typesLine -split '[;,]' | ForEach-Object { $_.Trim() }) } else { @() }
$colorsLine = Find-LineValue '^;\s*filament_colour\s*=\s*(.+)$'
$colors = if ($colorsLine) { @($colorsLine -split '[;,]' | ForEach-Object { $_.Trim() }) } else { @() }
# Orca metadata `filament_cost` is the configured spool price per kg; use 20 €/kg only if absent.
$priceLine = Find-LineValue '^;\s*filament_cost\s*=\s*(.+)$'
$prices = if ($priceLine) { @($priceLine -split '[,;]' | ForEach-Object { Parse-Number $_ }) } else { @() }
$vendorLine = Find-LineValue '^;\s*filament_vendor\s*=\s*(.+)$'
$vendors = if ($vendorLine) { @($vendorLine -split '[;,]' | ForEach-Object { $_.Trim() }) } else { @() }
$settingsLine = Find-LineValue '^;\s*filament_settings_id\s*=\s*(.+)$'
$settingsIds = if ($settingsLine) { @($settingsLine -split '[;,]' | ForEach-Object { $_.Trim() }) } else { @() }
$filaments = @()
for ($i=0; $i -lt $weightValues.Count; $i++) {
  $g = [double]$weightValues[$i]
  if ($g -le 0) { continue }
  $nameParts = @()
  if ($i -lt $types.Count -and $types[$i] -and $types[$i] -ne 'nil') { $nameParts += $types[$i] }
  if ($i -lt $colors.Count -and $colors[$i] -and $colors[$i] -ne 'nil') {
    $hexColor = $colors[$i].Trim()
    $colorName = Get-ColorName $hexColor
    $nameParts += ($colorName + ' (' + $hexColor.ToUpperInvariant() + ')')
  }
  $label = if ($nameParts.Count) { $nameParts -join ' · ' } else { "Filamento T$i" }
  $price = if ($i -lt $prices.Count -and $prices[$i] -gt 0) { [double]$prices[$i] } else { 20.0 }
  $vendor = if ($i -lt $vendors.Count -and $vendors[$i] -and $vendors[$i] -ne 'nil') { $vendors[$i] } else { '' }
  $settingsId = if ($i -lt $settingsIds.Count -and $settingsIds[$i] -and $settingsIds[$i] -ne 'nil') { $settingsIds[$i] } else { '' }
  $hex = if ($i -lt $colors.Count -and $colors[$i]) { $colors[$i] } else { '' }
  $material = if ($i -lt $types.Count -and $types[$i]) { $types[$i] } else { '' }
  $filaments += [pscustomobject]@{ name=$label; material=$material; brand=$vendor; profile=$settingsId; color=$hex; grams=[math]::Round($g,3); price=$price; tool=$i }
}
# HTML ÚNICO: Print_Cost_Profit.html es la única fuente mantenida. Se genera una copia integrada temporal con los datos del G-code para evitar problemas de file:// en Opera/Chrome.
# Extrae la miniatura directamente del G-code durante el postprocesado de Orca.
# Los formatos habituales de Orca/Bambu/Prusa guardan imágenes Base64 entre comentarios ; thumbnail begin/end.
$thumbnailData = ''
try {
  $thumbMatches = [regex]::Matches($text, '(?im)^;\s*thumbnail(?:\s+begin)?\s+(\d+)x(\d+)(?:\s+\d+)?\s*\r?\n([\s\S]*?)^;\s*thumbnail\s+end\s*$')
  $bestArea = 0
  foreach ($tm in $thumbMatches) {
    $w = [int]$tm.Groups[1].Value; $h = [int]$tm.Groups[2].Value
    $b64 = ($tm.Groups[3].Value -split '\r?\n' | ForEach-Object { $_ -replace '^;\s?', '' -replace '\s', '' }) -join ''
    if ($b64 -match '^[A-Za-z0-9+/]+={0,2}$' -and ($w * $h) -gt $bestArea) {
      $mime = if ($b64.StartsWith('iVBOR')) { 'image/png' } elseif ($b64.StartsWith('/9j/')) { 'image/jpeg' } else { 'image/png' }
      $thumbnailData = 'data:' + $mime + ';base64,' + $b64
      $bestArea = $w * $h
    }
  }
} catch { Write-IntegrationLog ('No se pudo extraer la miniatura del G-code: ' + $_.Exception.Message) }
if ($thumbnailData) { Write-IntegrationLog ('Miniatura extraída automáticamente del G-code (' + $bestArea + ' píxeles aprox.).') } else { Write-IntegrationLog 'El G-code no contiene una miniatura compatible; la calculadora abrirá sin imagen automática.' }
$layerLine = Find-LineValue '^;\s*total layer number\s*:\s*(.+)$'
$heightLine = Find-LineValue '^;\s*max_z_height\s*:\s*(.+)$'
$diameterLine = Find-LineValue '^;\s*filament_diameter\s*:\s*(.+)$'
$densityLine = Find-LineValue '^;\s*filament_density\s*:\s*(.+)$'
$machineLine = Find-LineValue '^;\s*(?:printer_model|printer_settings_id|machine_name)\s*[:=]\s*(.+)$'
$payload = [pscustomobject]@{
 source='Snapmaker Orca · integración local'
 filename=if ($isTemporaryOrcaName) { $base + '.gcode' } else { [IO.Path]::GetFileName($gcodePath) }
 pieceName=$base
 hours=[math]::Round($hours,8)
 timeText=$timeText
 filaments=$filaments
 fullPath=$gcodePath
 thumbnailData=$thumbnailData
 layers=$layerLine
 maxZHeight=$heightLine
 filamentDiameter=$diameterLine
 filamentDensity=$densityLine
 machine=$machineLine
 integrationVersion='1.73'
}
$json = $payload | ConvertTo-Json -Depth 6 -Compress
$json = $json.Replace('<','\u003c').Replace('>','\u003e').Replace('&','\u0026')
$html = [IO.File]::ReadAllText($htmlPath, [Text.Encoding]::UTF8)
$scriptTag = '<script>window.PCP_INTEGRATION_DATA = ' + $json + ';</script>'
if ($html -notmatch '(?i)</head>\s*<body') { throw 'La página de la calculadora no contiene </head> seguido de <body>.' }
# Insertar solo en el cierre real de <head> del documento principal. No tocar </head><body> que aparezca dentro de cadenas JavaScript (por ejemplo, el HTML del informe PDF).
$html = [regex]::Replace($html,'(?i)</head>(?=\r?\n\s*<body)',[System.Text.RegularExpressions.MatchEvaluator]{ param($m) $scriptTag + $m.Value },1)
$integratedPath = Join-Path $root 'Print_Cost_Profit_Integrado.html'
[IO.File]::WriteAllText($integratedPath,$html,[Text.UTF8Encoding]::new($false))
# Abrir una sola vez con el navegador predeterminado de Windows.
# No invocar Chrome/Edge/Opera directamente: eso podía generar pestañas extra
# y URLs literales como http://+/ o $integratedPath.
Write-Host ''
Write-IntegrationLog ('Datos analizados. Archivo=' + [IO.Path]::GetFileName($gcodePath) + '; Tiempo=' + $timeText + '; horas=' + $hours + '; gramos=' + (($filaments | ForEach-Object { $_.grams }) -join ',') + '; materiales=' + $filaments.Count + '; miniatura=' + [bool]$thumbnailData + '; precios/kg=' + (($filaments | ForEach-Object { $_.price }) -join ',') + '; archivo integrado=' + $integratedPath)
Write-Host 'Print Cost & Profit: datos importados correctamente.' -ForegroundColor Green
Write-Host ('Archivo: ' + [IO.Path]::GetFileName($gcodePath))
Write-Host ('Tiempo detectado: ' + $timeText)
Write-Host ('Materiales detectados: ' + $filaments.Count)
Write-Host 'Abriendo una única ventana de la calculadora...' -ForegroundColor Cyan
# Abrir la calculadora a traves del servidor local compartido, no mediante file://.
# El servidor entrega la copia integrada generada en tiempo de ejecución. No se distribuye ni mantiene un segundo HTML; conserva PCP_INTEGRATION_DATA y permite al panel consultar /api/u1/status.
$integratedUri = 'http://127.0.0.1:8700/'
Start-Process -FilePath $integratedUri
Write-IntegrationLog ('Solicitud de apertura enviada al navegador predeterminado mediante el puente local: ' + $integratedUri)
Write-IntegrationLog 'Fin del postprocesado sin errores.'
# Notificación visible breve para que se note que el postprocesado ha terminado.
try {
  Add-Type -AssemblyName System.Windows.Forms
  $notify = New-Object System.Windows.Forms.NotifyIcon
  $notify.Icon = [System.Drawing.SystemIcons]::Information
  $notify.Visible = $true
  $notify.BalloonTipTitle = 'Print Cost & Profit'
  $notify.BalloonTipText = 'Datos del laminado importados. La calculadora se está abriendo.'
  $notify.ShowBalloonTip(5000)
  Start-Sleep -Milliseconds 1800
  $notify.Dispose()
} catch { }
Start-Sleep -Seconds 1
