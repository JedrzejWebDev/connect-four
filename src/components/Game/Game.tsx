import { useConnectFour } from "../../hooks/useConnectFour";
import { Statistics } from "./Statistics";
import { Board } from "./Board";
import { RefreshIcon } from "../Icons/RefreshIcon";
import { GameContext } from "../../context/GameContext";
import { useState } from "react";

export const Game = () => {
  const { board, gameOver, rWins, yWins, draws, handleCellClick, resetGame } =
    useConnectFour();
  const [showStats, setShowStats] = useState(false);
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
