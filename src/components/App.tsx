import { WindowSizeIcons } from "./Icons/WindowSizeIcons";
import { Game } from "./Game/Game";
import { Info } from "./Info/Info";
// import "../App.css";

import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const App = () => {
  const showInstructions = useSelector(
    (state: RootState) => state.game.showInstructions
  );

  return (
    <>
      <div style={{ display: showInstructions ? "none" : "block" }}>
        <Info />
        <WindowSizeIcons />
        <Game />
      </div>
    </>
  );
};

export default App;
