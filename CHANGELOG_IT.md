## v2.0.224

- v2.0.224: le richieste a U1, I7 e K2 PRO passano direttamente dal processo principale Electron a Moonraker tramite l’IP di ciascuna stampante. Stato, informazioni della stampante e lettura dell’intestazione G-code non transitano più dagli endpoint PowerShell locali. Schede e monitor usano lo stesso trasporto IPC limitato, con cache dello stato separata per IP. Il server locale resta per i file dell’app, l’integrazione Orca e i servizi che ne dipendono ancora.

## v2.0.222

- v2.0.222: per leggere i dati dei filamenti non è più necessario scaricare l’intero G-code. Il server richiede soltanto l’intestazione (massimo 8 MiB), che contiene metadati e miniatura. Monitor e pannello riutilizzano lo stesso processo per IP e nome file, evitando download duplicati; entrambi interrogano anche lo stato della stessa IP selezionata.

- v2.0.221: la scheda Stampanti e il monitor condividono ora lo stesso worker persistente di stato per indirizzo IP. Ogni stampante dispone di una propria connessione Moonraker e cache; cambiare selezione non riavvia né modifica il worker di un’altra macchina. Le schede non usano più un endpoint separato per lo stato in tempo reale. La telemetria condivisa include ora mesh, sensori e livelli.

## v2.0.220

- v2.0.220: l’analisi del G-code è ora associata all’indirizzo IP esatto della stampante selezionata. Quando si cambia stampante viene annullata anche la lettura in background sul server, non soltanto il polling del browser. Una vecchia lettura non può così consumare risorse né interferire con la nuova selezione.

## v2.0.219

- v2.0.219: unifica l’elaborazione incrementale delle traduzioni per evitare scansioni complete duplicate del documento. Le chiamate ripetute a refresh vengono accorpate e può rimanere in attesa una sola scansione completa. Il cambio stampante interrompe subito la richiesta precedente, dà priorità all’ultima selezione e non segnala le cancellazioni previste come errori.

## v2.0.219

- v2.0.219: corregge la consultazione dell’avanzamento G-code affinché gli stati temporanei di lettura/scrittura del file di lavoro non vengano restituiti come HTTP 400; solo gli ID non validi ricevono tale stato. La traduzione incrementale viene suddivisa in attività brevi, fino a 4 nodi o 5 ms per fotogramma, e i cambi di lingua attraversano il documento progressivamente.

## v2.0.217

- v2.0.217: corretta la coordinazione del polling quando si cambia stampante. Se la richiesta precedente sta ancora rilasciando il controller, il nuovo polling viene messo in attesa e avviato automaticamente; i dati precedenti vengono cancellati durante la connessione. Gli annullamenti previsti non vengono più mostrati come errori di connessione.

## v2.0.216

- v2.0.216: ridotto il lavoro per fotogramma del traduttore dinamico per evitare blocchi dell’interfaccia. La scansione iniziale elabora al massimo 60 nodi per fotogramma e gli aggiornamenti dell’osservatore 35; la traduzione incrementale è mantenuta senza modificare chiavi o dati del dizionario.

## v2.0.216

- v2.0.216: la selezione della stampante è unificata tra schede, menu a discesa e monitor. Quando si sceglie una scheda, l’IP selezionato viene propagato subito a tutti i controlli; errori o annullamenti della configurazione non ripristinano più la stampante precedente. Le risposte delle richieste di selezione precedenti vengono ignorate.


- v2.0.214: corregge la selezione dalle schede delle stampanti. La scheda selezionata si aggiorna subito e le risposte obsolete dei controlli vengono ignorate per evitare di mostrare di nuovo la stampante precedente.

- v2.0.213: l’app desktop esegue le letture degli snapshot SQLite e i batch di scrittura tramite IPC di Electron, senza passare da HTTP. Restano invariati le revisioni ottimistiche e lo stesso file SQLite condiviso con il server locale. Backup e integrazioni Orca/U1 continuano a usare il server locale.

## v2.0.212
- Riduce le scritture ripetute ed evita cicli rapidi di nuovi tentativi quando SQLite o il bridge non confermano un'operazione. La coda conserva l'ultima modifica in sospeso e applica un'attesa progressiva; la sincronizzazione riprende dopo la riattivazione di Windows.

﻿- v2.0.212: aggiunto un processo adattatore SQLite persistente per evitare di avviare un nuovo processo a ogni richiesta; scritture, revisioni, conflitti, backup e ripristino sono mantenuti.
- v2.0.210: corretta la dichiarazione e la gestione di `pendingSelectedIp` nel pannello stampanti.
- v2.0.209: corretto l’errore `pendingSelectedIp` non definito e accodati i cambi di stampante durante gli aggiornamenti.
## v2.0.208
- Corretto il cambio stampante nella scheda Stampanti: l’IP richiesta ha la priorità e gli aggiornamenti in attesa non annullano più il cambio.
- Il selettore ripristina la stampante precedente se il bridge non conferma il nuovo IP.
- Ridotta la frequenza di salvataggio dello storico temperature per alleggerire le scritture SQLite.

﻿- v2.0.207: Corretto il cambio stampante nella scheda Stampanti: dopo la conferma della connessione da parte del bridge, il nuovo IP viene sincronizzato immediatamente con la selezione dei dettagli prima di aggiornare schede e informazioni. In questo modo il vecchio IP non mantiene più la priorità. Nessuna modifica a SQLite o ai relativi percorsi.
- v2.0.207: Ripristinato Servidor_Panel_U1.ps1 esattamente dalla versione 2.0.204, annullando l’unica modifica PowerShell introdotta nella 2.0.205; le altre correzioni restano. Rimosso un file .pyc incluso accidentalmente nello ZIP.
- v2.0.205: Ridotte le scritture della telemetria del monitor U1: il tempo viene salvato ogni cinque minuti e i cambi di stato immediatamente. Corretta la rilevazione della prima telemetria per evitare un salvataggio a ogni polling. Selezionando una scheda stampante, viene creata l’opzione mancante nel selettore U1 e viene avviato il cambio effettivo della connessione. Nessuna modifica allo schema o ai percorsi SQLite.
- v2.0.203: Il monitor U1 considera una stampa completata solo dopo uno stato esplicito complete/completed/finished; standby, ready e idle non attivano più lo scarico del filamento né chiudono il movimento contabile provvisorio. La transizione canceling/cancelling non viene più interpretata come annullamento confermato. Ripristinata la finestra riepilogativa dell’annullamento. Il messaggio di avvio diventa «Avvio del programma, attendere…». Nessuna modifica a SQLite.
- v2.0.202: Il server locale ora gestisce le disconnessioni del browser durante l'invio delle risposte come connessioni annullate, anziché come errori generali del server. La conversione dell'età della cache U1 usa ora Int64 per evitare l'overflow di Int32. Database, schema, dati memorizzati e percorsi restano invariati.
- v2.0.201: La coda non invia più scritture singole: raggruppa fino a 25 chiavi in un’unica richiesta e transazione SQLite. Ogni chiave mantiene la propria revisione; i conflitti vengono restituiti per chiave e ritentati senza scartare le modifiche valide del lotto. La sincronizzazione tra finestre controlla ora lo snapshot ogni 15 secondi invece di ogni 5. Nessuna modifica allo schema, al percorso o ai dati SQLite. L’adattatore Python viene ancora avviato una volta per lotto: si riducono gli avvii, ma non è ancora introdotto un processo persistente.
- v2.0.200: L’IP manuale viene salvato solo dopo la conferma della selezione da parte del bridge; un errore di /api/u1/config non inserisce quindi in coda un IP non applicato. L’aggiornamento della dashboard iniziale attivato dalla manutenzione viene eseguito solo quando la scheda Home è visibile e viene rinviato al tempo inattivo; l’intervallo passa da 30 a 60 secondi. Nessuna modifica a SQLite, schema o percorsi.
- v2.0.200: Eliminato il doppio aggiornamento quando si seleziona una stampante da una scheda. /api/u1/config separa ora il salvataggio dell’IP dall’avvio del processo di stato; gli errori vengono registrati in printcostprofit_app.log. Gli errori effettivi di salvataggio continuano a restituire 502. SQLite e i relativi percorsi non vengono modificati.
- v2.0.198: Ottimizzata l’inizializzazione delle traduzioni: le richieste di aggiornamento del dizionario vengono accorpate per ricostruire gli indici una sola volta e la traduzione iniziale del DOM viene eseguita a blocchi per evitare di bloccare l’avvio. Restano disponibili la traduzione dinamica degli elementi aggiunti e il cambio di lingua. Nessun dato o percorso SQLite viene modificato.
- v2.0.197: Migliorata la coda di scrittura SQLite e la gestione dei conflitti tra finestre. Il bridge restituisce ora la revisione e il valore correnti della chiave in conflitto, così il client può riallineare la scrittura senza scaricare l’intero snapshot. Restano attivi il controllo delle revisioni e il nuovo tentativo dell’ultimo valore in sospeso. Nessuna modifica allo schema, al percorso o ai dati SQLite.
- v2.0.196: Corretto l’errore che impediva l’aggiornamento del monitor U1: il controller AbortController del polling è ora dichiarato nell’ambito corretto. Quando si cambia stampante, la richiesta precedente viene annullata esplicitamente prima di avviare il nuovo ciclo, evitando riferimenti a una variabile non definita e risposte tardive della stampante precedente. Il database e i dati salvati non vengono modificati.
- v2.0.195: Corretto il salvataggio del lavoro U1 attivo: il record della miniatura per file viene definito e confrontato correttamente, eliminando l’errore `thumbnailRecord is not defined`. Quando si cambia stampante, il polling precedente viene annullato, viene mostrato subito l’ultimo lavoro salvato per la stampante selezionata e parte un nuovo polling. La selezione IP non attende più una seconda richiesta Moonraker sincrona; il worker aggiorna la connessione in background. Nuovi messaggi tradotti in tutte e otto le lingue.
- v2.0.194: Ottimizzato l’archiviazione del monitor U1: la miniatura del lavoro attivo è separata dai dati di avanzamento e viene salvata solo quando cambia; migliorati il recupero della coda di scrittura e la priorità delle operazioni interattive. SQLite non esegue più DDL né rinegozia WAL a ogni richiesta quando lo schema è aggiornato. La lettura della cache di stato U1 viene ripetuta e restituisce uno stato temporaneo sicuro in caso di errore.
- v2.0.193: Ridotto il carico di archiviazione del monitor U1: la miniatura del lavoro attivo viene salvata separatamente e solo quando cambia; gli aggiornamenti periodici non inviano più l’immagine base64. Migliorati il recupero e la priorità della coda di scrittura. Evitata la rinegoziazione di WAL in ogni processo SQLite. L’endpoint di stato U1 riprova a leggere la cache e restituisce uno stato temporaneo invece di HTTP 502 in caso di errore di lettura.
- v2.0.193: Corretta la gestione dei file temporanei della cache delle stampanti. Se la scrittura o la sostituzione della cache U1 non riesce, il file temporaneo viene eliminato in un blocco finally. All’avvio del server vengono ripuliti solo i file temporanei noti più vecchi di 24 ore; database SQLite, backup e cache definitive non vengono modificati.
- v2.0.191: Ricostruito l’elenco degli avvisi iniziali con un contenitore flex verticale e schede ad altezza automatica minima, rimuovendo la griglia che causava ancora sovrapposizioni. Flusso e dimensioni di icona, titolo e descrizione sono definiti esplicitamente; il foglio correttivo viene caricato per ultimo per prevalere sugli stili ereditati.
- v2.0.190: Corretto il layout degli avvisi nella schermata iniziale: rimosso lo pseudo-icon ereditato che occupava una cella aggiuntiva della griglia e spostava il testo, impilandolo verticalmente. Ripristinato il normale ritorno a capo all’interno di ogni scheda.
- v2.0.190: Ridisegnati gli avvisi della dashboard con schede scure, icone più visibili, titoli e descrizioni separati, spaziatura e contrasto migliorati. L’anteprima è limitata a quattro avvisi per evitare che il testo risulti compresso. Aggiunta un’icona dedicata ai problemi della stampante.
- v2.0.190: Aggiunti avvisi nella campanella per errori e problemi rilevati sulla stampante selezionata, inclusi stati di errore e disconnessioni. Gli avvisi vengono aggiornati e contrassegnati come risolti quando il problema scompare. Aggiunta in Opzioni una casella per attivare o disattivare questi avvisi. Traduzioni centralizzate in tutte le otto lingue.
- v2.0.190: Orca: il punto di rilevamento del controllo della rotellina è stato spostato all’85% dell’altezza della finestra nativa, nella zona inferiore delle impostazioni, evitando di dipendere dalla disposizione variabile della sezione «Stampante» aperta o chiusa.
- v2.0.190: Orca: lo scorrimento non dipende più da WindowFromPoint, che poteva restituire la superficie sovrapposta di PCP. Vengono enumerati i controlli figli visibili della finestra Orca e viene selezionato quello del processo Orca che copre il punto inferiore del pannello; se non esiste, l’azione viene annullata senza interagire con altre finestre.
- v2.0.190: Orca: le frecce di scorrimento sono state spostate al 62% dell’area dello slicer e il punto di destinazione della rotellina al 68%, nella zona inferiore visibile delle impostazioni. Il controllo del processo resta attivo per impedire interazioni fuori da Orca.
- v2.0.184: Corretta la codifica di `package.json`: rimosso il BOM UTF-8 che impediva a `@electron/rebuild` di analizzare il file JSON durante la creazione dell’installer Windows.
- v2.0.184: Gli avvisi di manutenzione ora includono le ore effettive di stampa, come la schermata Manutenzione, e vengono ricontrollati periodicamente e dopo le modifiche alle attività. Orca: rimossi SendInput e lo spostamento fisico del cursore; le frecce inviano la rotellina solo al controllo rilevato appartenente al processo Orca e annullano l’azione se la destinazione è diversa.
- v2.0.182: Corretta la conversione del delta negativo della rotellina in UInt32 per SendInput. PowerShell non converte più direttamente -120 in UInt32; la rappresentazione binaria viene mantenuta con BitConverter. Questo evita l’errore che bloccava ScrollOptions.
- v2.0.181: Corretto lo script effettivo ScrollOptions: ora usa SendInput con MOUSEEVENTF_WHEEL sopra l’area sinistra delle impostazioni e ripristina la posizione del cursore. Rimosso l’invio inefficace di WM_MOUSEWHEEL all’HWND principale.
- v2.0.180: I messaggi della rotellina inviati a HWND presunti sono sostituiti da un vero input della rotellina di Windows (SendInput), posizionato sulle impostazioni di Orca. La posizione originale del cursore viene ripristinata.
- v2.0.179: Lo scorrimento viene nuovamente inviato a un controllo figlio reale di Orca, individuato in un punto fisso del contenuto del pannello sinistro. L’evento non viene più inviato alla finestra principale che Qt non elaborava. Il PID di destinazione viene verificato; l’altezza delle frecce non influisce.
- v2.0.178: Sostituito il targeting WindowFromPoint con l’invio di WM_MOUSEWHEEL direttamente alla finestra principale di Orca, usando coordinate all’interno del pannello sinistro delle impostazioni. Lo scorrimento non dipende più dall’altezza delle frecce né dal loro allineamento con la barra.
- v2.0.177: Lo scorrimento delle impostazioni di Orca usa ora la posizione verticale effettiva del clic sulle frecce. L’evento della rotellina viene inviato all’area del pannello sinistro alla stessa altezza, anche quando sezioni come Stampante o Filamenti vengono compattate/espande e la barra cambia posizione.
- v2.0.176: Aggiunte in PCPWin32Overlay le dichiarazioni Win32 mancanti per WindowFromPoint e SendMessageTimeout. Lo scorrimento delle impostazioni native di Orca può ora individuare il controllo sinistro e inviare WM_MOUSEWHEEL senza errori di metodo inesistente.
- v2.0.175: Corretta la dimensione dell’area Orca integrata: il contenitore di lavoro occupa nuovamente tutta l’altezza disponibile. I controlli di scorrimento restano in una colonna laterale fissa senza ridurre l’altezza dello slicer. La v2.0.174 aveva creato una riga flex senza crescita, mostrando Orca solo in una fascia superiore.
- v2.0.174: Aggiunto lo scorrimento mirato del pannello nativo sinistro delle impostazioni di Snapmaker Orca. I pulsanti compatti su/giù inviano WM_MOUSEWHEEL al controllo effettivo nell’area delle impostazioni (22% della larghezza), non al bordo della finestra o al piatto 3D. La destinazione viene verificata come appartenente a Orca e gli errori vengono segnalati. Traduzioni aggiunte in tutte e otto le lingue.
- v2.0.173: Rimossa completamente la barra di scorrimento esterna delle opzioni Orca introdotta nella v2.0.172, perché non funzionava con il pannello nativo. Ripristinata l’area originale del laminatore e rimosso il relativo codice IPC e PowerShell. L’integrazione nativa della v2.0.171 è mantenuta.
- v2.0.172: Aggiunto un controllo laterale compatto per scorrere le impostazioni di stampa di Snapmaker Orca da PCP con pulsanti, rotellina e trascinamento. Invia lo scorrimento al pannello nativo sinistro senza modificare i profili né sovrapporre HTML a Orca. Cinque nuove stringhe tradotte in otto lingue in traducciones.js.
- v2.0.171: Corretta la corrispondenza delle bobine alternative: vengono proposte solo tonalità cromaticamente vicine della stessa famiglia (ad esempio rosso e rosso-arancio); nero, bianco, beige e famiglie diverse sono esclusi. Le alternative ora usano un selettore compatto per preservare il layout del monitor.
- v2.0.170: La selezione delle bobine alternative nel monitor U1 e nel pannello stampanti riconosce ora le varianti della stessa famiglia di colore. Ad esempio, rosso ↔ rosso-arancio e diverse tonalità di verde sono consentiti, mantenendo i requisiti di compatibilità del materiale e disponibilità di stock. Le famiglie di colore diverse sono escluse.
- v2.0.169: Orca viene visualizzato senza barra del titolo né bordi della finestra all’interno del rettangolo assegnato da PCP. Rimane una finestra Qt di primo livello di proprietà di PCP per mantenere i dialoghi modali; quando viene separato, vengono ripristinati bordi e controlli normali.
- v2.0.168: Ampliato lo spazio verticale dello slicer integrato riducendo intestazione, pulsanti e riga di stato. L’area nativa di Orca occupa tutto lo spazio rimanente e le sue dimensioni sono limitate all’area client disponibile di PCP, anche quando la finestra viene ridotta.
- v2.0.167: Ampliata l’area utile di Snapmaker Orca. Intestazione, pulsanti e messaggio di stato sono più compatti; gli elementi descrittivi secondari vengono nascosti sugli schermi di altezza comune per guadagnare spazio verticale per i controlli e lo scorrimento di Orca.
- v2.0.166: Corretta l’integrazione delle finestre di dialogo modali di Snapmaker Orca. La finestra Qt torna a essere una finestra di primo livello di proprietà di PCP, anziché una finestra WS_CHILD, così i dialoghi Nuovo progetto, Apri e Salva possono essere visualizzati correttamente. Aggiunta la sincronizzazione quando PCP viene spostato, ridimensionato, massimizzato o ripristinato, limitando Orca all’area dell’app.
- v2.0.165: Ottimizzata la traduzione incrementale del DOM. L’osservatore non percorre più interi sottoalberi né confronta ogni nodo con tutti gli altri; elabora piccoli gruppi e ignora le mutazioni generate dalla traduzione per evitare blocchi prolungati.
- v2.0.164: Orca diventa una finestra figlia nativa di PCP, ritagliata da Windows nell’area client per non uscire dall’app quando si ridimensiona. Il pannello usa lo spazio disponibile senza imporre un’altezza minima; ridotta la dimensione minima della finestra principale.
- v2.0.163: Ampliata l’area visibile dello slicer Orca e compattati i controlli superiori per dare più altezza alla finestra nativa.
- v2.0.162: L’integrazione Orca ignora le finestre di avvio senza titolo e attende la finestra principale Snapmaker/Orca, verificando titolo, handle e PID prima dell’aggancio.
- v2.0.161: Orca attende che la finestra principale Qt sia stabile prima dell’integrazione, recupera gli handle HWND sostituiti e rifiuta coordinate non valide quando l’app è ridotta a icona.
- 2.0.160: Orca viene visualizzato come finestra Qt nativa senza bordi, di proprietà di PCP e posizionata sopra l’area dello slicer; SetParent viene rimosso per evitare problemi di rendering tra Qt ed Electron. La posizione segue gli spostamenti, il ridimensionamento, la minimizzazione e il ripristino di PCP.
- 2.0.159: integrazione nativa rivista: Orca viene ospitato direttamente come finestra figlia della finestra principale PCP, evitando la finestra host Electron opaca che copriva il contenuto Qt. Corretto anche un separatore mancante in traducciones.js che impediva il caricamento delle lingue.
- 2.0.158: ripristinato il pannello Orca integrato dalla base 2.0.148. La finestra host non riceve più coordinate fisse durante spostamento/ridimensionamento; la geometria deriva dall’area effettiva misurata dall’interfaccia. Sincronizzazione anche durante lo scorrimento e il cambio scheda.
- 2.0.157: nuova strategia per lo slicer: Snapmaker Orca si apre in una finestra separata, senza SetParent né finestra host sovrapposta. Le scritture SQLite interattive hanno priorità rispetto allo storico della telemetria termica.
- 2.0.156: ripristinati main.cjs e orca-window.ps1 dalla base 2.0.148, ultima versione di riferimento con integrazione visibile di Orca. Annullate le modifiche successive a visibilità, posizionamento e selezione della finestra.
- 2.0.155: ripristinato il rilevamento delle finestre Qt della base 2.0.148. Le finestre principali nell’albero dei processi avviato vengono accettate anche prima che Snapmaker Orca assegni un titolo; restano le successive migliorie dell’host e del ridimensionamento.
- 2.0.154: corretta la selezione della finestra di Snapmaker Orca. Le finestre Qt ausiliarie o senza titolo non vengono più incorporate; l’app attende l’identificazione della finestra principale per evitare un pannello vuoto.
- 2.0.153: corretto l’ordine di visualizzazione della finestra host di Orca; la superficie host viene mostrata prima dell’aggancio e la finestra Qt viene ridimensionata dopo, evitando che Chromium la copra. Rimosso un listener duplicato che ripristinava coordinate fisse.
- 2.0.152: corretti dimensioni e posizione del pannello nativo di Orca; il ridimensionamento e il cambio di scheda mantengono le dimensioni effettive dell’area visibile.
## v2.0.151
- Orca integrato: selezione stabile della finestra Qt principale, privilegiando i titoli Snapmaker/Orca ed evitando finestre temporanee senza titolo durante l’avvio.
- Orca integrato: ridimensionamenti raggruppati e serializzati; se Windows perde il collegamento, la finestra Qt viene individuata e collegata nuovamente.

## v2.0.150
- Orca integrato: evita di mostrare la finestra host vuota mentre Snapmaker Orca si avvia o viene individuata la sua finestra Qt.
- Orca integrato: la finestra nativa viene mostrata solo dopo la conferma di un handle valido; se si cambia scheda durante l’avvio, la finestra host rimane nascosta.
- Orca integrato: se il processo è già avviato ma il primo collegamento non è terminato, il pulsante consente di riprovare invece di indicare erroneamente che lo slicer è pronto.

## v2.0.149
- Stabilità: la sincronizzazione SQLite avvisa l’interfaccia solo in presenza di modifiche effettive.
- Home: rimossi i ridisegni completi periodici; aggiornamento su modifiche e navigazione, con ricerca stampanti limitata.
- Avvisi: rimossa la scansione completa ogni 5 secondi; scansione all’avvio e quando cambiano i dati.

## 2.0.148
- Orca: corretto l’errore PowerShell che impediva l’integrazione della finestra Qt; l’ID di processo restituito da `GetWindowThreadProcessId` non utilizza più la variabile automatica riservata `$PID`.

## 2.0.147
- Orca: la finestra nativa integrata segue ora l’area effettiva del pannello, anche quando si cambia scheda o si ridimensiona la finestra.

### v2.0.147
- Corretta l’assegnazione manuale delle bobine alternative nel monitor U1: la scelta esplicita resta assegnata anche se il colore HEX è approssimativo.
- Aggiunto l’avviso di assegnazione in tutte le otto lingue.

## v2.0.143
- Monitor U1: il controllo dell’avanzamento del G-code passa da intervalli di 500 ms a intervalli adattivi di 1,5–2,5 s, con attesa massima e timeout per richiesta. Vengono mantenuti i dettagli degli errori HTTP del server.

## v2.0.136
- Laminatore Orca: aggiunto un avvio diagnostico in una finestra indipendente, senza incorporare la finestra Qt in Electron. Consente di verificare la selezione degli oggetti separatamente e distinguere i problemi di incorporamento dai problemi del motore Orca.

## v2.0.134
- Server Windows: `Servidor_Panel_U1.ps1` viene salvato in UTF-8 con BOM e terminazioni di riga Windows, affinché PowerShell 5.1 interpreti correttamente i caratteri polacchi senza corrompere stringhe o virgolette all’avvio.

## v2.0.133
- Manutenzione: il selettore non mescola più i profili economici salvati in Opzioni con le stampanti reali. Mostra le stampanti rilevate usando gli alias associati all'IP e mantiene le macchine aggiunte manualmente.

## v2.0.133
- Orca: la ricerca della finestra principale è limitata ai processi discendenti dell’eseguibile selezionato o alla sua cartella di installazione esatta, evitando di collegare un’altra istanza di Orca già aperta.

## v2.0.129
- Integrazione Snapmaker Orca: verifica che lo script di incorporamento restituisca un handle della finestra e un PID prima di mostrare il pannello; evita di presentare un’area vuota come laminatore integrato correttamente.
- Diagnostica: registra il percorso dell’eseguibile, il PID del processo di avvio, l’esito dell’incorporamento e le chiusure impreviste dei processi secondari di Electron per distinguere i problemi dell’interfaccia dalle chiusure di Orca.

## v2.0.128
- Mesh del piano: le mesh dense sfruttano meglio lo spazio disponibile senza ridursi a una griglia minuscola. I numeri sovrapposti vengono nascosti; restano cinque riferimenti per asse e al passaggio del mouse sono disponibili coordinate X/Y e altezza Z.
- Snapmaker Orca: la ricerca della finestra nativa attende fino a 90 secondi e riconosce i processi OrcaSlicer/Snapmaker delegati nella cartella di installazione. Il timeout di Electron evita l’interruzione anticipata.

## v2.0.127
Impedisce alle letture G-code asincrone obsolete di sovrascrivere la stampa attiva quando si cambia stampante o file. Le risposte di polling obsolete vengono scartate e le cache di telemetria sono separate per IP.

- Snapmaker Orca: corregge il timeout del processo di integrazione nativa. Lo script Windows poteva attendere fino a 35 secondi per trovare la finestra reale, mentre Electron lo terminava dopo 25 secondi, lasciando il pannello bloccato su «Preparazione di Snapmaker Orca». Il timeout ora supera l’attesa massima dello script.
- Mesh del piano: sostituisce la superficie 3D deformata con una mappa termica dall’alto, con valori Z in ogni punto, assi X/Y in millimetri e scala cromatica leggibile. Rimuove prospettiva e controlli di rotazione che causavano la distorsione.

- Comunicazione U1: un unico processo persistente interroga Moonraker in background e condivide la cache tra le schede; cambiare sezione non avvia una nuova richiesta di connessione. La selezione o il rilevamento di un’altra stampante riavvia solo questo processo.
## v2.0.124
- Corregge un errore di ambito JavaScript durante l’assegnazione di una bobina appena creata dal monitor U1. L’azione usa ora l’API di traduzione centralizzata e non si interrompe dopo la creazione e l’assegnazione.

## v2.0.123
- Corregge la lettura degli importi della calcolatrice con virgola o punto decimale quando si registrano lavori dal monitor U1, evitando che manodopera, extra e altri componenti diventino zero a causa del formato locale.
- Salva manodopera ed extra con chiavi compatibili (`laborAndExtras`, `labor`, `extras`) e consente alla contabilità di leggere sia i movimenti nuovi sia quelli precedenti.
- Rafforza l'integrazione nativa di Snapmaker Orca: rileva anche le finestre principali il cui processo si è separato dal launcher, dà priorità ai titoli Snapmaker/Orca, ripristina la finestra integrata e riposiziona il pannello quando l'app viene spostata o ridimensionata.
- Restituisce il titolo della finestra ospitata per facilitare la verifica dell'integrazione.

## v2.0.122
- Modifica l'integrazione di Snapmaker Orca: la finestra nativa dello slicer viene incorporata direttamente come finestra figlia della finestra principale di Print Cost & Profit; non viene più creata una seconda finestra contenitore sovrapposta.
- Posiziona l'area nativa nello spazio di lavoro dell'app e la ridimensiona quando cambia la finestra principale.
- Mostrare/nascondere riposiziona la finestra nativa nell'area integrata; lo scollegamento di Orca resta un'azione esplicita.
- Rimuove il percorso precedente che poteva mostrare Orca in una finestra separata.

## v2.0.121
- Corregge l'incorporamento della finestra nativa di Snapmaker Orca individuando anche i processi figli avviati dal launcher e attendendo la finestra principale visibile.
- Verifica che Windows abbia effettivamente impostato la finestra di Orca come figlia del pannello prima di mostrarla; in caso di errore nasconde il pannello vuoto e segnala il problema.
- Continua a monitorare il processo Orca effettivo anche se il launcher iniziale termina e ridimensiona la finestra incorporata quando cambia la dimensione dell'app.
- La chiusura dello slicer termina il processo Orca ospitato.

## v2.0.120
- Aggiunge una sezione Snapmaker Orca nell’app desktop. Consente di selezionare l’eseguibile e ospitare la finestra nativa in un pannello dell’app su Windows.
- Aggiunge i comandi per scollegare e chiudere lo slicer; i profili Orca non vengono modificati.

## v2.0.120
- Aggiunge una sezione Snapmaker Orca nell’app desktop, con selezione dell’eseguibile e integrazione della finestra nativa in un pannello dell’app su Windows.
- Aggiunge i comandi per scollegare e chiudere lo slicer. I profili Orca restano invariati.

## v2.0.119
- Ripristino dopo sospensione/ibernazione: le scritture SQLite in sospeso vengono riattivate, le richieste obsolete annullate e lo stato sincronizzato nuovamente al ritorno.
- Monitor U1: evita richieste sovrapposte e aggiorna lo stato della stampante alla ripresa del PC o quando la finestra torna visibile.

## v2.0.118
- Le statistiche delle testine utilizzano ora i contatori persistenti Snapmaker di `extruder_switch_recorder.json`, letti tramite Moonraker.
- Utilizza `switch_count`, `error_count`, `retry_count` e, se il file è accessibile, `fan_error_count`.
- Elimina le deduzioni fuorvianti dai log; il terzo indicatore mostra i tentativi reali.

## v2.0.116
- Mesh del piano: aggiunge riferimenti numerici X/Y e cinque tacche della scala Z usando le dimensioni fisiche comunicate dalla stampante.
- Statistiche testine: elimina il conteggio basato su menzioni T0/T1 o parole generiche; conta solo attivazioni esplicite ed errori associati al nome esatto dell’estrusore.
- Le vecchie statistiche vengono invalidate; in assenza di prove viene mostrato «—».

## v2.0.115
- La mesh 3D usa tutta la larghezza e mostra tutti i punti senza tagli, con riferimenti X/Y.

## v2.0.114
- Aggiunge effettivamente la visualizzazione 3D della mesh del piano nel dettaglio di ogni stampante, usando la matrice pubblicata da Klipper/Moonraker.
- Mostra dimensioni, scala delle altezze, minimo, massimo e intervallo; segnala chiaramente quando la matrice non è valida.

## v2.0.113
- Le statistiche delle testine non contano più i comandi T0/T1 come cambi fisici; i valori vengono mostrati solo in presenza di eventi espliciti di conferma. Gli errori generici non vengono più attribuiti indiscriminatamente a ogni testina.
- Il livellamento mostra ora una rappresentazione 3D della matrice reale del piano, con scala delle altezze, intervallo e valori minimo/massimo.

## v2.0.112
- Inventario filamenti: ogni bobina raggruppata può salvare separatamente i grammi rimanenti, mantenendo il design compatto delle schede.
- Monitor U1: somma le scorte delle bobine compatibili per materiale e colore e distribuisce il consumo rispettando i pesi individuali.

## v2.0.111
- Gli ordini creati dalla contabilità ora precompilano il modulo con cliente, descrizione, lavori selezionati e importo; il salvataggio avviene solo dopo aver premuto «Salva ordine».
- Impedisce in questo flusso il salvataggio di ordini vuoti o con importo zero.

## v2.0.111
- La tabella contabile si adatta alla larghezza disponibile senza scorrimento orizzontale.
- La selezione multipla viene mantenuta durante aggiornamenti e sincronizzazioni.

## v2.0.109
- Contabilità: selezione multipla dei movimenti, comprese le spese personali, con invio al calcolatore e creazione di preventivi, fatture o ordini. Le spese personali restano costi interni e non vengono fatturate automaticamente.

## v2.0.108
- Corregge la selezione dei documenti negli ordini: scegliendo un preventivo salvato vengono caricati prodotto, cliente e totale effettivi; l’importo viene ricalcolato al cambio quantità e verificato di nuovo al salvataggio. Le fatture create dall’ordine mantengono righe e importi del preventivo.
- Evita i clienti duplicati quando vengono salvati da clienti, ordini o fatture confrontando e-mail, telefono, codice fiscale o identità completa; i duplicati esatti vengono unificati conservando i dati esistenti.
- I nuovi ordini conservano una copia della stima o del preventivo selezionato e la fattura creata dall’ordine usa tale copia, il cliente e le righe originali. Gli ordini precedenti senza copia non generano fatture con dati non pertinenti.

## v2.0.106
- Corregge le statistiche delle testine: gli errori globali e le menzioni indirette non vengono più attribuiti ai singoli estrusori. Vengono conteggiati solo le attivazioni e i comandi di selezione espliciti; se i log non identificano una testina, viene mostrato «—» invece di uno zero fuorviante.

## v2.0.105
- Corregge il controllo delle scorte del monitor quando l’inventario raggruppa bobine identiche: calcola la disponibilità totale (residuo per bobina × quantità) e distribuisce il consumo tra le unità senza doppie detrazioni.

## v2.0.103
- Corregge la finestra di registrazione delle spese personali/ordini del monitor quando viene aperta da Contabilità: `app-10.css` viene caricato nell’intestazione globale del documento.

## v2.0.103
- Riduce le scritture ripetute di `pcp_active_job_by_printer`: il monitor non salva più l’intero lavoro in SQLite a ogni controllo. Le modifiche reali di stato/file vengono salvate subito; gli aggiornamenti del solo tempo trascorso sono limitati a uno ogni 30 secondi.

## v2.0.103
- Evita lo sfarfallio delle schede: gli errori temporanei mantengono l’ultimo stato valido per 90 secondi durante i tentativi di riconnessione.
- Vengono salvate solo identità e configurazione stabili; lo stato online/offline non viene più scritto in SQLite a ogni controllo.
- Le stampanti salvate vengono lette una sola volta per sessione.
- La cronologia delle temperature viene salvata al massimo ogni cinque minuti per ridurre il carico su SQLite.

### v2.0.103
- Le statistiche delle testine vengono mantenute per stampante tra aggiornamenti e nuove selezioni.
- Associazione più precisa degli eventi agli estrusori per evitare conteggi eccessivi.
- Ridotte le scritture ripetute per alleggerire la coda SQLite.
- Le statistiche salvate restano visibili se la lettura dei registri non riesce.

## v2.0.99
- Le statistiche delle testine vengono caricate automaticamente quando vengono mostrati i dettagli della stampante.
- La lettura dei registri usa un endpoint separato che non ripete le richieste di stato, sensori o cronologia, evitando interferenze con il Monitor.
- Aggiunta una finestra di avanzamento durante la ricerca e il caricamento iniziale delle stampanti.
- Rimossa una seconda richiesta ridondante dello stato della stampante selezionata.

## v2.0.99
- L’archiviazione compatibile con localStorage accoda ora le scritture SQLite tramite XHR asincrono, senza bloccare l’interfaccia.
- Gli aggiornamenti consecutivi della stessa chiave vengono raggruppati e le operazioni serializzate per ridurre i conflitti di revisione.
- I conflitti 409 aggiornano valori e revisioni in modo asincrono e riprovano in maniera controllata.
- La sincronizzazione esterna non sovrascrive più i valori ancora in attesa di salvataggio.

## v2.0.99
- Corretta la sincronizzazione delle revisioni: valori e revisioni vengono aggiornati insieme, evitando conflitti 409 dovuti a revisioni obsolete.
- Aggiunto un singolo tentativo controllato per scritture/rimozioni quando un’altra finestra modifica la stessa chiave.
- Ridotte le scritture della telemetria del Monitor: vengono salvati solo cambi di stato o avanzamenti del minuto.
- Frequenza di salvataggio dello storico termico ridotta da 9 a 30 secondi.
- Adeguati i timeout per la lettura dei registri e limitata l’attesa per file.

## v2.0.96
- L’elenco grezzo dei registri è stato sostituito da schede statistiche visive per ogni testina rilevata: cambi, attivazioni ed errori associati.
- Le statistiche vengono caricate su richiesta e non appesantiscono l’aggiornamento periodico.

## v2.0.95
- Corretto la chiusura accidentale della finestra Crea bobina con il clic destro sui campi numerici.
- Ampliato il rilevamento dei dati dei layer negli oggetti Moonraker di stampanti diverse.
- Aggiunto il caricamento manuale dei registri Klipper per individuare cambi testina, avvisi ed errori; i registri vengono scaricati solo su richiesta.

## v2.0.94
- Rimossi il pannello diagnostico «Dati ricevuti dalla stampante» e il relativo JSON.
- Rimossa la serializzazione periodica e l’aggiornamento nell’interfaccia dei dati diagnostici.
- L’API del pannello non invia più l’elenco degli oggetti rilevati usato solo dalla diagnostica.

## v2.0.93
- Nuova tavolozza termica ad alto contrasto con colori ben distinguibili.
- Assegnazione persistente del colore per sensore tra sessioni e aggiornamenti.
- Normalizzazione delle etichette dello storico per evitare nomi obsoleti nella legenda.

## v2.0.92
- Rilevamento dinamico dei sensori termici e degli oggetti pubblicati da Moonraker, senza elenchi fissi per modello.
- Interrogazione a gruppi per supportare stampanti con molti sensori.
- Grafico e schede termiche basati sulle temperature effettivamente disponibili; le ventole senza lettura della temperatura non vengono tracciate.
- Rilevamento e visualizzazione della velocità delle ventole quando Moonraker fornisce il dato.
- Etichette dei sensori noti tradotte e nomi firmware sconosciuti conservati.

## v2.0.89 — Correzione delle statistiche Moonraker e del grafico termico
- Lettura dei totali da `result.job_totals`, struttura restituita da `/server/history/totals`, mantenendo la compatibilità con risposte piatte.
- Visualizzazione di lavori, tempo di stampa, tempo totale e filamento quando forniti da Moonraker; il filamento totale è espresso in metri.
- Migliorate larghezza, scala e gerarchia visiva del grafico termico e delle schede statistiche.

## v2.0.88 — Correzione delle statistiche e dei grafici delle stampanti
- Il tempo totale e il numero di lavori utilizzano solo i totali ufficiali di Moonraker; gli ultimi 20 lavori non vengono più presentati come cronologia completa.
- Le barre usano durata totale, durata di stampa o orari di inizio/fine disponibili.
- Il grafico termico usa una scala SVG fissa, etichette leggibili e proporzioni corrette.

## v2.0.85

### v2.0.87 — Restyling del pannello stampanti e delle statistiche
- La griglia include tutte le stampanti rilevate, compresa quella principale, con un massimo di quattro schede per riga e layout adattivo.
- Le schede delle macchine, i dettagli tecnici e le statistiche di produzione sono separati visivamente.
- Il grafico delle temperature include scala in °C, griglia e asse temporale; le durate degli ultimi lavori sono mostrate quando è disponibile lo storico.
- I nuovi testi sono centralizzati in `js/traducciones.js` e tradotti nelle otto lingue.

- Stampanti: griglia con fino a quattro schede per riga; la stampante principale resta visibile anche nella griglia.
- Seleziona una scheda per cambiare macchina attiva e visualizzarne tutti i dettagli in un'area separata.
- I dettagli non sono più mescolati alle schede. Layout adattivo.
## v2.0.82
- Corretto l’avvio della ricerca delle stampanti: parametro di rilevamento e stato interno ora dichiarati correttamente.
- Corretto il messaggio di errore di lettura G-code che richiamava una funzione di traduzione non definita.
- Rimossi due vecchi blocchi che accedevano fuori ambito all’indice privato delle traduzioni; ricostruzione tramite PCP_I18N.refresh().
## v2.0.81
- Stampanti: schede in tempo reale per tutte le macchine rilevate o salvate, con stato online/offline, file attivo e barra di avanzamento.
- Stampanti: il nome personalizzato associato all’IP ha la precedenza; altrimenti viene mostrato il nome/hostname comunicato dalla macchina.
- Stampanti: modello, livelli correnti/totali e tempi vengono letti quando pubblicati da Moonraker, senza presupporre un numero fisso di estrusori.
## v2.0.80
- Contabilità: la pagina selezionata viene mantenuta durante il nuovo rendering, evitando che la pagina 2 torni automaticamente alla pagina 1.
- Contabilità: i movimenti sono ordinati per data e ora decrescenti, dal più recente al più vecchio.
## v2.0.80
- Contabilità: le nuove voci salvano una marca temporale reale e mostrano l’ora locale del PC; i vecchi record con la sola data non mostrano più l’ora errata 01:00.
- Monitor: il pulsante passa tra Mostra e Nascondi in base allo stato del pannello e mantiene l’etichetta corretta al cambio lingua.
## v2.0.80
- Stampanti: il messaggio inferiore seleziona direttamente il testo in base alla lingua attiva e si aggiorna quando cambia la lingua del documento.
- Calcolatrice: nuova disposizione desktop con quattro sezioni superiori, pannelli fiscali e riepilogo nella seconda riga, totale evidenziato e confronto/azioni nella terza. Gli identificatori e la logica di calcolo esistenti sono mantenuti.
## v2.0.80
- Corretto il messaggio informativo in fondo alla pagina Stampanti: viene aggiornato esplicitamente al cambio della lingua usando la chiave del dizionario centrale.
## v2.0.80
- Corretto il caricamento delle traduzioni della sezione Stampanti: le stringhe vengono inserite nel dizionario centrale prima della creazione degli indici linguistici, anche per gli elementi dinamici. Nessuna modifica a Moonraker o ai dati degli estrusori.
## v2.0.80
- Verificate e corrette le traduzioni dell’intera sezione Stampanti: intestazione, stato, identificazione, lavoro corrente, temperature, estrusori, piano riscaldato, movimento, software, messaggi e dati ricevuti. Tutti i testi sono centralizzati in traducciones.js per otto lingue.
## v2.0.80
- Rinnovamento grafico della pagina Stampanti: riepilogo superiore con indicatore circolare di avanzamento, file attivo e tempi principali.
- Pannello termico con schede indipendenti e barre visive per ogni estrusore e per il piano riscaldato; adattabile a stampanti con uno o più estrusori.
- Nuove etichette centralizzate in tutte le otto lingue.
## v2.0.80
- Le richieste Moonraker rilevano gli oggetti disponibili su ogni macchina e recuperano i dati di tutti gli estrusori indipendenti, del piano, del movimento e dei sensori supportati.
- La pagina Stampanti mostra ogni estrusore separatamente: uno per le macchine a singolo estrusore e quattro per Snapmaker U1, se esposti dal firmware.
## v2.0.80
- La sezione Stampanti riutilizza gli endpoint esistenti del monitor Moonraker (/api/u1/printer e /api/u1/status), mostrando stato, avanzamento, livelli, tempi, temperature e posizioni degli assi quando disponibili.
- Lo stato della connessione si aggiorna dopo ogni richiesta e i dati vengono aggiornati ogni 3 secondi mentre la sezione è visibile.
## v2.0.80
- Ripristinata la visualizzazione delle bandiere SVG nel selettore della lingua come nella versione stabile. Restano il selettore unico e le traduzioni centralizzate.
- Gli script PowerShell vengono salvati con BOM UTF-8, così Windows PowerShell 5.1 interpreta correttamente i caratteri accentati e l'avvio del bridge non fallisce per la codifica.

## v2.0.80
- Rimossa la creazione duplicata del selettore: ora un solo modulo gestisce il selettore della lingua.
- Il selettore viene montato dopo gli script dell’applicazione e ripristinato se la barra viene ricreata.
- Restano le traduzioni centralizzate e tutte le otto lingue.

## v2.0.61
- Aggiunto nella barra superiore un selettore della lingua visibile e persistente, indipendente dal precedente sistema di inserimento.
- Restano disponibili tutte le otto lingue e il motore di traduzione centralizzato.

## v2.0.60
- Corretto il cambio lingua: la traduzione non sostituisce più il contenuto dei controlli né rimuove gli elementi figli con gestori di eventi.
- La lingua viene applicata in un solo passaggio e la scelta viene salvata.
- Restano attivi la diagnostica del renderer e DevTools (Ctrl+Maiusc+I / F12).

## v2.0.59
- Registrazione persistente degli errori JavaScript e del processo renderer di Electron.
- Strumenti per sviluppatori attivati nell’applicazione installata con Ctrl+Maiusc+I o F12.
- Il sistema di licenze rimane disattivato.

## v2.0.38
- Ripristina la disposizione desktop della calcolatrice della v2.0.26 ed evita la sovrapposizione di indicatori e dettaglio dei costi nelle modalità Personale e Vendita.

## v2.0.36
- Ripristino sicuro delle modifiche all’interfaccia della v2.0.35; recupero della pagina e del comportamento della v2.0.34.
- Ripristino delle precedenti regole di layout della calcolatrice. Nessun modulo funzionale o dato utente viene modificato.

## v2.0.34
- Corregge la sovrapposizione delle schede dei risultati nelle modalità Personale e Vendite con un layout verticale stabile.
- Gli elenchi delle stampanti mostrano il nome personalizzato salvato, senza stato offline né identificatori firmware.
- Normalizza le vecchie notifiche contabili salvate in cinese e le mostra con testi spagnoli traducibili.
- Centralizza il sottotitolo degli avvisi in tutte e otto le lingue.

## v2.0.33
- Corregge la griglia della calcolatrice personale ripristinando il layout originale a 12 colonne ed evitando sovrapposizioni tra indicatori e dettaglio.
- L’icona di aggiornamento ora ricarica la pagina invece di cercare aggiornamenti dell’applicazione.
- Separa visivamente il titolo e il messaggio delle notifiche.
- Il dettaglio dei movimenti personali mostra filamento, elettricità, ammortamento, manutenzione, grammi e tempo, se salvati.
- Aggiunge traduzioni centralizzate in tutte le otto lingue.

## v2.0.32
- Corregge il riferimento al foglio CSS del calcolatore per caricare gli stili dell’intestazione fissa e della modalità Personale.
- Ripristina la griglia originale del calcolatore e rimuove `display: contents`, che spostava i pannelli causando sovrapposizioni.
- Migliora la disposizione adattiva degli indicatori e del dettaglio dei costi.

## v2.0.31
- La modalità Personale mostra il dettaglio di filamento, elettricità, ammortamento e manutenzione, nascondendo le voci commerciali e gli extra.
- L’intestazione resta fissa in tutte le schede.
- Le quantità di filamento sono limitate a due decimali.
- Eliminando un movimento che aveva scalato filamento, il materiale viene restituito all’inventario e viene creata una notifica.
- Aggiunge un collegamento nell’intestazione per cercare aggiornamenti e aprire il download disponibile.

## v2.0.30
- Corregge la disposizione delle colonne della calcolatrice in modalità Personale; il pannello laterale mantiene `display: contents`.
- Aggiorna la versione visibile nell’intestazione a 2.0.30.

## v2.0.29
- Contabilità: evita movimenti di spesa personale duplicati dalla stessa valutazione contrassegnata nella calcolatrice.
- L’intestazione superiore rimane fissa durante lo scorrimento.

## v2.0.28
- In modalità Personale il pannello dei risultati rimane visibile e mostra il costo totale e unitario dopo il calcolo.
- Corretto il nascondimento accidentale della colonna dei risultati.

## v2.0.27
- In modalità Personale, il calcolo mostra il costo reale per unità senza applicare un prezzo di vendita pari a zero.
- Il confronto prezzi viene nascosto in modalità Personale.

## v2.0.26
- In modalità Personale vengono calcolati solo i costi dei blocchi 1, 2 e 3; manodopera, extra, imballaggio, profitto minimo, margine e imposte sono esclusi.
- L’intestazione superiore rimane fissa durante lo scorrimento.

﻿## v2.0.25
- Corretta l’apertura dei PDF generati in Electron autorizzando in modo sicuro la finestra locale `about:blank` che carica il PDF.
- Messaggio di errore alternativo aggiornato e tradotto in otto lingue.

## v2.0.24
- Arresto controllato del server locale avviato dall’app alla chiusura e prima degli aggiornamenti. Viene terminato solo il PID registrato e verificato; i server esterni restano attivi.

## v2.0.23
- La dashboard mostra la percentuale reale di stampa della stampante U1 selezionata. Non viene inventato alcun progresso per le altre stampanti.
- Usa lo stato memorizzato del bridge locale senza avviare una scansione aggiuntiva.
- Mantiene l’avvio stabile della versione 2.0.22.

## v2.0.22
- Corretto l’avvio automatico: Electron supervisiona Iniciar_Puente_Orca.ps1, che crea il server persistente tramite Start-Process.
- stdout/stderr del launcher vengono registrati separatamente; si evita di avviare direttamente il server come processo detached di Electron che terminava subito.
- Attesa del supervisore limitata a 25 secondi senza terminare il server indipendente.
- Rafforzati i tentativi di rimozione dei file del programma nell’installer; dati, SQLite, licenze e backup non vengono eliminati.

## v2.0.21 — Avvio diretto del server locale da Electron

- Se `/api/version` non risponde, Electron avvia direttamente `Servidor_Panel_U1.ps1` come processo indipendente e conserva i log stdout/stderr per la diagnosi.
- Se la porta risponde con una versione diversa, restano attivi il launcher di manutenzione e i relativi controlli di sicurezza.
- L’interfaccia si apre solo dopo la conferma della versione installata tramite `/api/version`. SQLite e i dati utente non vengono modificati.

## v2.0.17 — Schermata di caricamento all’avvio
- Mostra immediatamente una finestra di caricamento all’avvio di Print Cost & Profit, prima di verificare o avviare il server locale.
- Visualizza le fasi di preparazione, controllo del server locale e apertura dell’applicazione; la schermata si chiude quando la finestra principale è pronta.
- Se l’avvio non riesce, la schermata di caricamento si chiude e viene mantenuta la schermata di errore esistente.
- I testi sono centralizzati in `js/traducciones.js` e tradotti nelle otto lingue supportate.
- Non modifica SQLite, licenze, backup, percorsi dei dati o funzionamento del server locale.

## v2.0.16 — Rilevamento corretto della precedente installazione
- Corregge il rilevamento su Windows a 64 bit verificando esplicitamente `$PROGRAMFILES64` oltre a `$PROGRAMFILES`.
- La finestra precedente non appariva perché il controllo poteva puntare a `Program Files (x86)` invece di `C:\\Program Files`.
- Se trova l’eseguibile nel percorso noto, il programma chiede conferma, rimuove solo quella cartella del programma e pulisce le vecchie chiavi di registro.
- Non modifica AppData, SQLite, licenze, backup né il server locale.

## v2.0.15 — Correzione della compilazione dell’installer
- Corregge l’include NSIS per la rimozione preventiva: elimina `customHeader` e le variabili personalizzate non espanse che causavano l’avviso NSIS 6001.
- `customInit` usa direttamente il percorso legacy esatto `C:\\Program Files\\print-cost-profit-desktop`, verifica l’eseguibile, chiede conferma e interrompe l’installazione se la cartella non può essere rimossa.
- Elimina le vecchie chiavi di registro di installazione/disinstallazione per impedire a NSIS di richiamare il vecchio programma di disinstallazione difettoso.
- Non modifica il server locale né i percorsi dei dati utente/SQLite.

## v2.0.14 — Rimozione controllata della precedente installazione
- Aggiunge una routine NSIS `customInit` che rileva la precedente installazione registrata e, solo se corrisponde a `C:\\Program Files\\print-cost-profit-desktop` e contiene l’eseguibile previsto, chiede conferma e rimuove i file del programma prima della nuova installazione.
- Se la cartella non può essere rimossa, l’installazione viene annullata per evitare di mescolare le versioni.
- Non esegue il vecchio programma di disinstallazione che mostrava erroneamente l’avviso di applicazione aperta.
- Non elimina AppData/LocalAppData e non modifica SQLite, licenze, backup o server locale.

## v2.0.13 — Installazione elevata in Program Files
- Configura NSIS per l’installazione per tutti gli utenti (`perMachine`) con elevazione (`allowElevation`), così gli aggiornamenti in `C:\\Program Files` dispongono dei permessi necessari.
- Rimuove lo script NSIS personalizzato della v2.0.12: le macro di eliminazione diretta non risolvevano il blocco e potevano cancellare l’intera cartella di destinazione.
- Non modifica il server locale, il database SQLite né la posizione dei dati utente.

## v2.0.12 — Correzione dell’installer NSIS
- `builder-debug.yml` conferma che `customCheckAppRunning` non compare nello script NSIS generato; la correzione v2.0.11 quindi non veniva eseguita.
- Sostituito con gli hook riconosciuti `customUnInstallCheck` e `customRemoveFiles` per evitare la rimozione atomica difettosa della versione precedente.
- La rimozione riguarda solo `$INSTDIR`; i dati utente restano fuori da questa cartella.

## v2.0.11 — Correzione della chiusura durante l’aggiornamento
- Usa l’hook NSIS `customCheckAppRunning`; il precedente `customInit` non intercettava l’avviso dell’installer.
- L’installer termina solo Print Cost & Profit prima di sostituire i file.

## v2.0.9 — Correzione dell’avvio del bridge locale

- La disponibilità del bridge viene verificata tramite `/api/version`; un registro attività lento non causa più un falso negativo.
- Il timeout del controllo è stato aumentato per evitare l’avvio di un secondo server HTTP.sys.
- Se HTTP.sys mantiene registrato l’URL ma non è possibile verificare la versione, il launcher si arresta in sicurezza e registra una diagnosi; non termina processi sconosciuti.
- Database e posizione dei dati restano invariati.

## v2.0.8 — Correzione compilazione Windows
- Rimosso il BOM UTF-8 da `package.json` e dai file JSON affinché `@electron/rebuild` e `JSON.parse` possano leggerli correttamente.
- Mantenuto UTF-8 con BOM in `Servidor_Panel_U1.ps1`, necessario a Windows PowerShell 5.1 per i caratteri internazionali.
- Sintassi JSON verificata e versione aggiornata a v2.0.8.

## v2.0.7
- Aggiunte le modalità Vendite (predefinita) e Personale (solo spese), con avviso flottante.
- La modalità Personale esclude IVA, vendite, commissioni, manodopera, riserva guasti e calcolo del profitto.
- I movimenti contabili usano l'alias Snapmaker attivo e un'identità stabile per evitare stampanti U1 duplicate.
- Documentazione adattata alle finestre ampie con illustrazioni locali sostitutive se mancano le immagini opzionali.
- Nuovi testi centralizzati in js/traducciones.js per tutte le otto lingue.

### v2.0.6 — Ore di stampa effettive, conteggio degli avvisi non letti e documentazione locale
- La manutenzione somma le ore di stampa effettive comunicate da `print_stats` del monitor U1, durante i lavori e dopo il completamento o l'annullamento.
- Le stime e le valutazioni non vengono conteggiate come ore macchina effettive.
- Il badge rosso della Home conta solo gli avvisi non letti; gli avvisi recenti già letti restano visibili nell'elenco.
- Aggiunti manuali HTML locali in tutte le otto lingue e corretti i collegamenti Documentazione e Aiuto.
- Tutte le nuove stringhe sono centralizzate in `js/traducciones.js` per le otto lingue supportate.

### v2.0.5 — Correzione della codifica del server PowerShell
- Aggiunto BOM UTF-8 a `Servidor_Panel_U1.ps1` per Windows PowerShell 5.1.
- Corretto l’errore di analisi che impediva l’avvio del server locale.
- Aggiornati versione visibile e riferimenti cache a v2.0.5.

### v2.0.4 — Correzione avvio desktop e programma di installazione
- Il launcher del server locale usa Start-Process se WMI/CIM non è disponibile.
- stdout e stderr del server vengono salvati nella cartella locale dei log per la diagnosi.
- Il programma NSIS abilita esplicitamente la selezione della lingua, mantiene la licenza e consente di scegliere la cartella di installazione.
- Versione visibile aggiornata a v2.0.4.

### v2.0.3 — Correzioni di avvisi, contabilità e inventario
- Il riquadro Avvisi nella Home usa le stesse notifiche attive della campanella.
- Salvando una stima con la contabilità attiva viene registrato il movimento e sottratto il filamento G-code dalle bobine assegnate, con verifica delle scorte e prevenzione dei duplicati.
- Il monitor U1 riutilizza la finestra di creazione bobina della calcolatrice.
- Ordinamento delle attività di manutenzione per priorità, intervallo crescente/decrescente o nome.
- L’installer NSIS include licenza, selezione della lingua e della cartella di installazione.

### v2.0.3 — Notifiche di errore dei backup

- Avvisa anche quando il controllo di integrità SQLite rileva un problema; la notifica viene risolta quando il controllo torna regolare.
- Chiarisce che l’opzione contabilità include i movimenti di stampa con detrazione del filamento confermata.
- Aggiunge un’opzione indipendente per ricevere notifiche quando la creazione o il ripristino manuale di un backup non riesce.
- Gli avvisi vengono deduplicati per operazione e contrassegnati come risolti dopo una successiva operazione riuscita.
- Il rilevamento delle stampe U1 completate ora usa lo stato contabile confermato (`provisional=false`) invece del testo localizzato del movimento.
- Restano invariati preferenze e cronologia locali, soglie di stock e traduzioni centralizzate in tutte le otto lingue.

### v2.0.1 — Centro notifiche e preferenze

- La campanella apre un centro notifiche unico con contatore dei messaggi non letti, cronologia, marcatura singola o globale come letti ed eliminazione delle notifiche lette.
- Avvisi di manutenzione imminente e scaduta, attivati per impostazione predefinita.
- Avvisi sullo stock di filamento per bobina e colore: 200 g per impostazione predefinita, soglia configurabile in grammi, numero di bobine o entrambi.
- Avvisi contabili per stampe U1 completate o annullate solo quando il movimento conferma un effettivo scarico di filamento.
- Avvisi sulle nuove versioni e preferenze indipendenti per categoria. Preferenze e cronologia vengono salvate localmente.

### v2.0.0 — Applicazione desktop Windows

- Aggiunta una finestra desktop dedicata: Print Cost & Profit si apre senza schede né barra degli indirizzi del browser.
- Restano invariati l’interfaccia esistente, il server locale, il database SQLite, il percorso dei dati e l’integrazione Orca/U1.
- La versione del bridge locale viene verificata prima della connessione; non viene utilizzato un server di versione diversa.
- Aggiunti in `js/traducciones.js` i messaggi di avvio ed errore desktop in tutte e otto le lingue.
- Aggiunta la procedura per creare l’installer Windows. L’eseguibile deve ancora essere compilato e verificato su Windows.

### v5.58
- Riorganizzato il centro manutenzione: attività compatte a tutta larghezza, consigli richiudibili sotto e modulo a tutta larghezza. Layout adattivo.

### v5.57
- PDF RTL: corretta la specchiatura orizzontale degli elementi grafici asimmetrici (separatore dei totali e fascia verde) per allineare correttamente etichette e importi arabi. La dicitura delle imposte usa ora la chiave di traduzione centralizzata per tutte e otto le lingue.

### v5.56
- PDF di fatture e preventivi: sostituita la codifica limitata a Helvetica/WinAnsi con rendering Unicode ad alta risoluzione e font Noto inclusi per arabo e cinese. La generazione resta locale e indipendente dal browser predefinito e dai font installati.

### v5.55
- Corretto il pannello degli avvisi: gli avvisi di filamento e manutenzione non si sovrascrivono più e non scompaiono durante l’aggiornamento della dashboard.

### v5.53
- Server U1: corretto il parsing PowerShell delle query Moonraker contenenti `&`, assemblando i separatori in modo sicuro. Script salvato con BOM UTF-8 per Windows PowerShell 5.1 e corretta visualizzazione dei caratteri polacchi.

- Monitor U1: aumentato a 8 secondi il timeout della richiesta di stato e a 10 secondi l’attesa del browser, evitando di segnalare la stampante offline quando la lettura del G-code riesce ma lo stato risponde più lentamente.

### v5.51
- Manutenzione: rimossa l’etichetta PRO e scheda spostata subito sotto Contabilità.
- Rinnovati pannello, schede, indicatori, moduli e cronologia con layout adattabile.
- Ampliate le verifiche preventive per hotend, usura ugello, riscaldatore/termistore, estrusore, cinghie, ventole, piano, sensori e cablaggio.
- Corretta l’identificazione delle famiglie Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro e Bambu Lab.
- Le nuove attività vengono aggiunte anche alle stampanti già registrate senza eliminare ore, attività personalizzate o storico. Gli intervalli comuni sono indicativi e modificabili.
- Aggiornate le traduzioni centralizzate nelle otto lingue.

### v5.50
- Nuova scheda Manutenzione PRO con selezione stampante, registrazione ore, attività basate su ore/calendario, avvisi di scadenza, attività personalizzate e storico.
- Programmi iniziali documentati per Snapmaker U1/J1/Artisan, Creality K2 Pro, Prusa MK4S, Flashforge Adventurer 5M Pro, Anycubic Kobra 2 Pro/Kobra 3 ed ELEGOO Neptune 4 Pro. Bambu Lab e gli altri modelli usano una base generale modificabile. Gli altri modelli usano una base generica modificabile da verificare sul manuale.
- Traduzioni per interfaccia, finestre e attività in tutte e otto le lingue.

### v5.49
- Home: il monitor mostra ora il nome personalizzato salvato per ogni IP invece del nome di rete, quando è disponibile un alias.

### v5.48
- Calcolatrice: il blocco «01 · Dati del pezzo» occupa sempre l’intera altezza della riga, come i blocchi di filamento e costi.

### v5.47
- Calcolatrice: la colonna «Filamento per colore/materiale» è più ampia e «Costi aggiuntivi» più stretta sugli schermi grandi, mantenendo le altre colonne e il layout adattivo.

### v5.46
- Home: il pannello delle stampanti mantiene un’altezza fissa e mostra lo scorrimento verticale quando ci sono altri dispositivi. «Apri monitor» porta in Opzioni, direttamente alla connessione e a «Cerca automaticamente».

### v5.45
- Home: il pannello mostra le stampanti riconosciute e distingue gli stati connessa, offline e non verificato. «Apri monitor» ripristina e porta al monitor reale.

### v5.44
- Contabilità: la colonna «Importo/costo» è più stretta e il testo della tabella è leggermente più grande.

### v5.43
- Contabilità: ridotte le colonne « Incassato » e « Profitto » e riequilibrate tutte le nove colonne dello storico. Migliorati contrasto, allineamento e dettagli.

### v5.42
- Contabilità: le intestazioni della tabella diventano « Incassato » e « Profitto», mantenendo tutte e nove le colonne.

### v5.41
- Contabilità: caratteri più grandi per cronologia, filtri e pulsanti. I dettagli del riferimento restano aperti anche quando la tabella si aggiorna.

### v5.40
- Restyling visivo della Contabilità in linea con la dashboard Home: schede, indicatori, filtri, modulo e cronologia con una gerarchia visiva più chiara. Le funzioni esistenti e la paginazione sono mantenute.
### v5.39 — Restyling visivo della contabilità
- Allinea la contabilità allo stile della dashboard Home: sfondi profondi, accenti luminosi e schede coerenti.
- Migliora la gerarchia visiva degli indicatori e dei pannelli di analisi.
- Rifinisce il modulo dei movimenti e lo storico senza modificare i controlli o la logica contabile.
- Migliora l'adattamento alle diverse larghezze dello schermo.

### v5.38 — Restyling della contabilità
- Nuova gerarchia visiva per redditività, indicatori e grafici.
- Modulo dei movimenti più compatto e meglio organizzato.
- Storico contabile con colonne equilibrate, importi evidenziati, riferimenti espandibili e ricerca più chiara.
- La logica di calcolo, archiviazione, modifica, eliminazione ed esportazione resta invariata. Nessun nuovo campo o dialogo.

### v5.37 — Correzione della paginazione delle bobine
- Le schede fuori dalla pagina corrente vengono nascoste anche se gli stili del tema tentano di mostrarle.
- Il magazzino mostra esattamente 8 bobine per pagina (4 colonne × 2 righe su desktop).
- Ricerca, filtri e modifica dell’inventario restano disponibili.

### v5.36 — Paginazione del magazzino filamenti
- Corretta la paginazione delle schede: ora vengono mostrate esattamente 8 bobine per pagina invece dell’intero inventario.
- Ripristinati i pulsanti Precedente/Successiva e l’indicatore di pagina, mantenendo la griglia a quattro colonne e la ricerca.
- Dati, modifica dei grammi e altre operazioni del magazzino restano invariati.

### v5.35 — Precisione dei grammi nell’inventario
- I grammi rimanenti per bobina vengono mostrati con un massimo di due decimali e il campo modificabile usa incrementi di 0,01 g. Il valore salvato non cambia finché l’utente non modifica il campo.

### v5.23 — Restyling professionale di vendite, scorte e contabilità
- Preventivi, Ordini e Fatture rinnovati con intestazioni visive, moduli ordinati, campi scuri e tabelle più leggibili, mantenendo le azioni e i flussi esistenti.
- Migliorata la presentazione delle scorte di filamento con modulo più chiaro, schede bobina, indicatori del materiale residuo e controlli di modifica.
- Aspetto della Contabilità armonizzato con la dashboard Home, comprese le schede di redditività e i pannelli dei movimenti.
- Layout adattato agli schermi stretti. Dati, struttura SQLite e logica applicativa non sono stati modificati. Nessun nuovo testo dell’interfaccia è stato aggiunto.

### v5.22 — Restyling professionale della sezione Clienti
- La scheda Clienti è stata ridisegnata con un’intestazione visiva, un modulo più ordinato, campi scuri coerenti con la Home e controlli con una gerarchia più chiara.
- Il campo Osservazioni non appare più come una casella bianca nativa: ora segue il tema scuro e lo stile degli altri campi.
- L’agenda clienti usa schede compatte e più leggibili, senza altezze vuote inutili. Ricerca, modifica, salvataggio ed eliminazione restano invariati, così come il riutilizzo dei clienti in preventivi, ordini e fatture.
- Nessuna modifica ai dati o allo schema SQLite. Nessun nuovo testo dell’interfaccia.

### v5.21 — Allineamento uniforme della pagina Opzioni
- Tutte le sezioni di Opzioni ora utilizzano la stessa larghezza completa, con allineamento e spaziature uniformi; eliminati i grandi spazi vuoti accanto a Valuta e Aspetto.
- I moduli mantengono due colonne per sfruttare lo spazio; i campi larghi e le sezioni complete occupano tutta la larghezza. Sugli schermi piccoli si passa a una colonna.
- Controlli, dati salvati e traduzioni restano invariati; il database SQLite non viene modificato.

### v5.20 — Restyling professionale di Opzioni e correzione delle sezioni comprimibili
- La scheda Opzioni è stata ridisegnata con schede compatte a due colonne, gerarchia più chiara e stile coerente con Home; stampante, backup, profili e registro attività mantengono tutta la larghezza quando necessario.
- Corretti i pulsanti «Mostra campi» e «Nascondi campi»: ora comprimono ed espandono realmente il contenuto e aggiornano correttamente lo stato accessibile.
- Sono mantenuti campi, controlli, preferenze di ordinamento e compressione, traduzioni e dati salvati. Il database SQLite non viene modificato.

### v5.19 — Correzione dell’isolamento delle schede
- Corretta la regola CSS di Opzioni che annullava la visualizzazione nascosta delle schede inattive.
- Opzioni appare solo quando è selezionata; Home, Calcolatrice, Valutazioni e tutte le altre sezioni restano correttamente isolate.
- Sono mantenuti il layout, i controlli e i dati esistenti.

### v5.18 — Correzione del layout delle opzioni
- Rimossa la griglia annidata che lasciava ampi spazi vuoti tra le sezioni. Le opzioni ora seguono un layout continuo a tutta larghezza.
- Valuta e imposte e profili stampante utilizzano lo spazio disponibile, con campi e schede allineati.
- Restano invariati controlli, dati, possibilità di comprimere e riordinare le sezioni.

### v5.17 — Riprogettazione delle opzioni
- Riorganizza le opzioni in una griglia compatta di schede, con gerarchia visiva più chiara e stile coerente con la schermata iniziale.
- Rimuove il contenitore duplicato dei dati del venditore.
- Mantiene tutte le sezioni, i controlli e le funzioni di espansione e riordino. Il registro attività continua a mostrare le 50 voci più recenti senza eliminare lo storico.

## v5.16
- Opzioni ridisegnate con schede e controlli coerenti con la dashboard Home. Il registro attività mostra i 50 eventi più recenti; lo storico completo resta salvato localmente.
- Rimosso anche il piccolo testo duplicato sotto il titolo Calcolatrice; titolo e icona restano.
- Le bandiere del selettore della lingua ora usano immagini SVG integrate e non dipendono più dai caratteri emoji di Windows.
- Rimosso il piccolo testo duplicato sotto il titolo della scheda Stime. La descrizione specifica della scheda rimane.
- Corretto il selettore della lingua: ora mostra una bandiera visibile accanto alla lingua selezionata e si aggiorna quando la lingua cambia.
- Restyling visivo della scheda Valutazioni con intestazione evidenziata, filtri raggruppati e righe dello storico coordinate con la dashboard.
- Il selettore della lingua ora mostra la bandiera corrispondente accanto a ogni lingua.
- Sostituisce la scorciatoia «Valutazioni» con «Ordini». La sezione «Ultime valutazioni» della Home e la scheda Valutazioni restano invariate.
- Ridotto ulteriormente il bagliore esterno delle icone dei blocchi della calcolatrice, mantenendo colori, dimensioni e tratti.
- Aggiunta «Valutazioni» agli accessi rapidi della Home, con icona neon e accesso diretto allo storico completo.

## v5.6
- Ripristinata l’icona vettoriale della calcolatrice nell’intestazione della scheda. Ridotto il bagliore delle icone dei blocchi per migliorare il comfort visivo, mantenendo dimensioni, tratti e colori.

## v5.5
- Ripristina nella Home il riquadro «Ultime stime» con le quattro stime salvate più recenti e un collegamento alla cronologia completa nella scheda Stime.

## v5.4
- Ridotta la luminosità delle icone dei blocchi della calcolatrice per migliorare il comfort visivo, mantenendo dimensioni e stile neon.

## v5.3
- Aggiunge la scheda dedicata «Stime» sotto «Calcolatrice», con un’icona vettoriale neon coerente con lo stile dell’app.
- Sposta lo storico completo delle stime nella nuova scheda e rimuove dalla Home il riquadro delle stime recenti e il relativo collegamento.
- Mantiene archiviazione, record salvati e funzioni di ricerca, ordinamento, confronto, caricamento ed eliminazione.
- Aggiunge le nuove etichette a `js/traducciones.js` in tutte e otto le lingue.
- Riduce leggermente la luminosità delle icone neon della calcolatrice, mantenendo l’effetto luminoso e migliorando la leggibilità.

## v5.1
- Corregge la sovrapposizione delle icone rimuovendo la maschera ereditata che disegnava un secondo simbolo sotto l’icona neon.
- Aumenta leggermente le dimensioni della cornice e dell’icona, mantenendo lo stile ciano, blu e viola.
- Non modifica calcoli, campi, disposizione o comportamento della calcolatrice.

## v5.0
- Sostituisce i simboli testuali della calcolatrice con icone vettoriali lineari, riquadri e bagliore neon ciano, blu e viola, in linea con la schermata iniziale.
- Uniforma le icone dell’intestazione e dei pannelli pezzo, filamento, costi, imposte, risultati e confronto prezzi senza modificare controlli o calcoli.

## v4.9
- Sposta le impostazioni di stampa (tempo, quantità, riserva errori, profilo e note) nel pannello del dettaglio fiscale; la scheda del pezzo mantiene nome, G-code e immagine.

## v4.8
- Evita che la scheda «Dati del pezzo» si allunghi eccessivamente quando si importa un G-code con molti colori: il report di rilevamento e inventario scorre in un'area dedicata.
- Aggiunge icone neon più grandi alle sezioni della calcolatrice, con bagliori ciano, viola e verdi coordinati con la schermata iniziale.
- Mantiene invariati calcoli, ID dei campi, assegnazione delle bobine e importazione G-code.

## v4.7
- Adegua la calcolatrice alla grafica approvata: proporzioni delle schede, gerarchia dei risultati e comparatore accanto alle azioni.
- Riorganizza il risultato stimato, mette in risalto il prezzo totale ed elimina lo spazio vuoto che spostava gli indicatori.
- Corregge l’allineamento del titolo e migliora la disposizione dei campi su schermi grandi e piccoli.
- Non modifica calcoli, ID dei campi o flusso di importazione G-code.

## v4.5
## v4.6
- Restyling del calcolatore: schede organizzate su due righe, confronto e azioni affiancati, barra degli strumenti non sovrapposta.
- Separazione visiva dei costi di stampa dai costi aggiuntivi, mantenendo ID e calcoli esistenti.

- Ridisegna la scheda Calcolatrice con schede, gerarchia visiva più chiara e icone più evidenti, in linea con lo stile neon professionale della schermata iniziale.
- Riorganizza i pannelli di pezzo, filamento, costi, imposte e risultati in una griglia adattiva.
- Rinnova l’area delle azioni e il comparatore dei prezzi.
- Mantiene campi, ID, calcoli, importazione G-code, salvataggio e controlli esistenti.

## v4.4
- Rende il messaggio di conferma esplicito sul salvataggio nel database SQLite del computer.
- Aggiunge il controllo della cache affinché il browser carichi gli script aggiornati di traduzione e calcolatrice.

## v4.3
- Corregge la navigazione dopo l’invio di un G-code dal monitor U1: ora si apre la scheda Calcolatrice invece della schermata iniziale.
- I dati importati restano caricati e il campo del pezzo viene portato in vista nella calcolatrice.

## v4.2
- Corregge il messaggio dopo il salvataggio di una stima: ora conferma il salvataggio nel database SQLite di questo PC.
- Chiarisce anche la conferma mostrata quando si elimina la cronologia.
- Il salvataggio continua a utilizzare l’adattatore SQLite integrato compatibile con localStorage; il formato dei dati non cambia.

## v4.1
- Sposta l’intera calcolatrice in una scheda indipendente «Calcolatrice».
- Comparatore dei prezzi, simulatore di guasti, risultati e campi di calcolo si trovano ora in questa scheda.
- La schermata iniziale mantiene il pannello e gli indicatori; «Nuovo calcolo» e «Carica G-code» aprono prima la calcolatrice.
- Gli ID e la logica dei campi esistenti sono mantenuti per conservare calcoli e funzionalità.

## v4.0
- Corregge la documentazione in Opzioni: tutti gli otto file README vengono convertiti in pagine HTML indipendenti e localizzate.
- Ogni lingua apre ora il proprio manuale HTML dall’app; viene rimosso il percorso errato verso file inesistenti.
- Il manuale arabo usa la direzione RTL e tutti i manuali adottano il tema scuro dell’applicazione.

## v3.9
- Sostituisce i simboli decorativi della barra superiore con pulsanti funzionali in stile neon per avvisi, documentazione e opzioni.
- La campanella porta al pannello degli avvisi e mostra il conteggio effettivo.
- Il punto interrogativo apre il manuale nella lingua selezionata; i percorsi utilizzano i file README localizzati inclusi.
- L’ingranaggio apre direttamente la scheda Opzioni.

## v3.8
- Collega il monitor stampanti della schermata iniziale all’endpoint reale `/api/u1/status` del bridge locale, invece di leggere il testo da un pannello eventualmente nascosto.
- Mostra connessione, stato, file attivo e avanzamento; segnala la disconnessione se il bridge o la stampante non rispondono.
- Il pulsante «Apri monitor» aggiorna lo stato prima di aprire il monitor completo.
- Nessun nuovo testo; vengono riutilizzate le stringhe esistenti di traducciones.js.

## v3.7
- Corregge gli indicatori della schermata iniziale affinché utilizzino le stesse regole e normalizzazione della contabilità.
- Esclude le stime non contabilizzate ed evita entrate duplicate associate ai vecchi ordini.
- Ricavi, costi, profitto, margine e importi incassati seguono ora gli stessi criteri della redditività avanzata.
- Non sono stati aggiunti nuovi testi all’interfaccia.

## v3.6
- Ingrandisce leggermente le icone delle azioni principali, degli indicatori KPI, della navigazione laterale e delle scorciatoie per renderle più visibili.
- Le icone sono separate dalle etichette per modificarne la dimensione senza cambiare tipografia o traduzioni.
- Non sono stati aggiunti nuovi testi all’interfaccia.

## v3.5
- Allinea l’intestazione della schermata iniziale al riferimento fornito: «IL TUO LABORATORIO 3D», titolo e descrizione a sinistra, stampante a destra e cinque azioni nella parte inferiore.
- Corregge proporzioni e spaziature per evitare che la stampante copra testo o pulsanti.
- Mantiene le cinque schede KPI, i grafici, la redditività, la cronologia, le scorciatoie e la colonna laterale con dati e funzioni esistenti.
- Non sono stati aggiunti nuovi testi all’interfaccia; le traduzioni restano centralizzate in js/traducciones.js per tutte e otto le lingue.

## v3.4
- Rimuove il marchio «Snapmaker U1» dal centro dell’intestazione e lo sostituisce con una fascia dedicata alle funzioni del programma: calcolo, produzione e redditività.
- Ridisegna i pulsanti di azione e le schede KPI per avvicinarli al modello approvato per dimensioni, gerarchia, icone e colori neon.
- Sostituisce le barre di distribuzione dei costi con un grafico ad anello e una legenda con importi e percentuali calcolati dai dati registrati.
- Mantiene le azioni e i dati esistenti; il nuovo testo dell’intestazione è centralizzato in traducciones.js per tutte le otto lingue.

- La griglia iniziale viene ricostruita in due aree indipendenti: contenuto principale e colonna laterale, evitando gli ampi spazi causati dall’altezza del riquadro delle bobine.
- Le schede seguono il modello approvato: cinque indicatori, grafici e redditività su una riga, cronologia e accessi rapidi sotto, monitor/scorte/avvisi impilati a destra.
- La foto reale della Snapmaker U1 viene scontornata e integrata senza riquadro bianco, con aloni neon che non nascondono la stampante.
- Aggiunto il marchio Snapmaker U1 nell’intestazione. Funzioni e dati esistenti sono mantenuti; nessuna nuova stringa da tradurre.

## v3.1
- Sostituisce l’illustrazione generica con la fotografia reale della Snapmaker U1 fornita per il progetto.
- Rimuove lo sfondo bianco della foto e la integra con effetti neon ciano e viola nell’intestazione e nella barra laterale.
- Mantiene pannelli, grafici, dati e collegamenti rapidi funzionanti; non aggiunge nuovi testi o chiavi di traduzione.

## v3.0
- Home ridisegnata secondo il modello approvato: stampante 3D protagonista, barra laterale illustrata, indicatori uniformi e layout a tre aree.
- Aggiunto un indicatore di redditività complessiva collegato a ricavi e costi locali.
- Nuovi testi centralizzati in `js/traducciones.js` e tradotti in tutte le otto lingue.
- Calcolatrice, registri, integrazione Orca e monitor U1 mantenuti.

## v2.9
- Aggiunge illustrazioni vettoriali di stampanti 3D nella barra laterale e nell’intestazione della dashboard.
- Uniforma le schede KPI e riorganizza i pannelli con una griglia a 12 colonne e altezze coerenti.
- Migliora la visualizzazione sugli schermi piccoli senza coprire i comandi.

## v2.8
- Home ridisegnata con indicatori, grafici, lavori recenti, scorte di filamento, collegamenti rapidi e avvisi.
- Lettura dei dati locali mantenendo le funzioni esistenti.
- Nuovi testi centralizzati e tradotti in otto lingue.

### v2.7 — Semplificazione della contabilità e restyling dello storico
- Rimosso il riepilogo duplicato delle spese personali e degli ordini, già coperto dalla redditività avanzata.
- Rimosso il riepilogo duplicato per stampante.
- Restano il modulo per aggiungere movimenti e lo storico completo.
- Tabella ridisegnata con colonne equilibrate, importi allineati, tipi riconoscibili e riferimenti lunghi espandibili.
- Nessun nuovo testo: «Visualizza dettagli» riutilizza la traduzione esistente in tutte le otto lingue.

### v2.6 — Correzione delle intestazioni e dei testi visibili della redditività avanzata
- Corregge le traduzioni delle intestazioni con icone decorative, che impedivano la corrispondenza esatta nel dizionario.

### v2.5 — Verifica e correzione delle traduzioni della redditività avanzata
- Completa le stringhe mancanti nel pannello di redditività avanzata, inclusi stato del margine, sottotitoli, legende e testi esplicativi.
- Centralizza le nuove traduzioni in `js/traducciones.js` per tutte le otto lingue supportate.
- Evita l’aggiunta di chiavi duplicate al dizionario.

### v2.4 — Correzione degli importi incassati negli ordini U1
- Gli ordini confermati dal monitor U1 salvano anche l’importo inserito dall’utente come pagamento registrato, separato dai ricavi stimati.
- Gli importi incassati vengono recuperati dagli ordini U1 salvati nelle versioni precedenti, senza registrare nuovamente gli ordini né modificare i movimenti esistenti.
- Evita di conteggiare due volte i pagamenti collegati allo stesso ordine.

### v2.3 — Schede riepilogative su un’unica riga
- Dispone le quattro schede per stampante più redditizia, costo principale, margine migliore e periodo analizzato su un’unica riga negli schermi ampi.
- Mantiene le conclusioni del periodo in una scheda evidenziata separata e adatta la griglia a tablet e telefoni.

### v2.2 — Dashboard visuale della redditività avanzata
- Trasforma la redditività avanzata in una dashboard con indicatori, andamento di sei mesi, distribuzione dei costi, indicatore del margine e confronto tra stampanti.
- I grafici dinamici utilizzano i movimenti salvati; i filtri per periodo e stampante aggiornano indicatori e confronti senza duplicare i dati.
- Aggiunge le conclusioni del periodo e migliora il layout adattivo e RTL.
- Tutti i nuovi testi sono centralizzati in `js/traducciones.js` e tradotti nelle otto lingue.

### v2.1 — Dashboard di redditività avanzata
- Aggiunge analisi filtrabili per periodo e stampante di ricavi stimati, costi, profitti, margine e incassi registrati.
- Aggiunge il confronto tra stampanti e la ripartizione dei costi usando i dati esistenti, senza duplicare movimenti.
- Chiarisce la differenza tra stime e incassi confermati.

## Cronologia delle versioni

### v2.0 — Traduzione completa del registro attività
- Moduli, messaggi e livelli del registro seguono ora la lingua selezionata, non solo titoli e pulsanti.
- I dettagli JSON mostrano etichette tradotte mantenendo i valori tecnici utili alla diagnosi.
- Corregge la versione obsoleta visualizzata nel piè di pagina e nei dettagli del registro.
- Centralizza i nuovi testi in `js/traducciones.js` per tutte le otto lingue supportate.


### v1.9 — Rilevamento e riavvio del bridge obsoleto
- Il programma di avvio verifica ora `/api/logs` oltre a `/api/version`.
- Se la porta 8700 è occupata da una vecchia istanza del server Print Cost & Profit, riavvia esclusivamente quel processo del progetto per caricare i nuovi endpoint.
- Se la porta appartiene a un’altra applicazione, non la termina e mostra un errore chiaro.
- L’avvio manuale e il post-processing di Orca utilizzano la stessa verifica.


### v1.8 — Correzione della creazione del registro attività
- Corregge l’inizializzazione e la scrittura UTF-8 del file, che ora viene creato all’avvio del server locale.
- Supporta sia `localhost` sia `127.0.0.1`.
- Il visualizzatore mostra il percorso effettivo del file di registro.


### v1.7 — Registro centralizzato di attività ed errori
- Aggiunta la registrazione locale persistente degli errori JavaScript, delle Promise non gestite, dei problemi SQLite e delle attività dei principali controlli dell’interfaccia.
- In Opzioni è disponibile un visualizzatore con filtri per livello e ricerca, esportazione JSON e cancellazione manuale.
- I registri vengono salvati fuori dalla cartella di installazione nei dati locali dell’utente, con rotazione automatica e fino a 500 voci visibili.
- Il sistema evita di acquisire i valori dei moduli e i dati sensibili. I file di log generati non vengono mai inclusi negli ZIP di distribuzione.
- Tutti i nuovi testi sono centralizzati in `js/traducciones.js` e tradotti nelle otto lingue.


### v1.3 — Traduzioni del sistema di licenze e supporto linguistico
- Le traduzioni mancanti vengono aggiunte a `js/traducciones.js` per i flussi di accesso, autenticazione e consultazione delle licenze in spagnolo, inglese, francese, tedesco, italiano e polacco.
- Le etichette fisse della finestra globale («Avviso» e «Accetta») utilizzano il sistema centrale di traduzione, senza un dizionario separato.
- I testi dell’applicazione sono integrati e mantenuti nelle otto lingue disponibili: spagnolo, inglese, francese, tedesco, italiano, polacco, arabo e cinese semplificato.
- I nuovi testi e dialoghi sono centralizzati in `js/traducciones.js` per evitare stringhe isolate nei file dell’applicazione.
- Vengono aggiunte due nuove lingue, arabo e cinese semplificato, portando l’applicazione a otto lingue: spagnolo, inglese, francese, tedesco, italiano, polacco, arabo e cinese semplificato.
- Vengono risolti i problemi con le miniature dei file G-code: estrazione della miniatura disponibile con la risoluzione più alta e conservazione dell’immagine quando il lavoro viene inviato dal monitor al calcolatore.
- Vengono corretti bug minori relativi al funzionamento, all’inizializzazione, alle traduzioni e agli alias dei colori.

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

## v5.24
- Restyling premium dell’area clienti, coordinato con la dashboard Home.
- Miglioramenti visivi a intestazione, modulo, ricerca, pulsanti e schede cliente.
- Identificativi, dati e flussi esistenti sono stati mantenuti.

## v5.25
- Restyling visivo premium dei preventivi, coordinato con la dashboard Home.
- Migliorati intestazione, dati cliente, editor delle voci, condizioni, ricerca e tabella dei preventivi salvati.
- Gli identificativi e la logica funzionale esistenti sono stati mantenuti.

## v5.26
- Rifinitura dell’elenco dei preventivi salvati: gerarchia delle righe più chiara, totali evidenziati e azioni distribuite su più righe.
- Migliorati contrasto, stati hover, numerazione e visualizzazione su schermi piccoli.

## v5.27
- Riprogettazione della sezione Clienti con intestazione più evidente, ricerca in primo piano, modulo meglio organizzato e schede cliente più curate, in linea con la Home.
- Campi e azioni esistenti restano invariati; le modifiche sono solo visive.

## v5.28
- Restyling premium degli Ordini: intestazione, modulo, ricerca e tabella con gerarchia visiva più chiara e accenti turchesi/viola in linea con la Home.
- Campi, identificatori, stati e azioni esistenti sono mantenuti.

## v5.29
- Restyling premium delle Fatture: pannello di creazione più chiaro, impostazioni di numerazione e imposte, selezione cliente e archivio fatture in linea con la Home.
- Sono mantenuti identificatori, numerazione, dati, stampa e azioni esistenti. Nessun nuovo campo o dialogo.

## v5.30
- Correzione globale del contrasto dei menu a discesa per rendere leggibili le opzioni su Windows ed Edge.

## v5.31
- Restyling premium dell'inventario filamenti: modulo, filtri, ricerca e schede bobine con una gerarchia visiva più chiara.

## v5.32
- Secondo miglioramento visivo del magazzino filamenti: schede più ampie su tre colonne, modulo a quattro colonne e migliore leggibilità.

## v5.34
- Scorte filamenti: 8 schede per pagina, in 4 colonne e 2 righe su desktop.
- Separa la pulizia ordinaria dalla manutenzione programmata: ora viene mostrata come consiglio informativo e non genera avvisi. Rimuove le vecchie voci di pulizia dalle attività e dallo storico. Corregge lo stato vuoto delle notifiche.

## 2.0.118
- Mesh del piano interattiva: rotazione con mouse o tocco, zoom con rotellina, ripristino della vista e schermo intero.

## v2.0.136
- Protegge l’inizializzazione del calcolatore quando i selettori marca/modello non sono presenti in una vista.

## v2.0.138
- Inizializza i selettori di marca e modello dopo il caricamento dell’HTML, evitando addEventListener su null. Riduce le scritture SQLite ridondanti del monitor U1 ed evita di salvare nuovamente un IP manuale invariato.

## 2.0.143
- I backup automatici non bloccano più le scritture SQLite interattive e vengono eseguiti con una richiesta asincrona separata.
- Elenchi stampanti e alias usano la coda centrale di archiviazione.
- Nuovi tentativi dilazionati in caso di conflitto 409.

- v2.0.147: corretta l’assegnazione manuale delle bobine U1; la scelta viene salvata subito e identificata tramite ID stabile per evitare che aggiornamenti o riordini la annullino.
