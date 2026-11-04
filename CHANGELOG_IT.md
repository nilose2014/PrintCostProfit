### v1.4 — Informazioni sulla versione e controllo manuale degli aggiornamenti
- Aggiunta in Opzioni una sezione che mostra la versione installata.
- Aggiunto il pulsante «Verifica aggiornamenti» per controllare manualmente le release stabili pubblicate su GitHub.
- Quando è disponibile una versione più recente, ne viene mostrato il numero e viene proposto lo ZIP dell’installer Windows, se allegato; altrimenti si apre la pagina ufficiale della release.
- Se non è disponibile una versione più recente, l’applicazione lo comunica. Restano attivi gli avvisi automatici all’avvio e il controllo periodico.
- Tutti i nuovi testi sono centralizzati in `js/traducciones.js` e tradotti in spagnolo, inglese, francese, tedesco, italiano, polacco, arabo e cinese semplificato.
- Nuova versione pubblica basata sulla build 5.58: centro manutenzione riorganizzato, consigli separati dalle attività, avvisi corretti e supporto Unicode/RTL nei PDF migliorato. Aggiornamento da v1.3 predisposto tramite l’installer GitHub Releases, mantenendo i dati locali.

- Prima adattazione Linux basata sull’applicazione Windows v1.4: server Python nativo, API di archiviazione SQLite, backup, registri e servizi Snapmaker U1. Il codice dell’interfaccia e le traduzioni in otto lingue sono mantenuti. L’integrazione del post-processing Orca e i test con una stampante fisica restano da convalidare.

- Riorganizzato il centro manutenzione: attività compatte in schede a tutta larghezza, consigli richiudibili sotto e modulo di creazione a tutta larghezza. Design adattivo per dispositivi mobili.

- PDF di fatture e preventivi: sostituita la codifica limitata a Helvetica/WinAnsi con rendering Unicode ad alta risoluzione usando font Noto locali per arabo e cinese. La generazione dei PDF resta locale e non dipende dal browser predefinito né dai font installati.

- Corretto il pannello degli avvisi: le notifiche di filamento e manutenzione non si sovrascrivono più né scompaiono quando si aggiorna la Home.

- Server U1: corretta la sintassi PowerShell nella creazione delle query Moonraker con separatori `&`; il carattere viene ora generato in modo sicuro. Script salvato con BOM UTF-8 per Windows PowerShell 5.1 e corretta visualizzazione dei caratteri polacchi.

- Monitor U1: timeout della richiesta di stato portato a 8 secondi e attesa del browser a 10 secondi. Evita di segnalare la stampante come disconnessa quando risponde alle richieste G-code ma impiega più tempo a restituire lo stato.
- Ridisegnato il pannello manutenzione con schede, indicatori, moduli e cronologia più chiari e adattivi.
- Ampliate le verifiche preventive per hotend, ugelli, riscaldatore/termistore, estrusore, cinghie, ventole, piano, sensori e cablaggio.
- Corretta l’identificazione delle famiglie Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro e Bambu Lab.
- Le nuove attività preventive vengono aggiunte anche alle stampanti già registrate senza eliminare ore, attività personalizzate o storico. Gli intervalli comuni sono indicativi e modificabili.
- Aggiornate le traduzioni centralizzate delle otto lingue.
- I grammi rimanenti di ogni bobina vengono mostrati con un massimo di due decimali e il campo modificabile usa incrementi di 0,01 g. Il valore salvato non cambia finché l’utente non modifica il campo.
- Rinnovati Preventivi, Ordini e Fatture con intestazioni visive, moduli ordinati, campi scuri e tabelle più leggibili, mantenendo azioni e flussi esistenti.
- Migliorata la presentazione dell’inventario filamenti: modulo più chiaro, schede delle bobine, indicatori del materiale residuo e controlli di modifica.
- Uniformato l’aspetto della Contabilità alla dashboard Home, incluse schede di redditività e pannelli dei movimenti.
- Ridisegnata la scheda Clienti con intestazione visiva, modulo più ordinato, campi scuri coerenti con Home e gerarchia dei controlli più chiara.
- Il campo Note non appare più come una casella bianca nativa: ora mantiene il tema scuro e lo stile degli altri campi.
- L’agenda mostra schede compatte, dati più leggibili e meno spazi vuoti. Restano disponibili ricerca, modifica, salvataggio ed eliminazione dei clienti e il loro utilizzo in preventivi, ordini e fatture.

- Ridisegnata la scheda Opzioni con schede compatte a due colonne, gerarchia visiva più chiara e stile coerente con Home; stampante, backup, profili e registro mantengono tutta la larghezza quando necessario.
- Corretti i pulsanti «Mostra campi» e «Nascondi campi»: ora espandono e comprimono il contenuto e riflettono lo stato tramite l’attributo accessibile `aria-expanded`.
- Campi, controlli, preferenze di ordinamento e compressione, traduzioni esistenti e dati salvati sono mantenuti. Il database SQLite non viene modificato.

- Corretta la documentazione di Opzioni: gli otto README diventano pagine HTML indipendenti e localizzate.
- Ogni lingua apre il proprio manuale HTML dall’applicazione; è stato rimosso il percorso errato verso file inesistenti.
- Il manuale arabo usa la direzione RTL e tutti i manuali adottano il tema scuro dell’applicazione.

- Sostituiti gli elementi decorativi della barra superiore con pulsanti funzionali in stile neon: avvisi, documentazione e opzioni.
- La campanella apre la sezione degli avvisi e mostra il conteggio reale delle notifiche.
- Il punto interrogativo apre il manuale della lingua selezionata; i percorsi usano ora i README localizzati inclusi.
- L’ingranaggio apre direttamente la scheda Opzioni.

- Collegato il blocco «Monitor stampanti» della Home all’endpoint reale `/api/u1/status` del bridge locale, invece di leggere il testo da un pannello che potrebbe essere nascosto.
- Mostra connessione, stato, file attivo e avanzamento della stampa; segnala la disconnessione se il bridge o la stampante non rispondono.
- Il pulsante «Apri monitor» aggiorna lo stato prima di aprire il monitor completo.

- Corretto il calcolo degli indicatori della Home affinché utilizzi la stessa normalizzazione e le stesse regole della Contabilità.
- Escluse le stime non contabilizzate ed evitati i duplicati di entrate associati a vecchi ordini.
- Entrate, costi, profitto, margine e importo incassato vengono calcolati con gli stessi criteri della Redditività avanzata.
- Ridisegnata completamente la Home con dashboard, indicatori, grafici, lavori recenti, scorte, accessi rapidi e avvisi.
- I dati vengono letti da storico, contabilità e bobine locali; le funzioni esistenti sono mantenute.
- Nuovi testi centralizzati e tradotti nelle otto lingue.

- Aggiunto un registro locale persistente per errori JavaScript, promesse non gestite, problemi SQLite e attività dei controlli principali.
- Aggiunto in Opzioni un visualizzatore con filtri per livello e ricerca, oltre all’esportazione JSON e all’eliminazione manuale.
- I registri sono salvati fuori dalla cartella di installazione, nei dati locali dell’utente, con rotazione automatica e un massimo di 50 voci visibili.
- Il registro evita di acquisire valori dei moduli e dati sensibili. I file di log generati non vengono mai inclusi negli ZIP di distribuzione.
- Tutti i nuovi testi sono centralizzati e tradotti nelle otto lingue.

### v1.3 — Traduzioni del sistema di licenze ed espansione delle lingue
- Aggiunte in `js/traducciones.js` le traduzioni mancanti per accesso, autenticazione e consultazione delle licenze in spagnolo, inglese, francese, tedesco, italiano e polacco.
- I testi fissi della finestra globale («Avviso» e «Accetta») utilizzano il sistema centrale di traduzione, senza un dizionario separato.
- I testi dell’applicazione sono integrati e mantenuti in tutte le otto lingue disponibili: spagnolo, inglese, francese, tedesco, italiano, polacco, arabo e cinese semplificato.
- I nuovi testi e le finestre di dialogo sono centralizzati in `js/traducciones.js` per evitare stringhe isolate nei file dell’applicazione.
- Aggiunte due nuove lingue, arabo e cinese semplificato, portando l’applicazione a otto lingue.
- Risolti i problemi con le miniature G-code: estrazione della miniatura disponibile con la risoluzione più alta e conservazione dell’immagine quando il lavoro viene inviato dal monitor alla calcolatrice.
- Corretti piccoli problemi di funzionamento, inizializzazione, traduzioni e alias dei colori.

### v1.2 — Modifiche del 31 ottobre: riconnessione automatica della stampante all’avvio
- All’apertura dell’applicazione, l’IP salvato della stampante selezionata viene nuovamente applicato al bridge locale prima di consultarne lo stato.
- Il controllo della connessione avviene dopo la sincronizzazione della configurazione, evitando di mostrare offline una stampante online perché il bridge conserva un IP precedente.
- La selezione e l’IP salvato vengono mantenuti quando la stampante è realmente offline; non viene forzata una ricerca di rete e non viene cambiata stampante.

#### Modifiche del 30 ottobre: monitor U1, miniature e SQLite
- La stampante configurata e il relativo IP vengono conservati anche se è spenta o non risponde; viene identificata come «NON CONNESSA» e i vecchi dati del monitor vengono cancellati.
- Il lettore del G-code attivo estrae la miniatura con la risoluzione più alta e la conserva quando il lavoro viene inviato alla calcolatrice.
- Ridotte le scritture SQLite duplicate: selezione della stampante con chiave canonica e salvataggio raggruppato della bozza della calcolatrice (350 ms), con svuotamento all’uscita.
- Le chiavi storiche sono mantenute per compatibilità e i nuovi testi sono centralizzati in `js/traducciones.js` per le sei lingue.

### v1.1 — Prima versione pubblica e cronologia delle funzioni precedenti
- Versione pubblica iniziale: calcolatore dei costi, stime, integrazione Orca/G-code, monitor U1, inventario, contabilità, clienti, preventivi, ordini, fatture, SQLite e sei lingue.
- I miglioramenti pubblicati prima di v1.2 sono raggruppati qui per mantenere una numerazione commerciale coerente, senza mostrare i numeri interni di sviluppo.
