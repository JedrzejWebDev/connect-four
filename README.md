🧩 Struktura projektu:
src/components/Game - zawiera komponenty odpowiedzialne za wyświetlanie planszy oraz statystyk a także zarządzanie ich stanem
src/components/Icons - posiada ikony po których kliknięciu następuje stosowne zachowanie
src/components/Info - zawarte są Modal z instrukcjami gry oraz wykorzystywany komponent z ikonką służącą do jego wyświetlania
src/components/App.tsx - nadrzędny komponent posiłkujący się komponentami z folderów Game, Icons oraz Info
src/context/GameContext.tsx - kontekst zawierający obsługę kliknięcia komórki oraz wykrywający koniec gry
src/hooks/useConntectFour.ts - hook z całą logiką gry od obsługi kliknięć w planszę, przez zmianę gracza, po wykrywanie zwycięzcy lub remisu
src/store/gameSlice.ts - odpowiada za globalny stan interfejsu gry — m.in. wyświetlanie instrukcji, statystyk i tryb pełnoekranowy
src/store/index.ts - konfiguruje i eksportuje globalny store
src/App.css - style dla całej gry z użyciem flexboxa oraz media queries dla responsywności
src/main.tsx - punkt startowy aplikacji. Integruje Redux przez Provider i renderuje komponent App

🛠️ Technologie:
redux, context, react-icons, react-modal, recharts

⚙️ Instalacja i uruchomienie:
git clone https://github.com/JedrzejWebDev/connect-four.git
cd connect-four
npm install
npm run dev
