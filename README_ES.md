# Print Cost & Profit
## Calculadora de costes de impresión 3D, inventario y gestión de impresoras

**Windows de escritorio: 2.0 | Linux: 1.4**  
Desarrolladora: Beatriz Toro Martin

Repositorio oficial: https://github.com/nilose2014/PrintCostProfit  
Todas las publicaciones: https://github.com/nilose2014/PrintCostProfit/releases

## 1. Descargas

Descarga siempre desde las publicaciones oficiales de GitHub.

### Windows 10 / 11 — Versión 2.0

**ZIP del instalador:** `PrintCostProfit-Setup-v2.0.zip`  
[Publicación Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Descarga el ZIP y selecciona **Extraer todo**.
2. Abre la carpeta extraída.
3. Ejecuta `PrintCostProfit-Setup.exe` y sigue el asistente.

**ZIP portable:** `PrintCostProfit-Portable-v2.0.zip`  
[Publicación Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Descarga y extrae el ZIP en una carpeta permanente.
2. Ejecuta `PrintCostProfit-Portable.exe` desde la carpeta extraída.

No ejecutes archivos desde dentro del ZIP. Mantén juntos todos los archivos extraídos.

### Linux — Versión 1.4

[Publicación Linux 1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu:** `printcostprofit_1.4.1_amd64.deb`  
[Descargar .deb](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

También puedes hacer doble clic en el `.deb` y utilizar el instalador de paquetes del sistema.

**AppImage:** `PrintCostProfit-Linux-x86_64.AppImage`  
[Descargar AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

Los paquetes Linux están destinados a sistemas AMD64 de 64 bits. **Windows es la versión 2.0 y la publicación Linux disponible es la 1.4. Son líneas de publicación independientes.**

## 2. Aviso de seguridad de Windows

Los ejecutables de Windows se distribuyen actualmente sin certificado comercial de firma de código. SmartScreen u otro software de seguridad puede mostrar una advertencia. Verifica que la descarga procede del repositorio oficial. No ignores detecciones reales del antivirus ni eludas advertencias si no puedes verificar el origen.

## 3. Características principales

- **Calculadora de costes 3D:** estima costes con consumo de filamento, precio del material, tiempo de impresión, funcionamiento de la máquina, amortización, mantenimiento y otros gastos configurados.
- **Precio y rentabilidad:** permite revisar coste estimado, precio de venta, beneficio, margen y precio recomendado. Los resultados dependen de los valores introducidos.
- **Inventario de filamentos:** gestiona marcas, materiales, colores, cantidades de bobinas y precios.
- **Perfiles de impresora:** guarda parámetros de los equipos utilizados en los cálculos.
- **Monitor de impresoras:** la Snapmaker U1 tiene compatibilidad completa confirmada. Otras impresoras Moonraker, Fluidd o Mainsail pueden funcionar según su configuración y las funciones admitidas.
- **Integración con laminadores:** diseñada para Snapmaker Orca, OrcaSlicer y Creality Print. La compatibilidad es aproximadamente del 90 % y varía según versión y configuración; no se garantiza el 100 %.
- **Procesamiento G-code:** lee información disponible del archivo, tiempo estimado, consumo estimado y metadatos de filamentos. Las estimaciones del laminador no equivalen necesariamente al consumo real.
- **Presupuestos, facturas y contabilidad:** herramientas para organizar documentos comerciales y actividad financiera.
- **SQLite local:** Windows 2.0 guarda los datos localmente mediante SQLite y Electron IPC.

## 4. Arquitectura Windows — Versión 2.0

Windows 2.0 carga la interfaz desde archivos locales de Electron y ya no utiliza el antiguo puente HTTP de PowerShell. La interfaz se comunica con SQLite mediante IPC. Las impresoras compatibles se consultan por red mediante Moonraker. La recepción de G-code de Orca utiliza vigilancia local de archivos gestionada por Electron. Las instrucciones antiguas sobre el servidor HTTP o el puente PowerShell no describen Windows 2.0.

## 5. Integración con laminadores

La integración está pensada para aplicaciones basadas en OrcaSlicer, especialmente Snapmaker Orca, OrcaSlicer y Creality Print. Los menús pueden variar según la aplicación y versión.

1. Abre el laminador y selecciona el perfil de impresora.
2. Abre los ajustes de impresión y activa el modo avanzado si es necesario.
3. Busca **Otros** y la configuración de scripts de posprocesamiento.
4. Sigue las instrucciones incluidas con el paquete correspondiente.
5. Guarda el perfil, genera un G-code de prueba y comprueba que Print Cost & Profit recibe la información disponible.

Windows 2.0 utiliza vigilancia local de archivos gestionada por Electron. No sigas las instrucciones antiguas que requieren el puente HTTP de PowerShell.

## 6. Red de la impresora

En impresoras Moonraker compatibles, asegúrate de que ordenador e impresora se comunican por red, localiza la IP, verifica el acceso a Moonraker y configura la conexión en la aplicación. Las funciones dependen de la impresora, firmware y red. Snapmaker U1 es el modelo con compatibilidad completa confirmada.

## 7. Datos y copias de seguridad

Windows utiliza una base de datos SQLite local. Haz copias de seguridad periódicas, especialmente antes de actualizar. No elimines ni muevas la base de datos mientras la aplicación esté funcionando. Si falla la inicialización, conserva la base e investiga el error antes de introducir datos importantes.

## 8. Requisitos del sistema

- **Windows:** Windows 10 u 11, 64 bits y espacio suficiente. Se necesita red para monitorizar impresoras. Los paquetes de usuario no requieren instalar Node.js ni Python manualmente.
- **Linux:** AMD64 de 64 bits. Usa el paquete Debian en sistemas Debian/Ubuntu compatibles o el AppImage.
- Integraciones opcionales: Snapmaker Orca, OrcaSlicer, Creality Print e impresoras compatibles conectadas a la red.

## 9. Actualización

1. Abre las publicaciones oficiales.
2. Lee las notas y confirma sistema y versión.
3. Descarga el paquete adecuado.
4. Haz una copia de seguridad.
5. Instala o extrae el paquete nuevo según las instrucciones.

No elimines los datos existentes al actualizar. Windows y Linux tienen líneas de publicación independientes; comprueba la versión.

## 10. Solución de problemas

- **Windows no inicia:** comprueba que el ZIP está totalmente extraído y que los archivos permanecen juntos. Guarda el error.
- **Advertencia de seguridad:** verifica el origen y las detecciones del antivirus. La compilación Windows no está firmada con certificado comercial.
- **Falla el monitor:** comprueba alimentación, red, IP, acceso a Moonraker y ajustes.
- **Falla la integración:** revisa versión del laminador, posprocesamiento, G-code y recepción local.
- **No se guardan datos:** conserva la base, revisa la inicialización SQLite y registra el error. No borres datos como solución improvisada.
- **AppImage no inicia:** ejecuta `chmod +x`, lánzalo desde un terminal y revisa errores. Para `.deb`, comprueba instalación y dependencias.

## 11. Código fuente y desarrollo

Código fuente: https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

Para generar Windows:

```bash
npm run dist:win
```

Estos comandos son para desarrolladores. Los usuarios deben descargar los paquetes listos desde GitHub Releases.

## 12. Licencia, derechos de autor y soporte

Print Cost & Profit se distribuye según las condiciones de `LICENSE.txt` del repositorio. Lee la licencia antes de redistribuir o modificar el software.

Al informar de un problema, incluye versión, sistema operativo, modelos/versiones de impresora y laminador si procede, descripción, error completo y pasos para reproducirlo. No incluyas contraseñas, claves privadas ni datos personales innecesarios.

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
Desarrollado por Beatriz Toro Martin.
