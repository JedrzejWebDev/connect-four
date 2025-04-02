import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(
    Array(6)
      .fill(null)
      .map(() => Array(7).fill(null))
  );
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState("R");
  const [gameOver, setGameOver] = useState(false);

  const isTouchDevice = "ontouchstart" in window;

  const getAvailableRow = (colIndex: number) => {
    for (let row = board.length - 1; row >= 0; row--) {
      if (!board[row][colIndex]) return row;
    }
    return null;
  };

  const checkWinner = (board: string[][]) => {
    const directions = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal down-right
      [1, -1], // diagonal down-left
    ];

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (!board[row][col]) continue;
        const player = board[row][col];

        for (const [dx, dy] of directions) {
          let count = 1;
          let x = row + dx;
          let y = col + dy;

          while (x >= 0 && x < 6 && y >= 0 && y < 7 && board[x][y] === player) {
            count++;
            if (count === 4) return player;
            x += dx;
            y += dy;
          }
        }
      }
    }
    return null;
  };

  const isBoardFull = (board: string[][]) => {
    return board.every((row) => row.every((cell) => cell !== null));
  };

  const handleCellClick = (colIndex: number) => {
    if (gameOver) return;

    const availableRow = getAvailableRow(colIndex);
    if (availableRow !== null) {
      const newBoard = board.map((row) => [...row]);
      newBoard[availableRow][colIndex] = currentPlayer;
      setBoard(newBoard);

      const detectedWinner = checkWinner(newBoard);
      if (detectedWinner) {
        setGameOver(true);
        console.log(
          detectedWinner === "Draw" ? "It's a draw!" : `${detectedWinner} wins!`
        );
      } else if (isBoardFull(newBoard)) {
        setGameOver(true);
        console.log("It's a draw!");
      } else {
        setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
      }
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => {
            const availableRow = getAvailableRow(colIndex);
            const isHighlight =
              !isTouchDevice &&
              hoveredCol === colIndex &&
              availableRow === rowIndex;
            return (
              <div
                key={colIndex}
                className="cell"
                onMouseEnter={
                  !isTouchDevice ? () => setHoveredCol(colIndex) : undefined
                }
                onMouseLeave={
                  !isTouchDevice ? () => setHoveredCol(null) : undefined
                }
                onClick={() => handleCellClick(colIndex)}
              >
                {isHighlight && <div className={`disc ${currentPlayer}`} />}
                {cell && <div className={`disc ${cell}`} />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
