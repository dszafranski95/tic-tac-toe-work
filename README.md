# Tic-Tac-Toe Redux

## Opis projektu

Tic-Tac-Toe Redux to nowoczesna aplikacja do gry w kółko i krzyżyk (Tic-Tac-Toe), stworzona za pomocą Reacta, Reduxa, Styled Components oraz przeciwnika AI. Aplikacja posiada ciemny motyw z neonowym designem i możliwość gry na siatce 4x4 (możliwość dostosowania na inne rozmiary, np. 5x5). AI wykonuje losowe ruchy, co dodaje elementu rywalizacji, gdy gracz zmierza się z komputerem.

## Technologie

- **React**: Do budowy interfejsu użytkownika.
- **Redux**: Do zarządzania stanem gry.
- **Styled Components**: Do stylizacji komponentów z nowoczesnym, neonowym designem.
- **Redux Toolkit**: Ułatwienie zarządzania stanem.
- **AI**: Prosty algorytm AI wykonujący losowe ruchy.

## Funkcje

- **Dwuosobowy tryb gry**: Gracz X kontra Gracz O.
- **Przeciwnik AI**: Gra przeciwko prostemu przeciwnikowi AI.
- **Nowoczesny interfejs**: Ciemny motyw z neonowymi efektami.
- **Obsługa większej siatki**: Rozgrywka na siatce 4x4 (możliwość rozszerzenia na 5x5 i inne).

## Instalacja i uruchomienie

### Wymagania

- **Node.js** (v12 lub nowsza)
- **npm** (v6 lub nowsza)

### Krok 1: Klonowanie repozytorium

Zacznij od sklonowania tego repozytorium na swój lokalny komputer:

```bash
git clone https://github.com/twoj-nazwa-uzytkownika/tic-tac-toe-redux.git
cd tic-tac-toe-redux


Krok 2: Instalacja zależności

Zainstaluj wszystkie wymagane zależności za pomocą npm:

npm install

Krok 3: Uruchomienie aplikacji

Aby uruchomić aplikację w trybie deweloperskim, użyj poniższego polecenia:

npm start

Aplikacja powinna automatycznie otworzyć się w przeglądarce pod adresem http://localhost:3000.
Krok 4: Budowanie aplikacji do produkcji

Aby zbudować aplikację gotową do wdrożenia w środowisku produkcyjnym:

npm run build


npm run build

Spowoduje to wygenerowanie zoptymalizowanej wersji aplikacji w folderze build.
Jak działa aplikacja
Mechanika gry

    Gracze na zmianę klikają pola na siatce 4x4. Gracz X zaczyna jako pierwszy.
    Po każdym ruchu sprawdzany jest stan gry w celu wykrycia zwycięzcy lub remisu.
    Przeciwnik AI wykonuje ruch losowy, gdy przychodzi jego kolej.
    Można rozpocząć nową grę za pomocą przycisku "Reset".

Struktura projektu

    src/store/gameSlice.js: Zarządzanie stanem gry (przechowuje stan planszy, ruchy graczy, AI, wygrywający stan itp.).
    src/components/Board.js: Główny komponent wyświetlający planszę i zarządzający logiką gry.
    src/components/Square.js: Pojedyncze pole na planszy.
    src/GlobalStyles.js: Definiuje globalne style aplikacji (ciemny motyw, czcionki itp.).
    src/store/store.js: Konfiguracja Reduxa i przechowywanie stanu.

Rozszerzenia
Przeciwnik AI

AI w tej wersji wykonuje ruchy losowe. Można rozwinąć logikę AI, aby było bardziej zaawansowane, np. implementując algorytmy takie jak minimax.
Większe siatki

Gra jest skonfigurowana do działania na siatce 4x4, ale można łatwo dostosować ją do większych siatek, zmieniając rozmiary siatki w gameSlice.js i Board.js.
Animacje

Komponenty są zaprojektowane z użyciem animacji i efektów transformacji, aby poprawić wrażenia użytkownika. Można je rozbudować, aby dodać więcej efektów wizualnych.
```
