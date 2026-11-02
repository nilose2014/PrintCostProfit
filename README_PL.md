# Szybka instalacja

Wybierz pakiet odpowiedni dla swojego systemu operacyjnego:

### Windows 10 / 11 — stabilna wersja v1.2

- **[Pobierz instalator Windows v1.2](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.2/PrintCostProfit-Windows-Installer-v1.2.zip)**.
- Rozpakuj plik ZIP i uruchom `PrintCostProfit-Setup-1.2.exe`.
- Postępuj zgodnie z instrukcjami instalatora. Następnie uruchom Print Cost & Profit za pomocą utworzonego skrótu.
- Instalator zawiera komponenty wymagane do lokalnego przechowywania danych SQLite; nie trzeba ręcznie instalować Pythona.

**Repozytorium Windows:** [PrintCostProfit — główna gałąź](https://github.com/nilose2014/PrintCostProfit). Jeśli wolisz instalację z kodu źródłowego, otwórz **Code → Download ZIP**, rozpakuj wszystkie pliki do stałego folderu i uruchom `Integracion_Orca_Postprocesado.bat`.

### Linux / Ubuntu — wersja stabilna

- **[Pobierz stabilną wersję dla systemu Linux](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1)**.
- Rozpakuj pobrany plik ZIP.
- Postępuj zgodnie z instrukcjami instalacji i uruchamiania dołączonymi do pakietu.

**Repozytorium / wersja Linux:** [PrintCostProfit — Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux).

---

# Print Cost & Profit v1.2

## Kalkulator kosztów, produkcji i zarządzania drukiem 3D

Print Cost & Profit to aplikacja zaprojektowana, aby pomagać użytkownikom druku 3D obliczać rzeczywiste koszty produkcji, monitorować zużycie filamentu, zarządzać materiałami i organizować działalność handlową związaną z wydrukami.

Aplikacja łączy kalkulator kosztów z narzędziami do zarządzania, lokalnym przechowywaniem danych i integracją z programami do cięcia opartymi na OrcaSlicer, w szczególności Snapmaker Orca, OrcaSlicer i Creality Print. Zawiera również monitor kompatybilnych drukarek, przy czym poziom zgodności zależy od modelu i dostępnego połączenia.

## Zrzuty ekranu aplikacji

Poniższe obrazy przedstawiają wybrane ekrany Print Cost & Profit. Pokazują różne obszary interfejsu; dostępne funkcje zależą od zainstalowanej wersji i konfiguracji.

![Kalkulator kosztów](galeria/es/01-calculadora-de-costes.jpg)

![Wynik i zysk](galeria/es/02-resultado-y-beneficio.jpg)

![Pływający panel drukowania](galeria/es/03-panel-flotante-de-impresion.jpg)

**Autorstwo:** Beatriz Toro Martin

**Opublikowana wersja:** v1.2

**Referencyjny system operacyjny:** Windows 10 i Windows 11

**Oficjalne repozytorium:** https://github.com/nilose2014/PrintCostProfit

---

# 1. Najważniejsze funkcje

## 1.1. Kalkulator kosztów druku 3D

Kalkulator umożliwia oszacowanie kosztu wykonania elementu na podstawie parametrów drukowania i powiązanych kosztów.

W zależności od dostępnej konfiguracji można uwzględnić następujące pozycje kosztowe:

- Zużycie filamentu.
- Cena użytego materiału.
- Czas drukowania.
- Koszty eksploatacji i zużycia drukarki.
- Amortyzacja urządzenia.
- Inne wydatki związane z produkcją.
- Oczekiwana marża zysku.
- Wybrane podatki i waluta.

Celem jest poznanie kosztu wykonania elementu przed ustaleniem jego ceny sprzedaży.

## 1.2. Cena sprzedaży, zysk i marża

Kalkulator umożliwia analizę szacowanego wyniku finansowego wydruku.

Obliczenia pomagają rozróżnić:

- **Koszt produkcji:** szacunkowa wartość wykorzystanych zasobów.
- **Cena sprzedaży:** kwota, którą planujesz pobrać za element.
- **Szacowany zysk:** obliczona różnica między przychodami a uwzględnionymi kosztami.
- **Marża:** relacja zysku do ceny sprzedaży, zgodnie z definicją zastosowaną w obliczeniach.
- **Cena rekomendowana:** proponowana cena obliczona na podstawie skonfigurowanych parametrów.

Wyniki zależą od wprowadzonych cen, wartości procentowych, czasów i pozostałych danych. Aby uzyskać przydatne szacunki, aktualizuj koszty filamentu, drukarki i dodatkowych wydatków.

![Magazyn produktów](galeria/es/04-inventario-de-productos.jpg)

## 1.3. Profile drukarek

Profile umożliwiają konfigurację parametrów ekonomicznych związanych z używanym sprzętem.

Mogą uwzględniać takie dane jak koszt zakupu, szacowany okres użytkowania i koszty eksploatacji, jeśli zostały przewidziane w profilu.

Jeśli używasz kilku drukarek, wybierz odpowiedni profil, aby szacunki odzwierciedlały różnice między urządzeniami.

![Profile i monitor drukarek](galeria/es/06-perfiles-y-monitor-de-impresoras.jpg)

## 1.4. Zgodność z programami do cięcia

Integracja została zaprojektowana dla programów opartych na OrcaSlicer, w szczególności **Snapmaker Orca, OrcaSlicer i Creality Print**. Zgodność z tymi programami wynosi około **90%**; działanie może się jeszcze różnić w zależności od wersji i konfiguracji. Nie należy więc określać jej jako 100-procentowej zgodności.

Integracja za pomocą skryptów przetwarzania końcowego umożliwia przetwarzanie plików G-code generowanych przez program do cięcia i wykorzystywanie dostępnych danych w procesie pracy Print Cost & Profit. Zakres możliwych do odczytania informacji zależy od pliku, konfiguracji i wersji programu.

![Wyceny](galeria/es/08-presupuestos.jpg)

## 1.5. Monitor i zgodność drukarek

Drukarką o potwierdzonej **100-procentowej** zgodności jest **Snapmaker U1**. Monitor działa również z innymi drukarkami dostępnymi przez **Fluidd** lub **Mainsail/Moonraker** (zależnie od konfiguracji), ale obsługa tych modeli jest nadal dopracowywana. Niektóre funkcje mogą być niedostępne lub działać inaczej w trakcie dalszych testów.

## 1.6. Lokalny magazyn danych SQLite

Aplikacja zawiera komponenty lokalnego przechowywania danych oparte na SQLite.

Celem jest przechowywanie danych w bazie na komputerze zamiast rozdzielania ich między komputer i przeglądarkę.

Jeśli lokalny magazyn danych nie może zostać uruchomiony, aplikacja powinna wyświetlić odpowiedni błąd zamiast po cichu przełączać się na inny system przechowywania.

## 1.7. Narzędzia diagnostyczne

Projekt zawiera skrypty pomagające sprawdzić uruchamianie aplikacji, działanie lokalnego mostu komunikacyjnego i wybrane problemy z integracją.

Narzędzia te dostarczają przydatnych informacji, gdy komponent nie uruchamia się lub operacja nie kończy się prawidłowo.

---

# 2. Wymagania wstępne

Przed uruchomieniem programu zaleca się przygotowanie:

- Komputera z systemem Windows 10, Windows 11 lub Linux.
- Stałego lokalnego folderu na instalację projektu.
- Programu do cięcia opartego na OrcaSlicer — zwłaszcza Snapmaker Orca, OrcaSlicer lub Creality Print — jeśli chcesz korzystać z integracji.
- Wszystkich plików pobranej dystrybucji.
- Komponentów magazynowania danych i konfiguracji zawartych w pakiecie dystrybucyjnym.

Dystrybucja powinna zawierać plik wykonywalny SQLite przygotowany dla systemu Windows, aby użytkownik końcowy nie musiał ręcznie instalować Pythona.

Nie uruchamiaj aplikacji bezpośrednio z pliku ZIP. Najpierw rozpakuj wszystkie pliki.

---

# 3. Pobieranie i instalacja Print Cost & Profit

## Krok 1. Pobierz program

1. Otwórz oficjalne repozytorium:

   https://github.com/nilose2014/PrintCostProfit dla Windows oraz https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1 dla Linux

2. Kliknij **Code**.
3. Wybierz **Download ZIP**.
4. Poczekaj na zakończenie pobierania.
5. Rozpakuj zawartość pliku ZIP.

## Krok 2. Wybierz folder

Możesz użyć folderu takiego jak:

`C:\PrintCostProfit`

Możesz też wybrać inną stałą lokalizację. Unikaj folderów tymczasowych i nie przenoś programu po skonfigurowaniu ścieżek w OrcaSlicer, chyba że zaktualizujesz również te ścieżki.

## Krok 3. Uruchom program

Otwórz folder, do którego rozpakowano pliki, i kliknij dwukrotnie:

**`Integracion_Orca_Postprocesado.bat`**

Plik ten służy zarówno do ręcznego uruchamiania, jak i do integracji z OrcaSlicer.

Podczas ręcznego uruchamiania sprawdza, czy lokalna usługa jest dostępna. Jeśli nie odpowiada, próbuje ją uruchomić i czeka, aż będzie gotowa, zanim otworzy interfejs w przeglądarce.

Nie trzeba najpierw otwierać pliku HTML ani osobno uruchamiać lokalnego mostu, jeśli może to zrobić program uruchamiający.

**Ważne:** aby korzystać z funkcji wymagających lokalnego przechowywania danych, uruchamiaj aplikację za pomocą tego pliku, a nie przez bezpośrednie otwarcie `Print_Cost_Profit.html`.

---

# 4. Konfiguracja programu do cięcia opartego na OrcaSlicer

Integracja jest przeznaczona dla programów opartych na OrcaSlicer, w szczególności Snapmaker Orca, OrcaSlicer i Creality Print. Nazwy menu i niektóre szczegóły mogą się różnić. Ogólna zgodność wynosi około 90%, dlatego zalecamy wykonanie testu z zainstalowaną wersją.

Integracja wykorzystuje skrypt przetwarzania końcowego do przetworzenia G-code po zakończeniu cięcia modelu.

## Krok 1. Znajdź plik integracji

W folderze programu znajdź:

`Integracion_Orca_Postprocesado.bat`

Skopiuj pełną ścieżkę. Jeśli użyto przykładowego folderu, będzie to:

`C:\PrintCostProfit\Integracion_Orca_Postprocesado.bat`

Jeśli program został zainstalowany w innym miejscu, użyj rzeczywistej ścieżki.

## Krok 2. Otwórz ustawienia drukowania

1. Otwórz OrcaSlicer.
2. Wybierz profil drukarki, którego chcesz użyć.
3. Otwórz ustawienia drukowania.
4. W razie potrzeby włącz tryb zaawansowany lub ekspercki.
5. Otwórz sekcję **Inne**.
6. Znajdź pozycję **Skrypty przetwarzania końcowego**.

Nazwy i układ menu mogą się różnić w zależności od programu do cięcia, jego wersji i wybranego języka.

## Krok 3. Dodaj skrypt

Wprowadź pełną ścieżkę do pliku:

`Integracion_Orca_Postprocesado.bat`

Zapisz ustawienia profilu.

Jeśli program do cięcia wymaga określonej składni ścieżek lub argumentów, użyj formatu odpowiedniego dla tej wersji.

## Krok 4. Wykonaj test

1. Wczytaj prosty model.
2. Wybierz drukarkę i profil drukowania.
3. Skonfiguruj materiał.
4. Potnij model.
5. Wyeksportuj G-code.
6. Sprawdź, czy przetwarzanie końcowe przebiega bez błędów.

Skrypt przetwarza plik G-code, gdy OrcaSlicer wywołuje go ze ścieżką pliku. W takim przypadku działa inaczej niż przy ręcznym uruchomieniu: przetwarza plik i kończy działanie bez otwierania drugiego okna aplikacji.

---

# 5. Przetwarzanie plików G-code

G-code zawiera instrukcje generowane przez program do cięcia dla drukarki 3D.

Integracja Print Cost & Profit może przetwarzać te pliki, aby pobierać dostępne dane przydatne do obliczeń i rejestrowania zadań.

W zależności od informacji zawartych w pliku i dostępnych funkcji istotne dane mogą obejmować:

- Nazwę lub ścieżkę pliku.
- Informacje o drukowaniu wygenerowane przez program do cięcia.
- Szacowany czas i zużycie materiału.
- Informacje o filamencie, jeśli są dostępne.

Wartości uzyskane z G-code są szacunkami pochodzącymi z procesu cięcia. Nie należy automatycznie traktować ich jako rzeczywistego zużycia potwierdzonego przez drukarkę.

## Ręczny test pliku G-code

Projekt zawiera:

`Probar_Integracion_con_Gcode.bat`

Aby wykonać test:

1. Znajdź plik G-code wygenerowany przez używany kompatybilny program do cięcia.
2. Przeciągnij plik na `Probar_Integracion_con_Gcode.bat`.
3. Poczekaj na zakończenie procesu.
4. Sprawdź wynik i ewentualne komunikaty o błędach.

Test pomaga odróżnić problem z przetwarzaniem pliku od problemu lokalnej usługi.

---

# 6. Zarządzanie kosztami i rentownością ![Podsumowanie kosztów](galeria/es/14-resumen-de-costes.jpg)

Aby uzyskać przydatne wyniki, skonfiguruj dane finansowe przed obliczeniem ceny elementu.

## Filament

Aktualizuj cenę każdego używanego materiału. Zmiana ceny za kilogram może znacząco wpłynąć na koszt wytwarzanych elementów.

## Drukarka

Używaj profilu urządzenia, na którym zostanie wykonany element. Parametry amortyzacji i zużycia powinny opierać się na rozsądnych szacunkach kosztu i okresu użytkowania.

## Czas produkcji

Czas szacowany przez program do cięcia pozwala oszacować koszt związany z używaniem maszyny. Rzeczywisty wynik może się różnić z powodu przerw, zmian materiału, awarii lub różnic między czasem szacowanym a rzeczywistym.

## Dodatkowe wydatki

Uwzględnij wydatki dotyczące danego zadania, które są przewidziane w konfiguracji kalkulatora.

## Cena sprzedaży

Sprawdź sugerowaną cenę razem z kosztem, zyskiem i marżą. Wiarygodność obliczonej ceny zależy od jakości wprowadzonych danych.

---

# 7. Przechowywanie i zachowywanie danych

Print Cost & Profit korzysta z lokalnej usługi i bazy danych SQLite w funkcjach zależnych od tego sposobu przechowywania.

Lokalizacja używana przez instalację może znajdować się w lokalnym profilu użytkownika systemu Windows.

## Zalecenia

- Nie usuwaj bazy danych, gdy usługa jest uruchomiona.
- Nie przenoś ręcznie folderu danych.
- Przed aktualizacją programu wykonaj kopię zapasową danych.
- Po aktualizacji sprawdź, czy lokalna usługa uruchamia się prawidłowo.
- Sprawdź, czy dane są zachowywane po zamknięciu i ponownym otwarciu aplikacji.

## Jeśli pojawi się błąd przechowywania danych

Jeśli aplikacja informuje, że nie może uruchomić magazynu danych PC, nie kontynuuj wprowadzania danych tak, jakby były prawidłowo zapisywane.

Sprawdź lokalną usługę i skorzystaj z narzędzi diagnostycznych. Nie usuwaj bazy danych w celu rozwiązania problemu.

Zabezpieczenie przed cichym przełączeniem na pamięć przeglądarki ma zapobiegać rozdzieleniu danych między dwie różne lokalizacje.

---

# 8. Dołączone skrypty i narzędzia ![Dokumentacja i pomoc](galeria/es/19-documentacion-y-ayuda.jpg)

Repozytorium zawiera różne pliki pomocnicze. Podczas normalnego użytkowania nie trzeba uruchamiać ich wszystkich ręcznie.

| Plik | Funkcja |
|---|---|
| `Integracion_Orca_Postprocesado.bat` | Ręczne uruchamianie aplikacji i punkt wejścia przetwarzania końcowego dla kompatybilnych programów opartych na OrcaSlicer. |
| `Iniciar_Puente_Orca.ps1` | Uruchamia lub sprawdza most integracyjny. |
| `Iniciar_Puente_Orca_Independiente.cmd` | Niezależny program uruchamiający lokalny most. |
| `Integracion_Print_Cost_Profit.ps1` | Obsługuje integrację z plikiem G-code. |
| `Probar_Integracion_con_Gcode.bat` | Ręczny test przetwarzania pliku G-code. |
| `Comprobar_Puente_U1.bat` | Sprawdza most związany z Snapmaker U1. |
| `Diagnostico_Arranque.bat` | Pomaga analizować problemy z uruchamianiem. |
| `Diagnostico_Print_Cost_Profit.bat` | Narzędzie diagnostyczne aplikacji. |
| `Diagnostico_Version.bat` | Sprawdza informacje o wersji. |
| `pcp_sqlite_api.py` | Kod usługi przechowywania danych SQLite. |
| `pcp_sqlite_store.py` | Komponent dostępu do magazynu SQLite i zarządzania nim. |
| `storage-client.js` | Klient używany przez interfejs do komunikacji z magazynem danych. |
| `VERSION` | Informacje o wersji projektu. |
| `LICENSE.txt` | Warunki użytkowania i informacja o prawach autorskich. |

Dostępność i dokładne działanie poszczególnych funkcji zależą od plików zawartych w dystrybucji i ich konfiguracji.

---

# 9. Rozwiązywanie problemów

## Aplikacja się nie otwiera

1. Sprawdź, czy rozpakowano wszystkie pliki.
2. Uruchom `Integracion_Orca_Postprocesado.bat`.
3. Poczekaj na odpowiedź lokalnej usługi.
4. Jeśli aplikacja się nie otworzy, uruchom `Diagnostico_Arranque.bat`.
5. Zachowaj pełny komunikat o błędzie.

## Magazyn danych PC nie uruchamia się

Sprawdź, czy pakiet zawiera plik wykonywalny SQLite dla systemu Windows i czy znajduje się on w lokalizacji oczekiwanej przez serwer.

Jeśli pojawi się błąd HTTP 500, sprawdź stan usługi i komunikaty diagnostyczne przed próbą modyfikowania danych.

Nie przełączaj się na pamięć przeglądarki ani nie usuwaj bazy danych jako doraźnego rozwiązania.

## Program do cięcia nie uruchamia integracji

1. Sprawdź ścieżkę pliku `.bat`.
2. Upewnij się, że plik istnieje.
3. Sprawdź konfigurację profilu drukowania.
4. Wykonaj test za pomocą `Probar_Integracion_con_Gcode.bat`.
5. Zachowaj komunikat błędu i ścieżkę użytego pliku G-code.

## Dane nie są zachowywane

Sprawdź, czy aplikacja została uruchomiona za pomocą programu uruchamiającego i czy lokalna usługa działa.

Następnie wykonaj test z nieistotnymi danymi i sprawdź, czy zostaną zachowane po ponownym uruchomieniu aplikacji.

Nie usuwaj istniejących danych w celu naprawy magazynu.

---

# 10. Bezpieczeństwo i dobre praktyki

- Pobieraj program z oficjalnego repozytorium.
- Nie udostępniaj haseł, kluczy prywatnych ani danych logowania.
- Nie uruchamiaj skryptów z nieznanych źródeł.
- Nie udostępniaj lokalnej usługi w Internecie bez odpowiedniej konfiguracji zabezpieczeń.
- Przechowuj kopie zapasowe ważnych danych.
- Przed zastąpieniem plików podczas aktualizacji sprawdź zależności i działanie programu.

---

# 11. Prawa autorskie i warunki użytkowania

Print Cost & Profit podlega warunkom określonym w pliku `LICENSE.txt`.

Samo opublikowanie kodu w serwisie GitHub nie oznacza udzielenia zgody na sprzedaż, odsprzedaż, udzielanie sublicencji, redystrybucję ani komercyjne wykorzystywanie oprogramowania, jego zmodyfikowanych wersji lub produktów pochodnych, jeżeli takie działania są zabronione przez obowiązującą licencję.

Wnioski o udzielenie zgody należy składać na piśmie i muszą one zostać wyraźnie zaakceptowane przez właściciela praw.

---

# 12. Pomoc i zgłaszanie problemów

Zgłaszając problem, podaj:

- Wersję Print Cost & Profit.
- Wersję systemu Windows.
- Nazwę i wersję programu do cięcia (Snapmaker Orca, OrcaSlicer, Creality Print lub innego).
- Używaną drukarkę, jeśli ma to znaczenie.
- Wykonaną czynność.
- Pełny komunikat o błędzie.
- Kroki pozwalające odtworzyć problem.

Nie podawaj haseł, kluczy prywatnych ani zbędnych danych osobowych.

---

**Print Cost & Profit v1.2**

Opracowane przez Beatriz Toro Martin.

Obliczaj koszty, śledź realizowane zadania i usprawniaj zarządzanie finansami.
