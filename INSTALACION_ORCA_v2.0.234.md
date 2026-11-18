# Integración de Snapmaker Orca — v2.0.235

El instalador crea automáticamente `C:\PrintCostProfit` y copia allí los archivos necesarios para el postprocesado.

En Snapmaker Orca, abre **Ajustes de impresión → Otros → Scripts de postprocesado** y pega exactamente:

```text
C:\PrintCostProfit\Integracion_Orca_Postprocesado.bat
```

La ruta no contiene espacios. El instalador también muestra esta ruta al finalizar y deja una copia de estas instrucciones en `C:\PrintCostProfit\LEEME_CONFIGURACION_ORCA.txt`.

El mismo script procesa el G-code cuando Orca ejecuta el postprocesado al exportar/guardar o al enviar un trabajo a imprimir. La disponibilidad de esta segunda acción depende de que la versión y el flujo de envío de Orca ejecuten sus scripts de postprocesado.
