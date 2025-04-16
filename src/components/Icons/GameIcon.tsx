import { FaGamepad } from "react-icons/fa";

type GameIconProps = {
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GameIcon = ({ setShowStats }: GameIconProps) => {
  return (
    <FaGamepad className="game-icon" onClick={() => setShowStats(false)} />
  );
};
