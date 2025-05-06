import { Cell } from "./Cell";
import '../../App.css';

type BoardProps = {
  board: (string | null)[][];
};

export const Board = ({ board }: BoardProps) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              colIndex={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
