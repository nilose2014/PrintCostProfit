# Installazione rapida

Scegli il pacchetto corrispondente al tuo sistema operativo:

### Windows 10 / 11 — versione stabile v1.2

- **[Scarica il programma di installazione per Windows v1.2](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.2/PrintCostProfit-Windows-Installer-v1.2.zip)**.
- Estrai il file ZIP ed esegui `PrintCostProfit-Setup-1.2.exe`.
- Segui i passaggi dell'installazione. Quindi avvia Print Cost & Profit tramite il collegamento creato.
- Il programma di installazione include i componenti necessari per l'archiviazione locale SQLite; non è necessario installare Python manualmente.

**Repository Windows:** [PrintCostProfit — ramo principale](https://github.com/nilose2014/PrintCostProfit). Se preferisci installare dal codice sorgente, apri **Code → Download ZIP**, estrai tutti i file in una cartella permanente ed esegui `Integracion_Orca_Postprocesado.bat`.

### Linux / Ubuntu — versione stabile

- **[Scarica la versione stabile per Linux](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1)**.
- Estrai il file ZIP scaricato.
- Segui le istruzioni di installazione e avvio incluse nel pacchetto.

**Repository / versione Linux:** [PrintCostProfit — Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux).

---

# Print Cost & Profit v1.2

## Calcolatore dei costi, della produzione e della gestione per la stampa 3D

Print Cost & Profit è un'applicazione progettata per aiutare gli utenti della stampa 3D a calcolare i costi effettivi di produzione, controllare il consumo di filamento, gestire i materiali e organizzare l'attività commerciale legata alle proprie stampe.

L'applicazione combina un calcolatore dei costi con strumenti di gestione, archiviazione locale e integrazione con slicer basati su OrcaSlicer, in particolare Snapmaker Orca, OrcaSlicer e Creality Print. Include inoltre un monitor per le stampanti compatibili, con diversi livelli di compatibilità a seconda del modello e della connessione disponibile.

## Schermate dell'applicazione

Le immagini seguenti mostrano alcune schermate di Print Cost & Profit. Illustrano diverse aree dell'interfaccia; le funzioni disponibili dipendono dalla versione e dalla configurazione installate.

![Calcolatore dei costi](galeria/es/01-calculadora-de-costes.jpg)

![Risultato e profitto](galeria/es/02-resultado-y-beneficio.jpg)

![Pannello di stampa flottante](galeria/es/03-panel-flotante-de-impresion.jpg)

**Autrice:** Beatriz Toro Martin

**Versione pubblicata:** v1.2

**Sistema operativo di riferimento:** Windows 10 e Windows 11

**Repository ufficiale:** https://github.com/nilose2014/PrintCostProfit

---

# 1. Funzioni principali

## 1.1. Calcolatore dei costi di stampa 3D

Il calcolatore consente di stimare il costo di produzione di un pezzo in base ai parametri di stampa e ai costi associati.

A seconda della configurazione disponibile, è possibile considerare le seguenti voci di costo:

- Consumo di filamento.
- Prezzo del materiale utilizzato.
- Tempo di stampa.
- Costi di funzionamento e usura della stampante.
- Ammortamento dell'attrezzatura.
- Altre spese legate alla produzione.
- Margine di profitto desiderato.
- Imposte e valuta selezionate.

L'obiettivo è conoscere il costo di produzione di un pezzo prima di deciderne il prezzo di vendita.

## 1.2. Prezzo di vendita, profitto e margine

Il calcolatore consente di esaminare il risultato economico stimato di una stampa.

I calcoli aiutano a distinguere tra:

- **Costo di produzione:** valore stimato delle risorse utilizzate.
- **Prezzo di vendita:** importo che si intende chiedere per il pezzo.
- **Profitto stimato:** differenza calcolata tra ricavi e costi considerati.
- **Margine:** rapporto tra profitto e prezzo di vendita, secondo la definizione utilizzata dal calcolo.
- **Prezzo consigliato:** prezzo suggerito in base ai parametri configurati.

I risultati dipendono dai prezzi, dalle percentuali, dai tempi e dagli altri valori inseriti. Per ottenere stime utili, mantieni aggiornati i costi del filamento, della stampante e delle spese aggiuntive.

![Inventario prodotti](galeria/es/04-inventario-de-productos.jpg)

## 1.3. Profili delle stampanti

I profili consentono di configurare i parametri economici associati alle attrezzature utilizzate.

Possono tenere conto di dati come il costo di acquisto, la durata utile stimata e i costi di funzionamento, quando previsti nel profilo.

Se utilizzi più stampanti, seleziona il profilo appropriato affinché le stime riflettano le differenze tra le macchine.

![Profili e monitor delle stampanti](galeria/es/06-perfiles-y-monitor-de-impresoras.jpg)

## 1.4. Compatibilità con gli slicer

L'integrazione è progettata per slicer basati su OrcaSlicer, in particolare **Snapmaker Orca, OrcaSlicer e Creality Print**. La compatibilità con questi slicer è di circa **90%**; il comportamento può ancora variare in base alla versione e alla configurazione. Pertanto, non deve essere descritta come compatibilità al 100%.

L'integrazione tramite script di post-elaborazione consente di elaborare i file G-code generati dallo slicer e utilizzare i dati disponibili nel flusso di lavoro di Print Cost & Profit. Le informazioni recuperabili dipendono dal file, dalla configurazione e dalla versione dello slicer.

![Preventivi](galeria/es/08-presupuestos.jpg)

## 1.5. Monitor e compatibilità delle stampanti

La stampante con compatibilità confermata al **100%** è la **Snapmaker U1**. Il monitor funziona anche con altre stampanti accessibili tramite **Fluidd** o **Mainsail/Moonraker** (a seconda della configurazione), ma il supporto per questi modelli è ancora in fase di perfezionamento. Alcune funzioni potrebbero non essere disponibili o comportarsi diversamente mentre proseguono i test.

## 1.6. Archiviazione locale SQLite

L'applicazione include componenti per l'archiviazione locale basati su SQLite.

L'obiettivo è conservare i dati in un database sul computer, anziché suddividerli tra PC e browser.

Se l'archiviazione locale non può essere avviata, l'applicazione deve mostrare l'errore corrispondente invece di passare silenziosamente a un altro sistema di archiviazione.

## 1.7. Strumenti diagnostici

Il progetto include script che aiutano a verificare l'avvio dell'applicazione, il funzionamento del bridge locale e alcuni problemi di integrazione.

Questi strumenti forniscono informazioni utili quando un componente non si avvia o un'operazione non viene completata correttamente.

---

# 2. Requisiti preliminari

Prima di avviare il programma, è consigliabile disporre di:

- Un computer con Windows 10, Windows 11 o Linux.
- Una cartella locale permanente per installare il progetto.
- Uno slicer basato su OrcaSlicer — in particolare Snapmaker Orca, OrcaSlicer o Creality Print — se desideri utilizzare l'integrazione.
- Tutti i file della distribuzione scaricata.
- I componenti di archiviazione e configurazione inclusi nel pacchetto di distribuzione.

La distribuzione dovrebbe includere l'eseguibile SQLite predisposto per Windows, in modo che l'utente finale non debba installare Python manualmente.

Non avviare l'applicazione direttamente dal file ZIP. Estrai prima tutti i file.

---

# 3. Scaricare e installare Print Cost & Profit

## Passaggio 1. Scaricare il programma

1. Apri il repository ufficiale:

   https://github.com/nilose2014/PrintCostProfit per Windows e https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1 per Linux

2. Fai clic su **Code**.
3. Seleziona **Download ZIP**.
4. Attendi il completamento del download.
5. Estrai il contenuto del file ZIP.

## Passaggio 2. Scegliere la cartella

Puoi utilizzare una cartella come:

`C:\PrintCostProfit`

Puoi anche scegliere un'altra posizione permanente. Evita le cartelle temporanee e non spostare il programma dopo aver configurato i percorsi di OrcaSlicer, a meno che tu non aggiorni anche tali percorsi.

## Passaggio 3. Avviare il programma

Apri la cartella in cui hai estratto i file e fai doppio clic su:

**`Integracion_Orca_Postprocesado.bat`**

Questo file serve sia per l'avvio manuale sia per l'integrazione con OrcaSlicer.

Quando viene eseguito manualmente, verifica se il servizio locale è disponibile. Se non risponde, tenta di avviarlo e attende che sia pronto prima di aprire l'interfaccia nel browser.

Non è necessario aprire prima il file HTML né avviare separatamente il bridge locale quando il programma di avvio può occuparsene.

**Importante:** per utilizzare le funzioni che richiedono l'archiviazione locale, avvia l'applicazione tramite questo file anziché aprire direttamente `Print_Cost_Profit.html`.

---

# 4. Configurare uno slicer basato su OrcaSlicer

L'integrazione è pensata per slicer basati su OrcaSlicer, in particolare Snapmaker Orca, OrcaSlicer e Creality Print. I nomi dei menu e alcuni dettagli possono variare. La compatibilità generale è di circa 90%, quindi è consigliabile eseguire una prova con la versione installata.

L'integrazione utilizza lo script di post-elaborazione per elaborare il G-code quando lo slicer ha terminato lo slicing.

## Passaggio 1. Individuare il file di integrazione

Nella cartella del programma, individua:

`Integracion_Orca_Postprocesado.bat`

Copia il percorso completo. Se hai utilizzato la cartella di esempio, sarà:

`C:\PrintCostProfit\Integracion_Orca_Postprocesado.bat`

Se hai installato il programma in un'altra posizione, utilizza il percorso effettivo.

## Passaggio 2. Aprire le impostazioni di stampa

1. Apri OrcaSlicer.
2. Seleziona il profilo della stampante che desideri utilizzare.
3. Apri le impostazioni di stampa.
4. Attiva la modalità avanzata o esperto, se necessario.
5. Apri la sezione **Altro**.
6. Individua **Script di post-elaborazione**.

I nomi e la disposizione dei menu possono variare in base allo slicer, alla versione e alla lingua selezionata.

## Passaggio 3. Aggiungere lo script

Inserisci il percorso completo di:

`Integracion_Orca_Postprocesado.bat`

Salva le impostazioni del profilo.

Se lo slicer richiede una sintassi specifica per i percorsi o gli argomenti, utilizza il formato previsto da quella versione.

## Passaggio 4. Eseguire una prova

1. Carica un modello semplice.
2. Seleziona la stampante e il profilo di stampa.
3. Configura il materiale.
4. Esegui lo slicing del modello.
5. Esporta il G-code.
6. Verifica che la post-elaborazione venga eseguita senza errori.

Lo script elabora il file G-code quando OrcaSlicer lo richiama con il percorso del file. In questo caso, il comportamento è diverso dall'avvio manuale: elabora il file e termina senza aprire una seconda finestra dell'applicazione.

---

# 5. Elaborazione dei file G-code

Il G-code contiene le istruzioni generate dallo slicer per la stampante 3D.

L'integrazione di Print Cost & Profit può elaborare questi file per recuperare i dati disponibili utili ai calcoli e alla registrazione dei lavori.

A seconda delle informazioni presenti nel file e delle funzioni disponibili, i dati rilevanti possono includere:

- Nome o percorso del file.
- Informazioni di stampa generate dallo slicer.
- Tempo stimato e consumo di materiale.
- Informazioni sul filamento, quando disponibili.

I valori ricavati dal G-code sono stime dello slicing. Non devono essere considerati automaticamente come consumo effettivo confermato dalla stampante.

## Prova manuale con un file G-code

Il progetto include:

`Probar_Integracion_con_Gcode.bat`

Per eseguire una prova:

1. Individua un file G-code generato dallo slicer compatibile che stai utilizzando.
2. Trascina il file su `Probar_Integracion_con_Gcode.bat`.
3. Attendi il completamento del processo.
4. Controlla il risultato e gli eventuali messaggi di errore.

Questa prova aiuta a distinguere un problema di elaborazione del file da un problema del servizio locale.

---

# 6. Gestione dei costi e della redditività ![Riepilogo dei costi](galeria/es/14-resumen-de-costes.jpg)

Per ottenere risultati utili, configura i dati economici prima di calcolare il prezzo di un pezzo.

## Filamento

Mantieni aggiornato il prezzo di ogni materiale utilizzato. Una variazione del prezzo al chilogrammo può influire in modo significativo sul costo dei pezzi prodotti.

## Stampante

Utilizza il profilo della macchina che realizzerà il pezzo. I parametri di ammortamento e usura devono basarsi su stime ragionevoli del costo e della vita utile.

## Tempo di produzione

Il tempo stimato dallo slicer consente di stimare il costo associato all'utilizzo della macchina. Il risultato effettivo può variare a causa di pause, cambi di materiale, guasti o differenze tra tempo stimato e tempo reale.

## Spese aggiuntive

Includi le spese applicabili al lavoro e previste nella configurazione del calcolatore.

## Prezzo di vendita

Esamina il prezzo consigliato insieme a costo, profitto e margine. L'affidabilità di un prezzo calcolato dipende dalla qualità dei dati inseriti.

---

# 7. Archiviazione e conservazione dei dati

Print Cost & Profit utilizza un servizio locale e un database SQLite per le funzioni che dipendono da questa archiviazione.

La posizione utilizzata dall'installazione può trovarsi all'interno del profilo utente locale di Windows.

## Raccomandazioni

- Non eliminare il database mentre il servizio è in esecuzione.
- Non spostare manualmente la cartella dei dati.
- Esegui una copia di sicurezza dei dati prima di aggiornare il programma.
- Verifica che il servizio locale si avvii correttamente dopo un aggiornamento.
- Verifica che i dati vengano conservati dopo aver chiuso e riaperto l'applicazione.

## Se compare un errore di archiviazione

Se l'applicazione segnala che non può avviare l'archiviazione del PC, non continuare a inserire dati come se venissero salvati correttamente.

Controlla il servizio locale e utilizza gli strumenti diagnostici. Non eliminare il database per tentare di risolvere il problema.

La protezione contro il passaggio silenzioso all'archiviazione del browser è progettata per evitare che i dati vengano suddivisi tra due posizioni differenti.

---

# 8. Script e strumenti inclusi ![Documentazione e assistenza](galeria/es/19-documentacion-y-ayuda.jpg)

Il repository contiene diversi file ausiliari. Non è necessario eseguirli tutti manualmente durante il normale utilizzo.

| File | Funzione |
|---|---|
| `Integracion_Orca_Postprocesado.bat` | Avvio manuale dell'applicazione e punto di ingresso per la post-elaborazione degli slicer compatibili basati su OrcaSlicer. |
| `Iniciar_Puente_Orca.ps1` | Avvia o controlla il bridge di integrazione. |
| `Iniciar_Puente_Orca_Independiente.cmd` | Programma di avvio autonomo del bridge locale. |
| `Integracion_Print_Cost_Profit.ps1` | Elabora l'integrazione con il file G-code. |
| `Probar_Integracion_con_Gcode.bat` | Prova manuale dell'elaborazione di un G-code. |
| `Comprobar_Puente_U1.bat` | Controlla il bridge relativo alla Snapmaker U1. |
| `Diagnostico_Arranque.bat` | Aiuta a individuare i problemi di avvio. |
| `Diagnostico_Print_Cost_Profit.bat` | Strumento diagnostico dell'applicazione. |
| `Diagnostico_Version.bat` | Controlla le informazioni sulla versione. |
| `pcp_sqlite_api.py` | Codice del servizio di archiviazione SQLite. |
| `pcp_sqlite_store.py` | Componente per l'accesso e la gestione dell'archiviazione SQLite. |
| `storage-client.js` | Client utilizzato dall'interfaccia per comunicare con l'archiviazione. |
| `VERSION` | Informazioni sulla versione del progetto. |
| `LICENSE.txt` | Condizioni d'uso e avviso sul diritto d'autore. |

La disponibilità e il comportamento esatto di ogni funzione dipendono dai file inclusi nella distribuzione e dalla loro configurazione.

---

# 9. Risoluzione dei problemi

## L'applicazione non si apre

1. Verifica di aver estratto tutti i file.
2. Esegui `Integracion_Orca_Postprocesado.bat`.
3. Attendi che il servizio locale risponda.
4. Se non si apre, esegui `Diagnostico_Arranque.bat`.
5. Conserva il messaggio di errore completo.

## L'archiviazione del PC non si avvia

Verifica che il pacchetto includa l'eseguibile SQLite per Windows e che si trovi nella posizione prevista dal server.

Se compare un errore HTTP 500, controlla lo stato del servizio e i messaggi diagnostici prima di tentare di modificare i dati.

Non passare all'archiviazione del browser e non eliminare il database come soluzione improvvisata.

## Lo slicer non esegue l'integrazione

1. Controlla il percorso del file `.bat`.
2. Assicurati che il file esista.
3. Controlla la configurazione del profilo di stampa.
4. Esegui una prova con `Probar_Integracion_con_Gcode.bat`.
5. Conserva l'errore e il percorso del G-code utilizzato.

## I dati non vengono conservati

Verifica di aver avviato l'applicazione tramite il programma di avvio e che il servizio locale sia in esecuzione.

Quindi esegui una prova con dati non critici e verifica che vengano conservati dopo il riavvio dell'applicazione.

Non eliminare i dati esistenti per tentare di riparare l'archiviazione.

---

# 10. Sicurezza e buone pratiche

- Scarica il programma dal repository ufficiale.
- Non condividere password, chiavi private o credenziali.
- Non eseguire script provenienti da fonti sconosciute.
- Non esporre il servizio locale a Internet senza un'adeguata configurazione di sicurezza.
- Conserva copie di sicurezza dei dati importanti.
- Controlla le dipendenze e il funzionamento del programma prima di sostituire file durante un aggiornamento.

---

# 11. Diritto d'autore e condizioni d'uso

Print Cost & Profit è soggetto alle condizioni indicate in `LICENSE.txt`.

La pubblicazione del codice su GitHub non concede, di per sé, il permesso di commercializzare, rivendere, concedere in sublicenza, ridistribuire o sfruttare commercialmente il software, le versioni modificate o i prodotti derivati quando tali attività sono vietate dalla licenza applicabile.

Le richieste di autorizzazione devono essere presentate per iscritto e accettate espressamente dal titolare dei diritti.

---

# 12. Assistenza e segnalazione dei problemi

Quando segnali un problema, includi:

- Versione di Print Cost & Profit.
- Versione di Windows.
- Nome e versione dello slicer (Snapmaker Orca, OrcaSlicer, Creality Print o altro).
- Stampante utilizzata, se pertinente.
- Operazione eseguita.
- Messaggio di errore completo.
- Passaggi per riprodurre il problema.

Non includere password, chiavi private o dati personali non necessari.

---

**Print Cost & Profit v1.2**

Sviluppato da Beatriz Toro Martin.

Calcola i costi, tieni traccia dei lavori e migliora la gestione finanziaria.
