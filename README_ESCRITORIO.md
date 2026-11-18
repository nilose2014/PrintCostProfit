# Print Cost & Profit 2.0 — aplicación de escritorio para Windows

Esta publicación es exclusivamente para **Windows 10/11 de 64 bits**. Los tres formatos distribuidos tienen la misma versión pública: **2.0**.

## Los tres paquetes de la publicación GitHub

- `PrintCostProfit-v2.0-Codigo-Fuente.zip`: código fuente completo para revisar, modificar y compilar.
- `PrintCostProfit-Setup.exe`: instalador de Windows, con accesos directos y desinstalador.
- `PrintCostProfit-Portable-v2.0.zip`: contiene `PrintCostProfit-Portable.exe`, que se ejecuta sin instalación.

## Compilar en Windows

1. Instala Node.js 22.12 o posterior (incluye npm).
2. Extrae el código fuente en una carpeta local.
3. Ejecuta `COMPILAR_ESCRITORIO_WINDOWS.bat`.
4. Los dos ejecutables y el ZIP portable se generan en `dist`.

La publicación automática de GitHub Actions compila también en `windows-latest` al crear la etiqueta `v2.0` y adjunta los tres paquetes. No se generan binarios Windows desde Linux.

---

# Novedades v2.0.9

## Corrección del arranque del puente local

La aplicación comprueba la disponibilidad del puente mediante `/api/version`, sin depender de que el endpoint auxiliar de registros responda dentro del mismo plazo. El lanzador evita iniciar una segunda instancia cuando HTTP.sys ya mantiene registrada la URL local. Si no puede verificar el servidor existente, registra el diagnóstico y no detiene procesos desconocidos.

La base de datos y la carpeta de datos no se modifican.

# Novedades v2.0.8

## v2.0.8
- Añadidos los modos Ventas (predeterminado) y Personal (solo gastos), con aviso flotante explicativo.
- El modo Personal excluye IVA, ventas, comisiones, mano de obra, reserva de fallos y cálculos de beneficio; registra únicamente categorías de gasto.
- Los movimientos contables resuelven el alias activo de Snapmaker y guardan una identidad estable para evitar impresoras U1 duplicadas con nombres genéricos.
- Manuales adaptados a ventanas anchas y con ilustración local alternativa cuando faltan capturas opcionales de galería.
- Nuevos textos centralizados en js/traducciones.js para los ocho idiomas.


# Print Cost & Profit — aplicación de escritorio Windows (v2.0.3)

Esta compilación abre Print Cost & Profit en una ventana de escritorio propia, sin pestañas, barra de direcciones ni navegador externo. La interfaz HTML/CSS/JavaScript actual se conserva dentro de Electron; no se rehacen las funciones ni se duplican los módulos existentes.

## Qué conserva

- Servidor local en `127.0.0.1:8700` y comunicación con Snapmaker Orca/U1.
- SQLite y ubicación actual de datos: `%LOCALAPPDATA%\PrintCostProfit_SQLite_v1.249\data`.
- Copias de seguridad y mecanismos actuales de validación/restauración.
- Configuración de impresoras, preferencias y los ocho idiomas de la interfaz.
- El BAT de posprocesado de Orca y el procesamiento de G-code.

El programa comprueba que el servidor local que responde en el puerto 8700 pertenece a esta misma versión. Si detecta otro servidor, no conecta la interfaz para evitar mezclar instalaciones o datos. Solo reinicia un servidor antiguo cuando puede identificar que pertenece a la misma carpeta del proyecto.

El puente local permanece activo al cerrar la ventana, ya que Orca también puede utilizarlo. La aplicación no mueve ni migra la base SQLite.

## Requisitos para compilar

- Windows 10/11 de 64 bits.
- Node.js 22.12 o posterior y npm.
- Conexión a Internet durante la primera compilación para descargar Electron y las herramientas de empaquetado.
- Extraer el ZIP completo en una carpeta local.

## Crear el instalador

1. Extrae el paquete completo.
2. Ejecuta `COMPILAR_ESCRITORIO_WINDOWS.bat`.
3. El script instala las dependencias y genera el instalador.
4. El resultado esperado es `dist\PrintCostProfit-Desktop-Setup-2.0.3.exe`.
5. Instala y abre Print Cost & Profit desde el acceso directo del escritorio o del menú Inicio.

La instalación es por usuario y la desinstalación no elimina los datos de `%LOCALAPPDATA%`. El instalador no está firmado digitalmente y Windows puede mostrar una advertencia de editor desconocido.

## Orca

El script de posprocesado debe continuar apuntando a `Integracion_Orca_Postprocesado.bat`. El procesamiento de G-code se mantiene; cuando ese BAT se ejecuta manualmente desde el paquete instalado, abre la aplicación de escritorio.

## Estado

La envoltura de escritorio y el proceso de compilación están preparados. La generación y validación del `.exe` deben ejecutarse en Windows; este entorno no permite probar el instalador en Windows. Antes de utilizarlo con datos reales, conserva una copia externa de la carpeta de datos.

## Centro de avisos (v2.0.3)

La campana abre el centro de avisos. Desde Opciones puedes activar o desactivar avisos de mantenimiento, contabilidad, stock de filamento y nuevas versiones. El stock puede avisar por gramos restantes de cada bobina (200 g por defecto), por número de bobinas disponibles o por ambos criterios. Las preferencias y el historial se guardan localmente en este PC.


### Conexión directa con impresoras (v2.0.224)

Las consultas de estado, la información de la impresora y la lectura de la cabecera G-code se realizan desde el proceso principal de Electron directamente a `http://IP_DE_LA_IMPRESORA:7125` mediante Moonraker. No pasan por los endpoints de impresora del servidor PowerShell local. La pestaña Impresoras y el monitor comparten el mismo transporte IPC restringido y la caché está separada por IP.

Moonraker debe permitir el acceso desde el equipo Windows (por ejemplo, mediante `trusted_clients`) o disponer de la autenticación correspondiente. Si la configuración exige API Key/JWT, esa credencial debe configurarse de forma segura; esta versión no solicita ni almacena credenciales nuevas. El servidor local sigue utilizándose para servir la interfaz, la integración con Orca y servicios que aún no se han migrado.
