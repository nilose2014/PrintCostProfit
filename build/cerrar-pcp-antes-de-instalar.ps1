param([string]$InstallRoot = '')
$ErrorActionPreference = 'Stop'
$logPaths = @()
try { $logPaths += (Join-Path $env:TEMP 'PCP_installer_close.log') } catch {}
try { $logPaths += (Join-Path $env:ProgramData 'PrintCostProfit\logs\PCP_installer_close.log') } catch {}
function Write-PCPLog([string]$text) {
    $line = [DateTime]::Now.ToString('yyyy-MM-dd HH:mm:ss') + ' ' + $text
    foreach ($path in $logPaths) {
        try {
            $dir = [IO.Path]::GetDirectoryName($path)
            if (-not [IO.Directory]::Exists($dir)) { [IO.Directory]::CreateDirectory($dir) | Out-Null }
            [IO.File]::AppendAllText($path, $line + [Environment]::NewLine, [Text.Encoding]::UTF8)
        } catch {}
    }
}
if ([string]::IsNullOrWhiteSpace($InstallRoot)) {
    Write-PCPLog 'ERROR: InstallRoot no recibido.'
    exit 2
}
try {
    $root = [IO.Path]::GetFullPath($InstallRoot).TrimEnd('\')
    $mainExe = [IO.Path]::GetFullPath((Join-Path $root 'Print Cost & Profit.exe'))
    $serverScript = [IO.Path]::GetFullPath((Join-Path $root 'resources\pcp-app\Servidor_Panel_U1.ps1'))
} catch {
    Write-PCPLog ('ERROR preparando rutas: ' + $_.Exception.Message)
    exit 2
}
function Get-PCPRoots {
    $all = @(Get-CimInstance -ClassName Win32_Process -ErrorAction Stop)
    $main = @($all | Where-Object {
        $_.Name -ieq 'Print Cost & Profit.exe' -and $_.ExecutablePath -and
        [IO.Path]::GetFullPath($_.ExecutablePath).Equals($mainExe,[StringComparison]::OrdinalIgnoreCase)
    })
    $server = @($all | Where-Object {
        $_.Name -ieq 'powershell.exe' -and $_.CommandLine -and
        $_.CommandLine.IndexOf('Servidor_Panel_U1.ps1',[StringComparison]::OrdinalIgnoreCase) -ge 0 -and
        $_.CommandLine.IndexOf($serverScript,[StringComparison]::OrdinalIgnoreCase) -ge 0
    })
    return @{ All=$all; Roots=@($main + $server | Sort-Object ProcessId -Unique) }
}
Write-PCPLog ('Inicio. InstallRoot=' + $root)
try { $snapshot = Get-PCPRoots }
catch {
    Write-PCPLog ('ERROR consultando procesos: ' + $_.Exception.Message)
    # Si Windows no permite consultar procesos, no inventar que PCP está abierto.
    exit 0
}
for ($pass = 1; $pass -le 4 -and $snapshot.Roots.Count -gt 0; $pass++) {
    $ids = @{}
    foreach ($p in $snapshot.Roots) { $ids[[int]$p.ProcessId] = $true }
    $changed = $true
    while ($changed) {
        $changed = $false
        foreach ($p in $snapshot.All) {
            if ($ids.ContainsKey([int]$p.ParentProcessId) -and -not $ids.ContainsKey([int]$p.ProcessId)) {
                $ids[[int]$p.ProcessId] = $true
                $changed = $true
            }
        }
    }
    $targets = @($snapshot.All | Where-Object { $ids.ContainsKey([int]$_.ProcessId) } | Sort-Object ProcessId -Descending)
    Write-PCPLog ("Pasada {0}: procesos PCP={1}" -f $pass,$targets.Count)
    foreach ($p in $targets) {
        try {
            Write-PCPLog ("Finalizando PID={0} Name={1} Path={2}" -f $p.ProcessId,$p.Name,$p.ExecutablePath)
            $output = & "$env:SystemRoot\System32\taskkill.exe" /PID ([string]$p.ProcessId) /T /F 2>&1
            Write-PCPLog ("taskkill exit={0} output={1}" -f $LASTEXITCODE,($output -join ' '))
        } catch {
            Write-PCPLog ("Error finalizando PID={0}: {1}" -f $p.ProcessId,$_.Exception.Message)
        }
    }
    Start-Sleep -Milliseconds 900
    try { $snapshot = Get-PCPRoots }
    catch {
        Write-PCPLog ('ERROR verificando cierre: ' + $_.Exception.Message)
        exit 0
    }
}
if ($snapshot.Roots.Count -gt 0) {
    foreach ($p in $snapshot.Roots) {
        Write-PCPLog ("SIGUE ACTIVO PID={0} Name={1} Path={2} Cmd={3}" -f $p.ProcessId,$p.Name,$p.ExecutablePath,$p.CommandLine)
    }
    exit 1
}
Write-PCPLog 'Cierre verificado: no quedan procesos de esta instalación.'
exit 0
