import StatsPanel from "./StatsPanel";
import { StatisticsIcon } from "../Icons/StatisticsIcon";

type StatisticProps = {
  rWins: number;
  yWins: number;
  draws: number;
  showStats: boolean;
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Statistics = ({
  rWins,
  yWins,
  draws,
  showStats,
}: StatisticProps) => {
  return (
    <>
      {!showStats ? (
        <StatisticsIcon />
      ) : (
        <StatsPanel rWins={rWins} yWins={yWins} draws={draws} />
      )}
    </>
  );
};
