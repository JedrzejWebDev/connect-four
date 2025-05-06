import { BsInfoSquareFill } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { setShowInstructions } from "../../store/gameSlice";

export const InfoIcon = () => {
  const dispatch = useDispatch();
  return (
    <BsInfoSquareFill
      className="info-icon"
      onClick={() => dispatch(setShowInstructions(true))}
    />
  );
};
