# Print Cost & Profit

**Solución completa para calcular costes, supervisar la producción y gestionar un negocio de impresión 3D.**

Print Cost & Profit ayuda a conocer el coste real de cada impresión, fijar precios de venta sostenibles, supervisar impresoras compatibles, gestionar el filamento y organizar las operaciones comerciales.

> **Versión estable Windows: v1.4**  
> **Paquete Linux: v1.4**  
> Consulta [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases) para ver las publicaciones y descargas disponibles.

## Descargas, repositorios e instalación

| Plataforma | Descarga | Instalación |
|---|---|---|
| **Windows** | [Últimas publicaciones](https://github.com/nilose2014/PrintCostProfit/releases/latest): descarga el instalador `.exe` o el paquete Windows disponible. | Ejecuta el instalador y sigue el asistente. |
| **Linux** | [Rama Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) o [Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest): descarga el paquete Linux v1.4 cuando esté publicado. | Extrae el paquete y ejecuta el script de inicio. |

### Enlaces oficiales
- **Repositorio principal:** https://github.com/nilose2014/PrintCostProfit
- **Código Linux:** https://github.com/nilose2014/PrintCostProfit/tree/linux
- **Todas las versiones:** https://github.com/nilose2014/PrintCostProfit/releases
- **Última versión:** https://github.com/nilose2014/PrintCostProfit/releases/latest
- **Errores y sugerencias:** https://github.com/nilose2014/PrintCostProfit/issues

La página Releases es la fuente oficial de los instaladores y paquetes disponibles. Los archivos pueden cambiar entre publicaciones; no utilices enlaces directos antiguos.

### Instalación en Windows
1. Abre [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Descarga el instalador `.exe` más reciente o el ZIP disponible.
3. Ejecuta el instalador o extrae el ZIP completo en una carpeta con permisos de escritura.
4. Inicia la aplicación desde el acceso directo o el script incluido.
5. Si el navegador no se abre, visita `http://127.0.0.1:8700/`.
6. Mantén juntos los archivos HTML, JavaScript, CSS y del servidor.

**Notas:** el servidor local debe permanecer activo. Tras actualizar, cierra el servidor anterior, inicia el de la carpeta actualizada y recarga con `Ctrl + F5`. Haz copias de seguridad antes de sustituir archivos. No borres el directorio de datos.

### Instalación en Linux (Ubuntu, Debian y derivados)
1. Descarga el paquete desde la [rama Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) o [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Extrae el paquete completo y abre un terminal en su carpeta raíz.
3. Ejecuta:
   ```bash
   chmod +x linux/iniciar_linux.sh
   ./linux/iniciar_linux.sh
   ```
4. Abre `http://127.0.0.1:8700/`.

**Notas:** ejecuta estos comandos en Linux o en el terminal Ubuntu de WSL, nunca en PowerShell. Se requiere Python 3 y SQLite. Conserva la estructura de carpetas. Los datos se guardan en el directorio de datos del usuario, separado del programa. Si falla una prueba de inicio, conserva el resultado y no ignores el error.

### Primer inicio y conexión de impresora
Inicia el servidor antes de abrir la web. El ordenador y la impresora deben ser accesibles en la red local. Configura Moonraker con la IP LAN y el puerto de la impresora. Puedes guardar la configuración aunque esté apagada, pero el estado en directo requiere que esté conectada. La integración Snapmaker Orca utiliza el flujo local y el script de posprocesado del paquete correspondiente.

---

## ¿Qué es Print Cost & Profit?

Reúne la parte técnica y comercial de la impresión 3D. Un laminador estima material y tiempo, pero un negocio también debe considerar electricidad, desgaste de máquina, mantenimiento, mano de obra, acabados, fallos, stock y precio final.

Flujo habitual:
1. Importar datos desde G-code compatible o introducirlos manualmente.
2. Calcular el coste real de producción.
3. Definir el beneficio objetivo y obtener un precio recomendado.
4. Comprobar material disponible e información de la impresora.
5. Guardar valoraciones y documentos comerciales.
6. Seguir producción, stock, mantenimiento y actividad financiera.

## Funciones principales

### 1. Calculadora de costes
Calcula costes y precios a partir de:
- Consumo de filamento en gramos, precio del material y coste por kilogramo.
- Duración de impresión.
- Consumo eléctrico y coste de electricidad.
- Amortización y costes asociados a la máquina.
- Mantenimiento, mano de obra y preparación.
- Costes adicionales, pintura y acabados por unidad.
- Reserva para impresiones fallidas.
- Porcentaje de beneficio, precio recomendado, coste y beneficio por unidad y margen.

Permite distinguir **coste de producción**, **precio de venta**, **beneficio** y **margen**; el filamento no es el único coste.

#### G-code y laminador
La integración compatible con Orca puede importar nombre del archivo, materiales, colores y códigos HEX, consumo estimado, tiempo y miniaturas disponibles. Revisa los datos antes de calcular y confirma las asignaciones de materiales, especialmente en trabajos multicolor o multimaterial.

#### Comparación y valoraciones guardadas
Permite comparar escenarios de precio y comprobar el efecto de modificar el beneficio objetivo o añadir importes extra. También permite trabajar con valoraciones guardadas.

### 2. Panel principal
Ofrece una visión general de ventas, costes, beneficios, resúmenes y gráficos financieros, stock, estado de impresoras, producción y actividad reciente. Los detalles están en sus secciones específicas.

### 3. Monitor de impresoras — Snapmaker U1 / Moonraker
Conecta con impresoras compatibles a través de la red local y Moonraker. Incluye:
- Descubrimiento y configuración manual de IP.
- Guardado de conexiones y estado online/offline.
- Lectura del estado y progreso de impresión.
- Información del trabajo activo, nombre de archivo y consumo disponible.
- Listado de archivos y uso de miniaturas G-code cuando están disponibles.
- Selección entre varias impresoras.
- Envío de la impresión activa a la calculadora para estimar su coste.

El ordenador debe acceder a la impresora en la red local. Firewall, aislamiento de red, IP incorrecta o Moonraker no disponible pueden impedir la conexión. Revisa los datos importados antes de usarlos en presupuestos.

### 4. Inventario de filamentos
Registra marca, material (PLA, PETG y otros), nombre y código HEX del color, peso inicial y restante, precio por kilogramo y stock. Compara materiales y colores importados con las bobinas registradas. Las coincidencias dudosas deben revisarse y seleccionarse. Las alertas de material insuficiente dependen de que los pesos del inventario estén actualizados.

### 5. Impresoras y perfiles
Permite configurar impresoras y conexiones, detectarlas en la red cuando sea posible, conservar sus datos, consultar su estado y asociar información de producción y contabilidad a cada máquina. El flujo está orientado a Snapmaker U1; otros equipos y firmware pueden requerir endpoints Moonraker compatibles y no necesariamente están validados.

### 6. Centro de mantenimiento
Organiza tareas preventivas y correctivas, como limpieza, lubricación y engrase de ejes, revisión de correas y guías, hotend, boquillas, extrusor, alimentación de filamento, ventiladores, refrigeración, cama, cables y conectores. Permite registrar las acciones y su estado. Sigue siempre el manual y las recomendaciones de seguridad del fabricante.

### 7. Presupuestos, pedidos y facturas
Permite crear y guardar presupuestos, gestionar pedidos, crear facturas, asociar clientes, consultar detalles y totales, generar PDF y convertir presupuestos en facturas cuando el flujo lo permite. Comprueba numeración, impuestos, moneda, datos del cliente y PDF antes de enviarlo.

### 8. Clientes
Guarda datos de clientes y los relaciona con documentos comerciales para evitar repetir datos y organizar presupuestos, pedidos y facturas.

### 9. Contabilidad
Registra movimientos y permite revisar ingresos, costes y beneficios, con información por impresora cuando está configurada. Contrasta los registros con la contabilidad oficial y las obligaciones fiscales. La aplicación no proporciona asesoramiento contable ni fiscal.

### 10. Catálogo de productos
Organiza productos fabricados o vendidos. Cuando está habilitado, incluye presentación de productos y funciones QR para relacionar el producto físico con su información de catálogo.

### 11. Registro y diagnóstico
El registro local ayuda a investigar problemas del servidor, conexión de impresora, API, importación, integración, copias de seguridad y almacenamiento. Al informar de errores, incluye versión, sistema operativo, pasos y registros sin datos privados.

### 12. Copias de seguridad y recuperación
Utiliza almacenamiento local e incluye copias y recuperación en las compilaciones compatibles. El servidor Linux ofrece API para snapshots, control de revisiones, copias y registros. Windows dispone de su propio servidor y almacenamiento. Haz copias antes de actualizar, guárdalas fuera de la carpeta del programa y no edites la base de datos mientras se ejecuta la aplicación.

### 13. Opciones e interfaz
Agrupa la configuración. Según la versión, permite organizar apartados, ocultar campos y cambiar el orden de secciones.

### 14. Ocho idiomas
Los textos se centralizan en `js/traducciones.js`: español, inglés, francés, alemán, italiano, polaco, árabe con soporte RTL y chino simplificado. Los nuevos campos, diálogos, botones, avisos y errores deben centralizarse y traducirse a todos los idiomas.

---

## Capturas de pantalla

Las imágenes se incluyen en `assets/screenshots/`.

### Panel principal
![Panel principal](assets/screenshots/screenshot-02.jpg)

### Calculadora y datos de impresión
![Calculadora](assets/screenshots/screenshot-03.jpg)
![Datos de impresión](assets/screenshots/screenshot-01.jpg)

### Producción y gestión comercial
![Gestión comercial](assets/screenshots/screenshot-05.jpg)
![Costes y precios](assets/screenshots/screenshot-06.jpg)
![Configuración y documentos](assets/screenshots/screenshot-07.jpg)

### Opciones y actualizaciones
![Configuración](assets/screenshots/screenshot-08.jpg)
![Opciones](assets/screenshots/screenshot-09.jpg)
![Versión y actualizaciones](assets/screenshots/screenshot-10.jpg)

### Clientes, pedidos y facturas
![Clientes](assets/screenshots/screenshot-12.jpg)
![Clientes y documentos](assets/screenshots/screenshot-13.jpg)
![Documentos](assets/screenshots/screenshot-14.jpg)
![Pedidos y presupuestos](assets/screenshots/screenshot-15.jpg)
![Facturas](assets/screenshots/screenshot-16.jpg)
![Ventas](assets/screenshots/screenshot-17.jpg)

### Filamentos e impresoras
![Stock de filamentos](assets/screenshots/screenshot-18.jpg)
![Inventario](assets/screenshots/screenshot-19.jpg)
![Impresora y materiales](assets/screenshots/screenshot-20.jpg)

### Rentabilidad e informes
![Rentabilidad](assets/screenshots/screenshot-21.jpg)
![Resumen financiero](assets/screenshots/screenshot-22.jpg)
![PDF de factura](assets/screenshots/screenshot-23.jpg)

### Mantenimiento
![Centro de mantenimiento](assets/screenshots/screenshot-24.jpg)
![Tareas de mantenimiento](assets/screenshots/screenshot-25.jpg)

### Otras pantallas
![Pantalla adicional](assets/screenshots/screenshot-04.jpg)
![Pantalla adicional](assets/screenshots/screenshot-11.jpg)
![Pantalla adicional](assets/screenshots/screenshot-26.jpg)

---

## Flujo de trabajo habitual
1. Prepara el trabajo en el laminador y genera el G-code.
2. Importa los datos mediante Orca o introdúcelos manualmente.
3. Revisa materiales y colores y asígnalos al inventario.
4. Comprueba impresora y filamento disponible.
5. Calcula material, tiempo, electricidad, máquina, mano de obra y acabados.
6. Define el precio de venta y revisa el margen.
7. Guarda el presupuesto y asócialo al cliente.
8. Supervisa la impresión.
9. Registra venta o factura y revisa la actividad financiera.
10. Actualiza stock y mantenimiento.

## Requisitos del sistema

**Windows:** Windows compatible de 64 bits, permisos de ejecución y escritura en datos, acceso a la red local para el monitor e Internet para GitHub.

**Linux:** Ubuntu, Debian o derivados compatibles, Python 3, SQLite, permiso de ejecución del script y acceso a la red local.

**Impresora:** conexión compatible, API local Moonraker accesible, IP correcta e integración Orca configurada según el paquete.

## Versiones y actualizaciones

La versión estable de Windows y el paquete Linux descritos son **v1.4**. Antes de actualizar, haz una copia de seguridad, descarga el paquete correcto, detén el servidor, actualiza los archivos, inicia el servidor desde la carpeta nueva y comprueba la versión. No ejecutes dos servidores en el mismo puerto. Dirección predeterminada: `127.0.0.1:8700`.

## Solución de problemas

- **No abre:** comprueba el servidor, revisa la terminal/PowerShell, abre `http://127.0.0.1:8700/` y verifica que el puerto 8700 esté libre.
- **Versión incorrecta:** detén el servidor anterior, inicia el de la carpeta correcta, consulta `http://127.0.0.1:8700/api/version`, revisa `VERSION` y recarga con `Ctrl + F5`.
- **Impresora desconectada:** comprueba alimentación, red, IP, Moonraker y firewall; prueba la IP manual.
- **Faltan metadatos o miniaturas:** revisa el G-code y lo que exporta el laminador; comprueba material, color, peso y tiempo.
- **Fallan pruebas Linux:** ejecuta el script desde la raíz, comprueba Python 3 y SQLite y conserva el error completo.

## Estructura del proyecto
- `Print_Cost_Profit.html` — interfaz.
- `js/` — módulos, integraciones y traducciones.
- `css/` — estilos.
- `VERSION` — versión leída por el servidor.
- `Servidor_Panel_U1.ps1` — servidor Windows.
- `linux/` — servidor Linux, inicio y pruebas.
- Datos locales — base de datos, registros y copias separados de los archivos del programa según la plataforma.

El contenido puede variar entre paquetes Windows y Linux.

## Soporte y contribuciones
- Errores: https://github.com/nilose2014/PrintCostProfit/issues
- Código fuente: https://github.com/nilose2014/PrintCostProfit
- Código Linux: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Versiones: https://github.com/nilose2014/PrintCostProfit/releases

Incluye versión, sistema operativo, paquete, impresora y conexión, pasos para reproducir, errores/logs sin datos sensibles y capturas. Nunca publiques contraseñas, tokens, credenciales privadas, datos de clientes ni bases privadas.

## Información importante
Print Cost & Profit es una herramienta de apoyo para calcular costes y gestionar trabajos de impresión 3D. Los resultados dependen de los datos, metadatos del laminador, configuración, tarifas eléctricas, precios de materiales y ajustes. Revisa cálculos, stock, presupuestos y facturas. La monitorización depende de servicios locales compatibles y del firmware/API; las funciones pueden variar según la plataforma y versión.

**Print Cost & Profit — conoce tus costes, fija el precio de tus impresiones y gestiona tu flujo de trabajo 3D.**
