import { useState } from "react";

export const useConnectFour = () => {
  const [board, setBoard] = useState(
    Array(6)
      .fill(null)
      .map(() => Array(7).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<"R" | "Y">("R");
  const [gameOver, setGameOver] = useState(false);
  const [rWins, setRWins] = useState(0);
  const [yWins, setYWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const getAvailableRow = (colIndex: number) => {
    for (let row = board.length - 1; row >= 0; row--) {
      if (!board[row][colIndex]) return row;
    }
    return null;
  };

  const checkWinner = (board: string[][]) => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
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
        if (detectedWinner === "R") {
          setRWins((prev) => prev + 1);
        } else if (detectedWinner === "Y") {
          setYWins((prev) => prev + 1);
        }
      } else if (isBoardFull(newBoard)) {
        setGameOver(true);
        setDraws((prev) => prev + 1);
      } else {
        setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
      }
    }
  };

  const resetGame = () => {
    setBoard(
      Array(6)
        .fill(null)
        .map(() => Array(7).fill(null))
    );
    setCurrentPlayer("R");
    setGameOver(false);
  };

  return {
    board,
    currentPlayer,
    gameOver,
    rWins,
    yWins,
    draws,
    handleCellClick,
    resetGame,
  };
};
