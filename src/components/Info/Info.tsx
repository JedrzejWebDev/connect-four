import { InfoModal } from "./InfoModal";
import { InfoIcon } from "../Icons/InfoIcon";

import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

export const Info = () => {
  const showInstructions = useSelector(
    (state: RootState) => state.game.showInstructions
  );

  return (
    <>
      {showInstructions ? (
        <InfoModal />
      ) : (
        <InfoIcon />
      )}
    </>
  );
};
