# Print Cost & Profit v1.3

## Calcolo dei costi, produzione e gestione per la stampa 3D

Print Cost & Profit aiuta a calcolare i costi di produzione, controllare i materiali e organizzare i lavori di stampa 3D. Le novità di ogni fase sono descritte separatamente.

## Cronologia delle versioni

### v1.3 — Traduzioni del sistema di licenze e supporto linguistico
- Le traduzioni mancanti vengono aggiunte a `js/traducciones.js` per i flussi di accesso, autenticazione e consultazione delle licenze in spagnolo, inglese, francese, tedesco, italiano e polacco.
- Le etichette fisse della finestra globale («Avviso» e «Accetta») utilizzano il sistema centrale di traduzione, senza un dizionario separato.
- I testi dell’applicazione sono integrati e mantenuti nelle otto lingue disponibili: spagnolo, inglese, francese, tedesco, italiano, polacco, arabo e cinese semplificato.
- I nuovi testi e dialoghi sono centralizzati in `js/traducciones.js` per evitare stringhe isolate nei file dell’applicazione.

### v1.2 — Modifiche del 31 ottobre: riconnessione automatica della stampante all’avvio
- All’apertura dell’applicazione, l’indirizzo IP salvato della stampante selezionata viene riapplicato al bridge locale prima di consultarne lo stato.
- La connessione viene verificata dopo la sincronizzazione della configurazione, evitando di mostrare come disconnessa una stampante online a causa di un vecchio IP conservato dal bridge.
- La selezione e l’IP salvato vengono mantenuti quando la stampante è realmente offline; non viene forzata alcuna ricerca di rete e la stampante non viene cambiata.

#### Modifiche del 30 ottobre: monitor U1, miniature e SQLite
- La stampante configurata e il suo IP vengono conservati anche se è spenta o non risponde; viene indicata come «DISCONNESSA» e i vecchi dati del monitor vengono cancellati.
- Il lettore del G-code attivo estrae la miniatura con la risoluzione più alta e la conserva quando invia il lavoro al calcolatore.
- Si riducono le scritture SQLite duplicate: selezione della stampante con chiave canonica e salvataggio raggruppato della bozza del calcolatore (350 ms), con svuotamento all’uscita.
- Le chiavi storiche restano compatibili e i nuovi testi vengono centralizzati in `js/traducciones.js` per le sei lingue.

### v1.1 — Prima versione pubblica e cronologia delle funzioni precedenti
- Prima versione pubblica: calcolatore dei costi, preventivi, integrazione Orca/G-code, monitor U1, inventario, contabilità, clienti, offerte, ordini, fatture, SQLite e sei lingue.
- Le migliorie pubblicate prima di v1.2 vengono raggruppate qui per mantenere una numerazione commerciale coerente, senza mostrare la numerazione interna dello sviluppo.

## Installazione e aggiornamenti

Windows 10/11 è l’ambiente di riferimento. Scarica il pacchetto per il tuo sistema operativo dalla sezione Releases del repository, estrai l’archivio e segui le istruzioni incluse. Esegui un backup dei dati prima di aggiornare.

## Lingue disponibili

Spagnolo, inglese, francese, tedesco, italiano, polacco, arabo e cinese semplificato.

## Traduzioni e manutenzione

I testi visibili dell’applicazione sono centralizzati in `js/traducciones.js`. Ogni nuova etichetta, messaggio, finestra di dialogo o campo deve essere aggiunto lì e tradotto in tutte e otto le lingue, senza chiavi duplicate.

## Licenze

Le funzioni di licenza, abbonamento e pagamento restano disattivate. Questa versione non attiva limitazioni a pagamento.

## Assistenza

Per segnalare un problema, indica la versione, i passaggi per riprodurlo e i messaggi pertinenti della console. Non condividere password o chiavi private.

**Versione del pacchetto:** `1.3.99`  
**Repository:** https://github.com/nilose2014/PrintCostProfit
