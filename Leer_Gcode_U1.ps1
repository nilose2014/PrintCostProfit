param([string]$PrinterUrl,[string]$ResolvedPath,[string]$FileName,[string]$StateFile)
$ErrorActionPreference='Stop'
function Save-State($obj) {
  $tmp=$StateFile+'.tmp'
  ($obj|ConvertTo-Json -Depth 12 -Compress)|Set-Content -LiteralPath $tmp -Encoding UTF8
  Move-Item -LiteralPath $tmp -Destination $StateFile -Force
}
try {
  Save-State @{ok=$true;state='reading';progress=0;bytesRead=0;totalBytes=0;filename=$FileName;message='Conectando con Moonraker…'}
  # Los metadatos de filamento y la miniatura están en la cabecera del G-code.
  # No descargar el archivo entero: pedir solo los primeros 8 MiB y limitar
  # también la lectura local por si Moonraker ignora la cabecera Range.
  $candidatePaths=New-Object System.Collections.Generic.List[string]
  $primary=([string]$ResolvedPath).TrimStart('/')
  if(-not [string]::IsNullOrWhiteSpace($primary)){$candidatePaths.Add($primary)}
  $leaf=([string]$FileName).TrimStart('/')
  if (-not [string]::IsNullOrWhiteSpace($leaf) -and -not $candidatePaths.Contains($leaf)){$candidatePaths.Add($leaf)}
  if($primary.StartsWith('gcodes/',[StringComparison]::OrdinalIgnoreCase)){
    $relative=$primary.Substring(7)
    if (-not [string]::IsNullOrWhiteSpace($relative) -and -not $candidatePaths.Contains($relative)){$candidatePaths.Add($relative)}
  }
  $resp=$null;$lastDownloadError=$null;$maxHeaderBytes=8MB
  foreach($candidate in $candidatePaths){
    try{
      $segments=@(([string]$candidate -split '/'))
      $enc=(($segments|ForEach-Object{[Uri]::EscapeDataString($_)}) -join '/')
      $tryUrl="$PrinterUrl/server/files/gcodes/$enc"
      $req=[Net.HttpWebRequest]::Create($tryUrl);$req.Method='GET';$req.Timeout=20000;$req.ReadWriteTimeout=20000
      try{$req.AddRange(0,$maxHeaderBytes-1)}catch{}
      $resp=$req.GetResponse();$ResolvedPath=$candidate;break
    }catch{
      $lastDownloadError=$_.Exception.Message
      if($_.Exception.Response){try{$_.Exception.Response.Dispose()}catch{}}
    }
  }
  if(-not $resp){throw("Moonraker no encontró el G-code. Rutas probadas: "+($candidatePaths -join ' | ')+". Último error: "+$lastDownloadError)}
  $total=[long]$resp.ContentLength
  $stream=$resp.GetResponseStream();$memory=New-Object IO.MemoryStream
  $buffer=New-Object byte[] 65536;[long]$readTotal=0
  while($readTotal -lt $maxHeaderBytes){
    $remaining=[int][Math]::Min([long]$buffer.Length,$maxHeaderBytes-$readTotal)
    $n=$stream.Read($buffer,0,$remaining)
    if($n -le 0){break}
    $memory.Write($buffer,0,$n);$readTotal+=$n
    $pct=if ($total -gt 0) { [math]::Min(85,[math]::Max(10,[math]::Floor($readTotal*85/[math]::Min($total,$maxHeaderBytes)))) } else { 85 }
    Save-State @{ok=$true;state='reading';progress=$pct;bytesRead=$readTotal;totalBytes=[Math]::Min($total,$maxHeaderBytes);filename=$FileName;message=('Leyendo datos del G-code… {0}%' -f $pct)}
  }
  $stream.Dispose();$resp.Dispose()
  $headerBytes=$memory.ToArray();$memory.Dispose()
  if($headerBytes.Length -eq 0){throw 'Moonraker devolvió una cabecera G-code vacía.'}
  $headerText=[Text.Encoding]::UTF8.GetString($headerBytes)
  # Buscar metadatos únicamente en la cabecera descargada.
  $gm=[regex]::Match($headerText,'(?im)^;\s*filament used \[g\]\s*=\s*(.+)$')
  $cm=[regex]::Match($headerText,'(?im)^;\s*filament_colour\s*=\s*(.+)$')
  $tm=[regex]::Match($headerText,'(?im)^;\s*filament_type\s*=\s*(.+)$')
  if(-not $gm.Success){throw 'No se encontró «filament used [g]» en los primeros 8 MiB del G-code. No se descargó el archivo completo.'}
  Save-State @{ok=$true;state='parsing';progress=95;bytesRead=$readTotal;totalBytes=$readTotal;filename=$FileName;message='Analizando los metadatos de los filamentos…'}
  $grams=@($gm.Groups[1].Value -split '\s*,\s*'|ForEach-Object{[double]::Parse($_,[Globalization.CultureInfo]::InvariantCulture)})
  $colors=@();if($cm.Success){$colors=@($cm.Groups[1].Value -split ';')}
  $types=@();if($tm.Success){$types=@($tm.Groups[1].Value -split ';')}
  $items=@()
  for($i=0;$i -lt $grams.Count;$i++){
    $color=if($i -lt $colors.Count){$colors[$i].Trim()}else{''}
    $material=if($i -lt $types.Count -and $types[$i].Trim()){$types[$i].Trim()}else{'Filamento'}
    $items+=@{extruder=$i+1;material=$material;name="$material $color".Trim();color=$color;colorName=$color;grams=$grams[$i]}
  }
  if($items.Count -lt 1){throw 'No se encontraron filamentos en los metadatos de la cabecera.'}
  # La miniatura también está en la cabecera; no requiere leer el resto del archivo.
  $thumbnailData=''
  try{
    $thumbMatches=[regex]::Matches($headerText,'(?im)^;\s*thumbnail(?:\s+begin)?\s+(\d+)x(\d+)(?:\s+\d+)?\s*\r?\n([\s\S]*?)^;\s*thumbnail\s+end\s*$')
    $bestArea=0
    foreach($thumbMatch in $thumbMatches){
      $width=[int]$thumbMatch.Groups[1].Value;$height=[int]$thumbMatch.Groups[2].Value;$area=$width*$height
      if($area -le $bestArea){continue}
      $b64=($thumbMatch.Groups[3].Value -split '\r?\n'|ForEach-Object{$_ -replace '^;\s?','' -replace '\s',''}) -join ''
      if($b64 -notmatch '^[A-Za-z0-9+/]+={0,2}$'){continue}
      try{$imageBytes=[Convert]::FromBase64String($b64)}catch{continue}
      if($imageBytes.Length -lt 12){continue}
      $mime=''
      if($imageBytes[0]-eq 137 -and $imageBytes[1]-eq 80 -and $imageBytes[2]-eq 78 -and $imageBytes[3]-eq 71){$mime='image/png'}
      elseif($imageBytes[0]-eq 255 -and $imageBytes[1]-eq 216){$mime='image/jpeg'}
      elseif([Text.Encoding]::ASCII.GetString($imageBytes,0,4)-eq 'RIFF' -and [Text.Encoding]::ASCII.GetString($imageBytes,8,4)-eq 'WEBP'){$mime='image/webp'}
      if($mime){$thumbnailData='data:'+$mime+';base64,'+$b64;$bestArea=$area}
    }
  }catch{$thumbnailData=''}
  Save-State @{ok=$true;state='completed';progress=100;bytesRead=$readTotal;totalBytes=$readTotal;filename=$FileName;items=$items;totalGrams=[math]::Round(($grams|Measure-Object -Sum).Sum,2);thumbnailData=$thumbnailData;source='Metadatos de cabecera leídos de Moonraker';message='Lectura completada.'}
}catch{
  try{Save-State @{ok=$false;state='error';progress=0;filename=$FileName;error=$_.Exception.Message;message='No se pudo leer el G-code.'}}catch{}
}finally{
  if($stream){try{$stream.Dispose()}catch{}}
  if($resp){try{$resp.Dispose()}catch{}}
  if($memory){try{$memory.Dispose()}catch{}}
}
