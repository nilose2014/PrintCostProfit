#define MyAppName "Print Cost & Profit"
#define MyAppVersion "1.1"
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
LicenseForceCheckbox=no
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
VersionInfoVersion=1.1.0.0
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

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkedonce
Name: "startmenuicon"; Description: "Crear acceso directo en el menú Inicio"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkedonce

[Files]
Source: "..\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs; Excludes: ".git\*,.github\*,installer\*,dist\*,dist-installer\*,build\*,__pycache__\*,*.pyc,*.log,*.db,*.db-wal,*.db-shm"

[Icons]
Name: "{autoprograms}\Print Cost & Profit"; Filename: "{app}\Integracion_Orca_Postprocesado.bat"; WorkingDir: "{app}"; IconFilename: "{app}\print-cost-profit.ico"; Tasks: startmenuicon
Name: "{autodesktop}\Print Cost & Profit"; Filename: "{app}\Integracion_Orca_Postprocesado.bat"; WorkingDir: "{app}"; IconFilename: "{app}\print-cost-profit.ico"; Tasks: desktopicon
Name: "{autoprograms}\Desinstalar Print Cost & Profit"; Filename: "{uninstallexe}"

[Run]
Filename: "{app}\Integracion_Orca_Postprocesado.bat"; Description: "Iniciar Print Cost & Profit"; WorkingDir: "{app}"; Flags: postinstall nowait skipifsilent

[UninstallDelete]
; No borrar LOCALAPPDATA: ahi se guardan la base de datos y las copias de seguridad.
