import { WindowSizeIcons } from "./Icons/WindowSizeIcons";
import { Game } from "./Game/Game";
import { Info } from "./Info/Info";
import "../App.css";
import { useState } from "react";

const App = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div style={{ display: showInstructions ? "none" : "block" }}>
      <Info
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}
      />
      <WindowSizeIcons />
      <Game />
    </div>
  );
};

export default App;
