import { IoIosRefresh } from "react-icons/io";

type RefreshIconProps = {
  onClick: () => void;
};

export const RefreshIcon = ({ onClick }: RefreshIconProps) => {
  return <IoIosRefresh className="refresh-icon" onClick={onClick} />;
};
