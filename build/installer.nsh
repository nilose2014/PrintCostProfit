; NSIS/MUI ya define esta cadena para los demás idiomas incluidos.
; Solo español (1034) necesita una definición adicional.
LangString MUI_UNTEXT_WELCOME_INFO_TITLE 1034 "Desinstalación de Print Cost & Profit"
LangString MUI_UNTEXT_WELCOME_INFO_TEXT 1034 "Este asistente le guiará durante la desinstalación de Print Cost & Profit."

; Textos del instalador: siguen el idioma elegido en el selector de NSIS.
LangString PCP_ORCA_READY 1034 "Integración con Snapmaker Orca preparada. Se ha abierto una ventana con instrucciones y un botón para copiar la ruta. Si no aparece, abre C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 1033 "Snapmaker Orca integration is ready. An instruction window has been opened with a button to copy the path. If it does not appear, open C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 1036 "L’intégration Snapmaker Orca est prête. Une fenêtre d’instructions avec un bouton de copie du chemin a été ouverte. Si elle n’apparaît pas, ouvrez C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 1031 "Die Snapmaker-Orca-Integration ist bereit. Ein Anleitungsfenster mit einer Schaltfläche zum Kopieren des Pfads wurde geöffnet. Falls es nicht erscheint, öffnen Sie C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 1040 "L’integrazione con Snapmaker Orca è pronta. È stata aperta una finestra con le istruzioni e un pulsante per copiare il percorso. Se non appare, apri C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 1045 "Integracja ze Snapmaker Orca jest gotowa. Otwarto okno instrukcji z przyciskiem kopiowania ścieżki. Jeśli się nie pojawi, otwórz C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 1025 "تكامل Snapmaker Orca جاهز. تم فتح نافذة تعليمات تحتوي على زر لنسخ المسار. إذا لم تظهر، افتح C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
LangString PCP_ORCA_READY 2052 "Snapmaker Orca 集成已准备就绪。已打开包含路径复制按钮的说明窗口。如果窗口未出现，请打开 C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"

LangString PCP_ORCA_FAILED 1034 "Print Cost & Profit se ha instalado, pero no se pudieron copiar los archivos de integración de Orca a C:\PrintCostProfit. Ejecuta el instalador como administrador o revisa los permisos de esa carpeta."
LangString PCP_ORCA_FAILED 1033 "Print Cost & Profit was installed, but the Orca integration files could not be copied to C:\PrintCostProfit. Run the installer as administrator or check the folder permissions."
LangString PCP_ORCA_FAILED 1036 "Print Cost & Profit a été installé, mais les fichiers d’intégration Orca n’ont pas pu être copiés dans C:\PrintCostProfit. Exécutez le programme d’installation en tant qu’administrateur ou vérifiez les autorisations du dossier."
LangString PCP_ORCA_FAILED 1031 "Print Cost & Profit wurde installiert, aber die Orca-Integrationsdateien konnten nicht nach C:\PrintCostProfit kopiert werden. Führen Sie das Installationsprogramm als Administrator aus oder überprüfen Sie die Ordnerberechtigungen."
LangString PCP_ORCA_FAILED 1040 "Print Cost & Profit è stato installato, ma non è stato possibile copiare i file di integrazione Orca in C:\PrintCostProfit. Esegui il programma di installazione come amministratore o controlla i permessi della cartella."
LangString PCP_ORCA_FAILED 1045 "Print Cost & Profit został zainstalowany, ale nie można było skopiować plików integracji Orca do C:\PrintCostProfit. Uruchom instalator jako administrator lub sprawdź uprawnienia folderu."
LangString PCP_ORCA_FAILED 1025 "تم تثبيت Print Cost & Profit، ولكن تعذر نسخ ملفات تكامل Orca إلى C:\PrintCostProfit. شغّل برنامج التثبيت كمسؤول أو تحقق من أذونات المجلد."
LangString PCP_ORCA_FAILED 2052 "Print Cost & Profit 已安装，但无法将 Orca 集成文件复制到 C:\PrintCostProfit。请以管理员身份运行安装程序，或检查该文件夹的权限。"

!macro customInit
  ; Copiar el comprobador exacto de procesos PCP al directorio temporal de NSIS.
  InitPluginsDir
  File /oname=pcp-close-before-update.ps1 "${BUILD_RESOURCES_DIR}\cerrar-pcp-antes-de-instalar.ps1"
!macroend

; Sustituye el FIND_PROCESS de electron-builder, que puede devolver falsos
; positivos por el tasklist/find.exe interno. Nuestro script compara rutas exactas.
!macro customCheckAppRunning
  ; Limpieza de PCP y del servidor heredado. No utilizar el aviso appRunning
  ; de electron-builder: su FIND_PROCESS puede producir falsos positivos.
  DetailPrint "Cerrando procesos antiguos de Print Cost & Profit..."
  ExecWait '"$SYSDIR\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "$PLUGINSDIR\pcp-close-before-update.ps1" "$INSTDIR"'
  ; La comprobación no aborta la instalación por un código de salida de PowerShell.
  ; El script registra el resultado; Windows/NSIS gestionará cualquier archivo bloqueado.
!macroend


!macro customInstall
  ; Instala los scripts de integración en una ruta sin espacios para que
  ; Snapmaker Orca no divida la ruta en "C:\Program Files".
  CreateDirectory "C:\PrintCostProfit"
  ClearErrors
  CopyFiles /SILENT "$INSTDIR\resources\pcp-app\Integracion_Orca_Postprocesado.bat" "C:\PrintCostProfit"
  IfErrors pcp_orca_install_failed
  CopyFiles /SILENT "$INSTDIR\resources\pcp-app\Integracion_Print_Cost_Profit.ps1" "C:\PrintCostProfit"
  IfErrors pcp_orca_install_failed
  CopyFiles /SILENT "$INSTDIR\resources\pcp-app\Print_Cost_Profit.html" "C:\PrintCostProfit"
  IfErrors pcp_orca_install_failed
  CopyFiles /SILENT "$INSTDIR\resources\pcp-app\VERSION" "C:\PrintCostProfit"
  IfErrors pcp_orca_install_failed
  CopyFiles /SILENT "$INSTDIR\resources\pcp-app\INSTALADOR_ORCA_AYUDA.hta" "C:\PrintCostProfit"
  IfErrors pcp_orca_install_failed

  ; Guarda la ruta real de instalación para que el BAT/PS1 encuentren el EXE,
  ; incluso si el usuario eligió una carpeta distinta durante la instalación.
  FileOpen $0 "C:\PrintCostProfit\PCP_InstallPath.txt" w
  IfErrors pcp_orca_install_failed
  FileWrite $0 "$INSTDIR$\r$\n"
  FileClose $0

  ; Guía visible junto a los scripts para poder recuperar la ruta más adelante.
  FileOpen $0 "C:\PrintCostProfit\LEEME_CONFIGURACION_ORCA.txt" w
  FileWrite $0 "PRINT COST & PROFIT - INTEGRACION CON SNAPMAKER ORCA$\r$\n$\r$\n"
  FileWrite $0 "Ruta que debes pegar en Scripts de postprocesado:$\r$\n"
  FileWrite $0 "C:\\PrintCostProfit\\Integracion_Orca_Postprocesado.bat$\r$\n$\r$\n"
  FileWrite $0 "En Snapmaker Orca: Ajustes de impresion > Otros > Scripts de postprocesado.$\r$\n"
  FileWrite $0 "La misma ruta sirve para exportar/guardar G-code y para enviar a imprimir cuando Orca ejecuta el postprocesado.$\r$\n"
  FileClose $0

  ; El idioma seleccionado en NSIS se comparte con la guía HTA.
  StrCpy $1 "es"
  StrCmp $LANGUAGE 1033 0 +2
    StrCpy $1 "en"
  StrCmp $LANGUAGE 1036 0 +2
    StrCpy $1 "fr"
  StrCmp $LANGUAGE 1031 0 +2
    StrCpy $1 "de"
  StrCmp $LANGUAGE 1040 0 +2
    StrCpy $1 "it"
  StrCmp $LANGUAGE 1045 0 +2
    StrCpy $1 "pl"
  StrCmp $LANGUAGE 1025 0 +2
    StrCpy $1 "ar"
  StrCmp $LANGUAGE 2052 0 +2
    StrCpy $1 "zh"
  FileOpen $0 "C:\PrintCostProfit\installer-language.txt" w
  IfErrors pcp_language_file_done
  FileWrite $0 "$1"
  FileClose $0
  pcp_language_file_done:

  ; Abre la guía visual en el mismo idioma que el instalador.
  ExecShell "open" "$SYSDIR\mshta.exe" "C:\PrintCostProfit\INSTALADOR_ORCA_AYUDA.hta"
  ; Mostrar el aviso con texto literal para que nunca aparezca un cuadro vacío
  ; si el selector NSIS devuelve una variante regional de español no mapeada.
  StrCmp $LANGUAGE 1033 pcp_ready_en
  StrCmp $LANGUAGE 1036 pcp_ready_fr
  StrCmp $LANGUAGE 1031 pcp_ready_de
  StrCmp $LANGUAGE 1040 pcp_ready_it
  StrCmp $LANGUAGE 1045 pcp_ready_pl
  StrCmp $LANGUAGE 1025 pcp_ready_ar
  StrCmp $LANGUAGE 2052 pcp_ready_zh
  MessageBox MB_OK|MB_ICONINFORMATION "Integración con Snapmaker Orca preparada. Se ha abierto una ventana con instrucciones y un botón para copiar la ruta. Si no aparece, abre C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
  Goto pcp_orca_install_done
  pcp_ready_en:
    MessageBox MB_OK|MB_ICONINFORMATION "Snapmaker Orca integration is ready. An instruction window has been opened with a button to copy the path. If it does not appear, open C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  pcp_ready_fr:
    MessageBox MB_OK|MB_ICONINFORMATION "L’integration Snapmaker Orca est prête. Une fenêtre d’instructions a été ouverte. Si elle n’apparaît pas, ouvrez C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  pcp_ready_de:
    MessageBox MB_OK|MB_ICONINFORMATION "Die Snapmaker-Orca-Integration ist bereit. Ein Anleitungsfenster wurde geöffnet. Falls es nicht erscheint, öffnen Sie C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  pcp_ready_it:
    MessageBox MB_OK|MB_ICONINFORMATION "L’integrazione Snapmaker Orca è pronta. È stata aperta una finestra di istruzioni. Se non appare, apri C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  pcp_ready_pl:
    MessageBox MB_OK|MB_ICONINFORMATION "Integracja Snapmaker Orca jest gotowa. Otwarto okno instrukcji. Jeśli się nie pojawi, otwórz C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  pcp_ready_ar:
    MessageBox MB_OK|MB_ICONINFORMATION "تم تجهيز تكامل Snapmaker Orca. إذا لم تظهر نافذة التعليمات، افتح C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  pcp_ready_zh:
    MessageBox MB_OK|MB_ICONINFORMATION "Snapmaker Orca 集成已准备就绪。如果说明窗口未出现，请打开 C:\\PrintCostProfit\\INSTALADOR_ORCA_AYUDA.hta"
    Goto pcp_orca_install_done
  Goto pcp_orca_install_done

  pcp_orca_install_failed:
    ; Texto literal de reserva: evita otro MessageBox vacío por LangString ausente.
    MessageBox MB_ICONEXCLAMATION "Print Cost & Profit se ha instalado, pero no se pudieron copiar los archivos de integración de Orca a C:\\PrintCostProfit. Revisa los permisos de esa carpeta."
  pcp_orca_install_done:
!macroend
