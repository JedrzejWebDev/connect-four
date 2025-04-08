import { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import { BsInfoSquareFill } from "react-icons/bs";
import { FaExpand, FaCompress } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
import { StatsChart } from "./StatsChart";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [board, setBoard] = useState(
    Array(6)
      .fill(null)
      .map(() => Array(7).fill(null))
  );
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState("R");
  const [gameOver, setGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [rWins, setRWins] = useState(0);
  const [yWins, setYWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const isTouchDevice = "ontouchstart" in window;

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Wejdź w tryb pełnoekranowy
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // Wyjdź z trybu pełnoekranowego
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen); // Przełącz stan fullscreen
  };

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

  const handleClickRefreshBoard = () => {
    setBoard(
      Array(6)
        .fill(null)
        .map(() => Array(7).fill(null))
    );
    setCurrentPlayer("R");
    setGameOver(false);
    setHoveredCol(null);
  };

  return (
    <>
      {!showStats ? (
        <div className="game-container">
          <BsInfoSquareFill
            className="info-icon"
            onClick={() => setShowInstructions(true)}
          />
          <Modal
            isOpen={showInstructions}
            onRequestClose={() => setShowInstructions(false)}
            contentLabel="Instrukcja do gry"
            className="ModalContent"
            overlayClassName="ModalOverlay"
          >
            <p>
              <strong>Instrukcje gry Connect Four:</strong>
            </p>
            <ul>
              <li>
                <strong>Celem gry:</strong> Ułóż cztery swoje pionki w jednej
                linii - poziomo, pionowo lub diagonalnie.
              </li>
              <li>
                <strong>Rozpoczęcie gry:</strong> Gra toczy się na planszy o
                wymiarach 7x6. Gracze na zmianę umieszczają swoje pionki w
                kolumnach.
              </li>
              <li>
                <strong>Przyjmowanie ruchów:</strong> W swojej turze gracz
                wybiera jedną z siedmiu kolumn i wrzuca pionek na planszę.
                Pionek opada na najniższą dostępną wolną pozycję w danej
                kolumnie.
              </li>
              <li>
                <strong>Wygrać grę:</strong> Gracz, który pierwszy ułoży cztery
                pionki w jednej linii (poziomo, pionowo lub na przekątnej),
                wygrywa grę.
              </li>
              <li>
                <strong>Remis:</strong> Jeśli plansza zostanie zapełniona, a
                żaden z graczy nie ułoży czterech pionków w linii, gra kończy
                się remisem.
              </li>
              <li>
                <strong>Strategia:</strong> Pamiętaj, aby blokować przeciwnika i
                szukać okazji do stworzenia własnych linii czterech pionków.
              </li>
            </ul>
            <p>Powodzenia i miłej zabawy!</p>
            <button onClick={() => setShowInstructions(false)}>Zamknij</button>
          </Modal>

          <h1 className="game-title">Connect Four</h1>

          <div
            className="icon-to-zoom-in-or-out"
            onClick={toggleFullscreen}
            aria-label="Przełącz tryb pełnoekranowy"
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </div>

          <div className="board">
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => {
                  const availableRow = getAvailableRow(colIndex);
                  const isHighlight =
                    !gameOver &&
                    !isTouchDevice &&
                    hoveredCol === colIndex &&
                    availableRow === rowIndex;
                  return (
                    <div
                      key={colIndex}
                      className="cell"
                      style={{ cursor: gameOver ? "default" : "pointer" }}
                      onMouseEnter={
                        !isTouchDevice && !gameOver
                          ? () => setHoveredCol(colIndex)
                          : undefined
                      }
                      onMouseLeave={
                        !isTouchDevice && !gameOver
                          ? () => setHoveredCol(null)
                          : undefined
                      }
                      onClick={() => handleCellClick(colIndex)}
                    >
                      {isHighlight && (
                        <div className={`disc ${currentPlayer}`} />
                      )}
                      {cell && <div className={`disc ${cell}`} />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <FcStatistics
            className="statistics-icon"
            onClick={() => setShowStats(true)}
          />

          <div className="game-status">
            <span className="result-message">
              {gameOver
                ? isBoardFull(board)
                  ? "Remis!"
                  : `Gracz ${currentPlayer} wygrywa!`
                : ""}
            </span>
            <div className="refresh-board">
              {gameOver ? (
                <IoIosRefresh
                  className="refresh-icon"
                  onClick={handleClickRefreshBoard}
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <StatsChart rWins={rWins} yWins={yWins} draws={draws} setShowStats={setShowStats} />
      )}
    </>
  );
}

export default App;
