# Print Cost & Profit

**Kompleksowe narzędzie do obliczania kosztów, monitorowania produkcji i zarządzania działalnością druku 3D.**

Print Cost & Profit pomaga poznać rzeczywisty koszt wydruku, ustalać opłacalne ceny, monitorować zgodne drukarki, zarządzać filamentem i organizować codzienną pracę.

> **Stabilna wersja Windows: v1.4**  
> **Pakiet Linux: v1.4**  
> Wydania i pliki do pobrania: [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases).

## Pobieranie, repozytoria i instalacja

| Platforma | Pobieranie | Instalacja |
|---|---|---|
| **Windows** | [Najnowsze wydania](https://github.com/nilose2014/PrintCostProfit/releases/latest): pobierz instalator `.exe` lub dostępny pakiet Windows. | Uruchom instalator i postępuj zgodnie z instrukcjami. |
| **Linux** | [Gałąź Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) lub [Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest): pobierz pakiet Linux v1.4 po publikacji. | Rozpakuj pakiet i uruchom skrypt startowy. |

### Oficjalne linki
- Główne repozytorium: https://github.com/nilose2014/PrintCostProfit
- Kod Linux: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Wszystkie wydania: https://github.com/nilose2014/PrintCostProfit/releases
- Najnowsze wydanie: https://github.com/nilose2014/PrintCostProfit/releases/latest
- Zgłoszenia błędów: https://github.com/nilose2014/PrintCostProfit/issues

Strona Releases jest oficjalnym źródłem instalatorów i pakietów. Pliki mogą się zmieniać; nie używaj starych bezpośrednich linków.

### Instalacja Windows
1. Otwórz [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Pobierz najnowszy instalator `.exe` lub dostępny ZIP.
3. Uruchom instalator albo rozpakuj cały ZIP do zapisywalnego folderu.
4. Uruchom aplikację ze skrótu lub dołączonego skryptu.
5. Jeśli przeglądarka nie otworzy się automatycznie, przejdź do `http://127.0.0.1:8700/`.
6. Zachowaj razem pliki HTML, JavaScript, CSS i serwera.

Serwer lokalny musi działać. Po aktualizacji zatrzymaj stary serwer, uruchom serwer z nowego folderu i odśwież stronę przez `Ctrl + F5`. Przed wymianą plików wykonaj kopię zapasową. Nie usuwaj katalogu danych.

### Instalacja Linux (Ubuntu, Debian i pochodne)
1. Pobierz pakiet z [gałęzi Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) lub [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Rozpakuj całość i otwórz terminal w katalogu głównym.
3. Uruchom:
   ```bash
   chmod +x linux/iniciar_linux.sh
   ./linux/iniciar_linux.sh
   ```
4. Otwórz `http://127.0.0.1:8700/`.

Polecenia wykonuj w terminalu Linux; w WSL używaj Ubuntu, nie PowerShell. Wymagane są Python 3 i SQLite. Zachowaj strukturę katalogów. Dane użytkownika są przechowywane oddzielnie od plików programu. Nie ignoruj nieudanych testów startowych.

### Pierwsze uruchomienie i drukarka
Uruchom serwer przed otwarciem strony. Komputer i drukarka muszą być dostępne w sieci lokalnej. Skonfiguruj Moonraker z adresem LAN i portem drukarki. Ustawienia można zapisać przy wyłączonej drukarce, ale monitoring na żywo wymaga połączenia. Integracja Snapmaker Orca korzysta z obsługiwanego przepływu lokalnego i skryptu post-processingu z pakietu.

---

## Czym jest Print Cost & Profit?

Łączy techniczną i handlową stronę druku 3D. Oprócz materiału i czasu uwzględnia energię, zużycie maszyny, konserwację, pracę, wykończenie, nieudane wydruki, zapasy i cenę końcową.

Przepływ pracy: import danych z obsługiwanego G-code lub ręczne wpisanie, obliczenie rzeczywistego kosztu, określenie celu zysku i sugerowanej ceny, sprawdzenie materiałów i drukarki, zapis wycen i dokumentów oraz śledzenie produkcji, zapasów, konserwacji i finansów.

## Główne funkcje

### 1. Kalkulator kosztów wydruku
Uwzględnia zużycie filamentu w gramach, cenę za kilogram, czas drukowania, energię, amortyzację, koszty maszyny, konserwację, robociznę i przygotowanie, koszty dodatkowe, malowanie i wykończenie na sztukę oraz rezerwę na nieudane wydruki. Pokazuje cel zysku, sugerowaną cenę, koszt i zysk na sztukę oraz marżę. Rozróżnia **koszt produkcji**, **cenę sprzedaży**, **zysk** i **marżę**.

#### G-code i slicer
Integracja Orca może importować nazwę pliku, materiały, kolory i kody HEX, szacowane zużycie, czas i dostępne miniatury. Sprawdź dane i przypisania przed obliczeniem, szczególnie przy wielu materiałach lub kolorach.

#### Porównywanie i zapisane wyceny
Porównuj scenariusze cenowe oraz wpływ zmiany celu zysku lub dodatkowej kwoty. Wyceny można zapisywać.

### 2. Pulpit
Podsumowanie sprzedaży, kosztów, zysków, wykresów finansowych, zapasów, stanu drukarek, produkcji i ostatniej aktywności. Szczegóły znajdują się w odpowiednich sekcjach.

### 3. Monitor drukarek — Snapmaker U1 / Moonraker
Łączy zgodne drukarki przez sieć lokalną i Moonraker. Funkcje: wykrywanie i ręczne IP, zapisywanie połączeń, stan online/offline, stan i postęp wydruku, aktywne zadanie, nazwa pliku i dostępne zużycie filamentu, lista plików, miniatury G-code, wybór wielu drukarek i przesłanie aktywnego wydruku do kalkulatora.

Komputer musi mieć dostęp do drukarki w sieci lokalnej. Firewall, izolacja sieci, błędne IP lub niedostępny Moonraker mogą uniemożliwić monitoring.

### 4. Magazyn filamentu
Zapisuje markę, materiał (PLA, PETG i inne), nazwę i kod HEX koloru, wagę początkową i pozostałą, cenę za kilogram i stan magazynowy. Porównuje materiały i kolory G-code z zapisanymi szpulami. Niepewne dopasowania trzeba sprawdzić. Ostrzeżenia zależą od aktualnych wag.

### 5. Drukarki i profile
Konfiguracja drukarek i połączeń, wykrywanie sieciowe, jeśli dostępne, zapisywanie danych, podgląd stanu oraz przypisywanie produkcji i księgowości do urządzenia. Przepływ jest ukierunkowany na Snapmaker U1; inne urządzenia i firmware mogą wymagać zgodnych endpointów Moonraker i nie muszą być zweryfikowane.

### 6. Centrum konserwacji
Organizuje czyszczenie, smarowanie osi, kontrolę pasków i prowadnic, hotendu, dysz, ekstrudera, podawania filamentu, wentylatorów, chłodzenia, stołu, kabli i złączy. Pozwala rejestrować czynności i ich status. Zawsze przestrzegaj instrukcji i zasad bezpieczeństwa producenta.

### 7. Wyceny, zamówienia i faktury
Tworzy i zapisuje wyceny, obsługuje zamówienia i faktury, łączy klientów, pokazuje szczegóły i sumy, generuje PDF i przekształca wycenę w fakturę, jeśli przepływ to obsługuje. Przed wysłaniem sprawdź numerację, podatki, walutę, dane klienta i PDF.

### 8. Klienci
Przechowuje dane klientów i łączy je z dokumentami handlowymi, ograniczając ponowne wpisywanie oraz porządkując wyceny, zamówienia i faktury.

### 9. Księgowość
Rejestruje operacje i umożliwia analizę przychodów, kosztów i zysków, także według drukarki, jeśli skonfigurowano. Porównuj dane z oficjalną księgowością i obowiązkami podatkowymi. Aplikacja nie udziela porad księgowych ani podatkowych.

### 10. Katalog produktów
Organizuje wytwarzane lub sprzedawane produkty. Gdy dostępne, prezentacja produktów i funkcje QR łączą fizyczny produkt z informacjami katalogowymi.

### 11. Dziennik i diagnostyka
Lokalne logi pomagają diagnozować serwer, połączenie drukarki, API, import, integrację, kopie i magazynowanie. Zgłaszając problem, podaj wersję, system, kroki i logi bez danych prywatnych.

### 12. Kopie i odzyskiwanie
Lokalne przechowywanie z kopiami i odzyskiwaniem w obsługiwanych kompilacjach. Serwer Linux oferuje API snapshotów, kontroli rewizji, kopii i logów. Windows ma własny serwer i magazyn. Wykonuj kopie przed aktualizacją, przechowuj je poza katalogiem programu i nie edytuj bazy podczas pracy aplikacji.

### 13. Opcje i interfejs
Zbiera konfigurację. W zależności od wersji pozwala organizować sekcje, ukrywać pola i zmieniać kolejność paneli.

### 14. Osiem języków
Teksty są centralizowane w `js/traducciones.js`: hiszpański, angielski, francuski, niemiecki, włoski, polski, arabski z obsługą RTL i chiński uproszczony. Nowe pola, okna, przyciski, ostrzeżenia i błędy należy centralizować i tłumaczyć.

---

## Zrzuty ekranu

Obrazy znajdują się w `assets/screenshots/`.

### Pulpit
![Pulpit](assets/screenshots/screenshot-02.jpg)

### Kalkulator i dane wydruku
![Kalkulator](assets/screenshots/screenshot-03.jpg)
![Dane wydruku](assets/screenshots/screenshot-01.jpg)

### Produkcja i obsługa handlowa
![Obsługa handlowa](assets/screenshots/screenshot-05.jpg)
![Koszty i ceny](assets/screenshots/screenshot-06.jpg)
![Konfiguracja i dokumenty](assets/screenshots/screenshot-07.jpg)

### Ustawienia i aktualizacje
![Konfiguracja](assets/screenshots/screenshot-08.jpg)
![Opcje](assets/screenshots/screenshot-09.jpg)
![Wersja i aktualizacje](assets/screenshots/screenshot-10.jpg)

### Klienci, zamówienia i faktury
![Klienci](assets/screenshots/screenshot-12.jpg)
![Klienci i dokumenty](assets/screenshots/screenshot-13.jpg)
![Dokumenty](assets/screenshots/screenshot-14.jpg)
![Zamówienia i wyceny](assets/screenshots/screenshot-15.jpg)
![Faktury](assets/screenshots/screenshot-16.jpg)
![Sprzedaż](assets/screenshots/screenshot-17.jpg)

### Filament i drukarki
![Zapas filamentu](assets/screenshots/screenshot-18.jpg)
![Magazyn](assets/screenshots/screenshot-19.jpg)
![Drukarka i materiały](assets/screenshots/screenshot-20.jpg)

### Rentowność i raporty
![Rentowność](assets/screenshots/screenshot-21.jpg)
![Podsumowanie finansowe](assets/screenshots/screenshot-22.jpg)
![PDF faktury](assets/screenshots/screenshot-23.jpg)

### Konserwacja
![Centrum konserwacji](assets/screenshots/screenshot-24.jpg)
![Zadania konserwacyjne](assets/screenshots/screenshot-25.jpg)

### Inne ekrany
![Dodatkowy ekran](assets/screenshots/screenshot-04.jpg)
![Dodatkowy ekran](assets/screenshots/screenshot-11.jpg)
![Dodatkowy ekran](assets/screenshots/screenshot-26.jpg)

---

## Typowy przepływ pracy
1. Przygotuj zadanie w slicerze i wygeneruj G-code.
2. Zaimportuj dane przez Orca lub wpisz je ręcznie.
3. Sprawdź materiały i kolory oraz przypisz je do magazynu.
4. Sprawdź drukarkę i dostępny filament.
5. Oblicz materiał, czas, energię, maszynę, pracę i wykończenie.
6. Ustal cenę sprzedaży i sprawdź marżę.
7. Zapisz wycenę i przypisz klienta.
8. Monitoruj wydruk.
9. Zarejestruj sprzedaż lub fakturę i sprawdź finanse.
10. Zaktualizuj zapasy i konserwację.

## Wymagania systemowe
**Windows:** zgodny Windows 64-bit, uprawnienia do uruchamiania i zapisu danych, dostęp do sieci lokalnej i Internet do GitHub.

**Linux:** Ubuntu, Debian lub pochodne, Python 3, SQLite, prawo wykonywania skryptu i sieć lokalna.

**Drukarka:** zgodne połączenie, dostępne lokalne API Moonraker, poprawne IP i integracja Orca skonfigurowana zgodnie z pakietem.

## Wersje i aktualizacje
Opisana stabilna wersja Windows i pakiet Linux to **v1.4**. Przed aktualizacją wykonaj kopię, pobierz właściwy pakiet, zatrzymaj serwer, zaktualizuj pliki, uruchom serwer z nowego folderu i sprawdź wersję. Nie uruchamiaj dwóch serwerów na tym samym porcie. Domyślny adres: `127.0.0.1:8700`.

## Rozwiązywanie problemów
- **Aplikacja się nie otwiera:** sprawdź serwer, terminal/PowerShell, otwórz `http://127.0.0.1:8700/` i sprawdź port 8700.
- **Nieprawidłowa wersja:** zatrzymaj stary serwer, uruchom właściwy, sprawdź `http://127.0.0.1:8700/api/version`, plik `VERSION` i odśwież `Ctrl + F5`.
- **Drukarka offline:** sprawdź zasilanie, sieć, IP, Moonraker i firewall; spróbuj ręcznego IP.
- **Brak metadanych lub miniatur:** sprawdź G-code i eksport slicera; zweryfikuj materiał, kolor, wagę i czas.
- **Testy Linux nie przechodzą:** uruchom skrypt z katalogu głównego, sprawdź Python 3 i SQLite oraz zachowaj pełny błąd.

## Struktura projektu
- `Print_Cost_Profit.html` — interfejs.
- `js/` — moduły, integracje i tłumaczenia.
- `css/` — style.
- `VERSION` — wersja odczytywana przez serwer.
- `Servidor_Panel_U1.ps1` — serwer Windows.
- `linux/` — serwer Linux, start i testy.
- Dane lokalne — baza, logi i kopie przechowywane oddzielnie od programu zgodnie z platformą.

Zawartość może się różnić między pakietami Windows i Linux.

## Pomoc i współpraca
- Błędy: https://github.com/nilose2014/PrintCostProfit/issues
- Kod źródłowy: https://github.com/nilose2014/PrintCostProfit
- Kod Linux: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Wydania: https://github.com/nilose2014/PrintCostProfit/releases

Podaj wersję, system, pakiet, drukarkę i połączenie, kroki odtworzenia, oczyszczone logi i zrzuty ekranu. Nie publikuj haseł, tokenów, prywatnych danych dostępu, danych klientów ani prywatnych baz.

## Ważne informacje
Print Cost & Profit wspiera obliczanie kosztów i zarządzanie pracami druku 3D. Wyniki zależą od danych, metadanych slicera, konfiguracji, taryf energii, cen materiałów i ustawień. Sprawdzaj obliczenia, zapasy, wyceny i faktury. Monitoring zależy od zgodnych usług lokalnych i firmware/API; funkcje mogą się różnić między platformami i wersjami.

**Print Cost & Profit — poznaj koszty, ustal ceny wydruków i zarządzaj procesem druku 3D.**
