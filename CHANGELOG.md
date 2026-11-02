## Historial de versiones

### v1.4 — Idiomas del instalador y coherencia de versión

**Español**
- Se añaden árabe y chino simplificado a los idiomas disponibles durante la instalación.
- El idioma elegido se guarda como `ar` o `zh-CN` para que la aplicación pueda mantener la selección.
- La versión del instalador se obtiene de `VERSION`; se actualiza a 1.4.
- Se mantiene el catálogo de la aplicación centralizado en `js/traducciones.js`, con los ocho idiomas.

**English**
- Arabic and Simplified Chinese are added to the installer language selection.
- The selected language is saved as `ar` or `zh-CN` so the application can retain the selection.
- The installer version is read from `VERSION`, now set to 1.4.
- The application translation catalog remains centralized in `js/traducciones.js` and supports all eight languages.

**Français**
- L’arabe et le chinois simplifié sont ajoutés aux langues proposées pendant l’installation.
- La langue choisie est enregistrée sous le code `ar` ou `zh-CN` afin que l’application conserve ce choix.
- La version de l’installateur est lue depuis `VERSION`, désormais définie sur 1.4.
- Le catalogue de traductions de l’application reste centralisé dans `js/traducciones.js` et prend en charge les huit langues.

**Deutsch**
- Arabisch und vereinfachtes Chinesisch werden der Sprachauswahl des Installationsprogramms hinzugefügt.
- Die gewählte Sprache wird als `ar` oder `zh-CN` gespeichert, damit die Anwendung diese Auswahl übernehmen kann.
- Die Installationsversion wird aus `VERSION` gelesen; der Wert ist jetzt 1.4.
- Der Übersetzungskatalog der Anwendung bleibt in `js/traducciones.js` zentralisiert und unterstützt alle acht Sprachen.

**Italiano**
- L’arabo e il cinese semplificato vengono aggiunti alle lingue disponibili durante l’installazione.
- La lingua scelta viene salvata come `ar` o `zh-CN`, così l’applicazione può mantenere la selezione.
- La versione del programma di installazione viene letta da `VERSION`, ora impostata a 1.4.
- Il catalogo delle traduzioni dell’applicazione rimane centralizzato in `js/traducciones.js` e supporta tutte e otto le lingue.

**Polski**
- Arabski i chiński uproszczony zostają dodane do języków dostępnych podczas instalacji.
- Wybrany język jest zapisywany jako `ar` lub `zh-CN`, aby aplikacja mogła zachować ten wybór.
- Wersja instalatora jest pobierana z pliku `VERSION`, którego wartość wynosi teraz 1.4.
- Katalog tłumaczeń aplikacji pozostaje scentralizowany w `js/traducciones.js` i obsługuje wszystkie osiem języków.

**العربية**
- تمت إضافة العربية والصينية المبسطة إلى اللغات المتاحة أثناء التثبيت.
- تُحفظ اللغة المختارة بالرمز `ar` أو `zh-CN` لكي يحتفظ التطبيق بهذا الاختيار.
- تُقرأ نسخة برنامج التثبيت من الملف `VERSION`، وأصبحت الآن 1.4.
- يظل كتالوج ترجمات التطبيق مركزيًا في `js/traducciones.js` ويدعم اللغات الثماني.

**简体中文**
- 在安装程序的语言选择中新增阿拉伯语和简体中文。
- 所选语言将保存为 `ar` 或 `zh-CN`，以便应用保留该语言设置。
- 安装程序版本从 `VERSION` 文件读取，现已更新为 1.4。
- 应用翻译目录仍统一维护在 `js/traducciones.js` 中，并支持全部八种语言。

---

### v1.3 — Traducciones del sistema de licencias y ampliación de idiomas
- Se incorporan en `js/traducciones.js` las traducciones que faltaban en los flujos de inicio de sesión, autenticación y consulta de licencias para español, inglés, francés, alemán, italiano y polaco.
- Los textos fijos del diálogo global («Aviso» y «Aceptar») utilizan el sistema central de traducciones, sin mantener un diccionario independiente.
- Se integran y mantienen los textos de la aplicación en los ocho idiomas disponibles: español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.
- Los textos nuevos y los diálogos se centralizan en `js/traducciones.js` para evitar cadenas aisladas en los archivos de la aplicación.

### v1.2 — Cambios del 31 de octubre: reconexión automática de la impresora al iniciar
- Al abrir la aplicación, se vuelve a aplicar al puente local la IP de la impresora seleccionada y guardada antes de consultar su estado.
- La comprobación de conexión se realiza después de sincronizar la configuración, evitando mostrar como desconectada una impresora online por conservar el puente una IP anterior.
- Se mantiene la selección y la IP guardada cuando la impresora está realmente offline; no se fuerza una búsqueda de red ni se cambia de impresora.

#### Cambios del 30 de octubre: monitor U1, miniaturas y SQLite
- Se conserva la impresora configurada y su IP aunque esté apagada o no responda; se identifica como «SIN CONEXIÓN» y se limpian los datos antiguos del monitor.
- El lector del G-code activo extrae la miniatura de mayor resolución y la conserva al enviar el trabajo a la calculadora.
- Se reducen las escrituras SQLite duplicadas: selección de impresora con clave canónica y guardado agrupado del borrador de la calculadora (350 ms), con vaciado al salir.
- Se mantienen las claves históricas como compatibilidad y los textos nuevos se centralizan en `js/traducciones.js` para los seis idiomas.

### v1.1 — Primera versión pública e historial de funciones anteriores
- Versión inicial pública: calculadora de costes, tasaciones, integración Orca/G-code, monitor U1, inventario, contabilidad, clientes, presupuestos, pedidos, facturas, SQLite y seis idiomas.
- Se agrupan aquí las mejoras publicadas antes de v1.2 para mantener una numeración comercial coherente, sin mostrar numeraciones internas de desarrollo.
