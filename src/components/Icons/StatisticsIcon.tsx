import { FcStatistics } from "react-icons/fc";

import { useDispatch } from "react-redux";
import { setShowStats } from "../../store/gameSlice";

export const StatisticsIcon = () => {
  const dispatch = useDispatch();
  return (
    <FcStatistics className="stats-icon" onClick={() => dispatch(setShowStats(true))} />
  );
};
