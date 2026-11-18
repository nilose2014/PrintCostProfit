$ErrorActionPreference = 'Stop'
$Root = $PSScriptRoot
Set-Location -LiteralPath $Root

Write-Host ''
Write-Host 'PRINT COST & PROFIT 2.0 - COMPILADOR WINDOWS x64' -ForegroundColor Cyan
Write-Host '================================================' -ForegroundColor Cyan

$node = Get-Command node.exe -ErrorAction SilentlyContinue
if (-not $node) { $node = Get-Command node -ErrorAction SilentlyContinue }
if (-not $node) { throw 'No se encuentra Node.js. Instala Node.js 22.12 o posterior.' }
$nodeVersionText = (& $node.Source --version).Trim().TrimStart('v')
try { $nodeVersion = [version]$nodeVersionText } catch { throw "No se pudo identificar Node.js: $nodeVersionText" }
if ($nodeVersion -lt [version]'22.12.0') { throw "Se necesita Node.js 22.12 o posterior. Detectado: $nodeVersionText" }

$npm = Get-Command npm.cmd -ErrorAction SilentlyContinue
if (-not $npm) { $npm = Get-Command npm -ErrorAction SilentlyContinue }
if (-not $npm) { throw 'No se encuentra npm. Reinstala Node.js incluyendo npm.' }

Write-Host "Node.js: $nodeVersionText" -ForegroundColor Green
Write-Host 'Instalando dependencias...' -ForegroundColor Yellow
& $npm.Source install --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { throw "npm install terminó con código $LASTEXITCODE" }

Write-Host 'Compilando instalador y versión portable (Windows x64)...' -ForegroundColor Yellow
& $npm.Source run dist:win
if ($LASTEXITCODE -ne 0) { throw "La compilación terminó con código $LASTEXITCODE" }

$dist = Join-Path $Root 'dist'
$installer = Join-Path $dist 'PrintCostProfit-Setup.exe'
$portable = Join-Path $dist 'PrintCostProfit-Portable.exe'
if (-not (Test-Path -LiteralPath $installer -PathType Leaf)) { throw "No se encontró $installer" }
if (-not (Test-Path -LiteralPath $portable -PathType Leaf)) { throw "No se encontró $portable" }
$portableZip = Join-Path $dist 'PrintCostProfit-Portable-v2.0.zip'
Compress-Archive -LiteralPath $portable -DestinationPath $portableZip -Force

Write-Host ''
Write-Host 'COMPILACIÓN WINDOWS 2.0 TERMINADA' -ForegroundColor Green
Write-Host "Instalador: $installer" -ForegroundColor Green
Write-Host "Portable:   $portable" -ForegroundColor Green
Write-Host "ZIP:        $portableZip" -ForegroundColor Green
Write-Host 'Los tres paquetes pertenecen a la misma versión pública 2.0.' -ForegroundColor Gray
