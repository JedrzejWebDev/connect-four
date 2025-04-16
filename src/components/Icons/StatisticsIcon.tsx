import { FcStatistics } from "react-icons/fc";

type StatisticsIconProps = {
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StatisticsIcon = ({setShowStats} : StatisticsIconProps) => {
  return (
    <FcStatistics className="stats-icon" onClick={() => setShowStats(true)} />
  );
};
