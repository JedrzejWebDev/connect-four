import { useGameContext } from "../../context/GameContext";

type CellProps = {
  value: string | null;
  colIndex: number;
};

export const Cell = ({ value, colIndex }: CellProps) => {
  const {handleCellClick, gameOver} = useGameContext();

  return (
    <div
      className="cell"
      style={{ cursor: gameOver ? "default" : "pointer" }}
      onClick={gameOver ? undefined : () => handleCellClick(colIndex)}
    >
      {value && <div className={`disc ${value}`}></div>}
    </div>
  );
};