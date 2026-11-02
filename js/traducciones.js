/* v1.4 — Corrección de referencias históricas v1.0 en README y CHANGELOG de los ocho idiomas. */

(()=>{
const D={
  "Desgaste de impresora": [
    "Printer wear",
    "Usure de l’imprimante",
    "Druckerverschleiß",
    "Usura della stampante",
    "Zużycie drukarki",
    "استهلاك الطابعة",
    "打印机损耗"
  ],
  "Coste a registrar": [
    "Cost to record",
    "Coût à enregistrer",
    "Zu erfassende Kosten",
    "Costo da registrare",
    "Koszt do zapisania",
    "التكلفة المراد تسجيلها",
    "要记录的成本"
  ],
  "Confirmar pedido": [
    "Confirm order",
    "Confirmer la commande",
    "Auftrag bestätigen",
    "Conferma ordine",
    "Potwierdź zamówienie",
    "تأكيد الطلب",
    "确认订单"
  ],
  "Confirmar gasto personal": [
    "Confirm personal expense",
    "Confirmer la dépense personnelle",
    "Private Ausgabe bestätigen",
    "Conferma spesa personale",
    "Potwierdź wydatek własny",
    "تأكيد المصروف الشخصي",
    "确认个人支出"
  ],
  "Revisa el precio cobrado y el desglose antes de registrar el pedido.": [
    "Review the amount charged and the breakdown before recording the order.",
    "Vérifiez le montant facturé et le détail avant d’enregistrer la commande.",
    "Prüfen Sie den berechneten Betrag und die Aufschlüsselung, bevor Sie den Auftrag erfassen.",
    "Controlla l’importo addebitato e il dettaglio prima di registrare l’ordine.",
    "Sprawdź pobraną kwotę i zestawienie przed zapisaniem zamówienia.",
    "راجع المبلغ المحصّل والتفصيل قبل تسجيل الطلب.",
    "记录订单前，请检查收取的金额和费用明细。"
  ],
  "Revisa el coste de fabricación antes de registrarlo en Contabilidad.": [
    "Review the manufacturing cost before recording it in Accounting.",
    "Vérifiez le coût de fabrication avant de l’enregistrer dans la comptabilité.",
    "Prüfen Sie die Herstellungskosten, bevor Sie sie in der Buchhaltung erfassen.",
    "Controlla il costo di produzione prima di registrarlo in Contabilità.",
    "Sprawdź koszt produkcji przed zapisaniem go w księgowości.",
    "راجع تكلفة التصنيع قبل تسجيلها في المحاسبة.",
    "请先检查制造成本，再将其记入会计。"
  ],
  "Registrar impresión como pedido": [
    "Record print as an order",
    "Enregistrer l’impression comme commande",
    "Druck als Auftrag erfassen",
    "Registra stampa come ordine",
    "Zarejestruj wydruk jako zamówienie",
    "تسجيل الطباعة كطلب",
    "将打印记录为订单"
  ],
  "Registrar impresión como gasto personal": [
    "Record print as a personal expense",
    "Enregistrer l’impression comme dépense personnelle",
    "Druck als private Ausgabe erfassen",
    "Registra stampa come spesa personale",
    "Zarejestruj wydruk jako wydatek własny",
    "تسجيل الطباعة كمصروف شخصي",
    "将打印记录为个人支出"
  ],
  "Modelo estadístico orientativo: supone que cada intento es independiente y que un fallo obliga a repetir toda la pieza.": ["Indicative statistical model: each attempt is assumed independent, and a failure requires the entire part to be printed again.", "Modèle statistique indicatif : chaque tentative est supposée indépendante et un échec impose de réimprimer toute la pièce.", "Orientierendes statistisches Modell: Jeder Versuch gilt als unabhängig; bei einem Fehlschlag muss das gesamte Teil erneut gedruckt werden.", "Modello statistico indicativo: ogni tentativo è considerato indipendente e un errore comporta la ristampa dell'intero pezzo.", "Orientacyjny model statystyczny: każda próba jest niezależna, a niepowodzenie wymaga ponownego wydrukowania całego elementu.",
    "</strong><br><span class=\"section-note\">نموذج إحصائي إرشادي: يفترض أن كل محاولة مستقلة وأن الفشل يستلزم إعادة القطعة بالكامل.</span>",
    "</strong><br><span class=\"section-note\">参考统计模型：假设每次尝试相互独立，且一次失败就必须重新打印整个零件。</span>"
  ],
  "— Seleccionar bobina en stock (opcional) —": ["— Select an in-stock spool (optional) —", "— Sélectionner une bobine en stock (facultatif) —", "— Spule auf Lager auswählen (optional) —", "— Seleziona una bobina disponibile (opzionale) —", "— Wybierz szpulę dostępną w magazynie (opcjonalnie) —",
    "— اختر بكرة من المخزون (اختياري) —",
    "— 选择库存中的线轴（可选）—"
  ],
  "No se pudo cargar el archivo.": ["Could not load the file.", "Impossible de charger le fichier.", "Die Datei konnte nicht geladen werden.", "Impossibile caricare il file.", "Nie udało się wczytać pliku.",
    "تعذر تحميل الملف.",
    "无法加载文件。"
  ],
  "No se encontró el formulario de filamentos.": ["The filament form could not be found.", "Le formulaire des filaments est introuvable.", "Das Filamentformular wurde nicht gefunden.", "Impossibile trovare il modulo dei filamenti.", "Nie znaleziono formularza filamentu.",
    "لم يتم العثور على نموذج الخيوط.",
    "未找到耗材表单。"
  ],
  "Entrega:": ["Delivery:", "Livraison :", "Lieferung:", "Consegna:", "Dostawa:",
    "التسليم:",
    "交付："
  ],
  "Validez:": ["Validity:", "Validité :", "Gültigkeit:", "Validità:", "Ważność:",
    "الصلاحية:",
    "有效期："
  ],
  "Total:": ["Total:", "Total :", "Gesamt:", "Totale:", "Razem:",
    "الإجمالي:",
    "总计："
  ],
  "Concepto:": ["Description:", "Objet :", "Betreff:", "Descrizione:", "Opis:",
    "الوصف:",
    "项目："
  ],
  "Fecha:": ["Date:", "Date :", "Datum:", "Data:", "Data:",
    "التاريخ:",
    "日期："
  ],
  "el presupuesto": ["the quote", "le devis", "das Angebot", "il preventivo", "wycenę",
    "عرض السعر",
    "报价单"
  ],
  "la factura": ["the invoice", "la facture", "die Rechnung", "la fattura", "fakturę",
    "الفاتورة",
    "发票"
  ],
  "Te envío {document} {number} correspondiente a tu pedido.": ["I'm sending you {document} {number} for your order.", "Je vous envoie {document} {number} correspondant à votre commande.", "Ich sende Ihnen {document} {number} zu Ihrer Bestellung.", "Ti invio {document} {number} relativo al tuo ordine.", "Przesyłam {document} {number} dotyczący Twojego zamówienia.",
    "أرسل إليك {document} رقم {number} الخاص بطلبك.",
    "随信发送与你的订单对应的{document} {number}。"
  ],
  "¡Hola {name}! 😊": ["Hello {name}! 😊", "Bonjour {name} ! 😊", "Hallo {name}! 😊", "Ciao {name}! 😊", "Cześć {name}! 😊",
    "مرحبًا {name}! 😊",
    "你好，{name}！😊"
  ],
  "Impresión 3D": ["3D printing", "Impression 3D", "3D-Druck", "Stampa 3D", "Druk 3D",
    "الطباعة ثلاثية الأبعاد",
    "3D 打印"
  ],
  "Respuesta no válida del servidor (HTTP {status}).": ["Invalid server response (HTTP {status}).", "Réponse non valide du serveur (HTTP {status}).", "Ungültige Serverantwort (HTTP {status}).", "Risposta non valida del server (HTTP {status}).", "Nieprawidłowa odpowiedź serwera (HTTP {status}).",
    "استجابة غير صالحة من الخادم (HTTP {status}).",
    "服务器返回了无效响应（HTTP {status}）。"
  ],
  "El puente respondió HTTP {status}": ["The bridge returned HTTP {status}", "Le pont a répondu HTTP {status}", "Die Bridge antwortete mit HTTP {status}", "Il bridge ha risposto HTTP {status}", "Most zwrócił HTTP {status}",
    "استجاب الجسر برمز HTTP {status}",
    "桥接服务返回 HTTP {status}"
  ],
  "Eliminar color personalizado {hex}": ["Delete custom color {hex}", "Supprimer la couleur personnalisée {hex}", "Benutzerdefinierte Farbe {hex} löschen", "Elimina colore personalizzato {hex}", "Usuń kolor niestandardowy {hex}",
    "حذف اللون المخصص {hex}",
    "删除自定义颜色 {hex}"
  ],
  "Base guardada: {note}": ["Saved baseline: {note}", "Base enregistrée : {note}", "Gespeicherte Basis: {note}", "Base salvata: {note}", "Zapisana wartość bazowa: {note}",
    "تم حفظ الأساس: {note}",
    "基础值已保存：{note}"
  ],
  "Inventario: hay {stock} g · gastaría {used} g · quedarían {remaining} g.": ["Inventory: {stock} g available · {used} g would be used · {remaining} g would remain.", "Stock : {stock} g disponibles · {used} g seraient utilisés · {remaining} g resteraient.", "Lagerbestand: {stock} g vorhanden · {used} g würden verbraucht · {remaining} g würden übrig bleiben.", "Inventario: {stock} g disponibili · {used} g verrebbero consumati · {remaining} g rimarrebbero.", "Stan magazynowy: dostępne {stock} g · zużycie {used} g · pozostałoby {remaining} g.",
    "المخزون: المتوفر {stock} غ · الاستهلاك {used} غ · المتبقي {remaining} غ.",
    "库存：现有 {stock} 克 · 将使用 {used} 克 · 剩余 {remaining} 克。"
  ],
  "Guardar cambios del pedido": ["Save order changes", "Enregistrer les modifications de la commande", "Bestelländerungen speichern", "Salva le modifiche dell'ordine", "Zapisz zmiany zamówienia",
    "حفظ تغييرات الطلب",
    "保存订单更改"
  ],
  "No se pudo contactar con el almacenamiento del PC: {message}": ["Could not contact this PC's storage: {message}", "Impossible de contacter le stockage de ce PC : {message}", "Der Speicher dieses PCs konnte nicht erreicht werden: {message}", "Impossibile contattare l'archiviazione di questo PC: {message}", "Nie można połączyć się z pamięcią tego komputera: {message}",
    "تعذر الاتصال بتخزين الكمبيوتر: {message}",
    "无法连接电脑本地存储：{message}"
  ],
  "Conflicto de almacenamiento: el dato ha cambiado en otra ventana.": ["Storage conflict: the data was changed in another window.", "Conflit de stockage : les données ont été modifiées dans une autre fenêtre.", "Speicherkonflikt: Die Daten wurden in einem anderen Fenster geändert.", "Conflitto di archiviazione: i dati sono stati modificati in un'altra finestra.", "Konflikt pamięci: dane zostały zmienione w innym oknie.",
    "تعارض في التخزين: تم تغيير البيانات في نافذة أخرى.",
    "存储冲突：数据已在另一个窗口中更改。"
  ],
  "Error de conexión": ["Connection error", "Erreur de connexion", "Verbindungsfehler", "Errore di connessione", "Błąd połączenia",
    "خطأ في الاتصال",
    "连接错误"
  ],
  "Seleccionar archivo": ["Choose file", "Choisir un fichier", "Datei auswählen", "Scegli file", "Wybierz plik",
    "اختيار ملف",
    "选择文件"
  ],
  "Ningún archivo seleccionado": ["No file selected", "Aucun fichier sélectionné", "Keine Datei ausgewählt", "Nessun file selezionato", "Nie wybrano pliku",
    "لم يتم تحديد أي ملف",
    "未选择文件"
  ],
  "Cambios pendientes de guardar…": ["Changes waiting to be saved…", "Modifications en attente d’enregistrement…", "Änderungen warten auf das Speichern…", "Modifiche in attesa di salvataggio…", "Zmiany oczekujące na zapisanie…",
    "تغييرات بانتظار الحفظ…",
    "有更改尚未保存……"
  ],
  "Comprobando conexión con la impresora…": ["Checking printer connection…", "Vérification de la connexion à l’imprimante…", "Druckerverbindung wird geprüft…", "Verifica della connessione alla stampante…", "Sprawdzanie połączenia z drukarką…",
    "جارٍ التحقق من الاتصال بالطابعة…",
    "正在检查打印机连接……"
  ],
  "Impresora encontrada pero está sin conexión: {ip}. Se conserva en la lista.": ["Printer found but offline: {ip}. It remains in the list.", "Imprimante trouvée mais hors ligne : {ip}. Elle reste dans la liste.", "Drucker gefunden, aber offline: {ip}. Er bleibt in der Liste.", "Stampante trovata ma offline: {ip}. Rimane nell’elenco.", "Znaleziono drukarkę, ale jest offline: {ip}. Pozostaje na liście.",
    "تم العثور على الطابعة لكنها غير متصلة: {ip}. ستبقى في القائمة.",
    "已找到打印机，但当前离线：{ip}。将保留在列表中。"
  ],
  "SIN CONEXIÓN": ["OFFLINE", "HORS LIGNE", "OFFLINE", "OFFLINE", "OFFLINE",
    "غير متصل",
    "离线"
  ],
  "Impresora sin conexión": ["Printer offline", "Imprimante hors ligne", "Drucker offline", "Stampante offline", "Drukarka offline",
    "الطابعة غير متصلة",
    "打印机离线"
  ],
  "La impresora está apagada o no responde. Se conserva su configuración.": ["The printer is powered off or not responding. Its configuration has been retained.", "L’imprimante est éteinte ou ne répond pas. Sa configuration a été conservée.", "Der Drucker ist ausgeschaltet oder antwortet nicht. Seine Konfiguration wurde beibehalten.", "La stampante è spenta o non risponde. La sua configurazione è stata conservata.", "Drukarka jest wyłączona lub nie odpowiada. Jej konfiguracja została zachowana.",
    "الطابعة مطفأة أو لا تستجيب. سيتم الاحتفاظ بإعداداتها.",
    "打印机已关闭或无响应。其配置将被保留。"
  ],
  "Impresora seleccionada, pero está sin conexión: {ip}. La configuración se ha conservado.": ["Printer selected but offline: {ip}. The configuration has been retained.", "Imprimante sélectionnée mais hors ligne : {ip}. La configuration a été conservée.", "Drucker ausgewählt, aber offline: {ip}. Die Konfiguration wurde beibehalten.", "Stampante selezionata ma offline: {ip}. La configurazione è stata conservata.", "Wybrano drukarkę, ale jest offline: {ip}. Konfiguracja została zachowana.",
    "تم تحديد الطابعة لكنها غير متصلة: {ip}. تم الاحتفاظ بالإعدادات.",
    "已选择打印机，但当前离线：{ip}。配置已保留。"
  ],
  "IMPRESORA SIN CONEXIÓN · {ip}. Se conserva seleccionada y aparecerá conectada cuando vuelva a responder.": ["PRINTER OFFLINE · {ip}. It remains selected and will show as connected when it responds again.", "IMPRIMANTE HORS LIGNE · {ip}. Elle reste sélectionnée et apparaîtra connectée dès qu’elle répondra.", "DRUCKER OFFLINE · {ip}. Er bleibt ausgewählt und wird als verbunden angezeigt, sobald er wieder antwortet.", "STAMPANTE OFFLINE · {ip}. Rimane selezionata e apparirà connessa quando tornerà a rispondere.", "DRUKARKA OFFLINE · {ip}. Pozostaje wybrana i będzie widoczna jako połączona, gdy znów zacznie odpowiadać.",
    "الطابعة غير متصلة · {ip}. ستظل محددة وستظهر متصلة عند استجابتها مجددًا.",
    "打印机离线 · {ip}。仍保持选中，恢复响应后将显示为已连接。"
  ],
  "Hay una sesión activa, pero no se pudo verificar la licencia online. Comprueba la conexión y vuelve a intentarlo.": ["A session is active, but the license could not be verified online. Check your connection and try again.", "Une session est active, mais la licence n’a pas pu être vérifiée en ligne. Vérifiez votre connexion et réessayez.", "Eine Sitzung ist aktiv, aber die Lizenz konnte online nicht geprüft werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.", "È attiva una sessione, ma non è stato possibile verificare la licenza online. Controlla la connessione e riprova.", "Sesja jest aktywna, ale nie można zweryfikować licencji online. Sprawdź połączenie i spróbuj ponownie.",
    "هناك جلسة نشطة، لكن تعذر التحقق من الترخيص عبر الإنترنت. تحقق من الاتصال وحاول مرة أخرى.",
    "会话处于活动状态，但无法在线验证许可证。请检查网络连接后重试。"
  ],

  "Comprobando si hay una sesión activa…": ["Checking for an active session…", "Vérification d’une session active…", "Suche nach einer aktiven Sitzung…", "Verifica di una sessione attiva…", "Sprawdzanie aktywnej sesji…",

    "جارٍ التحقق من وجود جلسة نشطة…",

    "正在检查是否存在活动会话……"

  ],
  "No has iniciado sesión. La licencia se consultará después de autenticarte.": ["You are not signed in. The license will be checked after authentication.","Vous n’êtes pas connecté. La licence sera vérifiée après authentification.","Sie sind nicht angemeldet. Die Lizenz wird nach der Anmeldung geprüft.","Non hai effettuato l’accesso. La licenza sarà verificata dopo l’autenticazione.","Nie jesteś zalogowany. Licencja zostanie sprawdzona po uwierzytelnieniu.",
    "لم تسجل الدخول. سيتم الاستعلام عن الترخيص بعد المصادقة.",
    "你尚未登录。完成身份验证后才会查询许可证。"
  ],
  "No se pudo comprobar la sesión. Inicia sesión o vuelve a intentarlo.": ["Could not check the session. Sign in or try again.", "Impossible de vérifier la session. Connectez-vous ou réessayez.", "Sitzung konnte nicht geprüft werden. Melden Sie sich an oder versuchen Sie es erneut.", "Impossibile verificare la sessione. Accedi o riprova.", "Nie można sprawdzić sesji. Zaloguj się lub spróbuj ponownie.",
    "تعذر التحقق من الجلسة. سجل الدخول أو حاول مرة أخرى.",
    "无法验证会话。请登录或重试。"
  ],
  "Sesión cerrada. No hay una licencia verificada en esta sesión.": ["Signed out. No license is verified in this session.", "Session fermée. Aucune licence n’est vérifiée dans cette session.", "Abgemeldet. In dieser Sitzung ist keine Lizenz bestätigt.", "Sessione chiusa. Nessuna licenza è verificata in questa sessione.", "Wylogowano. W tej sesji nie zweryfikowano licencji.",
    "تم تسجيل الخروج. لا يوجد ترخيص تم التحقق منه في هذه الجلسة.",
    "已退出登录。本次会话没有经过验证的许可证。"
  ],
  "No se pudo cerrar la sesión.": ["Could not sign out.", "Impossible de fermer la session.", "Abmelden nicht möglich.", "Impossibile uscire dall’account.", "Nie można się wylogować.",
    "تعذر إنهاء الجلسة.",
    "无法退出登录。"
  ],

  "Cliente eliminado de la agenda.": [
    "Customer removed from the directory.",
    "Client supprimé du répertoire.",
    "Kunde aus dem Verzeichnis entfernt.",
    "Cliente rimosso dalla rubrica.",
    "Klient został usunięty z książki adresowej.",

    "تم حذف العميل من دفتر العناوين.",

    "客户已从通讯录中删除。"

  ],
  "Datos del vendedor guardados en la base de datos SQLite de este PC.": [
    "Seller details saved to this PC’s SQLite database.",
    "Coordonnées du vendeur enregistrées dans la base SQLite de ce PC.",
    "Verkäuferdaten wurden in der SQLite-Datenbank dieses PCs gespeichert.",
    "Dati del venditore salvati nel database SQLite di questo PC.",
    "Dane sprzedawcy zapisano w bazie SQLite na tym komputerze.",
    "تم حفظ بيانات البائع في قاعدة بيانات SQLite على هذا الكمبيوتر.", "已将卖家信息保存到此电脑的 SQLite 数据库。"
    ],
  "Moneda e impuestos guardados.": [
    "Currency and tax settings saved.",
    "Devise et taxes enregistrées.",
    "Währung und Steuern gespeichert.",
    "Valuta e imposte salvate.",
    "Waluta i podatki zostały zapisane.",
    "تم حفظ إعدادات العملة والضرائب.", "货币和税务设置已保存。"
    ],
  "Cálculo guardado en este navegador.": [
    "Calculation saved in this browser.",
    "Calcul enregistré dans ce navigateur.",
    "Berechnung in diesem Browser gespeichert.",
    "Calcolo salvato in questo browser.",
    "Obliczenie zapisano w tej przeglądarce.",
    "تم حفظ الحساب في هذا المتصفح.", "计算结果已保存在此浏览器中。"
    ],
  "Añadir movimiento manual": [
    "Add manual entry",
    "Ajouter une opération manuelle",
    "Manuelle Buchung hinzufügen",
    "Aggiungi movimento manuale",
    "Dodaj wpis ręczny",
    "إضافة حركة يدوية", "添加手动记录"
    ],
  "Añadir desde": [
    "Add from",
    "Ajouter depuis",
    "Hinzufügen aus",
    "Aggiungi da",
    "Dodaj z",
    "إضافة من", "添加自"
    ],
  "Movimiento manual": [
    "Manual entry",
    "Écriture manuelle",
    "Manuelle Buchung",
    "Movimento manuale",
    "Wpis ręczny",
    "حركة يدوية", "手动记录"
    ],
  "Presupuesto guardado": [
    "Saved quote",
    "Devis enregistré",
    "Gespeichertes Angebot",
    "Preventivo salvato",
    "Zapisana oferta",
    "تم حفظ عرض السعر", "报价已保存"
    ],
  "Tasación guardada": [
    "Saved estimate",
    "Estimation enregistrée",
    "Gespeicherte Kalkulation",
    "Stima salvata",
    "Zapisana wycena",
    "تم حفظ التقدير", "估价已保存"
    ],
  "Seleccionar presupuesto o tasación": [
    "Select a quote or estimate",
    "Sélectionner un devis ou une estimation",
    "Angebot oder Kalkulation auswählen",
    "Seleziona un preventivo o una stima",
    "Wybierz ofertę lub wycenę",
    "اختيار عرض سعر أو تقدير", "选择报价或估价"
    ],
  "Selecciona un documento": [
    "Select a document",
    "Sélectionnez un document",
    "Dokument auswählen",
    "Seleziona un documento",
    "Wybierz dokument.",
    "اختر مستندًا", "选择文档"
    ],
  "ATENCIÓN: se restaurarán los datos de la copia seleccionada y se sustituirán los datos SQLite actuales. Antes se creará y validará automáticamente una copia de protección de la base actual. ¿Quieres continuar?": [
    "WARNING: Data from the selected backup will replace the current SQLite data. A protective backup of the current database will be created and validated first. Continue?",
    "ATTENTION : les données de la sauvegarde sélectionnée remplaceront les données SQLite actuelles. Une copie de protection de la base actuelle sera d’abord créée et validée. Continuer ?",
    "ACHTUNG: Die Daten der ausgewählten Sicherung ersetzen die aktuellen SQLite-Daten. Zuvor wird eine Schutzkopie der aktuellen Datenbank erstellt und geprüft. Fortfahren?",
    "ATTENZIONE: i dati del backup selezionato sostituiranno i dati SQLite attuali. Prima verrà creata e convalidata una copia di protezione del database attuale. Continuare?",
    "UWAGA: dane z wybranej kopii zostaną przywrócone i zastąpią obecne dane SQLite. Najpierw zostanie automatycznie utworzona i sprawdzona kopia zabezpieczająca bieżącej bazy. Czy chcesz kontynuować?",
    "تنبيه: ستتم استعادة بيانات النسخة المحددة واستبدال بيانات SQLite الحالية. سيتم أولًا إنشاء نسخة احتياطية وقائية من قاعدة البيانات الحالية والتحقق منها تلقائيًا. هل تريد المتابعة؟",
    "注意：将恢复所选备份的数据并替换当前 SQLite 数据。系统会先自动创建并验证当前数据库的保护备份。是否继续？"
    ],
  "Última confirmación: ¿restaurar {name}? No cierres Orca ni esta ventana durante el proceso.": [
    "Final confirmation: restore {name}? Do not close Orca or this window during the process.",
    "Dernière confirmation : restaurer {name} ? Ne fermez ni Orca ni cette fenêtre pendant l’opération.",
    "Letzte Bestätigung: {name} wiederherstellen? Schließen Sie Orca oder dieses Fenster während des Vorgangs nicht.",
    "Ultima conferma: ripristinare {name}? Non chiudere Orca né questa finestra durante il processo.",
    "Ostatnie potwierdzenie: przywrócić {name}? Nie zamykaj Orca ani tego okna podczas wykonywania operacji.",
    "التأكيد الأخير: هل تريد استعادة {name}؟ لا تغلق Orca أو هذه النافذة أثناء العملية.", "最后确认：要恢复 {name} 吗？恢复期间请勿关闭 Orca 或此窗口。"
    ],
  "Selecciona primero una copia SQLite.": [
    "Select an SQLite backup first.",
    "Sélectionnez d’abord une sauvegarde SQLite.",
    "Wählen Sie zuerst eine SQLite-Sicherung aus.",
    "Seleziona prima un backup SQLite.",
    "Najpierw wybierz kopię zapasową SQLite.",
    "اختر نسخة SQLite الاحتياطية أولاً.", "请先选择 SQLite 备份。"
    ],
  "Validando la copia y creando una copia de protección de los datos actuales…": [
    "Validating the backup and creating a safety copy of the current data…",
    "Validation de la sauvegarde et création d’une copie de protection des données actuelles…",
    "Sicherung wird geprüft und eine Sicherheitskopie der aktuellen Daten wird erstellt…",
    "Verifica del backup e creazione di una copia di sicurezza dei dati attuali…",
    "Trwa sprawdzanie kopii zapasowej i tworzenie kopii zabezpieczającej bieżące dane…",
    "جارٍ التحقق من النسخة وإنشاء نسخة احتياطية من البيانات الحالية…", "正在验证备份并创建当前数据的保护副本…"
    ],
  "Restauración completada. Integridad SQLite correcta. Registros: {count}. Copia de protección creada: {safetyBackup}. Actualizando la aplicación para cargar todos los datos restaurados…": [
    "Restore completed. SQLite integrity is OK. Records: {count}. Protective backup created: {safetyBackup}. Reloading the application to load all restored data…",
    "Restauration terminée. Intégrité SQLite correcte. Enregistrements : {count}. Copie de protection créée : {safetyBackup}. Actualisation de l’application pour charger toutes les données restaurées…",
    "Wiederherstellung abgeschlossen. SQLite-Integrität ist in Ordnung. Datensätze: {count}. Schutzkopie erstellt: {safetyBackup}. Anwendung wird neu geladen, um alle wiederhergestellten Daten zu laden…",
    "Ripristino completato. Integrità SQLite corretta. Record: {count}. Copia di protezione creata: {safetyBackup}. Ricaricamento dell’applicazione per caricare tutti i dati ripristinati…",
    "Przywracanie zakończone. Integralność bazy SQLite jest prawidłowa. Liczba rekordów: {count}. Utworzono kopię zabezpieczającą: {safetyBackup}. Aplikacja zostanie odświeżona, aby wczytać wszystkie przywrócone dane…",
    "اكتملت الاستعادة. سلامة SQLite سليمة. عدد السجلات: {count}. تم إنشاء النسخة الوقائية: {safetyBackup}. جارٍ تحديث التطبيق لتحميل جميع البيانات المستعادة…",
    "恢复完成。SQLite 完整性正常。记录数：{count}。已创建保护备份：{safetyBackup}。正在刷新应用以加载所有恢复的数据……"
    ],
  "No se pudo restaurar la copia: {message}": [
    "The backup could not be restored: {message}",
    "Impossible de restaurer la sauvegarde : {message}",
    "Die Sicherung konnte nicht wiederhergestellt werden: {message}",
    "Impossibile ripristinare il backup: {message}",
    "Nie udało się przywrócić kopii zapasowej: {message}",
    "تعذرت استعادة النسخة: {message}", "无法恢复备份：{message}"
    ],
  "Validando la copia seleccionada…": [
    "Validating the selected backup…",
    "Validation de la sauvegarde sélectionnée…",
    "Ausgewählte Sicherung wird geprüft…",
    "Convalida del backup selezionato…",
    "Sprawdzanie wybranej kopii zapasowej…",
    "جارٍ التحقق من النسخة المحددة…", "正在验证所选备份…"
    ],
  "Copia válida. Integridad SQLite correcta.": [
    "Backup is valid. SQLite integrity is OK.",
    "Sauvegarde valide. Intégrité SQLite correcte.",
    "Sicherung ist gültig. SQLite-Integrität ist in Ordnung.",
    "Backup valido. Integrità SQLite corretta.",
    "Kopia zapasowa jest prawidłowa. Integralność SQLite jest poprawna.",
    "النسخة صالحة. سلامة SQLite سليمة.", "备份有效。SQLite 完整性正常。"
    ],
  "No se pudo validar la copia: {message}": [
    "The backup could not be validated: {message}",
    "Impossible de valider la sauvegarde : {message}",
    "Die Sicherung konnte nicht überprüft werden: {message}",
    "Impossibile convalidare il backup: {message}",
    "Nie udało się sprawdzić kopii zapasowej: {message}",
    "تعذر التحقق من النسخة: {message}", "无法验证备份：{message}"
    ],
  "Validar copia seleccionada": [
    "Validate selected backup",
    "Vérifier la sauvegarde sélectionnée",
    "Ausgewählte Sicherung prüfen",
    "Verifica backup selezionato",
    "Sprawdź wybraną kopię",
    "التحقق من النسخة المحددة", "验证所选备份"
    ],
  "Restaurar copia seleccionada": [
    "Restore selected backup",
    "Restaurer la sauvegarde sélectionnée",
    "Ausgewählte Sicherung wiederherstellen",
    "Ripristina backup selezionato",
    "Przywróć wybraną kopię",
    "استعادة النسخة المحددة", "恢复所选备份"
    ],
  "Consultando copias…": [
    "Loading backups…",
    "Chargement des sauvegardes…",
    "Sicherungen werden geladen…",
    "Caricamento dei backup…",
    "Wyszukiwanie kopii zapasowych…",
    "جارٍ البحث عن النسخ الاحتياطية…", "正在查询备份…"
    ],
  "Al abrir Opciones se consultará el estado del servidor y de SQLite.": [
    "When Settings opens, the server and SQLite status will be checked.",
    "À l’ouverture des Options, l’état du serveur et de SQLite sera vérifié.",
    "Beim Öffnen der Einstellungen werden Server- und SQLite-Status geprüft.",
    "All’apertura di Opzioni verrà controllato lo stato del server e di SQLite.",
    "Po otwarciu ustawień zostanie sprawdzony stan serwera i bazy SQLite.",
    "عند فتح الإعدادات، سيتم التحقق من حالة الخادم وSQLite.", "打开设置时将检查服务器和 SQLite 的状态。"
    ],
  "La restauración crea y valida primero una copia de protección de la base actual. No cierres la aplicación mientras termina.": [
    "Restore first creates and validates a protective backup of the current database. Do not close the application until it finishes.",
    "La restauration crée et valide d’abord une copie de protection de la base actuelle. Ne fermez pas l’application avant la fin.",
    "Bei der Wiederherstellung wird zuerst eine Schutzkopie der aktuellen Datenbank erstellt und geprüft. Schließen Sie die Anwendung nicht, bevor der Vorgang abgeschlossen ist.",
    "Il ripristino crea e convalida prima una copia di protezione del database attuale. Non chiudere l’applicazione fino al termine.",
    "Przed przywróceniem danych tworzona i sprawdzana jest kopia zabezpieczająca bieżącej bazy. Nie zamykaj aplikacji do zakończenia procesu.",
    "تنشئ عملية الاستعادة أولاً نسخة حماية من قاعدة البيانات الحالية وتتحقق منها. لا تغلق التطبيق حتى تنتهي العملية.", "恢复前会先创建并验证当前数据库的保护副本。完成前请勿关闭应用。"
    ],
  "Ubicación:": [
    "Location:",
    "Emplacement :",
    "Speicherort:",
    "Posizione:",
    "Lokalizacja:",
    "الموقع:", "位置："
    ],
  "Correcta": [
    "Correct",
    "Correcte",
    "Korrekt",
    "Corretta",
    "Poprawna",
    "صحيح", "正确"
    ],
  "100 copias": [
    "100 backups",
    "100 sauvegardes",
    "100 Sicherungen",
    "100 backup",
    "100 kopii zapasowych",
    "100 نسخة احتياطية", "100 个备份"
    ],
  "Print Cost & Profit · Snapmaker Orca": [
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca"
    ],
  "Calculadora local para Snapmaker Orca 2.4.1-alpha · sin actualizar ni modificar el laminador": [
    "Local calculator for Snapmaker Orca 2.4.1-alpha · does not update or modify the slicer",
    "Calculatrice locale pour Snapmaker Orca 2.4.1-alpha · ne met pas à jour ni ne modifie le slicer",
    "Lokaler Rechner für Snapmaker Orca 2.4.1-alpha · aktualisiert oder ändert den Slicer nicht",
    "Calcolatrice locale per Snapmaker Orca 2.4.1-alpha · non aggiorna né modifica lo slicer",
    "Lokalny kalkulator dla Snapmaker Orca 2.4.1-alpha · nie aktualizuje ani nie modyfikuje programu do cięcia",
    "حاسبة محلية لبرنامج Snapmaker Orca 2.4.1-alpha · دون تحديث برنامج التقطيع أو تعديله", "适用于 Snapmaker Orca 2.4.1-alpha 的本地计算器 · 不更新或修改切片程序"
    ],
  "Inicio": [
    "Home",
    "Accueil",
    "Startseite",
    "Inizio",
    "Strona główna",
    "الرئيسية", "الرئيسية"
  ],
  "Opciones": [
    "Settings",
    "Options",
    "Einstellungen",
    "Opzioni",
    "Opcje",
    "الإعدادات", "选项"
  ],
  "Clientes": [
    "Customers",
    "Clients",
    "Kunden",
    "Clienti",
    "Klienci",
    "العملاء", "客户"
  ],
  "Presupuestos": [
    "Quotes",
    "Devis",
    "Angebote",
    "Preventivi",
    "Oferty",
    "عروض الأسعار", "报价单"
  ],
  "Seguimiento de pedidos": [
    "Order tracking",
    "Suivi des commandes",
    "Auftragsverfolgung",
    "Monitoraggio ordini",
    "Zamówienie tracking",
    "متابعة الطلبات", "订单跟踪"
  ],
  "Facturas": [
    "Invoices",
    "Factures",
    "Rechnungen",
    "Fatture",
    "Faktury",
    "الفواتير", "发票"
  ],
  "Inventario de bobinas": [
    "Spool inventory",
    "Inventaire des bobines",
    "Spulenbestand",
    "Inventario bobine",
    "szpula Magazyn",
    "مخزون بكرات الخيوط", "线轴库存"
  ],
  "Contabilidad": [
    "Accounting",
    "Comptabilité",
    "Buchhaltung",
    "Contabilità",
    "Księgowość",
    "المحاسبة", "会计"
  ],
  "Cargar G-code laminado": [
    "Load sliced G-code",
    "Charger le G-code tranché",
    "Geslicten G-Code laden",
    "Carica G-code elaborato",
    "Wczytaj przygotowany G-code",
    "تحميل ملف G-code المُعَدّ", "加载切片后的 G-code"
  ],
  "Copiar resumen": [
    "Copy summary",
    "Copier le résumé",
    "Zusammenfassung kopieren",
    "Copia riepilogo",
    "Kopiuj podsumowanie",
    "نسخ الملخص", "复制摘要"
  ],
  "Copia de seguridad JSON": [
    "JSON backup",
    "Sauvegarde JSON",
    "JSON-Sicherung",
    "Backup JSON",
    "JSON kopia zapasowa",
    "نسخة احتياطية JSON", "JSON 备份"
  ],
  "Restaurar JSON": [
    "Restore JSON",
    "Restaurer JSON",
    "JSON wiederherstellen",
    "Ripristina JSON",
    "przywróć JSON",
    "استعادة JSON", "恢复 JSON"
  ],
  "Nuevo cálculo": [
    "New calculation",
    "Nouveau calcul",
    "Neue Berechnung",
    "Nuovo calcolo",
    "Nowe obliczenie",
    "حساب جديد", "新建计算"
  ],
  "El borrador se guarda automáticamente en este navegador.": [
    "The draft is saved automatically in this browser.",
    "Le brouillon est enregistré automatiquement dans ce navigateur.",
    "Der Entwurf wird automatisch in diesem Browser gespeichert.",
    "La bozza viene salvata automaticamente in questo browser.",
    "Wersja robocza jest automatycznie zapisywana w tej przeglądarce.",
    "يُحفظ المسودّة تلقائيًا في هذا المتصفح.", "草稿会自动保存在此浏览器中。"
    ],
  "Tipo de impresión": [
    "Print type",
    "Type d’impression",
    "Druckart",
    "Tipo di stampa",
    "Typ wydruku",
    "نوع الطباعة", "打印类型"
  ],
  "Personal · gasto propio": [
    "Personal · own expense",
    "Personnel · dépense personnelle",
    "Privat · eigene Ausgabe",
    "Personale · spesa propria",
    "Własny · wydatek własny",
    "شخصي · نفقة خاصة", "个人 · 自用支出"
  ],
  "Pedido de venta · gasto y beneficio": [
    "Sales order · cost and profit",
    "Commande de vente · coût et bénéfice",
    "Verkaufsauftrag · Kosten und Gewinn",
    "Ordine di vendita · costi e profitto",
    "Zamówienie sprzedaży · koszt i zysk",
    "طلب بيع · التكلفة والربح", "销售订单 · 成本与利润"
  ],
  "01 · Datos de la pieza": [
    "01 · Part details",
    "01 · Détails de la pièce",
    "01 · Teiledaten",
    "01 · Dati del pezzo",
    "01 · Dane części",
    "01 · بيانات القطعة", "01 · 零件信息"
  ],
  "02 · Filamento por color/material": [
    "02 · Filament by colour/material",
    "02 · Filament par couleur/matériau",
    "02 · Filament nach Farbe/Material",
    "02 · Filamento per colore/materiale",
    "02 · Filament według koloru/materiału",
    "02 · الخيط حسب اللون/المادة", "02 · 按颜色/材料分类的耗材"
  ],
  "03 · Otros costes": [
    "03 · Other costs",
    "03 · Autres coûts",
    "03 · Weitere Kosten",
    "03 · Altri costi",
    "03 · Other koszty",
    "03 · تكاليف أخرى", "03 · 其他成本"
  ],
  "04 · Venta, moneda e impuestos": [
    "04 · Sale, currency and taxes",
    "04 · Vente, devise et taxes",
    "04 · Verkauf, Währung und Steuern",
    "04 · Vendita, valuta e imposte",
    "04 · Sprzedaż, waluta i podatki",
    "04 · البيع والعملة والضرائب", "04 · 销售、货币和税费"
  ],
  "05 · Resultado estimado": [
    "05 · Estimated result",
    "05 · Résultat estimé",
    "05 · Geschätztes Ergebnis",
    "05 · Risultato stimato",
    "05 · Szacowany wynik",
    "05 · النتيجة التقديرية", "05 · 预计结果"
  ],
  "Nombre de la pieza": [
    "Part name",
    "Nom de la pièce",
    "Teilename",
    "Nome del pezzo",
    "Nazwa elementu",
    "اسم القطعة", "零件名称"
  ],
  "Imagen de la pieza": [
    "Part image",
    "Image de la pièce",
    "Teilebild",
    "Immagine del pezzo",
    "Obraz elementu",
    "صورة القطعة", "零件图片"
  ],
  "Quitar imagen": [
    "Remove image",
    "Supprimer l’image",
    "Bild entfernen",
    "Rimuovi immagine",
    "Usuń obraz",
    "إزالة الصورة", "移除图片"
  ],
  "Tiempo de impresión (horas)": [
    "Print time (hours)",
    "Temps d’impression (heures)",
    "Druckzeit (Stunden)",
    "Tempo di stampa (ore)",
    "Czas drukowania (godziny)",
    "وقت الطباعة (ساعات)", "打印时间（小时）"
  ],
  "Unidades que se fabrican": [
    "Units to manufacture",
    "Unités à fabriquer",
    "Herzustellende Einheiten",
    "Unità da produrre",
    "Liczba sztuk do wykonania",
    "عدد الوحدات المُصنَّعة", "生产数量"
  ],
  "Reserva por fallos (%)": [
    "Failure allowance (%)",
    "Marge pour échecs (%)",
    "Fehlerreserve (%)",
    "Riserva per guasti (%)",
    "Rezerwa na nieudane wydruki (%)",
    "احتياطي الإخفاقات (%)", "失败预留比例（%）"
  ],
  "Perfil / ajustes de impresión (opcional)": [
    "Printer profile / print settings (optional)",
    "Profil / réglages d’impression (facultatif)",
    "Druckprofil / Druckeinstellungen (optional)",
    "Profilo / impostazioni di stampa (facoltativo)",
    "Profil / ustawienia drukowania (opcjonalnie)",
    "ملف التعريف / إعدادات الطباعة (اختياري)", "配置文件 / 打印设置（可选）"
  ],
  "Notas de la pieza": [
    "Part notes",
    "Notes sur la pièce",
    "Teilenotizen",
    "Note sul pezzo",
    "Uwagi dotyczące części",
    "ملاحظات القطعة", "零件备注"
  ],
  "Material / nombre": [
    "Material / name",
    "Matériau / nom",
    "Material / Name",
    "Materiale / nome",
    "Materiał / Nazwa",
    "المادة / الاسم", "材料 / 名称"
  ],
  "Gramos": [
    "Grams",
    "Grammes",
    "Gramm",
    "Grammi",
    "Gramy",
    "غرام", "克"
  ],
  "Color (nombre y HEX)": [
    "Colour (name and HEX)",
    "Couleur (nom et HEX)",
    "Farbe (Name und HEX)",
    "Colore (nome e HEX)",
    "Colour (Nazwa i HEX)",
    "اللون (الاسم ورمز HEX)", "颜色（名称和 HEX）"
  ],
  "Consumo total de Orca": [
    "Total Orca usage",
    "Consommation totale Orca",
    "Orca-Gesamtverbrauch",
    "Consumo totale Orca",
    "Całkowite zużycie Orca",
    "إجمالي استهلاك Orca", "Orca 总用量"
  ],
  "＋ Añadir color/material": [
    "＋ Add colour/material",
    "＋ Ajouter couleur/matériau",
    "＋ Farbe/Material hinzufügen",
    "＋ Aggiungi colore/materiale",
    "＋ Dodaj colour/Materiał",
    "＋ إضافة لون/مادة", "＋ 添加颜色/材料"
  ],
  "Precio electricidad (": [
    "Electricity price (",
    "Prix de l’électricité (",
    "Strompreis (",
    "Prezzo dell’elettricità (",
    "Koszt energii elektrycznej (",
    "سعر الكهرباء (", "电价（"
    ],
  "Consumo medio de impresora (W)": [
    "Average printer power (W)",
    "Puissance moyenne de l’imprimante (W)",
    "Durchschnittliche Druckerleistung (W)",
    "Potenza media stampante (W)",
    "Average drukarka power (W)",
    "متوسط استهلاك الطابعة (W)", "打印机平均功耗（W）"
  ],
  "Mantenimiento y recambios por hora": [
    "Maintenance and spare parts per hour",
    "Maintenance et pièces de rechange par heure",
    "Wartung und Ersatzteile pro Stunde",
    "Manutenzione e ricambi all’ora",
    "Konserwacja i części zamienne na godzinę",
    "الصيانة وقطع الغيار لكل ساعة", "每小时维护和备件费用"
  ],
  "Amortización desde perfil (": [
    "Depreciation from profile (",
    "Amortissement selon le profil (",
    "Abschreibung aus Profil (",
    "Ammortamento dal profilo (",
    "Amortyzacja z profilu (",
    "الإهلاك حسب ملف التعريف (", "按配置文件计算折旧（"
    ],
  "Precio por hora de trabajo (": [
    "Labour cost per hour (",
    "Coût horaire de main-d’œuvre (",
    "Arbeitskosten pro Stunde (",
    "Costo del lavoro all’ora (",
    "Koszt robocizny za godzinę (",
    "تكلفة ساعة العمل (", "每小时人工费用（"
    ],
  "Minutos de posprocesado por unidad": [
    "Post-processing minutes per unit",
    "Minutes de post-traitement par unité",
    "Nachbearbeitungsminuten pro Einheit",
    "Minuti di post-elaborazione per unità",
    "Minuty obróbki końcowej na sztukę",
    "دقائق المعالجة اللاحقة لكل وحدة", "每件后处理分钟数"
  ],
  "Minutos de montaje por unidad": [
    "Assembly minutes per unit",
    "Minutes de montage par unité",
    "Montageminuten pro Einheit",
    "Minuti di assemblaggio per unità",
    "Minuty montażu na sztukę",
    "دقائق التجميع لكل وحدة", "每件组装分钟数"
  ],
  "Mano de obra por trabajo (": [
    "Labour per job (",
    "Main-d’œuvre par travail (",
    "Arbeitsaufwand pro Auftrag (",
    "Manodopera per lavoro (",
    "Robocizna na zlecenie (",
    "تكلفة العمالة لكل مهمة (", "每项任务的人工费用（"
    ],
  "Embalaje y otros por unidad (": [
    "Packaging and other costs per unit (",
    "Emballage et autres coûts par unité (",
    "Verpackung und sonstige Kosten pro Einheit (",
    "Imballaggio e altri costi per unità (",
    "Pakowanie i inne koszty na sztukę (",
    "التغليف والتكاليف الأخرى لكل وحدة (", "每件包装及其他费用（"
    ],
  "Otros costes por trabajo (": [
    "Other costs per job (",
    "Autres coûts par travail (",
    "Sonstige Kosten pro Auftrag (",
    "Altri costi per lavoro (",
    "Pozostałe koszty na zlecenie (",
    "تكاليف أخرى لكل مهمة (", "每项任务的其他费用（"
    ],
  "Guardar tasación": [
    "Save estimate",
    "Enregistrer l’estimation",
    "Kalkulation speichern",
    "Salva stima",
    "Zapisz wycenę",
    "حفظ التقدير", "保存估价"
  ],
  "Guardar presupuesto": [
    "Save quote",
    "Enregistrer le devis",
    "Angebot speichern",
    "Salva preventivo",
    "Zapisz ofertę",
    "حفظ عرض السعر", "保存报价"
  ],
  "Calcular precio final": [
    "Calculate final price",
    "Calculer le prix final",
    "Endpreis berechnen",
    "Calcola prezzo finale",
    "Oblicz cenę końcową",
    "حساب السعر النهائي", "计算最终价格"
  ],
  "Realizar pedido": [
    "Place order",
    "Passer commande",
    "Auftrag erstellen",
    "Crea ordine",
    "Utwórz zamówienie",
    "إنشاء طلب", "创建订单"
  ],
  "Coste por unidad": [
    "Cost per unit",
    "Coût par unité",
    "Kosten pro Einheit",
    "Costo per unità",
    "Koszt na sztukę",
    "التكلفة لكل وحدة", "单件成本"
  ],
  "Beneficio por unidad": [
    "Profit per unit",
    "Bénéfice par unité",
    "Gewinn pro Einheit",
    "Profitto per unità",
    "Zysk na sztukę",
    "الربح لكل وحدة", "单件利润"
  ],
  "Precio recomendado con impuestos": [
    "Recommended price including tax",
    "Prix recommandé TTC",
    "Empfohlener Preis inklusive Steuer",
    "Prezzo consigliato con imposte",
    "Zalecana cena z podatkiem",
    "السعر الموصى به شامل الضرائب", "含税建议价格"
  ],
  "Margen real": [
    "Actual margin",
    "Marge réelle",
    "Tatsächliche Marge",
    "Margine effettivo",
    "Rzeczywista marża",
    "هامش الربح الفعلي", "实际利润率"
  ],
  "Electricidad": [
    "Electricity",
    "Électricité",
    "Strom",
    "Elettricità",
    "Energia elektryczna",
    "الكهرباء", "电费"
  ],
  "Amortización de impresora": [
    "Printer depreciation",
    "Amortissement de l’imprimante",
    "Druckerabschreibung",
    "Ammortamento della stampante",
    "Amortyzacja drukarki",
    "استهلاك تكلفة الطابعة", "打印机折旧"
  ],
  "Mantenimiento y recambios": [
    "Maintenance and spare parts",
    "Entretien et pièces de rechange",
    "Wartung und Ersatzteile",
    "Manutenzione e ricambi",
    "Maintenance i spare parts",
    "الصيانة وقطع الغيار", "维护和备件"
  ],
  "Mano de obra y extras": [
    "Labour and extras",
    "Main-d’œuvre et extras",
    "Arbeit und Zusatzkosten",
    "Manodopera e extra",
    "Labour i extras",
    "العمالة والتكاليف الإضافية", "人工及附加费用"
  ],
  "Reserva por fallos": [
    "Failure allowance",
    "Marge pour échecs",
    "Fehlerreserve",
    "Riserva per guasti",
    "Rezerwa na nieudane wydruki",
    "احتياطي الإخفاقات", "故障预留"
  ],
  "Precio total del pedido": [
    "Total order price",
    "Prix total de la commande",
    "Gesamtpreis des Auftrags",
    "Prezzo totale dell’ordine",
    "Łączna cena zamówienia",
    "إجمالي سعر الطلب", "订单总价"
  ],
  "Clientes · Agenda de clientes": [
    "Customers · Customer directory",
    "Clients · Répertoire clients",
    "Kunden · Kundenverzeichnis",
    "Clienti · Rubrica clienti",
    "Klienci · Książka adresowa klientów",
    "العملاء · دليل العملاء", "客户 · 客户名录"
    ],
  "＋ Cliente nuevo": [
    "＋ New customer",
    "＋ Nouveau client",
    "＋ Neuer Kunde",
    "＋ Nuovo cliente",
    "＋ nowy Klient",
    "＋ عميل جديد", "＋ 新客户"
  ],
  "Buscar cliente": [
    "Search customer",
    "Rechercher un client",
    "Kunden suchen",
    "Cerca cliente",
    "Szukaj klienta",
    "البحث عن عميل", "搜索客户"
  ],
  "Nombre / empresa": [
    "Name / company",
    "Nom / entreprise",
    "Name / Unternehmen",
    "Nome / azienda",
    "Nazwa / company",
    "الاسم / الشركة", "姓名 / 公司"
  ],
  "Correo electrónico": [
    "Email address",
    "Adresse e-mail",
    "E-Mail-Adresse",
    "Indirizzo e-mail",
    "Adres e-mail",
    "البريد الإلكتروني", "电子邮件"
  ],
  "Teléfono": [
    "Phone",
    "Téléphone",
    "Telefon",
    "Telefono",
    "Telefon",
    "الهاتف", "电话"
  ],
  "Dirección": [
    "Address",
    "Adresse",
    "Adresse",
    "Indirizzo",
    "Adres",
    "العنوان", "地址"
  ],
  "Ciudad": [
    "City",
    "Ville",
    "Stadt",
    "Città",
    "Miasto",
    "المدينة", "城市"
  ],
  "Guardar cliente": [
    "Save customer",
    "Enregistrer le client",
    "Kunden speichern",
    "Salva cliente",
    "Zapisz Klient",
    "حفظ العميل", "保存客户"
  ],
  "Eliminar cliente": [
    "Delete customer",
    "Supprimer le client",
    "Kunden löschen",
    "Elimina cliente",
    "Usuń Klient",
    "حذف العميل", "删除客户"
  ],
  "Crear factura desde calculadora": [
    "Create invoice from calculator",
    "Créer une facture depuis le calculateur",
    "Rechnung aus dem Rechner erstellen",
    "Crea fattura dal calcolatore",
    "Utwórz Faktura z calculator",
    "إنشاء فاتورة من الحاسبة", "从计算器创建发票"
  ],
  "Facturas guardadas": [
    "Saved invoices",
    "Factures enregistrées",
    "Gespeicherte Rechnungen",
    "Fatture salvate",
    "Zapisane faktury",
    "الفواتير المحفوظة", "已保存的发票"
  ],
  "Material": [
    "Material",
    "Matière",
    "Material",
    "Materiale",
    "Materiał",
    "المادة", "材料"
  ],
  "Color del filamento": [
    "Filament colour",
    "Couleur du filament",
    "Filamentfarbe",
    "Colore del filamento",
    "Kolor filamentu",
    "لون الخيط", "耗材颜色"
  ],
  "Peso inicial (g)": [
    "Initial weight (g)",
    "Poids initial (g)",
    "Anfangsgewicht (g)",
    "Peso iniziale (g)",
    "Waga początkowa (g)",
    "الوزن الأولي (غ)", "初始重量（克）"
  ],
  "Peso restante por bobina (g)": [
    "Remaining weight per spool (g)",
    "Poids restant par bobine (g)",
    "Restgewicht pro Spule (g)",
    "Peso residuo per bobina (g)",
    "Pozostała masa na szpuli (g)",
    "الوزن المتبقي في كل بكرة (غ)", "每卷剩余重量（克）"
  ],
  "Añadir bobina": [
    "Add spool",
    "Ajouter une bobine",
    "Spule hinzufügen",
    "Aggiungi bobina",
    "Dodaj szpulę",
    "إضافة بكرة خيط", "添加线轴"
  ],
  "Exportar bobinas CSV": [
    "Export spools to CSV",
    "Exporter les bobines en CSV",
    "Spulen als CSV exportieren",
    "Esporta bobine in CSV",
    "Eksportuj szpule do CSV",
    "تصدير بكرات الخيوط إلى CSV", "导出线轴 CSV"
  ],
  "Nuevo pedido": [
    "New order",
    "Nouvelle commande",
    "Neuer Auftrag",
    "Nuovo ordine",
    "Nowe zamówienie",
    "طلب جديد", "新建订单"
  ],
  "Producto · tasación o presupuesto guardado": [
    "Product · saved estimate or quote",
    "Produit · estimation ou devis enregistré",
    "Produkt · gespeicherte Kalkulation oder Angebot",
    "Prodotto · stima o preventivo salvato",
    "Produkt · zapisana wycena lub oferta",
    "المنتج · تقدير أو عرض سعر محفوظ", "产品 · 已保存的估价或报价"
    ],
  "Cantidad": [
    "Quantity",
    "Quantité",
    "Menge",
    "Quantità",
    "Ilość",
    "الكمية", "数量"
  ],
  "Entrega prevista": [
    "Expected delivery",
    "Livraison prévue",
    "Voraussichtliche Lieferung",
    "Consegna prevista",
    "Przewidywany termin dostawy",
    "موعد التسليم المتوقع", "预计交付"
  ],
  "Estado": [
    "Status",
    "État",
    "Status",
    "Stato",
    "Stan",
    "الحالة", "状态"
  ],
  "Pendiente": [
    "Pending",
    "En attente",
    "Ausstehend",
    "In attesa",
    "Oczekujące",
    "قيد الانتظار", "待处理"
  ],
  "En impresión": [
    "Printing",
    "En cours d’impression",
    "Im Druck",
    "In stampa",
    "W trakcie drukowania",
    "قيد الطباعة", "打印中"
  ],
  "Listo para entregar": [
    "Ready for delivery",
    "Prêt à livrer",
    "Lieferbereit",
    "Pronto per la consegna",
    "Gotowe do odbioru",
    "جاهز للتسليم", "待交付"
  ],
  "Entregado": [
    "Delivered",
    "Livré",
    "Geliefert",
    "Consegnato",
    "Dostarczono",
    "تم التسليم", "已交付"
  ],
  "Cancelado": [
    "Cancelled",
    "Annulé",
    "Storniert",
    "Annullato",
    "Anulowano",
    "ملغى", "已取消"
  ],
  "Guardar pedido": [
    "Save order",
    "Enregistrer la commande",
    "Auftrag speichern",
    "Salva ordine",
    "Zapisz zamówienie",
    "حفظ الطلب", "保存订单"
  ],
  "Exportar pedidos CSV": [
    "Export orders to CSV",
    "Exporter les commandes en CSV",
    "Aufträge als CSV exportieren",
    "Esporta ordini in CSV",
    "Eksportuj zamówienia do CSV",
    "تصدير الطلبات إلى CSV", "导出订单 CSV"
  ],
  "Presupuesto para cliente": [
    "Customer quote",
    "Devis client",
    "Kundenangebot",
    "Preventivo cliente",
    "Klient Oferta",
    "عرض سعر للعميل", "客户报价单"
  ],
  "Piezas del presupuesto": [
    "Quote items",
    "Articles du devis",
    "Angebotspositionen",
    "Voci del preventivo",
    "Pozycje oferty",
    "عناصر عرض السعر", "报价单项目"
  ],
  "＋ Añadir pieza manual": [
    "＋ Add manual item",
    "＋ Ajouter un article manuel",
    "＋ Position manuell hinzufügen",
    "＋ Aggiungi articolo manuale",
    "＋ Dodaj ręczny item",
    "＋ إضافة قطعة يدويًا", "＋ 手动添加零件"
  ],
  "＋ Añadir pieza de calculadora": [
    "＋ Add calculator item",
    "＋ Ajouter un article du calculateur",
    "＋ Position aus Rechner hinzufügen",
    "＋ Aggiungi articolo dal calcolatore",
    "＋ Dodaj calculator item",
    "＋ إضافة قطعة من الحاسبة", "＋ 从计算器添加零件"
  ],
  "Imprimir presupuesto para cliente": [
    "Print customer quote",
    "Imprimer le devis client",
    "Kundenangebot drucken",
    "Stampa preventivo cliente",
    "Drukuj Klient Oferta",
    "طباعة عرض السعر للعميل", "打印客户报价单"
  ],
  "Presupuestos guardados": [
    "Saved quotes",
    "Devis enregistrés",
    "Gespeicherte Angebote",
    "Preventivi salvati",
    "Zapisane oferty",
    "عروض الأسعار المحفوظة", "已保存的报价单"
  ],
  "Snapmaker U1 · MONITOR": [
    "Snapmaker U1 · MONITOR",
    "Snapmaker U1 · MONITEUR",
    "Snapmaker U1 · MONITOR",
    "Snapmaker U1 · MONITOR",
    "Snapmaker U1 · MONITOR",
    "مراقبة Snapmaker U1", "Snapmaker U1 · 监控"
  ],
  "Conexión": [
    "Connection",
    "Connexion",
    "Verbindung",
    "Connessione",
    "Połączenie",
    "الاتصال", "连接"
  ],
  "Archivo": [
    "File",
    "Fichier",
    "Datei",
    "File",
    "Plik",
    "الملف", "文件"
  ],
  "Progreso": [
    "Progress",
    "Progression",
    "Fortschritt",
    "Avanzamento",
    "Postęp",
    "التقدم", "进度"
  ],
  "Capas": [
    "Layers",
    "Couches",
    "Schichten",
    "Livelli",
    "Warstwy",
    "الطبقات", "层数"
  ],
  "Tiempo": [
    "Time",
    "Temps",
    "Zeit",
    "Tempo",
    "Czas",
    "الوقت", "时间"
  ],
  "Actualizar": [
    "Refresh",
    "Actualiser",
    "Aktualisieren",
    "Aggiorna",
    "Odśwież",
    "تحديث", "刷新"
  ],
  "Registrar como personal": [
    "Record as personal",
    "Enregistrer comme personnel",
    "Als privat erfassen",
    "Registra come personale",
    "Zapisz jako użytek własny",
    "تسجيل كنفقات شخصية", "记为个人支出"
  ],
  "Registrar como pedido": [
    "Record as order",
    "Enregistrer comme commande",
    "Als Auftrag erfassen",
    "Registra come ordine",
    "Zarejestruj jako zamówienie",
    "تسجيل كطلب", "记为订单"
  ],
  "Pedido U1 registrado con el punto 04. Coste de fabricación: {cost}. Venta base sin impuestos: {net}. Impuesto: {tax}. Total cobrado estimado: {gross}. Comisión: {commission}. Beneficio estimado: {profit}.": [
    "U1 order recorded with point 04. Manufacturing cost: {cost}. Base sale excluding tax: {net}. Tax: {tax}. Estimated total charged: {gross}. Commission: {commission}. Estimated profit: {profit}.",
    "Commande U1 enregistrée avec le point 04. Coût de fabrication : {cost}. Vente de base hors taxes : {net}. Taxe : {tax}. Total estimé facturé : {gross}. Commission : {commission}. Bénéfice estimé : {profit}.",
    "U1-Auftrag mit Punkt 04 erfasst. Herstellungskosten: {cost}. Nettobasisverkauf: {net}. Steuer: {tax}. Geschätzter Gesamtbetrag: {gross}. Provision: {commission}. Geschätzter Gewinn: {profit}.",
    "Ordine U1 registrato con il punto 04. Costo di produzione: {cost}. Vendita base al netto delle imposte: {net}. Imposta: {tax}. Totale stimato addebitato: {gross}. Commissione: {commission}. Profitto stimato: {profit}.",
    "Zapisano zamówienie U1 z punktem 04. Koszt produkcji: {cost}. Cena bazowa bez podatku: {net}. Podatek: {tax}. Szacowana kwota do zapłaty: {gross}. Prowizja: {commission}. Szacowany zysk: {profit}.",
    "تم تسجيل طلب U1 باستخدام القسم 04. تكلفة التصنيع: {cost}. سعر البيع الأساسي دون ضرائب: {net}. الضريبة: {tax}. إجمالي المبلغ المتوقع تحصيله: {gross}. العمولة: {commission}. الربح التقديري: {profit}.", "已通过第 04 项登记 U1 订单。制造成本：{cost}。未含税销售基价：{net}。税额：{tax}。预计收款总额：{gross}。佣金：{commission}。预计利润：{profit}。"
    ],
  "Impresión U1 registrada como gasto personal. Coste total de fabricación: {cost}.": [
    "U1 print recorded as a personal expense. Total manufacturing cost: {cost}.",
    "Impression U1 enregistrée comme dépense personnelle. Coût total de fabrication : {cost}.",
    "U1-Druck als persönliche Ausgabe erfasst. Gesamte Herstellungskosten: {cost}.",
    "Stampa U1 registrata come spesa personale. Costo totale di produzione: {cost}.",
    "Druk U1 zapisano jako wydatek własny. Całkowity koszt produkcji: {cost}.",
    "تم تسجيل طباعة U1 كمصروف شخصي. إجمالي تكلفة التصنيع: {cost}.", "U1 打印已登记为个人支出。制造总成本：{cost}。"
    ],
  "Cerrar panel": [
    "Close panel",
    "Fermer le panneau",
    "Bereich schließen",
    "Chiudi pannello",
    "Zamknij panel",
    "إغلاق اللوحة", "关闭面板"
  ],
  "Contabilidad · gastos propios y pedidos": [
    "Accounting · own expenses and orders",
    "Comptabilité · dépenses propres et commandes",
    "Buchhaltung · eigene Ausgaben und Aufträge",
    "Contabilità · spese personali e ordini",
    "Księgowość · wydatki własne i zamówienia",
    "المحاسبة · المصروفات الشخصية والطلبات", "会计 · 个人支出与订单"
    ],
  "Gastos propios": [
    "Own expenses",
    "Dépenses personnelles",
    "Eigene Ausgaben",
    "Spese personali",
    "Wydatki własne",
    "النفقات الشخصية", "个人支出"
  ],
  "Gastos de pedidos": [
    "Order expenses",
    "Dépenses des commandes",
    "Auftragsausgaben",
    "Spese degli ordini",
    "Koszty zamówień",
    "نفقات الطلبات", "订单支出"
  ],
  "Ventas estimadas de pedidos": [
    "Estimated order sales",
    "Ventes estimées des commandes",
    "Geschätzter Auftragsumsatz",
    "Vendite stimate degli ordini",
    "Szacowana sprzedaż zamówień",
    "المبيعات المقدرة للطلبات", "订单预计销售额"
  ],
  "Beneficio estimado de pedidos": [
    "Estimated order profit",
    "Bénéfice estimé des commandes",
    "Geschätzter Auftragsgewinn",
    "Profitto stimato degli ordini",
    "Szacowany zysk z zamówień",
    "الربح التقديري للطلبات", "订单预计利润"
    ],
  "Fecha": [
    "Date",
    "Date",
    "Datum",
    "Data",
    "Data",
    "التاريخ", "日期"
    ],
  "Tipo de movimiento": [
    "Entry type",
    "Type d’opération",
    "Buchungsart",
    "Tipo di movimento",
    "wpis type",
    "نوع الحركة", "交易类型"
    ],
  "Gasto propio": [
    "Own expense",
    "Dépense personnelle",
    "Eigene Ausgabe",
    "Spesa personale",
    "Wydatek własny",
    "نفقة شخصية", "个人支出"
    ],
  "Gasto de pedido": [
    "Order expense",
    "Dépense de commande",
    "Auftragsausgabe",
    "Spesa ordine",
    "Koszt zamówienia",
    "نفقة طلب", "订单支出"
    ],
  "Concepto": [
    "Description",
    "Libellé",
    "Beschreibung",
    "Descrizione",
    "Opis",
    "الوصف", "项目"
    ],
  "Notas / pedido relacionado": [
    "Notes / related order",
    "Notes / commande associée",
    "Notizen / zugehöriger Auftrag",
    "Note / ordine correlato",
    "Uwagi / powiązane zamówienie",
    "ملاحظات / الطلب المرتبط", "备注 / 关联订单"
    ],
  "Guardar movimiento": [
    "Save entry",
    "Enregistrer l’écriture",
    "Buchung speichern",
    "Salva movimento",
    "Zapisz wpis",
    "حفظ الحركة", "保存记录"
    ],
  "Exportar contabilidad CSV": [
    "Export accounting to CSV",
    "Exporter la comptabilité en CSV",
    "Buchhaltung als CSV exportieren",
    "Esporta contabilità in CSV",
    "Eksportuj księgowość do CSV",
    "تصدير المحاسبة إلى CSV", "导出会计 CSV"
    ],
  "Exportar contabilidad PDF": [
    "Export accounting to PDF",
    "Exporter la comptabilité en PDF",
    "Buchhaltung als PDF exportieren",
    "Esporta contabilità in PDF",
    "Eksportuj księgowość do PDF",
    "تصدير المحاسبة إلى PDF", "导出会计 PDF"
    ],
  "🛡️ Base de datos y copias de seguridad": [
    "🛡️ Database and backups",
    "🛡️ Base de données et sauvegardes",
    "🛡️ Datenbank und Sicherungen",
    "🛡️ Database e backup",
    "🛡️ baza danych i backups",
    "🛡️ قاعدة البيانات والنسخ الاحتياطية", "🛡️ 数据库与备份"
    ],
  "Gestiona las copias de la base SQLite de este ordenador. Las copias se validan antes de mostrarse como correctas. Cambiar estos ajustes no borra la base de datos actual.": [
    "Manage backups of this computer’s SQLite database. Backups are validated before being marked as valid. Changing these settings does not delete the current database.",
    "Gérez les sauvegardes de la base SQLite de cet ordinateur. Elles sont validées avant d’être déclarées correctes. Modifier ces réglages ne supprime pas la base actuelle.",
    "Verwalten Sie Sicherungen der SQLite-Datenbank dieses Computers. Sicherungen werden geprüft, bevor sie als gültig angezeigt werden. Diese Einstellungen löschen die aktuelle Datenbank nicht.",
    "Gestisci i backup del database SQLite di questo computer. I backup vengono convalidati prima di essere indicati come corretti. Modificare queste impostazioni non elimina il database attuale.",
    "Zarządzaj kopiami zapasowymi bazy SQLite na tym komputerze. Kopie są sprawdzane przed oznaczeniem ich jako prawidłowe. Zmiana tych ustawień nie usuwa bieżącej bazy danych.",
    "إدارة نسخ قاعدة بيانات SQLite على هذا الكمبيوتر. يتم التحقق من النسخ قبل عرضها على أنها سليمة. لا يؤدي تغيير هذه الإعدادات إلى حذف قاعدة البيانات الحالية.", "管理此电脑上的 SQLite 数据库备份。备份会先经过验证，再显示为有效。更改这些设置不会删除当前数据库。"
    ],
  "10 copias": [
    "10 backups",
    "10 sauvegardes",
    "10 Sicherungen",
    "10 backup",
    "10 kopii zapasowych",
    "10 نسخ احتياطية",
    "10 个备份"
    ],
  "25 copias": [
    "25 backups",
    "25 sauvegardes",
    "25 Sicherungen",
    "25 backup",
    "25 kopii zapasowych",
    "25 نسخة", "25 份备份"
    ],
  "50 copias": [
    "50 backups",
    "50 sauvegardes",
    "50 Sicherungen",
    "50 backup",
    "50 kopii zapasowych",
    "50 نسخة", "50 份备份"
    ],
  "200 copias": [
    "200 backups",
    "200 sauvegardes",
    "200 Sicherungen",
    "200 backup",
    "200 kopii zapasowych",
    "200 نسخة", "200 份备份"
    ],
  "500 copias": [
    "500 backups",
    "500 sauvegardes",
    "500 Sicherungen",
    "500 backup",
    "500 kopii zapasowych",
    "500 نسخة", "500 份备份"
    ],
  "1 minuto": [
    "1 minute",
    "1 minute",
    "1 Minute",
    "1 minuto",
    "1 minuta",
    "دقيقة واحدة", "1 分钟"
    ],
  "5 minutos": [
    "5 minutes",
    "5 minutes",
    "5 Minuten",
    "5 minuti",
    "5 minut",
    "٥ دقائق", "5 分钟"
    ],
  "10 minutos": [
    "10 minutes",
    "10 minutes",
    "10 Minuten",
    "10 minuti",
    "10 minut",
    "١٠ دقائق", "10 分钟"
    ],
  "15 minutos": [
    "15 minutes",
    "15 minutes",
    "15 Minuten",
    "15 minuti",
    "15 minut",
    "١٥ دقيقة", "15 分钟"
    ],
  "30 minutos": [
    "30 minutes",
    "30 minutes",
    "30 Minuten",
    "30 minuti",
    "30 minut",
    "٣٠ دقيقة", "30 分钟"
    ],
  "1 hora": [
    "1 hour",
    "1 heure",
    "1 Stunde",
    "1 ora",
    "1 godzina",
    "ساعة واحدة", "1 小时"
    ],
  "6 horas": [
    "6 hours",
    "6 heures",
    "6 Stunden",
    "6 ore",
    "6 godzin",
    "٦ ساعات", "6 小时"
    ],
  "24 horas": [
    "24 hours",
    "24 heures",
    "24 Stunden",
    "24 ore",
    "24 godziny",
    "٢٤ ساعة", "24 小时"
    ],
  "Copias guardadas": [
    "Saved backups",
    "Sauvegardes enregistrées",
    "Gespeicherte Sicherungen",
    "Backup salvati",
    "Zapisano backups",
    "النسخ الاحتياطية المحفوظة", "已保存的备份"
    ],
  "Integridad SQLite": [
    "SQLite integrity",
    "Intégrité SQLite",
    "SQLite-Integrität",
    "Integrità SQLite",
    "SQLite integralność",
    "سلامة SQLite", "SQLite 完整性"
    ],
  "Última copia": [
    "Last backup",
    "Dernière sauvegarde",
    "Letzte Sicherung",
    "Ultimo backup",
    "Ostatnia kopia",
    "آخر نسخة احتياطية", "最近一次备份"
    ],
  "Realizar una copia automática cada": [
    "Create an automatic backup every",
    "Effectuer une sauvegarde automatique toutes les",
    "Automatische Sicherung alle",
    "Esegui un backup automatico ogni",
    "Twórz kopię automatyczną co",
    "إنشاء نسخة احتياطية تلقائيًا كل", "自动备份间隔"
    ],
  "Número máximo de copias que se conservan": [
    "Maximum number of backups to keep",
    "Nombre maximal de sauvegardes à conserver",
    "Maximale Anzahl aufzubewahrender Sicherungen",
    "Numero massimo di backup da conservare",
    "Maksymalna liczba przechowywanych kopii zapasowych",
    "الحد الأقصى لعدد النسخ المحتفظ بها", "保留备份的最大数量"
    ],
  "Guardar configuración": [
    "Save settings",
    "Enregistrer les paramètres",
    "Einstellungen speichern",
    "Salva configurazione",
    "Zapisz ustawienia",
    "حفظ الإعدادات", "保存设置"
    ],
  "Crear copia ahora": [
    "Create backup now",
    "Créer une sauvegarde maintenant",
    "Jetzt sichern",
    "Crea backup ora",
    "Utwórz kopia zapasowa now",
    "إنشاء نسخة احتياطية الآن", "立即创建备份"
    ],
  "Actualizar estado": [
    "Refresh status",
    "Actualiser l’état",
    "Status aktualisieren",
    "Aggiorna stato",
    "Aktualizuj status",
    "تحديث الحالة", "刷新状态"
    ],
  "Copias de seguridad disponibles": [
    "Available backups",
    "Sauvegardes disponibles",
    "Verfügbare Sicherungen",
    "Backup disponibili",
    "dostępny backups",
    "النسخ الاحتياطية المتاحة", "可用备份"
    ],
  "Todavía no hay copias SQLite.": [
    "There are no SQLite backups yet.",
    "Il n’y a pas encore de sauvegardes SQLite.",
    "Es gibt noch keine SQLite-Sicherungen.",
    "Non ci sono ancora backup SQLite.",
    "Brak SQLite backups yet.",
    "لا توجد نسخ SQLite احتياطية بعد.", "尚无 SQLite 备份。"
    ],
  "Servidor y SQLite comprobados.": [
    "Server and SQLite checked.",
    "Serveur et SQLite vérifiés.",
    "Server und SQLite überprüft.",
    "Server e SQLite verificati.",
    "Server i SQLite checked.",
    "تم التحقق من الخادم وSQLite.", "服务器和 SQLite 已检查。"
    ],
  "🛠 Opciones del programa": [
    "🛠 Program options",
    "🛠 Options du programme",
    "🛠 Programmeinstellungen",
    "🛠 Opzioni del programma",
    "🛠 Opcje programu",
    "🛠 خيارات البرنامج", "🛠 程序选项"
    ],
  "Datos del vendedor": [
    "Seller details",
    "Coordonnées du vendeur",
    "Verkäuferdaten",
    "Dati del venditore",
    "Dane sprzedawcy",
    "بيانات البائع", "卖家信息"
    ],
  "Moneda e impuestos": [
    "Currency and taxes",
    "Devise et taxes",
    "Währung und Steuern",
    "Valuta e imposte",
    "Waluta i podatki",
    "العملة والضرائب", "货币与税费"
    ],
  "Apariencia": [
    "Appearance",
    "Apparence",
    "Darstellung",
    "Aspetto",
    "Wygląd",
    "المظهر", "外观"
    ],
  "Tema visual": [
    "Visual theme",
    "Thème visuel",
    "Visuelles Design",
    "Tema visivo",
    "Motyw wizualny",
    "المظهر المرئي", "界面主题"
    ],
  "Oscuro": [
    "Dark",
    "Sombre",
    "Dunkel",
    "Scuro",
    "Ciemny",
    "داكن", "深色"
    ],
  "Claro": [
    "Light",
    "Clair",
    "Hell",
    "Chiaro",
    "Jasny",
    "فاتح", "浅色"
    ],
  "Guardar apariencia": [
    "Save appearance",
    "Enregistrer l’apparence",
    "Darstellung speichern",
    "Salva aspetto",
    "Zapisz wygląd",
    "حفظ المظهر", "保存外观设置"
    ],
  "Perfiles de impresora · v1.230": [
    "Printer profiles · v1.230",
    "Profils d’imprimante · v1.230",
    "Druckerprofile · v1.230",
    "Profili stampante · v1.230",
    "drukarka profiles · v1.230",
    "ملفات تعريف الطابعة · v1.230",
    "打印机配置文件 · v1.230"
    ],
  "Guardar perfil": [
    "Save profile",
    "Enregistrer le profil",
    "Profil speichern",
    "Salva profilo",
    "Zapisz profil",
    "حفظ ملف التعريف", "保存配置"
    ],
  "Exportar perfiles CSV": [
    "Export profiles to CSV",
    "Exporter les profils en CSV",
    "Profile als CSV exportieren",
    "Esporta profili in CSV",
    "Eksportuj profile do CSV",
    "تصدير ملفات التعريف إلى CSV", "导出配置 CSV"
    ],
  "Exportar copia completa": [
    "Export full backup",
    "Exporter la sauvegarde complète",
    "Vollständige Sicherung exportieren",
    "Esporta backup completo",
    "eksportuj full kopia zapasowa",
    "تصدير نسخة كاملة", "导出完整备份"
    ],
  "Restaurar copia": [
    "Restore backup",
    "Restaurer la sauvegarde",
    "Sicherung wiederherstellen",
    "Ripristina backup",
    "przywróć kopia zapasowa",
    "استعادة نسخة احتياطية", "恢复备份"
    ],
  "No hay perfiles guardados.": [
    "No saved profiles.",
    "Aucun profil enregistré.",
    "Keine gespeicherten Profile.",
    "Nessun profilo salvato.",
    "Brak zapisanych profiles.",
    "لا توجد ملفات تعريف محفوظة.", "没有已保存的配置。"
    ],
  "No hay bobinas registradas.": [
    "No spools recorded.",
    "Aucune bobine enregistrée.",
    "Keine Spulen erfasst.",
    "Nessuna bobina registrata.",
    "Nie zarejestrowano żadnych szpul.",
    "لا توجد بكرات خيوط مسجلة.", "没有登记的线轴。"
    ],
  "No hay pedidos guardados.": [
    "No saved orders.",
    "Aucune commande enregistrée.",
    "Keine gespeicherten Aufträge.",
    "Nessun ordine salvato.",
    "Brak zapisanych zamówień.",
    "لا توجد طلبات محفوظة.", "没有已保存的订单。"
    ],
  "Todavía no hay facturas guardadas.": [
    "There are no saved invoices yet.",
    "Aucune facture n’a encore été enregistrée.",
    "Es wurden noch keine Rechnungen gespeichert.",
    "Non ci sono ancora fatture salvate.",
    "Nie ma jeszcze zapisanych faktur.",
    "لا توجد فواتير محفوظة بعد.", "尚无已保存的发票。"
    ],
  "Todavía no hay movimientos.": [
    "There are no entries yet.",
    "Il n’y a encore aucune écriture.",
    "Es gibt noch keine Buchungen.",
    "Non ci sono ancora movimenti.",
    "Nie ma jeszcze żadnych zapisów.",
    "لا توجد حركات بعد.", "尚无记录。"
    ],
  "Todavía no hay cálculos guardados en SQLite.": [
    "No calculations saved yet.",
    "Aucun calcul enregistré pour le moment.",
    "Noch keine Berechnungen gespeichert.",
    "Ancora nessun calcolo salvato.",
    "No calculations Zapisano yet.",
    "لا توجد حسابات محفوظة في SQLite بعد.", "SQLite 中尚无已保存的计算记录。"
    ],
  "Sin precio de compra": [
    "No purchase price",
    "Aucun prix d’achat",
    "Kein Kaufpreis",
    "Nessun prezzo di acquisto",
    "No purchase Cena",
    "بدون سعر شراء", "无购买价格"
    ],
  "— Seleccionar perfil guardado en el apartado «Perfiles de impresora» —": [
    "— Select a saved profile under “Printer profiles” —",
    "— Sélectionnez un profil enregistré dans « Profils d’imprimante » —",
    "— Gespeichertes Profil unter „Druckerprofile“ auswählen —",
    "— Seleziona un profilo salvato in «Profili stampante» —",
    "— Wybierz a Zapisano profile under “drukarka profiles” —",
    "— اختر ملفًا محفوظًا في قسم «ملفات تعريف الطابعة» —",
    "— 选择“打印机配置文件”部分中保存的配置 —"
    ],
  "Selecciona un perfil guardado en «Perfiles de impresora» para aplicar sus valores de potencia, desgaste y mantenimiento.": [
    "Select a saved profile under “Printer profiles” to apply its power, wear and maintenance values.",
    "Sélectionnez un profil enregistré dans « Profils d’imprimante » pour appliquer ses valeurs de puissance, d’usure et d’entretien.",
    "Wählen Sie unter „Druckerprofile“ ein gespeichertes Profil, um dessen Werte für Leistung, Verschleiß und Wartung zu übernehmen.",
    "Seleziona un profilo salvato in «Profili stampante» per applicare i valori di potenza, usura e manutenzione.",
    "Wybierz zapisany profil w sekcji „Profile drukarek”, aby zastosować ustawienia mocy, zużycia i konserwacji.",
    "اختر ملفًا محفوظًا من «ملفات تعريف الطابعات» لتطبيق قيم الطاقة والاستهلاك والصيانة الخاصة به.", "请从“打印机配置文件”中选择已保存的配置，以应用其功率、损耗和维护参数。"
    ],
  "Pulsa «Calcular precio final» para comprobar la rentabilidad.": [
    "Click “Calculate final price” to check profitability.",
    "Cliquez sur « Calculer le prix final » pour vérifier la rentabilité.",
    "Klicken Sie auf „Endpreis berechnen“, um die Rentabilität zu prüfen.",
    "Premi «Calcola prezzo finale» per verificare la redditività.",
    "Kliknij „Oblicz cenę końcową”, aby sprawdzić rentowność.",
    "اضغط على «حساب السعر النهائي» للتحقق من الربحية.", "点击“计算最终价格”以检查盈利情况。"
    ],
  "El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": [
    "The displayed tax is a configurable estimate. Check the rate that applies to your transaction, country, product and tax status.",
    "La taxe affichée est une estimation configurable. Vérifiez le taux applicable à votre opération, pays, produit et situation fiscale.",
    "Die angezeigte Steuer ist eine Schätzung. Prüfen Sie den für Ihren Vorgang, Ihr Land, Ihr Produkt und Ihren Steuerstatus geltenden Satz.",
    "L’imposta mostrata è una stima configurabile. Verifica l’aliquota applicabile all’operazione, al paese, al prodotto e alla tua situazione fiscale.",
    "Wyświetlony podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej.",
    "الضريبة المعروضة تقدير قابل للتهيئة. تحقق من النسبة المطبقة على معاملتك وبلدك ومنتجك ووضعك الضريبي.",
    "显示的税额为可配置估算值。请核实适用于你的交易、国家、产品和税务状况的税率。"
    ],
  "Resumen del historial": [
    "History summary",
    "Résumé de l’historique",
    "Verlaufsübersicht",
    "Riepilogo cronologia",
    "Historia podsumowanie",
    "ملخص السجل", "历史记录摘要"
    ],
  "Simulador de fallos y reimpresiones": [
    "Failure and reprint simulator",
    "Simulateur d’échecs et de réimpressions",
    "Fehler- und Nachdrucksimulator",
    "Simulatore di errori e ristampe",
    "Failure i reprint simulator",
    "محاكي الأعطال وإعادة الطباعة", "故障与重打印模拟器"
    ],
  "Comparador de precios": [
    "Price comparison",
    "Comparateur de prix",
    "Preisvergleich",
    "Confronto prezzi",
    "Cena comparison",
    "مقارن الأسعار", "价格比较器"
    ],
  "Tasaciones guardadas": [
    "Saved estimates",
    "Estimations enregistrées",
    "Gespeicherte Kalkulationen",
    "Stime salvate",
    "Zapisane wyceny",
    "التقديرات المحفوظة", "已保存的估价"
    ],
  "Borrar historial": [
    "Clear history",
    "Effacer l’historique",
    "Verlauf löschen",
    "Cancella cronologia",
    "Wyczyść historię",
    "مسح السجل", "清除历史记录"
    ],
  "Movimientos y tasaciones contabilizadas": [
    "Accounting entries and recorded estimates",
    "Écritures et estimations comptabilisées",
    "Buchungen und erfasste Kalkulationen",
    "Movimenti e stime contabilizzati",
    "Zapisy księgowe i ujęte wyceny",
    "الحركات والتقديرات المسجلة محاسبيًا", "已入账的交易和估价"
    ],
  "Gestión de clientes": [
    "Customer management",
    "Gestion des clients",
    "Kundenverwaltung",
    "Gestione clienti",
    "Zarządzanie klientami",
    "إدارة العملاء", "客户管理"
    ],
  "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y seguimiento de pedidos.": [
    "Central customer directory. Saved customers can be selected in quotes, invoices and order tracking.",
    "Répertoire central des clients. Les clients enregistrés peuvent être sélectionnés dans les devis, les factures et le suivi des commandes.",
    "Zentrales Kundenverzeichnis. Gespeicherte Kunden können in Angeboten, Rechnungen und der Auftragsverfolgung ausgewählt werden.",
    "Rubrica clienti centrale. I clienti salvati possono essere selezionati in preventivi, fatture e monitoraggio ordini.",
    "Centralna baza klientów. Zapisanych tu klientów można wybierać w ofertach, fakturach i śledzeniu zamówień.",
    "دفتر مركزي للعملاء. يمكن اختيار العملاء المحفوظين هنا من عروض الأسعار والفواتير ومتابعة الطلبات.",
    "客户中央名录。在此保存的客户可在报价单、发票和订单跟踪中选择。"
    ],
  "No hay perfiles guardados": [
    "No saved profiles",
    "Aucun profil enregistré",
    "Keine Profile gespeichert",
    "Nessun profilo salvato",
    "Brak zapisanych profili",
    "لا توجد ملفات تعريف محفوظة", "没有已保存的配置文件"
    ],
  "Formato del número": [
    "Number format",
    "Format du numéro",
    "Nummernformat",
    "Formato numero",
    "Format numeru",
    "تنسيق الرقم", "编号格式"
    ],
  "Número de factura (editable)": [
    "Invoice number (editable)",
    "Numéro de facture (modifiable)",
    "Rechnungsnummer (bearbeitbar)",
    "Numero fattura (modificabile)",
    "Numer faktury (można edytować)",
    "رقم الفاتورة (قابل للتعديل)", "发票编号（可编辑）"
    ],
  "Vencimiento / condiciones de pago": [
    "Due date / payment terms",
    "Échéance / conditions de paiement",
    "Fälligkeit / Zahlungsbedingungen",
    "Scadenza / condizioni di pagamento",
    "Termin płatności / warunki płatności",
    "تاريخ الاستحقاق / شروط الدفع", "到期日 / 付款条件"
    ],
  "Facturas · Gestión y archivo": [
    "Invoices · Management and archive",
    "Factures · Gestion et archivage",
    "Rechnungen · Verwaltung und Archiv",
    "Fatture · Gestione e archivio",
    "Faktury · Zarządzanie i archiwum",
    "الفواتير · الإدارة والأرشفة", "发票 · 管理与归档"
    ],
  "Presupuestos · Clientes y documentos": [
    "Quotes · Customers and documents",
    "Devis · Clients et documents",
    "Angebote · Kunden und Dokumente",
    "Preventivi · Clienti e documenti",
    "Oferty · Klienci i dokumenty",
    "عروض الأسعار · العملاء والمستندات", "报价单 · 客户与文档"
    ],
  "💾 Copias de seguridad": [
    "💾 Backups",
    "💾 Sauvegardes",
    "💾 Sicherungen",
    "💾 Backup",
    "💾 Kopie zapasowe",
    "💾 النسخ الاحتياطية", "💾 备份"
    ],
  "🎨 Apariencia": [
    "🎨 Appearance",
    "🎨 Apparence",
    "🎨 Darstellung",
    "🎨 Aspetto",
    "🎨 Wygląd",
    "🎨 المظهر", "🎨 外观"
    ],
  "Conexión con la Snapmaker U1": [
    "Snapmaker U1 connection",
    "Connexion à la Snapmaker U1",
    "Verbindung zur Snapmaker U1",
    "Connessione Snapmaker U1",
    "Połączenie z drukarką Snapmaker U1",
    "الاتصال بطابعة Snapmaker U1", "连接 Snapmaker U1"
    ],
  "Buscar automáticamente": [
    "Search automatically",
    "Rechercher automatiquement",
    "Automatisch suchen",
    "Cerca automaticamente",
    "Szukaj automatycznie",
    "البحث تلقائيًا", "自动搜索"
    ],
  "Probar conexión": [
    "Test connection",
    "Tester la connexion",
    "Verbindung testen",
    "Verifica connessione",
    "Przetestuj połączenie",
    "اختبار الاتصال", "测试连接"
    ],
  "Actualizar resumen": [
    "Refresh summary",
    "Actualiser le résumé",
    "Übersicht aktualisieren",
    "Aggiorna riepilogo",
    "Aktualizuj podsumowanie",
    "تحديث الملخص", "刷新摘要"
    ],
  "Estimar coste esperado": [
    "Estimate expected cost",
    "Estimer le coût attendu",
    "Erwartete Kosten schätzen",
    "Stima il costo previsto",
    "Oszacuj oczekiwany koszt",
    "تقدير التكلفة المتوقعة", "估算预期成本"
    ],
  "Usar precio A": [
    "Use price A",
    "Utiliser le prix A",
    "Preis A verwenden",
    "Usa prezzo A",
    "Użyj ceny A",
    "استخدام السعر A", "使用价格 A"
    ],
  "Usar precio B": [
    "Use price B",
    "Utiliser le prix B",
    "Preis B verwenden",
    "Usa prezzo B",
    "Użyj ceny B",
    "استخدام السعر B", "使用价格 B"
    ],
  "Usar precio C": [
    "Use price C",
    "Utiliser le prix C",
    "Preis C verwenden",
    "Usa prezzo C",
    "Użyj ceny C",
    "استخدام السعر C", "使用价格 C"
    ],
  "🏠 Inicio": [
    "🏠 Home",
    "🏠 Accueil",
    "🏠 Startseite",
    "🏠 Inizio",
    "🏠 Strona główna",
    "🏠 الرئيسية",
    "🏠 首页"
    ],
  "🛠 Opciones": [
    "🛠 Settings",
    "🛠 Options",
    "🛠 Einstellungen",
    "🛠 Opzioni",
    "🛠 Ustawienia",
    "🛠 الإعدادات", "🛠 设置"
    ],
  "👥 Clientes": [
    "👥 Customers",
    "👥 Clients",
    "👥 Kunden",
    "👥 Clienti",
    "👥 Klienci",
    "👥 العملاء", "👥 客户"
    ],
  "📄 Presupuestos": [
    "📄 Quotes",
    "📄 Devis",
    "📄 Angebote",
    "📄 Preventivi",
    "📄 Oferty",
    "📄 عروض الأسعار", "📄 报价单"
    ],
  "📦 Seguimiento de pedidos": [
    "📦 Order tracking",
    "📦 Suivi des commandes",
    "📦 Auftragsverfolgung",
    "📦 Monitoraggio ordini",
    "📦 Śledzenie zamówień",
    "📦 متابعة الطلبات", "📦 订单跟踪"
    ],
  "🧾 Facturas": [
    "🧾 Invoices",
    "🧾 Factures",
    "🧾 Rechnungen",
    "🧾 Fatture",
    "🧾 Faktury",
    "🧾 الفواتير", "🧾 发票"
    ],
  "🧵 Inventario de bobinas": [
    "🧵 Spool inventory",
    "🧵 Inventaire des bobines",
    "🧵 Spulenbestand",
    "🧵 Inventario bobine",
    "🧵 Magazyn szpul",
    "🧵 مخزون بكرات الخيوط", "🧵 线轴库存"
    ],
  "💶 Contabilidad": [
    "💶 Accounting",
    "💶 Comptabilité",
    "💶 Buchhaltung",
    "💶 Contabilità",
    "💶 księgowość",
    "💶 المحاسبة", "💶 会计"
    ],
  "＋ Cargar G-code laminado": [
    "＋ Load sliced G-code",
    "＋ Charger le G-code tranché",
    "＋ Geslicten G-Code laden",
    "＋ Carica G-code elaborato",
    "＋ Wczytaj przygotowany G-code",
    "＋ تحميل ملف G-code بعد التقطيع", "＋ 上传切片后的 G-code"
    ],
  "▣ Guardar tasación": [
    "▣ Save estimate",
    "▣ Enregistrer l’estimation",
    "▣ Kalkulation speichern",
    "▣ Salva stima",
    "▣ Zapisz Wycena",
    "▣ حفظ التقدير", "▣ 保存估价"
    ],
  "▤ Guardar presupuesto": [
    "▤ Save quote",
    "▤ Enregistrer le devis",
    "▤ Angebot speichern",
    "▤ Salva preventivo",
    "▤ Zapisz Oferta",
    "▤ حفظ عرض السعر", "▤ 保存报价"
    ],
  "✓ Calcular precio final": [
    "✓ Calculate final price",
    "✓ Calculer le prix final",
    "✓ Endpreis berechnen",
    "✓ Calcola prezzo finale",
    "✓ Calculate final Cena",
    "✓ حساب السعر النهائي", "✓ 计算最终售价"
    ],
  "📦 Realizar pedido": [
    "📦 Create order",
    "📦 Créer la commande",
    "📦 Auftrag anlegen",
    "📦 Crea ordine",
    "📦 Utwórz zamówienie",
    "📦 إنشاء طلب", "📦 创建订单"
    ],
  "Cliente / referencia del pedido (opcional)": [
    "Customer / order reference (optional)",
    "Client / référence de commande (facultatif)",
    "Kunde / Auftragsreferenz (optional)",
    "Cliente / riferimento ordine (facoltativo)",
    "Klient / numer zamówienia (opcjonalnie)",
    "العميل / مرجع الطلب (اختياري)", "客户 / 订单参考（可选）"
    ],
  "Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.": [
    "Used when saving the estimate to classify it in Accounting. Personal jobs do not create sales or commercial profit.",
    "Utilisé lors de l’enregistrement de l’estimation pour la classer en comptabilité. Les impressions personnelles ne créent ni ventes ni bénéfices commerciaux.",
    "Wird beim Speichern der Kalkulation zur Zuordnung in der Buchhaltung verwendet. Private Drucke erzeugen keine Verkäufe oder Handelsgewinne.",
    "Usato al salvataggio della stima per classificarla in Contabilità. Le stampe personali non generano vendite né profitti commerciali.",
    "Opcja służy do klasyfikowania wyceny w Księgowości podczas jej zapisywania. Wydruki na własny użytek nie generują sprzedaży ani zysku handlowego.",
    "يُستخدم عند حفظ التقدير لتصنيفه في المحاسبة. الخيار الشخصي لا ينشئ مبيعات أو أرباحًا تجارية.",
    "保存估价时使用此项以便在会计中分类。个人打印不会产生销售额或商业利润。"
    ],
  "Carga el archivo G-code que has exportado desde Snapmaker Orca. También puedes rellenar los datos manualmente.": [
    "Load the G-code file exported from Snapmaker Orca. You can also enter the data manually.",
    "Chargez le fichier G-code exporté depuis Snapmaker Orca. Vous pouvez également saisir les données manuellement.",
    "Laden Sie die aus Snapmaker Orca exportierte G-Code-Datei. Sie können die Daten auch manuell eingeben.",
    "Carica il file G-code esportato da Snapmaker Orca. Puoi anche inserire i dati manualmente.",
    "Wczytaj plik G-code wyeksportowany z programu Snapmaker Orca. Możesz też wprowadzić dane ręcznie.",
    "حمّل ملف G-code الذي صدّرته من Snapmaker Orca. ويمكنك أيضًا إدخال البيانات يدويًا.", "上传从 Snapmaker Orca 导出的 G-code 文件。你也可以手动填写数据。"
    ],
  "El archivo se procesa en este navegador y no se envía a ningún servidor.": [
    "The file is processed in this browser and is not sent to any server.",
    "Le fichier est traité dans ce navigateur et n’est envoyé à aucun serveur.",
    "Die Datei wird in diesem Browser verarbeitet und an keinen Server gesendet.",
    "Il file viene elaborato in questo browser e non viene inviato ad alcun server.",
    "Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.",
    "تتم معالجة الملف في هذا المتصفح ولا يتم إرساله إلى أي خادم.", "文件仅在此浏览器中处理，不会发送到任何服务器。"
    ],
  "La imagen se guarda comprimida en el borrador y en el historial local.": [
    "The image is stored compressed in the draft and local history.",
    "L’image est enregistrée compressée dans le brouillon et l’historique local.",
    "Das Bild wird komprimiert im Entwurf und im lokalen Verlauf gespeichert.",
    "L’immagine viene salvata compressa nella bozza e nella cronologia locale.",
    "Obraz jest zapisywany w postaci skompresowanej w wersji roboczej i lokalnej historii.",
    "تُحفظ الصورة مضغوطة في المسودة وفي السجل المحلي.", "图片会压缩后保存到草稿和本地历史记录中。"
    ],
  "€/kg": [
    "€/kg",
    "€/kg",
    "€/kg",
    "€/kg",
    "€/kg",
    "يورو/كغ",
    "欧元/千克"
    ],
  "Los gramos por filamento incluyen el material de la pieza, soportes, torre de limpieza y purgas según las estadísticas del laminador. No se añade una cantidad extra para evitar duplicar el coste.": [
    "Grams per filament include the part, supports, purge tower and purges according to slicer statistics. No extra amount is added, to avoid double-counting costs.",
    "Les grammes par filament incluent la pièce, les supports, la tour de purge et les purges selon les statistiques du trancheur. Aucune quantité supplémentaire n’est ajoutée afin d’éviter un double comptage.",
    "Die Grammangabe je Filament umfasst Teil, Stützen, Reinigungsturm und Spülungen laut Slicer-Statistik. Es wird keine zusätzliche Menge addiert, um doppelte Kosten zu vermeiden.",
    "I grammi per filamento includono pezzo, supporti, torre di spurgo e spurghi secondo le statistiche dello slicer. Non viene aggiunta una quantità extra per evitare di duplicare i costi.",
    "Gramy filamentu obejmują część, podpory, wieżę czyszczącą i przepłukiwanie według statystyk slicera. Nie dodaje się dodatkowej ilości, aby uniknąć podwójnego naliczania kosztów.",
    "تشمل غرامات كل خيط مادة القطعة والدعامات وبرج التنظيف وعمليات التطهير وفقًا لإحصاءات برنامج التقطيع. لا تتم إضافة كمية إضافية لتجنب احتساب التكلفة مرتين.", "每种耗材的克数根据切片软件统计，包含模型、支撑、擦拭塔和冲洗用料。不会额外增加用量，以免重复计算成本。"
    ],
  "Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.": [
    "Snapmaker U1: estimate of EUR 160 per 1,000 h (EUR 0.16/h); editable and not guaranteed by the manufacturer.",
    "Snapmaker U1 : estimation de 160 EUR pour 1 000 h (0,16 EUR/h) ; modifiable et non garantie par le fabricant.",
    "Snapmaker U1: Schätzung 160 EUR pro 1.000 h (0,16 EUR/h); editierbar und nicht vom Hersteller garantiert.",
    "Snapmaker U1: stima di 160 EUR ogni 1.000 h (0,16 EUR/h); modificabile e non garantita dal produttore.",
    "Snapmaker U1: szacunkowy koszt 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.",
    "Snapmaker U1: تقدير 160 يورو لكل 1,000 ساعة (0.16 يورو/ساعة)؛ قابل للتعديل وغير مضمون من الشركة المصنعة.",
    "Snapmaker U1：估算每 1,000 小时 160 欧元（0.16 欧元/小时）；可编辑，非制造商保证值。"
    ],
  "Retirada de soportes, lijado y limpieza.": [
    "Support removal, sanding and cleaning.",
    "Retrait des supports, ponçage et nettoyage.",
    "Entfernen von Stützen, Schleifen und Reinigen.",
    "Rimozione supporti, levigatura e pulizia.",
    "Usuwanie podpór, szlifowanie i czyszczenie.",
    "إزالة الدعامات والصنفرة والتنظيف。", "拆除支撑、打磨和清洁。"
    ],
  "Pintura / acabados: coste monetario por unidad (": [
    "Painting / finishing: monetary cost per unit (",
    "Peinture / finition : coût par unité (",
    "Lackierung / Endbearbeitung: Kosten pro Einheit (",
    "Verniciatura / finiture: costo monetario per unità (",
    "Malowanie / wykończenie: koszt na sztukę (",
    "الطلاء / التشطيبات: التكلفة المالية لكل وحدة (",
    "涂装／表面处理：每件成本（"
    ],
  "Introduce dinero por pieza, no minutos. El tiempo se añade en posprocesado o montaje.": [
    "Enter a monetary amount per part, not minutes. Time is added under post-processing or assembly.",
    "Saisissez un montant par pièce, pas des minutes. Le temps est ajouté au post-traitement ou au montage.",
    "Geben Sie einen Geldbetrag pro Teil ein, keine Minuten. Zeit wird bei Nachbearbeitung oder Montage hinzugefügt.",
    "Inserisci un importo per pezzo, non minuti. Il tempo si aggiunge in post-lavorazione o assemblaggio.",
    "Wpisz koszt pieniężny na sztukę, a nie liczbę minut. Czas uwzględnij w obróbce końcowej lub montażu.",
    "أدخل مبلغًا لكل قطعة، وليس عدد الدقائق. يُضاف الوقت ضمن المعالجة اللاحقة أو التجميع.", "请输入每件产品的金额，而不是分钟数。所需时间应计入后处理或组装。"
    ],
  "Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.": [
    "When you finish reviewing the part details, calculate the recommended price and profitability.",
    "Après avoir vérifié les données de la pièce, calculez le prix conseillé et la rentabilité.",
    "Wenn Sie die Teiledaten geprüft haben, berechnen Sie den empfohlenen Preis und die Rentabilität.",
    "Dopo aver controllato i dati del pezzo, calcola il prezzo consigliato e la redditività.",
    "Po sprawdzeniu danych części oblicz zalecaną cenę i rentowność.",
    "بعد الانتهاء من مراجعة بيانات القطعة، احسب السعر الموصى به والربحية.", "检查完零件数据后，计算建议售价和盈利能力。"
    ],
  "El precio introducido siempre es la base sin impuestos. El desglose se actualiza al cambiar el precio o el porcentaje, sin pulsar el botón de cálculo.": [
    "The entered price is always the pre-tax base. The breakdown updates when the price or rate changes, without pressing the calculate button.",
    "Le prix saisi correspond toujours à la base hors taxes. Le détail est actualisé lorsque le prix ou le taux change, sans cliquer sur le bouton de calcul.",
    "Der eingegebene Preis ist immer der Nettobetrag. Die Aufschlüsselung wird bei Änderung des Preises oder Steuersatzes ohne Klick auf die Berechnungsschaltfläche aktualisiert.",
    "Il prezzo inserito è sempre la base al netto delle imposte. Il dettaglio si aggiorna quando cambia il prezzo o l’aliquota, senza premere il pulsante di calcolo.",
    "Wprowadzona cena zawsze oznacza kwotę bez podatku. Zestawienie aktualizuje się po zmianie ceny lub stawki, bez klikania przycisku obliczania.",
    "السعر المُدخل هو دائمًا السعر الأساسي قبل الضرائب. يتم تحديث التفاصيل عند تغيير السعر أو النسبة دون الحاجة إلى الضغط على زر الحساب.", "输入的价格始终为未含税基价。更改价格或百分比时，明细会自动更新，无需点击计算按钮。"
    ],
  "El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.": [
    "Profit is calculated on the sale price before tax; collected tax is shown separately. Commission is calculated on the total charged. Changing currency does not convert amounts; enter costs in the selected currency.",
    "Le bénéfice est calculé sur le prix hors taxes ; la taxe perçue est affichée séparément. La commission porte sur le montant total facturé. Le changement de devise ne convertit pas les montants : saisissez les coûts dans la devise choisie.",
    "Der Gewinn wird auf Basis des Verkaufspreises ohne Steuer berechnet; die Steuer wird separat angezeigt. Die Provision wird auf den Gesamtbetrag berechnet. Ein Währungswechsel rechnet Beträge nicht um; geben Sie Kosten in der ausgewählten Währung ein.",
    "Il profitto si calcola sul prezzo di vendita al netto delle imposte; le imposte riscosse sono mostrate a parte. La commissione si calcola sul totale addebitato. Cambiare valuta non converte gli importi: inserisci i costi nella valuta selezionata.",
    "Zysk jest obliczany od ceny sprzedaży bez podatku, a pobrany podatek wykazywany jest osobno. Prowizja jest naliczana od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — wprowadź koszty w wybranej walucie.",
    "يُحسب الربح على أساس المبيعات دون الضرائب، وتُعرض الضريبة المحصلة بشكل منفصل. تُحسب العمولة على إجمالي المبلغ المحصل. تغيير العملة لا يحوّل المبالغ باستخدام سعر صرف؛ أدخل التكاليف بالعملة المحددة.", "利润按未含税销售额计算，收取的税款单独显示。佣金按实际收款总额计算。更改货币不会按汇率自动换算金额，请使用所选货币输入成本。"
    ],
  "El redondeo nunca reduce el precio recomendado ni el porcentaje de beneficio objetivo.": [
    "Rounding never reduces the recommended price or the target profit percentage.",
    "L’arrondi ne réduit jamais le prix recommandé ni le pourcentage de bénéfice cible.",
    "Die Rundung senkt weder den empfohlenen Preis noch den angestrebten Gewinnprozentsatz.",
    "L’arrotondamento non riduce mai il prezzo consigliato né la percentuale di profitto obiettivo.",
    "Zaokrąglenie nigdy nie obniża zalecanej ceny ani docelowego procentu zysku.",
    "لا يؤدي التقريب مطلقًا إلى خفض السعر الموصى به أو نسبة الربح المستهدفة.", "取整绝不会降低建议售价或目标利润率。"
    ],
  "Precio de referencia: primero el precio de lanzamiento documentado y, si no, el precio actual de venta; es editable y no indica lo pagado. Los importes cargados están en EUR; para fuentes USD se aplicó el cambio BCE del 21-10-2026 (1 EUR = 1,1234 USD). Mantenimiento es una estimación presupuestaria por complejidad (cesta de repuestos por 1.000 h), no una tarifa del fabricante; puedes editarla. Para el precio sin fuente, el campo sigue vacío. Vida útil inicial de 10.000 h editable. Electricidad, amortización y mantenimiento se calculan por separado.": [
    "Reference price: documented launch price where available, otherwise current selling price; editable and not the amount paid. Loaded amounts are in EUR; USD sources use the ECB rate from 21 Oct 2026 (EUR 1 = USD 1.1234). Maintenance is a complexity-based budget estimate (spare-parts basket per 1,000 h), not a manufacturer rate; it is editable. Price fields without a source are left blank. Initial service life is 10,000 h and editable. Electricity, depreciation and maintenance are calculated separately.",
    "Prix de référence : prix de lancement documenté si disponible, sinon prix de vente actuel ; modifiable et différent du montant payé. Les montants sont en EUR ; les sources en USD utilisent le taux BCE du 21/10/2026 (1 EUR = 1,1234 USD). L’entretien est une estimation budgétaire selon la complexité (panier de pièces pour 1 000 h), pas un tarif du fabricant ; il est modifiable. Sans source de prix, le champ reste vide. Durée de vie initiale de 10 000 h, modifiable. Électricité, amortissement et entretien sont calculés séparément.",
    "Referenzpreis: dokumentierter Einführungspreis, sonst aktueller Verkaufspreis; editierbar und nicht zwingend der bezahlte Betrag. Beträge sind in EUR; für USD-Quellen gilt der EZB-Kurs vom 21.10.2026 (1 EUR = 1,1234 USD). Wartung ist eine komplexitätsbasierte Budgetschätzung (Ersatzteilkorb je 1.000 h), kein Herstellertarif; sie ist editierbar. Ohne Preisquelle bleibt das Feld leer. Anfangslebensdauer 10.000 h, editierbar. Strom, Abschreibung und Wartung werden getrennt berechnet.",
    "Prezzo di riferimento: prezzo di lancio documentato se disponibile, altrimenti prezzo di vendita corrente; modificabile e non necessariamente quanto pagato. Importi caricati in EUR; per fonti USD si usa il cambio BCE del 21/10/2026 (1 EUR = 1,1234 USD). La manutenzione è una stima di budget basata sulla complessità (cesto ricambi ogni 1.000 h), non una tariffa del produttore; è modificabile. Senza fonte prezzo, il campo resta vuoto. Vita utile iniziale 10.000 h, modificabile. Elettricità, ammortamento e manutenzione sono calcolati separatamente.",
    "Cena referencyjna: najpierw udokumentowana cena początkowa, a jeśli jej brak — aktualna cena sprzedaży; można ją edytować i nie oznacza kwoty zapłaconej za urządzenie. Zaimportowane kwoty podano w EUR; dla źródeł w USD zastosowano kurs EBC z 21.10.2026 (1 EUR = 1,1234 USD). Koszt konserwacji jest szacunkiem budżetowym zależnym od złożoności (zestaw części zamiennych na 1000 godzin), a nie stawką producenta; można go edytować. Jeśli brak źródła ceny, pole pozostaje puste. Początkowa żywotność wynosi 10 000 godzin i można ją edytować. Koszty energii elektrycznej, amortyzacji i konserwacji są obliczane oddzielnie.",
    "السعر المرجعي: يُستخدم أولًا سعر الإطلاق الموثق، وإلا فسعر البيع الحالي؛ ويمكن تعديله ولا يمثل المبلغ المدفوع. المبالغ باليورو؛ وللمصادر بالدولار استُخدم سعر صرف البنك المركزي الأوروبي بتاريخ 21-10-2026 (1 يورو = 1.1234 دولار). الصيانة تقدير ميزانية حسب التعقيد (مجموعة قطع غيار لكل 1,000 ساعة)، وليست تعرفة الشركة المصنعة، ويمكن تعديلها. عند عدم توفر مصدر للسعر يبقى الحقل فارغًا. العمر التشغيلي الأولي 10,000 ساعة وقابل للتعديل. تُحسب الكهرباء والإهلاك والصيانة بشكل منفصل.",
    "参考价格：优先采用有记录的首发价格，否则采用当前售价；该数值可编辑，并不代表实际支付金额。金额以欧元计；美元来源采用 2026-10-21 欧洲央行汇率（1 欧元 = 1.1234 美元）。维护费用按复杂程度估算（每 1,000 小时备件组合），并非制造商收费标准，可编辑。没有价格来源时字段保持空白。初始使用寿命为 10,000 小时，可编辑。电费、折旧和维护费分别计算。"
    ],
  "Precio de referencia de venta / compra (EUR)": [
    "Reference selling / purchase price (EUR)",
    "Prix de vente / achat de référence (EUR)",
    "Referenz-Verkaufs-/Kaufpreis (EUR)",
    "Prezzo di vendita / acquisto di riferimento (EUR)",
    "Referencyjna cena sprzedaży / zakupu (EUR)",
    "السعر المرجعي للبيع / الشراء (EUR)", "销售／采购参考价格（EUR）"
    ],
  "Vida útil estimada (horas)": [
    "Estimated service life (hours)",
    "Durée de vie estimée (heures)",
    "Geschätzte Lebensdauer (Stunden)",
    "Vita utile stimata (ore)",
    "Szacowana żywotność (godziny)",
    "العمر التشغيلي المقدّر (بالساعات)", "预计使用寿命（小时）"
    ],
  "Amortización por hora (calculada)": [
    "Depreciation per hour (calculated)",
    "Amortissement horaire (calculé)",
    "Abschreibung pro Stunde (berechnet)",
    "Ammortamento orario (calcolato)",
    "Amortyzacja na godzinę (obliczona)",
    "الإهلاك لكل ساعة (محسوب)", "每小时折旧（计算值）"
    ],
  "Estimación Snapmaker U1: 160 EUR de cesta presupuestaria / 1.000 h. Editable.": [
    "Snapmaker U1 estimate: EUR 160 spare-parts budget per 1,000 h. Editable.",
    "Estimation Snapmaker U1 : budget pièces de 160 EUR par 1 000 h. Modifiable.",
    "Schätzung für Snapmaker U1: Ersatzteilbudget 160 EUR pro 1.000 h. Bearbeitbar.",
    "Stima Snapmaker U1: budget ricambi di 160 EUR ogni 1.000 h. Modificabile.",
    "Snapmaker U1 Wycena: EUR 160 spare-parts budget na 1,000 h. Editable.",
    "تقدير Snapmaker U1: مخصص ميزانية بقيمة 160 يورو لكل 1,000 ساعة. قابل للتعديل.",
    "Snapmaker U1 估算：每 1,000 小时预算 160 欧元。可编辑。"
    ],
  "Antes de crear la factura: selecciona el cliente": [
    "Before creating the invoice: select the customer",
    "Avant de créer la facture : sélectionnez le client",
    "Vor dem Erstellen der Rechnung: Kunden auswählen",
    "Prima di creare la fattura: seleziona il cliente",
    "Przed utworzeniem faktury wybierz klienta.",
    "قبل إنشاء الفاتورة: اختر العميل", "创建发票前：请选择客户"
    ],
  "Cancelar": [
    "Cancel",
    "Annuler",
    "Abbrechen",
    "Annulla",
    "Anuluj",
    "إلغاء", "取消"
    ],
  "Todas": [
    "All",
    "Toutes",
    "Alle",
    "Tutte",
    "Wszystkie",
    "الكل", "全部"
    ],
  "Material, color y marca": [
    "Material, colour and brand",
    "Matériau, couleur et marque",
    "Material, Farbe und Marke",
    "Materiale, colore e marca",
    "Materiał, kolor i marka",
    "المادة واللون والعلامة التجارية",
    "材料、颜色和品牌"
    ],
  "Color (A–Z)": [
    "Colour (A–Z)",
    "Couleur (A–Z)",
    "Farbe (A–Z)",
    "Colore (A–Z)",
    "Kolor (A–Z)",
    "اللون (A–Z)", "颜色（A–Z）"
    ],
  "Mayor cantidad de bobinas": [
    "Largest number of spools",
    "Plus grand nombre de bobines",
    "Größte Spulenanzahl",
    "Maggior numero di bobine",
    "Największa liczba szpul",
    "أكبر عدد من البكرات", "线轴数量从多到少"
    ],
  "Menor cantidad de bobinas": [
    "Smallest number of spools",
    "Plus petit nombre de bobines",
    "Kleinste Spulenanzahl",
    "Minor numero di bobine",
    "Najmniejsza liczba szpul",
    "أقل عدد من البكرات", "线轴数量从少到多"
    ],
  "El tema se aplica a esta página. Algunos paneles integrados pueden conservar sus colores propios.": [
    "The theme applies to this page. Some embedded panels may retain their own colours.",
    "Le thème s’applique à cette page. Certains panneaux intégrés peuvent conserver leurs propres couleurs.",
    "Das Design gilt für diese Seite. Einige integrierte Bereiche können ihre eigenen Farben beibehalten.",
    "Il tema si applica a questa pagina. Alcuni pannelli integrati possono mantenere i propri colori.",
    "Motyw dotyczy tej strony. Niektóre osadzone panele mogą zachować własne kolory.",
    "يُطبّق المظهر على هذه الصفحة. قد تحتفظ بعض اللوحات المدمجة بألوانها الخاصة.",
    "主题将应用于此页面。部分嵌入式面板可能保留自身配色。"
    ],
  "Importe cobrado": [
    "Amount collected",
    "Montant encaissé",
    "Eingenommener Betrag",
    "Importo incassato",
    "Otrzymana kwota",
    "المبلغ المحصّل", "已收金额"
    ],
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):": [
    "Estimated TOTAL manufacturing cost for “{file}” (not filament only). Breakdown: {breakdown}. {context}TOTAL amount to charge the customer (including tax):",
    "Coût TOTAL estimé de fabrication de « {file} » (pas seulement le filament). Détail : {breakdown}. {context}Montant TOTAL à facturer au client (taxes incluses) :",
    "Geschätzte HERSTELLUNGSKOSTEN für „{file}“ (nicht nur Filament). Aufschlüsselung: {breakdown}. {context}GESAMTBETRAG für den Kunden (einschließlich Steuer):",
    "Costo TOTALE stimato di produzione di «{file}» (non solo filamento). Dettaglio: {breakdown}. {context}Importo TOTALE da addebitare al cliente (tasse incluse):",
    "Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):",
    "إجمالي تكلفة تصنيع «{file}» المقدّرة (وليس تكلفة الخيوط فقط). التفاصيل: {breakdown}. {context}الإجمالي الذي سيتم تحصيله من العميل (شامل الضرائب):",
    "文件 «{file}» 的预计制造总成本（不仅是耗材成本）。明细：{breakdown}。{context}向客户收取的总金额（含税）："
    ],
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:": [
    "Estimated TOTAL manufacturing cost for “{file}” (not filament only). Breakdown: {breakdown}. {context}Check the print time and adjust the manufacturing cost if needed:",
    "Coût TOTAL estimé de fabrication de « {file} » (pas seulement le filament). Détail : {breakdown}. {context}Vérifiez la durée d’impression et corrigez le coût de fabrication si nécessaire :",
    "Geschätzte HERSTELLUNGSKOSTEN für „{file}“ (nicht nur Filament). Aufschlüsselung: {breakdown}. {context}Prüfen Sie die Druckzeit und korrigieren Sie bei Bedarf die Herstellungskosten:",
    "Costo TOTALE stimato di produzione di «{file}» (non solo filamento). Dettaglio: {breakdown}. {context}Controlla il tempo di stampa e correggi il costo di produzione se necessario:",
    "Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby popraw koszt wykonania:",
    "إجمالي تكلفة التصنيع المقدّرة للملف «{file}» (وليس تكلفة الخيط فقط). التفاصيل: {breakdown}. {context}راجع وقت الطباعة وصحّح تكلفة التصنيع إذا لزم الأمر:", "文件 «{file}» 的预计制造总成本（不仅是耗材成本）。明细：{breakdown}。{context}请检查打印时间，并在必要时修正制造成本："
    ],
  "Versión 1.325 · SQLITE · HTML ÚNICO": [
    "Version 1.321 · SQLITE · HEALTH & SECURITY",
    "Version 1.325 · SQLITE · HTML UNIQUE",
    "Version 1.325 · SQLITE · EINE HTML-DATEI",
    "Versione 1.318 · SQLITE · DIAGNOSTICA E SICUREZZA",
    "Version 1.321 · SQLite · HEALTH & SECURITY",
    "الإصدار 1.325 · SQLITE · ملف HTML واحد", "版本 1.325 · SQLITE · 单一 HTML 文件"
    ],
  "Print Cost": [
    "Print Cost",
    "Print Cost",
    "Print Cost",
    "Print Cost",
    "Drukuj Koszt",
    "تكلفة الطباعة", "打印成本"
    ],
  "& Profit": [
    "& Profit",
    "& Profit",
    "& Profit",
    "& Profit",
    "& Zysk",
    "والربح", "与利润"
    ],
  "/kWh)": [
    "/kWh)",
    "/kWh)",
    "/kWh)",
    "/kWh)",
    "/kWh)",
    "/كيلوواط ساعة)", "/كيلوواط ساعة)"
    ],
  "/hora)": [
    "/hour)",
    "/heure)",
    "/Stunde)",
    "/ora)",
    "/hour)",
    "/ساعة)", "/ساعة)"
    ],
  "€/hora)": [
    "€/hour)",
    "€/heure)",
    "€/Stunde)",
    "€/ora)",
    "€/hour)",
    "€/ساعة)", "€/ساعة)"
    ],
  "Precio de venta por unidad (": [
    "Selling price per unit (",
    "Prix de vente par unité (",
    "Verkaufspreis pro Einheit (",
    "Prezzo di vendita per unità (",
    "Cena sprzedaży za sztukę (",
    "سعر البيع لكل وحدة (", "单件售价（"
    ],
  "Comisión fija por venta (": [
    "Fixed commission per sale (",
    "Commission fixe par vente (",
    "Feste Provision pro Verkauf (",
    "Commissione fissa per vendita (",
    "Stała prowizja od sprzedaży (",
    "العمولة الثابتة لكل عملية بيع (", "每笔销售固定佣金（"
    ],
  "Beneficio mínimo deseado por unidad (": [
    "Desired minimum profit per unit (",
    "Bénéfice minimum souhaité par unité (",
    "Gewünschter Mindestgewinn pro Einheit (",
    "Profitto minimo desiderato per unità (",
    "Oczekiwany minimalny zysk na sztukę (",
    "الحد الأدنى المطلوب للربح لكل وحدة (", "单件目标最低利润（"
    ],
  "Suplemento A (": [
    "Price increase A (",
    "Supplément A (",
    "Preisaufschlag A (",
    "Supplemento A (",
    "Cena increase A (",
    "الإضافة A (",
    "附加项 A（"
    ],
  "Suplemento B (": ["Price increase B (", "Supplément B (", "Preisaufschlag B (", "Supplemento B (", "Cena increase B (", "زيادة B (", "附加项 B（"],
  "Suplemento C (": ["Price increase C (", "Supplément C (", "Preisaufschlag C (", "Supplemento C (", "Cena increase C (", "زيادة C (", "附加项 C（"],
  "Moneda de cálculo (se cambia en Opciones)": [
    "Calculation currency (change in Settings)",
    "Devise de calcul (à modifier dans Options)",
    "Berechnungswährung (unter Einstellungen ändern)",
    "Valuta di calcolo (modificabile in Opzioni)",
    "Waluta obliczeń (zmiana w Opcjach)",
    "عملة الحساب (يمكن تغييرها في الخيارات)", "计算货币（可在选项中更改）"
    ],
  "Perfil fiscal orientativo (se cambia en Opciones)": [
    "Indicative tax profile (change in Options)",
    "Profil fiscal indicatif (à modifier dans Options)",
    "Unverbindliches Steuerprofil (unter Optionen änderbar)",
    "Profilo fiscale indicativo (modificabile in Opzioni)",
    "Orientacyjny profil podatkowy (zmiana w Opcjach)",
    "الملف الضريبي الإرشادي (يمكن تغييره في الخيارات)", "参考税务配置（可在选项中更改）"
    ],
  "Aplicar IVA / impuesto al cálculo": [
    "Apply VAT / tax to the calculation",
    "Appliquer la TVA / taxe au calcul",
    "MwSt. / Steuer in die Berechnung einbeziehen",
    "Applica IVA / imposta al calcolo",
    "Uwzględnij VAT / podatek w obliczeniach",
    "تطبيق ضريبة القيمة المضافة / الضريبة على الحساب", "在计算中应用增值税 / 税费"
    ],
  "Perfil de canal de venta": [
    "Sales channel profile",
    "Profil du canal de vente",
    "Vertriebskanalprofil",
    "Profilo del canale di vendita",
    "Profil kanału sprzedaży",
    "ملف قناة البيع", "销售渠道配置"
    ],
  "Venta directa · 0%": [
    "Direct sale · 0%",
    "Vente directe · 0 %",
    "Direktverkauf · 0 %",
    "Vendita diretta · 0%",
    "Sprzedaż bezpośrednia · 0%",
    "بيع مباشر · 0٪", "直接销售 · 0%"
    ],
  "Exacto (sin redondear)": [
    "Exact (no rounding)",
    "Exact (sans arrondi)",
    "Exakt (keine Rundung)",
    "Esatto (senza arrotondare)",
    "Dokładnie (bez zaokrąglania)",
    "دقيق (بدون تقريب)", "精确（不取整）"
    ],
  "Subir al siguiente precio terminado en ,99": [
    "Round up to the next price ending in .99",
    "Arrondir au prix supérieur se terminant par ,99",
    "Auf den nächsten Preis mit ,99 aufrunden",
    "Arrotonda al prezzo successivo che termina in ,99",
    "Zaokrąglij w górę do najbliższej ceny kończącej się na ,99",
    "الرفع إلى السعر التالي المنتهي بـ ,99",
    "提高到下一个以 ,99 结尾的价格"
    ],
  "Subir al siguiente precio terminado en ,95": [
    "Round up to the next price ending in .95",
    "Arrondir au prix supérieur se terminant par ,95",
    "Auf den nächsten Preis mit ,95 aufrunden",
    "Arrotonda al prezzo successivo che termina in ,95",
    "Zaokrąglij w górę do najbliższej ceny kończącej się na ,95",
    "رفع السعر إلى القيمة التالية المنتهية بـ ,95", "向上调整至下一个以 ,95 结尾的价格"
    ],
  "Subir al siguiente precio terminado en ,49": [
    "Round up to the next price ending in .49",
    "Arrondir au prix supérieur se terminant par ,49",
    "Auf den nächsten Preis mit ,49 aufrunden",
    "Arrotonda al prezzo successivo che termina in ,49",
    "Zaokrąglij w górę do najbliższej ceny kończącej się na ,49",
    "رفع السعر إلى القيمة التالية المنتهية بـ ,49", "向上调整至下一个以 ,49 结尾的价格"
    ],
  "Subir al siguiente múltiplo de 0,50": [
    "Round up to the next multiple of 0.50",
    "Arrondir au multiple supérieur de 0,50",
    "Auf das nächste Vielfache von 0,50 aufrunden",
    "Arrotonda al multiplo successivo di 0,50",
    "Zaokrąglij w górę do najbliższej wielokrotności 0,50",
    "رفع السعر إلى المضاعف التالي لـ 0,50", "向上调整至下一个 0.50 的倍数"
    ],
  "Subir al siguiente entero": [
    "Round up to next whole number",
    "Arrondir à l’entier supérieur",
    "Auf nächste ganze Zahl aufrunden",
    "Arrotonda all’intero successivo",
    "Round up do next whole number",
    "رفع السعر إلى العدد الصحيح التالي", "向上取整至下一个整数"
    ],
  "Euro (EUR · €)": [
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "اليورو (EUR · €)", "欧元（EUR · €）"
    ],
  "Dólar estadounidense (USD · $)": [
    "US dollar (USD · $)",
    "Dollar américain (USD · $)",
    "US-Dollar (USD · $)",
    "Dollaro statunitense (USD · $)",
    "Dolar amerykański (USD · $)",
    "الدولار الأمريكي (USD · $)", "美元（USD · $）"
    ],
  "Peso mexicano (MXN · $)": [
    "Mexican peso (MXN · $)",
    "Peso mexicain (MXN · $)",
    "Mexikanischer Peso (MXN · $)",
    "Peso messicano (MXN · $)",
    "Peso meksykańskie (MXN · $)",
    "البيزو المكسيكي (MXN · $)", "墨西哥比索（MXN · $）"
    ],
  "Peso argentino (ARS · $)": [
    "Argentine peso (ARS · $)",
    "Peso argentin (ARS · $)",
    "Argentinischer Peso (ARS · $)",
    "Peso argentino (ARS · $)",
    "Peso argentyńskie (ARS · $)",
    "البيزو الأرجنتيني (ARS · $)", "阿根廷比索（ARS · $）"
    ],
  "Peso colombiano (COP · $)": [
    "Colombian peso (COP · $)",
    "Peso colombien (COP · $)",
    "Kolumbianischer Peso (COP · $)",
    "Peso colombiano (COP · $)",
    "Peso kolumbijskie (COP · $)",
    "البيزو الكولومبي (COP · $)", "哥伦比亚比索（COP · $）"
    ],
  "Peso chileno (CLP · $)": [
    "Chilean peso (CLP · $)",
    "Peso chilien (CLP · $)",
    "Chilenischer Peso (CLP · $)",
    "Peso cileno (CLP · $)",
    "Peso chilijskie (CLP · $)",
    "البيزو التشيلي (CLP · $)", "智利比索（CLP · $）"
    ],
  "Real brasileño (BRL · R$)": [
    "Brazilian real (BRL · R$)",
    "Réal brésilien (BRL · R$)",
    "Brasilianischer Real (BRL · R$)",
    "Real brasiliano (BRL · R$)",
    "Real brazylijski (BRL · R$)",
    "الريال البرازيلي (BRL · R$)", "巴西雷亚尔（BRL · R$）"
    ],
  "Sol peruano (PEN · S/)": [
    "Peruvian sol (PEN · S/)",
    "Sol péruvien (PEN · S/)",
    "Peruanischer Sol (PEN · S/)",
    "Sol peruviano (PEN · S/)",
    "Sol peruwiański (PEN · S/)",
    "السول البيروفي (PEN · S/)", "秘鲁索尔（PEN · S/）"
    ],
  "Peso uruguayo (UYU · $U)": [
    "Uruguayan peso (UYU · $U)",
    "Peso uruguayen (UYU · $U)",
    "Uruguayischer Peso (UYU · $U)",
    "Peso uruguaiano (UYU · $U)",
    "Peso urugwajskie (UYU · $U)",
    "البيزو الأوروغواياني (UYU · $U)", "乌拉圭比索（UYU · $U）"
    ],
  "Bolívar venezolano (VES · Bs.)": [
    "Venezuelan bolívar (VES · Bs.)",
    "Bolivar vénézuélien (VES · Bs.)",
    "Venezolanischer Bolívar (VES · Bs.)",
    "Bolívar venezuelano (VES · Bs.)",
    "Boliwar wenezuelski (VES · Bs.)",
    "البوليفار الفنزويلي (VES · Bs.)", "委内瑞拉玻利瓦尔（VES · Bs.）"
    ],
  "Rublo ruso (RUB · ₽)": [
    "Russian ruble (RUB · ₽)",
    "Rouble russe (RUB · ₽)",
    "Russischer Rubel (RUB · ₽)",
    "Rublo russo (RUB · ₽)",
    "Rubel rosyjski (RUB · ₽)",
    "الروبل الروسي (RUB · ₽)", "俄罗斯卢布（RUB · ₽）"
    ],
  "Zloty polaco (PLN · zł)": [
    "Polish złoty (PLN · zł)",
    "Złoty polonais (PLN · zł)",
    "Polnischer Złoty (PLN · zł)",
    "Złoty polacco (PLN · zł)",
    "Polski złoty (PLN · zł)",
    "الزلوتي البولندي (PLN · zł)", "波兰兹罗提（PLN · zł）"
    ],
  "Grivna ucraniana (UAH · ₴)": [
    "Ukrainian hryvnia (UAH · ₴)",
    "Hryvnia ukrainienne (UAH · ₴)",
    "Ukrainische Hrywnja (UAH · ₴)",
    "Grivnia ucraina (UAH · ₴)",
    "Hrywna ukraińska (UAH · ₴)",
    "الهريفنيا الأوكرانية (UAH · ₴)", "乌克兰格里夫纳（UAH · ₴）"
    ],
  "Libra esterlina (GBP · £)": [
    "Pound sterling (GBP · £)",
    "Livre sterling (GBP · £)",
    "Pfund Sterling (GBP · £)",
    "Sterlina britannica (GBP · £)",
    "Funt szterling (GBP · £)",
    "الجنيه الإسترليني (GBP · £)", "英镑（GBP · £）"
    ],
  "Dólar canadiense (CAD · $)": [
    "Canadian dollar (CAD · $)",
    "Dollar canadien (CAD · $)",
    "Kanadischer Dollar (CAD · $)",
    "Dollaro canadese (CAD · $)",
    "Dolar kanadyjski (CAD · $)",
    "الدولار الكندي (CAD · $)", "加拿大元（CAD · $）"
    ],
  "Dólar australiano (AUD · $)": [
    "Australian dollar (AUD · $)",
    "Dollar australien (AUD · $)",
    "Australischer Dollar (AUD · $)",
    "Dollaro australiano (AUD · $)",
    "Dolar australijski (AUD · $)",
    "الدولار الأسترالي (AUD · $)", "澳大利亚元（AUD · $）"
    ],
  "Yen japonés (JPY · ¥)": [
    "Japanese yen (JPY · ¥)",
    "Yen japonais (JPY · ¥)",
    "Japanischer Yen (JPY · ¥)",
    "Yen giapponese (JPY · ¥)",
    "Jen japoński (JPY · ¥)",
    "الين الياباني (JPY · ¥)", "日元（JPY · ¥）"
    ],
  "Yuan chino (CNY · ¥)": [
    "Chinese yuan (CNY · ¥)",
    "Yuan chinois (CNY · ¥)",
    "Chinesischer Yuan (CNY · ¥)",
    "Yuan cinese (CNY · ¥)",
    "Juan chiński (CNY · ¥)",
    "اليوان الصيني (CNY · ¥)", "人民币（CNY · ¥）"
    ],
  "Rupia india (INR · ₹)": [
    "Indian rupee (INR · ₹)",
    "Roupie indienne (INR · ₹)",
    "Indische Rupie (INR · ₹)",
    "Rupia indiana (INR · ₹)",
    "Rupia indyjska (INR · ₹)",
    "الروبية الهندية (INR · ₹)", "印度卢比（INR · ₹）"
    ],
  "Personalizado": [
    "Custom",
    "Personnalisé",
    "Benutzerdefiniert",
    "Personalizzato",
    "Niestandardowe",
    "مخصص", "自定义"
    ],
  "IVA / impuesto (%)": [
    "VAT / tax (%)",
    "TVA / taxe (%)",
    "MwSt. / Steuer (%)",
    "IVA / imposta (%)",
    "VAT / Podatek (%)",
    "ضريبة القيمة المضافة / الضريبة (%)", "增值税 / 税费（%）"
    ],
  "España · IVA general 21%": [
    "Spain · standard VAT 21%",
    "Espagne · TVA standard 21 %",
    "Spanien · regulärer MwSt.-Satz 21 %",
    "Spagna · IVA ordinaria 21%",
    "Hiszpania · standardowa stawka VAT 21%",
    "إسبانيا · ضريبة القيمة المضافة العامة 21%",
    "西班牙 · 标准增值税 21%"
    ],
  "Alemania · IVA general 19%": [
    "Germany · standard VAT 19%",
    "Allemagne · TVA standard 19 %",
    "Deutschland · Regelsteuersatz 19 %",
    "Germania · IVA ordinaria 19%",
    "Niemcy · standardowa stawka VAT 19%",
    "ألمانيا · ضريبة القيمة المضافة العامة 19%", "德国 · 标准增值税 19%"
    ],
  "Francia · IVA general 20%": [
    "France · standard VAT 20%",
    "France · TVA standard 20 %",
    "Frankreich · Regelsteuersatz 20 %",
    "Francia · IVA ordinaria 20%",
    "Francja · standardowa stawka VAT 20%",
    "فرنسا · ضريبة القيمة المضافة العامة 20%", "法国 · 标准增值税 20%"
    ],
  "Italia · IVA general 22%": [
    "Italy · standard VAT 22%",
    "Italie · TVA standard 22 %",
    "Italien · Regelsteuersatz 22 %",
    "Italia · IVA ordinaria 22%",
    "Włochy · standardowa stawka VAT 22%",
    "إيطاليا · ضريبة القيمة المضافة العامة 22%", "意大利 · 标准增值税 22%"
    ],
  "Polonia · IVA general 23%": [
    "Poland · standard VAT 23%",
    "Pologne · TVA standard 23 %",
    "Polen · Regelsteuersatz 23 %",
    "Polonia · IVA ordinaria 23%",
    "Polska · standardowa stawka VAT 23%",
    "بولندا · ضريبة القيمة المضافة العامة 23%", "波兰 · 标准增值税 23%"
    ],
  "Reino Unido · tipo general orientativo 20%": [
    "United Kingdom · indicative standard rate 20%",
    "Royaume-Uni · taux standard indicatif 20 %",
    "Vereinigtes Königreich · Richtwert Regelsteuersatz 20 %",
    "Regno Unito · aliquota ordinaria indicativa 20%",
    "Wielka Brytania · orientacyjna standardowa stawka 20%",
    "المملكة المتحدة · معدل عام إرشادي 20%", "英国 · 参考标准税率 20%"
    ],
  "México · IVA general 16%": [
    "Mexico · standard VAT 16%",
    "Mexique · TVA standard 16 %",
    "Mexiko · regulärer MwSt.-Satz 16 %",
    "Messico · IVA ordinaria 16%",
    "Meksyk · standardowa stawka VAT 16%",
    "المكسيك · ضريبة القيمة المضافة العامة 16%", "墨西哥 · 标准增值税 16%"
    ],
  "Japón · impuesto al consumo 10%": [
    "Japan · consumption tax 10%",
    "Japon · taxe à la consommation 10 %",
    "Japan · Verbrauchsteuer 10 %",
    "Giappone · imposta sui consumi 10%",
    "Japonia · podatek konsumpcyjny 10%",
    "اليابان · ضريبة الاستهلاك 10%", "日本 · 消费税 10%"
    ],
  "No hay movimientos para exportar.": [
    "There are no entries to export.",
    "Aucune écriture à exporter.",
    "Es gibt keine Buchungen zum Exportieren.",
    "Non ci sono movimenti da esportare.",
    "Brak operacji do wyeksportowania.",
    "لا توجد حركات لتصديرها.", "没有可导出的记录。"
    ],
  "Escribe un concepto para el movimiento.": [
    "Enter a description for the entry.",
    "Saisissez un libellé pour l’écriture.",
    "Geben Sie eine Beschreibung für die Buchung ein.",
    "Inserisci una descrizione per il movimento.",
    "Wpisz opis operacji.",
    "اكتب وصفًا لهذه الحركة.", "请输入此记录的说明。"
    ],
  "El importe no puede ser negativo.": [
    "The amount cannot be negative.",
    "Le montant ne peut pas être négatif.",
    "Der Betrag darf nicht negativ sein.",
    "L’importo non può essere negativo.",
    "Kwota nie może być ujemna.",
    "لا يمكن أن يكون المبلغ سالبًا.", "金额不能为负数。"
    ],
  "No hay bobinas para exportar.": [
    "No spools to export.",
    "Aucune bobine à exporter.",
    "Keine Spulen zum Exportieren vorhanden.",
    "Nessuna bobina da esportare.",
    "Brak szpul do wyeksportowania.",
    "لا توجد بكرات خيوط لتصديرها.", "没有可导出的线轴。"
    ],
  "No hay pedidos para exportar.": [
    "There are no orders to export.",
    "Aucune commande à exporter.",
    "Keine Aufträge zum Exportieren vorhanden.",
    "Non ci sono ordini da esportare.",
    "Brak zamówień do wyeksportowania.",
    "لا توجد طلبات لتصديرها.", "没有可导出的订单。"
    ],
  "No hay perfiles para exportar.": [
    "No profiles to export.",
    "Aucun profil à exporter.",
    "Keine Profile zum Exportieren vorhanden.",
    "Nessun profilo da esportare.",
    "Brak profili do wyeksportowania.",
    "لا توجد ملفات تعريف لتصديرها.", "没有可导出的配置文件。"
    ],
  "Cálculo cargado.": [
    "Estimate loaded.",
    "Estimation chargée.",
    "Kalkulation geladen.",
    "Stima caricata.",
    "Wczytano kalkulację.",
    "تم تحميل الحساب.", "计算已载入。"
    ],
  "Perfil de impresora aplicado al cálculo.": [
    "Printer profile applied to the estimate.",
    "Profil d’imprimante appliqué à l’estimation.",
    "Druckerprofil auf die Kalkulation angewendet.",
    "Profilo stampante applicato al calcolo.",
    "Profil drukarki został zastosowany w obliczeniu.",
    "تم تطبيق ملف تعريف الطابعة على الحساب.", "打印机配置已应用于计算。"
    ],
  "Precio final calculado y aplicado.": [
    "Final price calculated and applied.",
    "Prix final calculé et appliqué.",
    "Endpreis berechnet und übernommen.",
    "Prezzo finale calcolato e applicato.",
    "Obliczono i zastosowano cenę końcową.",
    "تم حساب السعر النهائي وتطبيقه.", "最终价格已计算并应用。"
    ],
  "Historial borrado.": [
    "History cleared.",
    "Historique effacé.",
    "Verlauf gelöscht.",
    "Cronologia cancellata.",
    "Historia cleared.",
    "تم مسح السجل.", "历史记录已清除。"
    ],
  "Cliente guardado.": [
    "Customer saved.",
    "Client enregistré.",
    "Kunde gespeichert.",
    "Cliente salvato.",
    "Klient zapisany.",
    "تم حفظ العميل.", "客户已保存。"
    ],
  "Cliente guardado en este navegador.": [
    "Customer saved in this browser.",
    "Client enregistré dans ce navigateur.",
    "Kunde in diesem Browser gespeichert.",
    "Cliente salvato in questo browser.",
    "Klienta zapisano w tej przeglądarce.",
    "تم حفظ العميل في هذا المتصفح.",
    "客户已保存在此浏览器中。"
    ],
  "Factura guardada.": [
    "Invoice saved.",
    "Facture enregistrée.",
    "Rechnung gespeichert.",
    "Fattura salvata.",
    "Zapisano fakturę.",
    "تم حفظ الفاتورة.", "发票已保存。"
    ],
  "Presupuesto guardado. El cliente está disponible en la pestaña «Clientes».": [
    "Quote saved. The customer is available in the “Customers” tab.",
    "Devis enregistré. Le client est disponible dans l’onglet « Clients ».",
    "Angebot gespeichert. Der Kunde ist im Tab „Kunden“ verfügbar.",
    "Preventivo salvato. Il cliente è disponibile nella scheda «Clienti».",
    "Zapisano ofertę. Klient jest dostępny na karcie „Klienci”.",
    "تم حفظ عرض السعر. العميل متاح في علامة تبويب «العملاء».", "报价单已保存。可在“客户”选项卡中找到该客户。"
    ],
  "Archivo cargado. Revisa los datos del laminado.": [
    "File loaded. Check the slicer data.",
    "Fichier chargé. Vérifiez les données du trancheur.",
    "Datei geladen. Prüfen Sie die Slicer-Daten.",
    "File caricato. Controlla i dati dello slicer.",
    "Plik wczytano. Sprawdź dane z programu do cięcia.",
    "تم تحميل الملف. راجع بيانات التقطيع.", "文件已加载。请检查切片数据。"
    ],
  "Imagen de la pieza añadida.": [
    "Part image added.",
    "Image de la pièce ajoutée.",
    "Teilebild hinzugefügt.",
    "Immagine del pezzo aggiunta.",
    "Dodano obraz części.",
    "تمت إضافة صورة القطعة.", "零件图片已添加。"
    ],
  "Imagen quitada.": [
    "Image removed.",
    "Image supprimée.",
    "Bild entfernt.",
    "Immagine rimossa.",
    "Usunięto obraz.",
    "تمت إزالة الصورة.", "图片已移除。"
    ],
  "El coste debe ser un número igual o mayor que cero.": [
    "Cost must be a number greater than or equal to zero.",
    "Le coût doit être un nombre supérieur ou égal à zéro.",
    "Die Kosten müssen eine Zahl größer oder gleich null sein.",
    "Il costo deve essere un numero maggiore o uguale a zero.",
    "Koszt musi być liczbą większą lub równą zero.",
    "يجب أن تكون التكلفة رقمًا يساوي صفرًا أو أكبر.", "成本必须是大于或等于零的数字。"
    ],
  "El precio de venta debe ser un número igual o mayor que cero.": [
    "Sale price must be a number greater than or equal to zero.",
    "Le prix de vente doit être un nombre supérieur ou égal à zéro.",
    "Der Verkaufspreis muss eine Zahl größer oder gleich null sein.",
    "Il prezzo di vendita deve essere un numero maggiore o uguale a zero.",
    "Cena sprzedaży musi być liczbą większą lub równą zero.",
    "يجب أن يكون سعر البيع رقمًا يساوي صفرًا أو أكبر.", "售价必须是大于或等于零的数字。"
    ],
  "El número de factura no puede estar vacío.": [
    "The invoice number cannot be empty.",
    "Le numéro de facture ne peut pas être vide.",
    "Die Rechnungsnummer darf nicht leer sein.",
    "Il numero della fattura non può essere vuoto.",
    "Numer faktury nie może być pusty.",
    "لا يمكن ترك رقم الفاتورة فارغًا.", "发票编号不能为空。"
    ],
  "Selecciona primero un cliente guardado.": [
    "Select a saved customer first.",
    "Sélectionnez d’abord un client enregistré.",
    "Wählen Sie zuerst einen gespeicherten Kunden aus.",
    "Seleziona prima un cliente salvato.",
    "Najpierw wybierz zapisanego klienta.",
    "اختر عميلًا محفوظًا أولًا.", "请先选择已保存的客户。"
    ],
  "Selecciona primero un cliente.": [
    "Select a customer first.",
    "Sélectionnez d’abord un client.",
    "Wählen Sie zuerst einen Kunden aus.",
    "Seleziona prima un cliente.",
    "Najpierw wybierz klienta.",
    "اختر عميلًا أولًا.", "请先选择客户。"
    ],
  "¿Borrar este cliente guardado?": [
    "Delete this saved customer?",
    "Supprimer ce client enregistré ?",
    "Diesen gespeicherten Kunden löschen?",
    "Eliminare questo cliente salvato?",
    "Czy usunąć zapisanego klienta?",
    "هل تريد حذف هذا العميل المحفوظ؟", "确定删除此已保存客户吗？"
    ],
  "¿Borrar todo el historial guardado en este navegador?": [
    "Delete all history saved in this browser?",
    "Supprimer tout l’historique enregistré dans ce navigateur ?",
    "Den gesamten in diesem Browser gespeicherten Verlauf löschen?",
    "Eliminare tutta la cronologia salvata in questo browser?",
    "Usunąć całą historię zapisaną w tej przeglądarce?",
    "هل تريد حذف السجل بالكامل من هذا المتصفح؟", "确定清除此浏览器中保存的全部历史记录吗？"
    ],
  "¿Empezar un cálculo nuevo? Los datos actuales se sustituirán.": [
    "Start a new estimate? The current data will be replaced.",
    "Commencer une nouvelle estimation ? Les données actuelles seront remplacées.",
    "Neue Kalkulation starten? Die aktuellen Daten werden ersetzt.",
    "Iniziare un nuovo calcolo? I dati attuali verranno sostituiti.",
    "Rozpocząć nową kalkulację? Bieżące dane zostaną zastąpione.",
    "هل تريد بدء حساب جديد؟ سيتم استبدال البيانات الحالية.", "确定开始新的计算吗？当前数据将被替换。"
    ],
  "El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.": [
    "The browser blocked the report window. Allow pop-ups to export to PDF.",
    "Le navigateur a bloqué la fenêtre du rapport. Autorisez les fenêtres pop-up pour exporter en PDF.",
    "Der Browser hat das Berichtsfenster blockiert. Erlauben Sie Pop-ups, um als PDF zu exportieren.",
    "Il browser ha bloccato la finestra del rapporto. Consenti i popup per esportare in PDF.",
    "Przeglądarka zablokowała okno raportu. Zezwól na wyskakujące okna, aby wyeksportować dokument do PDF.",
    "حظر المتصفح نافذة التقرير. اسمح بالنوافذ المنبثقة للتصدير إلى PDF.", "浏览器阻止了报告窗口。请允许弹出窗口以导出 PDF。"
    ],
  "Al cargar el G-code se detectan automáticamente material, color y gramos. Si coincide con una única bobina en stock, se selecciona; si no, se crea un filamento genérico con el color del laminador.": [
    "When G-code is loaded, material, colour and grams are detected automatically. If exactly one stocked spool matches, it is selected; otherwise, a generic filament using the slicer colour is created.",
    "Au chargement du G-code, le matériau, la couleur et le poids en grammes sont détectés automatiquement. Si une seule bobine en stock correspond, elle est sélectionnée ; sinon, un filament générique utilisant la couleur du trancheur est créé.",
    "Beim Laden des G-Codes werden Material, Farbe und Grammzahl automatisch erkannt. Passt genau eine Lager-Spule, wird sie ausgewählt; andernfalls wird ein generisches Filament mit der Slicer-Farbe erstellt.",
    "Quando si carica il G-code, materiale, colore e grammi vengono rilevati automaticamente. Se corrisponde a una sola bobina in magazzino, viene selezionata; altrimenti viene creato un filamento generico con il colore dello slicer.",
    "Po wczytaniu G-code materiał, kolor i masa są wykrywane automatycznie. Jeśli dane pasują dokładnie do jednej szpuli w magazynie, zostanie ona wybrana; w przeciwnym razie zostanie utworzony ogólny wpis filamentu z kolorem ustawionym w slicerze.",
    "عند تحميل G-code، يتم اكتشاف المادة واللون والوزن تلقائيًا. إذا تطابقت البيانات مع بكرة واحدة في المخزون، فسيتم تحديدها؛ وإلا فسيتم إنشاء خيط عام بلون برنامج التقطيع.",
    "加载 G-code 时会自动识别材料、颜色和克数。如果与库存中的唯一线轴匹配，则自动选择；否则会按切片软件中的颜色创建通用耗材。"
    ],
  "Desmárcalo para calcular sin impuestos: el impuesto será 0,00 y el total será igual al precio base. El porcentaje fiscal queda guardado para volver a activarlo.": [
    "Uncheck to calculate without tax: tax will be 0.00 and the total will equal the base price. The tax rate is saved so you can enable it again later.",
    "Décochez pour calculer hors taxes : la taxe sera de 0,00 et le total sera égal au prix de base. Le taux reste enregistré pour être réactivé ultérieurement.",
    "Deaktivieren, um ohne Steuer zu rechnen: Die Steuer beträgt 0,00 und der Gesamtbetrag entspricht dem Grundpreis. Der Steuersatz bleibt zum späteren Aktivieren gespeichert.",
    "Deseleziona per calcolare senza imposte: l’imposta sarà 0,00 e il totale corrisponderà al prezzo base. L’aliquota resta salvata per riattivarla in seguito.",
    "Odznacz tę opcję, aby obliczyć cenę bez podatku: podatek wyniesie 0,00, a suma będzie równa cenie bazowej. Stawka podatku zostanie zapisana, aby można ją było ponownie włączyć.",
    "أزل تحديد هذا الخيار للحساب دون ضرائب: ستصبح الضريبة 0,00 وسيكون الإجمالي مساويًا للسعر الأساسي. ستظل نسبة الضريبة محفوظة لإعادة تفعيلها لاحقًا.", "取消勾选即可按不含税方式计算：税额为 0.00，总额等于基础价格。税率会保留，以便以后重新启用。"
    ],
  "Porcentajes ilustrativos editables; comprueba las tarifas reales de tu cuenta.": [
    "Illustrative, editable percentages; check your account’s actual fees.",
    "Pourcentages indicatifs modifiables ; vérifiez les frais réels de votre compte.",
    "Veranschaulichende, editierbare Prozentsätze; prüfen Sie die tatsächlichen Gebühren Ihres Kontos.",
    "Percentuali indicative e modificabili; verifica le tariffe effettive del tuo account.",
    "Przykładowe stawki można edytować; sprawdź rzeczywiste opłaty na swoim koncie.",
    "نسب توضيحية قابلة للتعديل؛ تحقق من المعدلات الفعلية لحسابك.", "这些比例仅供参考且可编辑；请核实你账户适用的实际费率。"
    ],
  "Si la plataforma cobra una cantidad fija por operación, introdúcela aquí.": [
    "If the platform charges a fixed amount per transaction, enter it here.",
    "Si la plateforme facture un montant fixe par transaction, saisissez-le ici.",
    "Wenn die Plattform einen festen Betrag pro Transaktion berechnet, geben Sie ihn hier ein.",
    "Se la piattaforma addebita un importo fisso per transazione, inseriscilo qui.",
    "Jeśli platforma pobiera stałą opłatę za transakcję, wpisz ją tutaj.",
    "إذا كانت المنصة تفرض مبلغًا ثابتًا لكل معاملة، فأدخله هنا.", "如果平台对每笔交易收取固定费用，请在此输入。"
    ],
  "Ejemplo: coste 6,99 € + beneficio del 200 % = 20,97 € antes de comisiones e impuestos.": [
    "Example: cost €6.99 + 200% profit = €20.97 before fees and tax.",
    "Exemple : coût de 6,99 € + bénéfice de 200 % = 20,97 € avant frais et taxes.",
    "Beispiel: Kosten 6,99 € + 200 % Gewinn = 20,97 € vor Gebühren und Steuern.",
    "Esempio: costo 6,99 € + profitto del 200% = 20,97 € prima di commissioni e imposte.",
    "Przykład: koszt 6,99 € + zysk 200% = 20,97 € przed prowizjami i podatkami.",
    "مثال: تكلفة 6,99 € + ربح بنسبة 200% = 20,97 € قبل العمولات والضرائب.", "示例：成本 6.99 € + 200% 利润 = 20.97 €（未计佣金和税费）。"
    ],
  "El precio recomendado cubrirá este beneficio mínimo o el porcentaje de beneficio indicado, el que exija un precio mayor.": [
    "The recommended price will cover this minimum profit or the target profit percentage, whichever requires the higher price.",
    "Le prix conseillé couvrira ce bénéfice minimal ou le pourcentage visé, selon celui qui impose le prix le plus élevé.",
    "Der empfohlene Preis deckt diesen Mindestgewinn oder den Zielgewinnsatz ab, je nachdem, welcher den höheren Preis erfordert.",
    "Il prezzo consigliato coprirà questo profitto minimo o la percentuale indicata, a seconda di quale richiede il prezzo più alto.",
    "Zalecana cena zapewni minimalny zysk lub wskazany procent zysku — w zależności od tego, który wymaga wyższej ceny.",
    "سيغطي السعر الموصى به هذا الحد الأدنى من الربح أو نسبة الربح المحددة، أيهما يتطلب سعرًا أعلى.", "建议售价将满足此最低利润额或指定利润百分比，以要求售价较高者为准。"
    ],
  "Base sin impuestos por unidad": [
    "Pre-tax base per unit",
    "Base hors taxes par unité",
    "Nettobasis pro Einheit",
    "Imponibile per unità",
    "Podstawa bez podatku na jednostkę",
    "السعر الأساسي لكل وحدة دون ضرائب", "每件未含税基价"
    ],
  "Impuesto por unidad": [
    "Tax per unit",
    "Taxe par unité",
    "Steuer pro Einheit",
    "Imposta per unità",
    "Podatek na sztukę",
    "الضريبة لكل وحدة", "每件税额"
    ],
  "Total con impuestos por unidad": [
    "Total including tax per unit",
    "Total TTC par unité",
    "Gesamtbetrag inkl. Steuer pro Einheit",
    "Totale con imposte per unità",
    "Suma z podatkiem na sztukę",
    "الإجمالي لكل وحدة شامل الضرائب", "每件含税总价"
    ],
  "Impuesto total del pedido": [
    "Total order tax",
    "Taxe totale de la commande",
    "Gesamtsteuer des Auftrags",
    "Imposta totale dell’ordine",
    "Łączny podatek od zamówienia",
    "إجمالي ضريبة الطلب",
    "订单税额合计"
    ],
  "Coste de filamento": [
    "Filament cost",
    "Coût du filament",
    "Filamentkosten",
    "Costo del filamento",
    "Koszt filamentu",
    "تكلفة الخيط", "耗材成本"
    ],
  "Precio sin impuestos / unidad": [
    "Price excluding tax / unit",
    "Prix hors taxes / unité",
    "Preis ohne Steuern / Einheit",
    "Prezzo al netto delle imposte / unità",
    "Cena bez podatku / szt.",
    "السعر لكل وحدة دون ضرائب", "每件未含税价格"
    ],
  "Impuestos por unidad": [
    "Tax per unit",
    "Taxes par unité",
    "Steuern pro Einheit",
    "Imposte per unità",
    "Podatki na sztukę",
    "الضرائب لكل وحدة", "每件税费"
    ],
  "Impuestos totales del pedido": [
    "Total order taxes",
    "Taxes totales de la commande",
    "Gesamtsteuern des Auftrags",
    "Imposte totali dell’ordine",
    "Łączne podatki od zamówienia",
    "إجمالي ضرائب الطلب", "订单税费总额"
    ],
  "Precio con impuestos / unidad": [
    "Price including tax / unit",
    "Prix TTC / unité",
    "Preis inklusive Steuern / Einheit",
    "Prezzo con imposte / unità",
    "Cena z podatkiem / szt.",
    "السعر لكل وحدة شامل الضرائب", "每件含税价格"
    ],
  "Comisión por unidad": [
    "Commission per unit",
    "Commission par unité",
    "Provision pro Einheit",
    "Commissione per unità",
    "Prowizja na sztukę",
    "العمولة لكل وحدة", "每件佣金"
    ],
  "Beneficio total del pedido": [
    "Total order profit",
    "Bénéfice total de la commande",
    "Gesamtgewinn des Auftrags",
    "Profitto totale dell’ordine",
    "Łączny zysk z zamówienia",
    "إجمالي ربح الطلب", "订单总利润"
    ],
  "1 unidad": [
    "1 unit",
    "1 unité",
    "1 Stück",
    "1 unità",
    "1 Jednostka",
    "وحدة واحدة",
    "1 件"
    ],
  "· importe total con impuestos": [
    "· total amount including tax",
    "· montant total TTC",
    "· Gesamtbetrag inkl. Steuer",
    "· importo totale imposte incluse",
    "· Łącznie kwota including Podatek",
    "· الإجمالي شامل الضرائب", "· 含税总金额"
    ],
  "Se actualizará al pulsar «Calcular precio final»": [
    "It will update when you click “Calculate final price”.",
    "La mise à jour se fera lorsque vous cliquerez sur « Calculer le prix final ».",
    "Die Aktualisierung erfolgt beim Klicken auf „Endpreis berechnen“.",
    "Si aggiornerà quando premi «Calcola prezzo finale».",
    "Zaktualizuje się po kliknięciu „Oblicz cenę końcową”.",
    "سيتم التحديث عند الضغط على «حساب السعر النهائي»", "点击“计算最终售价”后将更新"
    ],
  "Resumen de los cálculos guardados en la base de datos SQLite de este PC. No equivale a contabilidad ni a ventas cobradas.": [
    "Summary of calculations saved in this PC’s SQLite database. It is not equivalent to accounting or collected sales.",
    "Résumé des calculs enregistrés dans la base SQLite de ce PC. Il ne remplace ni la comptabilité ni les ventes encaissées.",
    "Zusammenfassung der in der SQLite-Datenbank dieses PCs gespeicherten Berechnungen. Sie entspricht weder einer Buchhaltung noch vereinnahmten Verkäufen.",
    "Riepilogo dei calcoli salvati nel database SQLite di questo PC. Non equivale alla contabilità né alle vendite incassate.",
    "Podsumowanie obliczeń zapisanych w bazie SQLite na tym komputerze. Nie zastępuje księgowości ani ewidencji opłaconej sprzedaży.",
    "ملخص الحسابات المحفوظة في قاعدة بيانات SQLite على هذا الكمبيوتر. ولا يُعدّ ذلك محاسبة أو مبيعات محصّلة.", "此摘要汇总保存在本电脑 SQLite 数据库中的计算记录，不等同于会计账目或已收款销售额。"
    ],
  "Pulsa actualizar para resumir el historial guardado.": [
    "Click refresh to summarise the saved history.",
    "Cliquez sur Actualiser pour résumer l’historique enregistré.",
    "Klicken Sie auf Aktualisieren, um den gespeicherten Verlauf zusammenzufassen.",
    "Premi aggiorna per riepilogare la cronologia salvata.",
    "Kliknij odśwież, aby podsumować zapisaną historię.",
    "اضغط على تحديث لتلخيص السجل المحفوظ.", "点击刷新以汇总已保存的历史记录。"
    ],
  "Estimación independiente para ver cómo afectan las reimpresiones al coste de una pieza vendible.": [
    "Independent estimate showing how reprints affect the cost of a saleable part.",
    "Estimation indépendante montrant l’effet des réimpressions sur le coût d’une pièce vendable.",
    "Unabhängige Schätzung, wie sich Nachdrucke auf die Kosten eines verkaufsfähigen Teils auswirken.",
    "Stima indipendente per vedere come le ristampe incidono sul costo di un pezzo vendibile.",
    "Niezależny szacunek pokazujący wpływ ponownych wydruków na koszt części przeznaczonej do sprzedaży.",
    "تقدير مستقل لمعرفة تأثير إعادة الطباعة على تكلفة القطعة القابلة للبيع。", "独立估算重新打印对可销售零件成本的影响。"
    ],
  "Probabilidad de fallo por intento (%)": [
    "Failure probability per attempt (%)",
    "Probabilité d’échec par tentative (%)",
    "Fehlerwahrscheinlichkeit pro Versuch (%)",
    "Probabilità di errore per tentativo (%)",
    "Prawdopodobieństwo niepowodzenia na próbę (%)",
    "احتمال فشل كل محاولة (%)", "每次尝试的失败概率（%）"
    ],
  "Coste adicional por reintento": [
    "Additional cost per retry",
    "Coût supplémentaire par nouvelle tentative",
    "Zusätzliche Kosten pro Wiederholungsversuch",
    "Costo aggiuntivo per tentativo ripetuto",
    "Dodatkowy koszt ponownej próby",
    "التكلفة الإضافية لكل إعادة محاولة", "每次重试的额外成本"
    ],
  "Pulsa para estimar el coste esperado por pieza vendible.": [
    "Click to estimate the expected cost per saleable part.",
    "Cliquez pour estimer le coût attendu par pièce vendable.",
    "Klicken Sie, um die erwarteten Kosten pro verkaufsfähigem Teil zu schätzen.",
    "Premi per stimare il costo previsto per pezzo vendibile.",
    "Kliknij, aby oszacować oczekiwany koszt części przeznaczonej do sprzedaży.",
    "اضغط لتقدير التكلفة المتوقعة لكل قطعة قابلة للبيع。", "点击以估算每件可销售产品的预期成本。"
    ],
  "Añade un suplemento al precio recomendado para comparar cuánto beneficio adicional obtendrías vendiendo la pieza más cara. Introduce 10, 15 o 20 para sumar esos euros al precio recomendado.": [
    "Add a surcharge to the recommended price to compare the extra profit from selling the part at a higher price. Enter 10, 15 or 20 to add that amount to the recommended price.",
    "Ajoutez un supplément au prix recommandé pour comparer le bénéfice supplémentaire obtenu en vendant la pièce plus cher. Saisissez 10, 15 ou 20 pour ajouter ce montant au prix recommandé.",
    "Fügen Sie dem empfohlenen Preis einen Aufschlag hinzu, um den zusätzlichen Gewinn bei einem höheren Verkaufspreis zu vergleichen. Geben Sie 10, 15 oder 20 ein, um diesen Betrag zum empfohlenen Preis hinzuzufügen.",
    "Aggiungi un supplemento al prezzo consigliato per confrontare il profitto aggiuntivo vendendo il pezzo a un prezzo più alto. Inserisci 10, 15 o 20 per aggiungere tale importo al prezzo consigliato.",
    "Dodaj dopłatę do zalecanej ceny, aby porównać dodatkowy zysk ze sprzedaży części drożej. Wpisz 10, 15 lub 20, aby dodać tę kwotę do zalecanej ceny.",
    "أضف مبلغًا إضافيًا إلى السعر الموصى به لمقارنة الربح الإضافي عند بيع القطعة بسعر أعلى. أدخل 10 أو 15 أو 20 لإضافة هذه اليوروهات إلى السعر الموصى به.",
    "在建议售价上增加附加金额，以比较提高售价后可获得的额外利润。输入 10、15 或 20，即可将相应欧元金额加到建议售价上。"
    ],
  "La potencia es editable. El mantenimiento estimado usa una cesta por categoría y 1.000 h; su base aparece al seleccionar un modelo.": [
    "Power is editable. Estimated maintenance uses a category-based parts basket per 1,000 hours; its basis appears when a model is selected.",
    "La puissance est modifiable. L’entretien estimé utilise un panier de pièces par catégorie et pour 1 000 h ; sa base apparaît lorsqu’un modèle est sélectionné.",
    "Die Leistung ist bearbeitbar. Die geschätzte Wartung basiert auf einem kategoriespezifischen Ersatzteilkorb je 1.000 Stunden; die Grundlage wird bei Auswahl eines Modells angezeigt.",
    "La potenza è modificabile. La manutenzione stimata usa un paniere di ricambi per categoria ogni 1.000 h; la base viene mostrata selezionando un modello.",
    "Moc można edytować. Szacunkowy koszt konserwacji opiera się na zestawie części dla danej kategorii na 1000 godzin; podstawę wyświetla się po wybraniu modelu.",
    "يمكن تعديل القدرة. تعتمد صيانة التقدير على مجموعة قطع لكل فئة ولكل 1,000 ساعة؛ وتظهر القيمة الأساسية عند اختيار الطراز.", "功率可编辑。维护估算按类别和每 1,000 小时的备件组合计算；选择型号后会显示其基准值。"
    ],
  "Introduce un precio de compra para calcular amortización; mientras falte, el coste será 0.": [
    "Enter a purchase price to calculate depreciation; until provided, the cost will be 0.",
    "Saisissez un prix d’achat pour calculer l’amortissement ; tant qu’il manque, le coût sera de 0.",
    "Geben Sie einen Kaufpreis ein, um die Abschreibung zu berechnen; solange er fehlt, betragen die Kosten 0.",
    "Inserisci un prezzo d’acquisto per calcolare l’ammortamento; finché manca, il costo sarà 0.",
    "Wprowadź cenę zakupu, aby obliczyć amortyzację; dopóki jej brakuje, koszt wynosi 0.",
    "أدخل سعر الشراء لحساب الإهلاك؛ وإذا لم يتم إدخاله فستكون التكلفة 0.", "请输入采购价格以计算折旧；未填写时成本为 0。"
    ],
  "👥 Gestión de clientes": [
    "👥 Customer management",
    "👥 Gestion des clients",
    "👥 Kundenverwaltung",
    "👥 Gestione clienti",
    "👥 Zarządzanie klientami",
    "👥 إدارة العملاء", "👥 客户管理"
    ],
  "Buscar": [
    "Search",
    "Rechercher",
    "Suchen",
    "Cerca",
    "Szukaj",
    "بحث", "搜索"
    ],
  "Clientes existentes": [
    "Existing customers",
    "Clients existants",
    "Vorhandene Kunden",
    "Clienti esistenti",
    "Existing Klienci",
    "العملاء الحاليون", "现有客户"
    ],
  "Nombre / empresa *": [
    "Name / company *",
    "Nom / entreprise *",
    "Name / Unternehmen *",
    "Nome / azienda *",
    "Nazwa / company *",
    "الاسم / الشركة *", "姓名 / 公司 *"
    ],
  "Dirección de facturación / entrega": [
    "Billing / delivery address",
    "Adresse de facturation / livraison",
    "Rechnungs- / Lieferadresse",
    "Indirizzo di fatturazione / consegna",
    "Adres rozliczeniowy / dostawy",
    "عنوان الفوترة / التسليم", "账单 / 收货地址"
    ],
  "Código postal": [
    "Postal code",
    "Code postal",
    "Postleitzahl",
    "Codice postale",
    "Kod pocztowy",
    "الرمز البريدي", "邮政编码"
    ],
  "Provincia / Estado": [
    "Province / State",
    "Province / État",
    "Bundesland / Region",
    "Provincia / Stato",
    "Województwo / stan",
    "المقاطعة / الولاية", "省 / 州"
    ],
  "Observaciones": [
    "Notes",
    "Remarques",
    "Notizen",
    "Note",
    "Uwagi",
    "ملاحظات", "备注"
    ],
  "Limpiar campos": [
    "Clear fields",
    "Effacer les champs",
    "Felder leeren",
    "Pulisci campi",
    "Wyczyść fields",
    "مسح الحقول", "清空字段"
    ],
  "Los clientes se guardan en la base de datos SQLite de este PC.": [
    "Customers are saved in this PC’s SQLite database.",
    "Les clients sont enregistrés dans la base SQLite de ce PC.",
    "Kunden werden in der SQLite-Datenbank dieses PCs gespeichert.",
    "I clienti vengono salvati nel database SQLite di questo PC.",
    "Klienci są zapisywani w bazie danych SQLite na tym komputerze.",
    "يتم حفظ العملاء في قاعدة بيانات SQLite على هذا الكمبيوتر.",
    "客户保存在此电脑的 SQLite 数据库中。"
    ],
  "Agenda de clientes": [
    "Customer directory",
    "Répertoire des clients",
    "Kundenkartei",
    "Rubrica clienti",
    "Książka klientów",
    "دليل العملاء", "客户通讯录"
  ],
  "Crea facturas desde un presupuesto guardado o con los datos actuales de la calculadora. La numeración se propone correlativamente y puedes editarla manualmente.": [
    "Create invoices from a saved quote or the calculator’s current data. The next sequential number is suggested and can be edited manually.",
    "Créez des factures à partir d’un devis enregistré ou des données actuelles du calculateur. Le prochain numéro séquentiel est proposé et peut être modifié manuellement.",
    "Erstellen Sie Rechnungen aus einem gespeicherten Angebot oder den aktuellen Rechnerdaten. Die nächste fortlaufende Nummer wird vorgeschlagen und kann manuell geändert werden.",
    "Crea fatture da un preventivo salvato o dai dati correnti del calcolatore. Viene proposto il numero progressivo successivo, modificabile manualmente.",
    "Twórz faktury na podstawie zapisanej oferty lub aktualnych danych kalkulatora. Numer jest proponowany kolejno i można go ręcznie edytować.",
    "أنشئ الفواتير من عرض سعر محفوظ أو باستخدام البيانات الحالية في الحاسبة. يُقترح رقم متسلسل ويمكنك تعديله يدويًا.", "可根据已保存的报价单或计算器当前数据创建发票。系统会建议连续编号，你也可以手动修改。"
    ],
  "Usa {AAAA} para el año y {0000} para el contador correlativo.": [
    "Use {AAAA} for the year and {0000} for the sequential counter.",
    "Utilisez {AAAA} pour l’année et {0000} pour le compteur séquentiel.",
    "Verwenden Sie {AAAA} für das Jahr und {0000} für den fortlaufenden Zähler.",
    "Usa {AAAA} per l’anno e {0000} per il contatore progressivo.",
    "Użyj {AAAA} dla roku i {0000} dla kolejnego numeru.",
    "استخدم {AAAA} للسنة و{0000} للعداد التسلسلي.", "使用 {AAAA} 表示年份，使用 {0000} 表示连续编号。"
    ],
  "Siguiente correlativo": [
    "Next sequence number",
    "Prochain numéro séquentiel",
    "Nächste laufende Nummer",
    "Prossimo numero progressivo",
    "Następny numer kolejny",
    "الرقم التسلسلي التالي", "下一个连续编号"
    ],
  "＋ Crear factura desde calculadora": [
    "＋ Create invoice from calculator",
    "＋ Créer une facture depuis le calculateur",
    "＋ Rechnung aus dem Rechner erstellen",
    "＋ Crea fattura dal calcolatore",
    "＋ Utwórz fakturę z kalkulatora",
    "＋ إنشاء فاتورة من الحاسبة",
    "＋ 从计算器创建发票"
    ],
  "Crear desde presupuesto cargado": [
    "Create from loaded quote",
    "Créer depuis le devis chargé",
    "Aus geladenem Angebot erstellen",
    "Crea da preventivo caricato",
    "Utwórz z wczytanej oferty",
    "إنشاء من عرض السعر المحمّل", "根据已载入的报价单创建"
    ],
  "Elige un cliente guardado o rellena los datos para crear uno nuevo. La factura usará también los datos guardados en «Datos del vendedor».": [
    "Choose a saved customer or enter details to create a new one. The invoice will also use the details saved under “Seller details”.",
    "Choisissez un client enregistré ou saisissez les informations pour en créer un nouveau. La facture utilisera également les données enregistrées dans « Coordonnées du vendeur ».",
    "Wählen Sie einen gespeicherten Kunden oder geben Sie Daten für einen neuen Kunden ein. Die Rechnung verwendet auch die unter „Verkäuferdaten“ gespeicherten Angaben.",
    "Scegli un cliente salvato o inserisci i dati per crearne uno nuovo. La fattura userà anche i dati salvati in «Dati del venditore».",
    "Wybierz zapisanego klienta lub wpisz dane nowego. Faktura wykorzysta również dane zapisane w sekcji „Dane sprzedawcy”.",
    "اختر عميلًا محفوظًا أو أدخل البيانات لإنشاء عميل جديد. ستستخدم الفاتورة أيضًا البيانات المحفوظة في «بيانات البائع».",
    "选择已保存的客户，或填写信息以创建新客户。发票还会使用“卖方信息”中保存的数据。"
    ],
  "Las facturas guardadas se conservarán en la base de datos SQLite de este PC.": [
    "Saved invoices will be kept in this PC’s SQLite database.",
    "Les factures enregistrées seront conservées dans la base SQLite de ce PC.",
    "Gespeicherte Rechnungen bleiben in der SQLite-Datenbank dieses PCs erhalten.",
    "Le fatture salvate saranno conservate nel database SQLite di questo PC.",
    "Zapisane faktury będą przechowywane w bazie danych SQLite na tym komputerze.",
    "ستُحفظ الفواتير في قاعدة بيانات SQLite على هذا الكمبيوتر.", "已保存的发票将保存在此电脑的 SQLite 数据库中。"
    ],
  "Control manual de bobinas y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": [
    "Manual tracking of spools and remaining material. Price per kilogram is used as a reference for future estimates.",
    "Suivi manuel des bobines et du matériau restant. Le prix au kilo sert de référence pour les prochains calculs.",
    "Manuelle Verwaltung von Spulen und Restmaterial. Der Kilopreis dient als Referenz für künftige Kalkulationen.",
    "Gestione manuale delle bobine e del materiale residuo. Il prezzo al chilo è un riferimento per i prossimi calcoli.",
    "ręczny tracking of spools i remaining Materiał. Cena na kilogram is used as a reference dla future wyceny.",
    "تحكم يدوي في بكرات الخيوط والمواد المتبقية. يُستخدم سعر الكيلوغرام كمرجع للحسابات القادمة.", "手动管理线轴和剩余材料。每公斤价格可作为后续计算的参考。"
    ],
  "Pulsa un color para seleccionarlo o usa el selector para crear uno nuevo.": [
    "Click a colour to select it, or use the picker to create a new one.",
    "Cliquez sur une couleur pour la sélectionner ou utilisez le sélecteur pour en créer une nouvelle.",
    "Klicken Sie auf eine Farbe, um sie auszuwählen, oder verwenden Sie den Farbwähler, um eine neue zu erstellen.",
    "Fai clic su un colore per selezionarlo o usa il selettore per crearne uno nuovo.",
    "Kliknij kolor, aby go wybrać, lub użyj próbnika, aby utworzyć nowy.",
    "اضغط على لون لتحديده أو استخدم أداة الاختيار لإنشاء لون جديد.",
    "点击颜色以选择，或使用选择器创建新颜色。"
    ],
  "Número de bobinas iguales": [
    "Number of identical spools",
    "Nombre de bobines identiques",
    "Anzahl identischer Spulen",
    "Numero di bobine uguali",
    "Liczba identycznych szpul",
    "عدد البكرات المتطابقة", "相同线轴数量"
    ],
  "Precio de una bobina": [
    "Price per spool",
    "Prix d’une bobine",
    "Preis pro Spule",
    "Prezzo di una bobina",
    "Cena jednej szpuli",
    "سعر البكرة الواحدة", "单个线轴价格"
    ],
  "＋ Guardar color personalizado": [
    "＋ Save custom colour",
    "＋ Enregistrer une couleur personnalisée",
    "＋ Benutzerdefinierte Farbe speichern",
    "＋ Salva colore personalizzato",
    "＋ Zapisz niestandardowy kolor",
    "＋ حفظ لون مخصص",
    "＋ 保存自定义颜色"
    ],
  "Organiza los encargos, relaciona cada pedido con una tasación guardada y crea su presupuesto o factura desde aquí.": [
    "Organise jobs, link each order to a saved estimate, and create its quote or invoice here.",
    "Organisez les travaux, associez chaque commande à une estimation enregistrée et créez ici son devis ou sa facture.",
    "Organisieren Sie Aufträge, verknüpfen Sie jeden Auftrag mit einer gespeicherten Kalkulation und erstellen Sie hier das Angebot oder die Rechnung.",
    "Organizza i lavori, collega ogni ordine a una stima salvata e crea qui il preventivo o la fattura.",
    "Organizuj zlecenia, powiąż każde zamówienie z zapisaną wyceną i utwórz tutaj ofertę lub fakturę.",
    "نظّم المهام، واربط كل طلب بتقدير محفوظ، وأنشئ عرض السعر أو الفاتورة من هنا。", "管理委托，将订单关联到已保存的估价，并在此创建报价单或发票。"
    ],
  "Registro local de pedidos y entregas. No envía mensajes ni sincroniza con otros dispositivos.": [
    "Local record of orders and deliveries. It does not send messages or sync with other devices.",
    "Registre local des commandes et livraisons. Il n’envoie pas de messages et ne se synchronise pas avec d’autres appareils.",
    "Lokale Erfassung von Aufträgen und Lieferungen. Es werden keine Nachrichten gesendet und keine anderen Geräte synchronisiert.",
    "Registro locale di ordini e consegne. Non invia messaggi né sincronizza altri dispositivi.",
    "Lokalny rejestr zamówień i dostaw. Nie wysyła wiadomości ani nie synchronizuje się z innymi urządzeniami.",
    "سجل محلي للطلبات والتسليمات. لا يرسل رسائل ولا يتزامن مع أجهزة أخرى.", "本地订单和交付记录。不会发送消息，也不会与其他设备同步。"
    ],
  "＋ Crear cliente nuevo…": [
    "＋ Create new customer…",
    "＋ Créer un nouveau client…",
    "＋ Neuen Kunden erstellen…",
    "＋ Crea nuovo cliente…",
    "＋ Utwórz nowego klienta…",
    "＋ إنشاء عميل جديد…",
    "＋ 创建新客户……"
    ],
  "＋ Crear cliente en Clientes": [
    "＋ Create customer in Customers",
    "＋ Créer un client dans Clients",
    "＋ Kunden unter Kunden anlegen",
    "＋ Crea cliente in Clienti",
    "＋ Utwórz klienta w zakładce Klienci",
    "＋ إنشاء عميل في قسم العملاء", "＋ 在客户中创建客户"
    ],
  "Selecciona un cliente de la agenda o crea uno nuevo.": [
    "Select a customer from the directory or create a new one.",
    "Sélectionnez un client dans le répertoire ou créez-en un nouveau.",
    "Wählen Sie einen Kunden aus der Kartei oder legen Sie einen neuen an.",
    "Seleziona un cliente dalla rubrica o creane uno nuovo.",
    "Wybierz klienta z książki lub utwórz nowego.",
    "اختر عميلًا من دفتر العناوين أو أنشئ عميلًا جديدًا.", "从客户通讯录中选择客户，或创建新客户。"
    ],
  "— Selecciona una tasación guardada —": [
    "— Select a saved estimate —",
    "— Sélectionnez une estimation enregistrée —",
    "— Gespeicherte Kalkulation auswählen —",
    "— Seleziona una stima salvata —",
    "— Wybierz zapisaną wycenę —",
    "— اختر تقديرًا محفوظًا —",
    "— 选择已保存的估价 —"
    ],
  "Posprocesado": [
    "Post-processing",
    "Post-traitement",
    "Nachbearbeitung",
    "Post-elaborazione",
    "Obróbka końcowa",
    "المعالجة اللاحقة", "后处理"
    ],
  "Total estimado": [
    "Estimated total",
    "Total estimé",
    "Geschätzter Gesamtbetrag",
    "Totale stimato",
    "Szacunkowa suma",
    "الإجمالي التقديري", "预计总计"
    ],
  "Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.": [
    "Enter customer details in this form. When you save the quote, the new customer is added to “Customers” for reuse in orders, quotes and invoices. The printable document does not show internal costs or margin.",
    "Saisissez les coordonnées du client dans ce formulaire. À l’enregistrement du devis, le nouveau client est ajouté à l’onglet « Clients » pour être réutilisé. Le document imprimable n’affiche ni les coûts internes ni la marge.",
    "Geben Sie die Kundendaten ein. Beim Speichern wird der neue Kunde zu „Kunden“ hinzugefügt und kann für Aufträge, Angebote und Rechnungen wiederverwendet werden. Das Druckdokument zeigt keine internen Kosten oder Margen.",
    "Inserisci i dati del cliente. Salvando il preventivo, il nuovo cliente viene aggiunto alla scheda «Clienti» per riutilizzarlo in ordini, preventivi e fatture. Il documento stampabile non mostra costi interni o margine.",
    "Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do karty „Klienci”, aby można go było ponownie wybierać przy zamówieniach, ofertach i fakturach. Dokument do wydruku nie pokazuje kosztów wewnętrznych ani marży.",
    "أدخل بيانات العميل في هذا النموذج. عند حفظ عرض السعر، سيُضاف العميل الجديد تلقائيًا إلى تبويب «العملاء» لإعادة استخدامه في الطلبات وعروض الأسعار والفواتير. لا يعرض المستند القابل للطباعة التكاليف الداخلية أو هامش الربح.",
    "请在此表单中输入客户信息。保存报价单时，新客户会自动添加到“客户”选项卡，以便在订单、报价单和发票中重复使用。可打印文档不会显示内部成本或利润率。"
    ],
  "Selecciona un cliente guardado. Para crear uno nuevo, usa el formulario de la pestaña «Clientes».": [
    "Select a saved customer. To create a new one, use the form in the “Customers” tab.",
    "Sélectionnez un client enregistré. Pour en créer un nouveau, utilisez le formulaire de l’onglet « Clients ».",
    "Wählen Sie einen gespeicherten Kunden aus. Einen neuen Kunden legen Sie über das Formular im Tab „Kunden“ an.",
    "Seleziona un cliente salvato. Per crearne uno nuovo, usa il modulo nella scheda «Clienti».",
    "Wybierz zapisanego klienta. Aby utworzyć nowego, użyj formularza na karcie „Klienci”.",
    "اختر عميلًا محفوظًا. لإنشاء عميل جديد، استخدم النموذج في علامة التبويب «العملاء».", "选择已保存的客户。若要创建新客户，请使用“客户”选项卡中的表单。"
    ],
  "Añade varias piezas distintas al mismo documento. Puedes cambiar descripción, unidades y precio.": [
    "Add several different parts to the same document. You can change the description, quantity and price.",
    "Ajoutez plusieurs pièces différentes au même document. Vous pouvez modifier la description, la quantité et le prix.",
    "Fügen Sie mehrere unterschiedliche Teile zum selben Dokument hinzu. Beschreibung, Menge und Preis lassen sich ändern.",
    "Aggiungi più pezzi diversi allo stesso documento. Puoi modificare descrizione, quantità e prezzo.",
    "Dodaj kilka różnych części do tego samego dokumentu. Możesz zmienić opis, liczbę sztuk i cenę.",
    "أضف عدة قطع مختلفة إلى المستند نفسه. يمكنك تعديل الوصف والكمية والسعر.", "可在同一份单据中添加多个不同零件，并修改描述、数量和价格。"
    ],
  "Validez del presupuesto": [
    "Quote validity",
    "Validité du devis",
    "Angebotsgültigkeit",
    "Validità del preventivo",
    "Oferta validity",
    "صلاحية عرض السعر", "报价有效期"
    ],
  "Plazo estimado": [
    "Estimated lead time",
    "Délai estimé",
    "Geschätzte Lieferzeit",
    "Tempi stimati",
    "Szacowany czas realizacji",
    "المدة المقدّرة", "预计期限"
    ],
  "Envío (importe)": [
    "Shipping (amount)",
    "Livraison (montant)",
    "Versand (Betrag)",
    "Spedizione (importo)",
    "Wysyłka (kwota)",
    "الشحن (المبلغ)", "运费（金額）"
    ],
  "Descuento para el cliente (%)": [
    "Customer discount (%)",
    "Remise client (%)",
    "Kundenrabatt (%)",
    "Sconto cliente (%)",
    "Rabat dla klienta (%)",
    "خصم العميل (%)", "客户折扣（%）"
    ],
  "Guardar / actualizar cliente": [
    "Save / update customer",
    "Enregistrer / mettre à jour le client",
    "Kunden speichern / aktualisieren",
    "Salva / aggiorna cliente",
    "Zapisz / zaktualizuj klienta",
    "حفظ / تحديث العميل", "保存 / 更新客户"
    ],
  "Borrar cliente seleccionado": [
    "Clear selected customer",
    "Effacer le client sélectionné",
    "Ausgewählten Kunden entfernen",
    "Cancella il cliente selezionato",
    "Wyczyść wybranego klienta",
    "حذف العميل المحدد", "删除所选客户"
    ],
  "Datos del cliente": [
    "Customer details",
    "Coordonnées du client",
    "Kundendaten",
    "Dati del cliente",
    "Dane klienta",
    "بيانات العميل", "客户信息"
    ],
  "Seleccionar cliente de la agenda": [
    "Select customer from address book",
    "Sélectionner un client du répertoire",
    "Kunden aus dem Adressbuch auswählen",
    "Seleziona cliente dalla rubrica",
    "Wybierz klienta z książki adresowej",
    "اختيار عميل من دفتر العناوين", "从通讯录选择客户"
    ],
  "Los presupuestos se guardan en la base de datos SQLite de este PC y puedes volver a cargarlos, imprimirlos o eliminarlos.": [
    "Quotes are saved in this PC’s SQLite database and can be reloaded, printed or deleted.",
    "Les devis sont enregistrés dans la base SQLite de ce PC ; vous pouvez les recharger, les imprimer ou les supprimer.",
    "Angebote werden in der SQLite-Datenbank dieses PCs gespeichert und können erneut geladen, gedruckt oder gelöscht werden.",
    "I preventivi vengono salvati nel database SQLite di questo PC e puoi ricaricarli, stamparli o eliminarli.",
    "Oferty są zapisywane w bazie danych SQLite na tym komputerze. Możesz je ponownie wczytać, wydrukować lub usunąć.",
    "يتم حفظ عروض الأسعار في قاعدة بيانات SQLite على هذا الكمبيوتر، ويمكنك تحميلها مجددًا أو طباعتها أو حذفها.",
    "报价单保存在此电脑的 SQLite 数据库中，你可以重新加载、打印或删除。"
    ],
  "Snapmaker U1": [
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1", "Snapmaker U1"
    ],
  "Marca": [
    "Brand",
    "Marque",
    "Marke",
    "Marca",
    "Marka",
    "العلامة التجارية", "品牌"
    ],
  "— Selecciona marca —": [
    "— Select brand —",
    "— Sélectionner une marque —",
    "— Marke auswählen —",
    "— Seleziona marca —",
    "— Wybierz markę —",
    "— اختر العلامة التجارية —", "— 选择品牌 —"
    ],
  "Modelo": [
    "Model",
    "Modèle",
    "Modell",
    "Modello",
    "Model",
    "الطراز",
    "型号"
    ],
  "— Selecciona primero la marca —": [
    "— Select the brand first —",
    "— Sélectionnez d’abord la marque —",
    "— Wählen Sie zuerst die Marke —",
    "— Seleziona prima la marca —",
    "— Najpierw wybierz markę —",
    "— اختر العلامة التجارية أولًا —", "— 请先选择品牌 —"
    ],
  "Nombre de impresora": [
    "Printer name",
    "Nom de l’imprimante",
    "Druckername",
    "Nome stampante",
    "drukarka Nazwa",
    "اسم الطابعة", "打印机名称"
    ],
  "Potencia media (W)": [
    "Average power (W)",
    "Puissance moyenne (W)",
    "Durchschnittliche Leistung (W)",
    "Potenza media (W)",
    "Średnia moc (W)",
    "متوسط القدرة (W)", "平均功率（W）"
    ],
  "Guardar IP manual": [
    "Save IP manually",
    "Enregistrer l’IP manuellement",
    "IP manuell speichern",
    "Salva IP manualmente",
    "Zapisz IP manually",
    "حفظ عنوان IP يدويًا", "手动保存 IP"
    ],
  "Ver impresora conectada": [
    "View connected printer",
    "Voir l’imprimante connectée",
    "Verbundene Drucker anzeigen",
    "Visualizza stampante connessa",
    "Wyświetl podłączoną drukarkę",
    "عرض الطابعة المتصلة", "查看已连接的打印机"
    ],
  "Impresoras encontradas": [
    "Printers found",
    "Imprimantes trouvées",
    "Gefundene Drucker",
    "Stampanti trovate",
    "Znalezione drukarki",
    "الطابعات التي تم العثور عليها", "已发现的打印机"
    ],
  "Buscando impresoras…": [
    "Searching for printers…",
    "Recherche des imprimantes…",
    "Suche nach Druckern…",
    "Ricerca delle stampanti…",
    "Wyszukiwanie drukarek…",
    "جارٍ البحث عن الطابعات…", "正在搜索打印机…"
    ],
  "Dirección del puente local (este ordenador)": [
    "Local bridge address (this computer)",
    "Adresse du pont local (cet ordinateur)",
    "Adresse der lokalen Bridge (dieser Computer)",
    "Indirizzo del bridge locale (questo computer)",
    "Adres lokalnego mostu (ten komputer)",
    "عنوان الجسر المحلي (هذا الكمبيوتر)", "本地桥接地址（此电脑）"
    ],
  "Ruta de estado": [
    "Status endpoint",
    "Chemin d’état",
    "Status-Endpunkt",
    "Percorso dello stato",
    "Ścieżka stanu",
    "مسار الحالة", "状态路径"
    ],
  "IP de la impresora U1 (opcional)": [
    "U1 printer IP address (optional)",
    "Adresse IP de l’imprimante U1 (facultatif)",
    "IP-Adresse des U1-Druckers (optional)",
    "Indirizzo IP della stampante U1 (facoltativo)",
    "Adres IP drukarki U1 (opcjonalnie)",
    "عنوان IP لطابعة U1 (اختياري)", "U1 打印机 IP（可选）"
    ],
  "Nombre personalizado de la impresora seleccionada": [
    "Custom name for the selected printer",
    "Nom personnalisé de l’imprimante sélectionnée",
    "Benutzerdefinierter Name des ausgewählten Druckers",
    "Nome personalizzato della stampante selezionata",
    "Niestandardowa nazwa wybranej drukarki",
    "الاسم المخصص للطابعة المحددة", "所选打印机的自定义名称"
    ],
  "Guardar nombre": [
    "Save name",
    "Enregistrer le nom",
    "Namen speichern",
    "Salva nome",
    "Zapisz nazwę",
    "حفظ الاسم", "保存名称"
    ],
  "Configuración de la impresora": [
    "Printer configuration",
    "Configuration de l’imprimante",
    "Druckerkonfiguration",
    "Configurazione della stampante",
    "Konfiguracja drukarki",
    "إعدادات الطابعة", "打印机设置"
    ],
  "La dirección del puente es este ordenador; la IP de la U1 es la impresora. Puedes introducirla manualmente o intentar buscarla en la red local. La búsqueda requiere que el puente esté iniciado y que la impresora y el ordenador estén en la misma red.": [
    "The bridge address refers to this computer; the U1 IP is the printer. Enter it manually or search the local network. Searching requires the bridge to be running and the printer and computer to be on the same network.",
    "L’adresse du pont correspond à cet ordinateur ; l’adresse IP de l’U1 est celle de l’imprimante. Vous pouvez la saisir manuellement ou la rechercher sur le réseau local. La recherche nécessite que le pont soit démarré et que l’imprimante et l’ordinateur soient sur le même réseau.",
    "Die Bridge-Adresse gehört zu diesem Computer; die U1-IP gehört zum Drucker. Sie können sie manuell eingeben oder im lokalen Netzwerk suchen. Dafür muss die Bridge laufen und Drucker und Computer müssen sich im selben Netzwerk befinden.",
    "L’indirizzo del bridge è quello di questo computer; l’IP della U1 è quella della stampante. Puoi inserirla manualmente o cercarla nella rete locale. La ricerca richiede che il bridge sia avviato e che stampante e computer siano sulla stessa rete.",
    "Adres mostu dotyczy tego komputera, a adres IP U1 — drukarki. Możesz wpisać go ręcznie lub wyszukać w sieci lokalnej. Wyszukiwanie wymaga uruchomionego mostu oraz tej samej sieci dla drukarki i komputera.",
    "عنوان الجسر هو هذا الكمبيوتر؛ وعنوان IP الخاص بـ U1 هو عنوان الطابعة. يمكنك إدخاله يدويًا أو البحث عنه في الشبكة المحلية. يتطلب البحث تشغيل الجسر ووجود الطابعة والكمبيوتر على الشبكة نفسها.",
    "桥接服务地址是这台电脑；U1 的 IP 地址是打印机地址。你可以手动输入，也可以尝试在本地网络中搜索。搜索要求桥接服务已启动，并且打印机与电脑处于同一网络。"
    ],
  "País para impuestos": [
    "Tax country",
    "Pays pour les taxes",
    "Steuerland",
    "Paese per le imposte",
    "Podatek country",
    "بلد الضرائب", "税务国家/地区"
    ],
  "España · IVA 21%": [
    "Spain · VAT 21%",
    "Espagne · TVA 21 %",
    "Spanien · MwSt. 21 %",
    "Spagna · IVA 21%",
    "Hiszpania · VAT 21%",
    "إسبانيا · ضريبة القيمة المضافة 21%",
    "西班牙 · 增值税 21%"
    ],
  "Portugal · IVA 23%": [
    "Portugal · VAT 23%",
    "Portugal · TVA 23 %",
    "Portugal · MwSt. 23 %",
    "Portogallo · IVA 23%",
    "Portugalia · VAT 23%",
    "البرتغال · ضريبة القيمة المضافة 23%", "葡萄牙 · 增值税 23%"
    ],
  "Francia · TVA 20%": [
    "France · VAT 20%",
    "France · TVA 20 %",
    "Frankreich · MwSt. 20 %",
    "Francia · IVA 20%",
    "Francja · VAT 20%",
    "فرنسا · ضريبة القيمة المضافة 20%", "法国 · 增值税 20%"
    ],
  "Alemania · IVA 19%": [
    "Germany · VAT 19%",
    "Allemagne · TVA 19 %",
    "Deutschland · MwSt. 19 %",
    "Germania · IVA 19%",
    "Niemcy · VAT 19%",
    "ألمانيا · ضريبة القيمة المضافة 19%", "德国 · 增值税 19%"
    ],
  "Italia · IVA 22%": [
    "Italy · VAT 22%",
    "Italie · TVA 22 %",
    "Italien · MwSt. 22 %",
    "Italia · IVA 22%",
    "Włochy · VAT 22%",
    "إيطاليا · ضريبة القيمة المضافة 22%", "意大利 · 增值税 22%"
    ],
  "Reino Unido · VAT 20%": [
    "United Kingdom · VAT 20%",
    "Royaume-Uni · TVA 20 %",
    "Vereinigtes Königreich · MwSt. 20 %",
    "Regno Unito · IVA 20%",
    "Wielka Brytania · VAT 20%",
    "المملكة المتحدة · ضريبة القيمة المضافة 20%", "英国 · 增值税 20%"
    ],
  "Estados Unidos · impuesto manual": [
    "United States · manual tax",
    "États-Unis · taxe manuelle",
    "USA · manuelle Steuer",
    "Stati Uniti · imposta manuale",
    "United States · ręczny Podatek",
    "الولايات المتحدة · ضريبة يدوية", "美国 · 手动设置税费"
    ],
  "Otro país · impuesto manual": [
    "Other country · manual tax",
    "Autre pays · taxe manuelle",
    "Anderes Land · manuelle Steuer",
    "Altro paese · imposta manuale",
    "Inny kraj · podatek ręczny",
    "بلد آخر · ضريبة يدوية", "其他国家 · 手动设置税费"
    ],
  "Editar": [
    "Editer",
    "Modifier",
    "Bearbeiten",
    "Modifica",
    "Edytuj",
    "تعديل", "编辑"
    ],
  "Guardar": [
    "Save",
    "Enregistrer",
    "Speichern",
    "Salva",
    "Zapisz",
    "حفظ", "保存"
    ],
  "Cliente": [
    "Customer",
    "Client",
    "Kunde",
    "Cliente",
    "Klient",
    "العميل", "客户"
    ],
  "Seleccionar cliente": [
    "Select customer",
    "Sélectionner un client",
    "Kunden auswählen",
    "Seleziona cliente",
    "Wybierz klienta",
    "اختيار العميل", "选择客户"
    ],
  "— Cliente nuevo —": [
    "— New customer —",
    "— Nouveau client —",
    "— Neuer Kunde —",
    "— Nuovo cliente —",
    "— Nowy klient —",
    "— عميل جديد —", "— 新客户 —"
    ],
  "Ucrania · IVA general 20%": [
    "Ukraine · standard VAT 20%",
    "Ukraine · TVA standard 20 %",
    "Ukraine · Regelsteuersatz 20 %",
    "Ucraina · IVA ordinaria 20%",
    "Ukraina · standardowa stawka VAT 20%",
    "أوكرانيا · ضريبة القيمة المضافة العامة 20%",
    "乌克兰 · 标准增值税 20%"
    ],
  "Rusia · tipo general orientativo 20%": [
    "Russia · indicative standard rate 20%",
    "Russie · taux standard indicatif 20 %",
    "Russland · Richtwert Regelsteuersatz 20 %",
    "Russia · aliquota ordinaria indicativa 20%",
    "Rosja · orientacyjna standardowa stawka 20%",
    "روسيا · معدل عام إرشادي 20%", "俄罗斯 · 参考标准税率 20%"
    ],
  "Argentina · IVA general 21%": [
    "Argentina · standard VAT 21%",
    "Argentine · TVA standard 21 %",
    "Argentinien · Regelsteuersatz 21 %",
    "Argentina · IVA ordinaria 21%",
    "Argentyna · standardowa stawka VAT 21%",
    "الأرجنتين · ضريبة القيمة المضافة العامة 21%", "阿根廷 · 标准增值税 21%"
    ],
  "Colombia · IVA general 19%": [
    "Colombia · standard VAT 19%",
    "Colombie · TVA standard 19 %",
    "Kolumbien · Regelsteuersatz 19 %",
    "Colombia · IVA ordinaria 19%",
    "Kolumbia · standardowa stawka VAT 19%",
    "كولومبيا · ضريبة القيمة المضافة العامة 19%", "哥伦比亚 · 标准增值税 19%"
    ],
  "Chile · IVA general 19%": [
    "Chile · standard VAT 19%",
    "Chili · TVA standard 19 %",
    "Chile · Regelsteuersatz 19 %",
    "Cile · IVA ordinaria 19%",
    "Chile · standardowa stawka VAT 19%",
    "تشيلي · ضريبة القيمة المضافة العامة 19%", "智利 · 标准增值税 19%"
    ],
  "Brasil · referencia orientativa 17% (varía)": [
    "Brazil · indicative reference 17% (varies)",
    "Brésil · référence indicative 17 % (variable)",
    "Brasilien · Richtwert 17 % (variabel)",
    "Brasile · riferimento indicativo 17% (variabile)",
    "Brazylia · orientacyjna stawka 17% (zmienna)",
    "البرازيل · نسبة إرشادية 17% (قد تختلف)", "巴西 · 参考税率 17%（可能有所不同）"
    ],
  "Perú · IGV 18%": [
    "Peru · IGV 18%",
    "Pérou · IGV 18 %",
    "Peru · IGV 18 %",
    "Perù · IGV 18%",
    "Peru · podatek IGV 18%",
    "بيرو · ضريبة IGV بنسبة 18%", "秘鲁 · IGV 税率 18%"
    ],
  "Uruguay · IVA general 22%": [
    "Uruguay · standard VAT 22%",
    "Uruguay · TVA standard 22 %",
    "Uruguay · Regelsteuersatz 22 %",
    "Uruguay · IVA ordinaria 22%",
    "Urugwaj · standardowa stawka VAT 22%",
    "أوروغواي · ضريبة القيمة المضافة العامة 22%", "乌拉圭 · 标准增值税 22%"
    ],
  "Venezuela · tipo general orientativo 16%": [
    "Venezuela · indicative standard rate 16%",
    "Venezuela · taux standard indicatif 16 %",
    "Venezuela · Richtwert Regelsteuersatz 16 %",
    "Venezuela · aliquota ordinaria indicativa 16%",
    "Wenezuela · orientacyjna standardowa stawka 16%",
    "فنزويلا · معدل عام إرشادي 16%", "委内瑞拉 · 参考标准税率 16%"
    ],
  "Estados Unidos · depende del estado/localidad": [
    "United States · varies by state/locality",
    "États-Unis · varie selon l’État/la localité",
    "USA · abhängig von Bundesstaat/Ort",
    "Stati Uniti · varia in base a stato/località",
    "Stany Zjednoczone · zależy od stanu/lokalizacji",
    "الولايات المتحدة · يعتمد على ال州／المنطقة المحلية", "美国 · 取决于州／地方辖区"
    ],
  "Canadá · federal 5%, pueden añadirse impuestos provinciales": [
    "Canada · federal 5%, provincial taxes may apply",
    "Canada · fédéral 5 %, des taxes provinciales peuvent s’ajouter",
    "Kanada · Bund 5 %, zusätzliche Provinzsteuern möglich",
    "Canada · federale 5%, possono aggiungersi imposte provinciali",
    "Kanada · podatek federalny 5%, mogą obowiązywać podatki prowincjonalne",
    "كندا · ضريبة اتحادية 5%، وقد تُضاف ضرائب المقاطعات", "加拿大 · 联邦税 5%，可能另加省级税费"
    ],
  "Australia · GST 10%": [
    "Australia · GST 10%",
    "Australie · GST 10 %",
    "Australien · GST 10 %",
    "Australia · GST 10%",
    "Australia · GST 10%",
    "أستراليا · ضريبة GST بنسبة 10%", "澳大利亚 · GST 10%"
    ],
  "India · GST orientativo 18% (según producto)": [
    "India · indicative GST 18% (depends on product)",
    "Inde · GST indicatif 18 % (selon le produit)",
    "Indien · Richtwert für GST 18 % (produktabhängig)",
    "India · GST indicativa 18% (in base al prodotto)",
    "Indie · orientacyjny GST 18% (zależnie od produktu)",
    "الهند · ضريبة GST إرشادية 18% (حسب المنتج)", "印度 · 参考 GST 税率 18%（视产品而定）"
    ],
  "China · referencia orientativa 13%": [
    "China · indicative reference 13%",
    "Chine · taux indicatif 13 %",
    "China · Richtwert 13 %",
    "Cina · riferimento indicativo 13%",
    "Chiny · orientacyjna stawka 13%",
    "الصين · نسبة إرشادية 13%", "中国 · 参考税率 13%"
    ],
  "Marketplace · ejemplo 6,5%": [
    "Marketplace · example 6.5%",
    "Place de marché · exemple 6,5 %",
    "Marktplatz · Beispiel 6,5 %",
    "Marketplace · esempio 6,5%",
    "Marketplace · przykład 6,5%",
    "السوق الإلكتروني · مثال 6,5%", "电商平台 · 示例 6.5%"
    ],
  "Marketplace · ejemplo 15%": [
    "Marketplace · example 15%",
    "Place de marché · exemple 15 %",
    "Marktplatz · Beispiel 15 %",
    "Marketplace · esempio 15%",
    "Marketplace · przykład 15%",
    "السوق الإلكتروني · مثال 15%", "电商平台 · 示例 15%"
    ],
  "Pago online · ejemplo 2,9% + 0,30": [
    "Online payment · example 2.9% + 0.30",
    "Paiement en ligne · exemple 2,9 % + 0,30",
    "Online-Zahlung · Beispiel 2,9 % + 0,30",
    "Pagamento online · esempio 2,9% + 0,30",
    "Płatność online · przykład 2,9% + 0,30",
    "الدفع عبر الإنترنت · مثال 2,9% + 0,30", "在线支付 · 示例 2.9% + 0.30"
    ],
  "Comisión de venta (%)": [
    "Sales commission (%)",
    "Commission de vente (%)",
    "Verkaufsprovision (%)",
    "Commissione di vendita (%)",
    "Prowizja od sprzedaży (%)",
    "عمولة البيع (%)", "销售佣金（%）"
    ],
  "Porcentaje de beneficio (%)": [
    "Profit percentage (%)",
    "Pourcentage de bénéfice (%)",
    "Gewinnprozentsatz (%)",
    "Percentuale di profitto (%)",
    "Procent zysku (%)",
    "نسبة الربح (%)", "利润百分比（%）"
    ],
  "Redondeo del precio recomendado": [
    "Recommended price rounding",
    "Arrondi du prix recommandé",
    "Rundung des empfohlenen Preises",
    "Arrotondamento del prezzo consigliato",
    "Zaokrąglanie zalecanej ceny",
    "تقريب السعر الموصى به", "建议价格取整"
    ],
  "Desglose del impuesto (vista previa)": [
    "Tax breakdown (preview)",
    "Détail de la taxe (aperçu)",
    "Steueraufschlüsselung (Vorschau)",
    "Dettaglio imposte (anteprima)",
    "Podatek breakdown (preview)",
    "تفصيل الضريبة (معاينة)", "税费明细（预览）"
    ],
  "—": [
    "—",
    "—",
    "—",
    "—",
    "—",
    "—",
    "—"
    ],
  "0,00 €": [
    "€0.00",
    "0,00 €",
    "0,00 €",
    "0,00 €",
    "€0.00",
    "0,00 €", "0.00 €"
    ],
  "/ unidad)": [
    "/ unit)",
    "/ unité)",
    "/ Stück)",
    "/ unità)",
    "/ Jednostka)",
    "/ وحدة)", "/ 件)"
    ],
  "Print Cost & Profit v1.283 · SQLite local en el PC; diagnóstico de integridad y copias de seguridad.": [
    "Print Cost & Profit v1.283 · Local SQLite on this PC; integrity and backup diagnostics.",
    "Print Cost & Profit v1.283 · SQLite local sur ce PC ; diagnostic d’intégrité et des sauvegardes.",
    "Print Cost & Profit v1.283 · Lokale SQLite-Datenbank auf diesem PC; Integritäts- und Sicherungsdiagnose.",
    "Print Cost & Profit v1.283 · SQLite locale su questo PC; diagnostica di integrità e backup.",
    "Print Cost & Profit v1.283 · lokalna baza SQLite na komputerze; diagnostyka integralności i kopii zapasowych.",
    "Print Cost & Profit v1.283 · قاعدة SQLite محلية على الكمبيوتر؛ فحص السلامة والنسخ الاحتياطية.", "Print Cost & Profit v1.283 · 电脑本地 SQLite；完整性诊断与备份。"
    ],
  "— Selecciona un cliente —": [
    "— Select a customer —",
    "— Sélectionnez un client —",
    "— Kunden auswählen —",
    "— Seleziona un cliente —",
    "— Wybierz klienta —",
    "— اختر عميلًا —", "— 选择客户 —"
    ],
  "DNI / NIE / CIF / NIF": [
    "Tax ID / VAT number",
    "Identifiant fiscal / TVA",
    "Steuer-ID / USt-IdNr.",
    "Codice fiscale / partita IVA",
    "Podatek ID / VAT number",
    "رقم الهوية / الرقم الضريبي", "身份证号 / 税号"
    ],
  "México · IVA 16%": [
    "Mexico · VAT 16%",
    "Mexique · TVA 16 %",
    "Mexiko · MwSt. 16 %",
    "Messico · IVA 16%",
    "Meksyk · VAT 16%",
    "المكسيك · ضريبة القيمة المضافة 16%",
    "墨西哥 · 增值税 16%"
    ],
  "Impuesto (%)": [
    "Tax (%)",
    "Taxe (%)",
    "Steuer (%)",
    "Imposta (%)",
    "Podatek (%)",
    "الضريبة (%)", "税费（%）"
    ],
  "Cliente guardado": [
    "Saved customer",
    "Client enregistré",
    "Gespeicherter Kunde",
    "Cliente salvato",
    "Zapisany klient",
    "تم حفظ العميل", "客户已保存"
    ],
  "— Crear cliente nuevo / introducir datos —": [
    "— Create new customer / enter details —",
    "— Créer un nouveau client / saisir les données —",
    "— Neuen Kunden anlegen / Daten eingeben —",
    "— Crea nuovo cliente / inserisci i dati —",
    "— Utwórz nowego klienta / wprowadź dane —",
    "— إنشاء عميل جديد / إدخال البيانات —", "— 新建客户 / 输入信息 —"
    ],
  "Continuar y crear factura": [
    "Continue and create invoice",
    "Continuer et créer la facture",
    "Weiter und Rechnung erstellen",
    "Continua e crea fattura",
    "Kontynuuj i Utwórz Faktura",
    "متابعة وإنشاء الفاتورة", "继续并创建发票"
    ],
  "— Selecciona un cliente guardado —": [
    "— Select a saved customer —",
    "— Sélectionnez un client enregistré —",
    "— Gespeicherten Kunden auswählen —",
    "— Seleziona un cliente salvato —",
    "— Wybierz a Zapisano Klient —",
    "— اختر عميلًا محفوظًا —", "— 选择已保存的客户 —"
    ],
  "Escribe un nombre, correo o teléfono y pulsa «Buscar cliente».": [
    "Enter a name, email or phone number and click “Search customer”.",
    "Saisissez un nom, un e-mail ou un téléphone, puis cliquez sur « Rechercher un client ».",
    "Geben Sie einen Namen, eine E-Mail-Adresse oder Telefonnummer ein und klicken Sie auf „Kunden suchen“.",
    "Inserisci un nome, un’e-mail o un telefono e premi «Cerca cliente».",
    "Wpisz imię/nazwę, e-mail lub telefon i kliknij „Szukaj klienta”.",
    "اكتب اسمًا أو بريدًا إلكترونيًا أو رقم هاتف، ثم اضغط «البحث عن عميل».", "输入姓名、电子邮件或电话，然后点击“搜索客户”。"
    ],
  "Se aplica al subtotal de las piezas y también aparecerá en la factura.": [
    "It is applied to the parts subtotal and will also appear on the invoice.",
    "Il s’applique au sous-total des pièces et apparaîtra également sur la facture.",
    "Er wird auf die Zwischensumme der Teile angewendet und erscheint auch auf der Rechnung.",
    "Si applica al subtotale dei pezzi e apparirà anche in fattura.",
    "Jest naliczany od sumy części i pojawi się również na fakturze.",
    "يُطبّق على المجموع الفرعي للقطع وسيظهر أيضًا في الفاتورة.", "此折扣应用于零件小计，也会显示在发票中。"
    ],
  "Todavía no hay presupuestos guardados.": [
    "There are no saved quotes yet.",
    "Aucun devis n’a encore été enregistré.",
    "Es wurden noch keine Angebote gespeichert.",
    "Non ci sono ancora preventivi salvati.",
    "Nie zapisano jeszcze żadnych ofert.",
    "لا توجد عروض أسعار محفوظة بعد.", "尚无已保存的报价单。"
    ],
  "RGB #000000 · Negro": [
    "RGB #000000 · Black",
    "RVB #000000 · Noir",
    "RGB #000000 · Schwarz",
    "RGB #000000 · Nero",
    "RGB #000000 · Czarny",
    "RGB #000000 · أسود",
    "RGB #000000 · 黑色"
    ],
  "Ordenar bobinas": [
    "Sort spools",
    "Trier les bobines",
    "Spulen sortieren",
    "Ordina bobine",
    "Sortuj szpule",
    "ترتيب بكرات الخيوط", "排序线轴"
    ],
  "— Crear cliente nuevo…": [
    "— Create new customer…",
    "— Créer un nouveau client…",
    "— Neuen Kunden anlegen…",
    "— Crea nuovo cliente…",
    "— Utwórz nowy Klient…",
    "— إنشاء عميل جديد…", "— 新建客户…"
    ],
  "Carga un G-code y revisa los filamentos.": [
    "Load G-code and review the filaments.",
    "Chargez un G-code et vérifiez les filaments.",
    "G-Code laden und Filamente prüfen.",
    "Carica un G-code e controlla i filamenti.",
    "Wczytaj G-code i sprawdź filamenty.",
    "حمّل ملف G-code وراجع خيوط الطباعة.", "加载 G-code 文件并检查耗材。"
    ],
  "Esperando puente…": [
    "Waiting for bridge…",
    "En attente de la passerelle…",
    "Warte auf Bridge…",
    "In attesa del bridge…",
    "Oczekiwanie na most komunikacyjny…",
    "في انتظار الجسر…", "正在等待桥接服务…"
    ],
  "Filamento reportado": [
    "Reported filament usage",
    "Consommation de filament signalée",
    "Gemeldeter Filamentverbrauch",
    "Consumo di filamento segnalato",
    "Zgłoszone zużycie filamentu",
    "خيط الطباعة المُبلّغ عنه", "检测到的耗材"
    ],
  "Consumo previsto · G-code activo de la U1": [
    "Expected usage · active U1 G-code",
    "Consommation prévue · G-code actif de la U1",
    "Erwarteter Verbrauch · aktiver U1-G-Code",
    "Consumo previsto · G-code attivo della U1",
    "Przewidywane zużycie · aktywny G-code U1",
    "الاستهلاك المتوقع · ملف G-code النشط للطابعة U1", "预计用量 · U1 当前活动 G-code"
    ],
  "Cargando materiales…": [
    "Loading materials…",
    "Chargement des matériaux…",
    "Materialien werden geladen…",
    "Caricamento dei materiali…",
    "Ładowanie materiałów…",
    "جارٍ تحميل المواد…", "正在加载材料…"
    ],
  "Fuente pendiente: esperando archivo activo de la U1…": [
    "Source pending: waiting for the U1 active file…",
    "Source en attente : en attente du fichier actif de l’U1…",
    "Quelle ausstehend: Warte auf die aktive U1-Datei…",
    "Sorgente in attesa: in attesa del file attivo della U1…",
    "Oczekiwanie na źródło: oczekiwanie na aktywny plik U1…",
    "المصدر معلّق: في انتظار الملف النشط للطابعة U1…", "来源待定：正在等待 U1 的活动文件…"
    ],
  "Leyendo datos del G-code… 0%": [
    "Reading G-code data… 0%",
    "Lecture des données G-code… 0 %",
    "G-Code-Daten werden gelesen… 0 %",
    "Lettura dei dati G-code… 0%",
    "Odczytywanie danych G-code… 0%",
    "جارٍ قراءة بيانات G-code… 0٪", "正在读取 G-code 数据… 0%"
    ],
  "Material / color": [
    "Material / colour",
    "Matériau / couleur",
    "Material / Farbe",
    "Materiale / colore",
    "Materiał / kolor",
    "المادة / اللون", "材料 / 颜色"
    ],
  "Bobina": [
    "Spool",
    "Bobine",
    "Spule",
    "Bobina",
    "Szpula",
    "بكرة خيط", "线轴"
    ],
  "Estimación previa; no es una medición real por color. El stock solo se descuenta al completar el trabajo.": [
    "Preliminary estimate; not an actual per-colour measurement. Stock is deducted only when the job is completed.",
    "Estimation préliminaire ; il ne s’agit pas d’une mesure réelle par couleur. Le stock n’est déduit qu’une fois le travail terminé.",
    "Vorläufige Schätzung, keine tatsächliche Messung je Farbe. Der Bestand wird erst nach Abschluss des Auftrags abgezogen.",
    "Stima preliminare, non una misurazione reale per colore. Le scorte vengono detratte solo al completamento del lavoro.",
    "Wstępny szacunek, a nie rzeczywisty pomiar dla każdego koloru. Zapas jest odejmowany dopiero po zakończeniu zadania.",
    "تقدير أولي؛ وليس قياسًا فعليًا لكل لون. لا يُخصم المخزون إلا عند إكمال العمل.", "初步估算，并非按颜色进行的实际测量。只有完成任务后才会扣减库存。"
    ],
  "🖨 Snapmaker U1 · Mostrar panel": [
    "🖨 Snapmaker U1 · Show panel",
    "🖨 Snapmaker U1 · Afficher le panneau",
    "🖨 Snapmaker U1 · Bereich anzeigen",
    "🖨 Snapmaker U1 · Mostra pannello",
    "🖨 Snapmaker U1 · Pokaż panel",
    "🖨 Snapmaker U1 · عرض اللوحة", "🖨 Snapmaker U1 · 显示面板"
    ],
  "Resumen local basado en las tasaciones guardadas y los movimientos que añadas. Los importes de la calculadora son estimaciones, no cobros confirmados.": [
    "Local summary based on saved estimates and entries you add. Calculator amounts are estimates, not confirmed receipts.",
    "Résumé local basé sur les estimations enregistrées et les écritures ajoutées. Les montants du calculateur sont des estimations, pas des encaissements confirmés.",
    "Lokale Zusammenfassung gespeicherter Kalkulationen und hinzugefügter Buchungen. Rechnerbeträge sind Schätzungen, keine bestätigten Zahlungseingänge.",
    "Riepilogo locale basato sulle stime salvate e sui movimenti aggiunti. Gli importi del calcolatore sono stime, non incassi confermati.",
    "Lokalne podsumowanie zapisanych wycen i dodanych zapisów. Kwoty z kalkulatora są szacunkowe, a nie potwierdzone jako otrzymane płatności.",
    "ملخص محلي يستند إلى التقديرات المحفوظة والحركات التي تضيفها. المبالغ في الحاسبة تقديرية وليست مبالغ محصّلة مؤكدة.", "本地摘要基于已保存的估价和你添加的记录。计算器中的金额为估算值，并非已确认收款。"
    ],
  "Ingreso de pedido cobrado": [
    "Collected order income",
    "Revenu de commande encaissé",
    "Erhaltener Auftragserlös",
    "Entrata dell’ordine incassata",
    "Otrzymany przychód z zamówienia",
    "إيراد الطلب المحصّل", "已收订单收入"
    ],
  "Importe (€)": [
    "Amount (€)",
    "Montant (€)",
    "Betrag (€)",
    "Importo (€)",
    "kwota (€)",
    "المبلغ (€)", "金额（€）"
    ],
  "Cada tasación guardada se clasifica una sola vez. Las impresiones personales solo suman costes; los pedidos suman costes y beneficio estimado.": [
    "Each saved estimate is classified only once. Personal prints add costs only; orders include costs and estimated profit.",
    "Chaque estimation enregistrée n’est classée qu’une seule fois. Les impressions personnelles ajoutent uniquement des coûts ; les commandes incluent les coûts et le bénéfice estimé.",
    "Jede gespeicherte Kalkulation wird nur einmal zugeordnet. Private Drucke erfassen nur Kosten; Aufträge erfassen Kosten und geschätzten Gewinn.",
    "Ogni stima salvata viene classificata una sola volta. Le stampe personali aggiungono solo costi; gli ordini includono costi e profitto stimato.",
    "Każda zapisana wycena jest klasyfikowana tylko raz. Wydruki prywatne uwzględniają wyłącznie koszty; zamówienia obejmują koszty i szacowany zysk.",
    "يُصنّف كل تقدير محفوظ مرة واحدة فقط. تضيف الطباعة الشخصية التكاليف فقط؛ أما الطلبات فتضيف التكاليف والربح التقديري.", "每份已保存的估价只归类一次。个人打印只计入成本；订单则计入成本和预计利润。"
    ],
  "Preferencias generales de Print Cost & Profit. Los cambios se guardan en la base de datos SQLite de este PC.": [
    "General Print Cost & Profit preferences. Changes are saved in this PC’s SQLite database.",
    "Préférences générales de Print Cost & Profit. Les modifications sont enregistrées dans la base SQLite de ce PC.",
    "Allgemeine Einstellungen von Print Cost & Profit. Änderungen werden in der SQLite-Datenbank dieses PCs gespeichert.",
    "Preferenze generali di Print Cost & Profit. Le modifiche vengono salvate nel database SQLite di questo PC.",
    "Ogólne ustawienia Print Cost & Profit. Zmiany są zapisywane w bazie danych SQLite na tym komputerze.",
    "التفضيلات العامة لتطبيق Print Cost & Profit. تُحفظ التغييرات في قاعدة بيانات SQLite على هذا الكمبيوتر.", "Print Cost & Profit 的常规偏好设置。更改将保存到此电脑的 SQLite 数据库中。"
    ],
  "Configura tus datos una sola vez. Se guardan en este navegador y se reutilizan en presupuestos y documentos imprimibles.": [
    "Enter your details once. They are saved in this browser and reused in quotes and printable documents.",
    "Configurez vos coordonnées une seule fois. Elles sont enregistrées dans ce navigateur et réutilisées dans les devis et documents imprimables.",
    "Geben Sie Ihre Daten einmal ein. Sie werden in diesem Browser gespeichert und für Angebote und druckbare Dokumente wiederverwendet.",
    "Configura i tuoi dati una sola volta. Vengono salvati in questo browser e riutilizzati nei preventivi e nei documenti stampabili.",
    "Wprowadź swoje dane tylko raz. Są zapisywane w tej przeglądarce i wykorzystywane ponownie w ofertach oraz dokumentach do druku.",
    "أدخل بياناتك مرة واحدة. تُحفظ في هذا المتصفح وتُستخدم مجددًا في عروض الأسعار والمستندات القابلة للطباعة.", "只需设置一次你的信息。信息会保存在此浏览器中，并用于报价单和可打印文档。"
    ],
  "Nombre comercial / empresa": [
    "Trading name / company",
    "Nom commercial / entreprise",
    "Firmenname",
    "Nome commerciale / azienda",
    "Trading Nazwa / company",
    "الاسم التجاري / الشركة", "商号 / 公司"
    ],
  "NIF / CIF (opcional)": [
    "Tax ID (optional)",
    "Identifiant fiscal (facultatif)",
    "Steuer-ID (optional)",
    "Codice fiscale (facoltativo)",
    "Podatek ID (optional)",
    "الرقم الضريبي (اختياري)", "税号（可选）"
    ],
  "Guardar datos del vendedor": [
    "Save seller details",
    "Enregistrer les coordonnées du vendeur",
    "Verkäuferdaten speichern",
    "Salva dati venditore",
    "Zapisz dane sprzedawcy",
    "حفظ بيانات البائع", "保存卖家信息"
    ],
  "Datos no guardados todavía.": [
    "Data has not been saved yet.",
    "Les données n’ont pas encore été enregistrées.",
    "Daten wurden noch nicht gespeichert.",
    "I dati non sono ancora stati salvati.",
    "Dane nie zostały jeszcze zapisane.",
    "لم تُحفظ البيانات بعد.", "信息尚未保存。"
    ],
  "Moneda del programa": [
    "Program currency",
    "Devise du programme",
    "Programm-Währung",
    "Valuta del programma",
    "Waluta programu",
    "عملة البرنامج", "程序货币"
    ],
  "Actualiza la moneda usada por la calculadora.": [
    "Updates the currency used by the calculator.",
    "Met à jour la devise utilisée par la calculatrice.",
    "Aktualisiert die von der Kalkulation verwendete Währung.",
    "Aggiorna la valuta usata dalla calcolatrice.",
    "Aktualizuje walutę używaną przez kalkulator.",
    "حدّث العملة التي تستخدمها الحاسبة.", "更新计算器使用的货币。"
    ],
  "Perfil fiscal orientativo": [
    "Indicative tax profile",
    "Profil fiscal indicatif",
    "Orientierendes Steuerprofil",
    "Profilo fiscale indicativo",
    "Orientacyjny profil podatkowy",
    "الملف الضريبي الإرشادي", "参考税务配置"
    ],
  "IVA / impuesto de la calculadora (%)": [
    "VAT / calculator tax (%)",
    "TVA / taxe de la calculatrice (%)",
    "MwSt. / Steuer der Kalkulation (%)",
    "IVA / imposta della calcolatrice (%)",
    "VAT / podatek kalkulatora (%)",
    "ضريبة القيمة المضافة / ضريبة الحاسبة (%)", "计算器增值税 / 税费（%）"
    ],
  "Aplicar impuestos en el cálculo": [
    "Apply taxes in the calculation",
    "Appliquer les taxes au calcul",
    "Steuern in die Berechnung einbeziehen",
    "Applica le imposte al calcolo",
    "Uwzględnij podatki w obliczeniach",
    "تطبيق الضرائب في الحساب", "在计算中应用税费"
    ],
  "Esta opción se sincroniza con la casilla de impuestos de la calculadora. Los impuestos de facturas se mantienen en su propio formulario.": [
    "This option syncs with the calculator’s tax checkbox. Invoice taxes remain in their own form.",
    "Cette option est synchronisée avec la case de taxe du calculateur. Les taxes des factures restent dans leur propre formulaire.",
    "Diese Option wird mit dem Steuer-Kontrollkästchen des Rechners synchronisiert. Rechnungssteuern bleiben im eigenen Formular.",
    "Questa opzione si sincronizza con la casella delle imposte del calcolatore. Le imposte delle fatture restano nel proprio modulo.",
    "Ta opcja synchronizuje się z polem podatku w kalkulatorze. Podatki na fakturach pozostają w osobnym formularzu.",
    "تتزامن هذه الإعدادات مع مربع الضرائب في الحاسبة. وتظل ضرائب الفواتير ضمن نموذجها الخاص.", "此选项与计算器中的税费复选框同步。发票税费仍在各自的表单中单独设置。"
    ],
  "Guardar moneda e impuestos": [
    "Save currency and taxes",
    "Enregistrer la devise et les taxes",
    "Währung und Steuern speichern",
    "Salva valuta e imposte",
    "Zapisz walutę i podatki",
    "حفظ العملة والضرائب", "保存货币和税费"
    ],
  "Si hay varias impresoras, selecciona aquí la que quieras utilizar.": [
    "If several printers are available, select the one you want to use here.",
    "Si plusieurs imprimantes sont disponibles, sélectionnez ici celle que vous souhaitez utiliser.",
    "Wenn mehrere Drucker vorhanden sind, wählen Sie hier den gewünschten Drucker aus.",
    "Se sono disponibili più stampanti, seleziona qui quella da usare.",
    "Jeśli dostępnych jest kilka drukarek, wybierz tutaj tę, której chcesz użyć.",
    "إذا كانت لديك عدة طابعات، فاختر هنا الطابعة التي تريد استخدامها.", "如果有多台打印机，请在此选择要使用的打印机。"
    ],
  "El nombre se guarda en este ordenador asociado a la IP y se mostrará en la lista.": [
    "The name is saved on this computer and associated with the IP; it will appear in the list.",
    "Le nom est enregistré sur cet ordinateur et associé à l’adresse IP ; il apparaîtra dans la liste.",
    "Der Name wird auf diesem Computer mit der IP gespeichert und in der Liste angezeigt.",
    "Il nome viene salvato su questo computer e associato all’IP; verrà mostrato nell’elenco.",
    "Nazwa jest zapisywana na tym komputerze i powiązana z adresem IP; będzie widoczna na liście.",
    "يُحفظ الاسم على هذا الكمبيوتر مرتبطًا بعنوان IP وسيظهر في القائمة.", "名称会与 IP 地址关联并保存在此电脑上，同时显示在列表中。"
    ],
  "Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.": [
    "Export the information this app stores in the browser’s local storage. Save the file outside the temporary folder.",
    "Exportez les informations stockées par cette application dans le stockage local du navigateur. Conservez le fichier hors du dossier temporaire.",
    "Exportieren Sie die lokal im Browser gespeicherten App-Daten. Speichern Sie die Datei außerhalb des temporären Ordners.",
    "Esporta le informazioni salvate dall’app nella memoria locale del browser. Conserva il file fuori dalla cartella temporanea.",
    "Wyeksportuj informacje zapisane przez aplikację w pamięci lokalnej przeglądarki. Zapisz plik poza folderem tymczasowym.",
    "صدّر المعلومات التي حفظها هذا التطبيق في التخزين المحلي للمتصفح. احفظ الملف خارج المجلد المؤقت.", "导出此应用保存在浏览器本地存储中的信息。请将文件保存到临时文件夹之外。"
    ],
  "Reino Unido · tipo general 20%": [
    "United Kingdom · standard rate 20%",
    "Royaume-Uni · taux standard 20 %",
    "Vereinigtes Königreich · Regelsteuersatz 20 %",
    "Regno Unito · aliquota ordinaria 20%",
    "Wielka Brytania · standardowa stawka VAT 20%",
    "المملكة المتحدة · المعدل العام 20٪", "英国 · 标准税率 20%"
    ],
  "Argentina · IVA 21%": [
    "Argentina · VAT 21%",
    "Argentine · TVA 21 %",
    "Argentinien · MwSt. 21 %",
    "Argentina · IVA 21%",
    "Argentyna · VAT 21%",
    "الأرجنتين · ضريبة القيمة المضافة 21٪", "阿根廷 · 增值税 21%"
    ],
  "Colombia · IVA 19%": [
    "Colombia · VAT 19%",
    "Colombie · TVA 19 %",
    "Kolumbien · MwSt. 19 %",
    "Colombia · IVA 19%",
    "Kolumbia · VAT 19%",
    "كولومبيا · ضريبة القيمة المضافة 19٪", "哥伦比亚 · 增值税 19%"
    ],
  "Chile · IVA 19%": [
    "Chile · VAT 19%",
    "Chili · TVA 19 %",
    "Chile · MwSt. 19 %",
    "Cile · IVA 19%",
    "Chile · VAT 19%",
    "تشيلي · ضريبة القيمة المضافة 19٪", "智利 · 增值税 19%"
    ],
  "Otro": [
    "Other",
    "Autre",
    "Sonstiges",
    "Altro",
    "Inny",
    "أخرى", "其他"
    ],
  "Genérico / sin marca": [
    "Generic / unbranded",
    "Générique / sans marque",
    "Generisch / ohne Marke",
    "Generico / senza marca",
    "Ogólny / bez marki",
    "عام / بدون علامة تجارية", "通用 / 无品牌"
    ],
  "Personalizado…": [
    "Custom…",
    "Personnalisé…",
    "Benutzerdefiniert…",
    "Personalizzato…",
    "Niestandardowe…",
    "مخصص…", "自定义…"
    ],
  "— Cliente nuevo / introducir datos —": [
    "— New customer / enter details —",
    "— Nouveau client / saisir les données —",
    "— Neuer Kunde / Daten eingeben —",
    "— Nuovo cliente / inserisci i dati —",
    "— Nowy klient / wprowadź dane —",
    "— عميل جديد / إدخال البيانات —", "— 新客户 / 输入信息 —"
    ],
  "Ocultar": [
    "Hide",
    "Masquer",
    "Ausblenden",
    "Nascondi",
    "Ukryj",
    "إخفاء", "隐藏"
    ],
  "g": [
    "g",
    "g",
    "g",
    "g",
    "g",
    "غ", "克"
    ],
  "👤 Datos del vendedor": [
    "👤 Seller details",
    "👤 Coordonnées du vendeur",
    "👤 Verkäuferdaten",
    "👤 Dati del venditore",
    "👤 Dane sprzedawcy",
    "👤 بيانات البائع", "👤 卖家信息"
    ],
  "💶 Moneda e impuestos": [
    "💶 Currency and taxes",
    "💶 Devise et taxes",
    "💶 Währung und Steuern",
    "💶 Valuta e imposte",
    "💶 Waluta i podatki",
    "💶 العملة والضرائب", "💶 货币与税费"
    ],
  "🖨️ Conexión con la Snapmaker U1": [
    "🖨️ Snapmaker U1 connection",
    "🖨️ Connexion à la Snapmaker U1",
    "🖨️ Verbindung zur Snapmaker U1",
    "🖨️ Connessione Snapmaker U1",
    "🖨️ Połączenie z drukarką Snapmaker U1",
    "🖨️ الاتصال بطابعة Snapmaker U1", "🖨️ 连接 Snapmaker U1"
    ],
  "FACTURA": [
    "INVOICE",
    "FACTURE",
    "RECHNUNG",
    "FATTURA",
    "Faktura",
    "فاتورة", "发票"
    ],
  "PRESUPUESTO": [
    "QUOTE",
    "DEVIS",
    "ANGEBOT",
    "PREVENTIVO",
    "OFERTA",
    "عرض سعر", "报价单"
    ],
  "Documento comercial": [
    "Commercial document",
    "Document commercial",
    "Geschäftsdokument",
    "Documento commerciale",
    "Dokument handlowy",
    "مستند تجاري", "商业单据"
    ],
  "FECHA": [
    "DATE",
    "DATE",
    "DATUM",
    "DATA",
    "DATA",
    "التاريخ", "日期"
    ],
  "EMISOR": [
    "ISSUER",
    "ÉMETTEUR",
    "AUSSTELLER",
    "EMITTENTE",
    "WYSTAWCA",
    "المُصدِر", "开具方"
    ],
  "CLIENTE": [
    "CUSTOMER",
    "CLIENT",
    "KUNDE",
    "CLIENTE",
    "KLIENT",
    "العميل", "客户"
    ],
  "DETALLE DEL DOCUMENTO": [
    "DOCUMENT DETAILS",
    "DÉTAILS DU DOCUMENT",
    "DOKUMENTDETAILS",
    "DETTAGLI DEL DOCUMENTO",
    "SZCZEGÓŁY DOKUMENTU",
    "تفاصيل المستند", "单据明细"
    ],
  "CONCEPTO": [
    "DESCRIPTION",
    "LIBELLÉ",
    "BESCHREIBUNG",
    "DESCRIZIONE",
    "OPIS",
    "الوصف", "项目"
    ],
  "CANT.": [
    "QTY.",
    "QTÉ",
    "MENGE",
    "Q.TÀ",
    "ILOŚĆ",
    "الكمية", "数量"
    ],
  "PRECIO": [
    "PRICE",
    "PRIX",
    "PREIS",
    "PREZZO",
    "CENA",
    "السعر", "价格"
    ],
  "IMPORTE": [
    "AMOUNT",
    "MONTANT",
    "BETRAG",
    "IMPORTO",
    "KWOTA",
    "المبلغ", "金额"
    ],
  "Descuento": [
    "Discount",
    "Remise",
    "Rabatt",
    "Sconto",
    "Rabat",
    "الخصم", "折扣"
    ],
  "Envío": [
    "Shipping",
    "Livraison",
    "Versand",
    "Spedizione",
    "Wysyłka",
    "الشحن", "运费"
    ],
  "Base imponible": [
    "Taxable base",
    "Base imposable",
    "Steuerbemessungsgrundlage",
    "Imponibile",
    "Podstawa opodatkowania",
    "الوعاء الضريبي", "计税金额"
    ],
  "Impuestos": [
    "Taxes",
    "Taxes",
    "Steuern",
    "Imposte",
    "Podatki",
    "الضرائب", "税费"
    ],
  "TOTAL": [
    "TOTAL",
    "TOTAL",
    "GESAMT",
    "TOTALE",
    "SUMA",
    "الإجمالي", "总计"
    ],
  "Validez del presupuesto:": [
    "Quote valid until:",
    "Validité du devis :",
    "Angebot gültig bis:",
    "Validità del preventivo:",
    "Oferta ważna do:",
    "صلاحية عرض السعر:", "报价单有效期："
    ],
  "Plazo de entrega:": [
    "Delivery time:",
    "Délai de livraison :",
    "Lieferzeit:",
    "Tempi di consegna:",
    "Termin realizacji:",
    "مدة التسليم:", "交付期限："
    ],
  "Gracias por confiar en nosotros.": [
    "Thank you for your trust.",
    "Merci de votre confiance.",
    "Vielen Dank für Ihr Vertrauen.",
    "Grazie per la fiducia.",
    "Dziękujemy za zaufanie.",
    "شكرًا لثقتكم بنا.", "感谢您的信任。"
    ],
  "… y": [
    "… and",
    "… et",
    "… und",
    "… e",
    "… i",
    "… و", "… 以及"
    ],
  "línea(s) adicional(es)": [
    "additional line(s)",
    "ligne(s) supplémentaire(s)",
    "zusätzliche Zeile(n)",
    "riga/righe aggiuntiva/e",
    "dodatkowa(e) pozycja(e)",
    "سطر إضافي", "条附加项目"
    ],
  "… y {n} línea(s) adicional(es)": [
    "… and {n} additional line(s)",
    "… et {n} ligne(s) supplémentaire(s)",
    "… und {n} weitere Zeile(n)",
    "… e altre {n} riga/righe",
    "… i jeszcze {n} dodatkowych pozycji",
    "… و{n} سطر إضافي", "… 以及 {n} 条附加项目"
    ],
  "Vencida": [
    "Overdue",
    "Échue",
    "Überfällig",
    "Scaduta",
    "Przeterminowana",
    "منتهية الصلاحية", "已过期"
    ],
  "Contabilidad · Print Cost & Profit": [
    "Accounting · Print Cost & Profit",
    "Comptabilité · Print Cost & Profit",
    "Buchhaltung · Print Cost & Profit",
    "Contabilità · Print Cost & Profit",
    "Księgowość · Print Cost & Profit",
    "المحاسبة · Print Cost & Profit", "会计 · Print Cost & Profit"
    ],
  "Ventas estimadas": [
    "Estimated sales",
    "Ventes estimées",
    "Geschätzte Verkäufe",
    "Vendite stimate",
    "Szacowana sprzedaż",
    "المبيعات المقدّرة", "预计销售额"
    ],
  "Beneficio estimado": [
    "Estimated profit",
    "Bénéfice estimé",
    "Geschätzter Gewinn",
    "Profitto stimato",
    "Szacowany zysk",
    "الربح التقديري", "预计利润"
    ],
  "Informe generado el": [
    "Report generated on",
    "Rapport généré le",
    "Bericht erstellt am",
    "Rapporto generato il",
    "Raport wygenerowany dnia",
    "تاريخ إنشاء التقرير", "报告生成日期"
    ],
  "Tipo": [
    "Type",
    "Type",
    "Typ",
    "Tipo",
    "Typ",
    "النوع", "类型"
    ],
  "Referencia": [
    "Reference",
    "Référence",
    "Referenz",
    "Riferimento",
    "Odniesienie",
    "المرجع", "参考"
    ],
  "Importe / coste": [
    "Amount / cost",
    "Montant / coût",
    "Betrag / Kosten",
    "Importo / costo",
    "Kwota / koszt",
    "المبلغ / التكلفة", "金额 / 成本"
    ],
  "Integración directa: {file}": [
    "Direct integration: {file}",
    "Intégration directe : {file}",
    "Direktintegration: {file}",
    "Integrazione diretta: {file}",
    "Integracja bezpośrednia: {file}",
    "تكامل مباشر: {file}", "直接集成：{file}"
    ],
  "Origen: {source}": [
    "Source: {source}",
    "Source : {source}",
    "Quelle: {source}",
    "Fonte: {source}",
    "Źródło: {source}",
    "المصدر: {source}", "来源：{source}"
    ],
  "{n} filamento(s) detectado(s): {grams} g según las estadísticas de Orca": [
    "{n} filament(s) detected: {grams} g according to Orca statistics",
    "{n} filament(s) détecté(s) : {grams} g selon les statistiques d’Orca",
    "{n} Filament(e) erkannt: {grams} g laut Orca-Statistik",
    "Rilevati {n} filamenti: {grams} g secondo le statistiche di Orca",
    "Wykryto filamenty: {n}, {grams} g według statystyk Orca",
    "تم اكتشاف {n} من خيوط الطباعة: {grams} غ وفقًا لإحصاءات Orca", "检测到 {n} 种耗材：根据 Orca 统计为 {grams} 克"
    ],
  "No se detectaron gramos; introduce el peso manualmente o comprueba los metadatos del G-code.": [
    "No filament weight was detected; enter the weight manually or check the G-code metadata.",
    "Aucun poids de filament détecté ; saisissez-le manuellement ou vérifiez les métadonnées du G-code.",
    "Es wurde kein Filamentgewicht erkannt. Geben Sie es manuell ein oder prüfen Sie die G-Code-Metadaten.",
    "Non è stato rilevato il peso del filamento; inseriscilo manualmente o controlla i metadati del G-code.",
    "Nie wykryto masy filamentu. Wpisz ją ręcznie lub sprawdź metadane pliku G-code.",
    "لم يتم اكتشاف الوزن بالغرام؛ أدخل الوزن يدويًا أو تحقق من بيانات G-code الوصفية.", "未检测到克数；请手动输入重量或检查 G-code 元数据。"
    ],
  "Materiales y comprobación de inventario:": [
    "Materials and inventory check:",
    "Matériaux et vérification de l’inventaire :",
    "Materialien und Bestandsprüfung:",
    "Materiali e controllo dell’inventario:",
    "Materiały i kontrola stanu magazynowego:",
    "المواد والتحقق من المخزون:", "材料和库存检查："
    ],
  "Precio del filamento importado desde el laminador: {n} precio(s) por kg. Comprueba que coincida con el precio de tu bobina.": [
    "Filament price imported from slicer: {n} price(s) per kg. Check that it matches your spool price.",
    "Prix du filament importé depuis le slicer : {n} prix au kg. Vérifiez qu’il correspond au prix de votre bobine.",
    "Vom Slicer importierter Filamentpreis: {n} Preis(e) pro kg. Prüfen Sie, ob er dem Spulenpreis entspricht.",
    "Prezzo filamento importato dallo slicer: {n} prezzo/i al kg. Verifica che corrisponda a quello della bobina.",
    "Cena filamentu zaimportowana z programu do cięcia: {n} cena(y) za kg. Sprawdź, czy odpowiada cenie Twojej szpuli.",
    "سعر خيط الطباعة المستورد من برنامج التقطيع: {n} سعر لكل كغ. تحقق من مطابقته لسعر البكرة لديك.", "从切片软件导入的耗材价格：每公斤 {n} 个价格。请确认与线轴价格一致。"
    ],
  "Tiempo detectado: {time} h (desde metadatos del G-code)": [
    "Detected time: {time} h (from G-code metadata)",
    "Durée détectée : {time} h (d’après les métadonnées du G-code)",
    "Erkannte Zeit: {time} h (aus G-Code-Metadaten)",
    "Tempo rilevato: {time} h (dai metadati G-code)",
    "Detected Czas: {Czas} h (z G-code metadata)",
    "الوقت المكتشف: {time} ساعة (من بيانات G-code الوصفية)", "检测到的时间：{time} 小时（来自 G-code 元数据）"
    ],
  "No se detectó el tiempo; introdúcelo manualmente.": [
    "Time was not detected; enter it manually.",
    "La durée n’a pas été détectée ; saisissez-la manuellement.",
    "Die Zeit wurde nicht erkannt; geben Sie sie manuell ein.",
    "Il tempo non è stato rilevato; inseriscilo manualmente.",
    "Nie wykryto czasu; wprowadź go ręcznie.",
    "لم يتم اكتشاف الوقت؛ أدخله يدويًا.", "未检测到时间；请手动输入。"
    ],
  "El inventario solo se consulta: estas cantidades no se descuentan ni modifican el stock.": [
    "Inventory is read-only here: these quantities do not deduct from or change stock.",
    "L’inventaire est uniquement consulté : ces quantités ne sont pas déduites et ne modifient pas le stock.",
    "Das Lager wird hier nur gelesen: Diese Mengen werden nicht abgezogen und verändern den Bestand nicht.",
    "L’inventario viene solo consultato: queste quantità non vengono sottratte né modificano le scorte.",
    "Magazyn jest tutaj tylko odczytywany: te ilości nie są odejmowane ani nie zmieniają stanu magazynowego.",
    "يتم الاطلاع على المخزون فقط: لا تُخصم هذه الكميات ولا تغيّر المخزون.", "这里只查询库存：这些数量不会扣减或更改库存。"
    ],
  "Comprueba siempre los datos detectados antes de calcular el precio.": [
    "Always check the detected data before calculating the price.",
    "Vérifiez toujours les données détectées avant de calculer le prix.",
    "Prüfen Sie die erkannten Daten immer, bevor Sie den Preis berechnen.",
    "Controlla sempre i dati rilevati prima di calcolare il prezzo.",
    "Zawsze sprawdzaj wykryte dane przed obliczeniem ceny.",
    "تحقق دائمًا من البيانات المكتشفة قبل حساب السعر.", "计算价格前，请务必检查检测到的数据。"
    ],
  "Falta en inventario: {brand} {material} {color} ({hex}). Habría que comprar esta bobina.": [
    "Missing from inventory: {brand} {material} {color} ({hex}). This spool would need to be purchased.",
    "Absent de l’inventaire : {brand} {material} {color} ({hex}). Cette bobine doit être achetée.",
    "Nicht im Bestand: {brand} {material} {color} ({hex}). Diese Spule müsste gekauft werden.",
    "Assente dall’inventario: {brand} {material} {color} ({hex}). Questa bobina deve essere acquistata.",
    "Brak w magazynie: {brand} {material} {color} ({hex}). Tę szpulę trzeba będzie kupić.",
    "غير متوفر في المخزون: {brand} {material} {color} ({hex}). يلزم شراء هذه البكرة.", "库存缺少：{brand} {material} {color} ({hex})。需要购买此线轴。"
    ],
  "Inventario: hay {stock} g · gastaría {used} g · quedarían {left} g.": [
    "Inventory: {stock} g available · {used} g would be used · {left} g would remain.",
    "Inventaire : {stock} g disponibles · {used} g seraient utilisés · il resterait {left} g.",
    "Bestand: {stock} g vorhanden · {used} g würden verbraucht · {left} g blieben übrig.",
    "Inventario: {stock} g disponibili · ne verrebbero usati {used} g · ne resterebbero {left} g.",
    "Stan magazynowy: dostępne {stock} g · zużycie wyniosłoby {used} g · pozostałoby {left} g.",
    "المخزون: المتوفر {stock} غ · المستهلك {used} غ · المتبقي {left} غ.", "库存：现有 {stock} 克 · 将使用 {used} 克 · 剩余 {left} 克。"
    ],
  "Stock insuficiente: hay {stock} g y se necesitan {need} g; faltarían {missing} g. No llegaría con esta bobina.": [
    "Insufficient stock: {stock} g available, {need} g needed; {missing} g short. This spool is not enough.",
    "Stock insuffisant : {stock} g disponibles, {need} g nécessaires ; il manque {missing} g. Cette bobine ne suffit pas.",
    "Bestand reicht nicht: {stock} g vorhanden, {need} g benötigt; {missing} g fehlen. Diese Spule reicht nicht aus.",
    "Scorte insufficienti: {stock} g disponibili, {need} g necessari; ne mancano {missing} g. Questa bobina non basta.",
    "Niewystarczający stan magazynowy: dostępne {stock} g, wymagane {need} g; brakuje {missing} g. Ta szpula nie wystarczy.",
    "المخزون غير كافٍ: المتوفر {stock} غ والمطلوب {need} غ؛ النقص {missing} غ. هذه البكرة لا تكفي.", "库存不足：现有 {stock} 克，需要 {need} 克；还缺 {missing} 克。此线轴无法满足需求。"
    ],
  "Color aproximado (HEX inventario: {hex}); revisa la bobina.": [
    "Approximate colour (inventory HEX: {hex}); check the spool.",
    "Couleur approximative (HEX du stock : {hex}) ; vérifiez la bobine.",
    "Ungefähre Farbe (Lager-HEX: {hex}); Spule prüfen.",
    "Colore approssimativo (HEX scorte: {hex}); controlla la bobina.",
    "Przybliżony kolor (kod HEX z magazynu: {hex}); sprawdź szpulę.",
    "لون تقريبي (رمز HEX للمخزون: {hex})؛ تحقق من البكرة.", "近似颜色（库存 HEX：{hex}）；请检查线轴。"
    ],
  "Borrador guardado automáticamente": [
    "Draft saved automatically",
    "Brouillon enregistré automatiquement",
    "Entwurf automatisch gespeichert",
    "Bozza salvata automaticamente",
    "Draft Zapisano automatycznie",
    "تم حفظ المسودة تلقائيًا", "草稿已自动保存"
    ],
  "No se pudo guardar automáticamente en este navegador": [
    "Could not save automatically in this browser",
    "Impossible d’enregistrer automatiquement dans ce navigateur",
    "Automatisches Speichern in diesem Browser nicht möglich",
    "Impossibile salvare automaticamente in questo browser",
    "Nie udało się automatycznie zapisać danych w tej przeglądarce",
    "تعذر الحفظ تلقائيًا في هذا المتصفح", "无法在此浏览器中自动保存"
    ],
  "Conectada": [
    "Connected",
    "Connectée",
    "Verbunden",
    "Connessa",
    "Połączono",
    "متصلة", "已连接"
    ],
  "Sin conexión": [
    "Disconnected",
    "Déconnectée",
    "Nicht verbunden",
    "Disconnessa",
    "Brak połączenia",
    "غير متصلة", "未连接"
    ],
  "Impresión": [
    "Print",
    "Impression",
    "Druck",
    "Stampa",
    "Wydruk",
    "الطباعة", "打印"
    ],
  "Desconocido": [
    "Unknown",
    "Inconnu",
    "Unbekannt",
    "Sconosciuto",
    "Nieznany",
    "غير معروف", "未知"
    ],
  "Sin archivo": [
    "No file",
    "Aucun fichier",
    "Keine Datei",
    "Nessun file",
    "Brak pliku",
    "لا يوجد ملف", "无文件"
    ],
  "Fuente: {source}": [
    "Source: {source}",
    "Source : {source}",
    "Quelle: {source}",
    "Fonte: {source}",
    "Źródło: {Źródło}",
    "المصدر: {source}", "来源：{source}"
    ],
  "Fuente confirmada: G-code activo de la U1 · {file}": [
    "Confirmed source: active U1 G-code · {file}",
    "Source confirmée : G-code actif de l’U1 · {file}",
    "Bestätigte Quelle: aktiver U1-G-Code · {file}",
    "Fonte confermata: G-code attivo della U1 · {file}",
    "Potwierdzone źródło: aktywny G-code U1 · {file}",
    "المصدر المؤكد: ملف G-code النشط للطابعة U1 · {file}", "已确认来源：U1 当前活动 G-code · {file}"
    ],
  "Consumo leído del G-code activo: {grams} g previstos. Bobinas asignadas: {assigned}/{total}. Comprueba las asignaciones antes del descuento.": [
    "Usage read from active G-code: {grams} g estimated. Spools assigned: {assigned}/{total}. Check assignments before deducting stock.",
    "Consommation lue dans le G-code actif : {grams} g estimés. Bobines attribuées : {assigned}/{total}. Vérifiez les attributions avant la déduction.",
    "Verbrauch aus aktivem G-Code: {grams} g geschätzt. Zugewiesene Spulen: {assigned}/{total}. Zuweisungen vor dem Abzug prüfen.",
    "Consumo letto dal G-code attivo: {grams} g stimati. Bobine assegnate: {assigned}/{total}. Verifica le assegnazioni prima della detrazione.",
    "Zużycie odczytane z aktywnego G-code: szacunkowo {grams} g. Przypisane szpule: {assigned}/{total}. Sprawdź przypisania przed odjęciem zapasów.",
    "الاستهلاك المقروء من G-code النشط: {grams} غ متوقعة. البكرات المعيّنة: {assigned}/{total}. تحقق من التعيينات قبل الخصم.", "从活动 G-code 读取的用量：预计 {grams} 克。已分配线轴：{assigned}/{total}。扣减前请检查分配情况。"
    ],
  "No se muestran gramos: no se pudo leer el G-code activo de la U1.": [
    "Grams are not shown: the active U1 G-code could not be read.",
    "Les grammes ne sont pas affichés : impossible de lire le G-code actif de l’U1.",
    "Gramm werden nicht angezeigt: Der aktive U1-G-Code konnte nicht gelesen werden.",
    "I grammi non vengono mostrati: impossibile leggere il G-code attivo della U1.",
    "Nie wyświetlono masy filamentu: nie udało się odczytać aktywnego pliku G-code z drukarki U1.",
    "لا تظهر كمية بالغرام: تعذرت قراءة G-code النشط للطابعة U1.", "未显示克数：无法读取 U1 当前活动的 G-code。"
    ],
  "Consumo no disponible. No se debe descontar usando datos del cálculo cargado.": [
    "Consumption unavailable. Do not deduct stock using data from the loaded estimate.",
    "Consommation indisponible. Ne déduisez pas le stock à partir des données du calcul chargé.",
    "Verbrauch nicht verfügbar. Ziehen Sie keinen Bestand anhand der geladenen Kalkulation ab.",
    "Consumo non disponibile. Non sottrarre scorte usando i dati del calcolo caricato.",
    "Zużycie jest niedostępne. Nie odejmuj materiału ze stanu magazynowego na podstawie danych z wczytanego obliczenia.",
    "الاستهلاك غير متاح. لا يجوز الخصم باستخدام بيانات الحساب المحمّل.", "用量不可用。不得使用已加载计算中的数据进行库存扣减。"
    ],
  "printing": [
    "Printing",
    "En impression",
    "Druckt",
    "In stampa",
    "drukowanie",
    "قيد الطباعة", "打印中"
    ],
  "paused": [
    "Paused",
    "En pause",
    "Pausiert",
    "In pausa",
    "Wstrzymano",
    "متوقف مؤقتًا", "已暂停"
    ],
  "complete": [
    "Complete",
    "Terminé",
    "Abgeschlossen",
    "Completato",
    "Zakończono",
    "مكتمل", "完成"
    ],
  "completed": [
    "Completed",
    "Terminé",
    "Abgeschlossen",
    "Completato",
    "ukończono",
    "مكتمل", "已完成"
    ],
  "finished": [
    "Finished",
    "Terminé",
    "Fertig",
    "Terminato",
    "Zakończono",
    "منتهٍ", "已结束"
    ],
  "standby": [
    "Standby",
    "En veille",
    "Bereitschaft",
    "Standby",
    "Gotowość",
    "استعداد", "待机"
    ],
  "ready": [
    "Ready",
    "Prêt",
    "Bereit",
    "Pronto",
    "Gotowe",
    "جاهز", "就绪"
    ],
  "idle": [
    "Idle",
    "Inactif",
    "Leerlauf",
    "Inattivo",
    "Bezczynna",
    "خامل", "空闲"
    ],
  "{n} filamento(s) · {assigned} asignación(es) correctas · {pending} pendiente(s) de revisar": [
    "{n} filament(s) · {assigned} correct spool assignment(s) · {pending} to review",
    "{n} filament(s) · {assigned} attribution(s) correcte(s) · {pending} à vérifier",
    "{n} Filament(e) · {assigned} korrekt zugewiesen · {pending} zu prüfen",
    "{n} filamento/i · {assigned} assegnazione/i corretta/e · {pending} da verificare",
    "{n} filamentów · {assigned} prawidłowo przypisanych szpul · {pending} do sprawdzenia",
    "{n} من خيوط الطباعة · {assigned} تعيينات صحيحة · {pending} قيد المراجعة", "{n} 种耗材 · {assigned} 项分配正确 · {pending} 项待检查"
    ],
  "Total previsto: {grams} g": [
    "Estimated total: {grams} g",
    "Total estimé : {grams} g",
    "Geschätzte Gesamtmenge: {grams} g",
    "Totale stimato: {grams} g",
    "Szacowana suma: {grams} g",
    "الإجمالي المتوقع: {grams} غ", "预计总量：{grams} 克"
    ],
  "Asignada": [
    "Assigned",
    "Affectée",
    "Zugeordnet",
    "Assegnata",
    "Przypisano",
    "مُعيّنة", "已分配"
    ],
  "Fuente: Leyendo datos del G-code… {progress}% · {file}": [
    "Source: Reading G-code data… {progress}% · {file}",
    "Source : Lecture des données G-code… {progress} % · {file}",
    "Quelle: G-Code-Daten werden gelesen… {progress} % · {file}",
    "Fonte: Lettura dati G-code… {progress}% · {file}",
    "Źródło: odczytywanie danych G-code… {progress}% · {file}",
    "المصدر: جارٍ قراءة بيانات G-code… {progress}٪ · {file}", "来源：正在读取 G-code 数据… {progress}% · {file}"
    ],
  "Leyendo datos del G-code… {progress}%": [
    "Reading G-code data… {progress}%",
    "Lecture des données G-code… {progress} %",
    "G-Code-Daten werden gelesen… {progress} %",
    "Lettura dati G-code… {progress}%",
    "Odczytywanie danych G-code… {progress}%",
    "جارٍ قراءة بيانات G-code… {progress}٪", "正在读取 G-code 数据… {progress}%"
    ],
  "Fuente: leyendo G-code activo de la U1: {file}": [
    "Source: reading active U1 G-code: {file}",
    "Source : lecture du G-code actif de l’U1 : {file}",
    "Quelle: Aktiven U1-G-Code lesen: {file}",
    "Fonte: lettura del G-code attivo della U1: {file}",
    "Źródło: odczytywany aktywny plik G-code drukarki U1: {file}",
    "المصدر: قراءة G-code النشط للطابعة U1: {file}", "来源：正在读取 U1 活动 G-code：{file}"
    ],
  "Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.": [
    "Preliminary estimate, not an actual per-colour measurement. Stock is deducted only when the job is completed.",
    "Estimation préliminaire, pas une mesure réelle par couleur. Le stock n’est déduit qu’à la fin du travail.",
    "Vorläufige Schätzung, keine tatsächliche Messung je Farbe. Bestand wird erst nach Abschluss des Auftrags abgezogen.",
    "Stima preliminare, non una misurazione reale per colore. Le scorte vengono sottratte solo al completamento del lavoro.",
    "Wstępne oszacowanie — nie jest to rzeczywisty pomiar zużycia poszczególnych kolorów. Stan magazynowy zostanie pomniejszony dopiero po zakończeniu zadania.",
    "تقدير أولي، وليس قياسًا فعليًا لكل لون. لا يُخصم المخزون إلا عند إكمال العمل.", "初步估算，并非按颜色进行的实际测量。只有完成任务后才会扣减库存。"
    ],
  "Escenario": [
    "Scenario",
    "Scénario",
    "Szenario",
    "Scenario",
    "Scenariusz",
    "السيناريو", "方案"
    ],
  "Suplemento": [
    "Increase",
    "Supplément",
    "Aufschlag",
    "Supplemento",
    "Dopłata",
    "إضافة", "附加金额"
    ],
  "Precio final": [
    "Final price",
    "Prix final",
    "Endpreis",
    "Prezzo finale",
    "Final Cena",
    "السعر النهائي", "最终价格"
    ],
  "Coste/u.": [
    "Cost/unit",
    "Coût/unité",
    "Kosten/Stk.",
    "Costo/unità",
    "Koszt/Jednostka",
    "التكلفة/الوحدة", "单件成本"
    ],
  "Beneficio/u.": [
    "Profit/unit",
    "Bénéfice/unité",
    "Gewinn/Stk.",
    "Profitto/unità",
    "Zysk/Jednostka",
    "الربح/الوحدة", "单件利润"
    ],
  "Dif. vs recomendado": [
    "Difference vs recommended",
    "Écart par rapport au prix conseillé",
    "Abweichung zur Empfehlung",
    "Differenza rispetto al consigliato",
    "Różnica względem zalecanej",
    "الفرق مقارنة بالسعر الموصى به", "与建议价格的差额"
    ],
  "Beneficio total": [
    "Total profit",
    "Bénéfice total",
    "Gesamtgewinn",
    "Profitto totale",
    "Łącznie Zysk",
    "إجمالي الربح", "总利润"
    ],
  "Margen": [
    "Margin",
    "Marge",
    "Marge",
    "Margine",
    "Marża",
    "الهامش", "利润率"
    ],
  "Imagen": [
    "Image",
    "Image",
    "Bild",
    "Immagine",
    "Obraz",
    "الصورة", "图片"
    ],
  "Pieza": [
    "Part",
    "Pièce",
    "Teil",
    "Pezzo",
    "część",
    "القطعة", "零件"
    ],
  "Perfil": [
    "Profile",
    "Profil",
    "Profil",
    "Profilo",
    "Profil",
    "ملف التعريف", "配置"
    ],
  "Venta/u.": [
    "Sale/unit",
    "Vente/unité",
    "Verkauf/Stk.",
    "Vendita/unità",
    "Sprzedaż/szt.",
    "البيع/الوحدة", "单件售价"
    ],
  "Acciones": [
    "Actions",
    "Actions",
    "Aktionen",
    "Azioni",
    "Działania",
    "الإجراءات", "操作"
    ],
  "Cargar": [
    "Load",
    "Charger",
    "Laden",
    "Carica",
    "Wczytaj",
    "تحميل", "加载"
    ],
  "Eliminar": [
    "Delete",
    "Supprimer",
    "Löschen",
    "Elimina",
    "Usuń",
    "حذف", "删除"
    ],
  "Añade un perfil para guardar los costes de cada impresora.": [
    "Add a profile to save each printer’s costs.",
    "Ajoutez un profil pour enregistrer les coûts de chaque imprimante.",
    "Fügen Sie ein Profil hinzu, um die Kosten jedes Druckers zu speichern.",
    "Aggiungi un profilo per salvare i costi di ogni stampante.",
    "Dodaj profil, aby zapisywać koszty każdej drukarki.",
    "أضف ملف تعريف لحفظ تكاليف كل طابعة.", "添加配置以保存每台打印机的成本。"
    ],
  "Perfil económico de impresora": [
    "Printer cost profile",
    "Profil de coûts de l’imprimante",
    "Druckerkostenprofil",
    "Profilo costi stampante",
    "Profil kosztów drukarki",
    "الملف الاقتصادي للطابعة", "打印机成本配置"
    ],
  "Potencia media": [
    "Average power",
    "Puissance moyenne",
    "Durchschnittliche Leistung",
    "Potenza media",
    "Średnia moc",
    "متوسط القدرة", "平均功率"
    ],
  "Mantenimiento por hora": [
    "Maintenance per hour",
    "Maintenance par heure",
    "Wartung pro Stunde",
    "Manutenzione all’ora",
    "Konserwacja na godzinę",
    "الصيانة لكل ساعة", "每小时维护费用"
    ],
  "Impresora sin nombre": [
    "Unnamed printer",
    "Imprimante sans nom",
    "Drucker ohne Namen",
    "Stampante senza nome",
    "Drukarka bez nazwy",
    "طابعة بدون اسم", "未命名打印机"
    ],
  "Estimación manual": [
    "Manual estimate",
    "Estimation manuelle",
    "Manuelle Schätzung",
    "Stima manuale",
    "Szacunek ręczny",
    "تقدير يدوي", "手动估算"
    ],
  "Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.": [
    "Purchase price not entered: depreciation is 0 per hour. The 10,000 h service life is an editable assumption.",
    "Prix d’achat non saisi : amortissement de 0 par heure. La durée de vie de 10 000 h est une hypothèse modifiable.",
    "Kaufpreis nicht eingegeben: Abschreibung 0 pro Stunde. Die Nutzungsdauer von 10.000 h ist eine bearbeitbare Annahme.",
    "Prezzo di acquisto non inserito: ammortamento pari a 0 all’ora. La vita utile di 10.000 h è un’ipotesi modificabile.",
    "Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Żywotność 10 000 godzin jest edytowalnym założeniem.",
    "لم يتم إدخال سعر الشراء: الاستهلاك 0 لكل ساعة. العمر الافتراضي البالغ 10,000 ساعة افتراض قابل للتعديل.", "尚未输入购买价格：每小时折旧为 0。10,000 小时的使用寿命为可编辑假设值。"
    ],
  "Amortización calculada: {rate} por hora ({price} ÷ {hours} h).": [
    "Calculated depreciation: {rate} per hour ({price} ÷ {hours} h).",
    "Amortissement calculé : {rate} par heure ({price} ÷ {hours} h).",
    "Berechnete Abschreibung: {rate} pro Stunde ({price} ÷ {hours} h).",
    "Ammortamento calcolato: {rate} all’ora ({price} ÷ {hours} h).",
    "Obliczona amortyzacja: {rate} na godzinę ({price} ÷ {hours} h).",
    "الاستهلاك المحسوب: {rate} لكل ساعة ({price} ÷ {hours} ساعة).", "计算折旧：每小时 {rate}（{price} ÷ {hours} 小时）。"
    ],
  "Amortización ({price} ÷ {hours} h) por hora": [
    "Depreciation ({price} ÷ {hours} h) per hour",
    "Amortissement ({price} ÷ {hours} h) par heure",
    "Abschreibung ({price} ÷ {hours} h) pro Stunde",
    "Ammortamento ({price} ÷ {hours} h) all’ora",
    "Depreciation ({Cena} ÷ {hours} h) na hour",
    "الاستهلاك ({price} ÷ {hours} ساعة) لكل ساعة", "每小时折旧（{price} ÷ {hours} 小时）"
    ],
  "Amortización (sin precio) por hora": [
    "Depreciation (no price) per hour",
    "Amortissement (sans prix) par heure",
    "Abschreibung (ohne Preis) pro Stunde",
    "Ammortamento (senza prezzo) all’ora",
    "Depreciation (no Cena) na hour",
    "الاستهلاك (بدون سعر) لكل ساعة", "每小时折旧（无价格）"
    ],
  "Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.": [
    "Reference recommended price: {gross} including tax · reference profit: {profit} per unit. Increases A/B/C are added to this price. Tax: {tax} · Commission applied to the tax-inclusive price: {commission} · Units: {units}. ★ marks the highest profit per unit.",
    "Prix conseillé de référence : {gross} taxes comprises · bénéfice de référence : {profit} par unité. Les suppléments A/B/C s’ajoutent à ce prix. Taxe : {tax} · Commission appliquée au prix TTC : {commission} · Unités : {units}. ★ indique le bénéfice unitaire le plus élevé.",
    "Empfohlener Referenzpreis: {gross} inklusive Steuern · Referenzgewinn: {profit} pro Stück. Aufschläge A/B/C kommen zu diesem Preis hinzu. Steuer: {tax} · Provision auf den Bruttopreis: {commission} · Stückzahl: {units}. ★ kennzeichnet den höchsten Stückgewinn.",
    "Prezzo consigliato di riferimento: {gross} tasse incluse · profitto di riferimento: {profit} per unità. Gli aumenti A/B/C si aggiungono a questo prezzo. Imposta: {tax} · Commissione sul prezzo tasse incluse: {commission} · Unità: {units}. ★ indica il profitto unitario più alto.",
    "Orientacyjna zalecana cena: {gross} z podatkami · orientacyjny zysk na sztukę: {profit}. Dodatki A/B/C są doliczane do tej ceny. Podatek: {tax} · Prowizja naliczana od ceny z podatkami: {commission} · Liczba sztuk: {units}. ★ oznacza najwyższy zysk na sztukę.",
    "السعر المرجعي الموصى به: {gross} شامل الضرائب · الربح المرجعي: {profit} لكل وحدة. تُضاف الزيادات A/B/C إلى هذا السعر. الضريبة: {tax} · العمولة على السعر شامل الضرائب: {commission} · الوحدات: {units}. ★ تشير إلى أعلى ربح لكل وحدة.",
    "建议参考售价：含税 {gross} · 参考单件利润：{profit}。附加项 A/B/C 会加到该价格上。税费：{tax} · 按含税价格计算的佣金：{commission} · 件数：{units}。★ 表示单件利润最高。"
    ],
  "Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».": [
    "Found {count} printers. Choose the IP to use under “Printers found”.",
    "{count} imprimantes détectées. Choisissez l’adresse IP à utiliser dans « Imprimantes détectées ».",
    "{count} Drucker gefunden. Wählen Sie unter „Gefundene Drucker“ die gewünschte IP-Adresse aus.",
    "Trovate {count} stampanti. Scegli l’indirizzo IP da usare in «Stampanti trovate».",
    "Znaleziono drukarki: {count}. Wybierz adres IP, którego chcesz użyć w sekcji „Znalezione drukarki”.",
    "تم العثور على {count} طابعة. اختر عنوان IP الذي تريد استخدامه ضمن «الطابعات التي تم العثور عليها».", "已找到 {count} 台打印机。请在“已发现的打印机”中选择要使用的 IP。"
    ],
  "No se han encontrado impresoras. Puedes introducir la IP manualmente.": [
    "No printers found. You can enter the IP address manually.",
    "Aucune imprimante trouvée. Vous pouvez saisir l’adresse IP manuellement.",
    "Keine Drucker gefunden. Sie können die IP-Adresse manuell eingeben.",
    "Nessuna stampante trovata. Puoi inserire manualmente l’indirizzo IP.",
    "Nie znaleziono drukarek. Możesz ręcznie wpisać adres IP.",
    "لم يتم العثور على طابعات. يمكنك إدخال عنوان IP يدويًا.", "未找到打印机。你可以手动输入 IP。"
    ],
  "No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.": [
    "The printer search failed: {error}. You can use the saved IP or search manually.",
    "La recherche automatique de l’imprimante a échoué : {error}. Vous pouvez utiliser l’adresse IP enregistrée ou lancer une recherche manuelle.",
    "Die automatische Druckersuche ist fehlgeschlagen: {error}. Sie können die gespeicherte IP verwenden oder manuell suchen.",
    "Ricerca automatica della stampante non riuscita: {error}. Puoi usare l’IP salvato o cercare manualmente.",
    "Nie udało się automatycznie wyszukać drukarki: {error}. Możesz użyć zapisanego adresu IP lub wyszukać ją ręcznie.",
    "تعذر البحث عن الطابعة تلقائيًا: {error}. يمكنك استخدام عنوان IP المحفوظ أو البحث يدويًا.", "无法自动搜索打印机：{error}。你可以使用已保存的 IP 或手动搜索。"
    ],
  "Referencia sugerida; editable": [
    "Suggested reference; editable",
    "Référence suggérée ; modifiable",
    "Vorgeschlagene Referenz; bearbeitbar",
    "Riferimento suggerito; modificabile",
    "Sugerowane oznaczenie; edytowalne",
    "مرجع مقترح؛ قابل للتعديل", "建议参考值；可编辑"
    ],
  "Nombre de tu negocio": [
    "Your business name",
    "Nom de votre entreprise",
    "Name Ihres Unternehmens",
    "Nome della tua attività",
    "Nazwa Twojej firmy",
    "اسم نشاطك التجاري", "你的企业名称"
    ],
  "Teléfono de contacto": [
    "Contact phone",
    "Téléphone de contact",
    "Kontakttelefon",
    "Telefono di contatto",
    "Contact telefon",
    "رقم هاتف للتواصل", "联系电话"
    ],
  "Dirección postal": [
    "Postal address",
    "Adresse postale",
    "Postanschrift",
    "Indirizzo postale",
    "Postal adres",
    "العنوان البريدي", "邮寄地址"
    ],
  "Provincia o estado": [
    "Province or state",
    "Province ou État",
    "Provinz oder Bundesland",
    "Provincia o stato",
    "Province lub state",
    "المقاطعة أو الولاية", "省或州"
    ],
  "NIF / CIF": [
    "Tax ID",
    "N° fiscal",
    "Steuer-ID",
    "Codice fiscale / P. IVA",
    "Podatek ID",
    "رقم التعريف الضريبي / رقم الشركة",
    "税务识别号／公司税号"
    ],
  "No hay detalles guardados todavía.": [
    "No seller details saved yet.",
    "Aucune coordonnée de vendeur enregistrée.",
    "Noch keine Verkäuferdaten gespeichert.",
    "Nessun dato venditore salvato.",
    "No dane sprzedawcy Zapisano yet.",
    "لا توجد تفاصيل محفوظة بعد.", "尚无已保存的详细信息。"
    ],
  "Precio recomendado de referencia: {price} con impuestos · beneficio de referencia: {profit} por unidad.": [
    "Reference recommended price: {price} including tax · reference profit: {profit} per unit.",
    "Prix conseillé de référence : {price} taxes comprises · bénéfice de référence : {profit} par unité.",
    "Empfohlener Referenzpreis: {price} inklusive Steuern · Referenzgewinn: {profit} pro Stück.",
    "Prezzo consigliato di riferimento: {price} tasse incluse · profitto di riferimento: {profit} per unità.",
    "Reference recommended Cena: {Cena} including Podatek · reference Zysk: {Zysk} na jednostkę.",
    "السعر المرجعي الموصى به: {price} شامل الضرائب · الربح المرجعي: {profit} لكل وحدة.",
    "建议参考售价：含税 {price} · 参考单件利润：{profit}。"
    ],
  "Multicabezal/toolchanger: cesta presupuestaria de 160 EUR por 1.000 h": [
    "Toolchanger: estimated spare-parts budget EUR 160 per 1,000 h",
    "Changeur d’outils : budget estimé de pièces de 160 EUR par 1 000 h",
    "Werkzeugwechsler: geschätztes Ersatzteilbudget 160 EUR pro 1.000 h",
    "Cambio utensile: budget ricambi stimato di 160 EUR ogni 1.000 h",
    "Toolchanger: estimated spare-parts budget EUR 160 na 1,000 h",
    "متعدد الرؤوس／مبدّل الأدوات: ميزانية قطع بقيمة 160 EUR لكل 1,000 ساعة", "多喷头／换头系统：每 1,000 小时备件预算 160 EUR"
    ],
  "IDEX de doble extrusor: cesta presupuestaria de 120 EUR por 1.000 h": [
    "Dual-extruder IDEX: estimated spare-parts budget EUR 120 per 1,000 h",
    "IDEX à double extrudeur : budget estimé de pièces de 120 EUR par 1 000 h",
    "IDEX mit zwei Extrudern: geschätztes Ersatzteilbudget 120 EUR pro 1.000 h",
    "IDEX a doppio estrusore: budget ricambi stimato di 120 EUR ogni 1.000 h",
    "Dual-extruder IDEX: estimated spare-parts budget EUR 120 na 1,000 h",
    "نظام IDEX مزدوج الباثق: ميزانية قطع بقيمة 120 EUR لكل 1,000 ساعة", "双挤出机 IDEX：每 1,000 小时备件预算 120 EUR"
    ],
  "Plataforma 3-en-1 de formato grande: cesta presupuestaria de 180 EUR por 1.000 h": [
    "Large-format 3-in-1 platform: estimated budget EUR 180 per 1,000 h",
    "Plateforme 3-en-1 grand format : budget estimé de 180 EUR par 1 000 h",
    "3-in-1-Plattform im Großformat: geschätztes Budget 180 EUR pro 1.000 h",
    "Piattaforma 3-in-1 grande formato: budget stimato di 180 EUR ogni 1.000 h",
    "Large-format 3-w-1 platform: estimated budget EUR 180 na 1,000 h",
    "منصة كبيرة متعددة الوظائف 3 في 1: ميزانية قطع بقيمة 180 EUR لكل 1,000 ساعة", "大型三合一平台：每 1,000 小时备件预算 180 EUR"
    ],
  "FDM abierto básico: 50 EUR por 1.000 h": [
    "Basic open FDM: EUR 50 per 1,000 h",
    "FDM ouvert basique : 50 EUR par 1 000 h",
    "Einfacher offener FDM-Drucker: 50 EUR pro 1.000 h",
    "FDM aperto di base: 50 EUR ogni 1.000 h",
    "Basic Otwórz FDM: EUR 50 na 1,000 h",
    "طابعة FDM مفتوحة أساسية: 50 EUR لكل 1,000 ساعة", "基础开放式 FDM：每 1,000 小时 50 EUR"
    ],
  "FDM abierto de alta velocidad: 60 EUR por 1.000 h": [
    "High-speed open FDM: EUR 60 per 1,000 h",
    "FDM ouvert haute vitesse : 60 EUR par 1 000 h",
    "Offener Hochgeschwindigkeits-FDM-Drucker: 60 EUR pro 1.000 h",
    "FDM aperto ad alta velocità: 60 EUR ogni 1.000 h",
    "High-speed Otwórz FDM: EUR 60 na 1,000 h",
    "طابعة FDM مفتوحة عالية السرعة: 60 EUR لكل 1,000 ساعة", "高速开放式 FDM：每 1,000 小时 60 EUR"
    ],
  "FDM de gran formato: 120 EUR por 1.000 h": [
    "Large-format FDM: EUR 120 per 1,000 h",
    "FDM grand format : 120 EUR par 1 000 h",
    "FDM-Großformatdrucker: 120 EUR pro 1.000 h",
    "FDM grande formato: 120 EUR ogni 1.000 h",
    "Large-format FDM: EUR 120 na 1,000 h",
    "طابعة FDM كبيرة الحجم: 120 EUR لكل 1,000 ساعة", "大尺寸 FDM：每 1,000 小时 120 EUR"
    ],
  "CoreXY cerrado: 80 EUR por 1.000 h": [
    "Enclosed CoreXY: EUR 80 per 1,000 h",
    "CoreXY fermé : 80 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker: 80 EUR pro 1.000 h",
    "CoreXY chiuso: 80 EUR ogni 1.000 h",
    "Enclosed CoreXY: EUR 80 na 1,000 h",
    "طابعة CoreXY مغلقة: 80 EUR لكل 1,000 ساعة", "封闭式 CoreXY：每 1,000 小时 80 EUR"
    ],
  "CoreXY cerrado de gran formato: 140 EUR por 1.000 h": [
    "Large-format enclosed CoreXY: EUR 140 per 1,000 h",
    "CoreXY fermé grand format : 140 EUR par 1 000 h",
    "Geschlossener CoreXY-Großformatdrucker: 140 EUR pro 1.000 h",
    "CoreXY chiuso grande formato: 140 EUR ogni 1.000 h",
    "Large-format enclosed CoreXY: EUR 140 na 1,000 h",
    "طابعة CoreXY مغلقة كبيرة الحجم: 140 EUR لكل 1,000 ساعة", "大尺寸封闭式 CoreXY：每 1,000 小时 140 EUR"
    ],
  "FDM rápido con cabezal de cambio rápido: 80 EUR por 1.000 h": [
    "Fast FDM with quick-swap toolhead: EUR 80 per 1,000 h",
    "FDM rapide avec tête à changement rapide : 80 EUR par 1 000 h",
    "Schneller FDM-Drucker mit Schnellwechselkopf: 80 EUR pro 1.000 h",
    "FDM veloce con testa a cambio rapido: 80 EUR ogni 1.000 h",
    "Fast FDM z quick-swap toolhead: EUR 80 na 1,000 h",
    "طابعة FDM سريعة برأس تبديل سريع: 80 يورو لكل 1,000 ساعة",
    "带快速换头的高速 FDM：每 1,000 小时 80 欧元"
    ],
  "FDM con alimentador multicolor: 140 EUR por 1.000 h": [
    "FDM with multicolour feeder: EUR 140 per 1,000 h",
    "FDM avec système multicolore : 140 EUR par 1 000 h",
    "FDM-Drucker mit Mehrfarbenzuführung: 140 EUR pro 1.000 h",
    "FDM con alimentatore multicolore: 140 EUR ogni 1.000 h",
    "FDM z multicolour feeder: EUR 140 na 1,000 h",
    "طابعة FDM مع وحدة تغذية متعددة الألوان: 140 EUR لكل 1,000 ساعة", "带多色供料器的 FDM：每 1,000 小时 140 EUR"
    ],
  "Sistema multicolor con alimentador: 140 EUR por 1.000 h": [
    "Multicolour feeder system: EUR 140 per 1,000 h",
    "Système multicolore avec chargeur : 140 EUR par 1 000 h",
    "Mehrfarbsystem mit Zuführung: 140 EUR pro 1.000 h",
    "Sistema multicolore con alimentatore: 140 EUR ogni 1.000 h",
    "Multicolour feeder system: EUR 140 na 1,000 h",
    "نظام متعدد الألوان مع وحدة تغذية: 140 EUR لكل 1,000 ساعة", "带供料器的多色系统：每 1,000 小时 140 EUR"
    ],
  "FDM abierto compacto: 50 EUR por 1.000 h": [
    "Compact open FDM: EUR 50 per 1,000 h",
    "FDM ouvert compact : 50 EUR par 1 000 h",
    "Kompakter offener FDM-Drucker: 50 EUR pro 1.000 h",
    "FDM aperto compatto: 50 EUR ogni 1.000 h",
    "Compact Otwórz FDM: EUR 50 na 1,000 h",
    "طابعة FDM مفتوحة مدمجة: 50 EUR لكل 1,000 ساعة", "紧凑型开放式 FDM：每 1,000 小时 50 EUR"
    ],
  "FDM CoreXY abierto: 70 EUR por 1.000 h": [
    "Open CoreXY FDM: EUR 70 per 1,000 h",
    "FDM CoreXY ouvert : 70 EUR par 1 000 h",
    "Offener CoreXY-FDM-Drucker: 70 EUR pro 1.000 h",
    "FDM CoreXY aperto: 70 EUR ogni 1.000 h",
    "Otwórz CoreXY FDM: EUR 70 na 1,000 h",
    "طابعة FDM CoreXY مفتوحة: 70 EUR لكل 1,000 ساعة", "开放式 CoreXY FDM：每 1,000 小时 70 EUR"
    ],
  "CoreXY cerrado con sensores y filtro: 90 EUR por 1.000 h": [
    "Enclosed CoreXY with sensors and filter: EUR 90 per 1,000 h",
    "CoreXY fermé avec capteurs et filtre : 90 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit Sensoren und Filter: 90 EUR pro 1.000 h",
    "CoreXY chiuso con sensori e filtro: 90 EUR ogni 1.000 h",
    "Enclosed CoreXY z sensors i filter: EUR 90 na 1,000 h",
    "طابعة CoreXY مغلقة مع مستشعرات ومرشح: 90 EUR لكل 1,000 ساعة", "带传感器和过滤器的封闭式 CoreXY：每 1,000 小时 90 EUR"
    ],
  "Doble cabezal/sistema avanzado: 180 EUR por 1.000 h": [
    "Dual toolhead/advanced system: EUR 180 per 1,000 h",
    "Double tête/système avancé : 180 EUR par 1 000 h",
    "Doppelkopf/fortschrittliches System: 180 EUR pro 1.000 h",
    "Doppia testa/sistema avanzato: 180 EUR ogni 1.000 h",
    "Dual toolhead/advanced system: EUR 180 na 1,000 h",
    "رأس مزدوج／نظام متقدم: 180 EUR لكل 1,000 ساعة", "双喷头／高级系统：每 1,000 小时 180 EUR"
    ],
  "CoreXY cerrado de formato avanzado: 120 EUR por 1.000 h": [
    "Advanced-format enclosed CoreXY: EUR 120 per 1,000 h",
    "CoreXY fermé de format avancé : 120 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker im erweiterten Format: 120 EUR pro 1.000 h",
    "CoreXY chiuso formato avanzato: 120 EUR ogni 1.000 h",
    "Advanced-format enclosed CoreXY: EUR 120 na 1,000 h",
    "طابعة CoreXY مغلقة بحجم متقدم: 120 EUR لكل 1,000 ساعة", "高级尺寸封闭式 CoreXY：每 1,000 小时 120 EUR"
    ],
  "Sistema avanzado de doble herramienta: 140 EUR por 1.000 h": [
    "Advanced dual-tool system: EUR 140 per 1,000 h",
    "Système avancé à double outil : 140 EUR par 1 000 h",
    "Fortschrittliches Zweifach-Werkzeugsystem: 140 EUR pro 1.000 h",
    "Sistema avanzato a doppio utensile: 140 EUR ogni 1.000 h",
    "Advanced dual-tool system: EUR 140 na 1,000 h",
    "نظام متقدم بأداتين: 140 EUR لكل 1,000 ساعة", "高级双工具系统：每 1,000 小时 140 EUR"
    ],
  "FDM abierto de alta velocidad: 70 EUR por 1.000 h": [
    "High-speed open FDM: EUR 70 per 1,000 h",
    "FDM ouvert haute vitesse : 70 EUR par 1 000 h",
    "Offener Hochgeschwindigkeits-FDM-Drucker: 70 EUR pro 1.000 h",
    "FDM aperto ad alta velocità: 70 EUR ogni 1.000 h",
    "High-speed Otwórz FDM: EUR 70 na 1,000 h",
    "طابعة FDM مفتوحة عالية السرعة: 70 EUR لكل 1,000 ساعة", "高速开放式 FDM：每 1,000 小时 70 EUR"
    ],
  "CoreXY cerrado de gran formato: 100 EUR por 1.000 h": [
    "Large-format enclosed CoreXY: EUR 100 per 1,000 h",
    "CoreXY fermé grand format : 100 EUR par 1 000 h",
    "Geschlossener CoreXY-Großformatdrucker: 100 EUR pro 1.000 h",
    "CoreXY chiuso grande formato: 100 EUR ogni 1.000 h",
    "Large-format enclosed CoreXY: EUR 100 na 1,000 h",
    "طابعة CoreXY مغلقة كبيرة الحجم: 100 EUR لكل 1,000 ساعة", "大尺寸封闭式 CoreXY：每 1,000 小时 100 EUR"
    ],
  "CoreXY cerrado de formato medio: 100 EUR por 1.000 h": [
    "Medium-format enclosed CoreXY: EUR 100 per 1,000 h",
    "CoreXY fermé moyen format : 100 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker im mittleren Format: 100 EUR pro 1.000 h",
    "CoreXY chiuso medio formato: 100 EUR ogni 1.000 h",
    "Medium-format enclosed CoreXY: EUR 100 na 1,000 h",
    "طابعة CoreXY مغلقة متوسطة الحجم: 100 EUR لكل 1,000 ساعة", "中型封闭式 CoreXY：每 1,000 小时 100 EUR"
    ],
  "CoreXY cerrado con alimentador/sistema avanzado: 140 EUR por 1.000 h": [
    "Enclosed CoreXY with feeder/advanced system: EUR 140 per 1,000 h",
    "CoreXY fermé avec chargeur/système avancé : 140 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit Zuführung/erweitertem System: 140 EUR pro 1.000 h",
    "CoreXY chiuso con alimentatore/sistema avanzato: 140 EUR ogni 1.000 h",
    "Enclosed CoreXY z feeder/advanced system: EUR 140 na 1,000 h",
    "طابعة CoreXY مغلقة مع وحدة تغذية／نظام متقدم: 140 EUR لكل 1,000 ساعة", "带供料器／高级系统的封闭式 CoreXY：每 1,000 小时 140 EUR"
    ],
  "CoreXY cerrado de gran formato y sistema avanzado: 160 EUR por 1.000 h": [
    "Large-format enclosed CoreXY with advanced system: EUR 160 per 1,000 h",
    "CoreXY fermé grand format avec système avancé : 160 EUR par 1 000 h",
    "Geschlossener CoreXY-Großformatdrucker mit erweitertem System: 160 EUR pro 1.000 h",
    "CoreXY chiuso grande formato con sistema avanzato: 160 EUR ogni 1.000 h",
    "Large-format enclosed CoreXY z advanced system: EUR 160 na 1,000 h",
    "طابعة CoreXY مغلقة كبيرة الحجم ونظام متقدم: 160 EUR لكل 1,000 ساعة", "大尺寸封闭式 CoreXY 高级系统：每 1,000 小时 160 EUR"
    ],
  "FDM rápido con alimentador preparado para multicolor: 80 EUR por 1.000 h": [
    "Fast FDM with multicolour-ready feeder: EUR 80 per 1,000 h",
    "FDM rapide avec chargeur compatible multicolore : 80 EUR par 1 000 h",
    "Schneller FDM-Drucker mit mehrfarbfähiger Zuführung: 80 EUR pro 1.000 h",
    "FDM veloce con alimentatore predisposto per il multicolore: 80 EUR ogni 1.000 h",
    "Szybka drukarka FDM z podajnikiem do druku wielokolorowego: 80 EUR na 1000 godzin",
    "طابعة FDM سريعة مع وحدة تغذية جاهزة للطباعة متعددة الألوان: 80 EUR لكل 1,000 ساعة", "支持多色供料的高速 FDM：每 1,000 小时 80 EUR"
    ],
  "FDM de gran formato: 140 EUR por 1.000 h": [
    "Large-format FDM: EUR 140 per 1,000 h",
    "FDM grand format : 140 EUR par 1 000 h",
    "FDM-Großformatdrucker: 140 EUR pro 1.000 h",
    "FDM grande formato: 140 EUR ogni 1.000 h",
    "Large-format FDM: EUR 140 na 1,000 h",
    "طابعة FDM كبيرة الحجم: 140 EUR لكل 1,000 ساعة", "大尺寸 FDM：每 1,000 小时 140 EUR"
    ],
  "FDM CoreXY compacto: 60 EUR por 1.000 h": [
    "Compact CoreXY FDM: EUR 60 per 1,000 h",
    "FDM CoreXY compact : 60 EUR par 1 000 h",
    "Kompakter CoreXY-FDM-Drucker: 60 EUR pro 1.000 h",
    "FDM CoreXY compatto: 60 EUR ogni 1.000 h",
    "Compact CoreXY FDM: EUR 60 na 1,000 h",
    "طابعة FDM CoreXY مدمجة: 60 EUR لكل 1,000 ساعة", "紧凑型 CoreXY FDM：每 1,000 小时 60 EUR"
    ],
  "CoreXY multicolor: 140 EUR por 1.000 h": [
    "Multicolour CoreXY: EUR 140 per 1,000 h",
    "CoreXY multicolore : 140 EUR par 1 000 h",
    "Mehrfarbiger CoreXY-Drucker: 140 EUR pro 1.000 h",
    "CoreXY multicolore: 140 EUR ogni 1.000 h",
    "Multicolour CoreXY: EUR 140 na 1,000 h",
    "طابعة CoreXY متعددة الألوان: 140 EUR لكل 1,000 ساعة", "多色 CoreXY：每 1,000 小时 140 EUR"
    ],
  "Impresora profesional cerrada de gran formato: 180 EUR por 1.000 h": [
    "Large-format enclosed professional printer: EUR 180 per 1,000 h",
    "Imprimante professionnelle fermée grand format : 180 EUR par 1 000 h",
    "Geschlossener professioneller Großformatdrucker: 180 EUR pro 1.000 h",
    "Stampante professionale chiusa grande formato: 180 EUR ogni 1.000 h",
    "Large-format enclosed professional drukarka: EUR 180 na 1,000 h",
    "طابعة احترافية مغلقة كبيرة الحجم: 180 EUR لكل 1,000 ساعة", "大型专业封闭式打印机：每 1,000 小时 180 EUR"
    ],
  "Plataforma industrial multiextrusor: 220 EUR por 1.000 h": [
    "Industrial multi-extruder platform: EUR 220 per 1,000 h",
    "Plateforme industrielle multiextrudeur : 220 EUR par 1 000 h",
    "Industrielle Plattform mit mehreren Extrudern: 220 EUR pro 1.000 h",
    "Piattaforma industriale multi-estrusore: 220 EUR ogni 1.000 h",
    "Industrial multi-extruder platform: EUR 220 na 1,000 h",
    "منصة صناعية متعددة الباثقات: 220 EUR لكل 1,000 ساعة", "工业多挤出机平台：每 1,000 小时 220 EUR"
    ],
  "FDM abierto de formato grande: 100 EUR por 1.000 h": [
    "Large-format open FDM: EUR 100 per 1,000 h",
    "FDM ouvert grand format : 100 EUR par 1 000 h",
    "Offener FDM-Drucker im Großformat: 100 EUR pro 1.000 h",
    "FDM aperto grande formato: 100 EUR ogni 1.000 h",
    "Large-format Otwórz FDM: EUR 100 na 1,000 h",
    "طابعة FDM مفتوحة كبيرة الحجم: 100 EUR لكل 1,000 ساعة", "大尺寸开放式 FDM：每 1,000 小时 100 EUR"
    ],
  "FDM abierto de gran formato: 140 EUR por 1.000 h": [
    "Large open-format FDM: EUR 140 per 1,000 h",
    "FDM ouvert très grand format : 140 EUR par 1 000 h",
    "Offener FDM-Großformatdrucker: 140 EUR pro 1.000 h",
    "FDM aperto di grande formato: 140 EUR ogni 1.000 h",
    "Large Otwórz-format FDM: EUR 140 na 1,000 h",
    "طابعة FDM مفتوحة كبيرة الحجم جدًا: 140 EUR لكل 1,000 ساعة", "超大尺寸开放式 FDM：每 1,000 小时 140 EUR"
    ],
  "CoreXY cerrado con multicolor: 140 EUR por 1.000 h": [
    "Enclosed CoreXY with multicolour: EUR 140 per 1,000 h",
    "CoreXY fermé avec multicolore : 140 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit Mehrfarbsystem: 140 EUR pro 1.000 h",
    "CoreXY chiuso con multicolore: 140 EUR ogni 1.000 h",
    "Enclosed CoreXY z multicolour: EUR 140 na 1,000 h",
    "طابعة CoreXY مغلقة متعددة الألوان: 140 EUR لكل 1,000 ساعة", "带多色功能的封闭式 CoreXY：每 1,000 小时 140 EUR"
    ],
  "FDM abierto reparable: 70 EUR por 1.000 h": [
    "Repairable open FDM: EUR 70 per 1,000 h",
    "FDM ouvert réparable : 70 EUR par 1 000 h",
    "Reparierbarer offener FDM-Drucker: 70 EUR pro 1.000 h",
    "FDM aperto riparabile: 70 EUR ogni 1.000 h",
    "Repairable Otwórz FDM: EUR 70 na 1,000 h",
    "طابعة FDM مفتوحة قابلة للإصلاح: 70 EUR لكل 1,000 ساعة", "可维修开放式 FDM：每 1,000 小时 70 EUR"
    ],
  "CoreXY cerrado reparable: 90 EUR por 1.000 h": [
    "Repairable enclosed CoreXY: EUR 90 per 1,000 h",
    "CoreXY fermé réparable : 90 EUR par 1 000 h",
    "Reparierbarer geschlossener CoreXY-Drucker: 90 EUR pro 1.000 h",
    "CoreXY chiuso riparabile: 90 EUR ogni 1.000 h",
    "Repairable enclosed CoreXY: EUR 90 na 1,000 h",
    "طابعة CoreXY مغلقة قابلة للإصلاح: 90 EUR لكل 1,000 ساعة", "可维修封闭式 CoreXY：每 1,000 小时 90 EUR"
    ],
  "Plataforma multiherramienta de gran formato: 220 EUR por 1.000 h": [
    "Large-format multi-tool platform: EUR 220 per 1,000 h",
    "Plateforme mult outils grand format : 220 EUR par 1 000 h",
    "Großformatige Plattform mit mehreren Werkzeugen: 220 EUR pro 1.000 h",
    "Piattaforma multi-utensile grande formato: 220 EUR ogni 1.000 h",
    "Large-format multi-tool platform: EUR 220 na 1,000 h",
    "منصة كبيرة متعددة الأدوات: 220 EUR لكل 1,000 ساعة", "大型多工具平台：每 1,000 小时 220 EUR"
    ],
  "CoreXY cerrado con cámara calefactada: 80 EUR por 1.000 h": [
    "Enclosed CoreXY with heated chamber: EUR 80 per 1,000 h",
    "CoreXY fermé avec chambre chauffée : 80 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit beheizter Kammer: 80 EUR pro 1.000 h",
    "CoreXY chiuso con camera riscaldata: 80 EUR ogni 1.000 h",
    "Enclosed CoreXY z heated chamber: EUR 80 na 1,000 h",
    "طابعة CoreXY مغلقة بحجرة مُسخّنة: 80 EUR لكل 1,000 ساعة", "带加热腔的封闭式 CoreXY：每 1,000 小时 80 EUR"
    ],
  "CoreXY abierto de gran formato: 140 EUR por 1.000 h": [
    "Large-format open CoreXY: EUR 140 per 1,000 h",
    "CoreXY ouvert grand format : 140 EUR par 1 000 h",
    "Offener CoreXY-Großformatdrucker: 140 EUR pro 1.000 h",
    "CoreXY aperto grande formato: 140 EUR ogni 1.000 h",
    "Large-format Otwórz CoreXY: EUR 140 na 1,000 h",
    "طابعة CoreXY مفتوحة كبيرة الحجم: 140 EUR لكل 1,000 ساعة", "大尺寸开放式 CoreXY：每 1,000 小时 140 EUR"
    ],
  "FDM rápido de formato grande: 80 EUR por 1.000 h": [
    "Fast large-format FDM: EUR 80 per 1,000 h",
    "FDM rapide grand format : 80 EUR par 1 000 h",
    "Schneller FDM-Drucker im Großformat: 80 EUR pro 1.000 h",
    "FDM veloce grande formato: 80 EUR ogni 1.000 h",
    "Fast large-format FDM: EUR 80 na 1,000 h",
    "طابعة FDM سريعة كبيرة الحجم: 80 EUR لكل 1,000 ساعة", "大尺寸高速 FDM：每 1,000 小时 80 EUR"
    ],
  "Inventario: {all} bobina(s) en total · {filtered} bobina(s) en este filtro.": [
    "Inventory: {all} spools total · {filtered} in this filter.",
    "Inventaire : {all} bobines au total · {filtered} dans ce filtre.",
    "Bestand: insgesamt {all} Spulen · {filtered} in diesem Filter.",
    "Inventario: {all} bobine totali · {filtered} in questo filtro.",
    "Magazyn: łącznie {all} szpul · {filtered} szpul w tym filtrze.",
    "المخزون: إجمالي {all} بكرة／بكرات · {filtered} بكرة／بكرات ضمن هذا المرشح.", "库存：共 {all} 个线轴 · 当前筛选中有 {filtered} 个线轴。"
    ],
  "{count} bobina(s)": [
    "{count} spool(s)",
    "{count} bobine(s)",
    "{count} Spule(n)",
    "{count} bobina(e)",
    "{count} szpula(s)",
    "{count} بكرة／بكرات", "{count} 个线轴"
    ],
  "Restante por bobina": [
    "Remaining per spool",
    "Restant par bobine",
    "Restmenge pro Spule",
    "Residuo per bobina",
    "Remaining na szpula",
    "الكمية المتبقية لكل بكرة", "每个线轴剩余量"
    ],
  "Inicial por bobina": [
    "Initial per spool",
    "Quantité initiale par bobine",
    "Anfangsmenge pro Spule",
    "Quantità iniziale per bobina",
    "Initial na szpula",
    "الكمية الأصلية لكل بكرة", "每个线轴初始量"
    ],
  "Precio estimado/kg": [
    "Estimated price/kg",
    "Prix estimé/kg",
    "Geschätzter Preis/kg",
    "Prezzo stimato/kg",
    "Estimated Cena/kg",
    "السعر التقديري／كغ", "预估单价／千克"
    ],
  "Borrar": [
    "Delete",
    "Supprimer",
    "Löschen",
    "Elimina",
    "Usuń",
    "حذف", "删除"
    ],
  "No hay bobinas en esta categoría": [
    "No spools in this category",
    "Aucune bobine dans cette catégorie",
    "Keine Spulen in dieser Kategorie",
    "Nessuna bobina in questa categoria",
    "Brak szpul w tej kategorii",
    "لا توجد بكرات في هذه الفئة", "此类别中没有线轴"
    ],
  "Prueba otra pestaña o añade una bobina.": [
    "Try another tab or add a spool.",
    "Essayez un autre onglet ou ajoutez une bobine.",
    "Versuchen Sie einen anderen Tab oder fügen Sie eine Spule hinzu.",
    "Prova un’altra scheda o aggiungi una bobina.",
    "Wypróbuj inną kartę lub dodaj szpulę.",
    "جرّب علامة تبويب أخرى أو أضف بكرة.", "请尝试其他选项卡或添加一个线轴。"
    ],
  "Subtotal: {subtotal} · Descuento ({discountPct}): −{discount} · Envío: {shipping} · Base: {base}": [
    "Subtotal: {subtotal} · Discount ({discountPct}): −{discount} · Shipping: {shipping} · Net total: {base}",
    "Sous-total : {subtotal} · Remise ({discountPct}) : −{discount} · Livraison : {shipping} · Total net : {base}",
    "Zwischensumme: {subtotal} · Rabatt ({discountPct}): −{discount} · Versand: {shipping} · Nettosumme: {base}",
    "Subtotale: {subtotal} · Sconto ({discountPct}): −{discount} · Spedizione: {shipping} · Totale netto: {base}",
    "Suma częściowa: {Suma częściowa} · Rabat ({discountPct}): −{Rabat} · Shipping: {shipping} · Net Łącznie: {base}",
    "المجموع الفرعي: {subtotal} · الخصم ({discountPct}): −{discount} · الشحن: {shipping} · الإجمالي الأساسي: {base}", "小计：{subtotal} · 折扣（{discountPct}）：−{discount} · 运费：{shipping} · 基础金额：{base}"
    ],
  "Factura ya creada · Ver factura": [
    "Invoice created · View invoice",
    "Facture créée · Voir la facture",
    "Rechnung erstellt · Rechnung ansehen",
    "Fattura creata · Visualizza fattura",
    "Faktura utworzona · View Faktura",
    "تم إنشاء الفاتورة بالفعل · عرض الفاتورة", "发票已创建 · 查看发票"
    ],
  "Crear factura": [
    "Create invoice",
    "Créer une facture",
    "Rechnung erstellen",
    "Crea fattura",
    "Utwórz Faktura",
    "إنشاء فاتورة", "创建发票"
    ],
  "Ver": [
    "View",
    "Voir",
    "Ansehen",
    "Visualizza",
    "Podgląd",
    "عرض", "查看"
    ],
  "Sin nombre": [
    "Unnamed",
    "Sans nom",
    "Ohne Namen",
    "Senza nome",
    "Bez nazwy",
    "بلا اسم", "无名称"
    ],
  "15 días": [
    "15 days",
    "15 jours",
    "15 Tage",
    "15 giorni",
    "15 dni",
    "15 يومًا",
    "15 天"
    ],
  "Ej. 15 días": [
    "e.g. 15 days",
    "ex. 15 jours",
    "z. B. 15 Tage",
    "es. 15 giorni",
    "Np. 15 days",
    "مثال: 15 يومًا", "例如：15 天"
    ],
  "Ej. 3–5 días laborables": [
    "e.g. 3–5 working days",
    "ex. 3 à 5 jours ouvrés",
    "z. B. 3–5 Werktage",
    "es. 3–5 giorni lavorativi",
    "Np. 3–5 working days",
    "مثال: 3–5 أيام عمل", "例如：3–5 个工作日"
    ],
  "Nombre del cliente o empresa": [
    "Customer or company name",
    "Nom du client ou de l’entreprise",
    "Name des Kunden oder Unternehmens",
    "Nome del cliente o dell’azienda",
    "Nazwa klienta lub firmy",
    "اسم العميل أو الشركة", "客户或公司名称"
    ],
  "cliente@correo.es": [
    "customer@email.com",
    "client@exemple.fr",
    "kunde@beispiel.de",
    "cliente@esempio.it",
    "Klient@e-mail.com",
    "cliente@correo.es",
    "cliente@correo.es"
    ],
  "Dirección del cliente": [
    "Customer address",
    "Adresse du client",
    "Kundenadresse",
    "Indirizzo cliente",
    "Klient adres",
    "عنوان العميل", "客户地址"
    ],
  "Documento fiscal": [
    "Tax ID",
    "Identifiant fiscal",
    "Steuer-ID",
    "Codice fiscale",
    "Podatek ID",
    "مستند ضريبي",
    "税务文件"
    ],
  "Notas internas sobre el cliente": [
    "Internal customer notes",
    "Notes internes sur le client",
    "Interne Kundennotizen",
    "Note interne sul cliente",
    "Notatki wewnętrzne dotyczące klienta",
    "ملاحظات داخلية عن العميل", "客户内部备注"
    ],
  "Nombre, correo, teléfono, dirección, ciudad o documento fiscal": [
    "Name, email, phone, address, city or tax ID",
    "Nom, e-mail, téléphone, adresse, ville ou identifiant fiscal",
    "Name, E-Mail, Telefon, Adresse, Ort oder Steuer-ID",
    "Nome, e-mail, telefono, indirizzo, città o codice fiscale",
    "Nazwa, e-mail, telefon, adres, miasto lub identyfikator podatkowy",
    "الاسم أو البريد الإلكتروني أو الهاتف أو العنوان أو المدينة أو الرقم الضريبي", "姓名、电子邮件、电话、地址、城市或税务编号"
    ],
  "bobina": [
    "spool",
    "bobine",
    "Spule",
    "bobina",
    "Szpula",
    "بكرة خيط", "线轴"
    ],
  "bobinas": [
    "spools",
    "bobines",
    "Spulen",
    "bobine",
    "szpule",
    "بكرات خيوط", "线轴"
    ],
  "Enviar email": [
    "Send email",
    "Envoyer un e-mail",
    "E-Mail senden",
    "Invia e-mail",
    "Wyślij e-mail",
    "إرسال بريد إلكتروني", "发送电子邮件"
    ],
  "Número de factura": [
    "Invoice number",
    "Numéro de facture",
    "Rechnungsnummer",
    "Numero fattura",
    "Numer faktury",
    "رقم الفاتورة", "发票号码"
    ],
  "Producto": [
    "Product",
    "Produit",
    "Produkt",
    "Prodotto",
    "Produkt",
    "المنتج", "产品"
    ],
  "Ud.": [
    "Qty.",
    "Qté",
    "Anz.",
    "Qt.",
    "Szt.",
    "الكمية", "数量"
    ],
  "Entrega": [
    "Delivery",
    "Livraison",
    "Lieferung",
    "Consegna",
    "Dostawa",
    "التسليم", "交付"
    ],
  "Documentos": [
    "Documents",
    "Documents",
    "Dokumente",
    "Documenti",
    "Dokumenty",
    "المستندات", "单据"
    ],
  "Total": [
    "Total",
    "Total",
    "Gesamt",
    "Totale",
    "Łącznie",
    "الإجمالي", "总计"
    ],
  "Presupuesto": [
    "Quote",
    "Devis",
    "Angebot",
    "Preventivo",
    "Oferta",
    "عرض سعر", "报价单"
    ],
  "Factura": [
    "Invoice",
    "Facture",
    "Rechnung",
    "Fattura",
    "Faktura",
    "فاتورة", "发票"
    ],
  "Imprimir": [
    "Print",
    "Imprimer",
    "Drucken",
    "Stampa",
    "Drukuj",
    "طباعة", "打印"
    ],
  "👁 Ver": [
    "👁 View",
    "👁 Voir",
    "👁 Ansehen",
    "👁 Visualizza",
    "👁 Zobacz",
    "👁 عرض", "👁 查看"
    ],
  "🖨 Imprimir": [
    "🖨 Print",
    "🖨 Imprimer",
    "🖨 Drucken",
    "🖨 Stampa",
    "🖨 Drukuj",
    "🖨 طباعة", "🖨 打印"
    ],
  "✎ Editar": [
    "✎ Edit",
    "✎ Modifier",
    "✎ Bearbeiten",
    "✎ Modifica",
    "✎ Edytuj",
    "✎ تعديل", "✎ 编辑"
    ],
  "Pago inmediato / 15 días": [
    "Immediate payment / 15 days",
    "Paiement immédiat / 15 jours",
    "Sofortzahlung / 15 Tage",
    "Pagamento immediato / 15 giorni",
    "Płatność natychmiastowa / 15 dni",
    "الدفع الفوري / خلال 15 يومًا", "即时付款／15 天内"
    ],
  "— Selecciona tasación o presupuesto —": [
    "— Select estimate or quote —",
    "— Sélectionner une estimation ou un devis —",
    "— Kalkulation oder Angebot auswählen —",
    "— Seleziona stima o preventivo —",
    "— Wybierz wycenę lub ofertę —",
    "— اختر تقديرًا أو عرض سعر —", "— 选择估价或报价单 —"
    ],
  "O escribe un producto distinto": [
    "Or enter a different product",
    "Ou saisissez un autre produit",
    "Oder geben Sie ein anderes Produkt ein",
    "Oppure inserisci un prodotto diverso",
    "lub enter a different product",
    "أو اكتب منتجًا مختلفًا", "或输入其他产品"
    ],
  "Bobina, envío, reparación…": [
    "Spool, shipping, repair…",
    "Bobine, livraison, réparation…",
    "Spule, Versand, Reparatur…",
    "Bobina, spedizione, riparazione…",
    "szpula, shipping, repair…",
    "بكرة خيط، شحن، إصلاح…", "线轴、运输、维修…"
    ],
  "Cliente, pedido, justificante…": [
    "Customer, order, receipt…",
    "Client, commande, justificatif…",
    "Kunde, Auftrag, Beleg…",
    "Cliente, ordine, ricevuta…",
    "Klient, Zamówienie, receipt…",
    "عميل، طلب، إيصال…", "客户、订单、凭证…"
    ],
  "Impuestos desglosados según el perfil configurable": [
    "Taxes itemized according to the configurable profile",
    "Taxes détaillées selon le profil configurable",
    "Steuern gemäß konfigurierbarem Profil aufgeschlüsselt",
    "Imposte dettagliate in base al profilo configurabile",
    "Podatki wyszczególnione zgodnie z konfigurowalnym profilem",
    "تفصيل الضرائب وفقًا للملف القابل للتهيئة", "根据可配置的税务配置文件列出税费明细"
    ],
  "Importe/coste": [
    "Amount/cost",
    "Montant/coût",
    "Betrag/Kosten",
    "Importo/costo",
    "Kwota/koszt",
    "المبلغ／التكلفة", "金额／成本"
    ],
  "No hay facturas guardadas": [
    "No invoices saved yet",
    "Aucune facture enregistrée",
    "Keine Rechnungen gespeichert",
    "Nessuna fattura salvata",
    "No invoices Zapisano yet",
    "لا توجد فواتير محفوظة", "没有已保存的发票"
    ],
  "Cuando crees una factura, aparecerá aquí para imprimirla o eliminarla.": [
    "When you create an invoice, it will appear here so you can print or delete it.",
    "Lorsque vous créerez une facture, elle apparaîtra ici pour être imprimée ou supprimée.",
    "Wenn Sie eine Rechnung erstellen, erscheint sie hier, damit Sie sie drucken oder löschen können.",
    "Quando crei una fattura, apparirà qui per stamparla o eliminarla.",
    "Po utworzeniu faktury pojawi się ona tutaj i będzie można ją wydrukować lub usunąć.",
    "عند إنشاء فاتورة، ستظهر هنا لتتمكن من طباعتها أو حذفها.", "创建发票后，它会显示在此处，你可以打印或删除。"
    ],
  "No hay pedidos guardados": [
    "No saved orders",
    "Aucune commande enregistrée",
    "Keine Aufträge gespeichert",
    "Nessun ordine salvato",
    "Brak zapisanych Zamówienia",
    "لا توجد طلبات محفوظة", "没有已保存的订单"
    ],
  "No hay clientes guardados": [
    "No saved customers",
    "Aucun client enregistré",
    "Keine Kunden gespeichert",
    "Nessun cliente salvato",
    "Brak zapisanych Klienci",
    "لا يوجد عملاء محفوظون", "没有已保存的客户"
    ],
  "El estado de la impresora no está claro. ¿Quieres registrar este trabajo igualmente como provisional?": [
    "The printer status is unclear. Do you still want to register this job as provisional?",
    "L’état de l’imprimante n’est pas clair. Voulez-vous tout de même enregistrer ce travail comme provisoire ?",
    "Der Druckerstatus ist unklar. Möchten Sie diesen Auftrag trotzdem vorläufig registrieren?",
    "Lo stato della stampante non è chiaro. Vuoi registrare comunque questo lavoro come provvisorio?",
    "Stan drukarki jest niejednoznaczny. Czy mimo to chcesz zapisać to zadanie jako tymczasowe?",
    "حالة الطابعة غير واضحة. هل تريد مع ذلك تسجيل هذا العمل كعمل مؤقت؟", "打印机状态不明确。仍要将此任务登记为临时任务吗？"
    ],
  "Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as personal. Do you want to change it to an order? The previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré comme dépense personnelle. Voulez-vous le convertir en commande ? Les écritures précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als private Ausgabe erfasst. Möchten Sie ihn in einen Auftrag ändern? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come spesa personale. Vuoi convertirlo in un ordine? Le registrazioni precedenti di questo G-code verranno sostituite.",
    "To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.",
    "تم تسجيل هذا العمل بالفعل كطباعة شخصية. هل تريد تغييره إلى طلب؟ ستُستبدل السجلات السابقة لملف G-code هذا.",
    "此任务已登记为个人打印。要将其更改为订单吗？此 G-code 之前的记录将被替换。"
    ],
  "Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as an order. Do you want to change it to a personal expense? The previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré comme commande. Voulez-vous le convertir en dépense personnelle ? Les écritures précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als Auftrag erfasst. Möchten Sie ihn in eine private Ausgabe ändern? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come ordine. Vuoi convertirlo in una spesa personale? Le registrazioni precedenti di questo G-code verranno sostituite.",
    "To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na użytek własny? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.",
    "تم تسجيل هذا العمل بالفعل كطلب. هل تريد تغييره إلى عمل شخصي؟ ستُستبدل الإدخالات السابقة لملف G-code هذا.", "此任务已登记为订单。要将其更改为个人打印吗？此 G-code 之前的记录将被替换。"
    ],
  "La restauración sustituirá el historial local actual y, si la copia contiene uno, el cálculo en curso. ¿Continuar?": [
    "Restoring will replace the current local history and, if included in the backup, the current estimate. Continue?",
    "La restauration remplacera l’historique local actuel et, si la sauvegarde en contient une, l’estimation en cours. Continuer ?",
    "Die Wiederherstellung ersetzt den aktuellen lokalen Verlauf und, falls in der Sicherung enthalten, die laufende Kalkulation. Fortfahren?",
    "Il ripristino sostituirà la cronologia locale attuale e, se presente nel backup, il calcolo in corso. Continuare?",
    "Przywracanie zastąpi bieżącą historię lokalną oraz aktualne obliczenie, jeśli kopia je zawiera. Kontynuować?",
    "ستؤدي الاستعادة إلى استبدال السجل المحلي الحالي، وكذلك الحساب الجاري إذا كانت النسخة الاحتياطية تتضمنه. هل تريد المتابعة؟", "恢复操作将替换当前本地历史记录；如果备份中包含当前计算，也会一并替换。是否继续？"
    ],
  "No se pudo restaurar: el archivo no parece una copia válida de Print Cost & Profit.": [
    "Could not restore: the file does not appear to be a valid Print Cost & Profit backup.",
    "Restauration impossible : le fichier ne semble pas être une sauvegarde valide de Print Cost & Profit.",
    "Wiederherstellung fehlgeschlagen: Die Datei scheint keine gültige Print Cost & Profit-Sicherung zu sein.",
    "Impossibile ripristinare: il file non sembra essere un backup valido di Print Cost & Profit.",
    "Nie udało się przywrócić danych: plik nie wygląda na prawidłową kopię zapasową Print Cost & Profit.",
    "تعذرت الاستعادة: لا يبدو أن الملف نسخة احتياطية صالحة من Print Cost & Profit.", "无法恢复：该文件似乎不是有效的 Print Cost & Profit 备份。"
    ],
  "El navegador bloqueó la ventana del presupuesto. Permite las ventanas emergentes para este archivo.": [
    "The browser blocked the quote window. Allow pop-ups for this file.",
    "Le navigateur a bloqué la fenêtre du devis. Autorisez les fenêtres pop-up pour ce fichier.",
    "Der Browser hat das Angebotsfenster blockiert. Erlauben Sie Pop-ups für diese Datei.",
    "Il browser ha bloccato la finestra del preventivo. Consenti i popup per questo file.",
    "Przeglądarka zablokowała okno oferty. Zezwól na wyskakujące okna dla tego pliku.",
    "حظر المتصفح نافذة عرض السعر. اسمح بالنوافذ المنبثقة لهذا الملف.", "浏览器阻止了报价单窗口。请允许此文件打开弹出窗口。"
    ],
  "Introduce al menos el nombre, correo o teléfono del cliente.": [
    "Enter at least the customer’s name, email, or phone number.",
    "Saisissez au moins le nom, l’adresse e-mail ou le téléphone du client.",
    "Geben Sie mindestens den Namen, die E-Mail-Adresse oder die Telefonnummer des Kunden ein.",
    "Inserisci almeno il nome, l’e-mail o il telefono del cliente.",
    "Wprowadź co najmniej imię i nazwisko klienta, adres e-mail lub numer telefonu.",
    "أدخل على الأقل اسم العميل أو بريده الإلكتروني أو رقم هاتفه.", "请至少输入客户姓名、电子邮件或电话号码。"
    ],
  "Ya existe un cliente con ese nombre. ¿Actualizarlo?": [
    "A customer with that name already exists. Update it?",
    "Un client portant ce nom existe déjà. Le mettre à jour ?",
    "Ein Kunde mit diesem Namen existiert bereits. Aktualisieren?",
    "Esiste già un cliente con questo nome. Aggiornarlo?",
    "Klient o tej nazwie już istnieje. Czy zaktualizować jego dane?",
    "يوجد عميل بهذا الاسم بالفعل. هل تريد تحديث بياناته؟", "已存在同名客户。要更新其信息吗？"
    ],
  "¿Eliminar este cliente de la agenda? Los documentos ya guardados no se borrarán.": [
    "Remove this customer from the address book? Saved documents will not be deleted.",
    "Supprimer ce client du répertoire ? Les documents déjà enregistrés ne seront pas supprimés.",
    "Diesen Kunden aus dem Adressbuch entfernen? Bereits gespeicherte Dokumente werden nicht gelöscht.",
    "Rimuovere questo cliente dalla rubrica? I documenti già salvati non verranno eliminati.",
    "Czy usunąć tego klienta z książki adresowej? Zapisane dokumenty nie zostaną usunięte.",
    "هل تريد حذف هذا العميل من دفتر العناوين؟ لن تُحذف المستندات المحفوظة بالفعل.", "要从客户名录中删除此客户吗？已保存的单据不会被删除。"
    ],
  "Introduce al menos el nombre, correo o teléfono del cliente antes de guardar el presupuesto.": [
    "Enter at least the customer’s name, email, or phone number before saving the quote.",
    "Saisissez au moins le nom, l’adresse e-mail ou le téléphone du client avant d’enregistrer le devis.",
    "Geben Sie vor dem Speichern des Angebots mindestens den Namen, die E-Mail-Adresse oder die Telefonnummer des Kunden ein.",
    "Inserisci almeno il nome, l’e-mail o il telefono del cliente prima di salvare il preventivo.",
    "Przed zapisaniem oferty wprowadź co najmniej nazwę klienta, adres e-mail lub numer telefonu.",
    "أدخل اسم العميل أو بريده الإلكتروني أو رقم هاتفه على الأقل قبل حفظ عرض السعر.", "保存报价单前，请至少输入客户姓名、电子邮件或电话号码。"
    ],
  "El cliente no tiene un teléfono válido guardado. Revisa el teléfono en la pestaña Clientes e incluye el prefijo internacional si no es de España.": [
    "The customer does not have a valid phone number saved. Check the number in the Customers tab and include the international code if the number is outside Spain.",
    "Aucun numéro de téléphone valide n’est enregistré pour ce client. Vérifiez-le dans l’onglet Clients et ajoutez l’indicatif international si le numéro est hors d’Espagne.",
    "Für diesen Kunden ist keine gültige Telefonnummer gespeichert. Prüfen Sie die Nummer im Tab „Kunden“ und fügen Sie bei Nummern außerhalb Spaniens die internationale Vorwahl hinzu.",
    "Il cliente non ha un numero di telefono valido salvato. Controlla il numero nella scheda Clienti e includi il prefisso internazionale se non è spagnolo.",
    "Klient nie ma zapisanego prawidłowego numeru telefonu. Sprawdź numer na karcie Klienci i dodaj prefiks międzynarodowy, jeśli numer jest spoza Hiszpanii.",
    "لا يوجد رقم هاتف صالح محفوظ لهذا العميل. راجع رقم الهاتف في علامة تبويب العملاء وأضف رمز الدولة إذا لم يكن الرقم إسبانيًا.", "该客户未保存有效电话号码。请在“客户”选项卡中检查号码；如果不是西班牙号码，请添加国际区号。"
    ],
  "El cliente no tiene una dirección de correo válida guardada. Revisa el email en la pestaña Clientes.": [
    "The customer does not have a valid email address saved. Check the email in the Customers tab.",
    "Aucune adresse e-mail valide n’est enregistrée pour ce client. Vérifiez l’e-mail dans l’onglet Clients.",
    "Für diesen Kunden ist keine gültige E-Mail-Adresse gespeichert. Prüfen Sie die E-Mail im Tab „Kunden“.",
    "Il cliente non ha un indirizzo e-mail valido salvato. Controlla l’e-mail nella scheda Clienti.",
    "Klient nie ma zapisanego prawidłowego adresu e-mail. Sprawdź adres e-mail na karcie Klienci.",
    "لا يوجد عنوان بريد إلكتروني صالح محفوظ لهذا العميل. راجع البريد الإلكتروني في علامة تبويب العملاء.", "该客户未保存有效电子邮件地址。请在“客户”选项卡中检查邮箱。"
    ],
  "No se ha podido generar el PDF. Comprueba los datos del documento e inténtalo de nuevo.": [
    "The PDF could not be generated. Check the document details and try again.",
    "Impossible de générer le PDF. Vérifiez les données du document et réessayez.",
    "Das PDF konnte nicht erstellt werden. Prüfen Sie die Dokumentdaten und versuchen Sie es erneut.",
    "Impossibile generare il PDF. Controlla i dati del documento e riprova.",
    "Nie udało się wygenerować pliku PDF. Sprawdź dane dokumentu i spróbuj ponownie.",
    "تعذر إنشاء ملف PDF. تحقق من بيانات المستند ثم حاول مرة أخرى.", "无法生成 PDF。请检查单据数据后重试。"
    ],
  "¿Eliminar este presupuesto guardado?": [
    "Delete this saved quote?",
    "Supprimer ce devis enregistré ?",
    "Dieses gespeicherte Angebot löschen?",
    "Eliminare questo preventivo salvato?",
    "Czy usunąć zapisaną ofertę?",
    "هل تريد حذف عرض السعر المحفوظ هذا؟", "要删除此已保存的报价单吗？"
    ],
  "¿Borrar este registro de bobinas del inventario?": [
    "Delete this spool inventory record?",
    "Supprimer cet enregistrement de bobine de l’inventaire ?",
    "Diesen Spuleneintrag aus dem Lager löschen?",
    "Eliminare questo record della bobina dall’inventario?",
    "Czy usunąć ten wpis szpuli z magazynu?",
    "هل تريد حذف سجل بكرات الخيوط هذا من المخزون؟", "要从库存中删除此线轴记录吗？"
    ],
  "Ya existe una factura con ese número. ¿Quieres guardarla igualmente?": [
    "An invoice with this number already exists. Do you want to save it anyway?",
    "Une facture portant ce numéro existe déjà. Voulez-vous tout de même l’enregistrer ?",
    "Eine Rechnung mit dieser Nummer existiert bereits. Möchten Sie sie trotzdem speichern?",
    "Esiste già una fattura con questo numero. Vuoi salvarla comunque?",
    "Faktura o tym numerze już istnieje. Czy mimo to chcesz ją zapisać?",
    "توجد فاتورة بهذا الرقم بالفعل. هل تريد حفظها على أي حال؟", "已存在此编号的发票。仍要保存吗？"
    ],
  "El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.": [
    "The browser blocked the invoice window. Allow pop-ups for this file.",
    "Le navigateur a bloqué la fenêtre de la facture. Autorisez les fenêtres contextuelles pour ce fichier.",
    "Der Browser hat das Rechnungsfenster blockiert. Erlauben Sie Pop-ups für diese Datei.",
    "Il browser ha bloccato la finestra della fattura. Consenti i popup per questo file.",
    "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.",
    "حظر المتصفح نافذة الفاتورة. اسمح بالنوافذ المنبثقة لهذا الملف.", "浏览器阻止了发票窗口。请允许此文件打开弹出窗口。"
    ],
  "Ese número ya existe. ¿Mantenerlo de todos modos?": [
    "That number already exists. Keep it anyway?",
    "Ce numéro existe déjà. Le conserver malgré tout ?",
    "Diese Nummer existiert bereits. Trotzdem beibehalten?",
    "Questo numero esiste già. Mantenerlo comunque?",
    "Ten numer już istnieje. Czy mimo to go zachować?",
    "هذا الرقم موجود بالفعل. هل تريد الاحتفاظ به رغم ذلك؟", "此编号已存在。仍要保留吗？"
    ],
  "¿Eliminar esta copia de factura guardada?": [
    "Delete this saved invoice copy?",
    "Supprimer cette copie de facture enregistrée ?",
    "Diese gespeicherte Rechnungskopie löschen?",
    "Eliminare questa copia della fattura salvata?",
    "Czy usunąć zapisaną kopię faktury?",
    "هل تريد حذف نسخة الفاتورة المحفوظة هذه؟", "要删除此已保存的发票副本吗？"
    ],
  "Todavía no hay una impresión activa detectada. Espera a que el panel muestre el archivo.": [
    "No active print has been detected yet. Wait until the panel shows the file.",
    "Aucune impression active n’a encore été détectée. Attendez que le panneau affiche le fichier.",
    "Es wurde noch kein aktiver Druck erkannt. Warten Sie, bis die Datei im Bedienfeld angezeigt wird.",
    "Non è ancora stata rilevata una stampa attiva. Attendi che il pannello mostri il file.",
    "Nie wykryto jeszcze aktywnego wydruku. Poczekaj, aż panel wyświetli nazwę pliku.",
    "لم يتم اكتشاف طباعة نشطة بعد. انتظر حتى تعرض اللوحة الملف.", "尚未检测到正在进行的打印。请等待面板显示文件。"
    ],
  "Este trabajo ya está registrado en Contabilidad. No se ha creado un duplicado.": [
    "This job is already recorded in Accounting. No duplicate was created.",
    "Ce travail est déjà enregistré dans la comptabilité. Aucun doublon n’a été créé.",
    "Dieser Auftrag ist bereits in der Buchhaltung erfasst. Es wurde kein Duplikat erstellt.",
    "Questo lavoro è già registrato in Contabilità. Non è stato creato un duplicato.",
    "To zadanie jest już zapisane w Księgowości. Nie utworzono duplikatu.",
    "تم تسجيل هذا العمل بالفعل في المحاسبة. لم يتم إنشاء سجل مكرر.", "此任务已登记在会计记录中。未创建重复记录。"
    ],
  "Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?": [
    "Restoring this backup will replace the app’s current local data. Export a backup first if you may need to undo this. Continue?",
    "La restauration de cette sauvegarde remplacera les données locales actuelles de l’application. Exportez d’abord une sauvegarde si vous souhaitez pouvoir revenir en arrière. Continuer ?",
    "Beim Wiederherstellen dieser Sicherung werden die aktuellen lokalen App-Daten ersetzt. Exportieren Sie vorher eine Sicherung, falls Sie den Vorgang rückgängig machen möchten. Fortfahren?",
    "Il ripristino di questo backup sostituirà i dati locali attuali dell’app. Esporta prima un backup se potresti voler annullare l’operazione. Continuare?",
    "Przywrócenie tej kopii zastąpi bieżące dane aplikacji zapisane lokalnie. Przed kontynuowaniem wyeksportuj kopię zapasową, aby w razie potrzeby móc przywrócić poprzedni stan. Kontynuować?",
    "ستؤدي استعادة هذه النسخة إلى استبدال البيانات المحلية الحالية للتطبيق. صدّر نسخة احتياطية أولًا تحسبًا للحاجة إلى التراجع. هل تريد المتابعة؟", "恢复此备份将替换应用当前的本地数据。请先导出备份，以便需要时回退。是否继续？"
    ],
  "Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?": [
    "The local keys included in this backup will be replaced. Export a current backup before continuing. Do you want to continue?",
    "Les clés locales incluses dans la sauvegarde vont être remplacées. Exportez une sauvegarde actuelle avant de continuer. Voulez-vous continuer ?",
    "Die in der Sicherung enthaltenen lokalen Schlüssel werden ersetzt. Exportieren Sie vor dem Fortfahren eine aktuelle Sicherung. Möchten Sie fortfahren?",
    "Le chiavi locali incluse nel backup verranno sostituite. Esporta un backup aggiornato prima di continuare. Vuoi continuare?",
    "Lokalne wpisy zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?",
    "سيتم استبدال المفاتيح المحلية الموجودة في النسخة الاحتياطية. قبل المتابعة، صدّر نسخة احتياطية حالية. هل تريد المتابعة؟", "备份中包含的本地键值将被替换。继续前请先导出当前备份。是否继续？"
    ],
  "Este trabajo ya está registrado como {previous}. ¿Quieres cambiarlo a {next}? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as {previous}. Do you want to change it to {next}? The previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré sous {previous}. Voulez-vous le remplacer par {next} ? Les entrées précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als {previous} erfasst. Möchten Sie ihn in {next} ändern? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come {previous}. Vuoi cambiarlo in {next}? Le voci precedenti di questo G-code saranno sostituite.",
    "To zadanie jest już zapisane jako {previous}. Czy chcesz zmienić je na {next}? Poprzednie wpisy dotyczące tego pliku G-code zostaną zastąpione.",
    "تم تسجيل هذا العمل بالفعل بصفته {previous}. هل تريد تغييره إلى {next}؟ ستُستبدل الإدخالات السابقة لملف G-code هذا.", "此任务已登记为 {previous}。要将其更改为 {next} 吗？此 G-code 之前的记录将被替换。"
    ],
  "El navegador bloqueó la ventana de la factura. Permite ventanas emergentes para este archivo.": [
    "The browser blocked the invoice window. Allow pop-ups for this file.",
    "Le navigateur a bloqué la fenêtre de la facture. Autorisez les fenêtres pop-up pour ce fichier.",
    "Der Browser hat das Rechnungsfenster blockiert. Erlauben Sie Pop-ups für diese Datei.",
    "Il browser ha bloccato la finestra della fattura. Consenti i popup per questo file.",
    "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.",
    "حظر المتصفح نافذة الفاتورة. اسمح بالنوافذ المنبثقة لهذا الملف.", "浏览器阻止了发票窗口。请允许此文件打开弹出窗口。"
    ],
  "Se encontró un borrador guardado el {date}. ¿Quieres recuperarlo?": [
    "A saved draft from {date} was found. Do you want to restore it?",
    "Un brouillon enregistré le {date} a été trouvé. Voulez-vous le récupérer ?",
    "Ein gespeicherter Entwurf vom {date} wurde gefunden. Möchten Sie ihn wiederherstellen?",
    "È stata trovata una bozza salvata il {date}. Vuoi recuperarla?",
    "Znaleziono wersję roboczą zapisaną {date}. Czy chcesz ją odzyskać?",
    "تم العثور على مسودة محفوظة بتاريخ {date}. هل تريد استعادتها؟", "发现一份保存于 {date} 的草稿。要恢复吗？"
    ],
  "¿Eliminar solo la tasación de «{name}» del historial?": [
    "Delete only the estimate for “{name}” from the history?",
    "Supprimer uniquement l’estimation « {name} » de l’historique ?",
    "Nur die Kalkulation für „{name}“ aus dem Verlauf löschen?",
    "Eliminare dalla cronologia solo la stima di «{name}»?",
    "Czy usunąć z historii tylko wycenę „{name}”?",
    "هل تريد حذف تقدير «{name}» فقط من السجل؟", "要仅从历史记录中删除“{name}”的估价吗？"
    ],
  "¿Eliminar el color personalizado {hex} de la paleta?": [
    "Delete the custom colour {hex} from the palette?",
    "Supprimer la couleur personnalisée {hex} de la palette ?",
    "Die benutzerdefinierte Farbe {hex} aus der Palette löschen?",
    "Eliminare il colore personalizzato {hex} dalla tavolozza?",
    "Czy usunąć własny kolor {hex} z palety?",
    "هل تريد حذف اللون المخصص {hex} من لوحة الألوان؟", "要从调色板中删除自定义颜色 {hex} 吗？"
    ],
  "¿Eliminar el movimiento «{name}» de la contabilidad?": [
    "Delete the accounting entry “{name}”?",
    "Supprimer l’écriture comptable « {name} » ?",
    "Buchung „{name}“ aus der Buchhaltung löschen?",
    "Eliminare il movimento contabile «{name}»?",
    "Czy usunąć operację „{name}” z księgowości?",
    "هل تريد حذف الحركة «{name}» من المحاسبة؟", "要从会计记录中删除“{name}”这笔记录吗？"
    ],
  "Print Cost & Profit · Versión 1.407": [
    "Print Cost & Profit · Version 1.407",
    "Print Cost & Profit · Version 1.407",
    "Print Cost & Profit · Version 1.407",
    "Print Cost & Profit · Versione 1.407",
    "Drukuj Koszt & Zysk · Version 1.407",
    "Print Cost & Profit · الإصدار 1.407", "Print Cost & Profit · 版本 1.407"
    ],
  "Impresora": [
    "Printer",
    "Imprimante",
    "Drucker",
    "Stampante",
    "Drukarka",
    "الطابعة", "打印机"
    ],
  "Se han cargado {count} impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": [
    "Loaded {count} saved printer(s). You can select and connect to any of them without searching again. To discover new printers, click “Search automatically”.",
    "{count} imprimante(s) enregistrée(s) chargée(s). Vous pouvez en sélectionner une et vous y connecter sans relancer la recherche. Pour détecter de nouvelles imprimantes, cliquez sur « Rechercher automatiquement ».",
    "{count} gespeicherte Drucker geladen. Sie können einen auswählen und verbinden, ohne erneut zu suchen. Um neue Drucker zu finden, klicken Sie auf „Automatisch suchen“.",
    "Caricate {count} stampanti salvate. Puoi selezionarne una e connetterti senza ripetere la ricerca. Per trovare nuove stampanti, fai clic su «Cerca automaticamente».",
    "Wczytano zapisane drukarki: {count}. Możesz wybrać dowolną i połączyć się z nią bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.",
    "تم تحميل {count} طابعة／طابعات محفوظة. يمكنك اختيار أي منها والاتصال بها دون إعادة البحث. لاكتشاف طابعات جديدة، اضغط على «البحث التلقائي».", "已加载 {count} 台已保存的打印机。你可以直接选择并连接，无需重新搜索。要发现新打印机，请点击“自动搜索”。"
    ],
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file} · Software: {software}": [
    "CONNECTED PRINTER · {name} · IP {ip} · Status: {state} · File: {file} · Software: {software}",
    "IMPRIMANTE CONNECTÉE · {name} · IP {ip} · État : {state} · Fichier : {file} · Logiciel : {software}",
    "VERBUNDENER DRUCKER · {name} · IP {ip} · Status: {state} · Datei: {file} · Software: {software}",
    "STAMPANTE CONNESSA · {name} · IP {ip} · Stato: {state} · File: {file} · Software: {software}",
    "PODŁĄCZONA DRUKARKA · {name} · IP {ip} · Stan: {state} · Plik: {file} · Oprogramowanie: {software}",
    "الطابعة متصلة · {name} · عنوان IP ‏{ip} · الحالة: {state} · الملف: {file} · البرنامج: {software}", "打印机已连接 · {name} · IP {ip} · 状态：{state} · 文件：{file} · 软件：{software}"
    ],
  "consultando la impresora conectada": [
    "checking the connected printer",
    "consultation de l’imprimante connectée",
    "verbundener Drucker wird abgefragt",
    "verifica della stampante connessa",
    "sprawdzanie stanu podłączonej drukarki",
    "جارٍ الاستعلام عن الطابعة المتصلة", "正在查询已连接的打印机"
    ],
  "Conexión correcta con el puente. La impresora responde.": [
    "Connection to the bridge successful. The printer is responding.",
    "Connexion au pont réussie. L’imprimante répond.",
    "Verbindung zur Bridge erfolgreich. Der Drucker antwortet.",
    "Connessione al bridge riuscita. La stampante risponde.",
    "Połączenie z mostkiem działa poprawnie. Drukarka odpowiada.",
    "تم الاتصال بالجسر بنجاح. الطابعة تستجيب.", "已成功连接桥接服务。打印机正在响应。"
    ],
  "Perfiles de impresora": [
    "Printer profiles",
    "Profils d’imprimante",
    "Druckerprofile",
    "Profili stampante",
    "drukarka profiles",
    "ملفات تعريف الطابعة", "打印机配置文件"
    ],
  "Versión": [
    "Version",
    "Version",
    "Version",
    "Version",
    "Wersja",
    "الإصدار", "版本"
    ],
  "Aplicar": [
    "Apply",
    "Appliquer",
    "Anwenden",
    "Applica",
    "Zastosuj",
    "تطبيق", "应用"
    ],
  "IP guardada y validada: {ip}. Pulsa «Ver impresora conectada» para consultar su estado.": [
    "IP saved and validated: {ip}. Click “View connected printer” to check its status.",
    "Adresse IP enregistrée et validée : {ip}. Cliquez sur « Voir l’imprimante connectée » pour vérifier son état.",
    "IP gespeichert und überprüft: {ip}. Klicken Sie auf „Verbundene Drucker anzeigen“, um den Status zu prüfen.",
    "IP salvato e verificato: {ip}. Premi «Visualizza stampante connessa» per controllarne lo stato.",
    "Zapisano i sprawdzono adres IP: {ip}. Kliknij „Pokaż podłączoną drukarkę”, aby sprawdzić jej stan.",
    "تم حفظ عنوان IP والتحقق منه: {ip}. اضغط على «عرض الطابعة المتصلة» للاستعلام عن حالتها.", "IP 地址已保存并验证：{ip}。点击“查看已连接的打印机”以查询其状态。"
    ],
  "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {backups}.": [
    "Server and SQLite checked. Database: {database}. Backup folder: {backups}.",
    "Serveur et SQLite vérifiés. Base de données : {database}. Dossier des sauvegardes : {backups}.",
    "Server und SQLite überprüft. Datenbank: {database}. Sicherungsordner: {backups}.",
    "Server e SQLite verificati. Database: {database}. Cartella dei backup: {backups}.",
    "Serwer i SQLite zostały sprawdzone. Baza danych: {database}. Folder kopii zapasowych: {backups}.",
    "تم التحقق من الخادم وSQLite. قاعدة البيانات: {database}. مجلد النسخ الاحتياطية: {backups}.", "服务器和 SQLite 已检查。数据库：{database}。备份文件夹：{backups}。"
    ],
  "Location: {path}": [
    "Location: {path}",
    "Emplacement : {path}",
    "Speicherort: {path}",
    "Percorso: {path}",
    "Lokalizacja: {path}",
    "الموقع: {path}", "位置：{path}"
    ],
  "Copia válida. Integridad: {integrity}. Claves: {keys}. Tamaño: {size} bytes. Archivo: {file}": [
    "Valid backup. Integrity: {integrity}. Keys: {keys}. Size: {size} bytes. File: {file}",
    "Sauvegarde valide. Intégrité : {integrity}. Clés : {keys}. Taille : {size} octets. Fichier : {file}",
    "Gültige Sicherung. Integrität: {integrity}. Schlüssel: {keys}. Größe: {size} Bytes. Datei: {file}",
    "Backup valido. Integrità: {integrity}. Chiavi: {keys}. Dimensione: {size} byte. File: {file}",
    "Valid kopia zapasowa. integralność: {integralność}. Keys: {keys}. Size: {size} bytes. Plik: {Plik}",
    "نسخة احتياطية صالحة. السلامة: {integrity}. المفاتيح: {keys}. الحجم: {size} بايت. الملف: {file}", "备份有效。完整性：{integrity}。键数：{keys}。大小：{size} 字节。文件：{file}"
    ],
  "ORDER 2": [
    "ORDER 2",
    "COMMANDE 2",
    "AUFTRAG 2",
    "ORDINE 2",
    "Zamówienie 2",
    "الطلب 2", "订单 2"
    ],
  "− Ocultar campos": [
    "− Hide fields",
    "− Masquer les champs",
    "− Felder ausblenden",
    "− Nascondi campi",
    "− Ukryj fields",
    "− إخفاء الحقول", "− 隐藏字段"
    ],
  "↑ Subir apartado": [
    "↑ Move section up",
    "↑ Monter la section",
    "↑ Abschnitt nach oben",
    "↑ Sposta sezione in alto",
    "↑ Przenieś sekcję w górę",
    "↑ نقل القسم إلى الأعلى", "↑ 上移分区"
    ],
  "↓ Bajar apartado": [
    "↓ Move section down",
    "↓ Descendre la section",
    "↓ Abschnitt nach unten",
    "↓ Sposta sezione in basso",
    "↓ Przenieś sekcję w dół",
    "↓ نقل القسم إلى الأسفل", "↓ 下移分区"
    ],
  "Ocultar campos": [
    "Hide fields",
    "Masquer les champs",
    "Felder ausblenden",
    "Nascondi campi",
    "Ukryj pola",
    "إخفاء الحقول", "隐藏字段"
    ],
  "Subir apartado": [
    "Move section up",
    "Monter la section",
    "Abschnitt nach oben",
    "Sposta sezione in alto",
    "Przenieś sekcję w górę",
    "نقل القسم إلى الأعلى", "上移分区"
    ],
  "Bajar apartado": [
    "Move section down",
    "Descendre la section",
    "Abschnitt nach unten",
    "Sposta sezione in basso",
    "Przenieś sekcję w dół",
    "نقل القسم إلى الأسفل", "下移分区"
    ],
  "IP guardada y validada": [
    "IP saved and validated",
    "Adresse IP enregistrée et validée",
    "IP-Adresse gespeichert und validiert",
    "IP salvato e convalidato",
    "IP Zapisano i validated",
    "تم حفظ عنوان IP والتحقق منه", "IP 已保存并验证"
    ],
  "Estado:": [
    "Status:",
    "État :",
    "Status:",
    "Stato:",
    "Stan:",
    "الحالة:", "状态："
    ],
  "Archivo:": [
    "File:",
    "Fichier :",
    "Datei:",
    "File:",
    "Plik:",
    "الملف:", "文件："
    ],
  "Software:": [
    "Software:",
    "Logiciel :",
    "Software:",
    "Software:",
    "Oprogramowanie:",
    "البرنامج:", "软件："
    ],
  "Claves:": [
    "Keys:",
    "Clés :",
    "Schlüssel:",
    "Chiavi:",
    "Klucze:",
    "المفاتيح:", "键数："
    ],
  "Tamaño:": [
    "Size:",
    "Taille :",
    "Größe:",
    "Dimensione:",
    "Rozmiar:",
    "الحجم:", "大小："
    ],
  "Integridad:": [
    "Integrity:",
    "Intégrité :",
    "Integrität:",
    "Integrità:",
    "integralność:",
    "السلامة:", "完整性："
    ],
  "Carpeta de copias:": [
    "Backup folder:",
    "Dossier des sauvegardes :",
    "Sicherungsordner:",
    "Cartella dei backup:",
    "Folder kopii zapasowych:",
    "مجلد النسخ الاحتياطية:", "备份文件夹："
    ],
  "Servidor y SQLite comprobados. Base:": [
    "Server and SQLite checked. Database:",
    "Serveur et SQLite vérifiés. Base de données :",
    "Server und SQLite überprüft. Datenbank:",
    "Server e SQLite verificati. Database:",
    "Sprawdzono serwer i SQLite. Baza danych:",
    "تم التحقق من الخادم وSQLite. قاعدة البيانات:", "服务器和 SQLite 已检查。数据库："
    ],
  "Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": [
    "2 saved printer(s) loaded. You can select and connect to any of them without searching again. To discover new printers, click “Discover automatically”.",
    "2 imprimante(s) enregistrée(s) chargée(s). Vous pouvez en sélectionner une et vous y connecter sans relancer la recherche. Pour découvrir de nouvelles imprimantes, cliquez sur « Rechercher automatiquement ».",
    "2 gespeicherte Drucker geladen. Sie können einen davon auswählen und verbinden, ohne erneut zu suchen. Um neue Drucker zu finden, klicken Sie auf „Automatisch suchen“.",
    "Caricate 2 stampanti salvate. Puoi selezionarne una e connetterti senza cercare di nuovo. Per trovare nuove stampanti, premi «Cerca automaticamente».",
    "Wczytano 2 zapisane drukarki. Możesz wybrać i połączyć się z dowolną z nich bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.",
    "تم تحميل طابعتين محفوظتين. يمكنك اختيار أي منهما والاتصال بها دون إعادة البحث. لاكتشاف طابعات جديدة، اضغط على «البحث التلقائي».",
    "已加载 2 台已保存的打印机。你可以直接选择并连接，无需重新搜索。要发现新打印机，请点击“自动搜索”。"
    ],
  "Editando cliente guardado. Al guardar se actualizarán sus datos en toda la aplicación.": [
    "Editing saved customer. Saving will update their details throughout the application.",
    "Modification du client enregistré. L’enregistrement mettra à jour ses données dans toute l’application.",
    "Gespeicherten Kunden bearbeiten. Beim Speichern werden seine Daten in der gesamten Anwendung aktualisiert.",
    "Modifica del cliente salvato. Salvando, i dati verranno aggiornati in tutta l’applicazione.",
    "Edytujesz zapisanego klienta. Po zapisaniu jego dane zostaną zaktualizowane w całej aplikacji.",
    "يجري تعديل عميل محفوظ. عند الحفظ، سيتم تحديث بياناته في التطبيق بالكامل.", "正在编辑已保存的客户。保存后，其信息将在整个应用中更新。"
    ],
  "Introduce los datos del nuevo cliente.": [
    "Enter the new customer’s details.",
    "Saisissez les coordonnées du nouveau client.",
    "Geben Sie die Daten des neuen Kunden ein.",
    "Inserisci i dati del nuovo cliente.",
    "Wprowadź dane nowego klienta.",
    "أدخل بيانات العميل الجديد.", "请输入新客户的信息。"
    ],
  "Bobinas": [
    "Spools",
    "Bobines",
    "Spulen",
    "Bobine",
    "Szpule",
    "بكرات الخيوط", "线轴"
    ],
  "✓ Aplicar": [
    "✓ Apply",
    "✓ Appliquer",
    "✓ Anwenden",
    "✓ Applica",
    "✓ Zastosuj",
    "✓ تطبيق", "✓ 应用"
    ],
  "{count} bobina": [
    "{count} spool",
    "{count} bobine",
    "{count} Spule",
    "{count} bobina",
    "{count} szpula",
    "{count} بكرة", "{count} 个线轴"
    ],
  "{count} bobinas": [
    "{count} spools",
    "{count} bobines",
    "{count} Spulen",
    "{count} bobine",
    "{count} szpul",
    "{count} بكرات", "{count} 个线轴"
    ],
  "MARCA": [
    "BRAND",
    "MARQUE",
    "MARKE",
    "MARCA",
    "MARKA",
    "العلامة التجارية", "品牌"
    ],
  "Marca de filamento": [
    "Filament brand",
    "Marque de filament",
    "Filamentmarke",
    "Marca del filamento",
    "Marka filamentu",
    "العلامة التجارية للخيط", "耗材品牌"
    ],
  "Se ha guardado la bobina.": [
    "Spool saved.",
    "Bobine enregistrée.",
    "Spule gespeichert.",
    "Bobina salvata.",
    "szpula Zapisano.",
    "تم حفظ بكرة الخيط.", "线轴已保存。"
    ],
  "Bobina guardada correctamente.": [
    "Spool saved successfully.",
    "Bobine enregistrée.",
    "Spule erfolgreich gespeichert.",
    "Bobina salvata correttamente.",
    "Szpulę zapisano poprawnie.",
    "تم حفظ بكرة الخيط بنجاح。", "线轴已成功保存。"
    ],
  "¿Eliminar esta bobina?": [
    "Delete this spool?",
    "Supprimer cette bobine ?",
    "Diese Spule löschen?",
    "Eliminare questa bobina?",
    "Czy usunąć tę szpulę?",
    "هل تريد حذف بكرة الخيط هذه؟", "要删除此线轴吗？"
    ],
  "Editar bobina": [
    "Edit spool",
    "Modifier la bobine",
    "Spule bearbeiten",
    "Modifica bobina",
    "Edytuj szpula",
    "تعديل بكرة الخيط", "编辑线轴"
    ],
  "Eliminar bobina": [
    "Delete spool",
    "Supprimer la bobine",
    "Spule löschen",
    "Elimina bobina",
    "Usuń szpula",
    "حذف بكرة الخيط", "删除线轴"
    ],
  "Filamento": [
    "Filament",
    "Filament",
    "Filament",
    "Filamento",
    "Filament",
    "الخيط", "耗材"
    ],
  "Stock insuficiente": [
    "Insufficient stock",
    "Stock insuffisant",
    "Bestand unzureichend",
    "Scorte insufficienti",
    "Niewystarczający stan magazynowy",
    "المخزون غير كافٍ",
    "库存不足"
    ],
  "Sin asignar": [
    "Unassigned",
    "Non attribué",
    "Nicht zugewiesen",
    "Non assegnato",
    "Nieprzypisane",
    "غير مُعيّن", "未分配"
    ],
  "Pedidos": [
    "Orders",
    "Commandes",
    "Aufträge",
    "Ordini",
    "Zamówienia",
    "الطلبات",
    "订单"
    ],
  "📦 Pedidos": [
    "📦 Orders",
    "📦 Commandes",
    "📦 Aufträge",
    "📦 Ordini",
    "📦 Zamówienia",
    "📦 الطلبات", "📦 订单"
    ],
  "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y pedidos.": [
    "Central customer directory. Saved customers can be selected in quotes, invoices and orders.",
    "Répertoire central des clients. Les clients enregistrés ici peuvent être sélectionnés dans les devis, factures et commandes.",
    "Zentrale Kundenkartei. Hier gespeicherte Kunden können in Angeboten, Rechnungen und Aufträgen ausgewählt werden.",
    "Rubrica clienti centrale. I clienti salvati qui possono essere selezionati in preventivi, fatture e ordini.",
    "Centralna książka adresowa klientów. Zapisanych tutaj klientów można wybierać w ofertach, fakturach i zamówieniach.",
    "دفتر مركزي للعملاء. يمكن اختيار العملاء المحفوظين هنا عند إعداد عروض الأسعار والفواتير والطلبات.", "客户中央名录。在此保存的客户可用于报价单、发票和订单。"
    ],
  "Stock filamento": [
    "Filament stock",
    "Stock de filament",
    "Filamentbestand",
    "Scorte di filamento",
    "Stan filamentu",
    "مخزون الخيوط", "耗材库存"
    ],
  "🧵 Stock filamento": [
    "🧵 Filament stock",
    "🧵 Stock de filament",
    "🧵 Filamentbestand",
    "🧵 Scorte di filamento",
    "🧵 Stan magazynowy filamentu",
    "🧵 مخزون الخيوط", "🧵 耗材库存"
    ],
  "Control manual del stock de filamento y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": [
    "Manual tracking of filament stock and remaining material. Price per kilogram is used as a reference for future calculations.",
    "Suivi manuel du stock de filament et du matériau restant. Le prix au kilo sert de référence pour les prochains calculs.",
    "Manuelle Verwaltung des Filamentbestands und Restmaterials. Der Kilopreis dient als Referenz für künftige Berechnungen.",
    "Gestione manuale delle scorte di filamento e del materiale rimanente. Il prezzo al chilo è un riferimento per i calcoli successivi.",
    "Ręczne zarządzanie zapasem filamentu i pozostałą ilością materiału. Cena za kilogram służy jako punkt odniesienia w kolejnych obliczeniach.",
    "تحكم يدوي في مخزون الخيوط والكمية المتبقية من المواد. يُستخدم السعر لكل كيلوغرام مرجعًا للحسابات القادمة.", "手动管理耗材库存和剩余材料。每千克价格可作为后续计算的参考。"
    ],
  "Buscar pedidos": [
    "Search orders",
    "Rechercher des commandes",
    "Aufträge suchen",
    "Cerca ordini",
    "Szukaj zamówień",
    "البحث عن الطلبات", "搜索订单"
    ],
  "Cliente, producto, estado…": [
    "Customer, product, status…",
    "Client, produit, statut…",
    "Kunde, Produkt, Status…",
    "Cliente, prodotto, stato…",
    "Klient, produkt, stan…",
    "العميل، المنتج، الحالة…", "客户、产品、状态…"
    ],
  "Buscar presupuestos": [
    "Search quotes",
    "Rechercher des devis",
    "Angebote suchen",
    "Cerca preventivi",
    "Szukaj ofert",
    "البحث عن عروض الأسعار", "搜索报价单"
    ],
  "Número, cliente, producto…": [
    "Number, customer, product…",
    "Numéro, client, produit…",
    "Nummer, Kunde, Produkt…",
    "Numero, cliente, prodotto…",
    "Numer, klient, produkt…",
    "الرقم، العميل، المنتج…", "编号、客户、产品…"
    ],
  "Buscar facturas": [
    "Search invoices",
    "Rechercher des factures",
    "Rechnungen suchen",
    "Cerca fatture",
    "Szukaj faktur",
    "البحث عن الفواتير", "搜索发票"
    ],
  "Número, cliente, concepto…": [
    "Number, customer, description…",
    "Numéro, client, libellé…",
    "Nummer, Kunde, Beschreibung…",
    "Numero, cliente, descrizione…",
    "Numer, klient, opis…",
    "الرقم، العميل، الوصف…", "编号、客户、项目…"
    ],
  "Buscar filamento": [
    "Search filament",
    "Rechercher un filament",
    "Filament suchen",
    "Cerca filamento",
    "Szukaj filamentu",
    "البحث عن الخيوط", "搜索耗材"
    ],
  "Material, color, marca…": [
    "Material, colour, brand…",
    "Matériau, couleur, marque…",
    "Material, Farbe, Marke…",
    "Materiale, colore, marca…",
    "Materiał, kolor, marka…",
    "المادة، اللون، العلامة التجارية…", "材料、颜色、品牌…"
    ],
  "Buscar movimientos contables": [
    "Search accounting entries",
    "Rechercher les écritures comptables",
    "Buchungssätze suchen",
    "Cerca movimenti contabili",
    "Szukaj zapisów księgowych",
    "البحث عن الحركات المحاسبية", "搜索会计记录"
    ],
  "Fecha, impresora, concepto, referencia…": [
    "Date, printer, description, reference…",
    "Date, imprimante, libellé, référence…",
    "Datum, Drucker, Beschreibung, Referenz…",
    "Data, stampante, descrizione, riferimento…",
    "Data, drukarka, opis, numer referencyjny…",
    "التاريخ، الطابعة، الوصف، المرجع…", "日期、打印机、项目、参考编号…"
    ],
  "Limpiar": [
    "Clear",
    "Effacer",
    "Leeren",
    "Pulisci",
    "Wyczyść",
    "مسح", "清除"
    ],
  "No hay resultados para la búsqueda.": [
    "No search results found.",
    "Aucun résultat pour cette recherche.",
    "Keine Suchergebnisse gefunden.",
    "Nessun risultato trovato.",
    "Brak wyników wyszukiwania.",
    "لا توجد نتائج لهذا البحث.", "没有找到匹配的结果。"
    ],
  "Ordenar por": [
    "Sort by",
    "Trier par",
    "Sortieren nach",
    "Ordina per",
    "Sortuj według",
    "ترتيب حسب", "排序方式"
    ],
  "Predeterminado": [
    "Default",
    "Par défaut",
    "Standard",
    "Predefinito",
    "Domyślnie",
    "افتراضي", "默认"
    ],
  "Ordenar pedidos": [
    "Sort orders",
    "Trier les commandes",
    "Aufträge sortieren",
    "Ordina ordini",
    "Sortuj zamówienia",
    "ترتيب الطلبات", "排序订单"
    ],
  "Ordenar presupuestos": [
    "Sort quotes",
    "Trier les devis",
    "Angebote sortieren",
    "Ordina preventivi",
    "Sortuj oferty",
    "ترتيب عروض الأسعار", "排序报价单"
    ],
  "Ordenar facturas": [
    "Sort invoices",
    "Trier les factures",
    "Rechnungen sortieren",
    "Ordina fatture",
    "Sortuj faktury",
    "ترتيب الفواتير", "排序发票"
    ],
  "Ordenar filamento": [
    "Sort filament",
    "Trier le filament",
    "Filament sortieren",
    "Ordina filamento",
    "Sortuj filament",
    "ترتيب الخيوط", "排序耗材"
    ],
  "Ordenar movimientos contables": [
    "Sort accounting entries",
    "Trier les mouvements comptables",
    "Buchungen sortieren",
    "Ordina movimenti contabili",
    "Sortuj operacje księgowe",
    "ترتيب الحركات المحاسبية", "排序会计记录"
    ],
  "Número": [
    "Number",
    "Numéro",
    "Nummer",
    "Numero",
    "Numer",
    "الرقم", "编号"
    ],
  "Color": [
    "Color",
    "Couleur",
    "Farbe",
    "Colore",
    "Kolor",
    "اللون", "颜色"
    ],
  "Importe": [
    "Amount",
    "Montant",
    "Betrag",
    "Importo",
    "kwota",
    "المبلغ", "金额"
    ],
  "Mostrar campos": [
    "Show fields",
    "Afficher les champs",
    "Felder anzeigen",
    "Mostra campi",
    "Pokaż pola",
    "إظهار الحقول", "显示字段"
    ],
  "Buscando la impresora en la red local… Si no aparece en 18 segundos, podrás introducir su IP manualmente.": [
    "Searching for the printer on the local network… If it does not appear within 18 seconds, you can enter its IP manually.",
    "Recherche de l’imprimante sur le réseau local… Si elle n’apparaît pas dans les 18 secondes, vous pourrez saisir son adresse IP manuellement.",
    "Suche nach dem Drucker im lokalen Netzwerk… Wenn er nach 18 Sekunden nicht erscheint, können Sie die IP manuell eingeben.",
    "Ricerca della stampante nella rete locale… Se non appare entro 18 secondi, puoi inserire manualmente il suo IP.",
    "Wyszukiwanie drukarki w sieci lokalnej… Jeśli nie pojawi się w ciągu 18 sekund, możesz ręcznie wpisać jej adres IP.",
    "جارٍ البحث عن الطابعة في الشبكة المحلية… إذا لم تظهر خلال 18 ثانية، يمكنك إدخال عنوان IP يدويًا.", "正在本地网络中搜索打印机……如果 18 秒内未出现，你可以手动输入 IP 地址。"
    ],
  "Consultando servidor, integridad y copias…": [
    "Checking server, integrity, and backups…",
    "Vérification du serveur, de l’intégrité et des sauvegardes…",
    "Server, Integrität und Sicherungen werden geprüft…",
    "Verifica del server, dell’integrità e dei backup…",
    "Sprawdzanie serwera, integralności bazy i kopii zapasowych…",
    "جارٍ فحص الخادم وسلامة البيانات والنسخ الاحتياطية…", "正在检查服务器、完整性和备份……"
    ],
  "Respuesta no válida del servidor (HTTP ": [
    "Invalid server response (HTTP ",
    "Réponse du serveur non valide (HTTP ",
    "Ungültige Serverantwort (HTTP ",
    "Risposta del server non valida (HTTP ",
    "Nieprawidłowa odpowiedź serwera (HTTP ",
    "استجابة غير صالحة من الخادم (HTTP ", "服务器响应无效（HTTP "
    ],
  "Mostrar": [
    "Show",
    "Afficher",
    "Anzeigen",
    "Mostra",
    "Pokaż",
    "إظهار", "显示"
    ],
  "Aceptar": [
    "Accept",
    "Accepter",
    "Akzeptieren",
    "Accetta",
    "Akceptuj",
    "موافق", "确定"
    ],
  "Aviso": [
    "Notice",
    "Avis",
    "Hinweis",
    "Avviso",
    "Uwaga",
    "تنبيه", "提示"
    ],
  "Información": [
    "Information",
    "Information",
    "Information",
    "Informazioni",
    "Informacje",
    "معلومات", "信息"
    ],
  "Error": [
    "Error",
    "Erreur",
    "Fehler",
    "Errore",
    "Błąd",
    "خطأ", "错误"
    ],
  "Cerrar": [
    "Close",
    "Fermer",
    "Schließen",
    "Chiudi",
    "Zamknij",
    "إغلاق", "关闭"
    ],
  "Conectado": [
    "Connected",
    "Connecté",
    "Verbunden",
    "Connesso",
    "Połączono",
    "متصل", "已连接"
    ],
  "Desconectado": [
    "Disconnected",
    "Déconnecté",
    "Getrennt",
    "Disconnesso",
    "Rozłączono",
    "غير متصل", "已断开"
    ],
  "Listo": [
    "Ready",
    "Prêt",
    "Bereit",
    "Pronto",
    "Gotowe",
    "جاهز", "就绪"
    ],
  "En curso": [
    "In progress",
    "En cours",
    "In Bearbeitung",
    "In corso",
    "w progress",
    "قيد التنفيذ", "进行中"
    ],
  "Completado": [
    "Completed",
    "Terminé",
    "Abgeschlossen",
    "Completato",
    "ukończono",
    "مكتمل", "已完成"
    ],
  "Fallido": [
    "Failed",
    "Échec",
    "Fehlgeschlagen",
    "Non riuscito",
    "Niepowodzenie",
    "فشل", "失败"
    ],
  "Buscando…": [
    "Searching…",
    "Recherche…",
    "Suche…",
    "Ricerca…",
    "Wyszukiwanie…",
    "جارٍ البحث…", "正在搜索……"
    ],
  "No se encontraron resultados": [
    "No results found",
    "Aucun résultat trouvé",
    "Keine Ergebnisse gefunden",
    "Nessun risultato trovato",
    "Nie znaleziono wyników",
    "لم يتم العثور على نتائج", "未找到结果"
    ],
  "Seleccionar idioma": [
    "Select language",
    "Sélectionner la langue",
    "Sprache auswählen",
    "Seleziona lingua",
    "Wybierz Język",
    "اختيار اللغة", "选择语言"
  ],
  "Idioma": [
    "Language",
    "Langue",
    "Sprache",
    "Lingua",
    "Język",
    "اللغة", "语言"
  ],
  "Español": [
    "Spanish",
    "Espagnol",
    "Spanisch",
    "Spagnolo",
    "Hiszpański",
    "الإسبانية", "西班牙语"
  ],
  "Inglés": [
    "English",
    "Anglais",
    "Englisch",
    "Inglese",
    "Angielski",
    "الإنجليزية", "英语"
    ],
  "Francés": [
    "French",
    "Français",
    "Französisch",
    "Francese",
    "Francuski",
    "الفرنسية", "法语"
    ],
  "Alemán": [
    "German",
    "Allemand",
    "Deutsch",
    "Tedesco",
    "Niemiecki",
    "الألمانية", "德语"
    ],
  "Italiano": [
    "Italian",
    "Italien",
    "Italienisch",
    "Italiano",
    "Włoski",
    "الإيطالية", "意大利语"
  ],
  "Polaco": [
    "Polish",
    "Polonais",
    "Polnisch",
    "Polacco",
    "Polski",
    "البولندية", "波兰语"
    ],
  "Rentable, pero por debajo del precio recomendado: faltan {amount} antes de impuestos por unidad para alcanzar el porcentaje de beneficio objetivo.": [
    "Profitable, but below the recommended price: an additional {amount} per unit before tax is needed to reach the target profit percentage.",
    "Rentable, mais en dessous du prix recommandé : il manque {amount} par unité avant impôts pour atteindre le pourcentage de bénéfice visé.",
    "Rentabel, aber unter dem empfohlenen Preis: Es fehlen {amount} pro Einheit vor Steuern, um den angestrebten Gewinnprozentsatz zu erreichen.",
    "Redditizio, ma al di sotto del prezzo consigliato: mancano {amount} per unità, al netto delle imposte, per raggiungere la percentuale di profitto obiettivo.",
    "Opłacalne, ale poniżej zalecanej ceny: brakuje {amount} na sztukę przed opodatkowaniem, aby osiągnąć docelowy procent zysku.",
    "المشروع مربح، لكنه أقل من السعر الموصى به: يلزم إضافة {amount} لكل وحدة قبل الضرائب للوصول إلى نسبة الربح المستهدفة.",
    "项目有盈利，但低于建议售价：每件还需增加 {amount}（税前），才能达到目标利润率。"
    ],
  "El margen se calcula sobre el precio de venta sin impuestos; la rentabilidad sobre coste se calcula dividiendo el beneficio entre el coste por unidad. El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": [
    "Margin is calculated on the pre-tax selling price; return on cost is profit divided by cost per unit. The displayed tax is configurable and estimated. Check the rate applicable to your transaction, country, product and tax status.",
    "La marge est calculée sur le prix de vente hors taxes ; la rentabilité sur coût correspond au bénéfice divisé par le coût unitaire. La taxe affichée est une estimation configurable. Vérifiez le taux applicable à votre opération, pays, produit et situation fiscale.",
    "Die Marge wird anhand des Verkaufspreises ohne Steuern berechnet; die Rentabilität bezogen auf die Kosten ist der Gewinn geteilt durch die Stückkosten. Die angezeigte Steuer ist eine konfigurierbare Schätzung. Prüfen Sie den für Geschäft, Land, Produkt und Steuersituation geltenden Satz.",
    "Il margine è calcolato sul prezzo di vendita al netto delle imposte; la redditività sul costo è il profitto diviso per il costo unitario. L’imposta mostrata è una stima configurabile. Verifica l’aliquota applicabile all’operazione, al paese, al prodotto e alla tua situazione fiscale.",
    "Marżę oblicza się od ceny sprzedaży bez podatku; rentowność względem kosztu oblicza się, dzieląc zysk przez koszt jednostkowy. Wyświetlany podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej.",
    "يُحسب الهامش على سعر البيع دون الضرائب؛ وتُحسب نسبة العائد على التكلفة بقسمة الربح على تكلفة الوحدة. الضريبة المعروضة تقدير قابل للتهيئة. تحقق من النسبة المناسبة لمعاملتك وبلدك ومنتجك ووضعك الضريبي.",
    "利润率按不含税售价计算；成本收益率以利润除以单件成本计算。显示的税额为可配置估算值。请核实适用于你的交易、国家、产品和税务状况的税率。"
    ],
  "No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n{message}": [
    "PC storage could not be started. Browser storage will not be used to avoid splitting your data.\n\n{message}",
    "Impossible de démarrer le stockage du PC. Le stockage du navigateur ne sera pas utilisé afin d’éviter de séparer les données.\n\n{message}",
    "Der PC-Speicher konnte nicht gestartet werden. Der Browserspeicher wird nicht verwendet, um eine Aufteilung der Daten zu vermeiden.\n\n{message}",
    "Impossibile avviare l’archiviazione sul PC. Non verrà utilizzata l’archiviazione del browser per evitare di separare i dati.\n\n{message}",
    "Nie udało się uruchomić pamięci na komputerze. Nie zostanie użyta pamięć przeglądarki, aby uniknąć rozdzielenia danych.\n\n{message}",
    "تعذر بدء التخزين على الكمبيوتر. لن يتم التحويل إلى تخزين المتصفح لتجنب فصل البيانات.\n\n{message}",
    "无法启动电脑本地存储。为避免数据分散，不会切换到浏览器存储。\n\n{message}"
    ],
  "No se pudo aplicar la IP {ip}. {message}. Comprueba que el puente esté iniciado y que la U1 responda en el puerto 7125.": [
    "Could not apply IP {ip}. {message}. Make sure the bridge is running and the U1 responds on port 7125.",
    "Impossible d’appliquer l’adresse IP {ip}. {message}. Vérifiez que le pont est démarré et que la U1 répond sur le port 7125.",
    "IP-Adresse {ip} konnte nicht übernommen werden. {message}. Prüfen Sie, ob die Bridge läuft und die U1 auf Port 7125 antwortet.",
    "Impossibile applicare l’IP {ip}. {message}. Verifica che il bridge sia avviato e che la U1 risponda sulla porta 7125.",
    "Nie udało się zastosować adresu IP {ip}. {message}. Sprawdź, czy most działa i czy U1 odpowiada na porcie 7125.",
    "تعذر تطبيق عنوان IP ‏{ip}. {message}. تحقق من تشغيل الجسر واستجابة U1 على المنفذ 7125.",
    "无法应用 IP 地址 {ip}。{message}。请确认桥接服务已启动，并且 U1 正在 7125 端口响应。"
    ],
  "No se recibió ningún archivo.": [
    "No file was received.",
    "Aucun fichier reçu.",
    "Es wurde keine Datei empfangen.",
    "Non è stato ricevuto alcun file.",
    "Nie otrzymano żadnego pliku.",
    "لم يتم استلام أي ملف.",
    "未收到任何文件。"
    ],
  "El archivo seleccionado está vacío (0 bytes).": [
    "The selected file is empty (0 bytes).",
    "Le fichier sélectionné est vide (0 octet).",
    "Die ausgewählte Datei ist leer (0 Byte).",
    "Il file selezionato è vuoto (0 byte).",
    "Wybrany plik jest pusty (0 bajtów).",
    "الملف المحدد فارغ (0 بايت).",
    "所选文件为空（0 字节）。"
    ],
  "Introduce una IPv4 válida, por ejemplo 192.168.1.48.": [
    "Enter a valid IPv4 address, for example 192.168.1.48.",
    "Saisissez une adresse IPv4 valide, par exemple 192.168.1.48.",
    "Geben Sie eine gültige IPv4-Adresse ein, zum Beispiel 192.168.1.48.",
    "Inserisci un indirizzo IPv4 valido, ad esempio 192.168.1.48.",
    "Wprowadź prawidłowy adres IPv4, na przykład 192.168.1.48.",
    "أدخل عنوان IPv4 صالحًا، مثل 192.168.1.48.",
    "请输入有效的 IPv4 地址，例如 192.168.1.48。"
    ],
  "Comprobando la impresora en {ip}:7125…": [
    "Checking the printer at {ip}:7125…",
    "Vérification de l’imprimante sur {ip}:7125…",
    "Drucker unter {ip}:7125 wird überprüft…",
    "Verifica della stampante su {ip}:7125…",
    "Sprawdzanie drukarki pod adresem {ip}:7125…",
    "جارٍ التحقق من الطابعة على {ip}:7125…",
    "正在检查 {ip}:7125 上的打印机……"
    ],
  "IP comprobada y guardada: {ip}. Pulsa «Probar conexión» para verificar el estado.": [
    "IP checked and saved: {ip}. Click “Test connection” to verify the status.",
    "Adresse IP vérifiée et enregistrée : {ip}. Cliquez sur « Tester la connexion » pour vérifier l’état.",
    "IP-Adresse geprüft und gespeichert: {ip}. Klicken Sie auf „Verbindung testen“, um den Status zu überprüfen.",
    "IP verificato e salvato: {ip}. Fai clic su «Verifica connessione» per controllare lo stato.",
    "Adres IP sprawdzony i zapisany: {ip}. Kliknij „Testuj połączenie”, aby sprawdzić stan.",
    "تم التحقق من عنوان IP وحفظه: {ip}. اضغط على «اختبار الاتصال» للتحقق من الحالة.",
    "IP 已验证并保存：{ip}。点击“测试连接”以检查状态。"
    ],
  "Buscando una Snapmaker U1 en la red local. Puede tardar hasta 15 segundos…": [
    "Searching for a Snapmaker U1 on the local network. This may take up to 15 seconds…",
    "Recherche d’une Snapmaker U1 sur le réseau local. Cela peut prendre jusqu’à 15 secondes…",
    "Suche nach einer Snapmaker U1 im lokalen Netzwerk. Dies kann bis zu 15 Sekunden dauern…",
    "Ricerca di una Snapmaker U1 nella rete locale. Potrebbero essere necessari fino a 15 secondi…",
    "Wyszukiwanie drukarki Snapmaker U1 w sieci lokalnej. Może to potrwać do 15 sekund…",
    "جارٍ البحث عن Snapmaker U1 في الشبكة المحلية. قد يستغرق ذلك حتى 15 ثانية…",
    "正在本地网络中搜索 Snapmaker U1。最多可能需要 15 秒……"
    ],
  "Snapmaker U1 encontrada y configurada: {ip}. Pulsa «Probar conexión».": [
    "Snapmaker U1 found and configured: {ip}. Click “Test connection”.",
    "Snapmaker U1 trouvée et configurée : {ip}. Cliquez sur « Tester la connexion ».",
    "Snapmaker U1 gefunden und konfiguriert: {ip}. Klicken Sie auf „Verbindung testen“.",
    "Snapmaker U1 trovata e configurata: {ip}. Fai clic su «Verifica connessione».",
    "Znaleziono i skonfigurowano Snapmaker U1: {ip}. Kliknij „Testuj połączenie”.",
    "تم العثور على Snapmaker U1 وإعدادها: {ip}. اضغط على «اختبار الاتصال».",
    "已找到并配置 Snapmaker U1：{ip}。点击“测试连接”。"
    ],
  "No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.": [
    "PC storage could not be started. Browser storage will not be used to avoid splitting your data.",
    "Impossible de démarrer le stockage du PC. Le stockage du navigateur ne sera pas utilisé afin d’éviter de séparer les données.",
    "Der PC-Speicher konnte nicht gestartet werden. Der Browserspeicher wird nicht verwendet, um eine Aufteilung der Daten zu vermeiden.",
    "Impossibile avviare l’archiviazione sul PC. Non verrà utilizzata l’archiviazione del browser per evitare di separare i dati.",
    "Nie udało się uruchomić pamięci na komputerze. Pamięć przeglądarki nie zostanie użyta, aby uniknąć rozdzielenia danych.",
    "تعذر بدء التخزين على الكمبيوتر. لن يتم التحويل إلى تخزين المتصفح لتجنب فصل البيانات.",
    "无法启动电脑本地存储。为避免数据分散，不会切换到浏览器存储。"
    ],
  "No se pudo aplicar la IP": [
    "Could not apply the IP",
    "Impossible d’appliquer l’adresse IP",
    "Die IP konnte nicht angewendet werden",
    "Impossibile applicare l’IP",
    "Nie udało się zastosować adresu IP",
    "تعذر تطبيق عنوان IP",
    "无法应用 IP 地址"
    ],
  "Historial de tasaciones": [
    "Estimate history",
    "Historique des estimations",
    "Kalkulationsverlauf",
    "Cronologia delle stime",
    "Historia wycen",
    "سجل التقديرات",
    "估价历史记录"
    ],
  "Busca piezas guardadas, ordena por fecha o rentabilidad y selecciona dos tasaciones para compararlas. El historial se conserva en el almacenamiento local de esta instalación.": [
    "Search saved parts, sort by date or profitability, and select two estimates to compare. History is kept in this installation’s local storage.",
    "Recherchez les pièces enregistrées, triez par date ou rentabilité et sélectionnez deux estimations à comparer. L’historique est conservé dans le stockage local de cette installation.",
    "Suchen Sie gespeicherte Teile, sortieren Sie nach Datum oder Rentabilität und wählen Sie zwei Kalkulationen zum Vergleich aus. Der Verlauf bleibt im lokalen Speicher dieser Installation.",
    "Cerca i pezzi salvati, ordina per data o redditività e seleziona due stime da confrontare. La cronologia è conservata nell’archiviazione locale di questa installazione.",
    "Wyszukuj zapisane elementy, sortuj według daty lub rentowności i wybierz dwie wyceny do porównania. Historia jest przechowywana lokalnie w tej instalacji.",
    "ابحث عن القطع المحفوظة، ورتبها حسب التاريخ أو الربحية، وحدد تقديرين لمقارنتهما. يُحفظ السجل في التخزين المحلي لهذا التثبيت.",
    "搜索已保存的零件，按日期或盈利能力排序，并选择两份估价进行比较。历史记录保存在此安装版本的本地存储中。"
    ],
  "Buscar por pieza, perfil, archivo o notas": [
    "Search by part, profile, file or notes",
    "Rechercher par pièce, profil, fichier ou notes",
    "Nach Teil, Profil, Datei oder Notizen suchen",
    "Cerca per pezzo, profilo, file o note",
    "Szukaj według elementu, profilu, pliku lub notatek",
    "ابحث حسب القطعة أو الملف الشخصي أو الملف أو الملاحظات",
    "按零件、配置文件、文件或备注搜索"
    ],
  "Ej. dragón, PETG, Snapmaker U1": [
    "E.g. dragon, PETG, Snapmaker U1",
    "Ex. : dragon, PETG, Snapmaker U1",
    "Z. B. Drache, PETG, Snapmaker U1",
    "Es. drago, PETG, Snapmaker U1",
    "Np. dragon, PETG, Snapmaker U1",
    "مثال: تنين، PETG، Snapmaker U1",
    "例如：龙、PETG、Snapmaker U1"
    ],
  "Ordenar historial": [
    "Sort history",
    "Trier l’historique",
    "Verlauf sortieren",
    "Ordina cronologia",
    "Sortuj historię",
    "ترتيب السجل",
    "排序历史记录"
    ],
  "Más recientes primero": [
    "Newest first",
    "Les plus récents en premier",
    "Neueste zuerst",
    "Prima i più recenti",
    "Najnowsze najpierw",
    "الأحدث أولًا",
    "最新优先"
    ],
  "Más antiguas primero": [
    "Oldest first",
    "Les plus anciens en premier",
    "Älteste zuerst",
    "Prima i più vecchi",
    "Najstarsze najpierw",
    "الأقدم أولًا",
    "最早优先"
    ],
  "Mayor beneficio por unidad": [
    "Highest profit per unit",
    "Bénéfice par unité le plus élevé",
    "Höchster Gewinn pro Einheit",
    "Profitto più alto per unità",
    "Największy zysk na jednostkę",
    "أعلى ربح لكل وحدة",
    "单件利润最高"
    ],
  "Menor coste por unidad": [
    "Lowest cost per unit",
    "Coût unitaire le plus bas",
    "Niedrigste Stückkosten",
    "Costo unitario più basso",
    "Najniższy koszt na jednostkę",
    "أقل تكلفة لكل وحدة",
    "单件成本最低"
    ],
  "Nombre de pieza A–Z": [
    "Part name A–Z",
    "Nom de pièce A–Z",
    "Teilename A–Z",
    "Nome pezzo A–Z",
    "Nazwa elementu A–Z",
    "اسم القطعة من أ إلى ي",
    "零件名称 A–Z"
    ],
  "Todavía no hay tasaciones guardadas.": [
    "There are no saved estimates yet.",
    "Aucune estimation n’a encore été enregistrée.",
    "Es wurden noch keine Kalkulationen gespeichert.",
    "Non ci sono ancora stime salvate.",
    "Nie zapisano jeszcze żadnych wycen.",
    "لا توجد تقديرات محفوظة حتى الآن.",
    "尚无已保存的估价。"
    ],
  "Comparar seleccionadas (2)": [
    "Compare selected (2)",
    "Comparer la sélection (2)",
    "Ausgewählte vergleichen (2)",
    "Confronta selezionate (2)",
    "Porównaj wybrane (2)",
    "مقارنة المحدد (2)",
    "比较所选项目（2）"
    ],
  "Limpiar selección": [
    "Clear selection",
    "Effacer la sélection",
    "Auswahl aufheben",
    "Cancella selezione",
    "Wyczyść wybór",
    "مسح التحديد",
    "清除选择"
    ],
  "Cliente, número de pedido o nota": [
    "Customer, order number or note",
    "Client, numéro de commande ou note",
    "Kunde, Auftragsnummer oder Notiz",
    "Cliente, numero ordine o nota",
    "Klient, numer zamówienia lub notatka",
    "العميل أو رقم الطلب أو ملاحظة",
    "客户、订单编号或备注"
    ],
  "Snapmaker Orca · integración local": [
    "Snapmaker Orca · local integration",
    "Snapmaker Orca · intégration locale",
    "Snapmaker Orca · lokale Integration",
    "Snapmaker Orca · integrazione locale",
    "Snapmaker Orca · integracja lokalna",
    "Snapmaker Orca · تكامل محلي",
    "Snapmaker Orca · 本地集成"
    ],
  "Se encontraron {count} impresoras. Selecciona la que quieres usar en el desplegable.": [
    "Found {count} printers. Select the one you want to use from the dropdown.",
    "{count} imprimantes trouvées. Sélectionnez celle que vous souhaitez utiliser dans la liste déroulante.",
    "{count} Drucker gefunden. Wählen Sie im Dropdown-Menü den gewünschten Drucker aus.",
    "Trovate {count} stampanti. Seleziona quella che vuoi usare dal menu a discesa.",
    "Znaleziono drukarki: {count}. Wybierz drukarkę z listy rozwijanej.",
    "تم العثور على {count} طابعة. اختر الطابعة التي تريد استخدامها من القائمة المنسدلة.",
    "找到 {count} 台打印机。请从下拉列表中选择要使用的打印机。"
    ],
  "Buscando todas las impresoras compatibles en la red local…": [
    "Searching for all compatible printers on the local network…",
    "Recherche de toutes les imprimantes compatibles sur le réseau local…",
    "Suche nach allen kompatiblen Druckern im lokalen Netzwerk…",
    "Ricerca di tutte le stampanti compatibili nella rete locale…",
    "Wyszukiwanie wszystkich zgodnych drukarek w sieci lokalnej…",
    "جارٍ البحث عن جميع الطابعات المتوافقة في الشبكة المحلية…",
    "正在本地网络中搜索所有兼容打印机……"
    ],
  "Error durante la búsqueda: {message}": [
    "Error during search: {message}",
    "Erreur pendant la recherche : {message}",
    "Fehler bei der Suche: {message}",
    "Errore durante la ricerca: {message}",
    "Błąd podczas wyszukiwania: {message}",
    "حدث خطأ أثناء البحث: {message}",
    "搜索过程中出错：{message}"
    ],
  "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {directory}.": [
    "Server and SQLite checked. Database: {database}. Backup folder: {directory}.",
    "Serveur et SQLite vérifiés. Base de données : {database}. Dossier des sauvegardes : {directory}.",
    "Server und SQLite überprüft. Datenbank: {database}. Sicherungsordner: {directory}.",
    "Server e SQLite verificati. Database: {database}. Cartella dei backup: {directory}.",
    "Serwer i SQLite sprawdzone. Baza danych: {database}. Folder kopii zapasowych: {directory}.",
    "تم التحقق من الخادم وSQLite. قاعدة البيانات: {database}. مجلد النسخ الاحتياطية: {directory}.",
    "服务器和 SQLite 已检查。数据库：{database}。备份文件夹：{directory}。"
    ],
  "Todavía no hay copias SQLite": [
    "No SQLite backups yet",
    "Aucune sauvegarde SQLite pour le moment",
    "Noch keine SQLite-Sicherungen vorhanden",
    "Ancora nessun backup SQLite",
    "Nie ma jeszcze kopii zapasowych SQLite",
    "لا توجد نسخ SQLite احتياطية حتى الآن",
    "尚无 SQLite 备份"
    ],
  "Configuración guardada en SQLite: copia automática cada {minutes} minuto(s), máximo {max} copias. La limpieza solo elimina copias antiguas que excedan el nuevo límite.": [
    "Configuration saved in SQLite: automatic backup every {minutes} minute(s), maximum {max} backups. Cleanup only removes older backups exceeding the new limit.",
    "Configuration enregistrée dans SQLite : sauvegarde automatique toutes les {minutes} minute(s), maximum {max} sauvegardes. Le nettoyage ne supprime que les anciennes sauvegardes dépassant la nouvelle limite.",
    "Konfiguration in SQLite gespeichert: automatische Sicherung alle {minutes} Minute(n), maximal {max} Sicherungen. Die Bereinigung entfernt nur ältere Sicherungen, die das neue Limit überschreiten.",
    "Configurazione salvata in SQLite: backup automatico ogni {minutes} minuto/i, massimo {max} backup. La pulizia elimina solo i backup più vecchi che superano il nuovo limite.",
    "Zapisano konfigurację w SQLite: automatyczna kopia co {minutes} min, maksymalnie {max} kopii. Czyszczenie usuwa tylko starsze kopie przekraczające nowy limit.",
    "تم حفظ الإعدادات في SQLite: نسخة احتياطية تلقائية كل {minutes} دقيقة، بحد أقصى {max} نسخة. لا تحذف عملية التنظيف إلا النسخ القديمة التي تتجاوز الحد الجديد.",
    "设置已保存到 SQLite：每 {minutes} 分钟自动备份一次，最多保留 {max} 个备份。清理操作只删除超过新上限的旧备份。"
    ],
  "¿Crear ahora una copia íntegra de la base SQLite? No se modificará la base de datos activa.": [
    "Create a full copy of the SQLite database now? The active database will not be modified.",
    "Créer maintenant une copie complète de la base SQLite ? La base de données active ne sera pas modifiée.",
    "Jetzt eine vollständige Kopie der SQLite-Datenbank erstellen? Die aktive Datenbank wird nicht verändert.",
    "Creare ora una copia completa del database SQLite? Il database attivo non verrà modificato.",
    "Czy teraz utworzyć pełną kopię bazy SQLite? Aktywna baza danych nie zostanie zmieniona.",
    "هل تريد إنشاء نسخة كاملة من قاعدة بيانات SQLite الآن؟ لن يتم تعديل قاعدة البيانات النشطة.",
    "现在创建完整的 SQLite 数据库备份吗？不会修改当前活动数据库。"
    ],
  "Creando y validando copia…": [
    "Creating and validating backup…",
    "Création et validation de la sauvegarde…",
    "Sicherung wird erstellt und überprüft…",
    "Creazione e verifica del backup…",
    "Tworzenie i sprawdzanie kopii…",
    "جارٍ إنشاء النسخة الاحتياطية والتحقق منها…",
    "正在创建并验证备份……"
    ],
  "Copia creada y validada correctamente: {name} ({size} MB).": [
    "Backup created and validated successfully: {name} ({size} MB).",
    "Sauvegarde créée et validée : {name} ({size} Mo).",
    "Sicherung erfolgreich erstellt und überprüft: {name} ({size} MB).",
    "Backup creato e verificato correttamente: {name} ({size} MB).",
    "Kopia została utworzona i sprawdzona: {name} ({size} MB).",
    "تم إنشاء النسخة الاحتياطية والتحقق منها بنجاح: {name} ({size} MB).",
    "备份已成功创建并验证：{name}（{size} MB）。"
    ],
  "No se pudo crear la copia: {message}": [
    "Could not create the backup: {message}",
    "Impossible de créer la sauvegarde : {message}",
    "Sicherung konnte nicht erstellt werden: {message}",
    "Impossibile creare il backup: {message}",
    "Nie udało się utworzyć kopii: {message}",
    "تعذر إنشاء النسخة الاحتياطية: {message}",
    "无法创建备份：{message}"
    ],
  "Selecciona primero una copia.": [
    "Select a backup first.",
    "Sélectionnez d’abord une sauvegarde.",
    "Wählen Sie zuerst eine Sicherung aus.",
    "Seleziona prima un backup.",
    "Najpierw wybierz kopię zapasową.",
    "اختر نسخة احتياطية أولًا.",
    "请先选择一个备份。"
    ],
  "Validando copia seleccionada…": [
    "Validating selected backup…",
    "Validation de la sauvegarde sélectionnée…",
    "Ausgewählte Sicherung wird überprüft…",
    "Verifica del backup selezionato…",
    "Sprawdzanie wybranej kopii…",
    "جارٍ التحقق من النسخة المحددة…",
    "正在验证所选备份……"
    ],
  "Copia válida.": [
    "Valid backup.",
    "Sauvegarde valide.",
    "Gültige Sicherung.",
    "Backup valido.",
    "Prawidłowa kopia zapasowa.",
    "النسخة الاحتياطية صالحة.",
    "备份有效。"
    ],
  "La copia no supera la comprobación.": [
    "The backup did not pass validation.",
    "La sauvegarde n’a pas passé la vérification.",
    "Die Sicherung hat die Prüfung nicht bestanden.",
    "Il backup non ha superato la verifica.",
    "Kopia nie przeszła weryfikacji.",
    "لم تجتز النسخة الاحتياطية الفحص.",
    "备份未通过检查。"
    ],
  "No se pudo guardar la configuración: {message}": [
    "Could not save configuration: {message}",
    "Impossible d’enregistrer la configuration : {message}",
    "Konfiguration konnte nicht gespeichert werden: {message}",
    "Impossibile salvare la configurazione: {message}",
    "Nie udało się zapisać konfiguracji: {message}",
    "تعذر حفظ الإعدادات: {message}",
    "无法保存设置：{message}"
    ],
  "No se pudo guardar el gasto: falta stock de filamento o no se encuentra la bobina correspondiente.": [
    "Cannot save the expense: filament stock is insufficient or the matching spool was not found.",
    "Impossible d’enregistrer la dépense : stock de filament insuffisant ou bobine correspondante introuvable.",
    "Ausgabe kann nicht gespeichert werden: Filamentbestand unzureichend oder passende Spule nicht gefunden.",
    "Impossibile salvare la spesa: filamento insufficiente o bobina corrispondente non trovata.",
    "Nie można zapisać wydatku: za mało filamentu lub nie znaleziono odpowiedniej szpuli.",
    "تعذر حفظ المصروف: مخزون الخيوط غير كافٍ أو لم يتم العثور على بكرة الخيط المناسبة.",
    "无法保存支出：耗材库存不足，或找不到对应的线轴。"
    ],
  "El precio de venta sin impuestos está por debajo del coste.": [
    "The sale price excluding tax is below cost.",
    "Le prix de vente hors taxes est inférieur au coût.",
    "Der Verkaufspreis ohne Steuern liegt unter den Kosten.",
    "Il prezzo di vendita al netto delle imposte è inferiore al costo.",
    "Cena sprzedaży bez podatku jest niższa od kosztu.",
    "سعر البيع دون الضرائب أقل من التكلفة.",
    "不含税售价低于成本。"
    ],
  "No se puede alcanzar el recargo objetivo con esta combinación de comisión e impuestos. Reduce la comisión o revisa el impuesto configurado.": [
    "The target markup cannot be reached with this combination of commission and tax. Reduce the commission or review the configured tax.",
    "La majoration cible est impossible à atteindre avec cette combinaison de commission et de taxe. Réduisez la commission ou vérifiez la taxe configurée.",
    "Der angestrebte Aufschlag ist mit dieser Kombination aus Provision und Steuer nicht erreichbar. Reduzieren Sie die Provision oder prüfen Sie die Steuer.",
    "Non è possibile raggiungere il ricarico obiettivo con questa combinazione di commissione e imposte. Riduci la commissione o verifica l’imposta configurata.",
    "Nie można osiągnąć docelowej marży przy tej kombinacji prowizji i podatku. Zmniejsz prowizję lub sprawdź ustawiony podatek.",
    "لا يمكن بلوغ هامش الربح المستهدف مع هذه المجموعة من العمولة والضرائب. خفّض العمولة أو راجع الضريبة المحددة.",
    "在当前佣金和税费组合下无法达到目标加价。请降低佣金或检查税率设置。"
    ],
  "Introduce un precio de venta superior a 0 {currency} para evaluar la rentabilidad.": [
    "Enter a sale price greater than 0 {currency} to evaluate profitability.",
    "Saisissez un prix de vente supérieur à 0 {currency} pour évaluer la rentabilité.",
    "Geben Sie einen Verkaufspreis über 0 {currency} ein, um die Rentabilität zu bewerten.",
    "Inserisci un prezzo di vendita superiore a 0 {currency} per valutare la redditività.",
    "Wprowadź cenę sprzedaży większą niż 0 {currency}, aby ocenić rentowność.",
    "أدخل سعر بيع أكبر من 0 {currency} لتقييم الربحية.",
    "请输入大于 0 {currency} 的售价以评估盈利能力。"
    ],
  "Vas a precio de coste: no hay beneficio por unidad después de la comisión.": [
    "You are selling at cost: there is no profit per unit after commission.",
    "Vous vendez au prix de revient : il ne reste aucun bénéfice par unité après commission.",
    "Sie verkaufen zum Selbstkostenpreis: Nach Abzug der Provision bleibt kein Gewinn pro Einheit.",
    "Stai vendendo al costo: dopo la commissione non rimane profitto per unità.",
    "Sprzedajesz po koszcie: po odliczeniu prowizji nie pozostaje zysk na sztukę.",
    "أنت عند سعر التكلفة: لا يوجد ربح لكل وحدة بعد احتساب العمولة.",
    "当前售价仅达到成本价：扣除佣金后没有单件利润。"
    ],
  "Print Cost & Profit: otra ventana ha cambiado este dato. Para evitar perder información, este cambio no se ha sobrescrito. Copia lo que estabas editando si es necesario y recarga esta ventana antes de continuar.": [
    "Print Cost & Profit: another window changed this value. To prevent data loss, this change was not overwritten. Copy your edits if needed and reload this window before continuing.",
    "Print Cost & Profit : une autre fenêtre a modifié cette valeur. Pour éviter toute perte de données, cette modification n’a pas été écrasée. Copiez vos modifications si nécessaire et rechargez cette fenêtre avant de continuer.",
    "Print Cost & Profit: Ein anderes Fenster hat diesen Wert geändert. Um Datenverlust zu vermeiden, wurde diese Änderung nicht überschrieben. Kopieren Sie Ihre Eingaben bei Bedarf und laden Sie dieses Fenster neu.",
    "Print Cost & Profit: un’altra finestra ha modificato questo valore. Per evitare la perdita di dati, la modifica non è stata sovrascritta. Copia le modifiche se necessario e ricarica questa finestra prima di continuare.",
    "Print Cost & Profit: inne okno zmieniło tę wartość. Aby uniknąć utraty danych, zmiana nie została nadpisana. W razie potrzeby skopiuj edytowaną treść i odśwież to okno przed kontynuowaniem.",
    "Print Cost & Profit: قامت نافذة أخرى بتغيير هذه البيانات. لتجنب فقدان المعلومات، لم يتم استبدال التغيير. انسخ ما كنت تعدّله إذا لزم الأمر، ثم أعد تحميل هذه النافذة قبل المتابعة.",
    "Print Cost & Profit：另一个窗口已更改此数据。为避免丢失信息，本次更改未覆盖现有数据。如有需要，请先复制正在编辑的内容，然后刷新此窗口再继续。"
    ],
  "No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. {message}": [
    "External storage could not be activated. Do not continue editing in this window. {message}",
    "Impossible d’activer le stockage externe. Ne continuez pas à modifier les données dans cette fenêtre. {message}",
    "Der externe Speicher konnte nicht aktiviert werden. Bearbeiten Sie in diesem Fenster nicht weiter. {message}",
    "Impossibile attivare l’archiviazione esterna. Non continuare a modificare i dati in questa finestra. {message}",
    "Nie udało się aktywować pamięci zewnętrznej. Nie kontynuuj edycji w tym oknie. {message}",
    "تعذر تفعيل التخزين الخارجي. لا تواصل التحرير في هذه النافذة. {message}",
    "无法启用外部存储。请勿在此窗口继续编辑。{message}"
    ],
  "ATENCIÓN: pierdes {unit} por unidad ({total} en el pedido), incluida la comisión configurada. El precio de venta sin impuestos está por debajo del coste.": [
    "WARNING: you lose {unit} per unit ({total} for the order), including the configured commission. The sale price before tax is below cost.",
    "ATTENTION : vous perdez {unit} par unité ({total} pour la commande), commission configurée comprise. Le prix de vente hors taxes est inférieur au coût.",
    "ACHTUNG: Sie verlieren {unit} pro Einheit ({total} für den Auftrag), einschließlich der eingestellten Provision. Der Verkaufspreis ohne Steuern liegt unter den Kosten.",
    "ATTENZIONE: perdi {unit} per unità ({total} per l’ordine), inclusa la commissione configurata. Il prezzo di vendita al netto delle imposte è inferiore al costo.",
    "UWAGA: strata wynosi {unit} na sztukę ({total} dla zamówienia), łącznie z ustawioną prowizją. Cena sprzedaży bez podatku jest niższa od kosztu.",
    "تنبيه: ستخسر {unit} لكل وحدة ({total} في الطلب)، بما في ذلك العمولة المحددة. سعر البيع دون الضرائب أقل من التكلفة.",
    "注意：每件将亏损 {unit}（整个订单为 {total}），其中已计入所设置的佣金。不含税售价低于成本。"
    ],
  "Rentabilidad positiva: {unit} por unidad y {total} en el pedido, antes de impuestos. El precio alcanza el objetivo configurado.": [
    "Positive profitability: {unit} per unit and {total} for the order, before tax. The price meets the configured target.",
    "Rentabilité positive : {unit} par unité et {total} pour la commande, avant impôts. Le prix atteint l’objectif configuré.",
    "Positive Rentabilität: {unit} pro Stück und {total} für den Auftrag, vor Steuern. Der Preis erreicht das eingestellte Ziel.",
    "Redditività positiva: {unit} per unità e {total} per l’ordine, prima delle imposte. Il prezzo raggiunge l’obiettivo configurato.",
    "Dodatnia rentowność: {unit} na sztukę i {total} dla zamówienia, przed podatkiem. Cena osiąga skonfigurowany cel.",
    "ربحية إيجابية: {unit} لكل وحدة و{total} للطلب قبل الضرائب. السعر يحقق الهدف المحدد.",
    "盈利为正：每件 {unit}，订单合计 {total}（税前）。售价已达到设定目标。"
    ],
  "No se han encontrado impresoras": [
    "No printers found",
    "Aucune imprimante trouvée",
    "Keine Drucker gefunden",
    "Nessuna stampante trovata",
    "Nie znaleziono drukarek",
    "لم يتم العثور على طابعات",
    "未找到打印机"
    ],
  "Selecciona una impresora…": [
    "Select a printer…",
    "Sélectionnez une imprimante…",
    "Drucker auswählen…",
    "Seleziona una stampante…",
    "Wybierz drukarkę…",
    "اختر طابعة…",
    "请选择打印机……"
    ],
  "Impresora configurada": [
    "Configured printer",
    "Imprimante configurée",
    "Konfigurierter Drucker",
    "Stampante configurata",
    "Skonfigurowana drukarka",
    "تم إعداد الطابعة",
    "打印机已配置"
    ],
  "No hay impresoras guardadas todavía. Pulsa «Buscar automáticamente» para descubrir impresoras de la red.": [
    "No printers have been saved yet. Click “Search automatically” to discover printers on the network.",
    "Aucune imprimante n’est encore enregistrée. Cliquez sur « Rechercher automatiquement » pour détecter les imprimantes du réseau.",
    "Es wurden noch keine Drucker gespeichert. Klicken Sie auf „Automatisch suchen“, um Drucker im Netzwerk zu finden.",
    "Non è ancora stata salvata alcuna stampante. Fai clic su «Cerca automaticamente» per trovare le stampanti in rete.",
    "Nie zapisano jeszcze żadnych drukarek. Kliknij „Szukaj automatycznie”, aby wykryć drukarki w sieci.",
    "لا توجد طابعات محفوظة حتى الآن. اضغط على «البحث التلقائي» لاكتشاف الطابعات على الشبكة.",
    "尚无已保存的打印机。点击“自动搜索”以发现网络中的打印机。"
    ],
  "La búsqueda no ha podido completarse: {message}. Puedes introducir la IP manualmente.": [
    "The search could not be completed: {message}. You can enter the IP address manually.",
    "La recherche n’a pas pu aboutir : {message}. Vous pouvez saisir l’adresse IP manuellement.",
    "Die Suche konnte nicht abgeschlossen werden: {message}. Sie können die IP-Adresse manuell eingeben.",
    "Impossibile completare la ricerca: {message}. Puoi inserire manualmente l’indirizzo IP.",
    "Nie udało się zakończyć wyszukiwania: {message}. Możesz ręcznie wpisać adres IP.",
    "تعذر إكمال البحث: {message}. يمكنك إدخال عنوان IP يدويًا.",
    "搜索未能完成：{message}。你可以手动输入 IP 地址。"
    ],
  "La búsqueda agotó el tiempo de espera. Introduce la IP de la impresora manualmente.": [
    "The search timed out. Enter the printer IP address manually.",
    "La recherche a expiré. Saisissez manuellement l’adresse IP de l’imprimante.",
    "Zeitüberschreitung bei der Suche. Geben Sie die IP-Adresse des Druckers manuell ein.",
    "La ricerca è scaduta. Inserisci manualmente l’IP della stampante.",
    "Przekroczono limit czasu wyszukiwania. Wpisz ręcznie adres IP drukarki.",
    "انتهت مهلة البحث. أدخل عنوان IP الخاص بالطابعة يدويًا.",
    "搜索超时。请手动输入打印机的 IP 地址。"
    ],
  "No se pudo completar la búsqueda: {message}. Introduce la IP de la impresora manualmente.": [
    "The search could not be completed: {message}. Enter the printer IP address manually.",
    "La recherche n’a pas pu aboutir : {message}. Saisissez manuellement l’adresse IP de l’imprimante.",
    "Die Suche konnte nicht abgeschlossen werden: {message}. Geben Sie die Drucker-IP manuell ein.",
    "Impossibile completare la ricerca: {message}. Inserisci manualmente l’IP della stampante.",
    "Nie udało się zakończyć wyszukiwania: {message}. Wpisz ręcznie adres IP drukarki.",
    "تعذر إكمال البحث: {message}. أدخل عنوان IP الخاص بالطابعة يدويًا.",
    "搜索无法完成：{message}。请手动输入打印机的 IP 地址。"
    ],
  "IP {ip} guardada en esta aplicación. Comprobando ahora la impresora…": [
    "IP {ip} saved in this application. Checking the printer now…",
    "Adresse IP {ip} enregistrée dans cette application. Vérification de l’imprimante…",
    "IP {ip} in dieser Anwendung gespeichert. Drucker wird jetzt überprüft…",
    "IP {ip} salvato nell’applicazione. Verifica della stampante in corso…",
    "Adres IP {ip} zapisano w aplikacji. Trwa sprawdzanie drukarki…",
    "تم حفظ عنوان IP ‏{ip} في التطبيق. جارٍ التحقق من الطابعة الآن…",
    "IP {ip} 已保存在此应用中。正在检查打印机……"
    ],
  "No se pudo consultar la impresora (tiempo de espera agotado). Comprueba la IP y que el puente esté iniciado.": [
    "Could not query the printer (request timed out). Check the IP address and make sure the bridge is running.",
    "Impossible d’interroger l’imprimante (délai d’attente dépassé). Vérifiez l’adresse IP et assurez-vous que le pont est démarré.",
    "Druckerabfrage fehlgeschlagen (Zeitüberschreitung). Prüfen Sie die IP-Adresse und ob die Bridge läuft.",
    "Impossibile interrogare la stampante (tempo scaduto). Controlla l’indirizzo IP e verifica che il bridge sia avviato.",
    "Nie udało się odpytać drukarki (przekroczono limit czasu). Sprawdź adres IP i upewnij się, że mostek jest uruchomiony.",
    "تعذر الاستعلام عن الطابعة (انتهت المهلة). تحقق من عنوان IP ومن تشغيل الجسر.",
    "无法查询打印机（请求超时）。请检查 IP 地址以及桥接服务是否已启动。"
    ],
  "Se ha registrado el gasto propio y se ha descontado este filamento del inventario.": [
    "The own expense was recorded and this filament was deducted from inventory.",
    "La dépense personnelle a été enregistrée et ce filament a été déduit du stock.",
    "Die eigene Ausgabe wurde erfasst und dieses Filament wurde vom Lagerbestand abgezogen.",
    "La spesa propria è stata registrata e questo filamento è stato sottratto dal magazzino.",
    "Zarejestrowano wydatek własny i odjęto ten filament ze stanu magazynowego.",
    "تم تسجيل المصروف الشخصي وخصم هذا الخيط من المخزون.",
    "个人支出已登记，并已从库存中扣除此耗材。"
    ],
  "No se ha descontado filamento.": [
    "No filament was deducted.",
    "Aucun filament n’a été déduit.",
    "Es wurde kein Filament abgezogen.",
    "Non è stato sottratto filamento.",
    "Nie odjęto filamentu.",
    "لم يتم خصم أي خيط.",
    "未扣减耗材。"
    ],
  "Filamento devuelto al inventario": [
    "Filament returned to inventory",
    "Filament réintégré au stock",
    "Filament wurde wieder dem Lagerbestand hinzugefügt",
    "Filamento restituito all’inventario",
    "Filament zwrócono do magazynu.",
    "تمت إعادة الخيط إلى المخزون",
    "耗材已退回库存"
    ],
  "Filamento devuelto al inventario.": [
    "Filament returned to inventory.",
    "Filament réintégré au stock.",
    "Filament wurde dem Lagerbestand wieder hinzugefügt.",
    "Filamento restituito all’inventario.",
    "Filament zwrócono do magazynu.",
    "تمت إعادة الخيط إلى المخزون.",
    "耗材已退回库存。"
    ],
  "No hay impresoras detectadas en Opciones": [
    "No printers detected in Settings",
    "Aucune imprimante détectée dans les Options",
    "Keine Drucker in den Einstellungen erkannt",
    "Nessuna stampante rilevata in Opzioni",
    "Nie wykryto drukarek w ustawieniach",
    "لم يتم اكتشاف طابعات في الإعدادات",
    "选项中未检测到打印机"
    ],
  "Este documento no contiene el desglose de filamentos necesario para descontar el inventario. Vuelve a guardar la tasación o presupuesto con una versión que guarde ese detalle.": [
    "This document does not contain the filament breakdown required to deduct inventory. Save the estimate or quote again using a version that stores these details.",
    "Ce document ne contient pas le détail des filaments nécessaire pour déduire le stock. Enregistrez à nouveau l’estimation ou le devis avec une version qui conserve ces détails.",
    "Dieses Dokument enthält nicht die für den Lagerabzug erforderliche Filamentaufschlüsselung. Speichern Sie die Kalkulation oder das Angebot erneut mit einer Version, die diese Details speichert.",
    "Questo documento non contiene il dettaglio dei filamenti necessario per scaricare l’inventario. Salva nuovamente la stima o il preventivo con una versione che memorizzi questi dettagli.",
    "Ten dokument nie zawiera zestawienia filamentów wymaganego do odjęcia zapasów. Zapisz ponownie wycenę lub ofertę w wersji, która zapisuje te szczegóły.",
    "لا يحتوي هذا المستند على تفاصيل الخيوط اللازمة لخصم المخزون. أعد حفظ التقدير أو عرض السعر باستخدام إصدار يحفظ هذه التفاصيل.",
    "此文档不包含扣减库存所需的耗材明细。请使用支持保存该明细的版本重新保存估价或报价单。"
    ],
  "No se encontró una bobina compatible en inventario:": [
    "No compatible spool was found in inventory:",
    "Aucune bobine compatible n’a été trouvée dans le stock :",
    "Im Lager wurde keine passende Spule gefunden:",
    "Non è stata trovata una bobina compatibile nell’inventario:",
    "Nie znaleziono zgodnej szpuli w magazynie:",
    "لم يتم العثور على بكرة متوافقة في المخزون:",
    "库存中未找到兼容线轴："
    ],
  "No se pudo leer el G-code activo de la U1. No se aplicará el descuento.": [
    "Could not read the active U1 G-code. No stock deduction will be applied.",
    "Impossible de lire le G-code actif de l’U1. Aucune déduction de stock ne sera appliquée.",
    "Der aktive U1-G-Code konnte nicht gelesen werden. Es wird kein Bestand abgezogen.",
    "Impossibile leggere il G-code attivo della U1. Non verrà applicata alcuna detrazione.",
    "Nie udało się odczytać aktywnego G-code U1. Zapas nie zostanie pomniejszony.",
    "تعذرت قراءة ملف G-code النشط في U1. لن يتم تطبيق الخصم.",
    "无法读取 U1 当前活动的 G-code。不会执行耗材扣减。"
    ],
  "Hay filamentos sin bobina asignada y no se descontarán.": [
    "Some filaments have no assigned spool and will not be deducted.",
    "Certains filaments n’ont pas de bobine attribuée et ne seront pas déduits.",
    "Einigen Filamenten ist keine Spule zugeordnet; sie werden nicht abgezogen.",
    "Alcuni filamenti non hanno una bobina assegnata e non verranno scaricati.",
    "Niektórym filamentom nie przypisano szpuli i nie zostaną odjęte od stanu.",
    "توجد خيوط غير مرتبطة ببكرة، ولن يتم خصمها.",
    "有耗材尚未分配线轴，因此不会扣减。"
    ],
  "La impresión terminó, pero no se pudo guardar el inventario. No cierres la aplicación; revisa almacenamiento local.": [
    "The print finished, but inventory could not be saved. Do not close the application; check local storage.",
    "L’impression est terminée, mais le stock n’a pas pu être enregistré. Ne fermez pas l’application ; vérifiez le stockage local.",
    "Der Druck ist beendet, aber der Lagerbestand konnte nicht gespeichert werden. Schließen Sie die Anwendung nicht und prüfen Sie den lokalen Speicher.",
    "La stampa è terminata, ma non è stato possibile salvare l’inventario. Non chiudere l’applicazione; controlla l’archiviazione locale.",
    "Drukowanie zakończono, ale nie udało się zapisać stanu magazynowego. Nie zamykaj aplikacji; sprawdź pamięć lokalną.",
    "انتهت الطباعة، لكن تعذر حفظ المخزون. لا تغلق التطبيق؛ تحقق من التخزين المحلي.",
    "打印已完成，但无法保存库存。请勿关闭应用；请检查本地存储。"
    ],
  "Impresión cancelada: coste parcial estimado guardado, sin venta ni beneficio.": [
    "Print cancelled: estimated partial cost saved, with no sale or profit.",
    "Impression annulée : coût partiel estimé enregistré, sans vente ni bénéfice.",
    "Druck abgebrochen: geschätzte Teilkosten gespeichert, ohne Verkauf und Gewinn.",
    "Stampa annullata: costo parziale stimato salvato, senza vendita né profitto.",
    "Drukowanie anulowano: zapisano szacunkowy koszt częściowy, bez sprzedaży i zysku.",
    "تم إلغاء الطباعة: حُفظت التكلفة الجزئية المقدّرة دون تسجيل مبيعات أو أرباح.",
    "打印已取消：已保存预计部分成本，不记录销售额或利润。"
    ],
  "Coste parcial estimado hasta la cancelación; sin venta ni beneficio.": [
    "Estimated partial cost up to cancellation; no sale or profit.",
    "Coût partiel estimé jusqu’à l’annulation ; aucune vente ni bénéfice.",
    "Geschätzte Teilkosten bis zum Abbruch; kein Verkauf und kein Gewinn.",
    "Costo parziale stimato fino all’annullamento; nessuna vendita né profitto.",
    "Szacunkowy koszt częściowy do momentu anulowania; bez sprzedaży i zysku.",
    "التكلفة الجزئية المقدّرة حتى الإلغاء؛ دون تسجيل مبيعات أو أرباح.",
    "截至取消时的预计部分成本；不记录销售额或利润。"
    ],
  "Revisa el coste de fabricación y confirma el importe total que cobrarás al cliente.": [
    "Review the manufacturing cost and confirm the total amount you will charge the customer.",
    "Vérifiez le coût de fabrication et confirmez le montant total facturé au client.",
    "Prüfen Sie die Herstellungskosten und bestätigen Sie den Gesamtbetrag, den Sie dem Kunden berechnen.",
    "Controlla il costo di produzione e conferma l’importo totale da addebitare al cliente.",
    "Sprawdź koszt wytworzenia i potwierdź łączną kwotę do zapłaty przez klienta.",
    "راجع تكلفة التصنيع وأكد المبلغ الإجمالي الذي ستتقاضاه من العميل.",
    "请检查制造成本，并确认向客户收取的总金额。"
    ],
  "Revisa el desglose y confirma el coste total de fabricación de este trabajo.": [
    "Review the breakdown and confirm the total manufacturing cost for this job.",
    "Vérifiez le détail et confirmez le coût total de fabrication de ce travail.",
    "Prüfen Sie die Aufschlüsselung und bestätigen Sie die gesamten Herstellungskosten dieses Auftrags.",
    "Controlla il dettaglio e conferma il costo totale di produzione di questo lavoro.",
    "Sprawdź zestawienie i potwierdź całkowity koszt wytworzenia tego zlecenia.",
    "راجع التفاصيل وأكد إجمالي تكلفة تصنيع هذا العمل.",
    "请检查明细，并确认此任务的制造总成本。"
    ],
  "El navegador ha bloqueado el almacenamiento local. Abre la aplicación desde la misma carpeta y permite el almacenamiento.": [
    "The browser blocked local storage. Open the application from the same folder and allow storage.",
    "Le navigateur a bloqué le stockage local. Ouvrez l’application depuis le même dossier et autorisez le stockage.",
    "Der Browser hat den lokalen Speicher blockiert. Öffnen Sie die Anwendung aus demselben Ordner und erlauben Sie den Speicherzugriff.",
    "Il browser ha bloccato l’archiviazione locale. Apri l’applicazione dalla stessa cartella e consenti l’archiviazione.",
    "Przeglądarka zablokowała pamięć lokalną. Otwórz aplikację z tego samego folderu i zezwól na przechowywanie danych.",
    "حظر المتصفح التخزين المحلي. افتح التطبيق من المجلد نفسه واسمح باستخدام التخزين.",
    "浏览器已阻止本地存储。请从同一文件夹打开应用，并允许使用存储功能。"
    ],
  "No se ha podido iniciar el almacenamiento del PC.": [
    "Could not start PC storage.",
    "Impossible de démarrer le stockage du PC.",
    "Der PC-Speicher konnte nicht gestartet werden.",
    "Impossibile avviare l’archiviazione del PC.",
    "Nie udało się uruchomić pamięci komputera.",
    "تعذر بدء التخزين على الكمبيوتر.",
    "无法启动电脑本地存储。"
    ],
  "Conectando con…": [
    "Connecting to…",
    "Connexion à…",
    "Verbindung wird hergestellt mit…",
    "Connessione a…",
    "Łączenie z…",
    "جارٍ الاتصال بـ…",
    "正在连接……"
    ],
  "No se han encontrado impresoras.": [
    "No printers were found.",
    "Aucune imprimante trouvée.",
    "Keine Drucker gefunden.",
    "Non sono state trovate stampanti.",
    "Nie znaleziono drukarek.",
    "لم يتم العثور على طابعات.",
    "未找到打印机。"
    ],
  "Buscando la impresora en la red local": [
    "Searching for the printer on the local network",
    "Recherche de l’imprimante sur le réseau local",
    "Suche nach dem Drucker im lokalen Netzwerk",
    "Ricerca della stampante nella rete locale",
    "Wyszukiwanie drukarki w sieci lokalnej",
    "جارٍ البحث عن الطابعة في الشبكة المحلية",
    "正在本地网络中搜索打印机"
    ],
  "Cliente eliminado de la agenda. Los documentos históricos se conservan.": [
    "Client removed from the address book. Historical documents are preserved.",
    "Client supprimé du répertoire. Les documents historiques sont conservés.",
    "Kunde aus dem Adressbuch gelöscht. Historische Dokumente bleiben erhalten.",
    "Cliente eliminato dalla rubrica. I documenti storici vengono conservati.",
    "Klient został usunięty z książki adresowej. Dokumenty historyczne są zachowane.",
    "تم حذف العميل من دفتر العناوين. ستظل المستندات السابقة محفوظة.",
    "客户已从名录中删除。历史单据将保留。"
    ],
  "Selecciona un cliente guardado o pulsa «Crear cliente en Clientes» para dar de alta uno nuevo. Después guarda el presupuesto.": [
    "Select a saved customer or click “Create customer in Customers” to add a new one. Then save the quote.",
    "Sélectionnez un client enregistré ou cliquez sur « Créer un client dans Clients » pour en ajouter un. Enregistrez ensuite le devis.",
    "Wählen Sie einen gespeicherten Kunden aus oder klicken Sie auf „Kunden unter Kunden erstellen“, um einen neuen anzulegen. Speichern Sie danach das Angebot.",
    "Seleziona un cliente salvato oppure fai clic su “Crea cliente in Clienti” per aggiungerne uno nuovo. Poi salva il preventivo.",
    "Wybierz zapisanego klienta lub kliknij „Utwórz klienta” w zakładce Klienci, aby dodać nowego. Następnie zapisz ofertę.",
    "اختر عميلًا محفوظًا أو اضغط على «إنشاء عميل في العملاء» لإضافة عميل جديد. ثم احفظ عرض السعر.",
    "选择已保存的客户，或点击“在客户中创建客户”添加新客户。然后保存报价单。"
    ],
  "Crea el cliente con el formulario central. Al guardarlo volverás al pedido.": [
    "Create the customer using the main form. After saving, you will return to the order.",
    "Créez le client avec le formulaire principal. Après l’enregistrement, vous reviendrez à la commande.",
    "Erstellen Sie den Kunden über das Hauptformular. Nach dem Speichern kehren Sie zur Bestellung zurück.",
    "Crea il cliente con il modulo principale. Dopo il salvataggio tornerai all’ordine.",
    "Utwórz klienta za pomocą głównego formularza. Po zapisaniu wrócisz do zamówienia.",
    "أنشئ العميل باستخدام النموذج المركزي. بعد حفظه ستعود إلى الطلب.",
    "请使用中央表单创建客户。保存后将返回订单。"
    ],
  "No se ha guardado: el número está duplicado.": [
    "Not saved: this number is already in use.",
    "Non enregistré : ce numéro existe déjà.",
    "Nicht gespeichert: Diese Nummer ist bereits vergeben.",
    "Non salvato: questo numero è già utilizzato.",
    "Nie zapisano: ten numer już istnieje.",
    "لم يتم الحفظ: الرقم مكرر.",
    "未保存：编号重复。"
    ],
  "Creación de factura cancelada.": [
    "Invoice creation cancelled.",
    "Création de facture annulée.",
    "Rechnungserstellung abgebrochen.",
    "Creazione della fattura annullata.",
    "Tworzenie faktury anulowano.",
    "تم إلغاء إنشاء الفاتورة.",
    "已取消创建发票。"
    ],
  "No hay presupuestos guardados. Se creará una factura con los datos actuales de la calculadora.": [
    "No saved quotes are available. An invoice will be created using the calculator’s current data.",
    "Aucun devis enregistré. Une facture sera créée à partir des données actuelles du calculateur.",
    "Keine gespeicherten Angebote vorhanden. Die Rechnung wird mit den aktuellen Daten des Rechners erstellt.",
    "Non ci sono preventivi salvati. Verrà creata una fattura con i dati attuali del calcolatore.",
    "Brak zapisanych ofert. Faktura zostanie utworzona na podstawie bieżących danych kalkulatora.",
    "لا توجد عروض أسعار محفوظة. سيتم إنشاء فاتورة باستخدام البيانات الحالية للحاسبة.",
    "没有已保存的报价单。将使用计算器中的当前数据创建发票。"
    ],
  "Hay {count} presupuestos guardados. Ve a Presupuestos, pulsa Cargar en el que quieras facturar y vuelve a Facturas.": [
    "{count} quotes are saved. Go to Quotes, click Load on the one you want to invoice, then return to Invoices.",
    "{count} devis sont enregistrés. Ouvrez Devis, cliquez sur Charger pour celui à facturer, puis revenez à Factures.",
    "{count} Angebote sind gespeichert. Öffnen Sie Angebote, klicken Sie beim gewünschten Angebot auf Laden und wechseln Sie dann zurück zu Rechnungen.",
    "Sono salvati {count} preventivi. Vai a Preventivi, fai clic su Carica su quello da fatturare e poi torna a Fatture.",
    "Zapisano {count} ofert. Otwórz Oferty, kliknij Wczytaj przy wybranej ofercie, a następnie wróć do Faktur.",
    "يوجد {count} عرض سعر محفوظ. انتقل إلى عروض الأسعار، واضغط على تحميل للعرض الذي تريد إصدار فاتورة له، ثم عد إلى الفواتير.",
    "已有 {count} 份报价单。请前往“报价单”，点击要开票的报价单上的“加载”，然后返回“发票”。"
    ],
  "Error al preparar la factura: {message}": [
    "Error preparing the invoice: {message}",
    "Erreur lors de la préparation de la facture : {message}",
    "Fehler beim Vorbereiten der Rechnung: {message}",
    "Errore durante la preparazione della fattura: {message}",
    "Błąd podczas przygotowywania faktury: {message}",
    "حدث خطأ أثناء إعداد الفاتورة: {message}",
    "准备发票时出错：{message}"
    ],
  "¿Eliminar el color personalizado {color} de la paleta?": [
    "Delete the custom color {color} from the palette?",
    "Supprimer la couleur personnalisée {color} de la palette ?",
    "Die benutzerdefinierte Farbe {color} aus der Palette löschen?",
    "Eliminare il colore personalizzato {color} dalla tavolozza?",
    "Usunąć niestandardowy kolor {color} z palety?",
    "هل تريد حذف اللون المخصص {color} من لوحة الألوان؟",
    "要从调色板中删除自定义颜色 {color} 吗？"
    ],
  "Color personalizado eliminado de la paleta. Las bobinas existentes no se modifican.": [
    "Custom color removed from the palette. Existing spools are unchanged.",
    "Couleur personnalisée supprimée de la palette. Les bobines existantes ne sont pas modifiées.",
    "Benutzerdefinierte Farbe aus der Palette entfernt. Vorhandene Spulen bleiben unverändert.",
    "Colore personalizzato rimosso dalla tavolozza. Le bobine esistenti non vengono modificate.",
    "Usunięto niestandardowy kolor z palety. Istniejące szpule nie zostały zmienione.",
    "تم حذف اللون المخصص من لوحة الألوان. لن تتغير بكرات الخيوط الموجودة.",
    "自定义颜色已从调色板中删除。现有线轴不会受到影响。"
    ],
  "Bobina actualizada.": [
    "Spool updated.",
    "Bobine mise à jour.",
    "Spule aktualisiert.",
    "Bobina aggiornata.",
    "Zaktualizowano szpulę.",
    "تم تحديث بكرة الخيط.",
    "线轴已更新。"
    ],
  "Bobina añadida.": [
    "Spool added.",
    "Bobine ajoutée.",
    "Spule hinzugefügt.",
    "Bobina aggiunta.",
    "Dodano szpulę.",
    "تمت إضافة بكرة الخيط.",
    "已添加线轴。"
    ],
  "Eliminar color personalizado {color} de la paleta?": [
    "Remove custom color {color} from the palette?",
    "Supprimer la couleur personnalisée {color} de la palette ?",
    "Benutzerdefinierte Farbe {color} aus der Palette entfernen?",
    "Eliminare il colore personalizzato {color} dalla tavolozza?",
    "Usunąć niestandardowy kolor {color} z palety?",
    "هل تريد حذف اللون المخصص {color} من لوحة الألوان؟",
    "要从调色板中删除自定义颜色 {color} 吗？"
    ],
  "sin precio": [
    "no price",
    "sans prix",
    "ohne Preis",
    "senza prezzo",
    "bez ceny",
    "بدون سعر",
    "无价格"
    ],
  "por hora": [
    "per hour",
    "par heure",
    "pro Stunde",
    "all’ora",
    "na godzinę",
    "لكل ساعة",
    "每小时"
    ],
  "Guardar cambios": [
    "Save changes",
    "Enregistrer les modifications",
    "Änderungen speichern",
    "Salva modifiche",
    "Zapisz zmiany",
    "حفظ التغييرات",
    "保存更改"
    ],
  "Guardar perfil de impresora": [
    "Save printer profile",
    "Enregistrer le profil d’imprimante",
    "Druckerprofil speichern",
    "Salva profilo stampante",
    "Zapisz profil drukarki",
    "حفظ ملف تعريف الطابعة",
    "保存打印机配置文件"
    ],
  "Escribe un nombre para la impresora antes de guardar.": [
    "Enter a printer name before saving.",
    "Saisissez un nom d’imprimante avant d’enregistrer.",
    "Geben Sie vor dem Speichern einen Druckernamen ein.",
    "Inserisci un nome per la stampante prima di salvare.",
    "Przed zapisaniem wpisz nazwę drukarki.",
    "اكتب اسمًا للطابعة قبل الحفظ.",
    "保存前请输入打印机名称。"
    ],
  "Almacenamiento bloqueado": [
    "Storage is blocked",
    "Stockage bloqué",
    "Speicher ist gesperrt",
    "Archiviazione bloccata",
    "Pamięć jest zablokowana",
    "التخزين محظور",
    "存储已被阻止"
    ],
  "No se pudo verificar el guardado": [
    "Could not verify save",
    "Impossible de vérifier l’enregistrement",
    "Speichern konnte nicht überprüft werden",
    "Impossibile verificare il salvataggio",
    "Nie udało się sprawdzić zapisu",
    "تعذر التحقق من الحفظ",
    "无法验证保存结果"
    ],
  "No se pudo guardar el perfil en este navegador. Exporta tus datos o abre la aplicación en un navegador con almacenamiento habilitado.": [
    "The profile could not be saved in this browser. Export your data or open the application in a browser with storage enabled.",
    "Impossible d’enregistrer le profil dans ce navigateur. Exportez vos données ou ouvrez l’application dans un navigateur où le stockage est activé.",
    "Das Profil konnte in diesem Browser nicht gespeichert werden. Exportieren Sie Ihre Daten oder öffnen Sie die Anwendung in einem Browser mit aktiviertem Speicher.",
    "Impossibile salvare il profilo in questo browser. Esporta i dati o apri l’applicazione in un browser con archiviazione abilitata.",
    "Nie udało się zapisać profilu w tej przeglądarce. Wyeksportuj dane lub otwórz aplikację w przeglądarce z włączonym zapisem danych.",
    "تعذر حفظ ملف التعريف في هذا المتصفح. صدّر بياناتك أو افتح التطبيق في متصفح يسمح بالتخزين.",
    "无法在此浏览器中保存配置文件。请导出数据，或使用允许存储的浏览器打开应用。"
    ],
  "Perfil actualizado correctamente.": [
    "Profile updated successfully.",
    "Profil mis à jour avec succès.",
    "Profil erfolgreich aktualisiert.",
    "Profilo aggiornato correttamente.",
    "Profil został zaktualizowany.",
    "تم تحديث ملف التعريف بنجاح.",
    "配置文件已成功更新。"
    ],
  "Perfil de impresora guardado correctamente.": [
    "Printer profile saved successfully.",
    "Profil d’imprimante enregistré avec succès.",
    "Druckerprofil erfolgreich gespeichert.",
    "Profilo stampante salvato correttamente.",
    "Profil drukarki został zapisany.",
    "تم حفظ ملف تعريف الطابعة بنجاح.",
    "打印机配置文件已成功保存。"
    ],
  "No se ha podido guardar el cliente en este navegador. Comprueba el almacenamiento local.": [
    "Could not save the customer in this browser. Check local storage.",
    "Impossible d’enregistrer le client dans ce navigateur. Vérifiez le stockage local.",
    "Der Kunde konnte in diesem Browser nicht gespeichert werden. Überprüfen Sie den lokalen Speicher.",
    "Impossibile salvare il cliente in questo browser. Controlla la memoria locale.",
    "Nie udało się zapisać klienta w tej przeglądarce. Sprawdź pamięć lokalną.",
    "تعذر حفظ العميل في هذا المتصفح. تحقق من التخزين المحلي.",
    "无法在此浏览器中保存客户信息。请检查本地存储。"
    ],
  "No se pudo guardar la factura. El navegador no permite guardar datos localmente.": [
    "Could not save the invoice. The browser does not allow local data storage.",
    "Impossible d’enregistrer la facture. Le navigateur n’autorise pas le stockage local des données.",
    "Die Rechnung konnte nicht gespeichert werden. Der Browser erlaubt keine lokale Datenspeicherung.",
    "Impossibile salvare la fattura. Il browser non consente di salvare dati localmente.",
    "Nie udało się zapisać faktury. Przeglądarka nie pozwala na lokalne zapisywanie danych.",
    "تعذر حفظ الفاتورة. لا يسمح المتصفح بحفظ البيانات محليًا.",
    "无法保存发票。浏览器不允许在本地保存数据。"
    ],
  "Error al crear la factura: {message}": [
    "Error creating invoice: {message}",
    "Erreur lors de la création de la facture : {message}",
    "Fehler beim Erstellen der Rechnung: {message}",
    "Errore durante la creazione della fattura: {message}",
    "Błąd podczas tworzenia faktury: {message}",
    "حدث خطأ أثناء إنشاء الفاتورة: {message}",
    "创建发票时出错：{message}"
    ],
  "Cliente pendiente": [
    "Pending customer",
    "Client en attente",
    "Ausstehender Kunde",
    "Cliente in sospeso",
    "Klient oczekujący",
    "عميل قيد الانتظار",
    "待处理客户"
    ],
  "Impresora seleccionada": [
    "Selected printer",
    "Imprimante sélectionnée",
    "Ausgewählter Drucker",
    "Stampante selezionata",
    "Wybrana drukarka",
    "الطابعة المحددة",
    "已选择打印机"
    ],
  "Impresora seleccionada · {ip}": [
    "Selected printer · {ip}",
    "Imprimante sélectionnée · {ip}",
    "Ausgewählter Drucker · {ip}",
    "Stampante selezionata · {ip}",
    "Wybrana drukarka · {ip}",
    "الطابعة المحددة · {ip}",
    "已选择打印机 · {ip}"
    ],
  "Error consultando el progreso: HTTP {status}": [
    "Error checking progress: HTTP {status}",
    "Erreur lors de la vérification de la progression : HTTP {status}",
    "Fehler beim Abrufen des Fortschritts: HTTP {status}",
    "Errore durante la verifica dell’avanzamento: HTTP {status}",
    "Błąd sprawdzania postępu: HTTP {status}",
    "خطأ أثناء الاستعلام عن التقدم: HTTP {status}",
    "查询进度时出错：HTTP {status}"
    ],
  "G-code activo en impresora": [
    "Active G-code on printer",
    "G-code actif sur l’imprimante",
    "Aktiver G-Code auf dem Drucker",
    "G-code attivo sulla stampante",
    "Aktywny G-code w drukarce",
    "ملف G-code النشط في الطابعة",
    "打印机中的活动 G-code"
    ],
  "Puente HTTP {status}": [
    "Bridge HTTP {status}",
    "Pont HTTP {status}",
    "Bridge HTTP {status}",
    "Bridge HTTP {status}",
    "Most HTTP {status}",
    "الجسر HTTP {status}",
    "桥接服务 HTTP {status}"
    ],
  "Puente no disponible: {error} · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.": [
    "Bridge unavailable: {error} · Check that the local bridge is running and responds at http://127.0.0.1:8700/.",
    "Pont indisponible : {error} · Vérifiez que le pont local est démarré et répond à http://127.0.0.1:8700/.",
    "Bridge nicht verfügbar: {error} · Prüfen Sie, ob die lokale Bridge gestartet ist und unter http://127.0.0.1:8700/ antwortet.",
    "Bridge non disponibile: {error} · Verifica che il bridge locale sia avviato e risponda a http://127.0.0.1:8700/.",
    "Most niedostępny: {error} · Sprawdź, czy lokalny most jest uruchomiony i odpowiada pod adresem http://127.0.0.1:8700/.",
    "الجسر غير متاح: {error} · تحقق من تشغيل الجسر المحلي واستجابته على http://127.0.0.1:8700/.",
    "桥接服务不可用：{error} · 请确认本地桥接服务已启动，并可通过 http://127.0.0.1:8700/ 响应。"
    ],
  "Error de almacenamiento HTTP {status}": [
    "Storage HTTP error {status}",
    "Erreur HTTP du stockage {status}",
    "HTTP-Speicherfehler {status}",
    "Errore HTTP dell’archiviazione {status}",
    "Błąd magazynu HTTP {status}",
    "خطأ في التخزين HTTP {status}",
    "存储错误 HTTP {status}"
    ],
  "Error HTTP {status}": [
    "HTTP error {status}",
    "Erreur HTTP {status}",
    "HTTP-Fehler {status}",
    "Errore HTTP {status}",
    "Błąd HTTP {status}",
    "خطأ HTTP {status}",
    "HTTP 错误 {status}"
    ],
  "Sin copias": [
    "No backups",
    "Aucune sauvegarde",
    "Keine Sicherungen",
    "Nessun backup",
    "Brak kopii zapasowych",
    "لا توجد نسخ احتياطية",
    "无备份"
    ],
  "Seleccionar bobina del inventario": [
    "Select spool from inventory",
    "Sélectionner une bobine dans le stock",
    "Spule aus dem Lager auswählen",
    "Seleziona una bobina dall’inventario",
    "Wybierz szpulę z magazynu",
    "اختر بكرة من المخزون",
    "从库存中选择线轴"
    ],
  "Desglose del impuesto ({tax})": [
    "Tax breakdown ({tax})",
    "Détail de la taxe ({tax})",
    "Steueraufschlüsselung ({tax})",
    "Dettaglio dell’imposta ({tax})",
    "Rozbicie podatku ({tax})",
    "تفصيل الضريبة ({tax})",
    "税额明细（{tax}）"
    ],
  "precio base sin impuestos": [
    "base price excluding tax",
    "prix de base hors taxes",
    "Nettobasispreis",
    "prezzo base senza imposte",
    "cena bazowa bez podatku",
    "السعر الأساسي دون الضرائب",
    "不含税基础价格"
    ],
  "Guardado en SQLite del PC": [
    "Saved to this PC’s SQLite database",
    "Enregistré dans la base SQLite de ce PC",
    "In der SQLite-Datenbank dieses PCs gespeichert",
    "Salvato nel database SQLite di questo PC",
    "Zapisano w bazie SQLite na tym komputerze",
    "تم الحفظ في قاعدة بيانات SQLite على هذا الكمبيوتر",
    "已保存到此电脑的 SQLite 数据库"
    ],
  "NO GUARDADO: abre Print Cost & Profit desde http://127.0.0.1:8700 para guardar en SQLite.": [
    "NOT SAVED: open Print Cost & Profit from http://127.0.0.1:8700 to save to SQLite.",
    "NON ENREGISTRÉ : ouvrez Print Cost & Profit depuis http://127.0.0.1:8700 pour enregistrer dans SQLite.",
    "NICHT GESPEICHERT: Öffnen Sie Print Cost & Profit über http://127.0.0.1:8700, um in SQLite zu speichern.",
    "NON SALVATO: apri Print Cost & Profit da http://127.0.0.1:8700 per salvare in SQLite.",
    "NIE ZAPISANO: otwórz Print Cost & Profit pod adresem http://127.0.0.1:8700, aby zapisać w SQLite.",
    "لم يتم الحفظ: افتح Print Cost & Profit من http://127.0.0.1:8700 للحفظ في SQLite.",
    "未保存：请通过 http://127.0.0.1:8700 打开 Print Cost & Profit，以保存到 SQLite。"
    ],
  "El nombre del cliente es obligatorio.": [
    "Customer name is required.",
    "Le nom du client est obligatoire.",
    "Der Kundenname ist erforderlich.",
    "Il nome del cliente è obbligatorio.",
    "Nazwa klienta jest wymagana.",
    "اسم العميل مطلوب.",
    "客户姓名为必填项。"
    ],
  "Error al preparar documento para compartir": [
    "Error preparing document for sharing",
    "Erreur lors de la préparation du document à partager",
    "Fehler beim Vorbereiten des Dokuments zum Teilen",
    "Errore durante la preparazione del documento da condividere",
    "Błąd przygotowania dokumentu do udostępnienia",
    "حدث خطأ أثناء إعداد المستند للمشاركة",
    "准备共享文档时出错"
    ],
  "No se pudo guardar": [
    "Could not save",
    "Enregistrement impossible",
    "Speichern fehlgeschlagen",
    "Impossibile salvare",
    "Nie udało się zapisać",
    "تعذر الحفظ",
    "无法保存"
    ],
  "Nombre guardado para {printer}": [
    "Name saved for {printer}",
    "Nom enregistré pour {printer}",
    "Name für {printer} gespeichert",
    "Nome salvato per {printer}",
    "Zapisano nazwę dla {printer}",
    "تم حفظ الاسم للطابعة {printer}",
    "已为打印机 {printer} 保存名称"
    ],
  "Gasto guardado correctamente": [
    "Expense saved successfully",
    "Dépense enregistrée avec succès",
    "Ausgabe erfolgreich gespeichert",
    "Spesa salvata correttamente",
    "Wydatek został zapisany.",
    "تم حفظ المصروف بنجاح",
    "支出已成功保存"
    ],
  "Snapmaker U1 · perfil habitual": [
    "Snapmaker U1 · usual profile",
    "Snapmaker U1 · profil habituel",
    "Snapmaker U1 · Standardprofil",
    "Snapmaker U1 · profilo abituale",
    "Snapmaker U1 · zwykły profil",
    "Snapmaker U1 · الملف الشخصي المعتاد",
    "Snapmaker U1 · 常用配置"
    ],
  "La impresora cambió. Esperando el estado actualizado.": [
    "The printer changed. Waiting for the updated status.",
    "L’imprimante a changé. En attente de la mise à jour de son état.",
    "Der Drucker wurde gewechselt. Der aktualisierte Status wird abgewartet.",
    "La stampante è cambiata. In attesa dello stato aggiornato.",
    "Drukarka została zmieniona. Oczekiwanie na zaktualizowany stan.",
    "تم تغيير الطابعة. بانتظار تحديث الحالة.",
    "打印机已更改。正在等待状态更新。"
    ],
  "Consultando el consumo de la impresora seleccionada…": [
    "Checking the selected printer’s consumption…",
    "Vérification de la consommation de l’imprimante sélectionnée…",
    "Verbrauch des ausgewählten Druckers wird abgefragt…",
    "Verifica del consumo della stampante selezionata…",
    "Sprawdzanie zużycia wybranej drukarki…",
    "جارٍ الاستعلام عن استهلاك الطابعة المحددة…",
    "正在查询所选打印机的耗材用量……"
    ],
  "Esperando datos de la nueva impresora.": [
    "Waiting for data from the new printer.",
    "En attente des données de la nouvelle imprimante.",
    "Warte auf Daten des neuen Druckers.",
    "In attesa dei dati della nuova stampante.",
    "Oczekiwanie na dane z nowej drukarki.",
    "بانتظار بيانات الطابعة الجديدة.",
    "正在等待新打印机的数据。"
    ],
  "No hay bobinas alternativas con stock y color similar.": [
    "There are no alternative spools in stock with a similar color.",
    "Aucune bobine de remplacement en stock avec une couleur similaire.",
    "Keine alternativen Spulen mit Bestand und ähnlicher Farbe vorhanden.",
    "Non ci sono bobine alternative disponibili con un colore simile.",
    "Brak alternatywnych szpul w magazynie o podobnym kolorze.",
    "لا توجد بكرات بديلة متوفرة بمخزون ولون مشابهين.",
    "没有库存充足且颜色相近的替代线轴。"
    ],
  "Alternativa seleccionada para esta impresión": [
    "Alternative selected for this print",
    "Alternative sélectionnée pour cette impression",
    "Alternative für diesen Druck ausgewählt",
    "Alternativa selezionata per questa stampa",
    "Wybrano alternatywę dla tego wydruku",
    "تم اختيار البديل لهذه الطباعة",
    "已为此次打印选择替代线轴"
    ],
  "No hay filamentos del trabajo disponibles. Carga o vuelve a enviar el G-code desde Orca.": [
    "The job’s filament data is unavailable. Load or resend the G-code from Orca.",
    "Les données de filament de cette tâche sont indisponibles. Chargez ou renvoyez le G-code depuis Orca.",
    "Die Filamentdaten dieses Auftrags sind nicht verfügbar. Laden Sie den G-Code in Orca oder senden Sie ihn erneut.",
    "I dati dei filamenti del lavoro non sono disponibili. Carica o invia di nuovo il G-code da Orca.",
    "Dane filamentu dla tego zadania są niedostępne. Wczytaj lub wyślij ponownie G-code z Orca.",
    "لا تتوفر بيانات خيوط هذه المهمة. حمّل ملف G-code من Orca أو أعد إرساله.",
    "当前任务没有可用的耗材数据。请从 Orca 加载或重新发送 G-code。"
    ],
  "Orca aún no ha proporcionado los materiales de este trabajo.": [
    "Orca has not provided this job’s materials yet.",
    "Orca n’a pas encore fourni les matériaux de cette tâche.",
    "Orca hat die Materialien für diesen Auftrag noch nicht bereitgestellt.",
    "Orca non ha ancora fornito i materiali per questo lavoro.",
    "Orca nie udostępniła jeszcze informacji o materiałach dla tego zadania.",
    "لم يرسل Orca مواد هذه المهمة بعد.",
    "Orca 尚未提供此任务的材料信息。"
    ],
  "Impresión finalizada, pero no había consumo de filamento válido. No se modificó el inventario.": [
    "Print finished, but there was no valid filament consumption. Inventory was not changed.",
    "Impression terminée, mais aucune consommation de filament valide n’a été relevée. Le stock n’a pas été modifié.",
    "Druck abgeschlossen, aber kein gültiger Filamentverbrauch vorhanden. Der Bestand wurde nicht geändert.",
    "Stampa terminata, ma non è stato rilevato un consumo valido di filamento. L’inventario non è stato modificato.",
    "Druk zakończony, ale brak prawidłowych danych o zużyciu filamentu. Stan magazynowy nie został zmieniony.",
    "انتهت الطباعة، لكن لم تتوفر بيانات صالحة لاستهلاك الخيوط. لم يتم تعديل المخزون.",
    "打印已完成，但没有有效的耗材用量数据。库存未作更改。"
    ],
  "Impresión finalizada, pero no se pudo asociar el consumo a ninguna bobina. No se descontó nada.": [
    "Print finished, but consumption could not be matched to any spool. Nothing was deducted.",
    "Impression terminée, mais la consommation n’a pu être associée à aucune bobine. Rien n’a été déduit.",
    "Druck abgeschlossen, aber der Verbrauch konnte keiner Spule zugeordnet werden. Es wurde nichts abgezogen.",
    "Stampa terminata, ma non è stato possibile associare il consumo a una bobina. Non è stato scaricato nulla.",
    "Druk zakończony, ale nie udało się przypisać zużycia do żadnej szpuli. Niczego nie odjęto.",
    "انتهت الطباعة، لكن تعذر ربط الاستهلاك بأي بكرة. لم يتم خصم أي شيء.",
    "打印已完成，但无法将耗材用量关联到任何线轴。未扣减任何库存。"
    ],
  "Descuento aplicado (estimación del G-code): {grams}": [
    "Deduction applied (G-code estimate): {grams}",
    "Déduction appliquée (estimation du G-code) : {grams}",
    "Abzug angewendet (G-Code-Schätzung): {grams}",
    "Detrazione applicata (stima G-code): {grams}",
    "Zastosowano odjęcie (szacunek G-code): {grams}",
    "تم تطبيق الخصم (تقدير G-code): {grams}",
    "已应用扣减（G-code 估算）：{grams}"
    ],
  "Impresión finalizada": [
    "Print completed",
    "Impression terminée",
    "Druck abgeschlossen",
    "Stampa completata",
    "Drukowanie zakończone",
    "اكتملت الطباعة",
    "打印已完成"
    ],
  "pendiente(s) de revisar": [
    "pending review",
    "à vérifier",
    "zu prüfen",
    "da verificare",
    "do sprawdzenia",
    "قيد المراجعة",
    "待检查"
    ],
  "Sin marca": [
    "No brand",
    "Sans marque",
    "Keine Marke",
    "Senza marca",
    "Bez marki",
    "بدون علامة تجارية",
    "无品牌"
    ],
  "ERROR SQLite: no se han guardado los cambios.": [
    "SQLite ERROR: changes were not saved.",
    "ERREUR SQLite : les modifications n’ont pas été enregistrées.",
    "SQLite-FEHLER: Änderungen wurden nicht gespeichert.",
    "ERRORE SQLite: le modifiche non sono state salvate.",
    "BŁĄD SQLite: zmiany nie zostały zapisane.",
    "خطأ SQLite: لم يتم حفظ التغييرات.",
    "SQLite 错误：更改未保存。"
    ],
  "Selecciona exactamente dos tasaciones en la columna «Comparar» y pulsa «Comparar seleccionadas». Seleccionadas: ": [
    "Select exactly two estimates in the “Compare” column and click “Compare selected”. Selected: ",
    "Sélectionnez exactement deux estimations dans la colonne « Comparer », puis cliquez sur « Comparer la sélection ». Sélectionnées : ",
    "Wählen Sie genau zwei Kalkulationen in der Spalte „Vergleichen“ aus und klicken Sie auf „Ausgewählte vergleichen“. Ausgewählt: ",
    "Seleziona esattamente due stime nella colonna «Confronta» e fai clic su «Confronta selezionate». Selezionate: ",
    "Wybierz dokładnie dwie wyceny w kolumnie „Porównaj” i kliknij „Porównaj wybrane”. Wybrane: ",
    "حدد تقديرين بالضبط في عمود «مقارنة»، ثم اضغط على «مقارنة المحدد». المحدد: ",
    "请在“比较”列中恰好选择两份估价，然后点击“比较所选项目”。已选择："
    ],
  "Precio unitario": [
    "Unit price",
    "Prix unitaire",
    "Stückpreis",
    "Prezzo unitario",
    "Cena jednostkowa",
    "سعر الوحدة",
    "单价"
    ],
  "— Selecciona modelo —": [
    "— Select model —",
    "— Sélectionner le modèle —",
    "— Modell auswählen —",
    "— Seleziona modello —",
    "— Wybierz model —",
    "— اختر الطراز —",
    "— 选择型号 —"
    ],
  "Introduce el nombre o la empresa del cliente antes de continuar.": [
    "Enter the customer’s name or company before continuing.",
    "Saisissez le nom du client ou de l’entreprise avant de continuer.",
    "Geben Sie vor dem Fortfahren den Namen oder das Unternehmen des Kunden ein.",
    "Inserisci il nome o l’azienda del cliente prima di continuare.",
    "Przed kontynuowaniem wpisz nazwę klienta lub firmy.",
    "أدخل اسم العميل أو اسم الشركة قبل المتابعة.",
    "请先输入客户姓名或公司名称，然后继续。"
    ],
  "No se pudo guardar el cliente en este navegador. Comprueba el almacenamiento local.": [
    "The customer could not be saved in this browser. Check local storage.",
    "Impossible d’enregistrer le client dans ce navigateur. Vérifiez le stockage local.",
    "Der Kunde konnte in diesem Browser nicht gespeichert werden. Prüfen Sie den lokalen Speicher.",
    "Impossibile salvare il cliente in questo browser. Controlla l’archiviazione locale.",
    "Nie udało się zapisać klienta w tej przeglądarce. Sprawdź pamięć lokalną.",
    "تعذر حفظ العميل في هذا المتصفح. تحقق من التخزين المحلي.",
    "无法在此浏览器中保存客户信息。请检查本地存储。"
    ],
  "Incluir esta tasación en Contabilidad al guardarla": [
    "Include this estimate in Accounting when saving",
    "Inclure cette estimation dans la comptabilité lors de l’enregistrement",
    "Diese Kalkulation beim Speichern in die Buchhaltung übernehmen",
    "Includi questa stima in Contabilità al salvataggio",
    "Uwzględnij tę wycenę w księgowości podczas zapisywania",
    "تضمين هذا التقدير في المحاسبة عند حفظه",
    "保存时将此估价计入会计"
    ],
  "Si no marcas esta opción, guardar la tasación solo la añade al historial y no crea un gasto propio.": [
    "If unchecked, saving the estimate only adds it to history and does not create an own expense.",
    "Si cette option n’est pas cochée, l’estimation est uniquement ajoutée à l’historique et ne crée pas de dépense personnelle.",
    "Wenn diese Option nicht aktiviert ist, wird die Kalkulation nur im Verlauf gespeichert und erzeugt keine eigene Ausgabe.",
    "Se non selezioni questa opzione, la stima viene aggiunta solo alla cronologia e non crea una spesa personale.",
    "Jeśli nie zaznaczysz tej opcji, zapisanie wyceny doda ją tylko do historii i nie utworzy własnego wydatku.",
    "إذا لم تحدد هذا الخيار، فسيؤدي حفظ التقدير إلى إضافته للسجل فقط دون إنشاء مصروف شخصي.",
    "如果不勾选此选项，保存估价只会将其添加到历史记录，不会创建个人支出。"
    ],
  "¿Usar una bobina de otra marca?": [
    "Use a spool from another brand?",
    "Utiliser une bobine d’une autre marque ?",
    "Eine Spule einer anderen Marke verwenden?",
    "Usare una bobina di un’altra marca?",
    "Czy użyć szpuli innej marki?",
    "هل تريد استخدام بكرة من علامة تجارية أخرى؟",
    "要使用其他品牌的线轴吗？"
    ],
  "Bobina alternativa seleccionada: {brand} · {color}. Hay {stock} g; tras el trabajo quedarían {after} g.{shortage} El inventario no se modifica.": [
    "Alternative spool selected: {brand} · {color}. {stock} g available; {after} g would remain after the job.{shortage} Inventory is not changed.",
    "Bobine alternative sélectionnée : {brand} · {color}. {stock} g disponibles ; il resterait {after} g après le travail.{shortage} Le stock n’est pas modifié.",
    "Alternative Spule ausgewählt: {brand} · {color}. {stock} g verfügbar; nach dem Auftrag blieben {after} g übrig.{shortage} Der Bestand wird nicht geändert.",
    "Bobina alternativa selezionata: {brand} · {color}. Disponibili {stock} g; dopo il lavoro ne resterebbero {after} g.{shortage} L’inventario non viene modificato.",
    "Wybrano alternatywną szpulę: {brand} · {color}. Dostępne {stock} g; po zadaniu pozostałoby {after} g.{shortage} Stan magazynowy nie zostanie zmieniony.",
    "تم اختيار بكرة بديلة: {brand} · {color}. المتوفر {stock} غ؛ والمتبقي بعد المهمة {after} غ.{shortage} لن يتم تعديل المخزون الآن.",
    "已选择替代线轴：{brand} · {color}。现有 {stock} 克；任务完成后剩余 {after} 克。{shortage} 当前不会修改库存。"
    ],
  " Stock insuficiente.": [
    " Insufficient stock.",
    " Stock insuffisant.",
    " Bestand unzureichend.",
    " Scorta insufficiente.",
    " Za mało materiału w magazynie.",
    " المخزون غير كافٍ.",
    " 库存不足。"
    ],
  "Impresión cancelada: no se encontró gasto provisional para recalcular.": [
    "Print cancelled: no provisional expense was found to recalculate.",
    "Impression annulée : aucune dépense provisoire à recalculer n’a été trouvée.",
    "Druck abgebrochen: Es wurde keine vorläufige Ausgabe zum Neuberechnen gefunden.",
    "Stampa annullata: non è stata trovata alcuna spesa provvisoria da ricalcolare.",
    "Drukowanie anulowano: nie znaleziono tymczasowego kosztu do ponownego przeliczenia.",
    "تم إلغاء الطباعة: لم يتم العثور على مصروف مؤقت لإعادة حسابه.",
    "打印已取消：未找到可重新计算的临时支出记录。"
    ],
  "No se pudo leer SQLite": [
    "Could not read SQLite",
    "Impossible de lire SQLite",
    "SQLite konnte nicht gelesen werden",
    "Impossibile leggere SQLite",
    "Nie udało się odczytać SQLite",
    "تعذرت قراءة SQLite",
    "无法读取 SQLite"
    ],
  "No se pudo guardar la lista en SQLite": [
    "Could not save the list to SQLite",
    "Impossible d’enregistrer la liste dans SQLite",
    "Die Liste konnte nicht in SQLite gespeichert werden",
    "Impossibile salvare l’elenco in SQLite",
    "Nie udało się zapisać listy w SQLite",
    "تعذر حفظ القائمة في SQLite",
    "无法将列表保存到 SQLite"
    ],
  "No se pudo guardar la lista de impresoras en SQLite: {message}": [
    "Could not save the printer list to SQLite: {message}",
    "Impossible d’enregistrer la liste des imprimantes dans SQLite : {message}",
    "Die Druckerliste konnte nicht in SQLite gespeichert werden: {message}",
    "Impossibile salvare l’elenco delle stampanti in SQLite: {message}",
    "Nie udało się zapisać listy drukarek w SQLite: {message}",
    "تعذر حفظ قائمة الطابعات في SQLite: {message}",
    "无法将打印机列表保存到 SQLite：{message}"
    ],
  "Impresora seleccionada y conectada: {ip}.": [
    "Printer selected and connected: {ip}.",
    "Imprimante sélectionnée et connectée : {ip}.",
    "Drucker ausgewählt und verbunden: {ip}.",
    "Stampante selezionata e connessa: {ip}.",
    "Wybrano drukarkę i połączono: {ip}.",
    "تم تحديد الطابعة والاتصال بها: {ip}.",
    "已选择并连接打印机：{ip}。"
    ],
  "Conectando con {ip}…": [
    "Connecting to {ip}…",
    "Connexion à {ip}…",
    "Verbindung zu {ip} wird hergestellt…",
    "Connessione a {ip}…",
    "Łączenie z {ip}…",
    "جارٍ الاتصال بـ {ip}…",
    "正在连接 {ip}……"
    ],
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file}{software}.": [
    "PRINTER CONNECTED · {name} · IP {ip} · Status: {state} · File: {file}{software}.",
    "IMPRIMANTE CONNECTÉE · {name} · IP {ip} · État : {state} · Fichier : {file}{software}.",
    "DRUCKER VERBUNDEN · {name} · IP {ip} · Status: {state} · Datei: {file}{software}.",
    "STAMPANTE CONNESSA · {name} · IP {ip} · Stato: {state} · File: {file}{software}.",
    "DRUKARKA POŁĄCZONA · {name} · IP {ip} · Stan: {state} · Plik: {file}{software}.",
    "الطابعة متصلة · {name} · عنوان IP ‏{ip} · الحالة: {state} · الملف: {file}{software}.",
    "打印机已连接 · {name} · IP {ip} · 状态：{state} · 文件：{file}{software}。"
    ],
  "No se pudo seleccionar la impresora: {message}": [
    "Could not select the printer: {message}",
    "Impossible de sélectionner l’imprimante : {message}",
    "Der Drucker konnte nicht ausgewählt werden: {message}",
    "Impossibile selezionare la stampante: {message}",
    "Nie udało się wybrać drukarki: {message}",
    "تعذر تحديد الطابعة: {message}",
    "无法选择打印机：{message}"
    ],
  "No hay impresoras guardadas todavía. Pulsa «Buscar automáticamente» para descubrir las impresoras de la red.": [
    "No printers have been saved yet. Click “Search automatically” to discover printers on the network.",
    "Aucune imprimante n’est encore enregistrée. Cliquez sur « Rechercher automatiquement » pour détecter les imprimantes du réseau.",
    "Es sind noch keine Drucker gespeichert. Klicken Sie auf „Automatisch suchen“, um Drucker im Netzwerk zu finden.",
    "Non è ancora stata salvata alcuna stampante. Fai clic su «Cerca automaticamente» per rilevare le stampanti nella rete.",
    "Nie zapisano jeszcze żadnych drukarek. Kliknij „Szukaj automatycznie”, aby wykryć drukarki w sieci.",
    "لا توجد طابعات محفوظة حتى الآن. اضغط على «البحث التلقائي» لاكتشاف الطابعات على الشبكة.",
    "尚无已保存的打印机。点击“自动搜索”以发现网络中的打印机。"
    ],
  "Impresora encontrada y configurada: {ip}.": [
    "Printer found and configured: {ip}.",
    "Imprimante trouvée et configurée : {ip}.",
    "Drucker gefunden und konfiguriert: {ip}.",
    "Stampante trovata e configurata: {ip}.",
    "Znaleziono i skonfigurowano drukarkę: {ip}.",
    "تم العثور على الطابعة وإعدادها: {ip}.",
    "已找到并配置打印机：{ip}。"
    ],
  "No se encontraron impresoras": [
    "No printers were found",
    "Aucune imprimante n’a été trouvée",
    "Es wurden keine Drucker gefunden",
    "Non è stata trovata alcuna stampante",
    "Nie znaleziono drukarek",
    "لم يتم العثور على طابعات",
    "未找到打印机"
    ],
  "desconocido": [
    "unknown",
    "inconnu",
    "unbekannt",
    "sconosciuto",
    "nieznany",
    "غير معروف",
    "未知"
    ],
  "ninguno": [
    "none",
    "aucun",
    "keine",
    "nessuno",
    "brak",
    "لا شيء",
    "无"
    ],
  "Introduce una dirección que empiece por http:// o https://.": [
    "Enter an address starting with http:// or https://.",
    "Saisissez une adresse commençant par http:// ou https://.",
    "Geben Sie eine Adresse ein, die mit http:// oder https:// beginnt.",
    "Inserisci un indirizzo che inizi con http:// o https://.",
    "Wprowadź adres zaczynający się od http:// lub https://.",
    "أدخل عنوانًا يبدأ بـ http:// أو https://.",
    "请输入以 http:// 或 https:// 开头的地址。"
    ],
  "Probando conexión…": [
    "Testing connection…",
    "Test de la connexion…",
    "Verbindung wird getestet…",
    "Verifica della connessione…",
    "Testowanie połączenia…",
    "جارٍ اختبار الاتصال…",
    "正在测试连接……"
    ],
  "Conexión correcta (HTTP {status}). Respuesta recibida del puente local.": [
    "Connection successful (HTTP {status}). Response received from the local bridge.",
    "Connexion réussie (HTTP {status}). Réponse reçue du pont local.",
    "Verbindung erfolgreich (HTTP {status}). Antwort von der lokalen Bridge erhalten.",
    "Connessione riuscita (HTTP {status}). Risposta ricevuta dal bridge locale.",
    "Połączenie udane (HTTP {status}). Otrzymano odpowiedź z lokalnego mostu.",
    "الاتصال ناجح (HTTP {status}). تم استلام استجابة من الجسر المحلي.",
    "连接成功（HTTP {status}）。已收到本地桥接服务的响应。"
    ],
  "No se pudo confirmar la conexión: {message}. Comprueba que el puente está iniciado, la dirección es correcta y el navegador permite la conexión local.": [
    "Could not confirm the connection: {message}. Check that the bridge is running, the address is correct, and the browser allows local connections.",
    "Impossible de confirmer la connexion : {message}. Vérifiez que le pont est démarré, que l’adresse est correcte et que le navigateur autorise les connexions locales.",
    "Die Verbindung konnte nicht bestätigt werden: {message}. Prüfen Sie, ob die Bridge läuft, die Adresse korrekt ist und der Browser lokale Verbindungen zulässt.",
    "Impossibile confermare la connessione: {message}. Verifica che il bridge sia avviato, che l’indirizzo sia corretto e che il browser consenta le connessioni locali.",
    "Nie można potwierdzić połączenia: {message}. Sprawdź, czy most jest uruchomiony, adres jest prawidłowy, a przeglądarka zezwala na połączenia lokalne.",
    "تعذر تأكيد الاتصال: {message}. تحقق من تشغيل الجسر وصحة العنوان وسماح المتصفح بالاتصال المحلي.",
    "无法确认连接：{message}。请检查桥接服务是否已启动、地址是否正确，以及浏览器是否允许本地连接。"
    ],
  "Impresora encontrada: {ip}{hostname}.": [
    "Printer found: {ip}{hostname}.",
    "Imprimante trouvée : {ip}{hostname}.",
    "Drucker gefunden: {ip}{hostname}.",
    "Stampante trovata: {ip}{hostname}.",
    "Znaleziono drukarkę: {ip}{hostname}.",
    "تم العثور على الطابعة: {ip}{hostname}.",
    "已找到打印机：{ip}{hostname}。"
    ],
  "No se encontró la impresora. {message}": [
    "Printer not found. {message}",
    "Imprimante introuvable. {message}",
    "Drucker nicht gefunden. {message}",
    "Stampante non trovata. {message}",
    "Nie znaleziono drukarki. {message}",
    "لم يتم العثور على الطابعة. {message}",
    "未找到打印机。{message}"
    ],
  "No se encontró la impresora. Introduce su IP manualmente y pulsa Guardar IP manual.": [
    "Printer not found. Enter its IP address manually and click Save IP manually.",
    "Imprimante introuvable. Saisissez son adresse IP manuellement et cliquez sur Enregistrer l’IP manuellement.",
    "Drucker nicht gefunden. Geben Sie die IP manuell ein und klicken Sie auf „IP manuell speichern“.",
    "Stampante non trovata. Inserisci manualmente il suo IP e premi «Salva IP manualmente».",
    "Nie znaleziono drukarki. Wpisz jej adres IP ręcznie i kliknij „Zapisz IP ręcznie”.",
    "لم يتم العثور على الطابعة. أدخل عنوان IP يدويًا واضغط على «حفظ IP يدويًا».",
    "未找到打印机。请手动输入其 IP 地址，然后点击“保存手动 IP”。"
    ],
  "Introduce una dirección IPv4 válida, por ejemplo 192.168.1.48.": [
    "Enter a valid IPv4 address, for example 192.168.1.48.",
    "Saisissez une adresse IPv4 valide, par exemple 192.168.1.48.",
    "Geben Sie eine gültige IPv4-Adresse ein, zum Beispiel 192.168.1.48.",
    "Inserisci un indirizzo IPv4 valido, ad esempio 192.168.1.48.",
    "Wprowadź prawidłowy adres IPv4, np. 192.168.1.48.",
    "أدخل عنوان IPv4 صالحًا، مثل 192.168.1.48.",
    "请输入有效的 IPv4 地址，例如 192.168.1.48。"
    ],
  "La IP {ip} se ha guardado en la aplicación, pero el puente no pudo validarla (tiempo de espera agotado). Comprueba que el puente esté iniciado; puedes volver a pulsar «Ver impresora conectada» después.": [
    "IP {ip} was saved in the application, but the bridge could not validate it (request timed out). Make sure the bridge is running; you can click “View connected printer” again later.",
    "L’adresse IP {ip} a été enregistrée, mais le pont n’a pas pu la valider (délai d’attente dépassé). Vérifiez que le pont est démarré ; vous pourrez ensuite cliquer de nouveau sur « Voir l’imprimante connectée ».",
    "IP {ip} wurde gespeichert, aber die Bridge konnte sie nicht überprüfen (Zeitüberschreitung). Prüfen Sie, ob die Bridge läuft; anschließend können Sie erneut auf „Verbundene Drucker anzeigen“ klicken.",
    "L’IP {ip} è stata salvata, ma il bridge non è riuscito a convalidarla (tempo scaduto). Verifica che il bridge sia avviato; poi puoi fare di nuovo clic su «Visualizza stampante connessa».",
    "Adres IP {ip} zapisano, ale mostek nie mógł go sprawdzić (przekroczono limit czasu). Sprawdź, czy mostek jest uruchomiony; później możesz ponownie kliknąć „Pokaż podłączoną drukarkę”.",
    "تم حفظ عنوان IP ‏{ip} في التطبيق، لكن الجسر لم يتمكن من التحقق منه (انتهت المهلة). تحقق من تشغيل الجسر؛ ويمكنك الضغط مجددًا على «عرض الطابعة المتصلة» لاحقًا.",
    "IP {ip} 已保存在应用中，但桥接服务无法验证该地址（请求超时）。请检查桥接服务是否已启动；稍后可以再次点击“查看已连接的打印机”。"
    ],
  "La IP {ip} se ha guardado en la aplicación, pero el puente no pudo validarla: {message}. Comprueba que el puente esté iniciado; puedes volver a pulsar «Ver impresora conectada» después.": [
    "IP {ip} was saved in the application, but the bridge could not validate it: {message}. Make sure the bridge is running; you can click “View connected printer” again later.",
    "L’adresse IP {ip} a été enregistrée, mais le pont n’a pas pu la valider : {message}. Vérifiez que le pont est démarré ; vous pourrez ensuite cliquer de nouveau sur « Voir l’imprimante connectée ».",
    "IP {ip} wurde gespeichert, aber die Bridge konnte sie nicht überprüfen: {message}. Prüfen Sie, ob die Bridge läuft; anschließend können Sie erneut auf „Verbundene Drucker anzeigen“ klicken.",
    "L’IP {ip} è stata salvata, ma il bridge non è riuscito a convalidarla: {message}. Verifica che il bridge sia avviato; poi puoi fare di nuovo clic su «Visualizza stampante connessa».",
    "Adres IP {ip} zapisano, ale mostek nie mógł go sprawdzić: {message}. Sprawdź, czy mostek jest uruchomiony; później możesz ponownie kliknąć „Pokaż podłączoną drukarkę”.",
    "تم حفظ عنوان IP ‏{ip} في التطبيق، لكن الجسر لم يتمكن من التحقق منه: {message}. تحقق من تشغيل الجسر؛ ويمكنك الضغط مجددًا على «عرض الطابعة المتصلة» لاحقًا.",
    "IP {ip} 已保存在应用中，但桥接服务无法验证该地址：{message}。请检查桥接服务是否已启动；稍后可以再次点击“查看已连接的打印机”。"
    ],
  "Consultando la impresora configurada…": [
    "Checking the configured printer…",
    "Vérification de l’imprimante configurée…",
    "Konfigurierter Drucker wird überprüft…",
    "Verifica della stampante configurata…",
    "Sprawdzanie skonfigurowanej drukarki…",
    "جارٍ الاستعلام عن الطابعة التي تم إعدادها…",
    "正在查询已配置的打印机……"
    ],
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file}{software}. Consulta completada.": [
    "PRINTER CONNECTED · {name} · IP {ip} · Status: {state} · File: {file}{software}. Check complete.",
    "IMPRIMANTE CONNECTÉE · {name} · IP {ip} · État : {state} · Fichier : {file}{software}. Vérification terminée.",
    "DRUCKER VERBUNDEN · {name} · IP {ip} · Status: {state} · Datei: {file}{software}. Prüfung abgeschlossen.",
    "STAMPANTE CONNESSA · {name} · IP {ip} · Stato: {state} · File: {file}{software}. Verifica completata.",
    "DRUKARKA POŁĄCZONA · {name} · IP {ip} · Stan: {state} · Plik: {file}{software}. Sprawdzanie zakończone.",
    "الطابعة متصلة · {name} · عنوان IP ‏{ip} · الحالة: {state} · الملف: {file}{software}. اكتمل الاستعلام.",
    "打印机已连接 · {name} · IP {ip} · 状态：{state} · 文件：{file}{software}。查询完成。"
    ],
  "No se pudo consultar la impresora: {message}. Comprueba la IP y que el puente esté iniciado.": [
    "Could not query the printer: {message}. Check the IP address and make sure the bridge is running.",
    "Impossible d’interroger l’imprimante : {message}. Vérifiez l’adresse IP et assurez-vous que le pont est démarré.",
    "Druckerabfrage fehlgeschlagen: {message}. Prüfen Sie die IP-Adresse und ob die Bridge läuft.",
    "Impossibile interrogare la stampante: {message}. Controlla l’indirizzo IP e verifica che il bridge sia avviato.",
    "Nie udało się odpytać drukarki: {message}. Sprawdź adres IP i upewnij się, że mostek jest uruchomiony.",
    "تعذر الاستعلام عن الطابعة: {message}. تحقق من عنوان IP ومن تشغيل الجسر.",
    "无法查询打印机：{message}。请检查 IP 地址以及桥接服务是否已启动。"
    ],
  "No se puede guardar el gasto: falta stock de filamento.": [
    "The expense cannot be saved: there is not enough filament in stock.",
    "Impossible d’enregistrer la dépense : le stock de filament est insuffisant.",
    "Die Ausgabe kann nicht gespeichert werden: Der Filamentbestand reicht nicht aus.",
    "Impossibile salvare la spesa: scorte di filamento insufficienti.",
    "Nie można zapisać wydatku: niewystarczający zapas filamentu.",
    "لا يمكن حفظ المصروف: مخزون الخيوط غير كافٍ.",
    "无法保存支出：耗材库存不足。"
    ],
  "Buscando la impresora en la red local…": [
    "Searching for the printer on the local network…",
    "Recherche de l’imprimante sur le réseau local…",
    "Drucker wird im lokalen Netzwerk gesucht…",
    "Ricerca della stampante nella rete locale…",
    "Wyszukiwanie drukarki w sieci lokalnej…",
    "جارٍ البحث عن الطابعة في الشبكة المحلية…",
    "正在本地网络中搜索打印机……"
    ],
  "No se pudo aplicar la IP.": [
    "Could not apply the IP address.",
    "Impossible d’appliquer l’adresse IP.",
    "Die IP-Adresse konnte nicht angewendet werden.",
    "Impossibile applicare l’indirizzo IP.",
    "Nie udało się zastosować adresu IP.",
    "تعذر تطبيق عنوان IP。",
    "无法应用 IP 地址。"
    ],
  "No se pudo iniciar el almacenamiento externo.": [
    "External storage could not be started.",
    "Impossible de démarrer le stockage externe.",
    "Der externe Speicher konnte nicht gestartet werden.",
    "Impossibile avviare l’archiviazione esterna.",
    "Nie udało się uruchomić pamięci zewnętrznej.",
    "تعذر بدء التخزين الخارجي.",
    "无法启动外部存储。"
    ],
  "No se pudo leer el archivo G-code.": [
    "The G-code file could not be read.",
    "Impossible de lire le fichier G-code.",
    "Die G-Code-Datei konnte nicht gelesen werden.",
    "Impossibile leggere il file G-code.",
    "Nie udało się odczytać pliku G-code.",
    "تعذرت قراءة ملف G-code.",
    "无法读取 G-code 文件。"
    ],
  "No se ha podido guardar la copia de seguridad.": [
    "The backup could not be saved.",
    "Impossible d’enregistrer la sauvegarde.",
    "Die Sicherung konnte nicht gespeichert werden.",
    "Impossibile salvare il backup.",
    "Nie udało się zapisać kopii zapasowej.",
    "تعذر حفظ النسخة الاحتياطية.",
    "无法保存备份。"
    ],
  "Margen sobre venta": [
    "Sales margin",
    "Marge sur vente",
    "Verkaufsmarge",
    "Margine sulle vendite",
    "Marża od sprzedaży",
    "هامش الربح من المبيعات",
    "销售利润率"
    ],
  "Rentabilidad sobre coste": [
    "Return on cost",
    "Rentabilité sur coût",
    "Rentabilität bezogen auf Kosten",
    "Redditività sul costo",
    "Rentowność względem kosztu",
    "العائد على التكلفة",
    "成本收益率"
    ],
  "PANEL U1: integrado sobre la base funcional v1.154": [
    "U1 PANEL: integrated on functional base v1.154",
    "PANNEAU U1 : intégré sur la base fonctionnelle v1.154",
    "U1-PANEL: auf der funktionsfähigen Basis v1.154 integriert",
    "PANNELLO U1: integrato sulla base funzionale v1.154",
    "PANEL U1: zintegrowany z działającą bazą v1.154",
    "لوحة U1: مدمجة استنادًا إلى الأساس الوظيفي v1.154",
    "U1 面板：基于功能版本 v1.154 集成"
    ],
  "Selecciona una impresora": [
    "Select a printer",
    "Sélectionnez une imprimante",
    "Drucker auswählen",
    "Seleziona una stampante",
    "Wybierz drukarkę",
    "اختر طابعة",
    "选择打印机"
    ],
  "🖨️ Conexión con impresora": [
    "🖨️ Printer connection",
    "🖨️ Connexion à l’imprimante",
    "🖨️ Druckerverbindung",
    "🖨️ Connessione alla stampante",
    "🖨️ Połączenie z drukarką",
    "🖨️ الاتصال بالطابعة",
    "🖨️ 打印机连接"
    ],
  "Print Cost & Profit · Versión 1.479": [
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Versione 1.480",
    "Print Cost & Profit · Wersja 1.479",
    "Print Cost & Profit · الإصدار 1.479",
    "Print Cost & Profit · 版本 1.479"
    ],
  "El archivo se ha abierto, pero está vacío o no contiene texto legible. Tamaño: ": [
    "The file was opened, but is empty or contains no readable text. Size: ",
    "Le fichier a été ouvert, mais il est vide ou ne contient aucun texte lisible. Taille : ",
    "Die Datei wurde geöffnet, ist aber leer oder enthält keinen lesbaren Text. Größe: ",
    "Il file è stato aperto, ma è vuoto o non contiene testo leggibile. Dimensione: ",
    "Plik został otwarty, ale jest pusty lub nie zawiera czytelnego tekstu. Rozmiar: ",
    "تم فتح الملف، لكنه فارغ أو لا يحتوي على نص قابل للقراءة. الحجم: ",
    "文件已打开，但为空或不包含可读取的文本。大小："
    ],
  "El archivo se leyó, pero falló el análisis del G-code: ": [
    "The file was read, but G-code parsing failed: ",
    "Le fichier a été lu, mais l’analyse du G-code a échoué : ",
    "Die Datei wurde gelesen, aber die G-Code-Analyse ist fehlgeschlagen: ",
    "Il file è stato letto, ma l’analisi del G-code non è riuscita: ",
    "Plik został odczytany, ale analiza G-code nie powiodła się: ",
    "تمت قراءة الملف، لكن تعذر تحليل G-code: ",
    "文件已读取，但 G-code 解析失败："
    ],
  "Datos de integración incompletos.": [
    "Incomplete integration data.",
    "Données d’intégration incomplètes.",
    "Unvollständige Integrationsdaten.",
    "Dati di integrazione incompleti.",
    "Niekompletne dane integracji.",
    "بيانات التكامل غير مكتملة.",
    "集成数据不完整。"
    ],
  "La integración no recibió miniatura del G-code.": [
    "The integration did not receive a G-code thumbnail.",
    "L’intégration n’a pas reçu de miniature du G-code.",
    "Die Integration hat kein G-Code-Miniaturbild erhalten.",
    "L’integrazione non ha ricevuto una miniatura del G-code.",
    "Integracja nie otrzymała miniatury G-code.",
    "لم يتلق التكامل صورة مصغرة لملف G-code.",
    "集成未收到 G-code 缩略图。"
    ],
  "No se pudieron importar los datos de integración: ": [
    "Could not import integration data: ",
    "Impossible d’importer les données d’intégration : ",
    "Integrationsdaten konnten nicht importiert werden: ",
    "Impossibile importare i dati di integrazione: ",
    "Nie udało się zaimportować danych integracji: ",
    "تعذر استيراد بيانات التكامل: ",
    "无法导入集成数据："
    ],
  "No hay tasaciones que coincidan con la búsqueda.": [
    "No estimates match the search.",
    "Aucune estimation ne correspond à la recherche.",
    "Keine Kalkulation entspricht der Suche.",
    "Nessuna stima corrisponde alla ricerca.",
    "Brak wycen pasujących do wyszukiwania.",
    "لا توجد تقديرات تطابق البحث.",
    "没有符合搜索条件的估价。"
    ],
  "Tasación eliminada del historial.": [
    "Estimate removed from history.",
    "Estimation supprimée de l’historique.",
    "Kalkulation aus dem Verlauf entfernt.",
    "Stima rimossa dalla cronologia.",
    "Wycena została usunięta z historii.",
    "تم حذف التقدير من السجل.",
    "估价已从历史记录中删除。"
    ],
  "Selecciona como máximo dos tasaciones.": [
    "Select no more than two estimates.",
    "Sélectionnez au maximum deux estimations.",
    "Wählen Sie höchstens zwei Kalkulationen aus.",
    "Seleziona al massimo due stime.",
    "Wybierz maksymalnie dwie wyceny.",
    "حدد تقديرين كحد أقصى.",
    "最多选择两份估价。"
    ],
  "Tiempo de impresión": [
    "Print time",
    "Temps d’impression",
    "Druckzeit",
    "Tempo di stampa",
    "Czas drukowania",
    "وقت الطباعة", "打印时间"
    ],
  "Selección de comparativa limpiada.": [
    "Comparison selection cleared.",
    "Sélection de comparaison effacée.",
    "Vergleichsauswahl zurückgesetzt.",
    "Selezione del confronto azzerata.",
    "Wybór porównania został wyczyszczony.",
    "تم مسح تحديد المقارنة.",
    "比较选择已清除。"
    ],
  "Copia JSON descargada. No se pudo consultar la versión central del servidor.": [
    "JSON backup downloaded. The central server version could not be checked.",
    "Sauvegarde JSON téléchargée. Impossible de vérifier la version centrale du serveur.",
    "JSON-Sicherung heruntergeladen. Die zentrale Serverversion konnte nicht abgefragt werden.",
    "Backup JSON scaricato. Impossibile verificare la versione centrale del server.",
    "Pobrano kopię JSON. Nie udało się sprawdzić centralnej wersji serwera.",
    "تم تنزيل نسخة JSON. تعذر الاستعلام عن الإصدار المركزي للخادم.",
    "JSON 备份已下载。无法查询服务器中央版本。"
    ],
  "Copia JSON descargada: incluye historial, ajustes y cálculo actual.": [
    "JSON backup downloaded: includes history, settings and current calculation.",
    "Sauvegarde JSON téléchargée : elle comprend l’historique, les paramètres et le calcul actuel.",
    "JSON-Sicherung heruntergeladen: Verlauf, Einstellungen und aktuelle Berechnung sind enthalten.",
    "Backup JSON scaricato: include cronologia, impostazioni e calcolo attuale.",
    "Pobrano kopię JSON: zawiera historię, ustawienia i bieżące obliczenie.",
    "تم تنزيل نسخة JSON: تتضمن السجل والإعدادات والحساب الحالي.",
    "JSON 备份已下载：包含历史记录、设置和当前计算数据。"
    ],
  "Copia restaurada: historial, ajustes y cálculo actual.": [
    "Backup restored: history, settings and current calculation.",
    "Sauvegarde restaurée : historique, paramètres et calcul actuel.",
    "Sicherung wiederhergestellt: Verlauf, Einstellungen und aktuelle Berechnung.",
    "Backup ripristinato: cronologia, impostazioni e calcolo attuale.",
    "Przywrócono kopię: historia, ustawienia i bieżące obliczenie.",
    "تمت استعادة النسخة: السجل والإعدادات والحساب الحالي.",
    "备份已恢复：包含历史记录、设置和当前计算数据。"
    ],
  "Copia restaurada. Este archivo antiguo no incluía el cálculo actual.": [
    "Backup restored. This older file did not include the current calculation.",
    "Sauvegarde restaurée. Cet ancien fichier ne contenait pas le calcul actuel.",
    "Sicherung wiederhergestellt. Diese ältere Datei enthielt die aktuelle Berechnung nicht.",
    "Backup ripristinato. Questo vecchio file non includeva il calcolo attuale.",
    "Przywrócono kopię. Ten starszy plik nie zawierał bieżącego obliczenia.",
    "تمت استعادة النسخة. لم يتضمن هذا الملف القديم الحساب الحالي.",
    "备份已恢复。此旧文件不包含当前计算数据。"
    ],
  "El navegador no permitió copiarlo; se ha descargado el resumen en TXT.": [
    "The browser did not allow copying; the summary was downloaded as a TXT file.",
    "Le navigateur n’a pas autorisé la copie ; le résumé a été téléchargé au format TXT.",
    "Der Browser hat das Kopieren verhindert; die Zusammenfassung wurde als TXT-Datei heruntergeladen.",
    "Il browser non ha consentito la copia; il riepilogo è stato scaricato in formato TXT.",
    "Przeglądarka nie zezwoliła na kopiowanie; podsumowanie pobrano jako plik TXT.",
    "لم يسمح المتصفح بنسخه؛ تم تنزيل الملخص بصيغة TXT.",
    "浏览器不允许复制；摘要已下载为 TXT 文件。"
    ],
  "Datos del vendedor guardados. Se reutilizarán en presupuestos y documentos imprimibles.": [
    "Seller details saved. They will be reused in quotes and printable documents.",
    "Coordonnées du vendeur enregistrées. Elles seront réutilisées dans les devis et documents imprimables.",
    "Verkäuferdaten gespeichert. Sie werden in Angeboten und druckbaren Dokumenten wiederverwendet.",
    "Dati del venditore salvati. Verranno riutilizzati nei preventivi e nei documenti stampabili.",
    "Zapisano dane sprzedawcy. Będą używane ponownie w ofertach i dokumentach do wydruku.",
    "تم حفظ بيانات البائع. ستُستخدم مجددًا في عروض الأسعار والمستندات القابلة للطباعة.",
    "卖方信息已保存。此信息将在报价单和可打印文档中重复使用。"
    ],
  "Crea el cliente aquí con el formulario de la agenda. Al guardarlo volverás al presupuesto.": [
    "Create the customer here using the address-book form. After saving, you will return to the quote.",
    "Créez le client ici à l’aide du formulaire du répertoire. Après l’enregistrement, vous reviendrez au devis.",
    "Erstellen Sie den Kunden hier über das Adressbuchformular. Nach dem Speichern kehren Sie zum Angebot zurück.",
    "Crea qui il cliente usando il modulo della rubrica. Dopo il salvataggio tornerai al preventivo.",
    "Utwórz tutaj klienta za pomocą formularza książki adresowej. Po zapisaniu wrócisz do oferty.",
    "أنشئ العميل هنا باستخدام نموذج دفتر العناوين. بعد حفظه ستعود إلى عرض السعر.",
    "请在此使用客户名录表单创建客户。保存后将返回报价单。"
    ],
  "Escribe un nombre, correo o teléfono para buscar.": [
    "Enter a name, email, or phone number to search.",
    "Saisissez un nom, une adresse e-mail ou un numéro de téléphone pour rechercher.",
    "Geben Sie zum Suchen einen Namen, eine E-Mail-Adresse oder eine Telefonnummer ein.",
    "Inserisci un nome, un indirizzo e-mail o un numero di telefono per cercare.",
    "Wpisz imię i nazwisko, adres e-mail lub numer telefonu, aby wyszukać.",
    "أدخل اسمًا أو بريدًا إلكترونيًا أو رقم هاتف للبحث.",
    "输入姓名、电子邮件或电话号码进行搜索。"
    ],
  "No hay clientes que coincidan con la búsqueda.": [
    "No customers match the search.",
    "Aucun client ne correspond à la recherche.",
    "Keine Kunden entsprechen der Suche.",
    "Nessun cliente corrisponde alla ricerca.",
    "Brak klientów pasujących do wyszukiwania.",
    "لا يوجد عملاء يطابقون البحث.",
    "没有符合搜索条件的客户。"
    ],
  "Cliente guardado. Ya está disponible en presupuestos, facturas y pedidos.": [
    "Customer saved. They are now available in quotes, invoices and orders.",
    "Client enregistré. Il est désormais disponible dans les devis, factures et commandes.",
    "Kunde gespeichert. Er steht jetzt in Angeboten, Rechnungen und Aufträgen zur Verfügung.",
    "Cliente salvato. Ora è disponibile in preventivi, fatture e ordini.",
    "Zapisano klienta. Jest teraz dostępny w ofertach, fakturach i zamówieniach.",
    "تم حفظ العميل. أصبح متاحًا الآن في عروض الأسعار والفواتير والطلبات.",
    "客户已保存。现在可在报价单、发票和订单中使用。"
    ],
  ". La restauración crea y valida primero una copia de protección de la base actual. No cierres la aplicación mientras termina.": [
    ". Restore first creates and validates a safety copy of the current database. Do not close the application until it finishes.",
    ". La restauration crée et valide d’abord une copie de sauvegarde de la base actuelle. Ne fermez pas l’application avant la fin.",
    ". Bei der Wiederherstellung wird zunächst eine Sicherung der aktuellen Datenbank erstellt und geprüft. Schließen Sie die Anwendung erst nach Abschluss.",
    ". Il ripristino crea e convalida prima una copia di sicurezza del database attuale. Non chiudere l’applicazione prima del termine.",
    ". Przywracanie najpierw tworzy i sprawdza kopię zabezpieczającą bieżącej bazy danych. Nie zamykaj aplikacji przed zakończeniem.",
    " تنشئ عملية الاستعادة أولًا نسخة احتياطية وقائية من قاعدة البيانات الحالية وتتحقق منها. لا تغلق التطبيق حتى تكتمل العملية.",
    "。恢复操作会先创建并验证当前数据库的保护备份。完成前请勿关闭应用。"
    ],
  "PCP v1.198: cierre de quotesView antes de las pestañas independientes": [
    "PCP v1.198: close quotesView before independent tabs",
    "PCP v1.198 : fermer quotesView avant les onglets indépendants",
    "PCP v1.198: quotesView vor den unabhängigen Registerkarten schließen",
    "PCP v1.198: chiusura di quotesView prima delle schede indipendenti",
    "PCP v1.198: zamknięcie quotesView przed niezależnymi kartami",
    "PCP v1.198: إغلاق quotesView قبل علامات التبويب المستقلة",
    "PCP v1.198：在独立选项卡之前关闭 quotesView"
    ],
  " · Comisión aplicada al precio con impuestos: ": [
    " · Commission applied to the price including tax: ",
    " · Commission appliquée au prix TTC : ",
    " · Provision auf den Preis inklusive Steuern angewendet: ",
    " · Commissione applicata al prezzo comprensivo di imposte: ",
    " · Prowizja naliczona od ceny z podatkiem: ",
    " · العمولة المطبقة على السعر شامل الضرائب: ",
    " · 按含税价格计算的佣金："
    ],
  "estimados a partir de la extrusión (aproximados)": [
    "estimated from extrusion (approximate)",
    "estimés à partir de l’extrusion (approximatif)",
    "aus der Extrusion geschätzt (ungefähr)",
    "stimati dall’estrusione (approssimativi)",
    "oszacowane na podstawie ekstruzji (wartości przybliżone)",
    "تقديرات مستمدة من عملية البثق (تقريبية)",
    "根据挤出量估算（近似值）"
    ],
  "según las estadísticas de Orca": [
    "according to Orca statistics",
    "selon les statistiques d’Orca",
    "laut Orca-Statistik",
    "secondo le statistiche di Orca",
    "według statystyk Orca",
    "وفقًا لإحصاءات Orca",
    "根据 Orca 统计数据"
    ],
  "<span class=\"warn\">El peso por extrusión es una estimación; verifica el dato antes de calcular el precio.</span>": [
    "<span class=\"warn\">Extrusion weight is an estimate; verify it before calculating the price.</span>",
    "<span class=\"warn\">Le poids calculé à partir de l’extrusion est une estimation ; vérifiez-le avant de calculer le prix.</span>",
    "<span class=\"warn\">Das Extrusionsgewicht ist ein Schätzwert; prüfen Sie ihn vor der Preisberechnung.</span>",
    "<span class=\"warn\">Il peso da estrusione è una stima; verifica il dato prima di calcolare il prezzo.</span>",
    "<span class=\"warn\">Masa wyliczona na podstawie ekstruzji jest szacunkowa; sprawdź ją przed obliczeniem ceny.</span>",
    "<span class=\"warn\">الوزن لكل عملية بثق تقديري؛ تحقق من القيمة قبل حساب السعر.</span>",
    "<span class=\"warn\">每次挤出的重量为估算值；计算价格前请核实该数据。</span>"
    ],
  "SQLite no está conectado: abre la aplicación desde http://127.0.0.1:8700.": [
    "SQLite is not connected: open the application from http://127.0.0.1:8700.",
    "SQLite n’est pas connecté : ouvrez l’application depuis http://127.0.0.1:8700.",
    "SQLite ist nicht verbunden: Öffnen Sie die Anwendung unter http://127.0.0.1:8700.",
    "SQLite non è connesso: apri l’applicazione da http://127.0.0.1:8700.",
    "SQLite nie jest połączone: otwórz aplikację pod adresem http://127.0.0.1:8700.",
    "SQLite غير متصل: افتح التطبيق من http://127.0.0.1:8700.",
    "SQLite 未连接：请通过 http://127.0.0.1:8700 打开应用。"
    ],
  "¿Eliminar solo la tasación de «": [
    "Delete only the estimate for “",
    "Supprimer uniquement l’estimation de «",
    "Nur die Kalkulation für „ löschen",
    "Eliminare solo la stima di «",
    "Usunąć tylko wycenę „",
    "هل تريد حذف التقدير فقط الخاص بـ «",
    "是否仅删除以下项目的估价：“"
    ],
  "</strong><br><span class=\"section-note\">Modelo estadístico orientativo: supone que cada intento es independiente y que un fallo obliga a repetir toda la pieza.</span>": [
    "</strong><br><span class=\"section-note\">Indicative statistical model: assumes each attempt is independent and a failure requires the entire part to be printed again.</span>",
    "</strong><br><span class=\"section-note\">Modèle statistique indicatif : chaque tentative est supposée indépendante et un échec impose de réimprimer toute la pièce.</span>",
    "</strong><br><span class=\"section-note\">Orientierendes statistisches Modell: Jeder Versuch gilt als unabhängig; bei einem Fehler muss das gesamte Teil erneut gedruckt werden.</span>",
    "</strong><br><span class=\"section-note\">Modello statistico indicativo: ogni tentativo è indipendente e un errore richiede di ristampare l’intero pezzo.</span>",
    "</strong><br><span class=\"section-note\">Orientacyjny model statystyczny: każda próba jest niezależna, a niepowodzenie wymaga ponownego wydrukowania całej części.</span>",
    "</strong><br><span class=\"section-note\">نموذج إحصائي إرشادي: يفترض أن كل محاولة مستقلة وأن الفشل يستلزم إعادة القطعة بالكامل.</span>",
    "</strong><br><span class=\"section-note\">参考统计模型：假设每次尝试相互独立，且一次失败就必须重新打印整个零件。</span>"
    ],
  "</strong><br>Cálculos guardados este mes: ": [
    "</strong><br>Calculations saved this month: ",
    "</strong><br>Calculs enregistrés ce mois-ci : ",
    "</strong><br>Diesen Monat gespeicherte Berechnungen: ",
    "</strong><br>Calcoli salvati questo mese: ",
    "</strong><br>Obliczenia zapisane w tym miesiącu: ",
    "</strong><br>الحسابات المحفوظة هذا الشهر: ",
    "</strong><br>本月已保存的计算："
    ],
  "<br><span class=\"section-note\">Solo se cuentan los cálculos guardados; no se detectan automáticamente ventas reales ni cobros.</span>": [
    "<br><span class=\"section-note\">Only saved calculations are counted; actual sales and payments are not detected automatically.</span>",
    "<br><span class=\"section-note\">Seuls les calculs enregistrés sont comptabilisés ; les ventes réelles et les encaissements ne sont pas détectés automatiquement.</span>",
    "<br><span class=\"section-note\">Es werden nur gespeicherte Berechnungen gezählt; tatsächliche Verkäufe und Zahlungseingänge werden nicht automatisch erkannt.</span>",
    "<br><span class=\"section-note\">Vengono conteggiati solo i calcoli salvati; le vendite reali e gli incassi non vengono rilevati automaticamente.</span>",
    "<br><span class=\"section-note\">Uwzględniane są tylko zapisane obliczenia; rzeczywista sprzedaż i płatności nie są wykrywane automatycznie.</span>",
    "<br><span class=\"section-note\">تُحتسب الحسابات المحفوظة فقط؛ ولا يتم اكتشاف المبيعات الفعلية أو المدفوعات تلقائيًا.</span>",
    "<br><span class=\"section-note\">仅统计已保存的计算；不会自动识别实际销售或收款。</span>"
    ],
  "La dépense ne peut pas être enregistrée : stock de filament insuffisant ou bobine correspondante introuvable.": [
    "The expense cannot be saved: insufficient filament stock or matching spool not found.",
    "La dépense ne peut pas être enregistrée : stock de filament insuffisant ou bobine correspondante introuvable.",
    "Die Ausgabe kann nicht gespeichert werden: Filamentbestand reicht nicht aus oder passende Spule wurde nicht gefunden.",
    "Impossibile salvare la spesa: scorte di filamento insufficienti o bobina corrispondente non trovata.",
    "Nie można zapisać kosztu: za mało filamentu w magazynie lub nie znaleziono odpowiedniej szpuli.",
    "تعذر تسجيل المصروف: مخزون الخيوط غير كافٍ أو لم يتم العثور على بكرة الخيط المناسبة.",
    "无法登记支出：耗材库存不足，或找不到对应的线轴。"
    ],
  "La dépense propre a été enregistrée et ce filament a été déduit du stock.": [
    "Personal expense recorded and this filament has been deducted from stock.",
    "Dépense personnelle enregistrée et filament déduit du stock.",
    "Eigene Ausgabe gespeichert und dieses Filament vom Bestand abgezogen.",
    "Spesa personale registrata e filamento detratto dalle scorte.",
    "Zapisano koszt własny i odjęto ten filament ze stanu magazynowego.",
    "تم تسجيل المصروف الشخصي وخصم هذا الخيط من المخزون.",
    "个人支出已登记，并已从库存中扣除此耗材。"
    ],
  "Filament restitué au stock": [
    "Filament returned to stock",
    "Filament remis en stock",
    "Filament wieder dem Bestand hinzugefügt",
    "Filamento restituito alle scorte",
    "Filament zwrócono do magazynu",
    "تمت إعادة الخيط إلى المخزون",
    "耗材已退回库存"
    ],
  "Filament zwrócono do magazynu": [
    "Filament returned to stock",
    "Filament remis en stock",
    "Filament wieder dem Bestand hinzugefügt",
    "Filamento restituito alle scorte",
    "Filament zwrócono do magazynu",
    "تمت إعادة الخيوط إلى المخزون",
    "耗材已退回库存"
    ],
  "La búsqueda no ha podido completarse: ": [
    "The search could not be completed: ",
    "La recherche n’a pas pu aboutir : ",
    "Die Suche konnte nicht abgeschlossen werden: ",
    "Impossibile completare la ricerca: ",
    "Nie udało się zakończyć wyszukiwania: ",
    "تعذر إكمال البحث: ",
    "搜索未能完成："
    ],
  "Probando conexión con el puente local…": [
    "Testing connection to the local bridge…",
    "Test de la connexion au pont local…",
    "Verbindung zur lokalen Bridge wird getestet…",
    "Verifica della connessione al bridge locale…",
    "Testowanie połączenia z lokalnym mostem…",
    "جارٍ اختبار الاتصال بالجسر المحلي…",
    "正在测试与本地桥接服务的连接……"
    ],
  "Se ha cambiado de impresora. Esperando el estado actualizado; no se aplicará ningún descuento hasta confirmar el trabajo.": [
    "Printer changed. Waiting for updated status; no stock deduction will be applied until the job is confirmed.",
    "Imprimante modifiée. En attente de l’état mis à jour ; aucun stock ne sera déduit avant confirmation du travail.",
    "Drucker geändert. Warten auf den aktualisierten Status; der Bestand wird erst nach Bestätigung des Auftrags abgezogen.",
    "Stampante cambiata. In attesa dello stato aggiornato; non verrà detratta alcuna scorta finché il lavoro non sarà confermato.",
    "Zmieniono drukarkę. Oczekiwanie na aktualny stan; materiał nie zostanie odjęty od magazynu przed potwierdzeniem zadania.",
    "تم تغيير الطابعة. بانتظار تحديث الحالة؛ لن يتم خصم أي كمية حتى تأكيد المهمة.",
    "打印机已更改。正在等待状态更新；确认任务前不会扣减任何耗材。"
    ],
  "Falló la lectura completa del G-code": [
    "Full G-code read failed",
    "La lecture complète du G-code a échoué",
    "Das vollständige Einlesen des G-Codes ist fehlgeschlagen",
    "Lettura completa del G-code non riuscita",
    "Pełny odczyt G-code nie powiódł się",
    "فشلت قراءة ملف G-code بالكامل",
    "完整读取 G-code 失败"
    ],
  "El puente devolvió un archivo distinto del activo": [
    "The bridge returned a different file from the active one",
    "Le pont a renvoyé un fichier différent du fichier actif",
    "Die Bridge hat eine andere Datei als die aktive zurückgegeben",
    "Il bridge ha restituito un file diverso da quello attivo",
    "Mostek zwrócił plik inny niż aktywny",
    "أعاد الجسر ملفًا مختلفًا عن الملف النشط",
    "桥接服务返回的文件与当前活动文件不同"
    ],
  "Consumo leído del G-code activo: ": [
    "Usage read from active G-code: ",
    "Consommation lue dans le G-code actif : ",
    "Verbrauch aus aktivem G-Code gelesen: ",
    "Consumo letto dal G-code attivo: ",
    "Zużycie odczytane z aktywnego G-code: ",
    "الاستهلاك المقروء من ملف G-code النشط: ",
    "从活动 G-code 读取的用量："
    ],
  "La impresión terminó": [
    "The print finished",
    "L’impression est terminée",
    "Der Druck ist abgeschlossen",
    "La stampa è terminata",
    "Drukowanie zakończono",
    "انتهت الطباعة",
    "打印已完成"
    ],
  " · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.": [
    " · Check that the local bridge is running and responds at http://127.0.0.1:8700/.",
    " · Vérifiez que le pont local est démarré et répond à l’adresse http://127.0.0.1:8700/.",
    " · Prüfen Sie, ob die lokale Bridge läuft und unter http://127.0.0.1:8700/ antwortet.",
    " · Verifica che il bridge locale sia avviato e risponda su http://127.0.0.1:8700/.",
    " · Sprawdź, czy lokalny mostek jest uruchomiony i odpowiada pod adresem http://127.0.0.1:8700/.",
    " · تحقق من تشغيل الجسر المحلي واستجابته على http://127.0.0.1:8700/.",
    " · 请确认本地桥接服务已启动，并可通过 http://127.0.0.1:8700/ 响应。"
    ],
  "No se pudo conectar. Comprueba que el puente esté iniciado, la dirección sea correcta y que el navegador permita la conexión. Detalle: ": [
    "Could not connect. Check that the bridge is running, the address is correct and the browser allows the connection. Details: ",
    "Connexion impossible. Vérifiez que le pont est démarré, que l’adresse est correcte et que le navigateur autorise la connexion. Détail : ",
    "Verbindung fehlgeschlagen. Prüfen Sie, ob die Bridge läuft, die Adresse korrekt ist und der Browser die Verbindung zulässt. Details: ",
    "Impossibile connettersi. Verifica che il bridge sia avviato, l’indirizzo sia corretto e il browser consenta la connessione. Dettagli: ",
    "Nie udało się połączyć. Sprawdź, czy mostek jest uruchomiony, adres jest prawidłowy, a przeglądarka zezwala na połączenie. Szczegóły: ",
    "تعذر الاتصال. تحقق من تشغيل الجسر وصحة العنوان والسماح بالاتصال من المتصفح. التفاصيل: ",
    "无法连接。请检查桥接服务是否已启动、地址是否正确，以及浏览器是否允许连接。详情："
    ],
  "No se pudo consultar la gestión de copias: {message}. Comprueba que el servidor local esté iniciado.": [
    "Could not check backup management: {message}. Make sure the local server is running.",
    "Impossible de consulter la gestion des sauvegardes : {message}. Vérifiez que le serveur local est démarré.",
    "Die Sicherungsverwaltung konnte nicht abgefragt werden: {message}. Prüfen Sie, ob der lokale Server läuft.",
    "Impossibile consultare la gestione dei backup: {message}. Verifica che il server locale sia avviato.",
    "Nie udało się sprawdzić zarządzania kopiami: {message}. Sprawdź, czy lokalny serwer jest uruchomiony.",
    "تعذر الاستعلام عن إدارة النسخ الاحتياطية: {message}. تحقق من تشغيل الخادم المحلي.",
    "无法查询备份管理：{message}。请检查本地服务器是否已启动。"
    ],
  "La copia de protección previa, si llegó a crearse, se conserva.": [
    "The previous safety backup, if created, is retained.",
    "La copie de sécurité précédente, si elle a été créée, est conservée.",
    "Die vorherige Sicherung bleibt erhalten, sofern sie erstellt wurde.",
    "La copia di sicurezza precedente, se creata, viene conservata.",
    "Poprzednia kopia zabezpieczająca, jeśli została utworzona, zostaje zachowana.",
    "سيتم الاحتفاظ بنسخة الحماية السابقة إذا تم إنشاؤها.",
    "如果已创建先前的保护备份，将予以保留。"
    ],
  "Print Cost & Profit · Versión 1.480": [
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Versione 1.480",
    "Print Cost & Profit · Wersja 1.480",
    "Print Cost & Profit · الإصدار 1.480",
    "Print Cost & Profit · 版本 1.480"
    ],
  "Filamento genérico": [
    "Generic filament",
    "Filament générique",
    "Generisches Filament",
    "Filamento generico",
    "Filament ogólny",
    "خيط عام",
    "通用耗材"
    ],
  "snapmaker orca · integración local": [
    "snapmaker orca · local integration",
    "snapmaker orca · intégration locale",
    "snapmaker orca · lokale Integration",
    "snapmaker orca · integrazione locale",
    "snapmaker orca · integracja lokalna",
    "Snapmaker Orca · تكامل محلي",
    "Snapmaker Orca · 本地集成"
    ],
  "Si tienes cualquier duda, estaré encantada de ayudarte.": [
    "If you have any questions, I’ll be happy to help.",
    "Si vous avez la moindre question, je serai ravie de vous aider.",
    "Wenn Sie Fragen haben, helfe ich Ihnen gerne weiter.",
    "Se hai dubbi, sarò felice di aiutarti.",
    "Jeśli masz pytania, chętnie pomogę.",
    "إذا كانت لديك أي أسئلة، فسيسعدني تقديم المساعدة.",
    "如有任何疑问，我很乐意为你提供帮助。"
    ],
  "¡Muchas gracias por confiar en mí! 🙌": [
    "Thank you so much for trusting me! 🙌",
    "Merci beaucoup de votre confiance ! 🙌",
    "Vielen Dank für Ihr Vertrauen! 🙌",
    "Grazie mille per la fiducia! 🙌",
    "Bardzo dziękuję za zaufanie! 🙌",
    "شكرًا جزيلًا لثقتك بي! 🙌",
    "非常感谢你的信任！🙌"
    ],
  "Después, cuando se abra el destinatario, adjunta el PDF manualmente al mensaje. El documento todavía no se ha descargado.": [
    "Then, when the recipient opens, attach the PDF to the message manually. The document has not been downloaded yet.",
    "Ensuite, lorsque le destinataire s’ouvre, joignez manuellement le PDF au message. Le document n’a pas encore été téléchargé.",
    "Wenn sich anschließend der Empfänger öffnet, hängen Sie das PDF manuell an die Nachricht an. Das Dokument wurde noch nicht heruntergeladen.",
    "Poi, quando si apre il destinatario, allega manualmente il PDF al messaggio. Il documento non è ancora stato scaricato.",
    "Następnie, gdy otworzy się odbiorca, ręcznie dołącz plik PDF do wiadomości. Dokument nie został jeszcze pobrany.",
    "بعد فتح جهة الاتصال، أرفق ملف PDF يدويًا بالرسالة. لم يتم تنزيل المستند بعد.",
    "打开收件人后，请手动将 PDF 附加到消息中。该文档尚未下载。"
    ],
  "Amortización (": [
    "Depreciation (",
    "Amortissement (",
    "Abschreibung (",
    "Ammortamento (",
    "Amortyzacja (",
    "الإهلاك (",
    "折旧（"
    ],
  "📄 Todavía no hay facturas guardadas": [
    "📄 No invoices saved yet",
    "📄 Aucune facture enregistrée pour le moment",
    "📄 Noch keine Rechnungen gespeichert",
    "📄 Nessuna fattura salvata",
    "📄 Nie zapisano jeszcze żadnych faktur",
    "📄 لا توجد فواتير محفوظة حتى الآن",
    "📄 尚无已保存的发票"
    ],
  "Conexión correcta (HTTP ": [
    "Connection successful (HTTP ",
    "Connexion réussie (HTTP ",
    "Verbindung erfolgreich (HTTP ",
    "Connessione riuscita (HTTP ",
    "Połączenie działa (HTTP ",
    "تم الاتصال بنجاح (HTTP ",
    "连接成功（HTTP "
    ],
  "El puente respondió HTTP ": [
    "The bridge responded with HTTP ",
    "Le pont a répondu HTTP ",
    "Die Bridge antwortete mit HTTP ",
    "Il bridge ha risposto HTTP ",
    "Mostek odpowiedział kodem HTTP ",
    "استجاب الجسر برمز HTTP ",
    "桥接服务返回 HTTP "
    ],
  ". Verifica que el puente esté iniciado y la IP configurada.": [
    ". Make sure the bridge is running and the IP is configured.",
    ". Vérifiez que le pont est démarré et que l’adresse IP est configurée.",
    ". Prüfen Sie, ob die Bridge läuft und die IP konfiguriert ist.",
    ". Verifica che il bridge sia avviato e che l’IP sia configurato.",
    ". Sprawdź, czy mostek jest uruchomiony i skonfigurowano adres IP.",
    ". تحقق من تشغيل الجسر وضبط عنوان IP。",
    "。请确认桥接服务已启动且 IP 地址配置正确。"
    ],
  "No se encontró la impresora.": [
    "Printer not found.",
    "Imprimante introuvable.",
    "Drucker nicht gefunden.",
    "Stampante non trovata.",
    "Nie znaleziono drukarki.",
    "لم يتم العثور على الطابعة.",
    "未找到打印机。"
    ],
  "Puedes escribir su IP manualmente.": [
    "You can enter its IP address manually.",
    "Vous pouvez saisir son adresse IP manuellement.",
    "Sie können die IP-Adresse manuell eingeben.",
    "Puoi inserire manualmente il suo indirizzo IP.",
    "Możesz ręcznie wpisać jej adres IP.",
    "يمكنك إدخال عنوان IP الخاص بها يدويًا.",
    "你可以手动输入其 IP 地址。"
    ],
  "Conectando con la impresora…": [
    "Connecting to the printer…",
    "Connexion à l’imprimante…",
    "Verbindung zum Drucker wird hergestellt…",
    "Connessione alla stampante…",
    "Łączenie z drukarką…",
    "جارٍ الاتصال بالطابعة…",
    "正在连接打印机……"
    ],
  "Buscando impresoras guardadas…": [
    "Searching saved printers…",
    "Recherche des imprimantes enregistrées…",
    "Gespeicherte Drucker werden gesucht…",
    "Ricerca delle stampanti salvate…",
    "Wyszukiwanie zapisanych drukarek…",
    "جارٍ البحث عن الطابعات المحفوظة…",
    "正在搜索已保存的打印机……"
    ],
  "No hay impresoras guardadas.": [
    "No saved printers.",
    "Aucune imprimante enregistrée.",
    "Keine gespeicherten Drucker.",
    "Nessuna stampante salvata.",
    "Brak zapisanych drukarek.",
    "لا توجد طابعات محفوظة.",
    "没有已保存的打印机。"
    ],
  "Conexión correcta. La impresora responde.": [
    "Connection successful. The printer is responding.",
    "Connexion réussie. L’imprimante répond.",
    "Verbindung erfolgreich. Der Drucker antwortet.",
    "Connessione riuscita. La stampante risponde.",
    "Połączenie działa poprawnie. Drukarka odpowiada.",
    "تم الاتصال بنجاح. الطابعة تستجيب.",
    "连接成功。打印机正在响应。"
    ],
  "No se pudo probar la conexión.": [
    "Could not test the connection.",
    "Impossible de tester la connexion.",
    "Die Verbindung konnte nicht getestet werden.",
    "Impossibile verificare la connessione.",
    "Nie udało się przetestować połączenia.",
    "تعذر اختبار الاتصال.",
    "无法测试连接。"
    ],
  "Comprobando dirección IP…": [
    "Checking IP address…",
    "Vérification de l’adresse IP…",
    "IP-Adresse wird überprüft…",
    "Verifica dell’indirizzo IP…",
    "Sprawdzanie adresu IP…",
    "جارٍ التحقق من عنوان IP…",
    "正在检查 IP 地址……"
    ],
  "Introduce una dirección IPv4 válida.": [
    "Enter a valid IPv4 address.",
    "Saisissez une adresse IPv4 valide.",
    "Geben Sie eine gültige IPv4-Adresse ein.",
    "Inserisci un indirizzo IPv4 valido.",
    "Wprowadź prawidłowy adres IPv4.",
    "أدخل عنوان IPv4 صالحًا.",
    "请输入有效的 IPv4 地址。"
    ],
  "La dirección IP se ha guardado.": [
    "The IP address has been saved.",
    "L’adresse IP a été enregistrée.",
    "Die IP-Adresse wurde gespeichert.",
    "L’indirizzo IP è stato salvato.",
    "Adres IP został zapisany.",
    "تم حفظ عنوان IP.",
    "IP 地址已保存。"
    ],
  "No se pudo guardar la dirección IP.": [
    "Could not save the IP address.",
    "Impossible d’enregistrer l’adresse IP.",
    "Die IP-Adresse konnte nicht gespeichert werden.",
    "Impossibile salvare l’indirizzo IP.",
    "Nie udało się zapisać adresu IP.",
    "تعذر حفظ عنوان IP.",
    "无法保存 IP 地址。"
    ],
  "Esperando datos de la impresora…": [
    "Waiting for printer data…",
    "En attente des données de l’imprimante…",
    "Warten auf Druckerdaten…",
    "In attesa dei dati della stampante…",
    "Oczekiwanie na dane drukarki…",
    "بانتظار بيانات الطابعة…",
    "正在等待打印机数据……"
    ],
  "Total previsto: —": [
    "Estimated total: —",
    "Total prévu : —",
    "Voraussichtliche Summe: —",
    "Totale previsto: —",
    "Przewidywana suma: —",
    "الإجمالي المتوقع: —",
    "预计总量：—"
    ],
  "La selección se guardará para el descuento al finalizar; el inventario no cambia ahora.": [
    "The selection will be saved for deduction when the print finishes; inventory will not change now.",
    "La sélection sera enregistrée pour le prélèvement à la fin ; le stock ne change pas pour le moment.",
    "Die Auswahl wird für den Abzug nach Druckende gespeichert; der Bestand ändert sich jetzt nicht.",
    "La selezione verrà salvata per lo scarico a fine stampa; l’inventario non cambia ora.",
    "Wybór zostanie zapisany do rozliczenia po zakończeniu druku; stan magazynowy teraz się nie zmieni.",
    "سيتم حفظ الاختيار لخصم الكمية عند الانتهاء؛ لن يتغير المخزون الآن.",
    "所选线轴将在打印完成时用于扣减；当前库存不会改变。"
    ],
  "Impresora desconectada": [
    "Printer disconnected",
    "Imprimante déconnectée",
    "Drucker getrennt",
    "Stampante disconnessa",
    "Drukarka rozłączona",
    "الطابعة غير متصلة",
    "打印机已断开连接"
    ],
  "Estado de la impresora desconocido": [
    "Printer status unknown",
    "État de l’imprimante inconnu",
    "Druckerstatus unbekannt",
    "Stato della stampante sconosciuto",
    "Nieznany stan drukarki",
    "حالة الطابعة غير معروفة",
    "打印机状态未知"
    ],
  "No se pudo leer el G-code activo de la U1.": [
    "Could not read the active U1 G-code.",
    "Impossible de lire le G-code actif de la U1.",
    "Der aktive G-Code der U1 konnte nicht gelesen werden.",
    "Impossibile leggere il G-code attivo della U1.",
    "Nie udało się odczytać aktywnego pliku G-code drukarki U1.",
    "تعذرت قراءة ملف G-code النشط في U1.",
    "无法读取 U1 当前活动的 G-code。"
    ],
  "No se descontará filamento hasta confirmar el trabajo.": [
    "Filament will not be deducted until the job is confirmed.",
    "Aucun filament ne sera déduit avant la confirmation du travail.",
    "Filament wird erst nach Bestätigung des Auftrags abgezogen.",
    "Il filamento non verrà scalato finché il lavoro non sarà confermato.",
    "Filament nie zostanie odjęty, dopóki zadanie nie zostanie potwierdzone.",
    "لن يتم خصم الخيوط حتى تأكيد المهمة.",
    "确认任务前不会扣减耗材。"
    ],
  "Puente no disponible: {message} · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.": [
    "Bridge unavailable: {message} · Make sure the local bridge is running and responds at http://127.0.0.1:8700/.",
    "Pont indisponible : {message} · Vérifiez que le pont local est démarré et répond à http://127.0.0.1:8700/.",
    "Bridge nicht verfügbar: {message} · Prüfen Sie, ob die lokale Bridge läuft und unter http://127.0.0.1:8700/ antwortet.",
    "Bridge non disponibile: {message} · Verifica che il bridge locale sia avviato e risponda su http://127.0.0.1:8700/.",
    "Mostek jest niedostępny: {message} · Sprawdź, czy lokalny mostek działa i odpowiada pod adresem http://127.0.0.1:8700/.",
    "الجسر غير متاح: {message} · تحقق من تشغيل الجسر المحلي واستجابته على http://127.0.0.1:8700/.",
    "桥接服务不可用：{message} · 请确认本地桥接服务已启动，并可通过 http://127.0.0.1:8700/ 响应。"
    ],
  "Preparando lectura completa del G-code… {progress}%": [
    "Preparing full G-code read… {progress}%",
    "Préparation de la lecture complète du G-code… {progress} %",
    "Vollständiges Einlesen des G-Codes wird vorbereitet… {progress} %",
    "Preparazione della lettura completa del G-code… {progress}%",
    "Przygotowywanie pełnego odczytu G-code… {progress}%",
    "جارٍ تجهيز القراءة الكاملة لملف G-code… {progress}%",
    "正在准备完整读取 G-code……{progress}%"
    ],
  "Selecciona impresora": [
    "Select printer",
    "Sélectionner une imprimante",
    "Drucker auswählen",
    "Seleziona stampante",
    "Wybierz drukarkę",
    "اختر الطابعة",
    "选择打印机"
    ],
  "No hay impresoras detectadas": [
    "No printers detected",
    "Aucune imprimante détectée",
    "Keine Drucker erkannt",
    "Nessuna stampante rilevata",
    "Nie wykryto drukarek",
    "لم يتم اكتشاف أي طابعات",
    "未检测到打印机"
    ],
  "Gasto pedido": [
    "Order expense",
    "Dépense de commande",
    "Bestellausgabe",
    "Spesa dell’ordine",
    "Koszt zamówienia",
    "مصروف الطلب",
    "订单支出"
    ],
  "Ingreso cobrado": [
    "Collected income",
    "Revenu encaissé",
    "Eingenommener Betrag",
    "Entrata incassata",
    "Otrzymany przychód",
    "الإيراد المحصّل",
    "已收收入"
    ],
  "Personal": [
    "Personal",
    "Personnel",
    "Persönlich",
    "Personale",
    "Osobiste",
    "شخصي",
    "个人"
    ],
  "Pedido de venta": [
    "Sales order",
    "Commande de vente",
    "Verkaufsauftrag",
    "Ordine di vendita",
    "Zamówienie sprzedaży",
    "طلب بيع",
    "销售订单"
    ],
  "Impresión en curso": [
    "Print in progress",
    "Impression en cours",
    "Druck läuft",
    "Stampa in corso",
    "Drukowanie w toku",
    "الطباعة جارية",
    "正在打印"
    ],
  "Comisión estimada": [
    "Estimated commission",
    "Commission estimée",
    "Geschätzte Provision",
    "Commissione stimata",
    "Szacowana prowizja",
    "العمولة المقدّرة",
    "预计佣金"
    ],
  "Tiempo usado": [
    "Time used",
    "Temps utilisé",
    "Verwendete Zeit",
    "Tempo utilizzato",
    "Wykorzystany czas",
    "الوقت المستخدم",
    "已用时间"
    ],
  "Desglose": [
    "Breakdown",
    "Détail",
    "Aufschlüsselung",
    "Dettaglio",
    "Zestawienie",
    "التفصيل",
    "明细"
    ],
  "Comisión del punto 04": [
    "Point 04 commission",
    "Commission du point 04",
    "Provision für Punkt 04",
    "Commissione del punto 04",
    "Prowizja punktu 04",
    "عمولة القسم 04",
    "第 04 项佣金"
    ],
  "sobre": [
    "on",
    "sur",
    "auf",
    "su",
    "od",
    "على",
    "基于"
    ],
  "cobrado estimado": [
    "estimated amount charged",
    "montant estimé encaissé",
    "geschätzter Zahlungseingang",
    "incasso stimato",
    "szacowana kwota pobrana",
    "المبلغ المقدّر تحصيله",
    "预计收款金额"
    ],
  "Editar movimiento contable": [
    "Edit accounting entry",
    "Modifier l’écriture comptable",
    "Buchung bearbeiten",
    "Modifica movimento contabile",
    "Edytuj wpis księgowy",
    "تعديل حركة محاسبية",
    "编辑会计记录"
    ],
  "El detalle de referencia se conserva.": [
    "The reference details will be preserved.",
    "Les détails de référence seront conservés.",
    "Die Referenzdetails bleiben erhalten.",
    "I dettagli di riferimento verranno conservati.",
    "Szczegóły odniesienia zostaną zachowane.",
    "سيتم الاحتفاظ بتفاصيل المرجع.",
    "参考详情将予以保留。"
    ],
  "Revisa los valores del movimiento.": [
    "Check the entry values.",
    "Vérifiez les valeurs de l’écriture.",
    "Überprüfen Sie die Buchungswerte.",
    "Controlla i valori del movimento.",
    "Sprawdź wartości wpisu.",
    "راجع قيم الحركة.",
    "请检查此记录的数值。"
    ],
  "Resumen por impresora": [
    "Printer summary",
    "Résumé par imprimante",
    "Zusammenfassung nach Drucker",
    "Riepilogo per stampante",
    "Podsumowanie według drukarki",
    "ملخص حسب الطابعة",
    "按打印机汇总"
    ],
  "Resumen económico": [
    "Financial summary",
    "Résumé financier",
    "Finanzübersicht",
    "Riepilogo economico",
    "Podsumowanie finansowe",
    "الملخص المالي",
    "财务摘要"
    ],
  "Ver detalle": [
    "View details",
    "Voir le détail",
    "Details anzeigen",
    "Visualizza dettagli",
    "Zobacz szczegóły",
    "عرض التفاصيل",
    "查看详情"
    ],
  "Total de gastos": [
    "Total expenses",
    "Total des dépenses",
    "Gesamtausgaben",
    "Totale spese",
    "Łączne wydatki",
    "إجمالي المصروفات",
    "支出总额"
    ],
  "Documento importado": [
    "Imported document",
    "Document importé",
    "Importiertes Dokument",
    "Documento importato",
    "Zaimportowany dokument",
    "مستند مستورد",
    "已导入单据"
    ],
  "Elige un documento guardado.": [
    "Choose a saved document.",
    "Choisissez un document enregistré.",
    "Wählen Sie ein gespeichertes Dokument aus.",
    "Scegli un documento salvato.",
    "Wybierz zapisany dokument.",
    "اختر مستندًا محفوظًا.",
    "请选择已保存的单据。"
    ],
  "No registra ventas, IVA ni beneficios.": [
    "It does not record sales, VAT, or profit.",
    "Aucune vente, TVA ni aucun bénéfice ne sont enregistrés.",
    "Es werden keine Verkäufe, Mehrwertsteuer oder Gewinne erfasst.",
    "Non registra vendite, IVA né profitti.",
    "Nie rejestruje sprzedaży, VAT ani zysku.",
    "لا يتضمن مبيعات أو ضريبة قيمة مضافة أو أرباحًا.",
    "不记录销售额、增值税或利润。"
    ],
  "Punto 04: precio introducido {entered}; objetivo {margin}% o mínimo {minimum}; precio base aplicado {applied}; venta base total {net}; impuesto {tax} ({rate}%); total al cliente {gross}; comisión {commission}; beneficio estimado {profit}.": [
    "Point 04: entered price {entered}; target {margin}% or minimum {minimum}; applied base price {applied}; total net sales {net}; tax {tax} ({rate}%); customer total {gross}; commission {commission}; estimated profit {profit}.",
    "Point 04 : prix saisi {entered} ; objectif {margin} % ou minimum {minimum} ; prix de base appliqué {applied} ; total des ventes HT {net} ; taxe {tax} ({rate} %) ; total client {gross} ; commission {commission} ; bénéfice estimé {profit}.",
    "Punkt 04: eingegebener Preis {entered}; Ziel {margin}% oder Mindestwert {minimum}; angewendeter Nettopreis {applied}; Nettoumsatz gesamt {net}; Steuer {tax} ({rate}%); Kundensumme {gross}; Provision {commission}; geschätzter Gewinn {profit}.",
    "Punto 04: prezzo inserito {entered}; obiettivo {margin}% o minimo {minimum}; prezzo base applicato {applied}; totale vendite netto {net}; imposta {tax} ({rate}%); totale cliente {gross}; commissione {commission}; profitto stimato {profit}.",
    "Punkt 04: wprowadzona cena {entered}; cel {margin}% lub minimum {minimum}; zastosowana cena podstawowa {applied}; łączna sprzedaż netto {net}; podatek {tax} ({rate}%); suma dla klienta {gross}; prowizja {commission}; szacowany zysk {profit}.",
    "النقطة 04: السعر المُدخل {entered}؛ الهدف {margin}% أو الحد الأدنى {minimum}؛ السعر الأساسي المطبق {applied}؛ إجمالي البيع الأساسي {net}؛ الضريبة {tax} ({rate}%)؛ الإجمالي للعميل {gross}؛ العمولة {commission}؛ الربح المقدّر {profit}.",
    "第 04 项：输入价格 {entered}；目标 {margin}% 或最低值 {minimum}；应用的基础价格 {applied}；基础销售总额 {net}；税额 {tax}（{rate}%）；客户应付总额 {gross}；佣金 {commission}；预计利润 {profit}。"
    ],
  "Está marcada como provisional; revísala cuando termine la impresión.": [
    "It is marked as provisional; review it when printing finishes.",
    "Elle est marquée comme provisoire ; vérifiez-la à la fin de l’impression.",
    "Sie ist als vorläufig markiert; überprüfen Sie sie nach Druckende.",
    "È contrassegnata come provvisoria; controllala al termine della stampa.",
    "Oznaczono ją jako tymczasową; sprawdź ją po zakończeniu drukowania.",
    "تم وضع علامة مؤقت عليها؛ راجعها عند انتهاء الطباعة.",
    "该记录已标记为临时记录；打印完成后请检查。"
    ],
  "No se pudo consultar la gestión de copias: {message}. Comprueba que el servidor local está iniciado.": [
    "Could not query backup management: {message}. Make sure the local server is running.",
    "Impossible de consulter la gestion des sauvegardes : {message}. Vérifiez que le serveur local est démarré.",
    "Sicherungsverwaltung konnte nicht abgefragt werden: {message}. Prüfen Sie, ob der lokale Server läuft.",
    "Impossibile consultare la gestione dei backup: {message}. Verifica che il server locale sia avviato.",
    "Nie udało się sprawdzić zarządzania kopiami zapasowymi: {message}. Sprawdź, czy serwer lokalny jest uruchomiony.",
    "تعذر الاستعلام عن إدارة النسخ الاحتياطية: {message}. تحقق من تشغيل الخادم المحلي.",
    "无法查询备份管理：{message}。请确认本地服务器已启动。"
    ],
  "No se puede guardar el gasto: falta stock de filamento o no se encuentra la bobina correspondiente.": [
    "The expense cannot be saved: filament stock is insufficient or the matching spool could not be found.",
    "Impossible d’enregistrer la dépense : le stock de filament est insuffisant ou la bobine correspondante est introuvable.",
    "Die Ausgabe kann nicht gespeichert werden: Der Filamentbestand reicht nicht aus oder die passende Spule wurde nicht gefunden.",
    "Impossibile salvare la spesa: il filamento disponibile è insufficiente oppure non è stata trovata la bobina corrispondente.",
    "Nie można zapisać wydatku: zapas filamentu jest niewystarczający lub nie znaleziono odpowiedniej szpuli.",
    "لا يمكن حفظ المصروف: مخزون الخيوط غير كافٍ أو لم يتم العثور على بكرة الخيط المناسبة.",
    "无法保存支出：耗材库存不足，或找不到对应的线轴。"
    ],
  "Se ha eliminado el movimiento y se ha recuperado el filamento de estas bobinas:": [
    "The entry was deleted and filament was returned from these spools:",
    "L’écriture a été supprimée et le filament a été restitué depuis ces bobines :",
    "Der Eintrag wurde gelöscht und Filament von diesen Spulen wurde zurückgebucht:",
    "Il movimento è stato eliminato e il filamento è stato recuperato da queste bobine:",
    "Usunięto wpis i przywrócono filament z następujących szpul:",
    "تم حذف الحركة واستعادة الخيط من هذه البكرات:",
    "该笔记录已删除，并已将耗材退回以下线轴："
    ],
  "Total de todas las impresoras": [
    "Total for all printers",
    "Total de toutes les imprimantes",
    "Gesamtsumme aller Drucker",
    "Totale di tutte le stampanti",
    "Łącznie dla wszystkich drukarek",
    "إجمالي جميع الطابعات",
    "所有打印机总计"
    ],
  "Sin impresora asignada": [
    "No printer assigned",
    "Aucune imprimante attribuée",
    "Kein Drucker zugewiesen",
    "Nessuna stampante assegnata",
    "Nie przypisano drukarki",
    "دون طابعة مخصصة",
    "未分配打印机"
    ],
  "Desglose de gastos propios": [
    "Personal expenses breakdown",
    "Détail des dépenses personnelles",
    "Aufschlüsselung eigener Ausgaben",
    "Dettaglio delle spese personali",
    "Zestawienie własnych wydatków",
    "تفصيل المصروفات الشخصية",
    "个人支出明细"
    ],
  "Gastos sin desglose guardado": [
    "Expenses without a saved breakdown",
    "Dépenses sans détail enregistré",
    "Ausgaben ohne gespeicherte Aufschlüsselung",
    "Spese senza dettaglio salvato",
    "Wydatki bez zapisanego zestawienia",
    "مصروفات دون تفاصيل محفوظة",
    "未保存明细的支出"
    ],
  "Total de gastos propios": [
    "Total personal expenses",
    "Total des dépenses personnelles",
    "Gesamtsumme eigener Ausgaben",
    "Totale delle spese personali",
    "Łączne wydatki własne",
    "إجمالي المصروفات الشخصية",
    "个人支出总额"
    ],
  "Desglose no guardado en este registro": [
    "No breakdown saved for this entry",
    "Aucun détail enregistré pour cette écriture",
    "Für diesen Eintrag wurde keine Aufschlüsselung gespeichert",
    "Nessun dettaglio salvato per questa registrazione",
    "Brak zestawienia zapisanego dla tego wpisu",
    "لم يتم حفظ التفاصيل في هذا السجل",
    "此记录未保存明细"
    ],
  "No hay gastos propios registrados para esta impresora.": [
    "No own expenses are recorded for this printer.",
    "Aucune dépense personnelle n’est enregistrée pour cette imprimante.",
    "Für diesen Drucker sind keine eigenen Ausgaben erfasst.",
    "Non sono registrate spese proprie per questa stampante.",
    "Brak zarejestrowanych wydatków własnych dla tej drukarki.",
    "لا توجد مصروفات شخصية مسجلة لهذه الطابعة.",
    "此打印机没有登记个人支出。"
    ],
  "Resumen de costes": [
    "Cost summary",
    "Récapitulatif des coûts",
    "Kostenübersicht",
    "Riepilogo dei costi",
    "Podsumowanie kosztów",
    "ملخص التكاليف",
    "成本摘要"
    ],
  "No se pudo guardar el gasto": [
    "Could not save the expense",
    "Impossible d’enregistrer la dépense",
    "Die Ausgabe konnte nicht gespeichert werden",
    "Impossibile salvare la spesa",
    "Nie udało się zapisać wydatku",
    "تعذر حفظ المصروف",
    "无法保存支出"
    ],
  "Impresora seleccionada ·": [
    "Selected printer ·",
    "Imprimante sélectionnée ·",
    "Ausgewählter Drucker ·",
    "Stampante selezionata ·",
    "Wybrana drukarka ·",
    "الطابعة المحددة ·",
    "已选择打印机 ·"
    ],
  "La lectura del G-code supera los 15 minutos y se ha detenido la espera.": [
    "G-code reading exceeded 15 minutes; waiting has stopped.",
    "La lecture du G-code dépasse 15 minutes ; l’attente a été arrêtée.",
    "Das Einlesen des G-Codes überschritt 15 Minuten; das Warten wurde beendet.",
    "La lettura del G-code ha superato 15 minuti; l’attesa è stata interrotta.",
    "Odczyt G-code przekroczył 15 minut; oczekiwanie zostało zatrzymane.",
    "تجاوزت قراءة G-code مدة 15 دقيقة وتم إيقاف الانتظار.",
    "读取 G-code 超过 15 分钟，等待已停止。"
    ],
  "El G-code activo no contiene metadatos de filamento": [
    "The active G-code contains no filament metadata",
    "Le G-code actif ne contient pas de métadonnées de filament",
    "Der aktive G-Code enthält keine Filament-Metadaten",
    "Il G-code attivo non contiene metadati del filamento",
    "Aktywny G-code nie zawiera metadanych filamentu",
    "لا يحتوي ملف G-code النشط على بيانات وصفية للخيوط",
    "当前活动的 G-code 不包含耗材元数据"
    ],
  "No se descontó ninguna bobina: el stock combinado de las bobinas compatibles no cubre todo el consumo.": [
    "No spool was deducted: the combined stock of compatible spools does not cover total consumption.",
    "Aucune bobine n’a été débitée : le stock cumulé des bobines compatibles ne couvre pas toute la consommation.",
    "Keine Spule wurde abgebucht: Der Gesamtbestand kompatibler Spulen reicht für den gesamten Verbrauch nicht aus.",
    "Non è stata scaricata alcuna bobina: la scorta complessiva delle bobine compatibili non copre tutto il consumo.",
    "Nie odjęto materiału z żadnej szpuli: łączny zapas zgodnych szpul nie wystarcza na całe zużycie.",
    "لم يتم خصم أي بكرة: إجمالي مخزون البكرات المتوافقة لا يغطي الاستهلاك بالكامل.",
    "未扣减任何线轴：兼容线轴的库存总量不足以满足全部用量。"
    ],
  "Descuento aplicado (estimación del G-code):": [
    "Deduction applied (G-code estimate):",
    "Prélèvement appliqué (estimation du G-code) :",
    "Abzug angewendet (G-Code-Schätzung):",
    "Scarico applicato (stima G-code):",
    "Zastosowano odjęcie materiału (szacunek z G-code):",
    "تم تطبيق الخصم (تقدير G-code):",
    "已应用扣减（G-code 估算）："
    ],
  "· Se ha repartido el consumo entre bobinas compatibles cuando ha sido necesario.": [
    "· Consumption was split across compatible spools when necessary.",
    "· La consommation a été répartie entre les bobines compatibles si nécessaire.",
    "· Der Verbrauch wurde bei Bedarf auf kompatible Spulen verteilt.",
    "· Il consumo è stato ripartito tra bobine compatibili quando necessario.",
    "· W razie potrzeby zużycie rozdzielono między zgodne szpule.",
    "· تم توزيع الاستهلاك على بكرات متوافقة عند الحاجة.",
    "· 必要时已将耗材用量分配到兼容线轴。"
    ],
  "Este registro solo contabiliza el gasto. No añade ventas ni beneficio.": [
    "This entry records the expense only. It does not add sales or profit.",
    "Cette écriture comptabilise uniquement la dépense. Elle n’ajoute ni vente ni bénéfice.",
    "Dieser Eintrag erfasst nur die Ausgabe. Er fügt weder Umsatz noch Gewinn hinzu.",
    "Questa registrazione contabilizza solo la spesa. Non aggiunge vendite né profitto.",
    "Ten wpis rejestruje wyłącznie wydatek. Nie dodaje sprzedaży ani zysku.",
    "يسجل هذا القيد المصروف فقط. ولا يضيف مبيعات أو أرباحًا.",
    "此记录仅统计支出，不会增加销售额或利润。"
    ],
  "Introduce un importe válido igual o mayor que cero.": [
    "Enter a valid amount greater than or equal to zero.",
    "Saisissez un montant valide supérieur ou égal à zéro.",
    "Geben Sie einen gültigen Betrag größer oder gleich null ein.",
    "Inserisci un importo valido maggiore o uguale a zero.",
    "Wprowadź prawidłową kwotę większą lub równą zero.",
    "أدخل مبلغًا صالحًا يساوي صفرًا أو أكبر.", "请输入大于或等于零的有效金额。"
    ],
  "No se pudo registrar como personal:": [
    "Could not record as a personal print:",
    "Impossible d’enregistrer comme impression personnelle :",
    "Konnte nicht als persönlicher Druck erfasst werden:",
    "Impossibile registrare come stampa personale:",
    "Nie udało się zapisać jako wydruku prywatnego:",
    "تعذر تسجيله كمصروف شخصي:",
    "无法将其登记为个人支出："
    ],
  "No se pudo registrar como pedido:": [
    "Could not record as an order:",
    "Impossible d’enregistrer comme commande :",
    "Konnte nicht als Auftrag erfasst werden:",
    "Impossibile registrare come ordine:",
    "Nie udało się zapisać jako zamówienia:",
    "تعذر تسجيله كطلب:",
    "无法登记为订单："
    ],
  "Inventario: hay {stock} g · gastaría {used} g · quedarían {after} g.": [
    "Inventory: {stock} g available · {used} g would be used · {after} g would remain.",
    "Stock : {stock} g disponibles · {used} g seraient utilisés · {after} g resteraient.",
    "Bestand: {stock} g verfügbar · {used} g würden verbraucht · {after} g würden verbleiben.",
    "Inventario: {stock} g disponibili · verrebbero usati {used} g · resterebbero {after} g.",
    "Zapas: dostępne {stock} g · zużycie {used} g · pozostałoby {after} g.",
    "المخزون: المتوفر {stock} غ · الاستهلاك {used} غ · المتبقي {after} غ.",
    "库存：现有 {stock} 克 · 将使用 {used} 克 · 剩余 {after} 克。"
    ],
  "⚠ Stock insuficiente: hay {stock} g y se necesitan {used} g; faltarían {missing} g.": [
    "⚠ Insufficient stock: {stock} g available, {used} g required; {missing} g short.",
    "⚠ Stock insuffisant : {stock} g disponibles, {used} g nécessaires ; il manque {missing} g.",
    "⚠ Bestand unzureichend: {stock} g verfügbar, {used} g benötigt; es fehlen {missing} g.",
    "⚠ Scorta insufficiente: {stock} g disponibili, {used} g necessari; ne mancano {missing} g.",
    "⚠ Niewystarczający zapas: dostępne {stock} g, wymagane {used} g; brakuje {missing} g.",
    "⚠ المخزون غير كافٍ: المتوفر {stock} غ والمطلوب {used} غ؛ النقص {missing} غ.",
    "⚠ 库存不足：现有 {stock} 克，需要 {used} 克；还缺少 {missing} 克。"
    ],
  "Color aproximado (HEX inventario: {hex}); revisa la bobina antes de confirmar.": [
    "Approximate color (inventory HEX: {hex}); check the spool before confirming.",
    "Couleur approximative (HEX du stock : {hex}) ; vérifiez la bobine avant de confirmer.",
    "Ungefähre Farbe (Lager-HEX: {hex}); Spule vor der Bestätigung prüfen.",
    "Colore approssimativo (HEX inventario: {hex}); controlla la bobina prima di confermare.",
    "Kolor przybliżony (HEX w magazynie: {hex}); sprawdź szpulę przed zatwierdzeniem.",
    "اللون تقريبي (رمز HEX في المخزون: {hex})؛ تحقق من بكرة الخيط قبل التأكيد.",
    "颜色为近似值（库存 HEX：{hex}）；确认前请检查线轴。"
    ],
  "No se encontró una bobina compatible en inventario: {brand} {material} {color} ({hex}). Revisa marca, material y color.": [
    "No compatible spool found in inventory: {brand} {material} {color} ({hex}). Check brand, material, and color.",
    "Aucune bobine compatible trouvée : {brand} {material} {color} ({hex}). Vérifiez la marque, le matériau et la couleur.",
    "Keine passende Spule im Lager gefunden: {brand} {material} {color} ({hex}). Marke, Material und Farbe prüfen.",
    "Nessuna bobina compatibile in inventario: {brand} {material} {color} ({hex}). Controlla marca, materiale e colore.",
    "Nie znaleziono pasującej szpuli w magazynie: {brand} {material} {color} ({hex}). Sprawdź markę, materiał i kolor.",
    "لم يتم العثور على بكرة متوافقة في المخزون: {brand} {material} {color} ({hex}). راجع العلامة التجارية والمادة واللون.",
    "库存中未找到兼容线轴：{brand} {material} {color}（{hex}）。请检查品牌、材料和颜色。"
    ],
  "Amortización ({detail}) por hora": [
    "Depreciation ({detail}) per hour",
    "Amortissement ({detail}) par heure",
    "Abschreibung ({detail}) pro Stunde",
    "Ammortamento ({detail}) all’ora",
    "Amortyzacja ({detail}) na godzinę",
    "الإهلاك ({detail}) لكل ساعة",
    "每小时折旧（{detail}）"
    ],
  "Impresión personal": [
    "Personal print",
    "Impression personnelle",
    "Privater Druck",
    "Stampa personale",
    "Wydruk prywatny",
    "طباعة شخصية",
    "个人打印"
    ],
  "Desglose por impresión": [
    "Breakdown by print",
    "Détail par impression",
    "Aufschlüsselung nach Druck",
    "Dettaglio per stampa",
    "Podział według wydruku",
    "تفصيل كل عملية طباعة",
    "按打印任务列出的明细"
    ],
  "Detalle disponible": [
    "Details available",
    "Détails disponibles",
    "Details verfügbar",
    "Dettagli disponibili",
    "Dostępne szczegóły",
    "التفاصيل متاحة",
    "详情可用"
    ],
  "No hay movimientos que exportar.": [
    "There are no entries to export.",
    "Aucun mouvement à exporter.",
    "Keine Buchungen zum Exportieren vorhanden.",
    "Non ci sono movimenti da esportare.",
    "Brak wpisów do wyeksportowania.",
    "لا توجد حركات لتصديرها.",
    "没有可导出的记录。"
    ],
  "La ventana del informe fue bloqueada por el navegador.": [
    "The report window was blocked by the browser.",
    "La fenêtre du rapport a été bloquée par le navigateur.",
    "Das Berichtsfenster wurde vom Browser blockiert.",
    "La finestra del rapporto è stata bloccata dal browser.",
    "Przeglądarka zablokowała okno raportu.",
    "حظر المتصفح نافذة التقرير.",
    "浏览器阻止了报告窗口。"
    ],
  "¿Confirmar acción?": [
    "Confirm action?",
    "Confirmer l’action ?",
    "Aktion bestätigen?",
    "Confermare l’azione?",
    "Potwierdzić działanie?",
    "تأكيد الإجراء؟", "确认操作？"
    ],
  "Puente no disponible:": [
    "Bridge unavailable:",
    "Pont indisponible :",
    "Bridge nicht verfügbar:",
    "Bridge non disponibile:",
    "Mostek jest niedostępny:",
    "الجسر غير متاح:",
    "桥接服务不可用："
    ],
  "El trabajo figura como registrado, pero no se encuentran movimientos contables guardados. Comprueba la copia de seguridad y el almacenamiento SQLite.": [
    "The job is marked as recorded, but no saved accounting entries were found. Check the backup and SQLite storage.",
    "Le travail est indiqué comme enregistré, mais aucune écriture comptable sauvegardée n’a été trouvée. Vérifiez la sauvegarde et le stockage SQLite.",
    "Der Auftrag ist als erfasst markiert, aber es wurden keine gespeicherten Buchungen gefunden. Prüfen Sie Sicherung und SQLite-Speicher.",
    "Il lavoro risulta registrato, ma non sono state trovate registrazioni contabili salvate. Controlla il backup e l’archiviazione SQLite.",
    "Zadanie oznaczono jako zarejestrowane, ale nie znaleziono zapisów księgowych. Sprawdź kopię zapasową i bazę SQLite.",
    "تظهر المهمة على أنها مسجلة، لكن لم يتم العثور على قيود محاسبية محفوظة. تحقق من النسخة الاحتياطية وتخزين SQLite.",
    "任务显示为已登记，但未找到已保存的会计记录。请检查备份和 SQLite 存储。"
    ],
  "Este trabajo ya figura como registrado. He abierto Contabilidad y solicitado actualizar la lista. Si no aparece el movimiento, no vuelvas a registrarlo: revisa el estado del almacenamiento y la copia de seguridad.": [
    "This job is already recorded. I opened Accounting and requested a list refresh. If the entry does not appear, do not record it again: check storage status and the backup.",
    "Ce travail est déjà enregistré. J’ai ouvert la comptabilité et demandé l’actualisation de la liste. Si l’écriture n’apparaît pas, ne l’enregistrez pas à nouveau : vérifiez le stockage et la sauvegarde.",
    "Dieser Auftrag ist bereits erfasst. Die Buchhaltung wurde geöffnet und eine Aktualisierung der Liste angefordert. Falls der Eintrag fehlt, erfassen Sie ihn nicht erneut: Prüfen Sie Speicherstatus und Sicherung.",
    "Questo lavoro risulta già registrato. Ho aperto la contabilità e richiesto l’aggiornamento dell’elenco. Se il movimento non compare, non registrarlo di nuovo: controlla lo stato dell’archiviazione e il backup.",
    "To zadanie jest już zarejestrowane. Otwarto księgowość i zażądano odświeżenia listy. Jeśli wpis się nie pojawi, nie rejestruj go ponownie: sprawdź stan pamięci i kopię zapasową.",
    "هذه المهمة مسجلة بالفعل. تم فتح قسم المحاسبة وطلب تحديث القائمة. إذا لم تظهر الحركة، فلا تسجلها مرة أخرى؛ تحقق من حالة التخزين والنسخة الاحتياطية.",
    "此任务已登记。我已打开会计页面并请求刷新列表。如果记录未显示，请勿再次登记；请检查存储状态和备份。"
    ],
  "No hay historial que exportar.": [
    "There is no history to export.",
    "Aucun historique à exporter.",
    "Es gibt keinen Verlauf zum Exportieren.",
    "Non c’è cronologia da esportare.",
    "Brak historii do wyeksportowania.",
    "لا يوجد سجل لتصديره.",
    "没有可导出的历史记录。"
    ],
  "Configura y guarda tus datos para reutilizarlos.": [
    "Set up and save your details to reuse them.",
    "Configurez et enregistrez vos coordonnées pour les réutiliser.",
    "Richten Sie Ihre Angaben ein und speichern Sie sie zur Wiederverwendung.",
    "Configura e salva i tuoi dati per riutilizzarli.",
    "Skonfiguruj i zapisz swoje dane, aby używać ich ponownie.",
    "أدخل بياناتك واحفظها لإعادة استخدامها.",
    "请设置并保存你的信息，以便重复使用。"
    ],
  "Cliente sin nombre": [
    "Unnamed customer",
    "Client sans nom",
    "Kunde ohne Namen",
    "Cliente senza nome",
    "Klient bez nazwy",
    "عميل بلا اسم",
    "未命名客户"
    ],
  "Nombre del filamento": [
    "Filament name",
    "Nom du filament",
    "Filamentname",
    "Nome del filamento",
    "Nazwa filamentu",
    "اسم الخيط",
    "耗材名称"
    ],
  "Precio por kilo": [
    "Price per kilogram",
    "Prix au kilogramme",
    "Preis pro Kilogramm",
    "Prezzo al chilogrammo",
    "Cena za kilogram",
    "السعر لكل كيلوغرام",
    "每千克价格"
    ],
  "Color HEX del filamento": [
    "Filament HEX color",
    "Couleur HEX du filament",
    "HEX-Farbe des Filaments",
    "Colore HEX del filamento",
    "Kolor HEX filamentu",
    "لون الخيط بصيغة HEX",
    "耗材 HEX 颜色"
    ],
  "Marca no identificada": [
    "Unknown brand",
    "Marque non identifiée",
    "Marke nicht erkannt",
    "Marca non identificata",
    "Nie rozpoznano marki",
    "علامة تجارية غير محددة",
    "未识别品牌"
    ],
  "Material no indicado": [
    "Material not specified",
    "Matériau non indiqué",
    "Material nicht angegeben",
    "Materiale non indicato",
    "Nie podano materiału",
    "المادة غير محددة",
    "未指定材料"
    ],
  "color no indicado": [
    "color not specified",
    "couleur non indiquée",
    "Farbe nicht angegeben",
    "colore non indicato",
    "nie podano koloru",
    "اللون غير محدد",
    "未指定颜色"
    ],
  "HEX no indicado": [
    "HEX not specified",
    "HEX non indiqué",
    "HEX nicht angegeben",
    "HEX non indicato",
    "Nie podano kodu HEX",
    "قيمة HEX غير محددة",
    "未指定 HEX"
    ],
  "El peso por extrusión es una estimación; verifica el dato antes de calcular el precio.": [
    "Weight per extrusion is an estimate; verify it before calculating the price.",
    "Le poids par extrusion est une estimation ; vérifiez cette donnée avant de calculer le prix.",
    "Das Gewicht pro Extrusion ist ein Schätzwert; prüfen Sie ihn vor der Preisberechnung.",
    "Il peso per estrusione è una stima; verifica il dato prima di calcolare il prezzo.",
    "Masa na ekstrudowaną porcję jest szacunkowa; sprawdź ją przed obliczeniem ceny.",
    "الوزن لكل عملية بثق تقديري؛ تحقق من القيمة قبل حساب السعر.",
    "每次挤出的重量为估算值；计算价格前请核实该数据。"
    ],
  "Falta en inventario: {brand} {material} {color}. Habría que comprar esta bobina.": [
    "Missing from inventory: {brand} {material} {color}. This spool would need to be purchased.",
    "Absent de l’inventaire : {brand} {material} {color}. Cette bobine devra être achetée.",
    "Nicht im Lager vorhanden: {brand} {material} {color}. Diese Spule müsste gekauft werden.",
    "Manca in inventario: {brand} {material} {color}. Questa bobina andrebbe acquistata.",
    "Brak w magazynie: {brand} {material} {color}. Tę szpulę trzeba będzie kupić.",
    "غير متوفر في المخزون: {brand} {material} {color}. يلزم شراء هذه البكرة.",
    "库存缺少：{brand} {material} {color}。需要购买此线轴。"
    ],
  "Precio recomendado de referencia:": [
    "Reference recommended price:",
    "Prix recommandé de référence :",
    "Empfohlener Referenzpreis:",
    "Prezzo consigliato di riferimento:",
    "Zalecana cena referencyjna:",
    "السعر المرجعي الموصى به:",
    "建议参考售价："
    ],
  "Beneficio de referencia:": [
    "Reference profit:",
    "Bénéfice de référence :",
    "Referenzgewinn:",
    "Profitto di riferimento:",
    "Zysk referencyjny:",
    "الربح المرجعي:",
    "参考利润："
    ],
  "Impuesto:": [
    "Tax:",
    "Taxe :",
    "Steuer:",
    "Imposta:",
    "Podatek:",
    "الضريبة:",
    "税费："
    ],
  "Precio sin impuesto": [
    "Price excluding tax",
    "Prix hors taxe",
    "Preis ohne Steuer",
    "Prezzo senza imposta",
    "Cena bez podatku",
    "السعر دون ضريبة",
    "不含税价格"
    ],
  "Precio final con impuesto": [
    "Final price including tax",
    "Prix final TTC",
    "Endpreis inklusive Steuer",
    "Prezzo finale con imposta",
    "Cena końcowa z podatkiem",
    "السعر النهائي شامل الضريبة",
    "含税最终价格"
    ],
  "Precio recomendado con impuesto": [
    "Recommended price including tax",
    "Prix recommandé TTC",
    "Empfohlener Preis inklusive Steuer",
    "Prezzo consigliato con imposta",
    "Zalecana cena z podatkiem",
    "السعر الموصى به شامل الضريبة",
    "含税建议售价"
    ],
  "Precio recomendado con impuestos:": [
    "Recommended price including taxes:",
    "Prix recommandé toutes taxes comprises :",
    "Empfohlener Preis inklusive Steuern:",
    "Prezzo consigliato comprensivo di imposte:",
    "Zalecana cena z podatkami:",
    "السعر الموصى به شامل الضرائب:",
    "含税建议售价："
    ],
  "Coste esperado por pieza vendible:": [
    "Expected cost per sellable piece:",
    "Coût prévu par pièce vendable :",
    "Erwartete Kosten pro verkaufsfähigem Stück:",
    "Costo previsto per pezzo vendibile:",
    "Przewidywany koszt jednej sprzedawalnej sztuki:",
    "التكلفة المتوقعة لكل قطعة قابلة للبيع:",
    "每件可售产品的预期成本："
    ],
  "Mejor beneficio unitario del historial:": [
    "Best unit profit in history:",
    "Meilleur bénéfice unitaire de l’historique :",
    "Höchster Stückgewinn im Verlauf:",
    "Miglior profitto unitario della cronologia:",
    "Najwyższy zysk jednostkowy w historii:",
    "أفضل ربح للوحدة في السجل:",
    "历史记录中的最高单件利润："
    ],
  "Solo se cuentan los cálculos guardados; no se detectan automáticamente ventas reales ni cobros.": [
    "Only saved calculations are counted; actual sales and payments are not detected automatically.",
    "Seuls les calculs enregistrés sont pris en compte ; les ventes réelles et les paiements ne sont pas détectés automatiquement.",
    "Es werden nur gespeicherte Berechnungen berücksichtigt; tatsächliche Verkäufe und Zahlungseingänge werden nicht automatisch erkannt.",
    "Vengono conteggiati solo i calcoli salvati; le vendite reali e gli incassi non vengono rilevati automaticamente.",
    "Uwzględniane są tylko zapisane obliczenia; rzeczywista sprzedaż i płatności nie są wykrywane automatycznie.",
    "يتم احتساب الحسابات المحفوظة فقط؛ ولا يتم اكتشاف المبيعات الفعلية أو المدفوعات تلقائيًا.",
    "仅统计已保存的计算；不会自动识别实际销售或收款。"
    ],
  "Probabilidad de fallo:": [
    "Failure probability:",
    "Probabilité d’échec :",
    "Fehlerwahrscheinlichkeit:",
    "Probabilità di errore:",
    "Prawdopodobieństwo niepowodzenia:",
    "احتمال الفشل:",
    "失败概率："
    ],
  "No hay resultados que coincidan con tu búsqueda.": [
    "No results match your search.",
    "Aucun résultat ne correspond à votre recherche.",
    "Keine Ergebnisse entsprechen Ihrer Suche.",
    "Nessun risultato corrisponde alla ricerca.",
    "Brak wyników pasujących do wyszukiwania.",
    "لا توجد نتائج تطابق بحثك.",
    "没有符合搜索条件的结果。"
    ],
  "No se ha podido guardar la preferencia en SQLite.": [
    "Could not save the preference in SQLite.",
    "Impossible d’enregistrer la préférence dans SQLite.",
    "Die Einstellung konnte nicht in SQLite gespeichert werden.",
    "Impossibile salvare la preferenza in SQLite.",
    "Nie udało się zapisać ustawienia w bazie SQLite.",
    "تعذر حفظ التفضيل في SQLite.",
    "无法将偏好设置保存到 SQLite。"
    ],
  "No se pudieron migrar las preferencias a SQLite:": [
    "Preferences could not be migrated to SQLite:",
    "Impossible de migrer les préférences vers SQLite :",
    "Die Einstellungen konnten nicht nach SQLite migriert werden:",
    "Impossibile migrare le preferenze in SQLite:",
    "Nie udało się przenieść ustawień do bazy SQLite:",
    "تعذرت ترحيل التفضيلات إلى SQLite:",
    "无法将偏好设置迁移到 SQLite："
    ],
  "No se pudo guardar el orden en SQLite:": [
    "Could not save the order in SQLite:",
    "Impossible d’enregistrer l’ordre dans SQLite :",
    "Die Reihenfolge konnte nicht in SQLite gespeichert werden:",
    "Impossibile salvare l’ordine in SQLite:",
    "Nie udało się zapisać kolejności w bazie SQLite:",
    "تعذر حفظ الترتيب في SQLite:",
    "无法将排序顺序保存到 SQLite："
    ],
  "No se pudo restaurar copia JSON": [
    "Could not restore JSON backup",
    "Impossible de restaurer la sauvegarde JSON",
    "JSON-Sicherung konnte nicht wiederhergestellt werden",
    "Impossibile ripristinare il backup JSON",
    "Nie udało się przywrócić kopii JSON",
    "تعذرت استعادة نسخة JSON الاحتياطية",
    "无法恢复 JSON 备份"
    ],
  "La copia restaurada no incluía el cálculo actual.": [
    "The restored backup did not include the current calculation.",
    "La sauvegarde restaurée ne contenait pas le calcul actuel.",
    "Die wiederhergestellte Sicherung enthielt die aktuelle Berechnung nicht.",
    "Il backup ripristinato non includeva il calcolo attuale.",
    "Przywrócona kopia nie zawierała bieżącego obliczenia.",
    "لم تتضمن النسخة المستعادة الحساب الحالي.",
    "恢复的备份不包含当前计算数据。"
    ],
  "El navegador ha bloqueado la ventana del informe PDF.": [
    "The browser blocked the PDF report window.",
    "Le navigateur a bloqué la fenêtre du rapport PDF.",
    "Der Browser hat das Fenster für den PDF-Bericht blockiert.",
    "Il browser ha bloccato la finestra del rapporto PDF.",
    "Przeglądarka zablokowała okno raportu PDF.",
    "حظر المتصفح نافذة تقرير PDF.",
    "浏览器已阻止 PDF 报告窗口。"
    ],
  "No se encontraron resultados.": [
    "No results found.",
    "Aucun résultat trouvé.",
    "Keine Ergebnisse gefunden.",
    "Nessun risultato trovato.",
    "Nie znaleziono wyników.",
    "لم يتم العثور على نتائج.",
    "未找到结果。"
    ],
  "Leyendo datos del G-code…": [
    "Reading G-code data…",
    "Lecture des données du G-code…",
    "G-Code-Daten werden gelesen…",
    "Lettura dei dati G-code…",
    "Odczytywanie danych G-code…",
    "جارٍ قراءة بيانات G-code…",
    "正在读取 G-code 数据……"
    ],
  "fecha de estado desconocida": [
    "status timestamp unknown",
    "horodatage d’état inconnu",
    "Zeitstempel des Status unbekannt",
    "data dello stato sconosciuta",
    "nieznany znacznik czasu stanu",
    "تاريخ الحالة غير معروف",
    "状态日期未知"
    ],
  "Fuente: leyendo G-code activo de la U1:": [
    "Source: reading active U1 G-code:",
    "Source : lecture du G-code actif de la U1 :",
    "Quelle: Aktiver U1-G-Code wird gelesen:",
    "Fonte: lettura del G-code attivo della U1:",
    "Źródło: odczytywanie aktywnego G-code drukarki U1:",
    "المصدر: قراءة ملف G-code النشط في U1:",
    "来源：正在读取 U1 当前活动的 G-code："
    ],
  "Preparando lectura completa del G-code… 0%": [
    "Preparing full G-code read… 0%",
    "Préparation de la lecture complète du G-code… 0 %",
    "Vollständiges Einlesen des G-Codes wird vorbereitet… 0 %",
    "Preparazione della lettura completa del G-code… 0%",
    "Przygotowywanie pełnego odczytu G-code… 0%",
    "جارٍ التحضير لقراءة G-code بالكامل… 0%",
    "正在准备完整读取 G-code……0%"
    ],
  "No se pudo iniciar la lectura del G-code": [
    "Could not start reading the G-code",
    "Impossible de démarrer la lecture du G-code",
    "Das Einlesen des G-Codes konnte nicht gestartet werden",
    "Impossibile avviare la lettura del G-code",
    "Nie udało się rozpocząć odczytu G-code",
    "تعذر بدء قراءة G-code",
    "无法开始读取 G-code"
    ],
  "Error consultando el progreso: HTTP": [
    "Error checking progress: HTTP",
    "Erreur lors de la vérification de la progression : HTTP",
    "Fehler beim Abrufen des Fortschritts: HTTP",
    "Errore durante il controllo dell’avanzamento: HTTP",
    "Błąd sprawdzania postępu: HTTP",
    "خطأ أثناء الاستعلام عن التقدم: HTTP",
    "查询进度时出错：HTTP"
    ],
  "Fuente confirmada: G-code activo de la U1 ·": [
    "Confirmed source: active U1 G-code ·",
    "Source confirmée : G-code actif de l’U1 ·",
    "Bestätigte Quelle: aktiver U1-G-Code ·",
    "Fonte confermata: G-code attivo della U1 ·",
    "Potwierdzone źródło: aktywny G-code U1 ·",
    "المصدر المؤكد: ملف G-code النشط في U1 ·",
    "已确认来源：U1 当前活动的 G-code ·"
    ],
  "Consumo leído del G-code activo:": [
    "Consumption read from active G-code:",
    "Consommation lue depuis le G-code actif :",
    "Verbrauch aus aktivem G-Code ausgelesen:",
    "Consumo letto dal G-code attivo:",
    "Zużycie odczytane z aktywnego G-code:",
    "الاستهلاك المقروء من ملف G-code النشط:",
    "从当前活动的 G-code 读取的耗材用量："
    ],
  "g previstos. Bobinas asignadas:": [
    "g planned. Spools assigned:",
    "g prévus. Bobines affectées :",
    "g geplant. Zugeordnete Spulen:",
    "g previsti. Bobine assegnate:",
    "g przewidywane. Przypisane szpule:",
    "غرام متوقعة. البكرات المعيّنة:",
    "克预计用量。已分配线轴："
    ],
  "Comprueba las asignaciones antes del descuento.": [
    "Check assignments before deducting stock.",
    "Vérifiez les affectations avant de déduire le stock.",
    "Prüfen Sie die Zuordnungen vor dem Lagerabzug.",
    "Controlla le assegnazioni prima di scaricare il magazzino.",
    "Sprawdź przypisania przed odjęciem ze stanu magazynowego.",
    "تحقق من التعيينات قبل الخصم.",
    "扣减前请检查线轴分配。"
    ],
  "Añade stock o revisa las asignaciones y vuelve a comprobar el trabajo.": [
    "Add stock or review the assignments, then check the job again.",
    "Ajoutez du stock ou vérifiez les affectations, puis contrôlez à nouveau la tâche.",
    "Fügen Sie Bestand hinzu oder prüfen Sie die Zuordnungen und kontrollieren Sie den Auftrag erneut.",
    "Aggiungi scorte o controlla le assegnazioni, quindi verifica di nuovo il lavoro.",
    "Dodaj zapasy lub sprawdź przypisania, a następnie ponownie zweryfikuj zadanie.",
    "أضف مخزونًا أو راجع التعيينات ثم تحقق من المهمة مرة أخرى.",
    "请补充库存或检查分配情况，然后重新检查此任务。"
    ],
  "No se pudo actualizar el estado contable de la impresión finalizada": [
    "Could not update the accounting status of the completed print",
    "Impossible de mettre à jour le statut comptable de l’impression terminée",
    "Der Buchhaltungsstatus des abgeschlossenen Drucks konnte nicht aktualisiert werden",
    "Impossibile aggiornare lo stato contabile della stampa completata",
    "Nie udało się zaktualizować statusu księgowego zakończonego wydruku",
    "تعذر تحديث الحالة المحاسبية للطباعة المكتملة",
    "无法更新已完成打印任务的会计状态"
    ],
  "No se pudo recalcular el coste parcial de la impresión cancelada": [
    "Could not recalculate the partial cost of the cancelled print",
    "Impossible de recalculer le coût partiel de l’impression annulée",
    "Die Teilkosten des abgebrochenen Drucks konnten nicht neu berechnet werden",
    "Impossibile ricalcolare il costo parziale della stampa annullata",
    "Nie udało się ponownie obliczyć częściowego kosztu anulowanego wydruku",
    "تعذر إعادة حساب التكلفة الجزئية للطباعة الملغاة",
    "无法重新计算已取消打印任务的部分成本"
    ],
  "El trabajo ya está registrado como {previous}. ¿Quieres cambiarlo a {next}? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as {previous}. Do you want to change it to {next}? Previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré comme {previous}. Voulez-vous le remplacer par {next} ? Les entrées précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als {previous} erfasst. Möchten Sie ihn in {next} ändern? Frühere Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come {previous}. Vuoi cambiarlo in {next}? Le voci precedenti di questo G-code verranno sostituite.",
    "To zadanie jest już zapisane jako {previous}. Czy chcesz zmienić je na {next}? Poprzednie wpisy dla tego G-code zostaną zastąpione.",
    "المهمة مسجلة بالفعل كـ {previous}. هل تريد تغييرها إلى {next}؟ ستُستبدل السجلات السابقة لملف G-code هذا.",
    "此任务已登记为 {previous}。要将其更改为 {next} 吗？此 G-code 之前的记录将被替换。"
    ],
  "El trabajo ya está registrado.": [
    "This job is already recorded.",
    "Ce travail est déjà enregistré.",
    "Dieser Auftrag ist bereits erfasst.",
    "Questo lavoro è già registrato.",
    "To zadanie jest już zarejestrowane.",
    "تم تسجيل المهمة بالفعل.",
    "此任务已登记。"
    ],
  "Coste": [
    "Cost",
    "Coût",
    "Kosten",
    "Costo",
    "Koszt",
    "التكلفة",
    "成本"
    ],
  "Finalizada": [
    "Completed",
    "Terminée",
    "Abgeschlossen",
    "Completata",
    "Zakończona",
    "مكتملة",
    "已完成"
    ],
  "Provisional": [
    "Provisional",
    "Provisoire",
    "Vorläufig",
    "Provvisoria",
    "Tymczasowa",
    "مؤقت",
    "暂定"
    ],
  "Preferencias guardadas.": [
    "Preferences saved.",
    "Préférences enregistrées.",
    "Einstellungen gespeichert.",
    "Preferenze salvate.",
    "Zapisano preferencje.",
    "تم حفظ التفضيلات.",
    "偏好设置已保存。"
    ],
  "Tema de la aplicación": [
    "Application theme",
    "Thème de l’application",
    "App-Design",
    "Tema dell’applicazione",
    "Motyw aplikacji",
    "مظهر التطبيق",
    "应用主题"
    ],
  "Configuración de conexión de la impresora": [
    "Printer connection settings",
    "Paramètres de connexion de l’imprimante",
    "Druckerverbindungseinstellungen",
    "Impostazioni di connessione della stampante",
    "Ustawienia połączenia drukarki",
    "إعدادات اتصال الطابعة",
    "打印机连接设置"
    ],
  "Dirección del puente local": [
    "Local bridge address",
    "Adresse du pont local",
    "Adresse der lokalen Bridge",
    "Indirizzo del bridge locale",
    "Adres lokalnego mostu",
    "عنوان الجسر المحلي",
    "本地桥接服务地址"
    ],
  "Permite ventanas emergentes para exportar a PDF.": [
    "Allow pop-ups to export to PDF.",
    "Autorisez les fenêtres contextuelles pour exporter en PDF.",
    "Erlauben Sie Pop-ups, um als PDF zu exportieren.",
    "Consenti i popup per esportare in PDF.",
    "Zezwól na wyskakujące okna, aby eksportować do PDF.",
    "اسمح بالنوافذ المنبثقة لتصدير ملفات PDF.",
    "请允许弹出窗口，以便导出 PDF。"
    ],
  "Bobina aplicada al material. Los gramos del G-code se mantienen.": [
    "Spool applied to the material. G-code grams remain unchanged.",
    "Bobine appliquée au matériau. Les grammes du G-code restent inchangés.",
    "Spule dem Material zugewiesen. Die G-Code-Grammzahl bleibt unverändert.",
    "Bobina applicata al materiale. I grammi del G-code restano invariati.",
    "Szpula przypisana do materiału. Gramatura z G-code pozostaje bez zmian.",
    "تم تطبيق البكرة على المادة. ستظل كمية الغرامات في G-code كما هي.",
    "线轴已分配给该材料。G-code 中的克数保持不变。"
    ],
  "Datos recibidos directamente del postprocesado de Snapmaker Orca.": [
    "Data received directly from Snapmaker Orca post-processing.",
    "Données reçues directement du post-traitement de Snapmaker Orca.",
    "Daten direkt aus der Nachbearbeitung von Snapmaker Orca empfangen.",
    "Dati ricevuti direttamente dal post-processing di Snapmaker Orca.",
    "Dane otrzymane bezpośrednio z postprocessingu Snapmaker Orca.",
    "تم استلام البيانات مباشرة من المعالجة اللاحقة في Snapmaker Orca.",
    "数据直接来自 Snapmaker Orca 的后处理程序。"
    ],
  "Escenario duplicado. Cambia el precio de venta y guarda el resultado.": [
    "Scenario duplicated. Change the sale price and save the result.",
    "Scénario dupliqué. Modifiez le prix de vente et enregistrez le résultat.",
    "Szenario dupliziert. Ändern Sie den Verkaufspreis und speichern Sie das Ergebnis.",
    "Scenario duplicato. Modifica il prezzo di vendita e salva il risultato.",
    "Scenariusz został skopiowany. Zmień cenę sprzedaży i zapisz wynik.",
    "تم تكرار السيناريو. غيّر سعر البيع واحفظ النتيجة.",
    "方案已复制。请更改售价并保存结果。"
    ],
  "Presupuesto individual exportado a CSV.": [
    "Individual quote exported to CSV.",
    "Devis individuel exporté au format CSV.",
    "Einzelangebot als CSV exportiert.",
    "Preventivo singolo esportato in CSV.",
    "Pojedyncza oferta wyeksportowana do CSV.",
    "تم تصدير عرض السعر الفردي إلى CSV.",
    "单份报价单已导出为 CSV。"
    ],
  "Resumen copiado al portapapeles.": [
    "Summary copied to clipboard.",
    "Résumé copié dans le presse-papiers.",
    "Zusammenfassung in die Zwischenablage kopiert.",
    "Riepilogo copiato negli appunti.",
    "Podsumowanie skopiowano do schowka.",
    "تم نسخ الملخص إلى الحافظة.",
    "摘要已复制到剪贴板。"
    ],
  "Cliente borrado.": [
    "Customer deleted.",
    "Client supprimé.",
    "Kunde gelöscht.",
    "Cliente eliminato.",
    "Klient został usunięty.",
    "تم حذف العميل.",
    "客户已删除。"
    ],
  "Selecciona un archivo de imagen.": [
    "Select an image file.",
    "Sélectionnez un fichier image.",
    "Wählen Sie eine Bilddatei aus.",
    "Seleziona un file immagine.",
    "Wybierz plik obrazu.",
    "حدد ملف صورة.",
    "请选择图像文件。"
    ],
  "No se pudo cargar la imagen.": [
    "Could not load the image.",
    "Impossible de charger l’image.",
    "Das Bild konnte nicht geladen werden.",
    "Impossibile caricare l’immagine.",
    "Nie udało się wczytać obrazu.",
    "تعذر تحميل الصورة.",
    "无法加载图像。"
    ],
  "Selecciona un cliente guardado o créalo desde la pestaña Clientes antes de guardar el pedido.": [
    "Select a saved customer or create one from the Customers tab before saving the order.",
    "Sélectionnez un client enregistré ou créez-en un depuis l’onglet Clients avant d’enregistrer la commande.",
    "Wählen Sie vor dem Speichern des Auftrags einen gespeicherten Kunden aus oder erstellen Sie einen im Tab „Kunden“.",
    "Seleziona un cliente salvato o creane uno dalla scheda Clienti prima di salvare l’ordine.",
    "Przed zapisaniem zamówienia wybierz zapisanego klienta lub utwórz go na karcie Klienci.",
    "اختر عميلًا محفوظًا أو أنشئ عميلًا من علامة تبويب العملاء قبل حفظ الطلب.",
    "保存订单前，请选择已保存的客户，或在“客户”选项卡中创建新客户。"
    ],
  "Pedido guardado en este navegador.": [
    "Order saved in this browser.",
    "Commande enregistrée dans ce navigateur.",
    "Auftrag in diesem Browser gespeichert.",
    "Ordine salvato in questo browser.",
    "Zamówienie zapisano w tej przeglądarce.",
    "تم حفظ الطلب في هذا المتصفح.",
    "订单已保存在此浏览器中。"
    ],
  "Color personalizado guardado.": [
    "Custom color saved.",
    "Couleur personnalisée enregistrée.",
    "Benutzerdefinierte Farbe gespeichert.",
    "Colore personalizzato salvato.",
    "Zapisano niestandardowy kolor.",
    "تم حفظ اللون المخصص.",
    "自定义颜色已保存。"
    ],
  "No se pudo conectar: {message}. Verifica que el puente esté iniciado y la IP configurada.": [
    "Could not connect: {message}. Make sure the bridge is running and the IP address is configured.",
    "Connexion impossible : {message}. Vérifiez que le pont est démarré et que l’adresse IP est configurée.",
    "Verbindung fehlgeschlagen: {message}. Prüfen Sie, ob die Bridge läuft und die IP-Adresse konfiguriert ist.",
    "Impossibile connettersi: {message}. Verifica che il bridge sia avviato e che l’indirizzo IP sia configurato.",
    "Nie można się połączyć: {message}. Sprawdź, czy most działa i czy skonfigurowano adres IP.",
    "تعذر الاتصال: {message}. تحقق من تشغيل الجسر وإعداد عنوان IP.",
    "无法连接：{message}。请确认桥接服务已启动并且 IP 地址已配置。"
    ],
  "Preparando lectura completa del G-code… {percent}%": [
    "Preparing full G-code read… {percent}%",
    "Préparation de la lecture complète du G-code… {percent}%",
    "Vollständiges Einlesen des G-Codes wird vorbereitet… {percent}%",
    "Preparazione della lettura completa del G-code… {percent}%",
    "Przygotowywanie pełnego odczytu G-code… {percent}%",
    "جارٍ التحضير لقراءة G-code بالكامل… {percent}%",
    "正在准备完整读取 G-code……{percent}%"
    ],
  "Nie znaleziono drukarki.": [
    "Printer not found.",
    "Imprimante introuvable.",
    "Drucker nicht gefunden.",
    "Stampante non trovata.",
    "Nie znaleziono drukarki.",
    "لم يتم العثور على الطابعة.",
    "未找到打印机。"
    ],
  "Nie udało się odczytać SQLite": [
    "Could not read SQLite",
    "Impossible de lire SQLite",
    "SQLite konnte nicht gelesen werden",
    "Impossibile leggere SQLite",
    "Nie udało się odczytać bazy SQLite.",
    "تعذرت قراءة SQLite",
    "无法读取 SQLite"
    ],
  "Nie udało się zapisać listy w SQLite": [
    "Could not save the list to SQLite",
    "Impossible d’enregistrer la liste dans SQLite",
    "Die Liste konnte nicht in SQLite gespeichert werden",
    "Impossibile salvare l’elenco in SQLite",
    "Nie udało się zapisać listy w bazie SQLite.",
    "تعذر حفظ القائمة في SQLite",
    "无法将列表保存到 SQLite"
    ],
  "Nie udało się wybrać drukarki: {message}": [
    "Could not select the printer: {message}",
    "Impossible de sélectionner l’imprimante : {message}",
    "Drucker konnte nicht ausgewählt werden: {message}",
    "Impossibile selezionare la stampante: {message}",
    "Nie udało się wybrać drukarki: {message}",
    "تعذر اختيار الطابعة: {message}",
    "无法选择打印机：{message}"
    ],
  "Guardar preferencias": [
    "Save preferences",
    "Enregistrer les préférences",
    "Einstellungen speichern",
    "Salva preferenze",
    "Zapisz preferencje",
    "حفظ التفضيلات",
    "保存偏好设置"
    ],
  "Leyendo G-code": [
    "Reading G-code",
    "Lecture du G-code",
    "G-Code wird gelesen",
    "Lettura del G-code",
    "Odczytywanie G-code",
    "جارٍ قراءة G-code",
    "正在读取 G-code"
    ],
  "datos de hace": [
    "data from",
    "données datant de",
    "Daten von vor",
    "dati di",
    "dane sprzed",
    "بيانات منذ",
    "数据距今"
    ],
  "Anterior": [
    "Previous",
    "Précédent",
    "Zurück",
    "Precedente",
    "Poprzednia",
    "السابق",
    "上一页"
    ],
  "Siguiente": [
    "Next",
    "Suivant",
    "Weiter",
    "Successivo",
    "Następna",
    "التالي",
    "下一页"
    ],
  "Página": [
    "Page",
    "Page",
    "Seite",
    "Pagina",
    "Strona",
    "الصفحة",
    "页"
    ],
  "movimientos": [
    "entries",
    "opérations",
    "Einträge",
    "movimenti",
    "wpisów",
    "حركات",
    "笔记录"
    ],
  "Consolidado general": [
    "Overall total",
    "Total général",
    "Gesamtübersicht",
    "Totale complessivo",
    "Zestawienie ogólne",
    "الإجمالي العام",
    "综合汇总"
    ],
  "Desgaste y amortización": [
    "Wear and depreciation",
    "Usure et amortissement",
    "Verschleiß und Abschreibung",
    "Usura e ammortamento",
    "Zużycie i amortyzacja",
    "التآكل والإهلاك",
    "磨损与折旧"
    ],
  "DESGLOSE": [
    "BREAKDOWN",
    "DÉTAIL",
    "AUFSCHLÜSSELUNG",
    "DETTAGLIO",
    "PODSUMOWANIE",
    "التفاصيل",
    "明细"
    ],
  "provisional": [
    "provisional",
    "provisoire",
    "vorläufig",
    "provvisorio",
    "tymczasowe",
    "مؤقت",
    "暂定"
    ],
  "finalizada": [
    "completed",
    "terminée",
    "abgeschlossen",
    "completata",
    "zakończona",
    "مكتملة",
    "已完成"
    ],
  "impresión en curso (provisional)": [
    "print in progress (provisional)",
    "impression en cours (provisoire)",
    "Druck läuft (vorläufig)",
    "stampa in corso (provvisoria)",
    "drukowanie w toku (tymczasowe)",
    "الطباعة قيد التنفيذ (مؤقتة)",
    "正在打印（暂定）"
    ],
  "impresión finalizada": [
    "print completed",
    "impression terminée",
    "Druck abgeschlossen",
    "stampa completata",
    "drukowanie zakończone",
    "اكتملت الطباعة",
    "打印已完成"
    ],
  "detectado del nombre del archivo": [
    "detected from filename",
    "détecté à partir du nom de fichier",
    "aus dem Dateinamen erkannt",
    "rilevato dal nome del file",
    "wykryto na podstawie nazwy pliku",
    "تم اكتشافه من اسم الملف",
    "从文件名检测"
    ],
  "tomado del campo de tiempo de Inicio": [
    "from the Home time field",
    "repris du champ de temps de l’accueil",
    "aus dem Zeitfeld auf der Startseite",
    "dal campo tempo della Home",
    "pobrano z pola czasu na ekranie głównym",
    "مأخوذ من حقل وقت البدء",
    "取自开始时间字段"
    ],
  "Venta": [
    "Sale",
    "Vente",
    "Verkauf",
    "Vendita",
    "Sprzedaż",
    "بيع",
    "销售"
    ],
  "¿Registrar como gasto propio o como venta?": [
    "Record as own expense or sale?",
    "Enregistrer comme dépense propre ou vente ?",
    "Als eigene Ausgabe oder Verkauf erfassen?",
    "Registrare come spesa propria o vendita?",
    "Zarejestrować jako wydatek własny czy sprzedaż?",
    "هل تريد تسجيله كمصروف شخصي أم كعملية بيع؟",
    "要将其登记为个人支出还是销售？"
    ],
  "Registrar pedido": [
    "Register order",
    "Enregistrer la commande",
    "Auftrag erfassen",
    "Registra ordine",
    "Zarejestruj zamówienie",
    "تسجيل الطلب",
    "登记订单"
    ],
  "Registrar como gasto personal": [
    "Record as personal expense",
    "Enregistrer comme dépense personnelle",
    "Als private Ausgabe erfassen",
    "Registra come spesa personale",
    "Zarejestruj jako wydatek osobisty",
    "تسجيل كمصروف شخصي",
    "登记为个人支出"
    ],
  "Desglose del coste de fabricación": [
    "Manufacturing cost breakdown",
    "Détail du coût de fabrication",
    "Aufschlüsselung der Herstellungskosten",
    "Dettaglio del costo di produzione",
    "Zestawienie kosztów wytworzenia",
    "تفصيل تكلفة التصنيع", "制造成本明细"
    ],
  "Reserva para fallos": [
    "Failure allowance",
    "Provision pour échecs",
    "Fehlerreserve",
    "Riserva per errori",
    "Rezerwa na nieudane wydruki",
    "احتياطي حالات الفشل",
    "故障预留"
    ],
  "Resumen de venta": [
    "Sale summary",
    "Récapitulatif de vente",
    "Verkaufsübersicht",
    "Riepilogo vendita",
    "Podsumowanie sprzedaży",
    "ملخص المبيعات", "销售摘要"
    ],
  "Precio configurado por unidad": [
    "Configured price per unit",
    "Prix configuré par unité",
    "Eingestellter Stückpreis",
    "Prezzo configurato per unità",
    "Ustawiona cena za sztukę",
    "السعر المحدد لكل وحدة", "设置的单价"
    ],
  "Perfil fiscal": [
    "Tax profile",
    "Profil fiscal",
    "Steuerprofil",
    "Profilo fiscale",
    "Profil podatkowy",
    "الملف الضريبي",
    "税务配置"
    ],
  "Objetivo de beneficio": [
    "Profit target",
    "Objectif de bénéfice",
    "Gewinnziel",
    "Obiettivo di profitto",
    "Docelowy zysk",
    "هدف الربح",
    "利润目标"
    ],
  "mínimo": [
    "minimum",
    "minimum",
    "Mindestbetrag",
    "minimo",
    "minimum",
    "الحد الأدنى",
    "最低值"
    ],
  "Base sin impuestos": [
    "Subtotal before tax",
    "Montant hors taxes",
    "Nettobetrag",
    "Importo al netto delle imposte",
    "Kwota netto",
    "المبلغ الأساسي دون ضرائب",
    "不含税基数"
    ],
  "Comisión": [
    "Commission",
    "Commission",
    "Provision",
    "Commissione",
    "Prowizja",
    "العمولة",
    "佣金"
    ],
  "Total a cobrar al cliente": [
    "Total to charge the customer",
    "Total à facturer au client",
    "Vom Kunden zu zahlender Gesamtbetrag",
    "Totale da addebitare al cliente",
    "Łączna kwota do zapłaty przez klienta",
    "الإجمالي المستحق من العميل",
    "向客户收取的总额"
    ],
  "Coste total de fabricación": [
    "Total manufacturing cost",
    "Coût total de fabrication",
    "Herstellungskosten gesamt",
    "Costo totale di produzione",
    "Całkowity koszt wytworzenia",
    "إجمالي تكلفة التصنيع",
    "制造总成本"
    ],
  "Registrar gasto": [
    "Record expense",
    "Enregistrer la dépense",
    "Ausgabe erfassen",
    "Registra spesa",
    "Zarejestruj wydatek",
    "تسجيل المصروف",
    "登记支出"
    ],
  "Coste de fabricación": [
    "Manufacturing cost",
    "Coût de fabrication",
    "Herstellungskosten",
    "Costo di produzione",
    "Koszt wytworzenia",
    "تكلفة التصنيع",
    "制造成本"
    ],
  "Usar otra bobina": [
    "Use another spool",
    "Utiliser une autre bobine",
    "Andere Spule verwenden",
    "Usa un’altra bobina",
    "Użyj innej szpuli",
    "استخدام بكرة أخرى",
    "使用其他线轴"
    ],
  "Bobinas alternativas por material y color similar": [
    "Alternative spools with matching material and similar colour",
    "Bobines alternatives avec matériau identique et couleur similaire",
    "Alternative Spulen mit gleichem Material und ähnlicher Farbe",
    "Bobine alternative con materiale uguale e colore simile",
    "Alternatywne szpule o zgodnym materiale i podobnym kolorze",
    "بكرات بديلة حسب المادة واللون المتشابه",
    "按材料和相近颜色筛选替代线轴"
    ],
  "asignación(es) correctas": [
    "valid assignment(s)",
    "affectation(s) valide(s)",
    "gültige Zuordnung(en)",
    "assegnazione(i) valida(e)",
    "prawidłowe przypisanie(a)",
    "تعيين(ات) صحيحة",
    "项分配正确"
    ],
  "No se pudo registrar como personal: ": [
    "Could not register as a personal expense: ",
    "Impossible d’enregistrer comme dépense personnelle : ",
    "Konnte nicht als private Ausgabe erfasst werden: ",
    "Impossibile registrare come spesa personale: ",
    "Nie udało się zarejestrować jako wydatek własny: ",
    "تعذر التسجيل كمصروف شخصي: ",
    "无法登记为个人支出："
    ],
  "No se pudo registrar como pedido: ": [
    "Could not register as an order: ",
    "Impossible d’enregistrer comme commande : ",
    "Konnte nicht als Auftrag erfasst werden: ",
    "Impossibile registrare come ordine: ",
    "Nie udało się zarejestrować jako zamówienie: ",
    "تعذر التسجيل كطلب: ",
    "无法登记为订单："
    ],
  "Descargar CSV": [
    "Download CSV",
    "Télécharger CSV",
    "CSV herunterladen",
    "Scarica CSV",
    "Pobierz CSV",
    "تنزيل CSV",
    "下载 CSV"
    ],
  "Descargar PDF": [
    "Download PDF",
    "Télécharger PDF",
    "PDF herunterladen",
    "Scarica PDF",
    "Pobierz PDF",
    "تنزيل PDF",
    "下载 PDF"
    ],
  "Selecciona primero una impresora o introduce su IP.": [
    "Select a printer first or enter its IP address.",
    "Sélectionnez d’abord une imprimante ou saisissez son adresse IP.",
    "Wählen Sie zuerst einen Drucker aus oder geben Sie seine IP-Adresse ein.",
    "Seleziona prima una stampante o inserisci il suo indirizzo IP.",
    "Najpierw wybierz drukarkę lub wpisz jej adres IP.",
    "اختر طابعة أولًا أو أدخل عنوان IP الخاص بها.",
    "请先选择打印机或输入其 IP 地址。"
    ],
  "Filamento (sin peso detectado)": [
    "Filament (no weight detected)",
    "Filament (poids non détecté)",
    "Filament (kein Gewicht erkannt)",
    "Filamento (peso non rilevato)",
    "Filament (masa niewykryta)",
    "الخيط (لم يتم اكتشاف الوزن)",
    "耗材（未检测到重量）"
    ],
  "Datos del vendedor guardados.": [
    "Seller details saved.",
    "Coordonnées du vendeur enregistrées.",
    "Verkäuferdaten gespeichert.",
    "Dati del venditore salvati.",
    "Zapisano dane sprzedawcy.",
    "تم حفظ بيانات البائع.",
    "卖方信息已保存。"
    ],
  "Presupuesto cargado.": [
    "Quote loaded.",
    "Devis chargé.",
    "Angebot geladen.",
    "Preventivo caricato.",
    "Wczytano ofertę.",
    "تم تحميل عرض السعر.",
    "报价单已加载。"
    ],
  "Factura ": [
    "Invoice ",
    "Facture ",
    "Rechnung ",
    "Fattura ",
    "Faktura ",
    "فاتورة ",
    "发票 "
    ],
  "Precio recomendado ": [
    "Recommended price ",
    "Prix recommandé ",
    "Empfohlener Preis ",
    "Prezzo consigliato ",
    "Zalecana cena ",
    "السعر الموصى به ",
    "建议售价 "
    ],
  "No se descontó ninguna bobina: el stock combinado de las bobinas compatibles no cubre todo el consumo. ": [
    "No spool was deducted: the combined stock of compatible spools does not cover the full usage. ",
    "Aucune bobine n’a été déduite : le stock cumulé des bobines compatibles ne couvre pas toute la consommation. ",
    "Es wurde keine Spule abgezogen: Der Gesamtbestand kompatibler Spulen reicht für den gesamten Verbrauch nicht aus. ",
    "Non è stata scalata alcuna bobina: la giacenza complessiva delle bobine compatibili non copre tutto il consumo. ",
    "Nie odjęto żadnej szpuli: łączny zapas zgodnych szpul nie pokrywa całego zużycia. ",
    "لم يتم خصم أي بكرة: المخزون الإجمالي للبكرات المتوافقة لا يغطي كامل الاستهلاك. ",
    "未扣减任何线轴：兼容线轴的库存总量不足以满足全部耗材用量。"
    ],
  ". Añade stock o revisa las asignaciones y vuelve a comprobar el trabajo.": [
    ". Add stock or review the assignments and check the job again.",
    ". Ajoutez du stock ou vérifiez les affectations, puis contrôlez à nouveau le travail.",
    ". Fügen Sie Bestand hinzu oder prüfen Sie die Zuordnungen und kontrollieren Sie den Auftrag erneut.",
    ". Aggiungi scorte o controlla le assegnazioni e verifica di nuovo il lavoro.",
    ". Uzupełnij zapas lub sprawdź przypisania, a następnie ponownie zweryfikuj zadanie.",
    ". أضف مخزونًا أو راجع التعيينات ثم تحقق من المهمة مرة أخرى。",
    "。请补充库存或检查分配情况，然后重新检查此任务。"
    ],
  "Descuento aplicado (estimación del G-code): ": [
    "Deduction applied (G-code estimate): ",
    "Déduction appliquée (estimation du G-code) : ",
    "Abzug angewendet (G-Code-Schätzung): ",
    "Scarico applicato (stima del G-code): ",
    "Zastosowano odjęcie (szacunek z G-code): ",
    "تم تطبيق الخصم (تقدير G-code): ",
    "已应用扣减（G-code 估算）："
    ],
  " · impresión finalizada": [
    " · print completed",
    " · impression terminée",
    " · Druck abgeschlossen",
    " · stampa completata",
    " · drukowanie zakończone",
    " · اكتملت الطباعة",
    " · 打印已完成"
    ],
  " · impresión en curso (provisional)": [
    " · print in progress (provisional)",
    " · impression en cours (provisoire)",
    " · Druck läuft (vorläufig)",
    " · stampa in corso (provvisoria)",
    " · drukowanie w toku (tymczasowe)",
    " · الطباعة قيد التنفيذ (مؤقتة)",
    " · 正在打印（暂定）"
    ],
  "impresión cancelada · coste parcial": [
    "print cancelled · partial cost",
    "impression annulée · coût partiel",
    "Druck abgebrochen · Teilkosten",
    "stampa annullata · costo parziale",
    "drukowanie anulowane · koszt częściowy",
    "تم إلغاء الطباعة · تكلفة جزئية",
    "打印已取消 · 部分成本"
    ],
  "Comisión estimada · ": [
    "Estimated commission · ",
    "Commission estimée · ",
    "Geschätzte Provision · ",
    "Commissione stimata · ",
    "Szacowana prowizja · ",
    "العمولة المقدّرة · ",
    "预计佣金 · "
    ],
  "Comisión del punto 04 · ": [
    "Section 04 commission · ",
    "Commission de la section 04 · ",
    "Provision aus Abschnitt 04 · ",
    "Commissione della sezione 04 · ",
    "Prowizja z sekcji 04 · ",
    "عمولة النقطة 04 · ",
    "第 04 项佣金 · "
    ],
  "Este trabajo ya está registrado como ": [
    "This job is already registered as ",
    "Ce travail est déjà enregistré comme ",
    "Dieser Auftrag ist bereits registriert als ",
    "Questo lavoro è già registrato come ",
    "To zadanie jest już zarejestrowane jako ",
    "هذه المهمة مسجلة بالفعل كـ ",
    "此任务已登记为"
    ],
  ". ¿Quieres cambiarlo a ": [
    ". Do you want to change it to ",
    "Voulez-vous le remplacer par ",
    ". Möchten Sie es ändern in ",
    "Vuoi cambiarlo in ",
    "Czy chcesz zmienić na ",
    ". هل تريد تغييرها إلى ",
    "。要将其更改为"
    ],
  "? Se sustituirán las entradas anteriores de este G-code.": [
    "? The previous entries for this G-code will be replaced.",
    "? Les entrées précédentes de ce G-code seront remplacées.",
    "? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "? Le voci precedenti di questo G-code verranno sostituite.",
    "? Poprzednie wpisy dla tego G-code zostaną zastąpione.",
    "؟ ستُستبدل السجلات السابقة لملف G-code هذا。",
    "？此 G-code 之前的记录将被替换。"
    ],
  "% o mínimo ": [
    "% or minimum ",
    "% ou minimum ",
    "% oder mindestens ",
    "% o minimo ",
    "% lub minimum ",
    "% أو الحد الأدنى ",
    "% 或最低值 "
    ],
  "Descripción de la pieza": [
    "Part description",
    "Description de la pièce",
    "Bauteilbeschreibung",
    "Descrizione del pezzo",
    "Opis części",
    "وصف القطعة",
    "零件描述"
    ],
  "Nombre o descripción de la pieza": [
    "Part name or description",
    "Nom ou description de la pièce",
    "Name oder Beschreibung des Bauteils",
    "Nome o descrizione del pezzo",
    "Nazwa lub opis części",
    "اسم القطعة أو وصفها",
    "零件名称或描述"
    ],
  " · Envío: ": [
    " · Shipping: ",
    " · Livraison : ",
    " · Versand: ",
    " · Spedizione: ",
    " · Wysyłka: ",
    " · الشحن: ",
    " · 运费："
    ],
  "Te envío ": [
    "I’m sending you ",
    "Je vous envoie ",
    "Ich sende Ihnen ",
    "Ti invio ",
    "Wysyłam ",
    "أرسل إليك ",
    "我给你发送 "
    ],
  " línea(s) adicional(es)": [
    " additional line(s)",
    " ligne(s) supplémentaire(s)",
    " zusätzliche Zeile(n)",
    " riga/e aggiuntiva/e",
    " dodatkowa(e) pozycja(e)",
    " سطر(أسطر) إضافي(ة)",
    " 条附加行"
    ],
  "Dato oficial: 127,4 W medios en impresión PLA de cuatro colores; mantenimiento no verificado. Amortización calculada con precio de referencia y vida útil editable.": [
    "Official figure: 127.4 W average for four-colour PLA printing; maintenance not verified. Depreciation is calculated using a reference price and editable service life.",
    "Donnée officielle : 127,4 W en moyenne pour une impression PLA à quatre couleurs ; entretien non vérifié. L’amortissement est calculé à partir d’un prix de référence et d’une durée de vie modifiable.",
    "Offizieller Wert: durchschnittlich 127,4 W beim vierfarbigen PLA-Druck; Wartung nicht verifiziert. Die Abschreibung wird anhand eines Referenzpreises und einer anpassbaren Lebensdauer berechnet.",
    "Dato ufficiale: 127,4 W medi per la stampa PLA a quattro colori; manutenzione non verificata. L’ammortamento è calcolato con un prezzo di riferimento e una vita utile modificabile.",
    "Oficjalna wartość: średnio 127,4 W podczas druku PLA w czterech kolorach; konserwacja niezweryfikowana. Amortyzacja jest obliczana na podstawie ceny referencyjnej i edytowalnej żywotności.",
    "بيانات رسمية: متوسط قدرة 127.4 واط عند طباعة PLA بأربعة ألوان؛ الصيانة غير مؤكدة. يُحسب الإهلاك باستخدام سعر مرجعي وعمر تشغيلي قابل للتعديل.",
    "官方数据：四色 PLA 打印时平均功率为 127.4 W；维护费用未经验证。折旧按参考价格和可编辑的使用寿命计算。"
    ],
  "Amortización calculada: ": [
    "Calculated depreciation: ",
    "Amortissement calculé : ",
    "Berechnete Abschreibung: ",
    "Ammortamento calcolato: ",
    "Obliczona amortyzacja: ",
    "الإهلاك المحسوب: ",
    "计算折旧："
    ],
  " · El precio está en EUR: convierte el importe a ": [
    " · The price is in EUR: convert the amount to ",
    " · Le prix est en EUR : convertissez le montant en ",
    " · Der Preis ist in EUR: Rechnen Sie den Betrag um in ",
    " · Il prezzo è in EUR: converti l’importo in ",
    " · Cena jest w EUR: przelicz kwotę na ",
    " · السعر باليورو: حوّل المبلغ إلى ",
    " · 价格以 EUR 计：请将金额换算为 "
    ],
  "No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. ": [
    "Could not activate external storage. Do not continue editing in this window. ",
    "Impossible d’activer le stockage externe. Ne continuez pas à modifier les données dans cette fenêtre. ",
    "Der externe Speicher konnte nicht aktiviert werden. Bearbeiten Sie die Daten in diesem Fenster nicht weiter. ",
    "Impossibile attivare l’archiviazione esterna. Non continuare a modificare i dati in questa finestra. ",
    "Nie udało się włączyć pamięci zewnętrznej. Nie kontynuuj edycji w tym oknie. ",
    "تعذر تفعيل التخزين الخارجي. لا تواصل التحرير في هذه النافذة. ",
    "无法启用外部存储。请勿在此窗口继续编辑。"
    ],
  "Secciones de la aplicación": [
    "Application sections",
    "Sections de l’application",
    "Anwendungsbereiche",
    "Sezioni dell’applicazione",
    "Sekcje aplikacji",
    "أقسام التطبيق",
    "应用程序分区"
    ],
  "Ej. orientación, soportes, acabado, incidencias...": [
    "E.g. orientation, supports, finish, issues...",
    "Ex. orientation, supports, finition, incidents…",
    "Z. B. Ausrichtung, Stützen, Oberfläche, Probleme…",
    "Es. orientamento, supporti, finitura, problemi…",
    "Np. orientacja, podpory, wykończenie, problemy…",
    "مثال: الاتجاه، الدعامات، التشطيب، المشكلات...",
    "例如：摆放方向、支撑、表面处理、异常情况……"
    ],
  "Colores básicos": [
    "Basic colours",
    "Couleurs de base",
    "Grundfarben",
    "Colori di base",
    "Kolory podstawowe",
    "الألوان الأساسية",
    "基本颜色"
    ],
  "Tasación guardada correctamente. Puedes cargarla desde el historial.": [
    "Estimate saved successfully. You can load it from the history.",
    "Estimation enregistrée. Vous pouvez la charger depuis l’historique.",
    "Kalkulation erfolgreich gespeichert. Sie können sie aus dem Verlauf laden.",
    "Stima salvata correttamente. Puoi caricarla dalla cronologia.",
    "Wycena została zapisana. Możesz ją wczytać z historii.",
    "تم حفظ التقدير بنجاح. يمكنك تحميله من السجل.",
    "估价已成功保存。你可以从历史记录中加载。"
    ],
  "Continuar": [
    "Continue",
    "Continuer",
    "Fortfahren",
    "Continua",
    "Kontynuuj",
    "متابعة", "继续"
    ],
  "Conexión con impresora": [
    "Printer connection",
    "Connexion à l’imprimante",
    "Druckerverbindung",
    "Connessione alla stampante",
    "Połączenie z drukarką",
    "الاتصال بالطابعة",
    "打印机连接"
    ],
  "Mostrar monitor Snapmaker U1": [
    "Show Snapmaker U1 monitor",
    "Afficher le moniteur Snapmaker U1",
    "Snapmaker-U1-Monitor anzeigen",
    "Mostra monitor Snapmaker U1",
    "Pokaż monitor Snapmaker U1",
    "إظهار شاشة مراقبة Snapmaker U1",
    "显示 Snapmaker U1 监控面板"
    ],
  "Base de datos y copias de seguridad": [
    "Database and backups",
    "Base de données et sauvegardes",
    "Datenbank und Sicherungen",
    "Database e backup",
    "Baza danych i kopie zapasowe",
    "قاعدة البيانات والنسخ الاحتياطية",
    "数据库与备份"
    ],
  "Vista previa de la pieza": [
    "Part preview",
    "Aperçu de la pièce",
    "Teilevorschau",
    "Anteprima del pezzo",
    "Podgląd części",
    "معاينة القطعة",
    "零件预览"
    ],
  "Nombre, correo o teléfono": [
    "Name, email or phone",
    "Nom, e-mail ou téléphone",
    "Name, E-Mail oder Telefonnummer",
    "Nome, e-mail o telefono",
    "Imię/nazwa, e-mail lub telefon",
    "الاسم أو البريد الإلكتروني أو الهاتف",
    "姓名、电子邮件或电话"
    ],
  "Ej.: U1 taller, U1 principal…": [
    "E.g. workshop U1, main U1…",
    "Ex. : U1 atelier, U1 principale…",
    "Z. B. U1 Werkstatt, U1 Hauptdrucker…",
    "Es.: U1 officina, U1 principale…",
    "Np. U1 warsztatowa, U1 główna…",
    "مثال: U1 الورشة، U1 الرئيسية…",
    "例如：U1 工作室、U1 主打印机……"
    ],
  "No se pudieron importar los datos de integración: {message}": [
    "Could not import integration data: {message}",
    "Impossible d’importer les données d’intégration : {message}",
    "Integrationsdaten konnten nicht importiert werden: {message}",
    "Impossibile importare i dati di integrazione: {message}",
    "Nie udało się zaimportować danych integracji: {message}",
    "تعذر استيراد بيانات التكامل: {message}",
    "无法导入集成数据：{message}"
    ],
  "Pedidos abierto. Selecciona un cliente o créalo con el formulario de la pestaña Clientes antes de guardar.": [
    "Orders opened. Select a customer or create one using the form in the Customers tab before saving.",
    "Commandes ouvertes. Sélectionnez un client ou créez-le avec le formulaire de l’onglet Clients avant d’enregistrer.",
    "Aufträge geöffnet. Wählen Sie vor dem Speichern einen Kunden aus oder legen Sie ihn über das Formular im Tab „Kunden“ an.",
    "Ordini aperti. Seleziona un cliente o creane uno con il modulo nella scheda Clienti prima di salvare.",
    "Otwarto Zamówienia. Przed zapisaniem wybierz klienta lub utwórz go za pomocą formularza na karcie Klienci.",
    "تم فتح الطلبات. اختر عميلًا أو أنشئه باستخدام نموذج علامة تبويب العملاء قبل الحفظ.",
    "订单页面已打开。保存前，请选择客户，或使用“客户”选项卡中的表单创建客户。"
    ],
  "Tasación cargada para preparar el presupuesto. Revisa los datos del cliente y guarda/imprime el presupuesto.": [
    "Estimate loaded to prepare the quote. Check the customer details and save/print the quote.",
    "Estimation chargée pour préparer le devis. Vérifiez les données du client puis enregistrez/imprimez le devis.",
    "Kalkulation zur Angebotserstellung geladen. Prüfen Sie die Kundendaten und speichern/drucken Sie das Angebot.",
    "Stima caricata per preparare il preventivo. Controlla i dati del cliente e salva/stampa il preventivo.",
    "Wczytano wycenę do przygotowania oferty. Sprawdź dane klienta i zapisz/wydrukuj ofertę.",
    "تم تحميل التقدير لإعداد عرض السعر. راجع بيانات العميل ثم احفظ عرض السعر أو اطبعه.",
    "已加载估价以准备报价单。请检查客户信息，然后保存或打印报价单。"
    ],
  "Tasación cargada para preparar la factura. Completa o confirma los datos del cliente.": [
    "Estimate loaded to prepare the invoice. Complete or confirm the customer details.",
    "Estimation chargée pour préparer la facture. Complétez ou confirmez les données du client.",
    "Kalkulation zur Rechnungserstellung geladen. Ergänzen oder bestätigen Sie die Kundendaten.",
    "Stima caricata per preparare la fattura. Completa o conferma i dati del cliente.",
    "Wczytano wycenę do przygotowania faktury. Uzupełnij lub potwierdź dane klienta.",
    "تم تحميل التقدير لإعداد الفاتورة. أكمل بيانات العميل أو أكدها.",
    "已加载估价以准备发票。请补充或确认客户信息。"
    ],
  "Al cargar el G-code se detectan automáticamente material, color y peso. Si coincide exactamente una bobina en stock, se selecciona; si no, se crea un filamento genérico con el color del laminador.": [
    "When G-code is loaded, material, colour, and weight are detected automatically. If exactly one spool in stock matches, it is selected; otherwise, a generic filament is created using the slicer colour.",
    "Au chargement du G-code, le matériau, la couleur et le poids sont détectés automatiquement. Si une seule bobine en stock correspond, elle est sélectionnée ; sinon, un filament générique est créé avec la couleur du slicer.",
    "Beim Laden des G-Codes werden Material, Farbe und Gewicht automatisch erkannt. Passt genau eine Lager-Spule, wird sie ausgewählt; andernfalls wird ein generisches Filament mit der Slicer-Farbe angelegt.",
    "Al caricamento del G-code vengono rilevati automaticamente materiale, colore e peso. Se corrisponde esattamente una bobina disponibile, viene selezionata; altrimenti viene creato un filamento generico con il colore dello slicer.",
    "Po wczytaniu G-code materiał, kolor i masa są wykrywane automatycznie. Jeśli pasuje dokładnie jedna dostępna szpula, zostanie wybrana; w przeciwnym razie zostanie utworzony ogólny filament w kolorze z programu tnącego.",
    "عند تحميل G-code، يتم اكتشاف المادة واللون والوزن تلقائيًا. إذا تطابقت البيانات تمامًا مع بكرة واحدة في المخزون، فسيتم تحديدها؛ وإلا فسيتم إنشاء خيط عام بلون برنامج التقطيع.",
    "加载 G-code 时会自动识别材料、颜色和重量。如果与库存中的某个线轴完全匹配，则自动选择；否则会按切片软件中的颜色创建通用耗材。"
    ],
  "Precio recomendado {recommended} + suplemento {extra} = {total}. Aplicado al cálculo principal.": [
    "Recommended price {recommended} + surcharge {extra} = {total}. Applied to the main calculation.",
    "Prix conseillé {recommended} + supplément {extra} = {total}. Appliqué au calcul principal.",
    "Empfohlener Preis {recommended} + Aufschlag {extra} = {total}. Auf die Hauptberechnung angewendet.",
    "Prezzo consigliato {recommended} + supplemento {extra} = {total}. Applicato al calcolo principale.",
    "Zalecana cena {recommended} + dopłata {extra} = {total}. Zastosowano do głównej kalkulacji.",
    "السعر الموصى به {recommended} + الإضافة {extra} = {total}. تم تطبيقه على الحساب الرئيسي.",
    "建议售价 {recommended} + 附加金额 {extra} = {total}。已应用于主计算。"
    ],
  "{printer}: valores de referencia cargados. Ajusta consumo y costes según tu uso real.": [
    "{printer}: reference values loaded. Adjust power use and costs to match your actual use.",
    "{printer} : valeurs de référence chargées. Ajustez la consommation et les coûts selon votre utilisation réelle.",
    "{printer}: Referenzwerte geladen. Passen Sie Verbrauch und Kosten an die tatsächliche Nutzung an.",
    "{printer}: valori di riferimento caricati. Regola consumi e costi in base all’uso reale.",
    "{printer}: wczytano wartości referencyjne. Dostosuj zużycie i koszty do rzeczywistego użytkowania.",
    "{printer}: تم تحميل القيم المرجعية. اضبط الاستهلاك والتكاليف وفقًا لاستخدامك الفعلي.",
    "{printer}：参考值已加载。请根据实际使用情况调整耗材用量和成本。"
    ],
  "No se pudo registrar como personal: {message}": [
    "Could not register as a personal print: {message}",
    "Impossible d’enregistrer comme impression personnelle : {message}",
    "Registrierung als persönlicher Druck fehlgeschlagen: {message}",
    "Impossibile registrare come stampa personale: {message}",
    "Nie udało się zarejestrować jako wydruk prywatny: {message}",
    "تعذر التسجيل كمصروف شخصي: {message}",
    "无法登记为个人支出：{message}"
    ],
  "No se pudo registrar como pedido: {message}": [
    "Could not register as an order: {message}",
    "Impossible d’enregistrer comme commande : {message}",
    "Registrierung als Auftrag fehlgeschlagen: {message}",
    "Impossibile registrare come ordine: {message}",
    "Nie udało się zarejestrować jako zamówienie: {message}",
    "تعذر التسجيل كطلب: {message}",
    "无法登记为订单：{message}"
    ],
  "{printer} · cancelada · progreso estimado {progress}% · {hours} h · DESGLOSE: Filamento {filament} €; electricidad {electricity} €; desgaste {wear} €; mantenimiento/recambios {maintenance} €; mano de obra y extras {labor} €; reserva fallos {reserve} €. Coste parcial estimado hasta la cancelación; sin venta ni beneficio.": [
    "{printer} · cancelled · estimated progress {progress}% · {hours} h · BREAKDOWN: Filament {filament} €; electricity {electricity} €; wear {wear} €; maintenance/parts {maintenance} €; labor and extras {labor} €; failure reserve {reserve} €. Estimated partial cost up to cancellation; no sale or profit.",
    "{printer} · annulée · progression estimée {progress}% · {hours} h · DÉTAIL : filament {filament} € ; électricité {electricity} € ; usure {wear} € ; entretien/pièces {maintenance} € ; main-d’œuvre et extras {labor} € ; réserve pour pannes {reserve} €. Coût partiel estimé jusqu’à l’annulation ; aucune vente ni aucun bénéfice.",
    "{printer} · abgebrochen · geschätzter Fortschritt {progress}% · {hours} h · AUFSCHLÜSSELUNG: Filament {filament} €; Strom {electricity} €; Verschleiß {wear} €; Wartung/Ersatzteile {maintenance} €; Arbeitskosten und Extras {labor} €; Rücklage für Fehldrucke {reserve} €. Geschätzte Teilkosten bis zum Abbruch; kein Verkauf und kein Gewinn.",
    "{printer} · annullata · avanzamento stimato {progress}% · {hours} h · DETTAGLIO: filamento {filament} €; elettricità {electricity} €; usura {wear} €; manutenzione/ricambi {maintenance} €; manodopera ed extra {labor} €; riserva guasti {reserve} €. Costo parziale stimato fino all’annullamento; nessuna vendita né profitto.",
    "{printer} · anulowano · szacowany postęp {progress}% · {hours} h · ZESTAWIENIE: filament {filament} €; energia elektryczna {electricity} €; zużycie {wear} €; konserwacja/części zamienne {maintenance} €; robocizna i dodatki {labor} €; rezerwa na awarie {reserve} €. Szacunkowy koszt częściowy do momentu anulowania; bez sprzedaży i zysku.",
    "{printer} · ملغاة · التقدم المقدّر {progress}% · {hours} ساعة · التفاصيل: الخيوط {filament} €؛ الكهرباء {electricity} €؛ التآكل {wear} €؛ الصيانة/قطع الغيار {maintenance} €؛ العمل والإضافات {labor} €؛ احتياطي الأعطال {reserve} €. التكلفة الجزئية المقدّرة حتى الإلغاء؛ دون مبيعات أو أرباح.",
    "{printer} · 已取消 · 预计进度 {progress}% · {hours} 小时 · 明细：耗材 {filament} €；电费 {electricity} €；磨损 {wear} €；维护/备件 {maintenance} €；人工及其他 {labor} €；故障预留 {reserve} €。截至取消时的预计部分成本；不记录销售额或利润。"
    ],

  'Comparar': ['Compare', 'Comparer', 'Vergleichen', 'Confronta', 'Porównaj',

    "مقارنة",

    "比较"

  ],
  'Seleccionar {name} para comparar': ['Select {name} to compare', 'Sélectionner {name} pour comparer', '{name} zum Vergleichen auswählen', 'Seleziona {name} da confrontare', 'Wybierz {name}, aby porównać',
    "تحديد {name} للمقارنة",
    "选择 {name} 进行比较"
  ],
  'Dato': ['Field', 'Donnée', 'Angabe', 'Dato', 'Dane',
    "البيان",
    "字段"
  ],
  'Impresora/perfil': ['Printer/profile', 'Imprimante/profil', 'Drucker/Profil', 'Stampante/profilo', 'Drukarka/profil',
    "الطابعة/الملف الشخصي",
    "打印机/配置文件"
  ],
  'Filamento total': ['Total filament', 'Filament total', 'Gesamtfilament', 'Filamento totale', 'Łączna ilość filamentu',
    "إجمالي الخيوط",
    "耗材总量"
  ],
  'Precio de venta por unidad': ['Sale price per unit', 'Prix de vente unitaire', 'Verkaufspreis pro Einheit', 'Prezzo di vendita per unità', 'Cena sprzedaży za sztukę',
    "سعر البيع للوحدة",
    "单件售价"
  ],
  'Comparativa de tasaciones': ['Estimate comparison', 'Comparaison des estimations', 'Kalkulationsvergleich', 'Confronto delle stime', 'Porównanie wycen',
    "مقارنة التقديرات",
    "估价对比"
  ],
  'Tasación A': ['Estimate A', 'Estimation A', 'Kalkulation A', 'Stima A', 'Wycena A',
    "التقدير A",
    "估价 A"
  ],
  'Tasación B': ['Estimate B', 'Estimation B', 'Kalkulation B', 'Stima B', 'Wycena B',
    "التقدير B",
    "估价 B"
  ],
  'Print Cost & Profit · Versión 1.3.23': ['Print Cost & Profit · Version 1.3.23', 'Print Cost & Profit · Version 1.3.23', 'Print Cost & Profit · Version 1.3.23', 'Print Cost & Profit · Versione 1.3.23', 'Print Cost & Profit · Wersja 1.3.23',
    "Print Cost & Profit · الإصدار 1.3.23",
    "Print Cost & Profit · 版本 1.3.23"
  ],
  'NIF/DNI: {value}': ['Tax ID: {value}', 'N° fiscal : {value}', 'Steuer-ID: {value}', 'Codice fiscale: {value}', 'Identyfikator podatkowy: {value}',
    "الرقم الضريبي/رقم الهوية: {value}",
    "税号/身份证号：{value}"
  ],
  'Email: {value}': ['Email: {value}', 'E-mail : {value}', 'E-Mail: {value}', 'E-mail: {value}', 'E-mail: {value}',
    "البريد الإلكتروني: {value}",
    "电子邮件：{value}"
  ],
  'Teléfono: {value}': ['Phone: {value}', 'Téléphone : {value}', 'Telefon: {value}', 'Telefono: {value}', 'Telefon: {value}',
    "الهاتف: {value}",
    "电话：{value}"
  ],
  'Observaciones: {value}': ['Notes: {value}', 'Remarques : {value}', 'Bemerkungen: {value}', 'Osservazioni: {value}', 'Uwagi: {value}',
    "ملاحظات: {value}",
    "备注：{value}"
  ],
  'El archivo se ha abierto, pero está vacío o no contiene texto legible. Tamaño: {size} bytes.': ['The file opened, but it is empty or contains no readable text. Size: {size} bytes.', 'Le fichier s’est ouvert, mais il est vide ou ne contient aucun texte lisible. Taille : {size} octets.', 'Die Datei wurde geöffnet, ist aber leer oder enthält keinen lesbaren Text. Größe: {size} Bytes.', 'Il file è stato aperto, ma è vuoto o non contiene testo leggibile. Dimensione: {size} byte.', 'Plik został otwarty, ale jest pusty lub nie zawiera czytelnego tekstu. Rozmiar: {size} bajtów.',
    "تم فتح الملف، لكنه فارغ أو لا يحتوي على نص قابل للقراءة. الحجم: {size} بايت.",
    "文件已打开，但为空或不包含可读取的文本。大小：{size} 字节。"
  ],
  'El archivo se leyó, pero falló el análisis del G-code: {message}': ['The file was read, but G-code parsing failed: {message}', 'Le fichier a été lu, mais l’analyse du G-code a échoué : {message}', 'Die Datei wurde gelesen, aber die G-Code-Analyse ist fehlgeschlagen: {message}', 'Il file è stato letto, ma l’analisi del G-code non è riuscita: {message}', 'Plik został odczytany, ale analiza G-code nie powiodła się: {message}',
    "تمت قراءة الملف، لكن تحليل G-code فشل: {message}",
    "文件已读取，但 G-code 解析失败：{message}"
  ],
  'Has seleccionado un .bgcode, que es binario. En Snapmaker Orca usa Exportar G-code y selecciona .gcode.': ['You selected a .bgcode file, which is binary. In Snapmaker Orca, use Export G-code and select .gcode.', 'Vous avez sélectionné un fichier .bgcode, qui est binaire. Dans Snapmaker Orca, utilisez Exporter le G-code et sélectionnez .gcode.', 'Sie haben eine .bgcode-Datei ausgewählt, die binär ist. Verwenden Sie in Snapmaker Orca „G-Code exportieren“ und wählen Sie .gcode.', 'Hai selezionato un file .bgcode, che è binario. In Snapmaker Orca usa Esporta G-code e seleziona .gcode.', 'Wybrano plik .bgcode, który jest binarny. W Snapmaker Orca użyj Eksportuj G-code i wybierz .gcode.',
    "لقد اخترت ملف .bgcode ثنائيًا. في Snapmaker Orca استخدم «تصدير G-code» واختر .gcode.",
    "你选择的是二进制 .bgcode 文件。请在 Snapmaker Orca 中使用“导出 G-code”，并选择 .gcode。"
  ],
  'Formato no reconocido: {filename}. Selecciona un archivo .gcode, .gco o .gc.': ['Unrecognized format: {filename}. Select a .gcode, .gco, or .gc file.', 'Format non reconnu : {filename}. Sélectionnez un fichier .gcode, .gco ou .gc.', 'Unbekanntes Format: {filename}. Wählen Sie eine .gcode-, .gco- oder .gc-Datei aus.', 'Formato non riconosciuto: {filename}. Seleziona un file .gcode, .gco o .gc.', 'Nieznany format: {filename}. Wybierz plik .gcode, .gco lub .gc.',
    "تنسيق غير معروف: {filename}. اختر ملفًا بامتداد .gcode أو .gco أو .gc.",
    "无法识别的格式：{filename}。请选择 .gcode、.gco 或 .gc 文件。"
  ],
  'Este navegador no permite leer archivos locales. Prueba abrirlo con Opera o Chrome actualizados.': ['This browser cannot read local files. Try opening it with an up-to-date version of Opera or Chrome.', 'Ce navigateur ne permet pas de lire les fichiers locaux. Essayez de l’ouvrir avec une version récente d’Opera ou de Chrome.', 'Dieser Browser kann keine lokalen Dateien lesen. Öffnen Sie die Datei mit einer aktuellen Version von Opera oder Chrome.', 'Questo browser non consente di leggere file locali. Prova ad aprirlo con una versione aggiornata di Opera o Chrome.', 'Ta przeglądarka nie może odczytywać plików lokalnych. Spróbuj otworzyć je w aktualnej wersji Opery lub Chrome.',
    "هذا المتصفح لا يسمح بقراءة الملفات المحلية. جرّب استخدام إصدار حديث من Opera أو Chrome.",
    "此浏览器不支持读取本地文件。请尝试使用最新版 Opera 或 Chrome。"
  ],
  'El navegador no pudo leer el archivo (FileReader error). Prueba copiar el G-code a una carpeta local, por ejemplo Escritorio.': ['The browser could not read the file (FileReader error). Try copying the G-code to a local folder, such as the Desktop.', 'Le navigateur n’a pas pu lire le fichier (erreur FileReader). Essayez de copier le G-code dans un dossier local, par exemple sur le Bureau.', 'Der Browser konnte die Datei nicht lesen (FileReader-Fehler). Kopieren Sie den G-Code in einen lokalen Ordner, z. B. auf den Desktop.', 'Il browser non è riuscito a leggere il file (errore FileReader). Prova a copiare il G-code in una cartella locale, ad esempio sul Desktop.', 'Przeglądarka nie mogła odczytać pliku (błąd FileReader). Spróbuj skopiować G-code do folderu lokalnego, np. na Pulpit.',
    "تعذر على المتصفح قراءة الملف (خطأ FileReader). جرّب نسخ G-code إلى مجلد محلي مثل سطح المكتب.",
    "浏览器无法读取文件（FileReader 错误）。请尝试将 G-code 复制到本地文件夹，例如桌面。"
  ],
  'La lectura del archivo fue cancelada.': ['File reading was canceled.', 'La lecture du fichier a été annulée.', 'Das Lesen der Datei wurde abgebrochen.', 'La lettura del file è stata annullata.', 'Odczyt pliku został anulowany.',
    "تم إلغاء قراءة الملف.",
    "文件读取已取消。"
  ],
  'Bobina creada y asignada. Se descontará el consumo al finalizar la impresión.': ['Spool created and assigned. Consumption will be deducted when printing is complete.', 'Bobine créée et affectée. La consommation sera déduite à la fin de l’impression.', 'Spule erstellt und zugewiesen. Der Verbrauch wird nach Abschluss des Drucks abgezogen.', 'Bobina creata e assegnata. Il consumo verrà detratto al termine della stampa.', 'Szpula została utworzona i przypisana. Zużycie zostanie odjęte po zakończeniu drukowania.',
    "تم إنشاء البكرة وتعيينها. سيتم خصم الاستهلاك عند انتهاء الطباعة.",
    "线轴已创建并分配。打印完成后将扣减耗材用量。"
  ],
  'Trabajo detectado ({file}), pero el cálculo no contiene filamentos. No se descontará ninguna bobina. Carga el G-code de este mismo trabajo y vuelve a comprobar.': ['Job detected ({file}), but the calculation contains no filament. No spool will be deducted. Load the G-code for this same job and check again.', 'Travail détecté ({file}), mais le calcul ne contient aucun filament. Aucune bobine ne sera déduite. Chargez le G-code de ce même travail et vérifiez à nouveau.', 'Auftrag erkannt ({file}), aber die Berechnung enthält kein Filament. Es wird keine Spule abgezogen. Laden Sie den G-Code dieses Auftrags und prüfen Sie erneut.', 'Lavoro rilevato ({file}), ma il calcolo non contiene filamenti. Non verrà detratta alcuna bobina. Carica il G-code di questo stesso lavoro e verifica di nuovo.', 'Wykryto zadanie ({file}), ale obliczenie nie zawiera filamentu. Żadna szpula nie zostanie odjęta. Wczytaj G-code tego samego zadania i sprawdź ponownie.',
    "تم اكتشاف المهمة ({file})، لكن الحساب لا يحتوي على خيوط. لن يتم خصم أي بكرة. حمّل ملف G-code لهذه المهمة ثم تحقق مرة أخرى.",
    "已检测到任务（{file}），但计算中没有耗材数据。不会扣减任何线轴。请加载此任务对应的 G-code 并重新检查。"
  ],
  'Trabajo registrado. Bobinas asignadas: {mapped}/{total}. El descuento se intentará al finalizar; consumo estimado del G-code.': ['Job recorded. Assigned spools: {mapped}/{total}. Deduction will be attempted when printing is complete; G-code consumption is estimated.', 'Travail enregistré. Bobines affectées : {mapped}/{total}. La déduction sera tentée à la fin de l’impression ; consommation estimée à partir du G-code.', 'Auftrag erfasst. Zugewiesene Spulen: {mapped}/{total}. Der Abzug wird nach Abschluss des Drucks versucht; der Verbrauch ist anhand des G-Codes geschätzt.', 'Lavoro registrato. Bobine assegnate: {mapped}/{total}. La detrazione verrà tentata al termine della stampa; il consumo è stimato dal G-code.', 'Zadanie zapisane. Przypisane szpule: {mapped}/{total}. Odjęcie zostanie podjęte po zakończeniu drukowania; zużycie oszacowano na podstawie G-code.',
    "تم تسجيل المهمة. البكرات المعيّنة: {mapped}/{total}. ستتم محاولة الخصم عند الانتهاء؛ الاستهلاك مقدّر من G-code.",
    "任务已登记。已分配线轴：{mapped}/{total}。将在打印完成时尝试扣减；耗材用量根据 G-code 估算。"
  ],
  'Registro de cambios': ['Changelog', 'Journal des modifications', 'Änderungsprotokoll', 'Registro delle modifiche', 'Dziennik zmian',
    "سجل التغييرات",
    "更新日志"
  ],
  'Abrir registro de cambios': ['Open changelog', 'Ouvrir le journal des modifications', 'Änderungsprotokoll öffnen', 'Apri registro delle modifiche', 'Otwórz dziennik zmian',
    "فتح سجل التغييرات",
    "打开更新日志"
  ],
  'Cargando registro de cambios…': ['Loading changelog…', 'Chargement du journal des modifications…', 'Änderungsprotokoll wird geladen…', 'Caricamento del registro delle modifiche…', 'Ładowanie dziennika zmian…',
    "جارٍ تحميل سجل التغييرات…",
    "正在加载更新日志……"
  ],
  'No se pudo cargar el registro de cambios. Comprueba que CHANGELOG.md está junto a Print_Cost_Profit.html.': ['Could not load the changelog. Make sure CHANGELOG.md is next to Print_Cost_Profit.html.', 'Impossible de charger le journal des modifications. Vérifiez que CHANGELOG.md se trouve à côté de Print_Cost_Profit.html.', 'Das Änderungsprotokoll konnte nicht geladen werden. Prüfen Sie, ob CHANGELOG.md neben Print_Cost_Profit.html liegt.', 'Impossibile caricare il registro delle modifiche. Verifica che CHANGELOG.md si trovi accanto a Print_Cost_Profit.html.', 'Nie można wczytać dziennika zmian. Sprawdź, czy CHANGELOG.md znajduje się obok Print_Cost_Profit.html.',
    "تعذر تحميل سجل التغييرات. تحقق من وجود CHANGELOG.md بجانب Print_Cost_Profit.html.",
    "无法加载更新日志。请确认 CHANGELOG.md 与 Print_Cost_Profit.html 位于同一目录。"
  ],
  "g restantes": [
    "g remaining",
    "g restants",
    "g verbleibend",
    "g rimanenti",
    "g pozostało",
    "غرام متبقية",
    "克剩余"
    ],

  "Gramos utilizados": [
    "Grams used",
    "Grammes utilisés",
    "Verwendete Gramm",
    "Grammi utilizzati",
    "Użyte gramy",
    "الغرامات المستخدمة",
    "已用克数"
    ],

  "Stock insuficiente: hay {stock} g y se necesitan {used} g.": [
    "Insufficient stock: {stock} g available, {used} g required.",
    "Stock insuffisant : {stock} g disponibles, {used} g nécessaires.",
    "Nicht genügend Bestand: {stock} g vorhanden, {used} g benötigt.",
    "Scorta insufficiente: {stock} g disponibili, {used} g necessari.",
    "Niewystarczający zapas: dostępne {stock} g, wymagane {used} g.",
    "المخزون غير كافٍ: المتوفر {stock} غرام والمطلوب {used} غرام.",
    "库存不足：现有 {stock} 克，需要 {used} 克。"
    ],

  "Materiales del G-code:": [
    "G-code materials:",
    "Matériaux du G-code :",
    "G-Code-Materialien:",
    "Materiali del G-code:",
    "Materiały G-code:",
    "مواد G-code:",
    "G-code 材料："
    ],

  "Tiempo detectado: {hours} h": [
    "Detected time: {hours} h",
    "Temps détecté : {hours} h",
    "Erkannte Druckzeit: {hours} h",
    "Tempo rilevato: {hours} h",
    "Wykryty czas: {hours} h",
    "الوقت المكتشف: {hours} ساعة",
    "检测到的时间：{hours} 小时"
    ],

  'Resumen de filamentos: {count} · asignados correctamente: {assigned} · pendientes de revisar: {missing}': [
    'Filament summary: {count} · correctly assigned: {assigned} · to review: {missing}',
    'Résumé des filaments : {count} · correctement affectés : {assigned} · à vérifier : {missing}',
    'Filamentübersicht: {count} · korrekt zugeordnet: {assigned} · zu prüfen: {missing}',
    'Riepilogo filamenti: {count} · assegnati correttamente: {assigned} · da verificare: {missing}',
    'Podsumowanie filamentów: {count} · poprawnie przypisane: {assigned} · do sprawdzenia: {missing}',

    "ملخص الخيوط: {count} · تم تعيينها بنجاح: {assigned} · بانتظار المراجعة: {missing}",

    "耗材摘要：{count} · 已正确分配：{assigned} · 待检查：{missing}"

  ],

  'Se ha repartido el consumo entre bobinas compatibles cuando ha sido necesario.': [
    'Usage was split across compatible spools when necessary.',
    'La consommation a été répartie entre des bobines compatibles si nécessaire.',
    'Der Verbrauch wurde bei Bedarf auf kompatible Spulen verteilt.',
    'Il consumo è stato ripartito tra bobine compatibili quando necessario.',
    'W razie potrzeby zużycie rozdzielono między zgodne szpule.',

    "تم توزيع الاستهلاك على البكرات المتوافقة عند الحاجة.",

    "必要时，已将耗材用量分配到多个兼容线轴。"

  ],

  'Bobinas asignadas: {assigned}/{total}. Comprueba las asignaciones antes del descuento.': [
    'Spools assigned: {assigned}/{total}. Check assignments before deduction.',
    'Bobines affectées : {assigned}/{total}. Vérifiez les affectations avant la déduction.',
    'Zugeordnete Spulen: {assigned}/{total}. Zuordnungen vor dem Abzug prüfen.',
    'Bobine assegnate: {assigned}/{total}. Verifica le assegnazioni prima della detrazione.',
    'Przypisane szpule: {assigned}/{total}. Sprawdź przypisania przed odjęciem materiału.',

    "البكرات المعيّنة: {assigned}/{total}. تحقق من التعيينات قبل الخصم.",

    "已分配线轴：{assigned}/{total}。扣减前请检查分配情况。"

  ],

};

const langs={es:'Español',en:'English',fr:'Français',de:'Deutsch',it:'Italiano',pl:'Polski',ar:'العربية', 'zh-CN':'简体中文'};const locales={es:'es-ES',en:'en-GB',fr:'fr-FR',de:'de-DE',it:'it-IT',pl:'pl-PL',ar:'ar', 'zh-CN':'zh-CN'};


// v1.414: nombres actualizados de las pestañas y textos relacionados, en los cinco idiomas.







// Cobertura adicional para textos de módulos que se crean fuera del diccionario principal.





const idx={es:-1,en:0,fr:1,de:2,it:3,pl:4,ar:5,'zh-CN':6};let lang='es';try{lang=localStorage.getItem('pcp_language')||'es'}catch(e){}if(!Object.prototype.hasOwnProperty.call(idx,lang))lang='es';


const COLOR_I18N={
'negro':["black","noir","schwarz","nero","czarny",
  "أسود",
  "黑色"
],'blanco':["white","blanc","weiß","bianco","biały"],'rojo':["red","rouge","rot","rosso","czerwony"],'rojo oscuro':["dark red","rouge foncé","dunkelrot","rosso scuro","ciemnoczerwony"],'naranja':["orange","orange","orange","arancione","pomarańczowy"],'amarillo':["yellow","jaune","gelb","giallo","żółty"],'verde lima':["lime green","vert citron","limettengrün","verde lime","limonkowy"],'verde':["green","vert","grün","verde","zielony"],'cian':["cyan","cyan","cyan","ciano","cyjan"],'azul celeste':["sky blue","bleu ciel","himmelblau","azzurro","błękitny"],'celeste':["light blue","bleu clair","hellblau","celeste","jasnoniebieski"],'azul':["blue","bleu","blau","blu","niebieski"],'violeta':["violet","violet","violett","violetto","fioletowy"],'morado':["purple","violet","lila","viola","purpurowy"],'magenta':["magenta","magenta","magenta","magenta","magenta"],'rosa claro':["light pink","rose clair","hellrosa","rosa chiaro","jasnoróżowy"],'rosa':["pink","rose","rosa","rosa","różowy"],'gris oscuro':["dark gray","gris foncé","dunkelgrau","grigio scuro","ciemnoszary"],'gris':["gray","gris","grau","grigio","szary"],'marrón cuero':["leather brown","brun cuir","lederbraun","marrone cuoio","skórzany brąz"],'marrón':["brown","brun","braun","marrone","brązowy"],'turquesa':["turquoise","turquoise","türkis","turchese","turkusowy"],'beige claro':["light beige","beige clair","hellbeige","beige chiaro","jasnobeżowy"],'beige':["beige","beige","beige","beige","beżowy"],'dorado':["gold","doré","gold","oro","złoty"],'plateado':["silver","argent","silber","argento","srebrny"],'índigo':["indigo","indigo","indigo","indaco","indygo"],'marfil':["ivory","ivoire","elfenbein","avorio","kość słoniowa"],'rojo ladrillo':["brick red","rouge brique","ziegelrot","rosso mattone","ceglasty"],'verde césped':["grass green","vert gazon","rasengrün","verde erba","trawiasty"],'verde azulado':["teal","bleu sarcelle","blaugrün","verde petrolio","morski"],'verde oscuro':["dark green","vert foncé","dunkelgrün","verde scuro","ciemnozielony"],'azul real':["royal blue","bleu roi","königsblau","blu reale","królewski niebieski"],'lavanda':["lavender","lavande","lavendel","lavanda","lawendowy"],'personalizado':["custom","personnalisé","benutzerdefiniert","personalizzato","niestandardowy"]
};

// v1.3.93: fusionar árabe y chino sin sustituir las cinco traducciones existentes.
const COLOR_I18N_AR_ZH={
'negro':["أسود","黑色"],'blanco':["أبيض","白色"],'rojo':["أحمر","红色"],
'rojo oscuro':["أحمر داكن","深红色"],'naranja':["برتقالي","橙色"],
'amarillo':["أصفر","黄色"],'verde lima':["أخضر ليموني","青柠绿"],
'verde':["أخضر","绿色"],'cian':["سماوي","青色"],'azul celeste':["أزرق سماوي","天蓝色"],
'celeste':["أزرق فاتح","浅蓝色"],'azul':["أزرق","蓝色"],'violeta':["بنفسجي","紫罗兰色"],
'morado':["أرجواني","紫色"],'magenta':["أرجواني فاقع","品红色"],'rosa claro':["وردي فاتح","浅粉色"],
'rosa':["وردي","粉色"],'gris oscuro':["رمادي داكن","深灰色"],'gris':["رمادي","灰色"],
'marrón cuero':["بني جلدي","皮革棕色"],'marrón':["بني","棕色"],'turquesa':["فيروزي","绿松石色"],
'beige claro':["بيج فاتح","浅米色"],'beige':["بيج","米色"],'dorado':["ذهبي","金色"],
'plateado':["فضي","银色"],'índigo':["نيلي","靛蓝色"],'marfil':["عاجي","象牙白"],
'rojo ladrillo':["أحمر آجري","砖红色"],'verde césped':["أخضر عشبي","草绿色"],
'verde azulado':["أخضر مزرق","蓝绿色"],'verde oscuro':["أخضر داكن","深绿色"],
'azul real':["أزرق ملكي","宝蓝色"],'lavanda':["لافندر","薰衣草色"],
'personalizado':["مخصص","自定义"],'amarillo intenso':["أصفر زاهٍ","鲜黄色"],
'rojo intenso':["أحمر زاهٍ","鲜红色"],'rosa intenso':["وردي زاهٍ","鲜粉色"],
'azul intenso':["أزرق زاهٍ","鲜蓝色"],'verde intenso':["أخضر زاهٍ","鲜绿色"],
'gris claro':["رمادي فاتح","浅灰色"],'gris muy oscuro':["رمادي شديد الداكن","极深灰色"],
'gris apagado':["رمادي باهت","灰褐色"],'azul oscuro':["أزرق داكن","深蓝色"],
'amarillo anaranjado':["أصفر برتقالي","橙黄色"],'rojo anaranjado':["أحمر برتقالي","橘红色"],
'coral':["مرجاني","珊瑚色"],'morado oscuro':["أرجواني داكن","深紫色"],
'violeta oscuro':["بنفسجي داكن","深紫罗兰色"],'rosa oscuro':["وردي داكن","深粉色"],
'verde azulado oscuro':["أخضر مزرق داكن","深蓝绿色"],'azul muy oscuro':["أزرق شديد الداكن","极深蓝色"],
'verde muy oscuro':["أخضر شديد الداكن","极深绿色"],'blanco roto':["أبيض مائل للكريمي","米白色"]
};
for(const [name,extra] of Object.entries(COLOR_I18N_AR_ZH)){
 const values=Array.isArray(COLOR_I18N[name])?COLOR_I18N[name].slice():["","","","",""];
 values[5]=extra[0]; values[6]=extra[1]; COLOR_I18N[name]=values;
}


// v1.3.93: traducciones completas de nombres de color para árabe y chino simplificado.
const COLOR_I18N_EXTRA={
"blanco":["أبيض", "白色"],
"rojo":["أحمر", "红色"],
"rojo oscuro":["أحمر داكن", "深红色"],
"naranja":["برتقالي", "橙色"],
"amarillo":["أصفر", "黄色"],
"verde lima":["أخضر ليموني", "青柠绿"],
"verde":["أخضر", "绿色"],
"cian":["سماوي", "青色"],
"azul celeste":["أزرق سماوي", "天蓝色"],
"celeste":["أزرق فاتح", "浅蓝色"],
"azul":["أزرق", "蓝色"],
"violeta":["بنفسجي", "紫罗兰色"],
"morado":["أرجواني", "紫色"],
"magenta":["أرجواني فاقع", "品红色"],
"rosa claro":["وردي فاتح", "浅粉色"],
"rosa":["وردي", "粉色"],
"gris oscuro":["رمادي داكن", "深灰色"],
"gris":["رمادي", "灰色"],
"marrón cuero":["بني جلدي", "皮革棕色"],
"marrón":["بني", "棕色"],
"turquesa":["فيروزي", "绿松石色"],
"beige claro":["بيج فاتح", "浅米色"],
"beige":["بيج", "米色"],
"dorado":["ذهبي", "金色"],
"plateado":["فضي", "银色"],
"índigo":["نيلي", "靛蓝色"],
"marfil":["عاجي", "象牙白"],
"rojo ladrillo":["أحمر آجري", "砖红色"],
"verde césped":["أخضر عشبي", "草绿色"],
"verde azulado":["أخضر مزرق", "蓝绿色"],
"verde oscuro":["أخضر داكن", "深绿色"],
"azul real":["أزرق ملكي", "宝蓝色"],
"lavanda":["لافندر", "薰衣草色"],
"personalizado":["مخصص", "自定义"],
"gris muy oscuro":["رمادي شديد الداكن", "极深灰色"],
"gris claro":["رمادي فاتح", "浅灰色"],
"coral":["مرجاني", "珊瑚色"],
"rojo anaranjado":["أحمر برتقالي", "橘红色"],
"amarillo anaranjado":["أصفر برتقالي", "橙黄色"],
"marrón oscuro":["بني داكن", "深棕色"],
"azul oscuro":["أزرق داكن", "深蓝色"],
"rosa oscuro":["وردي داكن", "深粉色"],
"magenta oscuro":["أرجواني داكن", "深品红色"],
"violeta oscuro":["بنفسجي داكن", "深紫罗兰色"],
"morado oscuro":["أرجواني داكن", "深紫色"],
"rojo muy oscuro":["أحمر شديد الداكن", "极深红色"],
"verde muy oscuro":["أخضر شديد الداكن", "极深绿色"],
"azul muy oscuro":["أزرق شديد الداكن", "极深蓝色"],
"rojo intenso":["أحمر زاهٍ", "鲜红色"],
"naranja intenso":["برتقالي زاهٍ", "鲜橙色"],
"amarillo intenso":["أصفر زاهٍ", "鲜黄色"],
"verde intenso":["أخضر زاهٍ", "鲜绿色"],
"azul intenso":["أزرق زاهٍ", "鲜蓝色"],
"magenta intenso":["أرجواني فاقع", "鲜品红色"],
"violeta intenso":["بنفسجي زاهٍ", "鲜紫罗兰色"],
"morado intenso":["أرجواني زاهٍ", "鲜紫色"],
"rosa intenso":["وردي زاهٍ", "鲜粉色"],
"rojo apagado":["أحمر باهت", "暗红色"],
"naranja apagado":["برتقالي باهت", "暗橙色"],
"amarillo apagado":["أصفر باهت", "暗黄色"],
"verde apagado":["أخضر باهت", "暗绿色"],
"azul apagado":["أزرق باهت", "暗蓝色"],
"violeta apagado":["بنفسجي باهت", "暗紫罗兰色"],
"morado apagado":["أرجواني باهت", "暗紫色"],
"rosa apagado":["وردي باهت", "灰粉色"],
"magenta apagado":["أرجواني باهت", "灰品红色"],
"blanco roto":["أبيض مائل للكريمي", "米白色"],
};
const COLOR_SHADE_I18N={claro:["فاتح","浅"],oscuro:["داكن","深"],"muy oscuro":["شديد الداكن","极深"],intenso:["زاهٍ","鲜艳"],apagado:["باهت","灰调"]};
const COLOR_BASE_NAMES=["rojo","coral","rojo anaranjado","beige","naranja","amarillo anaranjado","amarillo","verde lima","verde","verde azulado","turquesa","cian","azul","índigo","violeta","morado","magenta","rosa"];
for(const base of COLOR_BASE_NAMES){
 const source=COLOR_I18N_EXTRA[base]||COLOR_I18N[base]?.slice(5,7);
 if(!source||!source[0]||!source[1])continue;
 for(const [shade,labels] of Object.entries(COLOR_SHADE_I18N)){
  const key=base+" "+shade;
  if(!COLOR_I18N_EXTRA[key]&&!COLOR_I18N[key])COLOR_I18N_EXTRA[key]=[source[0]+" "+labels[0],labels[1]+source[1]];
 }
}
for(const [name,extra] of Object.entries(COLOR_I18N_EXTRA)){
 if(!Array.isArray(COLOR_I18N[name]))COLOR_I18N[name]=["","","","",""];
 COLOR_I18N[name][5]=extra[0]; COLOR_I18N[name][6]=extra[1];
}

const COLOR_ALIAS=new Map();for(const [es,values] of Object.entries(COLOR_I18N)){COLOR_ALIAS.set(String(es||'').toLocaleLowerCase(),es);for(const value of (Array.isArray(values)?values:[])){if(typeof value!=='string'||!value.trim())continue;COLOR_ALIAS.set(value.toLocaleLowerCase(),es)}}COLOR_ALIAS.set('marron','marrón');
const COLOR_NAMES=[...COLOR_ALIAS.keys()].sort((a,b)=>b.length-a.length);
const translateColorTokens=value=>{const raw=String(value??'');const normalized=raw.trim().toLocaleLowerCase();const exact=COLOR_ALIAS.has(normalized);const contextual=/#(?:[0-9a-f]{3,8})\b/i.test(raw)||/(?:PETG|PLA|ABS|TPU|PVA|ASA|PC|PA|filament|filamento|\bRGB\b)/i.test(raw);if(!exact&&!contextual)return raw;let text=raw;for(const alias of COLOR_NAMES){const re=new RegExp('(^|[^\\p{L}])('+alias+')(?=$|[^\\p{L}])','giu');text=text.replace(re,(all,left,word)=>{const canonical=COLOR_ALIAS.get(word.toLocaleLowerCase());if(!canonical)return all;let result=lang==='es'?canonical:(COLOR_I18N[canonical]&&COLOR_I18N[canonical][idx[lang]])||canonical;if(typeof result!=='string'||!result)result=canonical;if(/^\p{Lu}/u.test(word))result=result.charAt(0).toLocaleUpperCase()+result.slice(1);return left+result})}return text};

const norm=s=>String(s||'').replace(/\s+/g,' ').trim();const reverse=new Map();for(const [key,values] of Object.entries(D))for(const value of values){const k=norm(value);if(k&&!reverse.has(k))reverse.set(k,key)}const source=s=>{const k=norm(s);return D[k]?k:(reverse.get(k)||s)};const templatePatterns=[];for(const [key,values] of Object.entries(D)){if(!/\{\w+\}/.test(key))continue;const variants=[key,...values];for(const variant of variants){const parts=norm(variant).split(/(\{\w+\})/g);const names=[];const body=parts.map(part=>{const m=part.match(/^\{(\w+)\}$/);if(m){names.push(m[1]);return '([\\s\\S]+?)'}return part.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&')}).join('');templatePatterns.push({key,names,re:new RegExp('^'+body+'$')})}}// Polski jest piątą kolumną słownika (ES, EN, FR, DE, IT, PL).
// Tworzymy wpisy PL na podstawie angielskiej kolumny i kontrolowanego słownika terminów;
// Las traducciones manuales al polaco se mantienen en la quinta columna del diccionario.
// v1.473: explicit six-language translations for dynamic UI messages still hard-coded in modules.


const pcpPolishMake=en=>String(en??'');
// v1.469: Polish translations are materialized in the fifth column of each dictionary entry.

for(const [key,values] of Object.entries(D)){if(!Array.isArray(values))continue;if(typeof values[4]!=='string'||!values[4].trim())values[4]=String(values[0]||key);/* Arabic and Simplified Chinese are progressively translated; untranslated entries explicitly fall back to English. */if(typeof values[5]!=='string'||!values[5].trim())values[5]=String(values[0]||key);if(typeof values[6]!=='string'||!values[6].trim())values[6]=String(values[0]||key);if(values.length>7)values.length=7;}
const translate=s=>{const k=source(s);const v=D[norm(k)];if(v){const selected=lang==='es'?k:(v[idx[lang]]??v[0]??k);return translateColorTokens(String(selected??k))}const text=norm(s);for(const p of templatePatterns){const m=p.re.exec(text);if(!m)continue;const vals=D[p.key];const template=lang==='es'?p.key:(vals&&(vals[idx[lang]]??vals[0]))||p.key;let i=0;return translateColorTokens(String(template??p.key).replace(/\{\w+\}/g,()=>m[++i]||''))}return translateColorTokens(lang==='es'?k:String(s??''))};
const pcpTextOriginal=new WeakMap(),pcpTextRendered=new WeakMap(),pcpAttrOriginal=new WeakMap(),pcpAttrRendered=new WeakMap();function pcpStableText(node){const current=String(node.nodeValue??'');const last=pcpTextRendered.get(node);let original;if(last!==undefined&&current===last)original=pcpTextOriginal.get(node);else{original=current;pcpTextOriginal.set(node,original)}const rendered=translate(original);pcpTextRendered.set(node,rendered);if(rendered!==current)node.nodeValue=rendered}function pcpStableAttr(el,a){const current=el.getAttribute(a);if(current===null)return;let store=pcpAttrOriginal.get(el);if(!store){store={};pcpAttrOriginal.set(el,store)}let renderedStore=pcpAttrRendered.get(el);if(!renderedStore){renderedStore={};pcpAttrRendered.set(el,renderedStore)}const last=renderedStore[a];let original;if(last!==undefined&&current===last)original=store[a];else{original=current;store[a]=original}const rendered=translate(original);renderedStore[a]=rendered;if(rendered!==current)el.setAttribute(a,rendered)}function walk(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(w.nextNode()){const n=w.currentNode;if(n.parentElement&&n.parentElement.closest('script,style,textarea,pre,code'))continue;nodes.push(n)}for(const n of nodes)pcpStableText(n);const selector='[data-i18n],input,textarea,option,button,[aria-label],[title]';const els=[];if(root.matches&&root.matches(selector))els.push(root);if(root.querySelectorAll)els.push(...root.querySelectorAll(selector));for(const e of els){if(e.hasAttribute('data-i18n')){const v=translate(e.getAttribute('data-i18n'));if(e.textContent!==v)e.textContent=v;}for(const a of ['placeholder','title','aria-label'])pcpStableAttr(e,a)}}
const pcpTitleState={original:document.title,rendered:null};function pcpStableDocumentTitle(){const current=document.title;if(pcpTitleState.rendered===null||current!==pcpTitleState.rendered)pcpTitleState.original=current;const rendered=translate(pcpTitleState.original);pcpTitleState.rendered=rendered;if(current!==rendered)document.title=rendered}function apply(){document.documentElement.setAttribute('translate','no');document.documentElement.lang=lang;const rtl=lang==='ar';document.documentElement.dir=rtl?'rtl':'ltr';document.documentElement.classList.toggle('pcp-rtl',rtl);window.PCP_LOCALE=locales[lang]||'es-ES';pcpStableDocumentTitle();walk(document.body);const spoolColor=document.getElementById('spoolColor');if(spoolColor){const localized=translateColorTokens(spoolColor.value);if(localized!==spoolColor.value)spoolColor.value=localized}const sel=document.getElementById('pcpLanguage');if(sel)sel.value=lang;const qv=document.getElementById('quoteValidity');if(qv){const qvk=source(qv.value);if(D[norm(qvk)])qv.value=translate(qv.value)}/* No recalcular aquí: calculate() vuelve a renderizar textos en el idioma base y deshace el cambio de idioma. */}

// v1.481: cadenas emitidas directamente por los módulos, centralizadas para los seis idiomas.


// v1.485: central dictionary coverage for remaining invoice/customer/inventory UI messages.


// v1.486: traducciones centralizadas para perfiles de impresora, bobinas y facturación.



// v1.514: cadenas adicionales detectadas en HTML dinámico y flujos de clientes/documentos/impresión.



// v1.3.86: etiquetas del botón flotante para restaurar el monitor U1.
D["Mostrar panel"]=["Show panel", "Afficher le panneau", "Panel anzeigen", "Mostra pannello", "Pokaż panel", "إظهار اللوحة", "显示面板"];
D["Mostrar monitor Snapmaker U1"]=["Show Snapmaker U1 monitor", "Afficher le moniteur Snapmaker U1", "Snapmaker-U1-Monitor anzeigen", "Mostra monitor Snapmaker U1", "Pokaż monitor Snapmaker U1", "إظهار شاشة مراقبة Snapmaker U1", "显示 Snapmaker U1 监控面板"];
D["🖨 Snapmaker U1 · Mostrar panel"]=["🖨 Snapmaker U1 · Show panel", "🖨 Snapmaker U1 · Afficher le panneau", "🖨 Snapmaker U1 · Panel anzeigen", "🖨 Snapmaker U1 · Mostra pannello", "🖨 Snapmaker U1 · Pokaż panel", "🖨 Snapmaker U1 · إظهار اللوحة", "🖨 Snapmaker U1 · 显示面板"];

D["Monitor Snapmaker U1"]=["Snapmaker U1 monitor", "Moniteur Snapmaker U1", "Snapmaker-U1-Monitor", "Monitor Snapmaker U1", "Monitor Snapmaker U1", "شاشة مراقبة Snapmaker U1", "Snapmaker U1 监控面板"];

// v1.3.87: mensajes de progreso devueltos por el lector PowerShell de G-code.
D["Leyendo datos del G-code… {progress}%"]=["Reading G-code data… {progress}%", "Lecture des données G-code… {progress} %", "G-Code-Daten werden gelesen… {progress} %", "Lettura dei dati G-code… {progress}%", "Odczytywanie danych G-code… {progress}%", "جارٍ قراءة بيانات G-code… {progress}٪", "正在读取 G-code 数据… {progress}%"];
D["Analizando los metadatos de los filamentos…"]=["Analyzing filament metadata…", "Analyse des métadonnées des filaments…", "Filament-Metadaten werden analysiert…", "Analisi dei metadati dei filamenti…", "Analizowanie metadanych filamentu…", "جارٍ تحليل البيانات الوصفية للخيوط…", "正在分析耗材元数据……"];
D["Fuente: {message} · {file}"]=["Source: {message} · {file}", "Source : {message} · {file}", "Quelle: {message} · {file}", "Fonte: {message} · {file}", "Źródło: {message} · {file}", "المصدر: {message} · {file}", "来源：{message} · {file}"];

window.PCP_I18N={dictionary:D,refresh(){for(const [key,values] of Object.entries(D)){if(!Array.isArray(values))continue;if(typeof values[4]!=='string'||!values[4].trim())values[4]=String(values[0]||key);if(typeof values[5]!=='string'||!values[5].trim())values[5]=String(values[0]||key);if(typeof values[6]!=='string'||!values[6].trim())values[6]=String(values[0]||key);}apply()},completePolish(){let added=0;for(const [key,values] of Object.entries(D)){if(!Array.isArray(values))continue;if(typeof values[4]!=='string'||!values[4].trim()){values[4]=String(values[0]||key);added++}if(typeof values[5]!=='string'||!values[5].trim())values[5]=String(values[0]||key);if(typeof values[6]!=='string'||!values[6].trim())values[6]=String(values[0]||key)}return added},t:key=>translate(key),colorSource:value=>COLOR_ALIAS.get(norm(value).toLocaleLowerCase())||value,colorDisplay:value=>translateColorTokens(value),format(key,values={}){return String(translate(key)).replace(/\{(\w+)\}/g,(_,k)=>values[k]??'')},get language(){return lang},setLanguage(code){if(!Object.prototype.hasOwnProperty.call(idx,code)||code===lang)return;lang=code;try{localStorage.setItem('pcp_language',code)}catch(e){}apply();requestAnimationFrame(()=>apply());window.dispatchEvent(new Event('pcp-language-changed'))}};const nativeAlert=window.alert.bind(window),nativeConfirm=window.confirm.bind(window);window.alert=msg=>nativeAlert(window.PCP_I18N.t(String(msg)));window.confirm=msg=>nativeConfirm(window.PCP_I18N.t(String(msg)));
const init=()=>{const nav=document.querySelector('.tab-navigation');if(nav&&!document.getElementById('pcpLanguage')){const wrap=document.createElement('label');wrap.className='language-switch';wrap.style.cssText='margin-left:auto;display:flex;align-items:center;gap:6px;padding:4px 8px;color:var(--muted);font-size:12px';wrap.innerHTML='<span>🌐</span><select id="pcpLanguage" aria-label="Language" style="background:#0c1424;color:var(--txt);border:1px solid #30415e;border-radius:7px;padding:7px">'+Object.entries(langs).map(([k,v])=>'<option value="'+k+'">'+v+'</option>').join('')+'</select>';nav.appendChild(wrap);wrap.querySelector('select').addEventListener('change',e=>window.PCP_I18N.setLanguage(e.target.value))}apply();let pendingNodes=new Set(),translationFrame=0;const obs=new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData'&&m.target)pendingNodes.add(m.target);for(const n of m.addedNodes)if(n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE)pendingNodes.add(n)}if(translationFrame||!pendingNodes.size)return;translationFrame=requestAnimationFrame(()=>{translationFrame=0;const list=[...pendingNodes];pendingNodes.clear();const roots=list.filter(n=>!list.some(p=>p!==n&&p.nodeType===Node.ELEMENT_NODE&&p.contains(n)));for(const n of roots){if(n.nodeType===Node.ELEMENT_NODE)walk(n);else{const v=translate(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v}}})});obs.observe(document.body,{subtree:true,childList:true,characterData:true});if(window.PCP_INTEGRATION_DATA&&typeof loadIntegrationData==='function')loadIntegrationData()};

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

;if(window.PCP_I18N){if(typeof window.PCP_I18N.completePolish==='function')window.PCP_I18N.completePolish();if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();}

;

;
/* v1.3.3 — Corrección del diálogo de confirmación para habilitar eliminaciones. */

/* v1.529: usunięto automatyczne podmienianie słów, które psuło całe zdania po polsku. */

// v1.479: jawne korekty polskich tłumaczeń, bez automatycznego mieszania języków.




/* v1.480 — Catálogo central de textos de interfaz ES/EN/FR/DE/IT/PL. */



/* v1.480 — complementos de cobertura para textos HTML restantes. */


/* v1.480 — textos dinámicos restantes de cálculo, contabilidad, U1 y SQLite. */


/* v1.480 — etiquetas dinámicas y fragmentos de HTML generados por módulos. */


/* v1.482 — ampliación central para estados dinámicos del monitor y conexión U1. */


// v1.484: uzupełnienie brakujących tłumaczeń interfejsu i korekta języka polskiego.


// v1.487: cadenas de interfaz centralizadas detectadas en módulos dinámicos.



// v1.488: lote adicional de cadenas de interfaz centralizadas (seis idiomas).
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();

// v1.489: cadenas adicionales de interfaz centralizadas en el diccionario principal.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();

// v1.490: ampliación del diccionario centralizado para monitor U1 y contabilidad.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();

// v1.491: traducciones centralizadas adicionales para el monitor U1 y el control de consumo.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.492: centralización adicional de mensajes de lectura del G-code activo de la U1.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.493: centralización de mensajes de validación e informes de Contabilidad.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.495: etiquetas y estados del informe contable centralizados.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.496: textos de Opciones y estado de conexión del puente U1.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.497: mensajes de validación y exportación del módulo Contabilidad.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.498 — mensajes de interfaz centralizados del cálculo, clientes e imágenes.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.499 — conexión y diagnóstico U1: los mensajes dinámicos usan el diccionario central.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.500 — mensajes de configuración y prueba de conexión de la Snapmaker U1.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.501 — textos adicionales del selector y estado de impresoras U1.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.502 — mensajes dinámicos del consumo de filamento y revisión de traducciones polacas.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.503 — opciones de moneda, impuestos y prueba de conexión de impresora.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.504 — etiquetas del selector y detección de impresoras, verificadas contra monitor-u1-impresora.js.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.505 — mensajes de conexión y persistencia del selector U1, contrastados con monitor-u1-impresora.js.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.507 — estados de lectura del G-code activo centralizados y conectados al traductor.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.508 — etiquetas visibles de Opciones centralizadas en el diccionario.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.509 — estados de prueba de conexión de Opciones centralizados.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.510 — etiquetas de estado y avisos del monitor U1 conectados al traductor central.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.511 — auditoría de cobertura: cadenas nuevas de monitor U1, contabilidad y documentos añadidas al diccionario central para los seis idiomas.

if(window.PCP_I18N&&typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();

;
if(window.PCP_I18N){if(typeof window.PCP_I18N.completePolish==='function')window.PCP_I18N.completePolish();if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();}


// v1.515 — audyt łańcuchów komunikatów dynamicznych i korekty polskich tłumaczeń.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary; if(!d)return;
 
 if(typeof window.PCP_I18N.completePolish==='function')window.PCP_I18N.completePolish();
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();

// v1.515 — formatos traducibles para mensajes con valores dinámicos.
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;if(window.PCP_I18N.completePolish)window.PCP_I18N.completePolish();if(window.PCP_I18N.refresh)window.PCP_I18N.refresh();})();


// v1.527 — Audyt uzupełniający: poprawki polskich tłumaczeń bez dodawania duplikatów.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const fixes={"Color (nombre y HEX)":"Kolor (nazwa i kod HEX)","＋ Añadir color/material":"＋ Dodaj kolor/materiał","Color del filamento":"Kolor filamentu","Conexión con la Snapmaker U1":"Połączenie z drukarką Snapmaker U1","✓ Calcular precio final":"✓ Oblicz cenę końcową","Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.":"Opcja służy do klasyfikowania wyceny w Księgowości podczas jej zapisywania. Wydruki na własny użytek nie generują sprzedaży ani zysku handlowego.","El archivo se procesa en este navegador y no se envía a ningún servidor.":"Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.","Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.":"Snapmaker U1: szacunkowy koszt 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.","Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.":"Po sprawdzeniu danych części oblicz zalecaną cenę sprzedaży i rentowność.","El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.":"Zysk jest obliczany na podstawie ceny sprzedaży bez podatku; pobrany podatek jest wykazywany osobno. Prowizja jest naliczana od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — wprowadź koszty w wybranej walucie.","Material, color y marca":"Materiał, kolor i marka","Color (A–Z)":"Kolor (A–Z)","Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):":"Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko koszt filamentu). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):","Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:":"Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko koszt filamentu). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby popraw koszt wykonania:","＋ Guardar color personalizado":"＋ Zapisz własny kolor","Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.":"Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do karty „Klienci”, aby można go było ponownie wybierać przy zamówieniach, ofertach i fakturach. Dokument przeznaczony do wydruku nie pokazuje kosztów wewnętrznych ani marży.","Ver impresora conectada":"Zobacz podłączoną drukarkę","Material / color":"Materiał / kolor","Preferencias generales de Print Cost & Profit. Los cambios se guardan en la base de datos SQLite de este PC.":"Ogólne ustawienia Print Cost & Profit. Zmiany są zapisywane w bazie danych SQLite na tym komputerze.","Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.":"Wyeksportuj informacje zapisane przez aplikację w pamięci lokalnej przeglądarki. Zapisz plik poza folderem tymczasowym.","🖨️ Conexión con la Snapmaker U1":"🖨️ Połączenie z drukarką Snapmaker U1","Contabilidad · Print Cost & Profit":"Księgowość · Print Cost & Profit","Color aproximado (HEX inventario: {hex}); revisa la bobina.":"Przybliżony kolor (kod HEX z magazynu: {hex}); sprawdź szpulę.","Fuente confirmada: G-code activo de la U1 · {file}":"Potwierdzone źródło: aktywny plik G-code drukarki U1 · {file}","Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.":"Wstępne oszacowanie, nie jest to rzeczywisty pomiar zużycia poszczególnych kolorów. Stan magazynowy zostanie pomniejszony dopiero po zakończeniu zadania.","Venta/u.":"Sprzedaż/szt.","Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.":"Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Żywotność 10 000 godzin jest edytowalnym założeniem.","Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.":"Orientacyjna zalecana cena: {gross} z podatkami · orientacyjny zysk na sztukę: {profit}. Dodatki A/B/C są doliczane do tej ceny. Podatek: {tax} · Prowizja naliczana od ceny z podatkami: {commission} · Liczba sztuk: {units}. ★ oznacza najwyższy zysk na sztukę.","Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».":"Znaleziono drukarki: {count}. Wybierz adres IP, którego chcesz użyć w sekcji „Znalezione drukarki”.","No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.":"Nie udało się automatycznie wyszukać drukarki: {error}. Możesz użyć zapisanego adresu IP lub wyszukać ją ręcznie.","Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.":"To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.","Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.":"To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na użytek własny? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.","El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.":"Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.","Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?":"Przywrócenie tej kopii zastąpi bieżące dane aplikacji zapisane lokalnie. Przed kontynuowaniem wyeksportuj kopię zapasową, aby móc w razie potrzeby przywrócić poprzedni stan. Kontynuować?","Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?":"Lokalne wpisy zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?","¿Eliminar el color personalizado {hex} de la paleta?":"Czy usunąć własny kolor {hex} z palety?","IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file} · Software: {software}":"PODŁĄCZONA DRUKARKA · {name} · IP {ip} · Stan: {state} · Plik: {file} · Oprogramowanie: {software}","consultando la impresora conectada":"sprawdzanie stanu podłączonej drukarki","Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».":"Wczytano 2 zapisane drukarki. Możesz wybrać i połączyć się z dowolną z nich bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.","Introduce los datos del nuevo cliente.":"Wprowadź dane nowego klienta.","Conectado":"Połączono","Desconectado":"Rozłączono","Listo":"Gotowe","Introduce un precio de venta superior a 0 {currency} para evaluar la rentabilidad.":"Aby ocenić rentowność, podaj cenę sprzedaży wyższą niż 0 {currency}.","¿Eliminar el color personalizado {color} de la paleta?":"Czy usunąć własny kolor {color} z palety?","Probar conexión":"Przetestuj połączenie"};
 let corrected=0;
 for(const [key,polish] of Object.entries(fixes)){
   if(Object.prototype.hasOwnProperty.call(dict,key)&&Array.isArray(dict[key])&&dict[key].length>=5){dict[key][4]=polish;corrected++;}
 }
 if(window.PCP_I18N.refresh)window.PCP_I18N.refresh();
})();


// v1.528 — audyt uzupełniający: poprawione polskie tłumaczenia i brakujące klucze bez duplikowania istniejących wpisów.

// v1.529 — korekty pełnych zdań po polsku; bez automatycznych podmian słów i bez duplikowania kluczy.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary; if(!dict)return;
 const fixes={"Mantenimiento y recambios": "Konserwacja i części zamienne", "Presupuestos guardados": "Zapisane oferty", "🛡️ Base de datos y copias de seguridad": "🛡️ Baza danych i kopie zapasowe", "10 copias": "10 kopii zapasowych", "25 copias": "25 kopii zapasowych", "50 copias": "50 kopii zapasowych", "200 copias": "200 kopii zapasowych", "500 copias": "500 kopii zapasowych", "Copias guardadas": "Zapisane kopie zapasowe", "Copias de seguridad disponibles": "Dostępne kopie zapasowe", "Todavía no hay copias SQLite.": "Nie ma jeszcze kopii zapasowych SQLite.", "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y seguimiento de pedidos.": "Centralna książka klientów. Zapisanych tutaj klientów można wybierać w ofertach, fakturach i śledzeniu zamówień.", "Presupuestos · Clientes y documentos": "Oferty · Klienci i dokumenty", "💾 Copias de seguridad": "💾 Kopie zapasowe", "📄 Presupuestos": "📄 Oferty", "🧾 Facturas": "🧾 Faktury", "Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.": "Opcja służy do klasyfikowania wyceny w Księgowości podczas jej zapisywania. Wydruki na własny użytek nie generują sprzedaży ani zysku handlowego.", "El archivo se procesa en este navegador y no se envía a ningún servidor.": "Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.", "Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.": "Snapmaker U1: szacunkowy koszt 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.", "Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.": "Po sprawdzeniu danych części oblicz zalecaną cenę sprzedaży i rentowność.", "El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.": "Zysk oblicza się od ceny sprzedaży bez podatku; pobrany podatek jest wykazywany osobno. Prowizję oblicza się od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — koszty należy wprowadzić w wybranej walucie.", "Precio de referencia: primero el precio de lanzamiento documentado y, si no, el precio actual de venta; es editable y no indica lo pagado. Los importes cargados están en EUR; para fuentes USD se aplicó el cambio BCE del 21-10-2026 (1 EUR = 1,1234 USD). Mantenimiento es una estimación presupuestaria por complejidad (cesta de repuestos por 1.000 h), no una tarifa del fabricante; puedes editarla. Para el precio sin fuente, el campo sigue vacío. Vida útil inicial de 10.000 h editable. Electricidad, amortización y mantenimiento se calculan por separado.": "Cena referencyjna to udokumentowana cena początkowa, a jeśli jej brak — aktualna cena sprzedaży. Można ją edytować; nie oznacza kwoty faktycznie zapłaconej. Zaimportowane kwoty podano w EUR; dla źródeł w USD zastosowano kurs EBC z 21.10.2026 (1 EUR = 1,1234 USD). Koszt konserwacji jest szacunkiem budżetowym zależnym od złożoności (zestaw części zamiennych na 1000 godzin), a nie stawką producenta; można go edytować. Jeśli brak źródła ceny, pole pozostaje puste. Początkowa żywotność wynosi 10 000 godzin i można ją edytować. Koszty energii elektrycznej, amortyzacji i konserwacji są obliczane oddzielnie.", "Estimación Snapmaker U1: 160 EUR de cesta presupuestaria / 1.000 h. Editable.": "Szacunkowy budżet części zamiennych dla Snapmaker U1: 160 EUR na 1000 godzin. Wartość można edytować.", "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):": "Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):", "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:": "Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby popraw koszt wykonania:", "Control manual de bobinas y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": "Ręczna kontrola szpul i pozostałego materiału. Cena za kilogram służy jako punkt odniesienia do kolejnych obliczeń.", "Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.": "Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do karty „Klienci”, aby można go było ponownie wybierać przy zamówieniach, ofertach i fakturach. Dokument do wydruku nie pokazuje kosztów wewnętrznych ani marży.", "Impresoras encontradas": "Znalezione drukarki", "Estados Unidos · depende del estado/localidad": "Stany Zjednoczone · zależnie od stanu lub miejscowości", "Print Cost & Profit v1.283 · SQLite local en el PC; diagnóstico de integridad y copias de seguridad.": "Print Cost & Profit v1.283 · lokalna baza SQLite na komputerze; diagnostyka integralności i kopii zapasowych.", "Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.": "Eksportuje informacje zapisane przez aplikację w pamięci lokalnej przeglądarki. Zapisz plik poza folderem tymczasowym.", "Precio del filamento importado desde el laminador: {n} precio(s) por kg. Comprueba que coincida con el precio de tu bobina.": "Cena filamentu zaimportowana z programu do cięcia: {n} cena/ceny za kg. Sprawdź, czy odpowiada cenie Twojej szpuli.", "Stock insuficiente: hay {stock} g y se necesitan {need} g; faltarían {missing} g. No llegaría con esta bobina.": "Niewystarczający stan magazynowy: dostępne {stock} g, wymagane {need} g; brakuje {missing} g. Ta szpula nie wystarczy.", "Color aproximado (HEX inventario: {hex}); revisa la bobina.": "Przybliżony kolor (kod HEX z magazynu: {hex}); sprawdź szpulę.", "No se pudo guardar automáticamente en este navegador": "Nie udało się automatycznie zapisać danych w tej przeglądarce.", "Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.": "Wstępne oszacowanie — nie jest to rzeczywisty pomiar zużycia poszczególnych kolorów. Stan magazynowy zostanie pomniejszony dopiero po zakończeniu zadania.", "Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.": "Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Żywotność 10 000 godzin jest edytowalnym założeniem.", "Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.": "Orientacyjna zalecana cena: {gross} z podatkami · orientacyjny zysk na sztukę: {profit}. Dodatki A/B/C są doliczane do tej ceny. Podatek: {tax} · Prowizja naliczana od ceny z podatkami: {commission} · Liczba sztuk: {units}. ★ oznacza najwyższy zysk na sztukę.", "Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».": "Znaleziono drukarki: {count}. Wybierz adres IP, którego chcesz użyć w sekcji „Znalezione drukarki”.", "No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.": "Nie udało się automatycznie wyszukać drukarki: {error}. Możesz użyć zapisanego adresu IP lub wyszukać ją ręcznie.", "Nombre de tu negocio": "Nazwa Twojej firmy", "Multicabezal/toolchanger: cesta presupuestaria de 160 EUR por 1.000 h": "Drukarka wielogłowicowa/toolchanger: szacunkowy budżet części zamiennych 160 EUR na 1000 godzin", "IDEX de doble extrusor: cesta presupuestaria de 120 EUR por 1.000 h": "Drukarka IDEX z dwoma ekstruderami: szacunkowy budżet części zamiennych 120 EUR na 1000 godzin", "Inventario: {all} bobina(s) en total · {filtered} bobina(s) en este filtro.": "Magazyn: łącznie {all} szpul · {filtered} szpul w tym filtrze.", "No hay facturas guardadas": "Nie zapisano jeszcze żadnych faktur.", "Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.", "Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na użytek własny? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.", "El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.": "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.", "Este trabajo ya está registrado en Contabilidad. No se ha creado un duplicado.": "To zadanie jest już zapisane w Księgowości. Nie utworzono duplikatu.", "Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?": "Przywrócenie tej kopii zastąpi bieżące dane aplikacji zapisane lokalnie. Przed kontynuowaniem wyeksportuj kopię zapasową, aby w razie potrzeby móc przywrócić poprzedni stan. Kontynuować?", "Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?": "Lokalne wpisy zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?", "¿Eliminar el color personalizado {hex} de la paleta?": "Czy usunąć własny kolor {hex} z palety?", "consultando la impresora conectada": "Sprawdzanie stanu podłączonej drukarki", "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {backups}.": "Serwer i SQLite zostały sprawdzone. Baza danych: {database}. Folder kopii zapasowych: {backups}.", "Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": "Wczytano 2 zapisane drukarki. Możesz wybrać i połączyć się z dowolną z nich bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.", "Introduce los datos del nuevo cliente.": "Wprowadź dane nowego klienta.", "Ordenar presupuestos": "Sortuj oferty", "Ordenar facturas": "Sortuj faktury", "Venta/u.": "Sprzedaż/szt.", "Material, color y marca": "Materiał, kolor i marka", "Color (A–Z)": "Kolor (A–Z)", "＋ Guardar color personalizado": "＋ Zapisz własny kolor", "Material / color": "Materiał / kolor", "Falta en inventario: {brand} {material} {color} ({hex}). Habría que comprar esta bobina.": "Brak w magazynie: {brand} {material} {color} ({hex}). Tę szpulę trzeba będzie kupić.", "Falta en inventario: {brand} {material} {color}. Habría que comprar esta bobina.": "Brak w magazynie: {brand} {material} {color}. Tę szpulę trzeba będzie kupić.", "Fuente: Leyendo datos del G-code… {progress}% · {file}": "Źródło: odczytywanie danych z G-code… {progress}% · {file}", "Leyendo datos del G-code… {progress}%": "Odczytywanie danych z G-code… {progress}%", "¿Eliminar esta bobina?": "Czy usunąć tę szpulę?", "El margen se calcula sobre el precio de venta sin impuestos; la rentabilidad sobre coste se calcula dividiendo el beneficio entre el coste por unidad. El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": "Marżę oblicza się od ceny sprzedaży bez podatku; rentowność kosztową oblicza się, dzieląc zysk przez koszt jednostkowy. Wyświetlany podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej."};
 let corrected=0;
 for(const [key,pl] of Object.entries(fixes)){if(Object.prototype.hasOwnProperty.call(dict,key)&&Array.isArray(dict[key])&&dict[key].length>=5){if(dict[key][4]!==pl){dict[key][4]=pl;corrected++;}}}
 if(window.PCP_I18N&&typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
 window.PCP_TRANSLATION_AUDIT_V1529={corrected,missingExplicitKeys:0,automaticPolishWordReplacement:false};
})();


// v1.530: traducciones explícitas para los estados y etiquetas dinámicas del monitor U1.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "En espera":["Standby","En veille","Bereit","In attesa","Oczekiwanie",
    "قيد الانتظار",
    "待机"
  ],
  "Inactivo":["Idle","Inactif","Inaktiv","Inattivo","Bezczynny",
    "غير نشط",
    "空闲"
  ],
  "Imprimiendo":["Printing","Impression en cours","Druck läuft","In stampa","Drukowanie",
    "قيد الطباعة",
    "正在打印"
  ],
  "Pausada":["Paused","En pause","Pausiert","In pausa","Wstrzymano",
    "متوقفة مؤقتًا",
    "已暂停"
  ],
  "Completada":["Completed","Terminée","Abgeschlossen","Completata","Zakończono",
    "مكتملة",
    "已完成"
  ],
  "Cancelada":["Cancelled","Annulée","Abgebrochen","Annullata","Anulowano",
    "ملغاة",
    "已取消"
  ],
  "Cambiar impresora": ["Change printer", "Changer d’imprimante", "Drucker wechseln", "Cambia stampante", "Zmień drukarkę",
    "تغيير الطابعة",
    "切换打印机"
  ],
 };
 for(const [key,values] of Object.entries(additions)){
  if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;
  else if(Array.isArray(dict[key])){for(let i=0;i<5;i++)dict[key][i]=values[i];}
 }
 if(window.PCP_I18N.refresh)window.PCP_I18N.refresh();
})();



// v1.533: traducciones completas para etiquetas inglesas que aparecían en el monitor y el inventario.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const fixes={
  "Progress":["Progress","Progression","Fortschritt","Avanzamento","Postęp",
    "التقدم",
    "进度"
  ],
  "Layers":["Layers","Couches","Schichten","Livelli","Warstwy",
    "الطبقات",
    "层数"
  ],
  "Estimated Cena/kg":["Estimated price/kg","Prix estimé/kg","Geschätzter Preis/kg","Prezzo stimato/kg","Szacowana cena/kg",
    "السعر التقديري/كغ",
    "预计价格/千克"
  ],
  "Remaining na szpula":["Remaining on spool","Restant sur la bobine","Rest auf der Spule","Residuo sulla bobina","Pozostało na szpuli",
    "المتبقي في البكرة",
    "线轴剩余量"
  ],
  "Initial na szpula":["Initial spool amount","Quantité initiale sur la bobine","Anfangsmenge der Spule","Quantità iniziale della bobina","Początkowa ilość na szpuli",
    "الكمية الأولية في البكرة",
    "线轴初始容量"
  ],
  "black":["black","noir","schwarz","nero","czarny",
    "أسود",
    "黑色"
  ],
  "white":["white","blanc","weiß","bianco","biały",
    "أبيض",
    "白色"
  ],
  "yellow":["yellow","jaune","gelb","giallo","żółty",
    "أصفر",
    "黄色"
  ],
  "red":["red","rouge","rot","rosso","czerwony",
    "أحمر",
    "红色"
  ],
  "blue":["blue","bleu","blau","blu","niebieski",
    "أزرق",
    "蓝色"
  ],
  "sky blue":["sky blue","bleu ciel","Himmelblau","azzurro cielo","błękitny",
    "أزرق سماوي",
    "天蓝色"
  ],
  "beige":["beige","beige","beige","beige","beżowy",
    "بيج",
    "米色"
  ],
  "Assigned":["Assigned","Attribué","Zugewiesen","Assegnato","Przypisano",
    "مُعيّن",
    "已分配"
  ],
  "Estimated Total":["Estimated total","Total estimé","Geschätzte Gesamtsumme","Totale stimato","Szacunkowa suma",
    "الإجمالي التقديري",
    "预计总量"
  ],
  "No file":["No file","Aucun fichier","Keine Datei","Nessun file","Brak pliku",
    "لا يوجد ملف",
    "无文件"
  ],
  "Standby":["Standby","En veille","Bereitschaft","In attesa","Oczekiwanie",
    "استعداد",
    "待机"
  ],
  "Spool":["Spool","Bobine","Spule","Bobina","Szpula",
    "بكرة",
    "线轴"
  ],
  "Hide":["Hide","Masquer","Ausblenden","Nascondi","Ukryj",
    "إخفاء",
    "隐藏"
  ],
  "Close panel":["Close panel","Fermer le panneau","Panel schließen","Chiudi pannello","Zamknij panel",
    "إغلاق اللوحة",
    "关闭面板"
  ],
  "Refresh":["Refresh","Actualiser","Aktualisieren","Aggiorna","Odśwież",
    "تحديث",
    "刷新"
  ],
  "Register as order":["Register as order","Enregistrer comme commande","Als Auftrag erfassen","Registra come ordine","Zarejestruj jako zamówienie",
    "تسجيل كطلب",
    "登记为订单"
  ]
 };
 for(const [key,values] of Object.entries(fixes)){
  if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;
  else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];
 }
})();


// v1.541 — textos preparados para la futura integración de licencias de pago.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "El sistema de licencias todavía no está configurado.":["The licensing system is not configured yet.","Le système de licences n’est pas encore configuré.","Das Lizenzsystem ist noch nicht konfiguriert.","Il sistema di licenze non è ancora configurato.","System licencji nie jest jeszcze skonfigurowany.",
    "لم يتم إعداد نظام التراخيص بعد。",
    "许可证系统尚未配置。"
  ],
  "La dirección del servicio de licencias debe usar HTTPS.":["The licensing service URL must use HTTPS.","L’adresse du service de licences doit utiliser HTTPS.","Die URL des Lizenzdienstes muss HTTPS verwenden.","L’indirizzo del servizio di licenze deve usare HTTPS.","Adres usługi licencyjnej musi używać HTTPS.",
    "يجب أن يستخدم عنوان خدمة التراخيص بروتوكول HTTPS.",
    "许可证服务地址必须使用 HTTPS。"
  ],
  "No se pudo contactar con el servicio de licencias.":["Could not contact the licensing service.","Impossible de contacter le service de licences.","Der Lizenzdienst konnte nicht erreicht werden.","Impossibile contattare il servizio di licenze.","Nie udało się połączyć z usługą licencji.",
    "تعذر الاتصال بخدمة التراخيص.",
    "无法连接许可证服务。"
  ],
  "Licencia de pago":["Paid license","Licence payante","Kostenpflichtige Lizenz","Licenza a pagamento","Płatna licencja",
    "ترخيص مدفوع",
    "付费许可证"
  ],
  "Estado de la licencia":["License status","État de la licence","Lizenzstatus","Stato della licenza","Stan licencji",
    "حالة الترخيص",
    "许可证状态"
  ],
  "Activar licencia":["Activate license","Activer la licence","Lizenz aktivieren","Attiva licenza","Aktywuj licencję",
    "تفعيل الترخيص",
    "激活许可证"
  ],
  "La comprobación de licencia estará disponible cuando se conecte el servicio privado.":["License checking will be available when the private service is connected.","La vérification de licence sera disponible lorsque le service privé sera connecté.","Die Lizenzprüfung ist verfügbar, sobald der private Dienst verbunden ist.","La verifica della licenza sarà disponibile quando il servizio privato sarà collegato.","Sprawdzanie licencji będzie dostępne po podłączeniu prywatnej usługi.",
    "سيتاح التحقق من الترخيص عند توصيل الخدمة الخاصة.",
    "连接专用服务后即可验证许可证。"
  ]
 };
 for(const [key,values] of Object.entries(additions)){
  if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;
  else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];
 }
})();


// v1.542 — textos para sesión y periodo temporal sin conexión de licencias.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "Introduce tu correo electrónico y contraseña.": ["Enter your email address and password.", "Saisissez votre adresse e-mail et votre mot de passe.", "Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.", "Inserisci il tuo indirizzo email e la password.", "Wprowadź adres e-mail i hasło.",
    "أدخل بريدك الإلكتروني وكلمة المرور.",
    "请输入电子邮件和密码。"
  ],
  "Sin conexión: se utiliza la autorización temporal guardada.":["Offline: the saved temporary authorization is being used.","Hors ligne : l’autorisation temporaire enregistrée est utilisée.","Offline: Die gespeicherte temporäre Berechtigung wird verwendet.","Offline: viene utilizzata l’autorizzazione temporanea salvata.","Offline: używane jest zapisane tymczasowe uprawnienie.",
    "غير متصل: يتم استخدام التفويض المؤقت المحفوظ.",
    "离线：正在使用已保存的临时授权。"
  ],
  "Conéctate a Internet para iniciar sesión o renovar la autorización sin conexión.":["Connect to the internet to sign in or renew offline authorization.","Connectez-vous à Internet pour vous connecter ou renouveler l’autorisation hors ligne.","Stellen Sie eine Internetverbindung her, um sich anzumelden oder die Offline-Berechtigung zu erneuern.","Connettiti a Internet per accedere o rinnovare l’autorizzazione offline.","Połącz się z Internetem, aby się zalogować lub odnowić uprawnienie offline.",
    "اتصل بالإنترنت لتسجيل الدخول أو تجديد التفويض دون اتصال.",
    "请连接互联网以登录或续期离线授权。"
  ],
  "Periodo sin conexión agotado":["Offline period expired","Période hors ligne expirée","Offline-Zeitraum abgelaufen","Periodo offline scaduto","Okres offline wygasł",
    "انتهت فترة العمل دون اتصال",
    "离线期限已结束"
  ],
  "Sesión iniciada correctamente":["Signed in successfully","Connexion réussie","Erfolgreich angemeldet","Accesso riuscito","Zalogowano pomyślnie",
    "تم تسجيل الدخول بنجاح",
    "登录成功"
  ],
  "Cerrar sesión":["Sign out","Se déconnecter","Abmelden","Esci","Wyloguj się",
    "تسجيل الخروج",
    "退出登录"
  ]
 };
 for(const [key,values] of Object.entries(additions)){if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];}
})();


// v1.544 — interfaz de inicio de sesión activada; API pendiente de conexión.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "Inicia sesión con tu cuenta de la web de licencias.": ["Sign in with your account on the licensing website.", "Connectez-vous avec votre compte sur le site des licences.", "Melden Sie sich mit Ihrem Konto auf der Lizenz-Website an.", "Accedi con il tuo account sul sito delle licenze.", "Zaloguj się na swoje konto na stronie licencji.",
    "سجل الدخول باستخدام حسابك في موقع التراخيص.",
    "请使用许可证网站账户登录。"
  ],
  "Contraseña":["Password","Mot de passe","Passwort","Password","Hasło",
    "كلمة المرور",
    "密码"
  ],
  "Abrir web de licencias": ["Open licensing website", "Ouvrir le site des licences", "Lizenz-Website öffnen", "Apri il sito delle licenze", "Otwórz stronę licencji",
    "فتح موقع التراخيص",
    "打开许可证网站"
  ],
  "Conectando…":["Connecting…","Connexion…","Verbindung wird hergestellt…","Connessione…","Łączenie…",
    "جارٍ الاتصال…",
    "正在连接……"
  ],
  "Comprobando la cuenta con el servicio privado…":["Checking the account with the private service…","Vérification du compte auprès du service privé…","Konto wird beim privaten Dienst überprüft…","Verifica dell'account con il servizio privato…","Sprawdzanie konta w usłudze prywatnej…",
    "جارٍ التحقق من الحساب عبر الخدمة الخاصة…",
    "正在通过专用服务验证账户……"
  ],
  "No se pudo iniciar sesión. Comprueba tus datos o la configuración del servicio.":["Could not sign in. Check your details or service configuration.","Connexion impossible. Vérifiez vos identifiants ou la configuration du service.","Anmeldung fehlgeschlagen. Prüfen Sie Ihre Daten oder die Dienstkonfiguration.","Accesso non riuscito. Controlla i dati o la configurazione del servizio.","Nie udało się zalogować. Sprawdź dane lub konfigurację usługi.",
    "تعذر تسجيل الدخول. تحقق من بياناتك أو إعدادات الخدمة.",
    "登录失败。请检查账户信息或服务配置。"
  ],
  "Sesión válida con autorización temporal sin conexión.":["Session valid with temporary offline authorization.","Session valide avec autorisation temporaire hors ligne.","Sitzung mit temporärer Offline-Berechtigung gültig.","Sessione valida con autorizzazione temporanea offline.","Sesja jest ważna dzięki tymczasowemu uprawnieniu offline.",
    "جلسة صالحة مع تفويض مؤقت للعمل دون اتصال.",
    "会话有效，使用离线临时授权。"
  ],
  "Sesión iniciada, pero no se pudo validar la licencia.":["Signed in, but the license could not be validated.","Session ouverte, mais la licence n'a pas pu être validée.","Angemeldet, aber die Lizenz konnte nicht überprüft werden.","Accesso effettuato, ma non è stato possibile convalidare la licenza.","Zalogowano, ale nie udało się zweryfikować licencji.",
    "تم تسجيل الدخول، لكن تعذر التحقق من الترخيص.",
    "已登录，但无法验证许可证。"
  ],
  "Mi cuenta":["My account","Mon compte","Mein Konto","Il mio account","Moje konto",
    "حسابي",
    "我的账户"
  ],
  "Licencia consultada":["License checked","Licence vérifiée","Lizenz geprüft","Licenza verificata","Licencja sprawdzona",
    "تم الاستعلام عن الترخيص",
    "已查询许可证"
  ],
  "Licencia Pro":["Pro license","Licence Pro","Pro-Lizenz","Licenza Pro","Licencja Pro",
    "ترخيص Pro",
    "Pro 许可证"
  ],
  "Licencia Gratis": ["Free license", "Licence gratuite", "Kostenlose Lizenz", "Licenza gratuita", "Darmowa licencja",
    "ترخيص مجاني",
    "免费许可证"
  ],
  "Activa":["Active","Active","Aktiv","Attiva","Aktywna",
    "نشطة",
    "有效"
  ],
  "En prueba": ["Trial", "En période d’essai", "Testphase", "In prova", "Wersja próbna",
    "تجريبية",
    "试用中"
  ],
  "Activada manualmente":["Manually activated","Activée manuellement","Manuell aktiviert","Attivata manualmente","Aktywowana ręcznie",
    "مفعّلة يدويًا",
    "手动激活"
  ],
  "Sin licencia Pro activa":["No active Pro license","Aucune licence Pro active","Keine aktive Pro-Lizenz","Nessuna licenza Pro attiva","Brak aktywnej licencji Pro",
    "لا يوجد ترخيص Pro نشط",
    "没有有效的 Pro 许可证"
  ],
  "Caducada":["Expired","Expirée","Abgelaufen","Scaduta","Wygasła",
    "منتهية الصلاحية",
    "已过期"
  ],
  "Sin caducidad": ["No expiration", "Sans expiration", "Ohne Ablaufdatum", "Senza scadenza", "Bez daty wygaśnięcia",
    "دون تاريخ انتهاء",
    "永不过期"
  ],
  "Funciones Pro activas":["Pro features active","Fonctions Pro actives","Pro-Funktionen aktiv","Funzioni Pro attive","Funkcje Pro aktywne",
    "ميزات Pro نشطة",
    "Pro 功能已启用"
  ],
  "Funciones Pro no activas":["Pro features inactive","Fonctions Pro inactives","Pro-Funktionen inaktiv","Funzioni Pro non attive","Funkcje Pro nieaktywne",
    "ميزات Pro غير نشطة",
    "Pro 功能未启用"
  ],
  "Vencimiento": ["Expiration", "Expiration", "Ablaufdatum", "Scadenza", "Wygaśnięcie",
    "تاريخ الانتهاء",
    "到期时间"
  ],
  "Última consulta guardada; pendiente de validar online":["Last checked result cached; online validation pending","Dernier résultat enregistré ; validation en ligne en attente","Letztes Ergebnis gespeichert; Online-Prüfung ausstehend","Ultimo risultato salvato; verifica online in attesa","Ostatni wynik zapisany; oczekiwanie na weryfikację online",
    "آخر استعلام محفوظ؛ بانتظار التحقق عبر الإنترنت",
    "已保存上次查询结果；等待在线验证"
  ],
  "No hay conexión. Se muestra la última licencia consultada; vuelve a conectarte para validarla.": ["No connection. The last retrieved license is shown; reconnect to validate it.", "Aucune connexion. La dernière licence consultée est affichée ; reconnectez-vous pour la valider.", "Keine Verbindung. Die zuletzt abgerufene Lizenz wird angezeigt; stellen Sie die Verbindung wieder her, um sie zu bestätigen.", "Nessuna connessione. Viene mostrata l'ultima licenza consultata; riconnettiti per convalidarla.", "Brak połączenia. Wyświetlana jest ostatnio pobrana licencja; połącz się ponownie, aby ją zweryfikować.",
    "لا يوجد اتصال. يتم عرض آخر ترخيص تم الاستعلام عنه؛ أعد الاتصال للتحقق منه.",
    "当前无网络连接。显示上次查询的许可证；请重新联网进行验证。"
  ],
  "Debes verificar tu correo electrónico antes de consultar la licencia. Te hemos enviado un enlace de verificación.": ["You must verify your email before checking the license. We have sent you a verification link.", "Vous devez vérifier votre adresse e-mail avant de consulter la licence. Nous vous avons envoyé un lien de vérification.", "Sie müssen Ihre E-Mail-Adresse bestätigen, bevor Sie die Lizenz prüfen. Wir haben Ihnen einen Bestätigungslink gesendet.", "Devi verificare la tua email prima di controllare la licenza. Ti abbiamo inviato un link di verifica.", "Musisz zweryfikować adres e-mail przed sprawdzeniem licencji. Wysłaliśmy Ci link weryfikacyjny.",
    "يجب التحقق من بريدك الإلكتروني قبل الاستعلام عن الترخيص. أرسلنا إليك رابط التحقق.",
    "查询许可证前必须验证电子邮件。我们已向你发送验证链接。"
  ],
  "No se pudo conectar con la web de licencias.": ["Could not connect to the licensing website.", "Impossible de se connecter au site des licences.", "Verbindung zur Lizenz-Website fehlgeschlagen.", "Impossibile connettersi al sito delle licenze.", "Nie udało się połączyć ze stroną licencji.",
    "تعذر الاتصال بموقع التراخيص.",
    "无法连接许可证网站。"
  ],
  "Inicia sesión para consultar la licencia.": ["Sign in to check the license.", "Connectez-vous pour consulter la licence.", "Melden Sie sich an, um die Lizenz zu prüfen.", "Accedi per controllare la licenza.", "Zaloguj się, aby sprawdzić licencję.",
    "سجل الدخول للاستعلام عن الترخيص.",
    "请登录以查询许可证。"
  ],
  "No se pudo consultar la licencia en la web.": ["Could not retrieve the license from the website.", "Impossible de consulter la licence sur le site web.", "Die Lizenz konnte nicht von der Website abgerufen werden.", "Impossibile recuperare la licenza dal sito web.", "Nie udało się pobrać licencji ze strony internetowej.",
    "تعذر الاستعلام عن الترخيص عبر الموقع.",
    "无法从网站查询许可证。"
  ],
  "Licencia verificada online":["License verified online","Licence vérifiée en ligne","Lizenz online überprüft","Licenza verificata online","Licencja zweryfikowana online",
    "تم التحقق من الترخيص عبر الإنترنت",
    "许可证已通过在线验证"
  ],
  "Prueba": ["Trial", "Essai", "Testversion", "Prova", "Wersja próbna",
    "نسخة تجريبية",
    "试用"
  ],
  "Inactiva":["Inactive","Inactive","Inaktiv","Inattiva","Nieaktywna",
    "غير نشطة",
    "未激活"
  ],
  "Sesión iniciada, pero el servidor no ha devuelto una licencia válida.": ["Signed in, but the server did not return a valid license.", "Session ouverte, mais le serveur n'a pas renvoyé de licence valide.", "Angemeldet, aber der Server hat keine gültige Lizenz zurückgegeben.", "Accesso effettuato, ma il server non ha restituito una licenza valida.", "Zalogowano, ale serwer nie zwrócił prawidłowej licencji.",
    "تم تسجيل الدخول، لكن الخادم لم يُرجع ترخيصًا صالحًا.",
    "已登录，但服务器未返回有效许可证。"
  ],
  "Comprobada": ["Checked", "Vérifiée", "Überprüft", "Verificata", "Sprawdzona",
    "تم التحقق",
    "已检查"
  ],
  "Caché sin conexión; no es una verificación actual": ["Offline cache; this is not a current verification", "Cache hors ligne ; il ne s'agit pas d'une vérification actuelle", "Offline-Cache; dies ist keine aktuelle Überprüfung", "Cache offline; non è una verifica aggiornata", "Pamięć podręczna offline; nie jest to bieżąca weryfikacja",
    "ذاكرة تخزين مؤقت دون اتصال؛ ليست عملية تحقق حالية",
    "离线缓存；并非当前验证结果"
  ],
  "Sesión iniciada ni verificar la licencia.":["Could not sign in or verify the license.","Impossible de se connecter ou de vérifier la licence.","Anmeldung oder Lizenzprüfung fehlgeschlagen.","Impossibile accedere o verificare la licenza.","Nie udało się zalogować ani zweryfikować licencji.",
    "تم تسجيل الدخول دون التحقق من الترخيص.",
    "已登录，但未验证许可证。"
  ],
  "Función disponible con licencia Pro": ["Feature available with a Pro license", "Fonction disponible avec une licence Pro", "Funktion mit Pro-Lizenz verfügbar", "Funzione disponibile con licenza Pro", "Funkcja dostępna z licencją Pro",
    "الميزة متاحة بترخيص Pro",
    "此功能需使用 Pro 许可证"
  ],
  "Esta sección requiere una licencia Pro activa. Inicia sesión o actualiza tu licencia para comprobar tus permisos.":["This section requires an active Pro license. Sign in or refresh your license to check your permissions.","Cette section nécessite une licence Pro active. Connectez-vous ou actualisez votre licence pour vérifier vos autorisations.","Dieser Bereich erfordert eine aktive Pro-Lizenz. Melden Sie sich an oder aktualisieren Sie Ihre Lizenz, um Ihre Berechtigungen zu prüfen.","Questa sezione richiede una licenza Pro attiva. Accedi o aggiorna la licenza per verificare i permessi.","Ta sekcja wymaga aktywnej licencji Pro. Zaloguj się lub odśwież licencję, aby sprawdzić uprawnienia.",
    "يتطلب هذا القسم ترخيص Pro نشطًا. سجل الدخول أو حدّث ترخيصك للتحقق من صلاحياتك.",
    "此部分需要有效的 Pro 许可证。请登录或更新许可证以检查权限。"
  ],
  "Esta función requiere una licencia Pro activa. Inicia sesión o actualiza tu licencia para comprobar tus permisos.": ["This feature requires an active Pro license. Sign in or refresh your license to check your permissions.", "Cette fonctionnalité nécessite une licence Pro active. Connectez-vous ou actualisez votre licence pour vérifier vos autorisations.", "Diese Funktion erfordert eine aktive Pro-Lizenz. Melden Sie sich an oder aktualisieren Sie Ihre Lizenz, um Ihre Berechtigungen zu prüfen.", "Questa funzione richiede una licenza Pro attiva. Accedi o aggiorna la licenza per verificare i tuoi permessi.", "Ta funkcja wymaga aktywnej licencji Pro. Zaloguj się lub odśwież licencję, aby sprawdzić uprawnienia.",
    "تتطلب هذه الميزة ترخيص Pro نشطًا. سجل الدخول أو حدّث ترخيصك للتحقق من صلاحياتك.",
    "此功能需要有效的 Pro 许可证。请登录或更新许可证以检查权限。"
  ]
 };
 for(const [key,values] of Object.entries(additions)){if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];}
})();


// v1.580 — nombre visible del color de la bobina y HEX normalizado en la integración.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!dict)return;
 dict["Color de inventario aproximado: {color} (HEX {hex}); revisa la bobina."]=[
  "Approximate inventory colour: {color} (HEX {hex}); check the spool.",
  "Couleur approximative du stock : {color} (HEX {hex}) ; vérifiez la bobine.",
  "Ungefähre Lagerfarbe: {color} (HEX {hex}); Spule überprüfen.",
  "Colore approssimativo in inventario: {color} (HEX {hex}); controlla la bobina.",
  "Przybliżony kolor w magazynie: {color} (HEX {hex}); sprawdź szpulę."
 ];
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();


// v1.583 — Alternativas de bobinas y alta rápida desde la calculadora.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;
 const entries={
  'No hay una bobina exacta asignada.':['No exact spool is assigned.','Aucune bobine exacte n’est affectée.','Keine exakte Spule ist zugeordnet.','Nessuna bobina esatta assegnata.','Nie przypisano dokładnej szpuli.',
    "لم يتم تعيين بكرة مطابقة تمامًا.",
    "尚未分配完全匹配的线轴。"
  ],
  'Mismo color disponible en otras marcas:':['Same colour available from other brands:','Même couleur disponible chez d’autres marques :','Gleiche Farbe bei anderen Marken verfügbar:','Lo stesso colore è disponibile di altre marche:','Ten sam kolor dostępny u innych marek:',
    "اللون نفسه متوفر لدى علامات تجارية أخرى:",
    "其他品牌也有相同颜色："
  ],
  'Colores más parecidos disponibles:':['Closest available colours:','Couleurs disponibles les plus proches :','Ähnlichste verfügbare Farben:','Colori disponibili più simili:','Najbardziej zbliżone dostępne kolory:',
    "الألوان الأقرب المتاحة:",
    "可选的相近颜色："
  ],
  '＋ Crear bobina nueva':['＋ Create new spool','＋ Créer une nouvelle bobine','＋ Neue Spule erstellen','＋ Crea nuova bobina','＋ Utwórz nową szpulę',
    "＋ إنشاء بكرة جديدة",
    "＋ 创建新线轴"
  ],
  'Color exacto':['Exact colour','Couleur exacte','Exakte Farbe','Colore esatto','Dokładny kolor',
    "لون مطابق تمامًا",
    "精确颜色"
  ],
  'Color aproximado':['Similar colour','Couleur similaire','Ähnliche Farbe','Colore simile','Zbliżony kolor',
    "لون تقريبي",
    "近似颜色"
  ],
  'Bobina seleccionada: {brand} · {color}. La asignación se ha aplicado al cálculo; el inventario no se descuenta ahora.':['Selected spool: {brand} · {color}. It has been assigned to this calculation; stock is not deducted now.','Bobine sélectionnée : {brand} · {color}. Elle est affectée à ce calcul ; le stock n’est pas déduit maintenant.','Ausgewählte Spule: {brand} · {color}. Sie wurde diesem Kalkül zugeordnet; der Bestand wird jetzt nicht abgezogen.','Bobina selezionata: {brand} · {color}. È stata assegnata a questo calcolo; il magazzino non viene scalato ora.','Wybrana szpula: {brand} · {color}. Została przypisana do obliczenia; stan magazynowy nie jest teraz pomniejszany.',
    "البكرة المحددة: {brand} · {color}. تم تطبيق التعيين على الحساب؛ لن يتم خصم المخزون الآن.",
    "已选择线轴：{brand} · {color}。分配已应用于本次计算；当前不会扣减库存。"
  ],
  'Inventario de filamento':['Filament inventory','Inventaire de filament','Filamentlager','Inventario filamento','Magazyn filamentów',
    "مخزون الخيوط",
    "耗材库存"
  ],
  'Crear bobina nueva':['Create new spool','Créer une nouvelle bobine','Neue Spule erstellen','Crea nuova bobina','Utwórz nową szpulę',
    "إنشاء بكرة جديدة",
    "创建新线轴"
  ],
  'Se guardará en tu inventario y quedará asignada a este material del G-code.':['It will be saved to your inventory and assigned to this G-code material.','Elle sera enregistrée dans votre stock et affectée à ce matériau du G-code.','Sie wird im Lager gespeichert und diesem G-Code-Material zugeordnet.','Sarà salvata nel magazzino e assegnata a questo materiale del G-code.','Zostanie zapisana w magazynie i przypisana do tego materiału G-code.',
    "سيتم حفظها في مخزونك وتعيينها لهذه المادة في G-code.",
    "该线轴将保存到库存，并分配给此 G-code 材料。"
  ],


  'Otra marca…':['Other brand…','Autre marque…','Andere Marke…','Altra marca…','Inna marka…',


    "علامة تجارية أخرى…",


    "其他品牌……"


  ],
  'Nombre de la marca':['Brand name','Nom de la marque','Markenname','Nome della marca','Nazwa marki',
    "اسم العلامة التجارية",
    "品牌名称"
  ],
  'Escribe la marca':['Enter brand','Saisissez la marque','Marke eingeben','Inserisci la marca','Wpisz markę',
    "أدخل العلامة التجارية",
    "请输入品牌"
  ],
  'Peso inicial de la bobina (g)':['Initial spool weight (g)','Poids initial de la bobine (g)','Anfangsgewicht der Spule (g)','Peso iniziale della bobina (g)','Początkowa masa szpuli (g)',
    "الوزن الأولي للبكرة (غ)",
    "线轴初始重量（克）"
  ],
  'Peso restante actual (g)':['Current remaining weight (g)','Poids restant actuel (g)','Aktuelles Restgewicht (g)','Peso residuo attuale (g)','Aktualna pozostała masa (g)',
    "الوزن المتبقي حاليًا (غ)",
    "当前剩余重量（克）"
  ],
  'Precio de compra de la bobina (opcional)':['Spool purchase price (optional)','Prix d’achat de la bobine (facultatif)','Kaufpreis der Spule (optional)','Prezzo di acquisto della bobina (facoltativo)','Cena zakupu szpuli (opcjonalnie)',
    "سعر شراء البكرة (اختياري)",
    "线轴购买价格（可选）"
  ],
  'El peso restante se guarda tal como lo indiques. No se descuenta el consumo de este cálculo.':['The remaining weight is saved exactly as entered. This calculation’s usage is not deducted.','Le poids restant est enregistré tel que saisi. La consommation de ce calcul n’est pas déduite.','Das Restgewicht wird wie eingegeben gespeichert. Der Verbrauch dieser Berechnung wird nicht abgezogen.','Il peso residuo viene salvato come inserito. Il consumo di questo calcolo non viene sottratto.','Pozostała masa zostanie zapisana zgodnie z wpisem. Zużycie z tego obliczenia nie zostanie odjęte.',
    "سيتم حفظ الوزن المتبقي كما أدخلته. لن يتم خصم استهلاك هذا الحساب.",
    "剩余重量将按你输入的数值保存。本次计算的耗材用量不会被扣除。"
  ],
  'Selecciona o escribe una marca.':['Select or enter a brand.','Sélectionnez ou saisissez une marque.','Wählen Sie eine Marke aus oder geben Sie sie ein.','Seleziona o inserisci una marca.','Wybierz lub wpisz markę.',
    "اختر علامة تجارية أو اكتب اسمها.",
    "请选择或输入品牌名称。"
  ],
  'El peso restante debe estar entre 0 y el peso inicial.':['Remaining weight must be between 0 and the initial weight.','Le poids restant doit être compris entre 0 et le poids initial.','Das Restgewicht muss zwischen 0 und dem Anfangsgewicht liegen.','Il peso residuo deve essere compreso tra 0 e il peso iniziale.','Pozostała masa musi mieścić się między 0 a masą początkową.',
    "يجب أن يكون الوزن المتبقي بين 0 والوزن الأولي.",
    "剩余重量必须介于 0 和初始重量之间。"
  ],
  'No se pudo guardar la bobina en el inventario.':['Could not save the spool to inventory.','Impossible d’enregistrer la bobine dans le stock.','Die Spule konnte nicht im Lager gespeichert werden.','Impossibile salvare la bobina nel magazzino.','Nie udało się zapisać szpuli w magazynie.',
    "تعذر حفظ البكرة في المخزون.",
    "无法将线轴保存到库存。"
  ],
  'Bobina nueva creada y asignada: {brand} · {color}.':['New spool created and assigned: {brand} · {color}.','Nouvelle bobine créée et affectée : {brand} · {color}.','Neue Spule erstellt und zugeordnet: {brand} · {color}.','Nuova bobina creata e assegnata: {brand} · {color}.','Utworzono i przypisano nową szpulę: {brand} · {color}.',
    "تم إنشاء بكرة جديدة وتعيينها: {brand} · {color}.",
    "已创建并分配新线轴：{brand} · {color}。"
  ],
  'Bobina creada y asignada al cálculo.':['Spool created and assigned to the calculation.','Bobine créée et affectée au calcul.','Spule erstellt und der Berechnung zugeordnet.','Bobina creata e assegnata al calcolo.','Szpula została utworzona i przypisana do obliczenia.',
    "تم إنشاء البكرة وتعيينها للحساب.",
    "线轴已创建并分配给此计算。"
  ],
  'Crear y asignar bobina':['Create and assign spool','Créer et affecter la bobine','Spule erstellen und zuordnen','Crea e assegna bobina','Utwórz i przypisz szpulę',
    "إنشاء البكرة وتعيينها",
    "创建并分配线轴"
  ],
  'Hay una nueva versión de Print Cost & Profit disponible':['A new version of Print Cost & Profit is available','Une nouvelle version de Print Cost & Profit est disponible','Eine neue Version von Print Cost & Profit ist verfügbar','È disponibile una nuova versione di Print Cost & Profit','Dostępna jest nowa wersja Print Cost & Profit',
    "يتوفر إصدار جديد من Print Cost & Profit",
    "有新版本的 Print Cost & Profit 可用"
  ],
'Versión instalada: {installed} · Nueva versión: {latest}. Antes de actualizar, crea una copia de seguridad de tus datos.':['Installed version: {installed} · New version: {latest}. Back up your data before updating.','Version installée : {installed} · Nouvelle version : {latest}. Sauvegardez vos données avant la mise à jour.','Installierte Version: {installed} · Neue Version: {latest}. Sichern Sie Ihre Daten vor dem Update.','Versione installata: {installed} · Nuova versione: {latest}. Esegui un backup dei dati prima di aggiornare.','Zainstalowana wersja: {installed} · Nowa wersja: {latest}. Przed aktualizacją wykonaj kopię zapasową danych.',
  "الإصدار المثبت: {installed} · الإصدار الجديد: {latest}. أنشئ نسخة احتياطية من بياناتك قبل التحديث.",
  "当前版本：{installed} · 新版本：{latest}。更新前请先备份数据。"
],
'Ver actualización y descargar':['View update and download','Voir la mise à jour et télécharger','Update anzeigen und herunterladen','Visualizza aggiornamento e scarica','Zobacz aktualizację i pobierz',
  "عرض التحديث وتنزيله",
  "查看更新并下载"
],
'Recordármelo más tarde':['Remind me later','Me le rappeler plus tard','Später erinnern','Ricordamelo più tardi','Przypomnij mi później',
  "ذكّرني لاحقًا",
  "稍后提醒我"
],
  "Fuente: leyendo G-code activo de {printer}: {file}": ["Source: reading active G-code from {printer}: {file}", "Source : lecture du G-code actif de {printer} : {file}", "Quelle: Aktiver G-Code von {printer} wird gelesen: {file}", "Fonte: lettura del G-code attivo da {printer}: {file}", "Źródło: odczytywanie aktywnego G-code z {printer}: {file}",
    "المصدر: جارٍ قراءة ملف G-code النشط من {printer}: {file}",
    "来源：正在读取 {printer} 的活动 G-code：{file}"
  ],
  "Fuente confirmada: G-code activo de {printer} · {file}": ["Confirmed source: active G-code from {printer} · {file}", "Source confirmée : G-code actif de {printer} · {file}", "Bestätigte Quelle: aktiver G-Code von {printer} · {file}", "Fonte confermata: G-code attivo da {printer} · {file}", "Potwierdzone źródło: aktywny G-code z {printer} · {file}",
    "المصدر المؤكد: ملف G-code النشط من {printer} · {file}",
    "已确认来源：{printer} 的活动 G-code · {file}"
  ],

  "Moneda": ["Currency", "Devise", "Währung", "Valuta", "Waluta",

    "العملة",

    "货币"

  ],
  "Cargando impresoras…": ["Loading printers…", "Chargement des imprimantes…", "Drucker werden geladen…", "Caricamento stampanti…", "Ładowanie drukarek…",
    "جارٍ تحميل الطابعات…",
    "正在加载打印机……"
  ],
  "Calculadora local para Snapmaker Orca 2.4.1-alpha · Versión 1.4 · sin actualizar ni modificar el laminador": ["Local calculator for Snapmaker Orca 2.4.1-alpha · Version 1.4 · without updating or modifying the slicer", "Calculatrice locale pour Snapmaker Orca 2.4.1-alpha · Version 1.4 · sans mettre à jour ni modifier le trancheur", "Lokaler Rechner für Snapmaker Orca 2.4.1-alpha · Version 1.4 · ohne den Slicer zu aktualisieren oder zu ändern", "Calcolatrice locale per Snapmaker Orca 2.4.1-alpha · Versione 1.4 · senza aggiornare né modificare lo slicer", "Lokalny kalkulator dla Snapmaker Orca 2.4.1-alpha · Wersja 1.4 · bez aktualizowania ani modyfikowania slicera",
    "حاسبة محلية لبرنامج Snapmaker Orca 2.4.1-alpha · الإصدار 1.4 · دون تحديث برنامج التقطيع أو تعديله",
    "Snapmaker Orca 2.4.1-alpha 本地计算器 · 版本 1.4 · 不更新或修改切片软件"
  ],
  "No se puede crear la bobina: el color del G-code no es un HEX válido de 6 u 8 dígitos.": ["The spool cannot be created: the G-code colour is not a valid 6- or 8-digit HEX value.", "Impossible de créer la bobine : la couleur du G-code n’est pas une valeur HEX valide à 6 ou 8 chiffres.", "Die Spule kann nicht erstellt werden: Die G-Code-Farbe ist kein gültiger HEX-Wert mit 6 oder 8 Stellen.", "Impossibile creare la bobina: il colore del G-code non è un valore HEX valido di 6 o 8 cifre.", "Nie można utworzyć szpuli: kolor G-code nie jest prawidłową wartością HEX o długości 6 lub 8 znaków.",
    "تعذر إنشاء البكرة: لون G-code ليس قيمة HEX صالحة مكوّنة من 6 أو 8 أرقام.",
    "无法创建线轴：G-code 中的颜色不是有效的 6 位或 8 位 HEX 值。"
  ],
  "Introduce un peso original válido mayor que 0.": ["Enter a valid original weight greater than 0.", "Saisissez un poids initial valide supérieur à 0.", "Geben Sie ein gültiges Ausgangsgewicht größer als 0 ein.", "Inserisci un peso iniziale valido maggiore di 0.", "Wprowadź prawidłową wagę początkową większą niż 0.",
    "أدخل وزنًا أصليًا صالحًا أكبر من 0.",
    "请输入大于 0 的有效初始重量。"
  ],
  "El peso restante debe estar entre 0 y el peso original.": ["The remaining weight must be between 0 and the original weight.", "Le poids restant doit être compris entre 0 et le poids initial.", "Das Restgewicht muss zwischen 0 und dem Ausgangsgewicht liegen.", "Il peso rimanente deve essere compreso tra 0 e il peso iniziale.", "Pozostała waga musi mieścić się w przedziale od 0 do wagi początkowej.",
    "يجب أن يكون الوزن المتبقي بين 0 والوزن الأصلي.",
    "剩余重量必须介于 0 和初始重量之间。"
  ],
};
 for(const [k,v] of Object.entries(entries))d[k]=v;
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();


// v1.585 — envío del G-code activo del monitor U1 a la calculadora.
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
'Enviar a calcular':['Send to calculator','Envoyer au calcul','An Rechner senden','Invia al calcolo','Wyślij do kalkulatora',
  "إرسال إلى الحاسبة",
  "发送到计算器"
],
'El monitor no tiene datos de filamento para enviar.':['The monitor has no filament data to send.','Le moniteur ne contient aucune donnée de filament à envoyer.','Der Monitor enthält keine Filamentdaten zum Senden.','Il monitor non contiene dati del filamento da inviare.','Monitor nie zawiera danych filamentu do wysłania.',
  "لا يحتوي جهاز المراقبة على بيانات خيوط لإرسالها.",
  "监控面板没有可发送的耗材数据。"
],
'{count} filamento(s) importado(s) desde el monitor U1: {grams} g.':['{count} filament(s) imported from the U1 monitor: {grams} g.','{count} filament(s) importé(s) depuis le moniteur U1 : {grams} g.','{count} Filament(e) aus dem U1-Monitor importiert: {grams} g.','{count} filamenti importati dal monitor U1: {grams} g.','Zaimportowano {count} filamentów z monitora U1: {grams} g.',
  "تم استيراد {count} من الخيوط من شاشة مراقبة U1: {grams} غ.",
  "已从 U1 监控面板导入 {count} 种耗材：{grams} 克。"
],
'Datos importados del G-code activo del monitor. Revisa las asignaciones y el tiempo de impresión antes de calcular.':['Data imported from the monitor’s active G-code. Check spool assignments and print time before calculating.','Données importées du G-code actif du moniteur. Vérifiez les bobines affectées et le temps d’impression avant le calcul.','Daten aus dem aktiven G-Code des Monitors importiert. Prüfen Sie Spulenzuordnungen und Druckzeit vor der Berechnung.','Dati importati dal G-code attivo del monitor. Controlla le bobine assegnate e il tempo di stampa prima di calcolare.','Dane zaimportowano z aktywnego G-code monitora. Przed obliczeniem sprawdź przypisania szpul i czas drukowania.',
  "تم استيراد البيانات من G-code النشط في شاشة المراقبة. راجع التعيينات ووقت الطباعة قبل الحساب.",
  "已从监控面板的活动 G-code 导入数据。计算前请检查耗材分配和打印时间。"
],
'G-code del monitor enviado a la calculadora.':['Monitor G-code sent to the calculator.','G-code du moniteur envoyé au calculateur.','Monitor-G-Code an den Rechner gesendet.','G-code del monitor inviato al calcolo.','G-code monitora wysłany do kalkulatora.',
  "تم إرسال G-code من شاشة المراقبة إلى الحاسبة.",
  "已将监控面板中的 G-code 发送到计算器。"
],
'No hay un G-code activo con filamentos para enviar a la calculadora.':['There is no active G-code with filaments to send to the calculator.','Aucun G-code actif contenant des filaments à envoyer au calculateur.','Es gibt keinen aktiven G-Code mit Filamenten zum Senden an den Rechner.','Non c’è un G-code attivo con filamenti da inviare al calcolo.','Brak aktywnego G-code z filamentami do wysłania do kalkulatora.',
  "لا يوجد ملف G-code نشط يحتوي على خيوط لإرساله إلى الحاسبة.",
  "没有包含耗材信息的活动 G-code 可发送到计算器。"
],
'La calculadora todavía no está preparada para recibir los datos.':['The calculator is not ready to receive the data yet.','Le calculateur n’est pas encore prêt à recevoir les données.','Der Rechner ist noch nicht bereit, die Daten zu empfangen.','Il calcolo non è ancora pronto a ricevere i dati.','Kalkulator nie jest jeszcze gotowy na przyjęcie danych.',
  "الحاسبة غير جاهزة بعد لاستقبال البيانات.",
  "计算器尚未准备好接收数据。"
],
'Integridad: {result}. Claves: {count}. Tamaño: {bytes} bytes. Archivo: {name}': ["Integrity: {result}. Records: {count}. Size: {bytes} bytes. File: {name}", "Intégrité : {result}. Enregistrements : {count}. Taille : {bytes} octets. Fichier : {name}", "Integrität: {result}. Einträge: {count}. Größe: {bytes} Byte. Datei: {name}", "Integrità: {result}. Record: {count}. Dimensione: {bytes} byte. File: {name}", "Integralność: {result}. Rekordy: {count}. Rozmiar: {bytes} bajtów. Plik: {name}",
  "سلامة البيانات: {result}. المفاتيح: {count}. الحجم: {bytes} بايت. الملف: {name}",
  "完整性：{result}。键数：{count}。大小：{bytes} 字节。文件：{name}"
],
  "Revisar": ["Check", "À vérifier", "Prüfen", "Verificare", "Sprawdź",
    "مراجعة",
    "检查"
  ],
  "Fuente:": ["Source:", "Source :", "Quelle:", "Fonte:", "Źródło:",
    "المصدر:",
    "来源："
  ],
  "Crear cliente nuevo / introducir datos": ["Create new customer / enter details", "Créer un nouveau client / saisir les coordonnées", "Neuen Kunden erstellen / Daten eingeben", "Crea nuovo cliente / inserisci i dati", "Utwórz nowego klienta / wprowadź dane",
    "إنشاء عميل جديد / إدخال البيانات",
    "创建新客户 / 输入信息"
  ],
  "No se pudo crear la factura.": ["The invoice could not be created.", "Impossible de créer la facture.", "Die Rechnung konnte nicht erstellt werden.", "Impossibile creare la fattura.", "Nie udało się utworzyć faktury.",
    "تعذر إنشاء الفاتورة。",
    "无法创建发票。"
  ],
  "Recuerda descargar {name} antes de continuar.": ["Remember to download {name} before continuing.", "Pensez à télécharger {name} avant de continuer.", "Denken Sie daran, {name} herunterzuladen, bevor Sie fortfahren.", "Ricorda di scaricare {name} prima di continuare.", "Pamiętaj, aby pobrać {name} przed kontynuowaniem.",
    "تذكر تنزيل {name} قبل المتابعة.",
    "继续之前，请记得下载 {name}。"
  ],
  "Factura {number} ya creada.": ["Invoice {number} has already been created.", "La facture {number} a déjà été créée.", "Rechnung {number} wurde bereits erstellt.", "La fattura {number} è già stata creata.", "Faktura {number} została już utworzona.",
    "الفاتورة {number} موجودة بالفعل.",
    "发票 {number} 已创建。"
  ],
  "No se descontó ninguna bobina: el stock combinado de las bobinas compatibles no cubre todo el consumo. {details}. Añade stock o revisa las asignaciones y vuelve a comprobar el trabajo.": ["No spool was deducted: the combined stock of compatible spools does not cover the full consumption. {details}. Add stock or review the assignments and check the job again.", "Aucune bobine n’a été débitée : le stock cumulé des bobines compatibles ne couvre pas toute la consommation. {details}. Ajoutez du stock ou vérifiez les affectations, puis contrôlez à nouveau le travail.", "Es wurde keine Spule abgezogen: Der Gesamtbestand kompatibler Spulen deckt den Verbrauch nicht vollständig. {details}. Fügen Sie Bestand hinzu oder prüfen Sie die Zuordnungen und kontrollieren Sie den Auftrag erneut.", "Non è stata scalata alcuna bobina: la disponibilità complessiva delle bobine compatibili non copre tutto il consumo. {details}. Aggiungi scorte o controlla le assegnazioni e verifica di nuovo il lavoro.", "Nie odjęto żadnej szpuli: łączny stan kompatybilnych szpul nie pokrywa całego zużycia. {details}. Uzupełnij zapasy lub sprawdź przypisania i ponownie zweryfikuj zadanie.",
    "لم يتم خصم أي بكرة: إجمالي مخزون البكرات المتوافقة لا يغطي الاستهلاك بالكامل. {details}. أضف مخزونًا أو راجع التعيينات ثم تحقق من المهمة مجددًا.",
    "未扣减任何线轴：兼容线轴的库存总量不足以满足全部耗材用量。{details}。请补充库存或检查分配情况，然后重新检查此任务。"
  ],
  "Descuento aplicado (estimación del G-code): {details}": ["Deduction applied (G-code estimate): {details}", "Déduction appliquée (estimation du G-code) : {details}", "Abzug angewendet (G-Code-Schätzung): {details}", "Scarico applicato (stima G-code): {details}", "Zastosowano odjęcie (szacunek G-code): {details}",
    "تم تطبيق الخصم (تقدير G-code): {details}",
    "已应用扣减（G-code 估算）：{details}"
  ],
  "SQLite no disponible": ["SQLite unavailable", "SQLite indisponible", "SQLite nicht verfügbar", "SQLite non disponibile", "SQLite jest niedostępne",
    "SQLite غير متاح",
    "SQLite 不可用"
  ],
  "Filamento estimado": ["Estimated filament", "Filament estimé", "Geschätztes Filament", "Filamento stimato", "Szacowany filament",
    "الخيط المقدّر",
    "估算耗材"
  ],
  "Mes actual: {month}": ["Current month: {month}", "Mois actuel : {month}", "Aktueller Monat: {month}", "Mese corrente: {month}", "Bieżący miesiąc: {month}",
    "الشهر الحالي: {month}",
    "当前月份：{month}"
  ],
  "Cálculos guardados este mes: {count}": ["Calculations saved this month: {count}", "Calculs enregistrés ce mois-ci : {count}", "Diesen Monat gespeicherte Berechnungen: {count}", "Calcoli salvati questo mese: {count}", "Obliczenia zapisane w tym miesiącu: {count}",
    "الحسابات المحفوظة هذا الشهر: {count}",
    "本月已保存的计算：{count}"
  ],
  "Unidades registradas: {count}": ["Units recorded: {count}", "Unités enregistrées : {count}", "Erfasste Einheiten: {count}", "Unità registrate: {count}", "Zarejestrowane sztuki: {count}",
    "الوحدات المسجلة: {count}",
    "已登记数量：{count}"
  ],
  "Ingresos estimados registrados: {amount}": ["Estimated revenue recorded: {amount}", "Revenus estimés enregistrés : {amount}", "Erfasste geschätzte Einnahmen: {amount}", "Ricavi stimati registrati: {amount}", "Zarejestrowane szacunkowe przychody: {amount}",
    "الإيرادات المقدّرة المسجلة: {amount}",
    "已登记的预计收入：{amount}"
  ],
  "Costes estimados: {amount}": ["Estimated costs: {amount}", "Coûts estimés : {amount}", "Geschätzte Kosten: {amount}", "Costi stimati: {amount}", "Szacunkowe koszty: {amount}",
    "التكاليف المقدّرة: {amount}",
    "预计成本：{amount}"
  ],
  "Beneficio estimado: {amount}": ["Estimated profit: {amount}", "Bénéfice estimé : {amount}", "Geschätzter Gewinn: {amount}", "Profitto stimato: {amount}", "Szacowany zysk: {amount}",
    "الربح المقدّر: {amount}",
    "预计利润：{amount}"
  ],
  "Mejor beneficio unitario del historial: {item}": ["Best unit profit in history: {item}", "Meilleur bénéfice unitaire de l’historique : {item}", "Höchster Stückgewinn im Verlauf: {item}", "Miglior profitto unitario nello storico: {item}", "Najwyższy zysk jednostkowy w historii: {item}",
    "أفضل ربح للوحدة في السجل: {item}",
    "历史记录中的最高单件利润：{item}"
  ],
  "Sin datos": ["No data", "Aucune donnée", "Keine Daten", "Nessun dato", "Brak danych",
    "لا توجد بيانات",
    "无数据"
  ],
  "N.º": ["No.", "N°", "Nr.", "N.", "Nr",
    "رقم",
    "编号"
  ],
  "WhatsApp": ["WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp",
    "واتساب",
    "WhatsApp"
  ],
  "Factura guardada correctamente.": ["Invoice saved successfully.", "Facture enregistrée.", "Rechnung erfolgreich gespeichert.", "Fattura salvata correttamente.", "Faktura została zapisana.",
    "تم حفظ الفاتورة بنجاح.",
    "发票已成功保存。"
  ],
  "No hay facturas guardadas.": ["No saved invoices.", "Aucune facture enregistrée.", "Keine gespeicherten Rechnungen.", "Nessuna fattura salvata.", "Brak zapisanych faktur.",
    "لا توجد فواتير محفوظة.",
    "没有已保存的发票。"
  ],
  "Sin cliente": ["No customer", "Sans client", "Kein Kunde", "Senza cliente", "Brak klienta",
    "بدون عميل",
    "无客户"
  ],
  "Tasación": ["Estimate", "Estimation", "Kostenschätzung", "Preventivo", "Wycena",
    "التقدير",
    "估价"
  ],
  "Archivo G-code": ["G-code file", "Fichier G-code", "G-Code-Datei", "File G-code", "Plik G-code",
    "ملف G-code",
    "G-code 文件"
  ],
  "Integración Print Cost & Profit": ["Print Cost & Profit integration", "Intégration Print Cost & Profit", "Print Cost & Profit-Integration", "Integrazione Print Cost & Profit", "Integracja Print Cost & Profit",
    "تكامل Print Cost & Profit",
    "Print Cost & Profit 集成"
  ],
  "Cliente nuevo": ["New customer", "Nouveau client", "Neuer Kunde", "Nuovo cliente", "Nowy klient",
    "عميل جديد",
    "新客户"
  ],
  "Presupuesto guardado correctamente.": ["Quote saved successfully.", "Devis enregistré avec succès.", "Angebot erfolgreich gespeichert.", "Preventivo salvato correttamente.", "Wycena została zapisana.",
    "تم حفظ عرض السعر بنجاح.",
    "报价单已成功保存。"
  ],
  "Factura guardada correctamente como borrador: completa los datos del cliente antes de emitirla.": ["Invoice saved as a draft: complete the customer details before issuing it.", "Facture enregistrée comme brouillon : complétez les coordonnées du client avant de l’émettre.", "Rechnung als Entwurf gespeichert: Ergänzen Sie die Kundendaten vor dem Ausstellen.", "Fattura salvata come bozza: completa i dati del cliente prima di emetterla.", "Faktura została zapisana jako wersja robocza: uzupełnij dane klienta przed wystawieniem.",
    "تم حفظ الفاتورة بنجاح كمسودة: أكمل بيانات العميل قبل إصدارها.",
    "发票已成功保存为草稿：请在正式开具前补全客户信息。"
  ]};for(const [k,v] of Object.entries(entries))d[k]=v;if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


// v1.3 — Traducciones centralizadas del acceso y la verificación de licencias.
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
"Actualizar licencia":["Refresh license", "Actualiser la licence", "Lizenz aktualisieren", "Aggiorna licenza", "Odśwież licencję",
  "تحديث الترخيص",
  "更新许可证"
],
"Comprobando la cuenta con el servicio de licencias…":["Checking the account with the licensing service…", "Vérification du compte auprès du service de licences…", "Konto wird beim Lizenzdienst überprüft…", "Verifica dell’account con il servizio licenze…", "Sprawdzanie konta w usłudze licencji…",
  "جارٍ التحقق من الحساب عبر خدمة التراخيص…",
  "正在通过许可证服务验证账户……"
],
"Correo o contraseña incorrectos.":["Incorrect email or password.", "Adresse e-mail ou mot de passe incorrect.", "E-Mail-Adresse oder Passwort falsch.", "Email o password errati.", "Nieprawidłowy adres e-mail lub hasło.",
  "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
  "电子邮件或密码不正确。"
],
"Debes verificar tu correo electrónico antes de consultar la licencia.":["You must verify your email before checking the license.", "Vous devez vérifier votre adresse e-mail avant de consulter la licence.", "Sie müssen Ihre E-Mail-Adresse bestätigen, bevor Sie die Lizenz abfragen.", "Devi verificare il tuo indirizzo email prima di controllare la licenza.", "Przed sprawdzeniem licencji musisz zweryfikować adres e-mail.",
  "يجب التحقق من بريدك الإلكتروني قبل الاستعلام عن الترخيص.",
  "查询许可证前必须验证电子邮件。"
],
"Demasiados intentos. Espera un poco y vuelve a intentarlo.":["Too many attempts. Wait a moment and try again.", "Trop de tentatives. Patientez un instant, puis réessayez.", "Zu viele Versuche. Bitte warte kurz und versuche es erneut.", "Troppi tentativi. Attendi un momento e riprova.", "Zbyt wiele prób. Poczekaj chwilę i spróbuj ponownie.",
  "عدد المحاولات كبير جدًا. انتظر قليلًا ثم حاول مرة أخرى.",
  "尝试次数过多。请稍等片刻后重试。"
],
"El servicio de licencias no está disponible en este momento.":["The licensing service is currently unavailable.", "Le service de licences est momentanément indisponible.", "Der Lizenzdienst ist derzeit nicht verfügbar.", "Il servizio licenze non è al momento disponibile.", "Usługa licencji jest obecnie niedostępna.",
  "خدمة التراخيص غير متاحة حاليًا.",
  "许可证服务目前不可用。"
],
"Iniciar sesión":["Sign in", "Se connecter", "Anmelden", "Accedi", "Zaloguj się",
  "تسجيل الدخول",
  "登录"
],
"Introduce un correo electrónico válido.":["Enter a valid email address.", "Saisissez une adresse e-mail valide.", "Gib eine gültige E-Mail-Adresse ein.", "Inserisci un indirizzo email valido.", "Wprowadź prawidłowy adres e-mail.",
  "أدخل عنوان بريد إلكتروني صالحًا.",
  "请输入有效的电子邮件地址。"
],
"La sesión está activa, pero no se pudo verificar la licencia.":["The session is active, but the license could not be verified.", "La session est active, mais la licence n’a pas pu être vérifiée.", "Die Sitzung ist aktiv, aber die Lizenz konnte nicht überprüft werden.", "La sessione è attiva, ma non è stato possibile verificare la licenza.", "Sesja jest aktywna, ale nie udało się zweryfikować licencji.",
  "الجلسة نشطة، لكن تعذر التحقق من الترخيص.",
  "会话处于活动状态，但无法验证许可证。"
],
"La sesión no es válida. Inicia sesión de nuevo.":["The session is invalid. Sign in again.", "La session n’est pas valide. Reconnectez-vous.", "Die Sitzung ist ungültig. Bitte melde dich erneut an.", "La sessione non è valida. Accedi di nuovo.", "Sesja jest nieprawidłowa. Zaloguj się ponownie.",
  "الجلسة غير صالحة. سجل الدخول مرة أخرى.",
  "会话无效。请重新登录。"
],
"No se pudo comprobar la sesión o la licencia. Comprueba la conexión y vuelve a intentarlo.":["The session or license could not be checked. Check your connection and try again.", "Impossible de vérifier la session ou la licence. Vérifiez votre connexion et réessayez.", "Sitzung oder Lizenz konnten nicht überprüft werden. Prüfe deine Verbindung und versuche es erneut.", "Impossibile verificare la sessione o la licenza. Controlla la connessione e riprova.", "Nie udało się sprawdzić sesji lub licencji. Sprawdź połączenie i spróbuj ponownie.",
  "تعذر التحقق من الجلسة أو الترخيص. تحقق من الاتصال وحاول مرة أخرى.",
  "无法验证会话或许可证。请检查网络连接后重试。"
],
"No se pudo iniciar sesión ni verificar la licencia.":["Could not sign in or verify the license.", "Impossible de se connecter ou de vérifier la licence.", "Anmeldung oder Lizenzprüfung fehlgeschlagen.", "Impossibile accedere o verificare la licenza.", "Nie udało się zalogować ani zweryfikować licencji.",
  "تعذر تسجيل الدخول أو التحقق من الترخيص.",
  "无法登录或验证许可证。"
],
"No se pudo iniciar sesión ni verificar la licencia. Comprueba la conexión.":["Could not sign in or verify the license. Check your connection.", "Impossible de se connecter ou de vérifier la licence. Vérifiez votre connexion.", "Anmeldung oder Lizenzprüfung fehlgeschlagen. Prüfe deine Verbindung.", "Impossibile accedere o verificare la licenza. Controlla la connessione.", "Nie udało się zalogować ani zweryfikować licencji. Sprawdź połączenie.",
  "تعذر تسجيل الدخول أو التحقق من الترخيص. تحقق من الاتصال.",
  "无法登录或验证许可证。请检查网络连接。"
],
"No se pudo iniciar sesión. Comprueba tus datos y la conexión.":["Could not sign in. Check your details and connection.", "Impossible de se connecter. Vérifiez vos identifiants et votre connexion.", "Anmeldung fehlgeschlagen. Prüfe deine Zugangsdaten und Verbindung.", "Impossibile accedere. Controlla i dati e la connessione.", "Nie udało się zalogować. Sprawdź dane i połączenie.",
  "تعذر تسجيل الدخول. تحقق من بياناتك والاتصال.",
  "登录失败。请检查账户信息和网络连接。"
],
"Verifica tu correo electrónico antes de consultar la licencia.":["Verify your email before checking the license.", "Vérifiez votre adresse e-mail avant de consulter la licence.", "Bestätige deine E-Mail-Adresse, bevor du die Lizenz abfragst.", "Verifica il tuo indirizzo email prima di controllare la licenza.", "Zweryfikuj adres e-mail przed sprawdzeniem licencji.",
  "تحقق من بريدك الإلكتروني قبل الاستعلام عن الترخيص.",
  "查询许可证前，请先验证电子邮件。"
],
};for(const [k,v] of Object.entries(entries))d[k]=v;if(window.PCP_I18N.completePolish)window.PCP_I18N.completePolish();if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


// v1.6: cadenas visibles pendientes centralizadas tras la auditoría de módulos.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;
 const entries={
  "Peso original de la bobina en gramos:": ["Original spool weight in grams:", "Poids initial de la bobine en grammes :", "Ursprüngliches Spulengewicht in Gramm:", "Peso iniziale della bobina in grammi:", "Początkowa masa szpuli w gramach:",
    "الوزن الأصلي للبكرة بالغرامات:",
    "线轴初始重量（克）："
  ],
  "Peso restante actual en gramos (antes de descontar esta impresión):": ["Current remaining weight in grams (before deducting this print):", "Poids restant actuel en grammes (avant déduction de cette impression) :", "Aktuelles Restgewicht in Gramm (vor Abzug dieses Drucks):", "Peso residuo attuale in grammi (prima di sottrarre questa stampa):", "Aktualna pozostała masa w gramach (przed odjęciem zużycia z tego wydruku):",
    "الوزن المتبقي حاليًا بالغرامات (قبل خصم هذه الطباعة):",
    "当前剩余重量（克，扣除此打印任务之前）："
  ],
  "Marca de la bobina (opcional):": ["Spool brand (optional):", "Marque de la bobine (facultatif) :", "Spulenmarke (optional):", "Marca della bobina (facoltativo):", "Marka szpuli (opcjonalnie):",
    "علامة البكرة التجارية (اختياري):",
    "线轴品牌（可选）："
  ],

  "Fuente no confirmada para {file}: {message}": ["Unconfirmed source for {file}: {message}", "Source non confirmée pour {file} : {message}", "Nicht bestätigte Quelle für {file}: {message}", "Fonte non confermata per {file}: {message}", "Niepotwierdzone źródło dla {file}: {message}",

    "المصدر غير مؤكد للملف {file}: {message}",

    "文件 {file} 的来源未确认：{message}"

  ],
  "Desglose del impuesto (sin impuestos)": ["Tax breakdown (taxes disabled)", "Détail de la taxe (taxes désactivées)", "Steueraufschlüsselung (Steuern deaktiviert)", "Dettaglio imposta (imposte disattivate)", "Podział podatku (podatki wyłączone)",
    "تفصيل الضريبة (دون ضرائب)",
    "税费明细（不含税）"
  ],
  "Desglose del impuesto (precio base sin impuestos)": ["Tax breakdown (base price excluding tax)", "Détail de la taxe (prix de base hors taxe)", "Steueraufschlüsselung (Grundpreis ohne Steuer)", "Dettaglio imposta (prezzo base al netto delle imposte)", "Podział podatku (cena podstawowa bez podatku)",
    "تفصيل الضريبة (السعر الأساسي دون ضرائب)",
    "税费明细（不含税基础价格）"
  ],
  "ERROR SQLite: no se han guardado los cambios. {message}": ["SQLite ERROR: changes were not saved. {message}", "ERREUR SQLite : les modifications n’ont pas été enregistrées. {message}", "SQLite-FEHLER: Änderungen wurden nicht gespeichert. {message}", "ERRORE SQLite: le modifiche non sono state salvate. {message}", "BŁĄD SQLite: zmiany nie zostały zapisane. {message}",
    "خطأ SQLite: لم يتم حفظ التغييرات. {message}",
    "SQLite 错误：更改未保存。{message}"
  ],
  "ERROR SQLite: no se han preparado los cambios. {message}": ["SQLite ERROR: changes could not be prepared. {message}", "ERREUR SQLite : impossible de préparer les modifications. {message}", "SQLite-FEHLER: Änderungen konnten nicht vorbereitet werden. {message}", "ERRORE SQLite: impossibile preparare le modifiche. {message}", "BŁĄD SQLite: nie udało się przygotować zmian. {message}",
    "خطأ SQLite: لم يتم إعداد التغييرات. {message}",
    "SQLite 错误：未能准备更改。{message}"
  ],
  "Subtotal: {subtotal} · Descuento ({discountPercent}): −{discount} · Envío: {shipping} · Base: {base}": ["Subtotal: {subtotal} · Discount ({discountPercent}): −{discount} · Shipping: {shipping} · Base: {base}", "Sous-total : {subtotal} · Remise ({discountPercent}) : −{discount} · Livraison : {shipping} · Base : {base}", "Zwischensumme: {subtotal} · Rabatt ({discountPercent}): −{discount} · Versand: {shipping} · Basis: {base}", "Subtotale: {subtotal} · Sconto ({discountPercent}): −{discount} · Spedizione: {shipping} · Base: {base}", "Suma częściowa: {subtotal} · Rabat ({discountPercent}): −{discount} · Wysyłka: {shipping} · Podstawa: {base}",
    "المجموع الفرعي: {subtotal} · الخصم ({discountPercent}): −{discount} · الشحن: {shipping} · الأساس: {base}",
    "小计：{subtotal} · 折扣（{discountPercent}）：−{discount} · 运费：{shipping} · 基础金额：{base}"
  ],
  "Presupuesto guardado el {date}. Puedes cargarlo desde «Presupuestos guardados».": ["Quote saved on {date}. You can load it from “Saved quotes”.", "Devis enregistré le {date}. Vous pouvez le charger depuis « Devis enregistrés ».", "Angebot gespeichert am {date}. Du kannst es unter „Gespeicherte Angebote“ laden.", "Preventivo salvato il {date}. Puoi caricarlo da «Preventivi salvati».", "Oferta zapisana {date}. Możesz ją wczytać z sekcji „Zapisane oferty”.",
    "تم حفظ عرض السعر بتاريخ {date}. يمكنك تحميله من «عروض الأسعار المحفوظة».",
    "报价单已于 {date} 保存。你可以从“已保存的报价单”中加载。"
  ],
  "PDF descargado": ["PDF downloaded", "PDF téléchargé", "PDF heruntergeladen", "PDF scaricato", "Pobrano PDF",
    "تم تنزيل PDF",
    "PDF 已下载"
  ],
  "Base estimada: {note}. Ajusta al uso real.": ["Estimated baseline: {note}. Adjust it to actual usage.", "Base estimée : {note}. Ajustez-la selon l’utilisation réelle.", "Geschätzte Grundlage: {note}. Passe sie an die tatsächliche Nutzung an.", "Base stimata: {note}. Adegua al consumo reale.", "Szacunkowa podstawa: {note}. Dostosuj ją do rzeczywistego użytkowania.",
    "الأساس التقديري: {note}. اضبطه وفق الاستخدام الفعلي.",
    "估算基础：{note}。请根据实际使用情况调整。"
  ],
  "Nombre guardado en este navegador; no se pudo guardar en SQLite: {message}": ["Name saved in this browser; it could not be saved to SQLite: {message}", "Nom enregistré dans ce navigateur ; impossible de l’enregistrer dans SQLite : {message}", "Name in diesem Browser gespeichert; Speicherung in SQLite fehlgeschlagen: {message}", "Nome salvato in questo browser; impossibile salvarlo in SQLite: {message}", "Nazwa zapisana w tej przeglądarce; nie udało się zapisać jej w SQLite: {message}",
    "تم حفظ الاسم في هذا المتصفح؛ تعذر حفظه في SQLite: {message}",
    "名称已保存在此浏览器中；无法保存到 SQLite：{message}"
  ],
  "Nombre guardado para {ip}.": ["Name saved for {ip}.", "Nom enregistré pour {ip}.", "Name für {ip} gespeichert.", "Nome salvato per {ip}.", "Zapisano nazwę dla {ip}.",
    "تم حفظ الاسم لعنوان {ip}.",
    "已为 {ip} 保存名称。"
  ],
 };
 for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();


// v1.6: atributos accesibles y ejemplos de campos del HTML centralizados.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;
 const entries={
  "Nombre del modelo": ["Model name", "Nom du modèle", "Modellname", "Nome del modello", "Nazwa modelu",
    "اسم الطراز",
    "型号名称"
  ],
  "Ej. FAC-{AAAA}-{0000}": ["e.g. INV-{YYYY}-{0000}", "Ex. FAC-{AAAA}-{0000}", "z. B. RE-{JJJJ}-{0000}", "Es. FAT-{AAAA}-{0000}", "np. FV-{RRRR}-{0000}",
    "مثال: FAC-{AAAA}-{0000}",
    "例如：FAC-{AAAA}-{0000}"
  ],
  "F-2026-0001": ["INV-2026-0001", "FAC-2026-0001", "RE-2026-0001", "FAT-2026-0001", "FV-2026-0001",
    "F-2026-0001",
    "F-2026-0001"
  ],
  "Nombre del cliente": ["Customer name", "Nom du client", "Kundenname", "Nome del cliente", "Nazwa klienta",
    "اسم العميل",
    "客户名称"
  ],
  "Dirección fiscal / postal": ["Billing / postal address", "Adresse fiscale / postale", "Rechnungs-/Postanschrift", "Indirizzo fiscale / postale", "Adres rozliczeniowy / pocztowy",
    "العنوان الضريبي / البريدي",
    "税务地址 / 邮寄地址"
  ],

  "Nombre del color": ["Color name", "Nom de la couleur", "Farbname", "Nome del colore", "Nazwa koloru",

    "اسم اللون",

    "颜色名称"

  ],
  "Nombre del nuevo cliente": ["New customer name", "Nom du nouveau client", "Name des neuen Kunden", "Nome del nuovo cliente", "Nazwa nowego klienta",
    "اسم العميل الجديد",
    "新客户名称"
  ],
  "Teléfono del cliente": ["Customer phone number", "Téléphone du client", "Telefonnummer des Kunden", "Telefono del cliente", "Numer telefonu klienta",
    "هاتف العميل",
    "客户电话"
  ],
  "ventas@tudominio.es": ["sales@yourdomain.com", "ventes@votredomaine.fr", "verkauf@ihredomain.de", "vendite@tuodominio.it", "sprzedaz@twojadomena.pl",
    "ventas@tudominio.es",
    "ventas@tudominio.es"
  ],
  "Ejemplo: 192.168.1.48": ["Example: 192.168.1.48", "Exemple : 192.168.1.48", "Beispiel: 192.168.1.48", "Esempio: 192.168.1.48", "Przykład: 192.168.1.48",
    "مثال: 192.168.1.48",
    "例如：192.168.1.48"
  ],
  "Elegir cualquier color": ["Choose any color", "Choisir n’importe quelle couleur", "Eine beliebige Farbe auswählen", "Scegli qualsiasi colore", "Wybierz dowolny kolor",
    "اختيار أي لون",
    "选择任意颜色"
  ],
  "Filtrar inventario por material": ["Filter inventory by material", "Filtrer l’inventaire par matériau", "Lager nach Material filtern", "Filtra inventario per materiale", "Filtruj magazyn według materiału",
    "تصفية المخزون حسب المادة",
    "按材料筛选库存"
  ],
  "Monitor Snapmaker U1": ["Snapmaker U1 monitor", "Moniteur Snapmaker U1", "Snapmaker-U1-Monitor", "Monitor Snapmaker U1", "Monitor Snapmaker U1",
    "مراقبة Snapmaker U1",
    "Snapmaker U1 监控"
  ],
 };
 for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();


// v1.6: textos de cabecera y acciones del panel U1.
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={

};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


// v1.3.1: claves faltantes detectadas en la auditoría de módulos y contabilidad.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;
 const entries={






  "Total previsto": ["Estimated total", "Total prévu", "Voraussichtliche Summe", "Totale previsto", "Przewidywana suma",






    "الإجمالي المتوقع",






    "预计总计"






  ],
  "filamento(s)": ["filament(s)", "filament(s)", "Filament(e)", "filamento/i", "filament(y)",
    "خيط/خيوط",
    "耗材"
  ],








  "Desgaste": ["Wear and depreciation", "Usure et amortissement", "Verschleiß und Abschreibung", "Usura e ammortamento", "Zużycie i amortyzacja",








    "التآكل",








    "磨损"








  ],
  "Mantenimiento": ["Maintenance and spare parts", "Entretien et pièces de rechange", "Wartung und Ersatzteile", "Manutenzione e ricambi", "Konserwacja i części zamienne",
    "الصيانة",
    "维护"
  ],
  "Mano de obra": ["Labour and extras", "Main-d’œuvre et extras", "Arbeitsaufwand und Extras", "Manodopera e extra", "Robocizna i dodatki",
    "العمالة",
    "人工"
  ],
  "Reserva": ["Failure allowance", "Provision pour échecs", "Fehlerreserve", "Riserva per errori", "Rezerwa na nieudane wydruki",
    "احتياطي",
    "预留"
  ],
  "Gasto propio o venta": ["Record as own expense or sale?", "Enregistrer comme dépense propre ou vente ?", "Als eigene Ausgabe oder Verkauf erfassen?", "Registrare come spesa propria o vendita?", "Zarejestrować jako wydatek własny czy sprzedaż?",
    "مصروف شخصي أو بيع",
    "个人支出或销售"
  ],
 };
 for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();


// v1.3.1: pie de versión traducible.
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={"Print Cost & Profit · Versión 1.3.1":["Print Cost & Profit · Version 1.3.1", "Print Cost & Profit · Version 1.3.1", "Print Cost & Profit · Version 1.3.1", "Print Cost & Profit · Versione 1.3.1", "Print Cost & Profit · Wersja 1.3.1"]};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


// v1.3.2: traducciones del alta rápida de bobinas desde G-code.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;
 const entries={















 };
 for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();


// v1.3.5: textos adicionales detectados en la auditoría global.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;
 const entries={
  "Presupuesto eliminado.": ["Quote deleted.", "Devis supprimé.", "Angebot gelöscht.", "Preventivo eliminato.", "Oferta usunięta.",
    "تم حذف عرض السعر.",
    "报价单已删除。"
  ],
  "Presupuestos abierto. Selecciona o crea el cliente antes de guardar.": ["Quotes opened. Select or create the customer before saving.", "Devis ouverts. Sélectionnez ou créez le client avant d’enregistrer.", "Angebote geöffnet. Wählen Sie vor dem Speichern einen Kunden aus oder legen Sie einen neuen an.", "Preventivi aperti. Seleziona o crea il cliente prima di salvare.", "Otwarto oferty. Przed zapisaniem wybierz klienta lub utwórz nowego.",
    "تم فتح عروض الأسعار. اختر العميل أو أنشئه قبل الحفظ.",
    "报价单页面已打开。保存前请选择或创建客户。"
  ],
  "Selecciona exactamente dos tasaciones en la columna «Comparar» y pulsa «Comparar seleccionadas». Seleccionadas: {count}/2.": ["Select exactly two estimates in the “Compare” column and click “Compare selected”. Selected: {count}/2.", "Sélectionnez exactement deux évaluations dans la colonne « Comparer », puis cliquez sur « Comparer la sélection ». Sélectionnées : {count}/2.", "Wählen Sie genau zwei Kalkulationen in der Spalte „Vergleichen“ aus und klicken Sie auf „Auswahl vergleichen“. Ausgewählt: {count}/2.", "Seleziona esattamente due valutazioni nella colonna «Confronta» e fai clic su «Confronta selezionate». Selezionate: {count}/2.", "Wybierz dokładnie dwie wyceny w kolumnie „Porównaj” i kliknij „Porównaj wybrane”. Wybrane: {count}/2.",
    "حدد تقديرين بالضبط في عمود «مقارنة» ثم اضغط «مقارنة المحدد». المحدد: {count}/2.",
    "请在“比较”列中准确选择两份估价，然后点击“比较所选项”。已选择：{count}/2。"
  ],
  "Presupuesto cargado. Puedes modificar los datos y guardarlo como otro presupuesto.": ["Quote loaded. You can edit the details and save it as another quote.", "Devis chargé. Vous pouvez modifier les données et l’enregistrer comme un autre devis.", "Angebot geladen. Sie können die Angaben ändern und als neues Angebot speichern.", "Preventivo caricato. Puoi modificare i dati e salvarlo come un altro preventivo.", "Oferta wczytana. Możesz zmienić dane i zapisać ją jako nową ofertę.",
    "تم تحميل عرض السعر. يمكنك تعديل البيانات وحفظها كعرض سعر آخر.",
    "报价单已加载。你可以修改数据并另存为另一份报价单。"
  ],
  "Conexión correcta (HTTP {status}). {detail}": ["Connection successful (HTTP {status}). {detail}", "Connexion réussie (HTTP {status}). {detail}", "Verbindung erfolgreich (HTTP {status}). {detail}", "Connessione riuscita (HTTP {status}). {detail}", "Połączenie prawidłowe (HTTP {status}). {detail}",
    "الاتصال ناجح (HTTP {status}). {detail}",
    "连接成功（HTTP {status}）。{detail}"
  ],
  "No se pudo conectar. Comprueba que el puente esté iniciado, la dirección sea correcta y que el navegador permita la conexión. Detalle: {message}": ["Could not connect. Check that the bridge is running, the address is correct, and the browser allows the connection. Details: {message}", "Connexion impossible. Vérifiez que le pont est démarré, que l’adresse est correcte et que le navigateur autorise la connexion. Détails : {message}", "Verbindung nicht möglich. Prüfen Sie, ob die Bridge gestartet ist, die Adresse stimmt und der Browser die Verbindung zulässt. Details: {message}", "Impossibile connettersi. Verifica che il bridge sia avviato, che l’indirizzo sia corretto e che il browser consenta la connessione. Dettagli: {message}", "Nie można nawiązać połączenia. Sprawdź, czy mostek jest uruchomiony, adres jest prawidłowy, a przeglądarka zezwala na połączenie. Szczegóły: {message}",
    "تعذر الاتصال. تحقق من تشغيل الجسر وصحة العنوان وسماح المتصفح بالاتصال. التفاصيل: {message}",
    "连接失败。请检查桥接服务是否已启动、地址是否正确，以及浏览器是否允许连接。详情：{message}"
  ],
 };
 for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();

/* v1.3.6 — claves nuevas del resumen de finalización U1. */
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
 "Impresión finalizada · Resumen de costes": ["Print completed · Cost summary", "Impression terminée · Résumé des coûts", "Druck abgeschlossen · Kostenübersicht", "Stampa completata · Riepilogo costi", "Druk zakończony · Podsumowanie kosztów",
   "اكتملت الطباعة · ملخص التكاليف",
   "打印已完成 · 成本摘要"
 ],
 "Desgaste de impresora": ["Printer wear", "Usure de l’imprimante", "Druckerverschleiß", "Usura stampante", "Zużycie drukarki",
   "استهلاك الطابعة",
   "打印机损耗"
 ],
 "Coste total estimado": ["Estimated total cost", "Coût total estimé", "Geschätzte Gesamtkosten", "Costo totale stimato", "Szacowany koszt całkowity",
   "إجمالي التكلفة المقدّرة",
   "预计总成本"
 ],
 "Consumo de filamento": ["Filament used", "Filament consommé", "Filamentverbrauch", "Filamento consumato", "Zużyty filament",
   "استهلاك الخيوط",
   "耗材用量"
 ],
 "Resumen informativo: no se ha registrado ningún gasto ni pedido.": ["Informational summary: no expense or order has been recorded.", "Résumé informatif : aucune dépense ni commande n’a été enregistrée.", "Informationsübersicht: Es wurde keine Ausgabe und keine Bestellung erfasst.", "Riepilogo informativo: non è stata registrata alcuna spesa né un ordine.", "Podsumowanie informacyjne: nie zarejestrowano wydatku ani zamówienia.",
   "ملخص معلوماتي: لم يتم تسجيل أي مصروف أو طلب.",
   "信息摘要：尚未登记任何支出或订单。"
 ]
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


/* v1.3.7 — claves pendientes detectadas en la auditoría. */
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
  "ORDEN": ["ORDER", "ORDRE", "REIHENFOLGE", "ORDINE", "KOLEJNOŚĆ",
    "الترتيب",
    "订单"
  ],
  "registros": ["records", "entrées", "Einträge", "record", "rekordów",
    "سجلات",
    "条记录"
  ],
  "Este archivo ya se imprimió y se registró el {date}. ¿Quieres registrarlo como una nueva impresión? Se conservará el movimiento anterior y se creará otro independiente.": [
    "This file was already printed and recorded on {date}. Do you want to record it as a new print? The previous entry will be kept and a separate one will be created.",
    "Ce fichier a déjà été imprimé et enregistré le {date}. Voulez-vous l’enregistrer comme une nouvelle impression ? L’entrée précédente sera conservée et une nouvelle entrée distincte sera créée.",
    "Diese Datei wurde bereits am {date} gedruckt und erfasst. Möchten Sie sie als neuen Druck erfassen? Der vorherige Eintrag bleibt erhalten und ein separater Eintrag wird erstellt.",
    "Questo file è già stato stampato e registrato il {date}. Vuoi registrarlo come una nuova stampa? La registrazione precedente sarà conservata e ne verrà creata una separata.",
    "Ten plik został już wydrukowany i zarejestrowany dnia {date}. Czy chcesz zarejestrować go jako nowy wydruk? Poprzedni wpis zostanie zachowany i powstanie osobny wpis.",
    "تمت طباعة هذا الملف وتسجيله بتاريخ {date}. هل تريد تسجيله كطباعة جديدة؟ سيتم الاحتفاظ بالقيد السابق وإنشاء قيد مستقل آخر.",
    "此文件已于 {date} 打印并登记。要将其登记为新的打印任务吗？原记录将保留，并创建一条独立的新记录。"
  ]
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


/* v1.3.8 — claves que faltaban en el informe de gastos propios. */
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
 "Amortización / desgaste": ["Depreciation / wear", "Amortissement / usure", "Abschreibung / Verschleiß", "Ammortamento / usura", "Amortyzacja / zużycie",
   "الإهلاك / التآكل",
   "折旧 / 磨损"
 ],
 "Categoría": ["Category", "Catégorie", "Kategorie", "Categoria", "Kategoria",
   "الفئة",
   "类别"
 ]
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();

;(()=>{const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
  "quedan": [
    "remaining",
    "restant",
    "übrig",
    "rimanenti",
    "pozostało",
    "متبقية",
    "剩余"
  ],
  "o": [
    "or",
    "ou",
    "oder",
    "oppure",
    "lub",
    "أو",
    "或"
    ],
  "h": [
    "hr",
    "h",
    "Std.",
    "h",
    "godz.",
    "س", "小时"
    ],
  "min": [
    "min",
    "min",
    "Min.",
    "min",
    "min",
    "دقيقة", "分钟"
    ],
  "＋ Crear bobina en inventario": [
    "＋ Create spool in inventory",
    "＋ Créer une bobine dans le stock",
    "＋ Spule zum Bestand hinzufügen",
    "＋ Crea bobina in magazzino",
    "＋ Utwórz szpulę w magazynie",
    "＋ إنشاء بكرة في المخزون",
    "＋ 在库存中创建线轴"
  ]
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();

/* v1.3.21 — textos dinámicos de agenda de clientes y documentos. */
;(()=>{const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
  'Cliente eliminado.': ['Client deleted.', 'Client supprimé.', 'Kunde gelöscht.', 'Cliente eliminato.', 'Klient usunięty.',
    "تم حذف العميل.",
    "客户已删除。"
  ],
  'Antes de enviar por WhatsApp': ['Before sending via WhatsApp', 'Avant l’envoi par WhatsApp', 'Vor dem Senden über WhatsApp', 'Prima di inviare tramite WhatsApp', 'Przed wysłaniem przez WhatsApp',
    "قبل الإرسال عبر واتساب",
    "通过 WhatsApp 发送前"
  ],
  'Antes de enviar por correo': ['Before sending by email', 'Avant l’envoi par e-mail', 'Vor dem Senden per E-Mail', 'Prima di inviare tramite e-mail', 'Przed wysłaniem e-mailem',
    "قبل الإرسال بالبريد الإلكتروني",
    "通过电子邮件发送前"
  ],
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


/* v1.3.25 — cadenas dinámicas de estado y mensajes sin t(). */
;(()=>{const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
  "error inesperado": [
    "unexpected error",
    "erreur inattendue",
    "unerwarteter Fehler",
    "errore imprevisto",
    "nieoczekiwany błąd",
    "خطأ غير متوقع",
    "意外错误"
  ],
  "Se han encontrado {count} movimientos guardados, pero no se han podido mostrar. Recarga la página para sincronizar Contabilidad.": [
    "There are {count} saved entries, but they could not be displayed. Reload the page to sync Accounting.",
    "{count} mouvements enregistrés ont été trouvés, mais ils n’ont pas pu être affichés. Rechargez la page pour synchroniser la comptabilité.",
    "{count} gespeicherte Buchungen wurden gefunden, konnten aber nicht angezeigt werden. Laden Sie die Seite neu, um die Buchhaltung zu synchronisieren.",
    "Sono stati trovati {count} movimenti salvati, ma non è stato possibile visualizzarli. Ricarica la pagina per sincronizzare la contabilità.",
    "Znaleziono {count} zapisanych operacji, ale nie można ich wyświetlić. Odśwież stronę, aby zsynchronizować księgowość.",
    "تم العثور على {count} حركة محفوظة، لكن تعذر عرضها. أعد تحميل الصفحة لمزامنة المحاسبة.",
    "找到 {count} 条已保存记录，但无法显示。请刷新页面以同步会计数据。"
    ],
  "{count} cliente(s) coinciden. Elige el cliente en el desplegable «Seleccionar cliente».": [
    "{count} customer(s) match. Choose the customer from the “Select customer” list.",
    "{count} client(s) correspondent. Choisissez le client dans la liste « Sélectionner un client ».",
    "{count} Kunde(n) gefunden. Wählen Sie den Kunden in der Liste „Kunde auswählen“ aus.",
    "Corrispondenze: {count} cliente/i. Scegli il cliente dall’elenco «Seleziona cliente».",
    "Pasujące wyniki: {count} klient(ów). Wybierz klienta z listy „Wybierz klienta”.",
    "يوجد {count} عميل مطابق. اختر العميل من القائمة المنسدلة «اختيار العميل».",
    "找到 {count} 位匹配客户。请从“选择客户”下拉列表中选择。"
    ],
  "Factura {number} guardada correctamente como borrador: completa los datos del cliente antes de emitirla.": [
    "Invoice {number} saved as a draft. Complete the customer details before issuing it.",
    "Facture {number} enregistrée comme brouillon. Complétez les coordonnées du client avant de l’émettre.",
    "Rechnung {number} als Entwurf gespeichert. Ergänzen Sie die Kundendaten vor dem Ausstellen.",
    "Fattura {number} salvata come bozza. Completa i dati del cliente prima di emetterla.",
    "Faktura {number} została zapisana jako wersja robocza. Uzupełnij dane klienta przed jej wystawieniem.",
    "تم حفظ الفاتورة {number} بنجاح كمسودة: أكمل بيانات العميل قبل إصدارها.",
    "发票 {number} 已成功保存为草稿：请在正式开具前补全客户信息。"
    ],
  "Factura {number} guardada correctamente.": [
    "Invoice {number} saved successfully.",
    "Facture {number} enregistrée avec succès.",
    "Rechnung {number} erfolgreich gespeichert.",
    "Fattura {number} salvata correttamente.",
    "Faktura {number} została zapisana.",
    "تم حفظ الفاتورة {number} بنجاح.",
    "发票 {number} 已成功保存。"
  ]
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();

;(()=>{const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d||Object.prototype.hasOwnProperty.call(d,"No se pudo cargar el registro de cambios. Comprueba que CHANGELOG.md está junto a Print Cost & Profit.html."))return;d["No se pudo cargar el registro de cambios. Comprueba que CHANGELOG.md está junto a Print Cost & Profit.html."]=["Could not load the changelog. Make sure CHANGELOG.md is next to Print Cost & Profit.html.", "Impossible de charger le journal des modifications. Vérifiez que CHANGELOG.md se trouve à côté de Print Cost & Profit.html.", "Das Änderungsprotokoll konnte nicht geladen werden. Stellen Sie sicher, dass CHANGELOG.md neben Print Cost & Profit.html liegt.", "Impossibile caricare il registro delle modifiche. Verifica che CHANGELOG.md si trovi accanto a Print Cost & Profit.html.", "Nie można załadować dziennika zmian. Upewnij się, że CHANGELOG.md znajduje się obok Print Cost & Profit.html."];if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();


/* v1.3.29 — Cobertura de textos HTML y mensajes directos de G-code, monitor, changelog y actualizaciones. */
;(()=>{const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;const entries={
  "Has seleccionado un .bgcode, que es binario. En Snapmaker Orca usa Exportar G-code y selecciona .gcode.": [
    "You selected a .bgcode file, which is binary. In Snapmaker Orca, use Export G-code and select .gcode.",
    "Vous avez sélectionné un fichier .bgcode, qui est binaire. Dans Snapmaker Orca, utilisez Exporter le G-code et sélectionnez .gcode.",
    "Sie haben eine binäre .bgcode-Datei ausgewählt. Verwenden Sie in Snapmaker Orca „G-Code exportieren“ und wählen Sie .gcode.",
    "Hai selezionato un file .bgcode, che è binario. In Snapmaker Orca usa Esporta G-code e seleziona .gcode.",
    "Wybrano plik .bgcode, który jest binarny. W Snapmaker Orca użyj opcji Eksportuj G-code i wybierz .gcode.",
    "لقد اخترت ملف .bgcode وهو ملف ثنائي. في Snapmaker Orca استخدم «تصدير G-code» واختر .gcode.",
    "你选择的是二进制文件 .bgcode。请在 Snapmaker Orca 中使用“导出 G-code”，并选择 .gcode 格式。"
  ],
  "Formato no reconocido: {filename}. Selecciona un archivo .gcode, .gco o .gc.": [
    "Unrecognized format: {filename}. Select a .gcode, .gco or .gc file.",
    "Format non reconnu : {filename}. Sélectionnez un fichier .gcode, .gco ou .gc.",
    "Unbekanntes Format: {filename}. Wählen Sie eine .gcode-, .gco- oder .gc-Datei aus.",
    "Formato non riconosciuto: {filename}. Seleziona un file .gcode, .gco o .gc.",
    "Nieznany format: {filename}. Wybierz plik .gcode, .gco lub .gc.",
    "تنسيق غير معروف: {filename}. اختر ملفًا بامتداد .gcode أو .gco أو .gc.",
    "无法识别的格式：{filename}。请选择 .gcode、.gco 或 .gc 文件。"
    ],
  "El archivo se ha abierto, pero está vacío o no contiene texto legible. Tamaño: {size} bytes.": [
    "The file opened, but is empty or contains no readable text. Size: {size} bytes.",
    "Le fichier est ouvert, mais il est vide ou ne contient aucun texte lisible. Taille : {size} octets.",
    "Die Datei wurde geöffnet, ist aber leer oder enthält keinen lesbaren Text. Größe: {size} Byte.",
    "Il file è stato aperto, ma è vuoto o non contiene testo leggibile. Dimensione: {size} byte.",
    "Plik został otwarty, ale jest pusty lub nie zawiera czytelnego tekstu. Rozmiar: {size} bajtów.",
    "تم فتح الملف، لكنه فارغ أو لا يحتوي على نص قابل للقراءة. الحجم: {size} بايت.",
    "文件已打开，但为空或不包含可读取的文本。大小：{size} 字节。"
    ],
  "El archivo se leyó, pero falló el análisis del G-code: {message}": [
    "The file was read, but G-code parsing failed: {message}",
    "Le fichier a été lu, mais l’analyse du G-code a échoué : {message}",
    "Die Datei wurde gelesen, aber die G-Code-Analyse ist fehlgeschlagen: {message}",
    "Il file è stato letto, ma l'analisi del G-code non è riuscita: {message}",
    "Plik został odczytany, ale analiza G-code nie powiodła się: {message}",
    "تمت قراءة الملف، لكن تعذر تحليل G-code: {message}",
    "文件已读取，但 G-code 解析失败：{message}"
    ],
  "Este navegador no permite leer archivos locales. Prueba abrirlo con Opera o Chrome actualizados.": [
    "This browser cannot read local files. Try opening it with an up-to-date version of Opera or Chrome.",
    "Ce navigateur ne permet pas de lire les fichiers locaux. Essayez avec une version récente d’Opera ou Chrome.",
    "Dieser Browser kann keine lokalen Dateien lesen. Versuchen Sie es mit einer aktuellen Version von Opera oder Chrome.",
    "Questo browser non consente di leggere file locali. Prova ad aprirlo con una versione aggiornata di Opera o Chrome.",
    "Ta przeglądarka nie może odczytywać plików lokalnych. Spróbuj otworzyć je w aktualnej wersji Opery lub Chrome.",
    "لا يسمح هذا المتصفح بقراءة الملفات المحلية. جرّب فتحه باستخدام إصدار حديث من Opera أو Chrome.",
    "此浏览器不支持读取本地文件。请尝试使用最新版 Opera 或 Chrome 打开。"
    ],
  "El navegador no pudo leer el archivo (FileReader error). Prueba copiar el G-code a una carpeta local, por ejemplo Escritorio.": [
    "The browser could not read the file (FileReader error). Try copying the G-code to a local folder, such as Desktop.",
    "Le navigateur n’a pas pu lire le fichier (erreur FileReader). Essayez de copier le G-code dans un dossier local, par exemple le Bureau.",
    "Der Browser konnte die Datei nicht lesen (FileReader-Fehler). Kopieren Sie den G-Code in einen lokalen Ordner, z. B. auf den Desktop.",
    "Il browser non è riuscito a leggere il file (errore FileReader). Prova a copiare il G-code in una cartella locale, ad esempio sul Desktop.",
    "Przeglądarka nie mogła odczytać pliku (błąd FileReader). Skopiuj G-code do lokalnego folderu, np. na Pulpit.",
    "تعذر على المتصفح قراءة الملف (خطأ FileReader). جرّب نسخ G-code إلى مجلد محلي مثل سطح المكتب.",
    "浏览器无法读取文件（FileReader 错误）。请尝试将 G-code 复制到本地文件夹，例如桌面。"
    ],
  "La lectura del archivo fue cancelada.": [
    "File reading was cancelled.",
    "La lecture du fichier a été annulée.",
    "Das Lesen der Datei wurde abgebrochen.",
    "La lettura del file è stata annullata.",
    "Odczytywanie pliku zostało anulowane.",
    "تم إلغاء قراءة الملف.",
    "文件读取已取消。"
    ],
  "No hay una bobina exacta asignada.": [
    "No exact spool assigned.",
    "Aucune bobine exacte n’est attribuée.",
    "Keine passende Spule zugewiesen.",
    "Nessuna bobina esatta assegnata.",
    "Nie przypisano dokładnej szpuli.",
    "لم يتم تعيين بكرة مطابقة تمامًا.",
    "尚未分配完全匹配的线轴。"
    ],
  "Mismo color disponible en otras marcas:": [
    "Same color available from other brands:",
    "Même couleur disponible chez d’autres marques :",
    "Gleiche Farbe bei anderen Marken verfügbar:",
    "Stesso colore disponibile in altre marche:",
    "Ten sam kolor dostępny u innych marek:",
    "اللون نفسه متوفر لدى علامات تجارية أخرى:",
    "其他品牌也有相同颜色："
    ],
  "Colores más parecidos disponibles:": [
    "Closest available colors:",
    "Couleurs disponibles les plus proches :",
    "Ähnlichste verfügbare Farben:",
    "Colori disponibili più simili:",
    "Najbardziej zbliżone dostępne kolory:",
    "الألوان الأقرب المتاحة:",
    "可选的相近颜色："
    ],
  "Color exact": [
    "Exact color",
    "Couleur exacte",
    "Exakte Farbe",
    "Colore esatto",
    "Dokładny kolor",
    "لون مطابق تمامًا",
    "精确颜色"
    ],
  "Color aproximado": [
    "Approximate color",
    "Couleur approximative",
    "Ungefähre Farbe",
    "Colore approssimativo",
    "Kolor przybliżony",
    "لون تقريبي",
    "近似颜色"
    ],
  "＋ Crear bobina nueva": [
    "＋ Create new spool",
    "＋ Créer une nouvelle bobine",
    "＋ Neue Spule erstellen",
    "＋ Crea nuova bobina",
    "＋ Utwórz nową szpulę",
    "＋ إنشاء بكرة جديدة",
    "＋ 创建新线轴"
    ],
  "El monitor no tiene datos de filamento para enviar.": [
    "The monitor has no filament data to send.",
    "Le moniteur ne contient aucune donnée de filament à envoyer.",
    "Der Monitor enthält keine Filamentdaten zum Senden.",
    "Il monitor non contiene dati del filamento da inviare.",
    "Monitor nie zawiera danych filamentu do wysłania.",
    "لا يحتوي جهاز المراقبة على بيانات خيوط لإرسالها.",
    "监控面板没有可发送的耗材数据。"
    ],
  "G-code del monitor enviado a la calculadora.": [
    "Monitor G-code sent to the calculator.",
    "G-code du moniteur envoyé à la calculatrice.",
    "Monitor-G-Code wurde an den Rechner gesendet.",
    "G-code del monitor inviato alla calcolatrice.",
    "G-code z monitora wysłano do kalkulatora.",
    "تم إرسال G-code من شاشة المراقبة إلى الحاسبة.",
    "已将监控面板中的 G-code 发送到计算器。"
    ],
  "Color de inventario aproximado: {color} (HEX {hex}); revisa la bobina.": [
    "Approximate inventory color: {color} (HEX {hex}); check the spool.",
    "Couleur approximative du stock : {color} (HEX {hex}) ; vérifiez la bobine.",
    "Ungefähre Lagerfarbe: {color} (HEX {hex}); prüfen Sie die Spule.",
    "Colore inventario approssimativo: {color} (HEX {hex}); controlla la bobina.",
    "Przybliżony kolor magazynowy: {color} (HEX {hex}); sprawdź szpulę.",
    "لون المخزون التقريبي: {color} (HEX {hex})؛ تحقق من بكرة الخيط.",
    "库存中的近似颜色：{color}（HEX {hex}）；请检查线轴。"
    ],
  "Comparar": [
    "Compare",
    "Comparer",
    "Vergleichen",
    "Confronta",
    "Porównaj",
    "مقارنة",
    "比较"
    ],
  "Seleccionar {name} para comparar": [
    "Select {name} to compare",
    "Sélectionner {name} pour comparer",
    "{name} zum Vergleichen auswählen",
    "Seleziona {name} per confrontare",
    "Wybierz {name} do porównania",
    "حدد {name} للمقارنة",
    "选择 {name} 进行比较"
    ],
  "Comparativa de tasaciones": [
    "Estimate comparison",
    "Comparaison des devis",
    "Kostenvoranschlag vergleichen",
    "Confronto delle stime",
    "Porównanie wycen",
    "مقارنة التقديرات",
    "估价对比"
    ],
  "Dato": [
    "Item",
    "Donnée",
    "Angabe",
    "Dato",
    "Dane",
    "البيان",
    "数据项"
    ],
  "Tasación A": [
    "Estimate A",
    "Devis A",
    "Kalkulation A",
    "Stima A",
    "Wycena A",
    "التقدير A",
    "估价 A"
    ],
  "Tasación B": [
    "Estimate B",
    "Devis B",
    "Kalkulation B",
    "Stima B",
    "Wycena B",
    "التقدير B",
    "估价 B"
    ],
  "Registro de cambios": [
    "Changelog",
    "Journal des modifications",
    "Änderungsprotokoll",
    "Registro modifiche",
    "Dziennik zmian",
    "سجل التغييرات",
    "更新日志"
    ],
  "Abrir registro de cambios": [
    "Open changelog",
    "Ouvrir le journal des modifications",
    "Änderungsprotokoll öffnen",
    "Apri registro modifiche",
    "Otwórz dziennik zmian",
    "فتح سجل التغييرات",
    "打开更新日志"
    ],
  "Cargando registro de cambios…": [
    "Loading changelog…",
    "Chargement du journal des modifications…",
    "Änderungsprotokoll wird geladen…",
    "Caricamento registro modifiche…",
    "Ładowanie dziennika zmian…",
    "جارٍ تحميل سجل التغييرات…",
    "正在加载更新日志……"
    ],
  "Hay una nueva versión de Print Cost & Profit disponible": [
    "A new version of Print Cost & Profit is available",
    "Une nouvelle version de Print Cost & Profit est disponible",
    "Eine neue Version von Print Cost & Profit ist verfügbar",
    "È disponibile una nuova versione di Print Cost & Profit",
    "Dostępna jest nowa wersja Print Cost & Profit",
    "يتوفر إصدار جديد من Print Cost & Profit",
    "有新版本的 Print Cost & Profit 可用"
    ],
  "Versión instalada: {installed} · Nueva versión: {latest}. Antes de actualizar, crea una copia de seguridad de tus datos.": [
    "Installed version: {installed} · New version: {latest}. Back up your data before updating.",
    "Version installée : {installed} · Nouvelle version : {latest}. Sauvegardez vos données avant la mise à jour.",
    "Installierte Version: {installed} · Neue Version: {latest}. Sichern Sie Ihre Daten vor dem Update.",
    "Versione installata: {installed} · Nuova versione: {latest}. Crea un backup dei dati prima di aggiornare.",
    "Zainstalowana wersja: {installed} · Nowa wersja: {latest}. Przed aktualizacją wykonaj kopię zapasową danych.",
    "الإصدار المثبت: {installed} · الإصدار الجديد: {latest}. أنشئ نسخة احتياطية من بياناتك قبل التحديث.",
    "当前版本：{installed} · 新版本：{latest}。更新前请先备份数据。"
    ],
  "Ver actualización y descargar": [
    "View update and download",
    "Voir la mise à jour et télécharger",
    "Update anzeigen und herunterladen",
    "Visualizza aggiornamento e scarica",
    "Zobacz aktualizację i pobierz",
    "عرض التحديث وتنزيله",
    "查看更新并下载"
    ],
  "Recordármelo más tarde": [
    "Remind me later",
    "Me le rappeler plus tard",
    "Später erinnern",
    "Ricordamelo più tardi",
    "Przypomnij mi później",
    "ذكّرني لاحقًا",
    "稍后提醒我"
    ],
  "No se pudo guardar la bobina en el inventario.": [
    "The spool could not be saved to inventory.",
    "Impossible d’enregistrer la bobine dans le stock.",
    "Die Spule konnte nicht im Lager gespeichert werden.",
    "Impossibile salvare la bobina nell'inventario.",
    "Nie udało się zapisać szpuli w magazynie.",
    "تعذر حفظ بكرة الخيط في المخزون.",
    "无法将线轴保存到库存。"
    ],
  "Bobina creada y asignada. Se descontará el consumo al finalizar la impresión.": [
    "Spool created and assigned. Consumption will be deducted when printing finishes.",
    "Bobine créée et attribuée. La consommation sera déduite à la fin de l’impression.",
    "Spule erstellt und zugewiesen. Der Verbrauch wird nach Abschluss des Drucks abgezogen.",
    "Bobina creata e assegnata. Il consumo verrà sottratto al termine della stampa.",
    "Utworzono i przypisano szpulę. Zużycie zostanie odjęte po zakończeniu drukowania.",
    "تم إنشاء بكرة الخيط وتعيينها. سيتم خصم الاستهلاك عند انتهاء الطباعة.",
    "线轴已创建并分配。打印完成后将扣减耗材用量。"
    ],
  "Trabajo detectado ({file}), pero el cálculo no contiene filamentos. No se descontará ninguna bobina. Carga el G-code de este mismo trabajo y vuelve a comprobar.": [
    "Job detected ({file}), but the calculation contains no filaments. No spool will be deducted. Load this job's G-code and check again.",
    "Travail détecté ({file}), mais le calcul ne contient aucun filament. Aucune bobine ne sera déduite. Chargez le G-code de ce travail et vérifiez à nouveau.",
    "Auftrag ({file}) erkannt, aber die Berechnung enthält keine Filamente. Es wird keine Spule abgezogen. Laden Sie den G-Code dieses Auftrags und prüfen Sie erneut.",
    "Lavoro rilevato ({file}), ma il calcolo non contiene filamenti. Nessuna bobina verrà scalata. Carica il G-code di questo lavoro e ricontrolla.",
    "Wykryto zadanie ({file}), ale obliczenie nie zawiera filamentów. Żadna szpula nie zostanie odjęta. Wczytaj G-code tego zadania i sprawdź ponownie.",
    "تم اكتشاف المهمة ({file})، لكن الحساب لا يحتوي على خيوط. لن يتم خصم أي بكرة. حمّل ملف G-code لهذه المهمة نفسها ثم تحقق مرة أخرى.",
    "已检测到任务（{file}），但计算中没有耗材数据。不会扣减任何线轴。请加载此任务对应的 G-code 并重新检查。"
    ],
  "Trabajo registrado. Bobinas asignadas: {mapped}/{total}. El descuento se intentará al finalizar; consumo estimado del G-code.": [
    "Job recorded. Assigned spools: {mapped}/{total}. Deduction will be attempted when it finishes; consumption estimated from G-code.",
    "Travail enregistré. Bobines attribuées : {mapped}/{total}. La déduction sera tentée à la fin ; consommation estimée depuis le G-code.",
    "Auftrag gespeichert. Zugewiesene Spulen: {mapped}/{total}. Der Abzug wird nach Abschluss versucht; Verbrauch laut G-Code.",
    "Lavoro registrato. Bobine assegnate: {mapped}/{total}. La detrazione sarà tentata al termine; consumo stimato dal G-code.",
    "Zapisano zadanie. Przypisane szpule: {mapped}/{total}. Odjęcie nastąpi po zakończeniu; zużycie oszacowano na podstawie G-code.",
    "تم تسجيل المهمة. البكرات المعيّنة: {mapped}/{total}. ستتم محاولة الخصم عند الانتهاء؛ الاستهلاك مقدّر من G-code.",
    "任务已登记。已分配线轴：{mapped}/{total}。将在打印完成时尝试扣减；耗材用量根据 G-code 估算。"
    ],
  "No hay un G-code activo con filamentos para enviar a la calculadora.": [
    "There is no active G-code with filaments to send to the calculator.",
    "Aucun G-code actif contenant des filaments à envoyer à la calculatrice.",
    "Es ist kein aktiver G-Code mit Filamenten zum Senden an den Rechner vorhanden.",
    "Non c'è un G-code attivo con filamenti da inviare alla calcolatrice.",
    "Brak aktywnego G-code z filamentami do wysłania do kalkulatora.",
    "لا يوجد ملف G-code نشط يحتوي على خيوط لإرساله إلى الحاسبة.",
    "没有包含耗材信息的活动 G-code 可发送到计算器。"
    ],
  "La calculadora todavía no está preparada para recibir los datos.": [
    "The calculator is not ready to receive the data yet.",
    "La calculatrice n’est pas encore prête à recevoir les données.",
    "Der Rechner ist noch nicht bereit, die Daten zu empfangen.",
    "La calcolatrice non è ancora pronta a ricevere i dati.",
    "Kalkulator nie jest jeszcze gotowy do odbioru danych.",
    "الحاسبة غير جاهزة بعد لاستقبال البيانات.",
    "计算器尚未准备好接收数据。"
    ],
  "orderTitle": ["Register print as a sales order", "Enregistrer l’impression comme commande de vente", "Druck als Verkaufsauftrag erfassen", "Registra la stampa come ordine di vendita", "Zarejestruj wydruk jako zamówienie sprzedaży",
    "تسجيل الطلب",
    "登记订单"
  ],
  "personalTitle": ["Register print as a personal expense", "Enregistrer l’impression comme dépense personnelle", "Druck als private Ausgabe erfassen", "Registra la stampa come spesa personale", "Zarejestruj wydruk jako wydatek własny",
    "تسجيل مصروف شخصي",
    "登记个人支出"
  ],
  "orderSubtitle": ["Review the sale amount charged to the customer, including taxes.", "Vérifiez le montant facturé au client, taxes comprises.", "Prüfen Sie den dem Kunden berechneten Betrag einschließlich Steuern.", "Controlla l’importo addebitato al cliente, imposte incluse.", "Sprawdź kwotę pobraną od klienta wraz z podatkami.",
    "راجع التفاصيل قبل تسجيل الطلب.",
    "登记订单前请检查详细信息。"
  ],
  "personalSubtitle": ["Review the estimated manufacturing cost to record in accounting.", "Vérifiez le coût de fabrication estimé à enregistrer en comptabilité.", "Prüfen Sie die geschätzten Herstellungskosten für die Buchhaltung.", "Controlla il costo di produzione stimato da registrare in contabilità.", "Sprawdź szacowany koszt produkcji do ujęcia w księgowości.",
    "راجع تكلفة التصنيع قبل تسجيل المصروف الشخصي.",
    "登记个人支出前，请检查制造成本。"
  ],
  "confirmOrder": ["Confirm sales order", "Confirmer la commande de vente", "Verkaufsauftrag bestätigen", "Conferma ordine di vendita", "Potwierdź zamówienie sprzedaży",
    "تأكيد الطلب",
    "确认订单"
  ],
  "confirmPersonal": ["Confirm personal expense", "Confirmer la dépense personnelle", "Private Ausgabe bestätigen", "Conferma spesa personale", "Potwierdź wydatek własny",
    "تأكيد المصروف الشخصي",
    "确认个人支出"
  ],
  "charge": ["Amount charged to customer (including taxes)", "Montant facturé au client (taxes comprises)", "Dem Kunden berechneter Betrag (einschließlich Steuern)", "Importo addebitato al cliente (imposte incluse)", "Kwota pobrana od klienta (z podatkami)",
    "المبلغ المحصّل",
    "收取金额"
  ],
  "cost": ["Total expense to record", "Dépense totale à enregistrer", "Zu erfassende Gesamtausgabe", "Spesa totale da registrare", "Łączny wydatek do zarejestrowania",
    "التكلفة",
    "成本"
  ],
  "Pedido U1 registrado usando el punto 04.": ["U1 order recorded using point 04.", "Commande U1 enregistrée à l’aide du point 04.", "U1-Auftrag mit Punkt 04 erfasst.", "Ordine U1 registrato utilizzando il punto 04.", "Zamówienie U1 zarejestrowano przy użyciu punktu 04.",
    "تم تسجيل طلب U1 باستخدام البند 04.",
    "已使用第 04 项登记 U1 订单。"
  ],
  "Impresión U1 registrada como gasto personal.": ["U1 print recorded as a personal expense.", "Impression U1 enregistrée comme dépense personnelle.", "U1-Druck als private Ausgabe erfasst.", "Stampa U1 registrata come spesa personale.", "Wydruk U1 zarejestrowano jako wydatek własny.",
    "تم تسجيل طباعة U1 كمصروف شخصي.",
    "U1 打印已登记为个人支出。"
  ],
  "error": ["Error", "Erreur", "Fehler", "Errore", "Błąd",
    "خطأ",
    "错误"
  ],
  "cancelled": ["Cancelled", "Annulé", "Abgebrochen", "Annullato", "Anulowano",
    "ملغاة",
    "已取消"
  ],
  "canceled": ["Cancelled", "Annulé", "Abgebrochen", "Annullato", "Anulowano",
    "أُلغيت",
    "已取消"
  ],
  "Recuerda descargar {file} antes de continuar.": ["Remember to download {file} before continuing.", "N’oubliez pas de télécharger {file} avant de continuer.", "Denken Sie daran, {file} herunterzuladen, bevor Sie fortfahren.", "Ricorda di scaricare {file} prima di continuare.", "Pamiętaj, aby pobrać {file} przed kontynuowaniem.",
    "تذكر تنزيل {file} قبل المتابعة.",
    "继续之前，请记得下载 {file}。"
  ],
  "Material sin indicar": ["Unspecified material", "Matériau non indiqué", "Material nicht angegeben", "Materiale non specificato", "Nieokreślony materiał",
    "المادة غير محددة",
    "未指定材料"
  ],
  "Personalizado por el usuario": ["User-defined", "Personnalisé par l’utilisateur", "Benutzerdefiniert", "Personalizzato dall’utente", "Ustawione przez użytkownika",
    "مخصص من قبل المستخدم",
    "用户自定义"
  ],
  "Amortización de impresora: {detail} por hora": ["Printer depreciation: {detail} per hour", "Amortissement de l’imprimante : {detail} par heure", "Druckerabschreibung: {detail} pro Stunde", "Ammortamento stampante: {detail} all’ora", "Amortyzacja drukarki: {detail} na godzinę",
    "إهلاك الطابعة: {detail} لكل ساعة",
    "打印机折旧：每小时 {detail}"
  ],
  "Teléfono: {value}": ["Phone: {value}", "Téléphone : {value}", "Telefon: {value}", "Telefono: {value}", "Telefon: {value}",
    "الهاتف: {value}",
    "电话：{value}"
  ],
  "No se pudo cargar el registro de cambios. Comprueba que CHANGELOG.md está junto a Print_Cost_Profit.html.": ["Could not load the changelog. Check that CHANGELOG.md is next to Print_Cost_Profit.html.", "Impossible de charger le journal des modifications. Vérifiez que CHANGELOG.md se trouve à côté de Print_Cost_Profit.html.", "Das Änderungsprotokoll konnte nicht geladen werden. Prüfen Sie, ob CHANGELOG.md neben Print_Cost_Profit.html liegt.", "Impossibile caricare il registro delle modifiche. Verifica che CHANGELOG.md si trovi accanto a Print_Cost_Profit.html.", "Nie udało się wczytać dziennika zmian. Sprawdź, czy CHANGELOG.md znajduje się obok Print_Cost_Profit.html.",
    "تعذر تحميل سجل التغييرات. تحقق من وجود CHANGELOG.md بجانب Print_Cost_Profit.html.",
    "无法加载更新日志。请确认 CHANGELOG.md 与 Print_Cost_Profit.html 位于同一目录。"
  ],
  "Integridad: {result}. Claves: {count}. Tamaño: {bytes} bytes. Archivo: {name}": ["Integrity: {result}. Keys: {count}. Size: {bytes} bytes. File: {name}", "Intégrité : {result}. Clés : {count}. Taille : {bytes} octets. Fichier : {name}", "Integrität: {result}. Schlüssel: {count}. Größe: {bytes} Bytes. Datei: {name}", "Integrità: {result}. Chiavi: {count}. Dimensione: {bytes} byte. File: {name}", "Integralność: {result}. Klucze: {count}. Rozmiar: {bytes} bajtów. Plik: {name}",
    "سلامة البيانات: {result}. المفاتيح: {count}. الحجم: {bytes} بايت. الملف: {name}",
    "完整性：{result}。键数：{count}。大小：{bytes} 字节。文件：{name}"
  ],
  "Bobina creada y asignada al cálculo.": ["Spool created and assigned to the calculation.", "Bobine créée et affectée au calcul.", "Spule erstellt und der Berechnung zugewiesen.", "Bobina creata e assegnata al calcolo.", "Szpula została utworzona i przypisana do obliczenia.",
    "تم إنشاء البكرة وتعيينها للحساب.",
    "线轴已创建并分配给此计算。"
  ],
  "Bobina seleccionada: {brand} · {color}. La asignación se ha aplicado al cálculo; el inventario no se descuenta ahora.": ["Selected spool: {brand} · {color}. The assignment has been applied to the calculation; inventory is not deducted now.", "Bobine sélectionnée : {brand} · {color}. L’affectation a été appliquée au calcul ; le stock n’est pas déduit pour le moment.", "Ausgewählte Spule: {brand} · {color}. Die Zuordnung wurde auf die Berechnung angewendet; der Bestand wird jetzt nicht abgezogen.", "Bobina selezionata: {brand} · {color}. L’assegnazione è stata applicata al calcolo; l’inventario non viene scaricato ora.", "Wybrana szpula: {brand} · {color}. Przypisanie zastosowano w obliczeniu; materiał nie jest teraz odejmowany ze stanu magazynowego.",
    "البكرة المحددة: {brand} · {color}. تم تطبيق التعيين على الحساب؛ لن يتم خصم المخزون الآن.",
    "已选择线轴：{brand} · {color}。分配已应用于本次计算；当前不会扣减库存。"
  ],
  "Stock insuficiente: hay {stock} g y se necesitan {used} g; faltarían {missing} g. No llegaría con esta bobina.": ["Insufficient stock: {stock} g available and {used} g required; {missing} g would be missing. This spool is not enough.", "Stock insuffisant : {stock} g disponibles et {used} g nécessaires ; il manquerait {missing} g. Cette bobine ne suffit pas.", "Unzureichender Bestand: {stock} g verfügbar, {used} g benötigt; {missing} g würden fehlen. Diese Spule reicht nicht aus.", "Scorte insufficienti: {stock} g disponibili e {used} g necessari; mancherebbero {missing} g. Questa bobina non basta.", "Niewystarczający stan magazynowy: dostępne {stock} g, potrzebne {used} g; zabrakłoby {missing} g. Ta szpula nie wystarczy.",
    "المخزون غير كافٍ: المتوفر {stock} غ والمطلوب {used} غ؛ ينقص {missing} غ. هذه البكرة وحدها لا تكفي.",
    "库存不足：现有 {stock} 克，需要 {used} 克；还缺少 {missing} 克。仅使用此线轴无法满足需求。"
  ],
  "El sistema de licencias está desactivado.": ["The licensing system is disabled.", "Le système de licences est désactivé.", "Das Lizenzsystem ist deaktiviert.", "Il sistema di licenze è disattivato.", "System licencji jest wyłączony.",
    "نظام التراخيص معطّل.",
    "许可证系统已禁用。"
  ],
  "Color exacto": ["Exact color", "Couleur exacte", "Exakte Farbe", "Colore esatto", "Dokładny kolor",
    "لون مطابق تمامًا",
    "精确颜色"
  ],
  "Inventario: {total} bobina(s) en total · {filtered} bobina(s) en este filtro.": ["Inventory: {total} spool(s) in total · {filtered} spool(s) in this filter.", "Inventaire : {total} bobine(s) au total · {filtered} bobine(s) dans ce filtre.", "Bestand: insgesamt {total} Spule(n) · {filtered} Spule(n) in diesem Filter.", "Inventario: {total} bobina/e in totale · {filtered} bobina/e in questo filtro.", "Magazyn: łącznie {total} szpul · {filtered} szpul w tym filtrze.",
    "المخزون: إجمالي {total} بكرة · {filtered} بكرة ضمن عامل التصفية هذا.",
    "库存：共 {total} 个线轴 · 当前筛选结果为 {filtered} 个。"
  ],
  "Marca no indicada": ["Brand not specified", "Marque non indiquée", "Marke nicht angegeben", "Marca non specificata", "Nie podano marki",
    "العلامة التجارية غير محددة",
    "未指定品牌"
  ],
  "Sin color": ["No color", "Sans couleur", "Keine Farbe", "Senza colore", "Brak koloru",
    "بدون لون",
    "无颜色"
  ],
  "Bobinas asignadas: {assigned}/{total}. Comprueba las asignaciones antes del descuento.": ["Spools assigned: {assigned}/{total}. Check assignments before deducting stock.", "Bobines attribuées : {assigned}/{total}. Vérifiez les attributions avant la déduction.", "Zugeordnete Spulen: {assigned}/{total}. Prüfen Sie die Zuordnungen vor dem Lagerabzug.", "Bobine assegnate: {assigned}/{total}. Verifica le assegnazioni prima dello scarico.", "Przypisane szpule: {assigned}/{total}. Sprawdź przypisania przed odjęciem stanu magazynowego.",
    "البكرات المعيّنة: {assigned}/{total}. تحقق من التعيينات قبل الخصم.",
    "已分配线轴：{assigned}/{total}。扣减前请检查分配情况。"
  ],
  "Resumen de filamentos: {count} · asignados correctamente: {assigned} · pendientes de revisar: {missing}": ["Filament summary: {count} · correctly assigned: {assigned} · pending review: {missing}", "Résumé des filaments : {count} · correctement attribués : {assigned} · à vérifier : {missing}", "Filamentübersicht: {count} · korrekt zugeordnet: {assigned} · noch zu prüfen: {missing}", "Riepilogo filamenti: {count} · assegnati correttamente: {assigned} · da verificare: {missing}", "Podsumowanie filamentów: {count} · prawidłowo przypisane: {assigned} · do sprawdzenia: {missing}",
    "ملخص الخيوط: {count} · تم تعيينها بنجاح: {assigned} · بانتظار المراجعة: {missing}",
    "耗材摘要：{count} · 已正确分配：{assigned} · 待检查：{missing}"
  ],
  "Se ha repartido el consumo entre bobinas compatibles cuando ha sido necesario.": ["Consumption was distributed across compatible spools when necessary.", "La consommation a été répartie entre des bobines compatibles lorsque cela était nécessaire.", "Der Verbrauch wurde bei Bedarf auf kompatible Spulen verteilt.", "Il consumo è stato distribuito tra bobine compatibili quando necessario.", "W razie potrzeby zużycie rozdzielono między zgodne szpule.",
    "تم توزيع الاستهلاك على البكرات المتوافقة عند الحاجة.",
    "必要时，已将耗材用量分配到多个兼容线轴。"
  ],
  "Enviar a calcular": ["Send to calculator", "Envoyer vers la calculatrice", "An den Rechner senden", "Invia al calcolatore", "Wyślij do kalkulatora",
    "إرسال إلى الحاسبة",
    "发送到计算器"
  ],
  "Otra marca…": ["Other brand…", "Autre marque…", "Andere Marke…", "Altra marca…", "Inna marka…",
    "علامة تجارية أخرى…",
    "其他品牌……"
  ],
  "Inventario de filamento": ["Filament inventory", "Inventaire des filaments", "Filamentbestand", "Inventario filamenti", "Magazyn filamentu",
    "مخزون الخيوط",
    "耗材库存"
  ],
  "Crear bobina nueva": ["Create a new spool", "Créer une nouvelle bobine", "Neue Spule erstellen", "Crea una nuova bobina", "Utwórz nową szpulę",
    "إنشاء بكرة جديدة",
    "创建新线轴"
  ],
  "Se guardará en tu inventario y quedará asignada a este material del G-code.": ["It will be saved in your inventory and assigned to this G-code material.", "Elle sera enregistrée dans votre inventaire et associée à ce matériau du G-code.", "Sie wird in deinem Bestand gespeichert und diesem G-Code-Material zugewiesen.", "Verrà salvata nell'inventario e assegnata a questo materiale del G-code.", "Zostanie zapisana w magazynie i przypisana do tego materiału z G-code.",
    "سيتم حفظها في مخزونك وتعيينها لهذه المادة في G-code.",
    "该线轴将保存到库存，并分配给此 G-code 材料。"
  ],
  "Nombre de la marca": ["Brand name", "Nom de la marque", "Markenname", "Nome della marca", "Nazwa marki",
    "اسم العلامة التجارية",
    "品牌名称"
  ],
  "Peso inicial de la bobina (g)": ["Initial spool weight (g)", "Poids initial de la bobine (g)", "Anfangsgewicht der Spule (g)", "Peso iniziale della bobina (g)", "Początkowa waga szpuli (g)",
    "الوزن الأولي للبكرة (غ)",
    "线轴初始重量（克）"
  ],
  "Peso restante actual (g)": ["Current remaining weight (g)", "Poids restant actuel (g)", "Aktuelles Restgewicht (g)", "Peso residuo attuale (g)", "Aktualna pozostała waga (g)",
    "الوزن المتبقي حاليًا (غ)",
    "当前剩余重量（克）"
  ],
  "Precio de compra de la bobina (opcional)": ["Spool purchase price (optional)", "Prix d'achat de la bobine (facultatif)", "Kaufpreis der Spule (optional)", "Prezzo di acquisto della bobina (facoltativo)", "Cena zakupu szpuli (opcjonalnie)",
    "سعر شراء البكرة (اختياري)",
    "线轴购买价格（可选）"
  ],
  "El peso restante se guarda tal como lo indiques. No se descuenta el consumo de este cálculo.": ["The remaining weight is saved as entered. This calculation's consumption is not deducted.", "Le poids restant est enregistré tel que vous l'indiquez. La consommation de ce calcul n'est pas déduite.", "Das Restgewicht wird wie angegeben gespeichert. Der Verbrauch dieser Berechnung wird nicht abgezogen.", "Il peso residuo viene salvato come indicato. Il consumo di questo calcolo non viene detratto.", "Pozostała waga zostanie zapisana zgodnie z podaną wartością. Zużycie z tego obliczenia nie zostanie odjęte.",
    "سيتم حفظ الوزن المتبقي كما أدخلته. لن يتم خصم استهلاك هذا الحساب.",
    "剩余重量将按你输入的数值保存。本次计算的耗材用量不会被扣除。"
  ],
  "Crear y asignar bobina": ["Create and assign spool", "Créer et attribuer la bobine", "Spule erstellen und zuweisen", "Crea e assegna bobina", "Utwórz i przypisz szpulę",
    "إنشاء البكرة وتعيينها",
    "创建并分配线轴"
  ],
  "Selecciona o escribe una marca.": ["Select or enter a brand.", "Sélectionnez ou saisissez une marque.", "Wähle eine Marke aus oder gib sie ein.", "Seleziona o inserisci una marca.", "Wybierz lub wpisz markę.",
    "اختر علامة تجارية أو اكتب اسمها.",
    "请选择或输入品牌名称。"
  ],
  "El peso restante debe estar entre 0 y el peso inicial.": ["The remaining weight must be between 0 and the initial weight.", "Le poids restant doit être compris entre 0 et le poids initial.", "Das Restgewicht muss zwischen 0 und dem Anfangsgewicht liegen.", "Il peso residuo deve essere compreso tra 0 e il peso iniziale.", "Pozostała waga musi mieścić się w zakresie od 0 do wagi początkowej.",
    "يجب أن يكون الوزن المتبقي بين 0 والوزن الأولي.",
    "剩余重量必须介于 0 和初始重量之间。"
  ],
  "Bobina nueva creada y asignada: {brand} · {color}.": ["New spool created and assigned: {brand} · {color}.", "Nouvelle bobine créée et attribuée : {brand} · {color}.", "Neue Spule erstellt und zugewiesen: {brand} · {color}.", "Nuova bobina creata e assegnata: {brand} · {color}.", "Utworzono i przypisano nową szpulę: {brand} · {color}.",
    "تم إنشاء بكرة جديدة وتعيينها: {brand} · {color}.",
    "已创建并分配新线轴：{brand} · {color}。"
  ],
  "Escribe la marca": [
    "Enter the brand",
    "Saisissez la marque",
    "Marke eingeben",
    "Inserisci la marca",
    "Wpisz markę",
    "أدخل العلامة التجارية",
    "请输入品牌"
  ]
};for(const [k,v] of Object.entries(entries)){if(!Object.prototype.hasOwnProperty.call(d,k))d[k]=v;}if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();})();

