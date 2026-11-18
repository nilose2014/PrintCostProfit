# Publicación de Print Cost & Profit 2.0 en GitHub

Los tres artefactos de la publicación deben corresponder a la misma versión pública **2.0**:

1. `PrintCostProfit-v2.0-Codigo-Fuente.zip`: código fuente completo.
2. `PrintCostProfit-Setup.exe`: instalador NSIS para Windows x64.
3. `PrintCostProfit-Portable-v2.0.zip`: ZIP que contiene `PrintCostProfit-Portable.exe`.

La versión interna de npm/Electron se conserva como `2.0.0`, que es la representación SemVer normalizada de la versión pública `2.0`. La interfaz y el archivo `VERSION` muestran `2.0`. Los nombres de los artefactos no deben incluir versiones diferentes.

## Compilación en Windows

Con Node.js instalado, abrir PowerShell en la carpeta del proyecto y ejecutar:

```powershell
npm install
npm run dist:win:all
```

El comando genera ambos ejecutables en `dist/`:

- `PrintCostProfit-Setup.exe`
- `PrintCostProfit-Portable.exe`

Crear el ZIP portable desde la carpeta del proyecto:

```powershell
Compress-Archive -Path .\dist\PrintCostProfit-Portable.exe -DestinationPath .\dist\PrintCostProfit-Portable-v2.0.zip -Force
```

El ZIP del código fuente se publica como tercer recurso del mismo lanzamiento.

## Primera actualización desde v1.4

Crear un lanzamiento estable en `nilose2014/PrintCostProfit` con etiqueta `v2.0`. Para que el actualizador antiguo encuentre el instalador, adjuntar también un ZIP con nombre compatible con su patrón, por ejemplo `PrintCostProfit-Windows-Installer-v2.0.zip`, que contenga `PrintCostProfit-Setup.exe`. Este ZIP de compatibilidad no sustituye a los tres artefactos principales; es un paquete adicional para la actualización desde v1.4.

La etiqueta `v2.0` es superior a `v1.4`; no se necesita ninguna versión intermedia.
