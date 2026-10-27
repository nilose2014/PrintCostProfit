param([string]$PrinterUrl,[string]$ResolvedPath,[string]$FileName,[string]$StateFile)
$ErrorActionPreference='Stop'
function Save-State($obj) { $tmp=$StateFile+'.tmp'; ($obj|ConvertTo-Json -Depth 12 -Compress)|Set-Content -LiteralPath $tmp -Encoding UTF8; Move-Item -LiteralPath $tmp -Destination $StateFile -Force }
$downloadPath=$null
try {
  Save-State @{ok=$true;state='reading';progress=0;bytesRead=0;totalBytes=0;filename=$FileName;message='Conectando con Moonraker…'}
  # Moonraker espera la ruta con sus separadores intactos y cada segmento escapado
  # por separado. Escapar la ruta completa convierte las barras en %2F y puede
  # provocar HTTP 502 con nombres Unicode o G-code dentro de subcarpetas.
  # Algunas versiones de Moonraker anuncian rutas con prefijo "gcodes/" y otras
  # devuelven solo la ruta relativa a gcodes. Probar ambas formas evita un 404 falso.
  $candidatePaths = New-Object System.Collections.Generic.List[string]
  $primary = ([string]$ResolvedPath).TrimStart('/')
  if (-not [string]::IsNullOrWhiteSpace($primary)) { $candidatePaths.Add($primary) }
  $leaf = ([string]$FileName).TrimStart('/')
  if (-not [string]::IsNullOrWhiteSpace($leaf) -and -not $candidatePaths.Contains($leaf)) { $candidatePaths.Add($leaf) }
  if ($primary.StartsWith('gcodes/', [StringComparison]::OrdinalIgnoreCase)) {
    $relative = $primary.Substring(7)
    if (-not [string]::IsNullOrWhiteSpace($relative) -and -not $candidatePaths.Contains($relative)) { $candidatePaths.Add($relative) }
  }
  $resp = $null; $url = ''; $lastDownloadError = $null
  foreach ($candidate in $candidatePaths) {
    try {
      $segments = @(([string]$candidate -split '/'))
      $enc = (($segments | ForEach-Object { [Uri]::EscapeDataString($_) }) -join '/')
      $tryUrl = "$PrinterUrl/server/files/gcodes/$enc"
      $req=[Net.HttpWebRequest]::Create($tryUrl); $req.Method='GET'; $req.Timeout=30000; $req.ReadWriteTimeout=30000
      $resp=$req.GetResponse(); $url=$tryUrl; $ResolvedPath=$candidate; break
    } catch {
      $lastDownloadError = $_.Exception.Message
      if ($_.Exception.Response) { try { $_.Exception.Response.Dispose() } catch {} }
    }
  }
  if (-not $resp) { throw ("Moonraker no encontró el G-code. Rutas probadas: " + ($candidatePaths -join ' | ') + ". Último error: " + $lastDownloadError) }
  $total=[long]$resp.ContentLength
  $downloadPath=[IO.Path]::Combine([IO.Path]::GetDirectoryName($StateFile),([Guid]::NewGuid().ToString('N')+'.gcode.tmp'))
  $input=$resp.GetResponseStream(); $output=[IO.File]::Open($downloadPath,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::Read)
  $buffer=New-Object byte[] (1024*1024); [long]$readTotal=0; $lastUpdate=Get-Date
  while(($n=$input.Read($buffer,0,$buffer.Length)) -gt 0) { $output.Write($buffer,0,$n); $readTotal += $n; if(((Get-Date)-$lastUpdate).TotalMilliseconds -ge 250) { $pct=if($total -gt 0){[math]::Min(99,[math]::Floor($readTotal*100/$total))}else{0}; Save-State @{ok=$true;state='reading';progress=$pct;bytesRead=$readTotal;totalBytes=$total;filename=$FileName;message=('Leyendo datos del G-code… {0}%' -f $pct)}; $lastUpdate=Get-Date } }
  $output.Dispose(); $input.Dispose(); $resp.Dispose()
  Save-State @{ok=$true;state='parsing';progress=99;bytesRead=$readTotal;totalBytes=$total;filename=$FileName;message='Analizando los metadatos de los filamentos…'}
  # Leer el G-code línea a línea evita cargar el archivo completo en memoria.
  # Se conservan los mismos metadatos y se busca en todo el archivo, no solo en la cabecera.
  $gm=$null; $cm=$null; $tm=$null
  $reader=[IO.StreamReader]::new($downloadPath,[Text.Encoding]::UTF8,$true)
  try {
    while (($line=$reader.ReadLine()) -ne $null) {
      if (-not $gm) { $m=[regex]::Match($line,'(?i)^;\s*filament used \[g\]\s*=\s*(.+)$'); if ($m.Success) { $gm=$m } }
      if (-not $cm) { $m=[regex]::Match($line,'(?i)^;\s*filament_colour\s*=\s*(.+)$'); if ($m.Success) { $cm=$m } }
      if (-not $tm) { $m=[regex]::Match($line,'(?i)^;\s*filament_type\s*=\s*(.+)$'); if ($m.Success) { $tm=$m } }
      if ($gm -and $cm -and $tm) { break }
    }
  } finally { $reader.Dispose() }
  if(-not $gm.Success){throw 'El G-code completo no contiene el metadato filament used [g].'}
  $grams=@($gm.Groups[1].Value -split '\s*,\s*' | ForEach-Object {[double]::Parse($_,[Globalization.CultureInfo]::InvariantCulture)})
  $colors=@(); if($cm.Success){$colors=@($cm.Groups[1].Value -split ';')}; $types=@();if($tm.Success){$types=@($tm.Groups[1].Value -split ';')}
  $items=@();for($i=0;$i -lt $grams.Count;$i++){ $color=if($i -lt $colors.Count){$colors[$i].Trim()}else{''};$material=if($i -lt $types.Count -and $types[$i].Trim()){$types[$i].Trim()}else{'Filamento'}; $items+=@{extruder=$i+1;material=$material;name="$material $color".Trim();color=$color;colorName=$color;grams=$grams[$i]} }
  if($items.Count -lt 1){throw 'No se encontraron filamentos en el G-code completo.'}
  Save-State @{ok=$true;state='completed';progress=100;bytesRead=$readTotal;totalBytes=$total;filename=$FileName;items=$items;totalGrams=[math]::Round(($grams|Measure-Object -Sum).Sum,2);source='G-code completo leído de Moonraker';message='Lectura completada.'}
} catch { try { Save-State @{ok=$false;state='error';progress=0;filename=$FileName;error=$_.Exception.Message;message='No se pudo leer el G-code.'} } catch {} }
finally { if($downloadPath -and (Test-Path $downloadPath)){Remove-Item -LiteralPath $downloadPath -Force -ErrorAction SilentlyContinue} }
