param(
 [Parameter(Mandatory=$true)][ValidateSet('Attach','Detach','Resize','Show','Hide','ScrollOptions')][string]$Action,
 [int]$ProcessId=0,[string]$OwnerHandle='',[string]$WindowHandle='',
 [string]$ExecutablePath='',[int]$X=0,[int]$Y=0,[int]$Width=0,[int]$Height=0,[int]$ScrollSteps=0
)
$ErrorActionPreference='Stop'
Add-Type @"
using System;
using System.Text;
using System.Runtime.InteropServices;
public static class PCPWin32Overlay {
 public delegate bool EnumWindowsProc(IntPtr hWnd,IntPtr lParam);
 public delegate bool EnumChildWindowsProc(IntPtr hWnd,IntPtr lParam);
 [DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc cb,IntPtr lp);
 [DllImport("user32.dll")] public static extern bool EnumChildWindows(IntPtr parent,EnumChildWindowsProc cb,IntPtr lp);
 [DllImport("user32.dll")] public static extern bool IsWindow(IntPtr hWnd);
 [DllImport("user32.dll")] public static extern IntPtr SetParent(IntPtr child,IntPtr parent);
 [DllImport("user32.dll")] public static extern IntPtr GetParent(IntPtr child);
 [DllImport("user32.dll")] public static extern IntPtr WindowFromPoint(POINT point);
 [DllImport("user32.dll")] public static extern bool GetCursorPos(out POINT point);
 [DllImport("user32.dll",SetLastError=true)] public static extern IntPtr SendMessageTimeout(IntPtr hWnd,uint msg,IntPtr wParam,IntPtr lParam,uint flags,uint timeout,out IntPtr result);
 [DllImport("user32.dll")] public static extern bool GetClientRect(IntPtr hWnd,out RECT rect);
 [DllImport("user32.dll")] public static extern bool ScreenToClient(IntPtr hWnd,ref POINT point);
 [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
 [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd,out uint pid);
 [DllImport("user32.dll",CharSet=CharSet.Unicode)] public static extern int GetWindowText(IntPtr hWnd,StringBuilder text,int max);
 [DllImport("user32.dll",CharSet=CharSet.Unicode)] public static extern int GetClassName(IntPtr hWnd,StringBuilder name,int max);
 [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr hWnd,out RECT rect);
 [DllImport("user32.dll",EntryPoint="GetWindowLongPtrW",SetLastError=true)] public static extern IntPtr GetWindowLongPtr(IntPtr hWnd,int index);
 [DllImport("user32.dll",EntryPoint="SetWindowLongPtrW",SetLastError=true)] public static extern IntPtr SetWindowLongPtr(IntPtr hWnd,int index,IntPtr value);
 [DllImport("user32.dll",SetLastError=true)] public static extern bool SetWindowPos(IntPtr hWnd,IntPtr after,int x,int y,int cx,int cy,uint flags);
 [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd,int cmd);
 [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
 [DllImport("user32.dll")] public static extern bool RedrawWindow(IntPtr hWnd,IntPtr rect,IntPtr region,uint flags);
 [DllImport("user32.dll")] public static extern bool UpdateWindow(IntPtr hWnd);
 [StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left,Top,Right,Bottom; }
 [StructLayout(LayoutKind.Sequential)] public struct POINT { public int X,Y; }
 [StructLayout(LayoutKind.Sequential)] public struct MOUSEINPUT {
  public int dx,dy; public uint mouseData,dwFlags,time; public IntPtr dwExtraInfo;
 }
 [StructLayout(LayoutKind.Sequential)] public struct INPUT {
  public uint type; public MOUSEINPUT mi;
 }
 [DllImport("user32.dll",SetLastError=true)] public static extern bool SetCursorPos(int x,int y);
 [DllImport("user32.dll",SetLastError=true)] public static extern bool PostMessage(IntPtr hWnd,uint msg,IntPtr wParam,IntPtr lParam);
}
"@
$GWL_STYLE=-16;$GWL_HWNDPARENT=-8
$WS_POPUP=0x80000000;$WS_VISIBLE=0x10000000;$WS_CAPTION=0x00C00000
$WS_THICKFRAME=0x00040000;$WS_CHILD=0x40000000;$WS_SYSMENU=0x00080000;$WS_MINIMIZEBOX=0x00020000;$WS_MAXIMIZEBOX=0x00010000
$SWP_FRAMECHANGED=0x0020;$SWP_SHOWWINDOW=0x0040;$SWP_NOACTIVATE=0x0010
$HWND_TOP=[IntPtr]::Zero
if($Action -eq 'Attach'){
 if(-not $ProcessId -or -not $OwnerHandle){throw 'Faltan el PID del proceso o la ventana propietaria de Print Cost & Profit.'}
 $owner=[IntPtr]([Convert]::ToInt64($OwnerHandle.Substring(2),16))
 if(-not [PCPWin32Overlay]::IsWindow($owner)){throw 'La ventana principal de Print Cost & Profit no es válida.'}
 $deadline=(Get-Date).AddSeconds(90);$hwnd=[IntPtr]::Zero;$chosenPid=0;$chosenTitle='';$chosenClass=''
 $lastCandidate='';$stableCount=0;$firstSeen=$null
 while((Get-Date) -lt $deadline){
  # Snapmaker Orca can replace its initial wx/Qt frame during startup.
  # Enumerate the launcher process, its descendants and processes from the same install folder.
  $procs=@(Get-CimInstance Win32_Process -ErrorAction SilentlyContinue)
  $ids=[System.Collections.Generic.HashSet[int]]::new();[void]$ids.Add($ProcessId)
  for($pass=0;$pass -lt 12;$pass++){
   $added=$false
   foreach($p in $procs){if($ids.Contains([int]$p.ParentProcessId)-and -not $ids.Contains([int]$p.ProcessId)){[void]$ids.Add([int]$p.ProcessId);$added=$true}}
   if(-not $added){break}
  }
  if($ExecutablePath){
   $rootPath=[IO.Path]::GetFullPath([IO.Path]::GetDirectoryName($ExecutablePath)).TrimEnd('\')+'\'
   foreach($p in $procs){if($p.ExecutablePath){try{$candidatePath=[IO.Path]::GetFullPath([string]$p.ExecutablePath);if($candidatePath.StartsWith($rootPath,[StringComparison]::OrdinalIgnoreCase)){[void]$ids.Add([int]$p.ProcessId)}}catch{}}}
  }
  $found=[System.Collections.Generic.List[object]]::new()
  $callback=[PCPWin32Overlay+EnumWindowsProc]{
   param([IntPtr]$h,[IntPtr]$l)
   if([PCPWin32Overlay]::IsWindow($h)-and [PCPWin32Overlay]::IsWindowVisible($h)){
    [uint32]$p=0;[void][PCPWin32Overlay]::GetWindowThreadProcessId($h,[ref]$p)
    if($ids.Contains([int]$p)){
     $title=New-Object System.Text.StringBuilder 512;[void][PCPWin32Overlay]::GetWindowText($h,$title,$title.Capacity)
     $class=New-Object System.Text.StringBuilder 256;[void][PCPWin32Overlay]::GetClassName($h,$class,$class.Capacity)
     $rect=New-Object PCPWin32Overlay+RECT
     if([PCPWin32Overlay]::GetWindowRect($h,[ref]$rect)){
      $w=$rect.Right-$rect.Left;$ht=$rect.Bottom-$rect.Top
      # Never attach to splash/launcher windows: the real Orca main frame has a product title.
      # Previous builds selected a large but temporary, untitled bootstrap HWND which was destroyed seconds later.
      if($w -gt 700 -and $ht -gt 400 -and $title.ToString() -match '(?i)(snapmaker|orca)'){
       $score=1000000000+($w*$ht)+$(if($class.ToString() -match '(?i)wxWindowNR|Qt'){50000000}else{0})
       $found.Add([pscustomobject]@{H=$h;P=[int]$p;T=$title.ToString();C=$class.ToString();S=$score})|Out-Null
      }
     }
    }
   };return $true
  }
  [void][PCPWin32Overlay]::EnumWindows($callback,[IntPtr]::Zero)
  $best=$null
  if($found.Count){$best=$found|Sort-Object S -Descending|Select-Object -First 1}
  if($best){
   $candidateKey=('{0}:{1}' -f $best.H.ToInt64(),$best.P)
   if($candidateKey -eq $lastCandidate){$stableCount++}else{$lastCandidate=$candidateKey;$stableCount=1;$firstSeen=Get-Date}
   # Require the titled Orca main frame to survive several polls before touching its styles/owner.
   if($stableCount -ge 6 -and ((Get-Date)-$firstSeen).TotalSeconds -ge 5){
    Start-Sleep -Milliseconds 1200
    [uint32]$verifyPid=0
    if([PCPWin32Overlay]::IsWindow($best.H)-and [PCPWin32Overlay]::IsWindowVisible($best.H)){
     [void][PCPWin32Overlay]::GetWindowThreadProcessId($best.H,[ref]$verifyPid)
     if([int]$verifyPid -eq [int]$best.P){
      $verifyTitle=New-Object System.Text.StringBuilder 512;[void][PCPWin32Overlay]::GetWindowText($best.H,$verifyTitle,$verifyTitle.Capacity)
      if($verifyTitle.ToString() -match '(?i)(snapmaker|orca)'){$hwnd=$best.H;$chosenPid=$best.P;$chosenTitle=$verifyTitle.ToString();$chosenClass=$best.C;break}
     }
    }
    $lastCandidate='';$stableCount=0
   }
  }else{$lastCandidate='';$stableCount=0;$firstSeen=$null}
  Start-Sleep -Milliseconds 500
 }
 if($hwnd -eq [IntPtr]::Zero){throw 'No se encontró una ventana principal estable de Snapmaker Orca en 90 segundos. Se descartaron ventanas provisionales de inicio.'}
 # Mantener Orca como ventana Qt de nivel superior, pero propiedad de PCP.
 # Así los diálogos modales de Qt (por ejemplo, Crear proyecto) siguen perteneciendo
 # a Orca y Windows los muestra delante del laminador, sin destruir su ventana principal.
 $style=[PCPWin32Overlay]::GetWindowLongPtr($hwnd,$GWL_STYLE).ToInt64()
 $style=($style -band (-bnot ($WS_CHILD -bor $WS_CAPTION -bor $WS_THICKFRAME -bor $WS_SYSMENU -bor $WS_MINIMIZEBOX -bor $WS_MAXIMIZEBOX))) -bor $WS_POPUP -bor $WS_VISIBLE
 [void][PCPWin32Overlay]::SetWindowLongPtr($hwnd,$GWL_STYLE,[IntPtr]$style)
 [void][PCPWin32Overlay]::SetWindowLongPtr($hwnd,$GWL_HWNDPARENT,$owner)
 $left=[Math]::Max(0,$X);$top=[Math]::Max(0,$Y)
 $cw=[Math]::Max(320,$Width);$ch=[Math]::Max(240,$Height)
 if(-not [PCPWin32Overlay]::SetWindowPos($hwnd,$HWND_TOP,$left,$top,$cw,$ch,($SWP_FRAMECHANGED -bor $SWP_SHOWWINDOW))){throw 'Windows no pudo colocar Orca dentro del área del laminador.'}
 [void][PCPWin32Overlay]::ShowWindow($hwnd,5)
 Write-Output ('HWND=0x{0:x};PID={1};TITLE={2};CLASS={3};SIZE={4}x{5};MODE=OWNED_QT;STABLE=TRUE' -f $hwnd.ToInt64(),$chosenPid,$chosenTitle,$chosenClass,$cw,$ch)
}elseif($Action -eq 'Resize'){
 if(-not $WindowHandle){throw 'No se ha indicado la ventana de Orca.'}
 $hwnd=[IntPtr]([Convert]::ToInt64($WindowHandle.Substring(2),16))
 if(-not [PCPWin32Overlay]::IsWindow($hwnd)){throw 'La ventana principal de Orca cambió durante el inicio; vuelve a localizar la ventana definitiva.'}
 if(-not $OwnerHandle){throw 'No se recibió el identificador de la ventana principal de PCP.'}
 $owner=[IntPtr]([Convert]::ToInt64($OwnerHandle.Substring(2),16))
 if(-not [PCPWin32Overlay]::IsWindow($owner)){throw 'La ventana principal de PCP ya no está disponible.'}
 if($Width -lt 1 -or $Height -lt 1 -or $X -lt -10000 -or $Y -lt -10000 -or $X -gt 50000 -or $Y -gt 50000){throw 'Se descartó una posición de ventana no válida para Orca.'}
 # Orca sigue siendo top-level; únicamente se actualiza su rectángulo en coordenadas de pantalla.
 if(-not [PCPWin32Overlay]::SetWindowPos($hwnd,$HWND_TOP,$X,$Y,[Math]::Max(320,$Width),[Math]::Max(240,$Height),($SWP_SHOWWINDOW -bor $SWP_NOACTIVATE))){throw 'No se pudo ajustar la ventana de Orca.'}
 Write-Output ('HWND={0};SIZE={1}x{2};POS={3},{4};MODE=OWNED_QT' -f $WindowHandle,$Width,$Height,$X,$Y)
}elseif($Action -eq 'ScrollOptions'){
 if(-not $WindowHandle){throw 'No se ha indicado la ventana de Orca.'}
 $hwnd=[IntPtr]([Convert]::ToInt64($WindowHandle.Substring(2),16))
 if(-not [PCPWin32Overlay]::IsWindow($hwnd)){throw 'La ventana principal de Orca ya no está disponible.'}
 $steps=[Math]::Max(-12,[Math]::Min(12,$ScrollSteps))
 if($steps -eq 0){Write-Output ('HWND={0};SCROLL=0' -f $WindowHandle);exit 0}
 $rect=New-Object PCPWin32Overlay+RECT
 if(-not [PCPWin32Overlay]::GetWindowRect($hwnd,[ref]$rect)){throw 'No se puede localizar el panel de Orca.'}
 $w=$rect.Right-$rect.Left;$h=$rect.Bottom-$rect.Top
 if($w -lt 300 -or $h -lt 300){throw 'La ventana de Orca es demasiado pequeña.'}
 # Identificar un control descendiente de Orca en la zona inferior del panel izquierdo.
 # WindowFromPoint puede devolver una superficie superpuesta de PCP; se enumeran los HWND hijos
 # de la ventana de Orca y se selecciona el control visible más específico que cubre el punto.
 $pt=New-Object PCPWin32Overlay+POINT
 $pt.X=$rect.Left+[int]($w*0.20)
 $pt.Y=$rect.Top+[int]($h*0.85)
 [uint32]$orcaPid=0
 [void][PCPWin32Overlay]::GetWindowThreadProcessId($hwnd,[ref]$orcaPid)
 $script:pcpScrollTarget=[IntPtr]::Zero
 $script:pcpScrollTargetArea=[long]::MaxValue
 $callback=[PCPWin32Overlay+EnumChildWindowsProc]{
   param([IntPtr]$child,[IntPtr]$unused)
   [uint32]$childPid=0
   [void][PCPWin32Overlay]::GetWindowThreadProcessId($child,[ref]$childPid)
   if($childPid -eq $orcaPid -and [PCPWin32Overlay]::IsWindowVisible($child)){
     $cr=New-Object PCPWin32Overlay+RECT
     if([PCPWin32Overlay]::GetWindowRect($child,[ref]$cr)){
       if($pt.X -ge $cr.Left -and $pt.X -lt $cr.Right -and $pt.Y -ge $cr.Top -and $pt.Y -lt $cr.Bottom){
         $area=[long]($cr.Right-$cr.Left)*[long]($cr.Bottom-$cr.Top)
         if($area -gt 0 -and $area -lt $script:pcpScrollTargetArea){
           $script:pcpScrollTarget=$child
           $script:pcpScrollTargetArea=$area
         }
       }
     }
   }
   return $true
 }
 [void][PCPWin32Overlay]::EnumChildWindows($hwnd,$callback,[IntPtr]::Zero)
 $target=$script:pcpScrollTarget
 if(-not $target -or -not [PCPWin32Overlay]::IsWindow($target)){
   throw 'No se encontró un control hijo visible de Orca en la zona inferior del panel de ajustes; no se envió ningún evento.'
 }
 [uint32]$targetPid=0
 [void][PCPWin32Overlay]::GetWindowThreadProcessId($target,[ref]$targetPid)
 if($targetPid -ne $orcaPid){throw 'El control de destino no pertenece al proceso de Orca; se canceló el desplazamiento.'}
 $delta=$(if($steps -lt 0){120}else{-120})
 $wParam=[IntPtr](([int]$delta -band 0xffff) -shl 16)
 $packed=(($pt.Y -band 0xffff) -shl 16) -bor ($pt.X -band 0xffff)
 $lParam=[IntPtr]([int]$packed)
 $sent=[PCPWin32Overlay]::PostMessage($target,0x020A,$wParam,$lParam)
 if(-not $sent){$err=[Runtime.InteropServices.Marshal]::GetLastWin32Error();throw "Windows no pudo enviar el desplazamiento al control de Orca (error $err)."}
 Start-Sleep -Milliseconds 80
 $targetClass=New-Object System.Text.StringBuilder 256
 [void][PCPWin32Overlay]::GetClassName($target,$targetClass,$targetClass.Capacity)
 Write-Output ('HWND={0};SCROLL={1};TARGET={2};PID={3};CLASS={4};MODE=POST_WHEEL' -f $WindowHandle,$steps,$target.ToInt64(),$targetPid,$targetClass.ToString())
}elseif($Action -eq 'Show' -or $Action -eq 'Hide'){
 if(-not $WindowHandle){throw 'No se ha indicado la ventana de Orca.'}
 $hwnd=[IntPtr]([Convert]::ToInt64($WindowHandle.Substring(2),16))
 if([PCPWin32Overlay]::IsWindow($hwnd)){[void][PCPWin32Overlay]::ShowWindow($hwnd,$(if($Action -eq 'Show'){5}else{0}))}
 Write-Output ('HWND={0};VISIBLE={1}' -f $WindowHandle,($Action -eq 'Show'))
}else{
 if(-not $WindowHandle){throw 'No se ha indicado la ventana de Orca.'}
 $hwnd=[IntPtr]([Convert]::ToInt64($WindowHandle.Substring(2),16))
 if([PCPWin32Overlay]::IsWindow($hwnd)){
  $style=[PCPWin32Overlay]::GetWindowLongPtr($hwnd,$GWL_STYLE).ToInt64()
  $style=($style -band (-bnot ($WS_CHILD -bor $WS_POPUP))) -bor $WS_CAPTION -bor $WS_THICKFRAME -bor $WS_SYSMENU -bor $WS_MINIMIZEBOX -bor $WS_MAXIMIZEBOX -bor $WS_VISIBLE
  [void][PCPWin32Overlay]::SetWindowLongPtr($hwnd,$GWL_STYLE,[IntPtr]$style)
  [void][PCPWin32Overlay]::SetWindowLongPtr($hwnd,$GWL_HWNDPARENT,[IntPtr]::Zero)
  [void][PCPWin32Overlay]::SetWindowPos($hwnd,$HWND_TOP,100,100,1200,800,($SWP_FRAMECHANGED -bor $SWP_SHOWWINDOW))
  [void][PCPWin32Overlay]::ShowWindow($hwnd,9)
 }
 Write-Output ('HWND={0};DETACHED=true' -f $WindowHandle)
}
