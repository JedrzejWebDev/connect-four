import { FaGamepad } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { setShowStats } from "../../store/gameSlice";

export const GameIcon = () => {
  const dispatch = useDispatch();
  return (
    <FaGamepad className="game-icon" onClick={() => dispatch(setShowStats(false))} />
  );
};
