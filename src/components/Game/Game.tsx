import { useConnectFour } from "../../hooks/useConnectFour";
import { Board } from "./Board";
import { RefreshIcon } from "../Icons/RefreshIcon";
import { GameContext } from "../../context/GameContext";
import { Statistics } from "./Statistics";

import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { setShowStats } from "../../store/gameSlice";

export const Game = () => {
  const { board, gameOver, rWins, yWins, draws, handleCellClick, resetGame } =
    useConnectFour();

    const showStats = useSelector(
      (state: RootState) => state.game.showStats
    );
    
  return (
    <>
      <div
        className="game-container"
        style={{ display: showStats ? "none" : "flex" }}
      >
        <GameContext.Provider value={{ handleCellClick, gameOver }}>
          <Board board={board} />
        </GameContext.Provider>
        {gameOver ? <RefreshIcon onClick={resetGame} /> : null}
      </div>

      <Statistics rWins={rWins} yWins={yWins} draws={draws} showStats={showStats} setShowStats={setShowStats}/>
    </>
  );
};
