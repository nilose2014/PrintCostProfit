#ifndef MyAppVersion
  #define MyAppVersion "1.4"
#endif
#ifndef MyAppVersionInfo
  #define MyAppVersionInfo "1.4.0.0"
#endif
#define MyAppName "Print Cost & Profit"
#define MyAppPublisher "Beatriz Toro Martín"
#define MyAppURL "https://github.com/nilose2014/PrintCostProfit"

[Setup]
AppId={{8D43D4A7-7D4E-4C85-9D72-3B9A2C7A1F11}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\Print Cost & Profit
DefaultGroupName=Print Cost & Profit
DisableProgramGroupPage=yes
LicenseFile=..\LICENSE
SetupIconFile=print-cost-profit.ico
UninstallDisplayIcon={app}\print-cost-profit.ico
OutputDir=..\dist-installer
OutputBaseFilename=PrintCostProfit-Setup-{#MyAppVersion}
ArchitecturesInstallIn64BitMode=x64
PrivilegesRequired=admin
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
RestartApplications=no
Uninstallable=yes
VersionInfoVersion={#MyAppVersionInfo}
VersionInfoCompany={#MyAppPublisher}
VersionInfoDescription=Instalador de Print Cost & Profit
VersionInfoProductName={#MyAppName}
VersionInfoProductVersion={#MyAppVersion}

[Languages]
Name: "spanish"; MessagesFile: "compiler:Languages\Spanish.isl"
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "french"; MessagesFile: "compiler:Languages\French.isl"
Name: "german"; MessagesFile: "compiler:Languages\German.isl"
Name: "italian"; MessagesFile: "compiler:Languages\Italian.isl"
Name: "polish"; MessagesFile: "compiler:Languages\Polish.isl"
Name: "arabic"; MessagesFile: "compiler:Languages\Arabic.isl"
Name: "chinesesimplified"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkedonce
Name: "startmenuicon"; Description: "{cm:CreateStartMenuIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkedonce

[CustomMessages]
spanish.CreateStartMenuIcon=Crear acceso directo en el menú Inicio
english.CreateStartMenuIcon=Create a Start Menu shortcut
french.CreateStartMenuIcon=Créer un raccourci dans le menu Démarrer
german.CreateStartMenuIcon=Eine Verknüpfung im Startmenü erstellen
italian.CreateStartMenuIcon=Crea un collegamento nel menu Start
polish.CreateStartMenuIcon=Utwórz skrót w menu Start
arabic.CreateStartMenuIcon=إنشاء اختصار في قائمة ابدأ
chinesesimplified.CreateStartMenuIcon=创建开始菜单快捷方式

spanish.UninstallApp=Desinstalar Print Cost & Profit
english.UninstallApp=Uninstall Print Cost & Profit
french.UninstallApp=Désinstaller Print Cost & Profit
german.UninstallApp=Print Cost & Profit deinstallieren
italian.UninstallApp=Disinstalla Print Cost & Profit
polish.UninstallApp=Odinstaluj Print Cost & Profit
arabic.UninstallApp=إلغاء تثبيت Print Cost & Profit
chinesesimplified.UninstallApp=卸载 Print Cost & Profit

spanish.LaunchProgram=Iniciar Print Cost & Profit
english.LaunchProgram=Launch Print Cost & Profit
french.LaunchProgram=Lancer Print Cost & Profit
german.LaunchProgram=Print Cost & Profit starten
italian.LaunchProgram=Avvia Print Cost & Profit
polish.LaunchProgram=Uruchom Print Cost & Profit
arabic.LaunchProgram=تشغيل Print Cost & Profit
chinesesimplified.LaunchProgram=启动 Print Cost & Profit

[Files]
Source: "print-cost-profit.ico"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\dist\pcp_sqlite_api.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs; Excludes: ".git\*;.github\*;installer\*;dist\*;dist-installer\*;build\*;__pycache__\*;*.pyc;*.log;*.db;*.db-wal;*.db-shm"

[Icons]
Name: "{autoprograms}\Print Cost & Profit"; Filename: "{app}\Integracion_Orca_Postprocesado.bat"; WorkingDir: "{app}"; IconFilename: "{app}\print-cost-profit.ico"; Tasks: startmenuicon
Name: "{autodesktop}\Print Cost & Profit"; Filename: "{app}\Integracion_Orca_Postprocesado.bat"; WorkingDir: "{app}"; IconFilename: "{app}\print-cost-profit.ico"; Tasks: desktopicon
Name: "{autoprograms}\{cm:UninstallApp}"; Filename: "{uninstallexe}"

[Run]
Filename: "{app}\Integracion_Orca_Postprocesado.bat"; Description: "{cm:LaunchProgram}"; WorkingDir: "{app}"; Flags: postinstall nowait skipifsilent

[UninstallDelete]
; No borrar LOCALAPPDATA: ahi se guardan la base de datos y las copias de seguridad.

[Code]
procedure CurStepChanged(CurStep: TSetupStep);
var
  InstallerLanguage: String;
begin
  if CurStep = ssPostInstall then
  begin
    InstallerLanguage := ExpandConstant('{language}');
    if InstallerLanguage = 'spanish' then InstallerLanguage := 'es'
    else if InstallerLanguage = 'english' then InstallerLanguage := 'en'
    else if InstallerLanguage = 'french' then InstallerLanguage := 'fr'
    else if InstallerLanguage = 'german' then InstallerLanguage := 'de'
    else if InstallerLanguage = 'italian' then InstallerLanguage := 'it'
    else if InstallerLanguage = 'polish' then InstallerLanguage := 'pl'
    else if InstallerLanguage = 'arabic' then InstallerLanguage := 'ar'
    else if InstallerLanguage = 'chinesesimplified' then InstallerLanguage := 'zh-CN'
    else InstallerLanguage := 'es';

    SaveStringToFile(ExpandConstant('{app}\pcp-installer-language.txt'),
      InstallerLanguage + #13#10, False);
  end;
end;
