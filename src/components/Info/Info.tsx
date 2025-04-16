import { InfoModal } from "./InfoModal";
import { InfoIcon } from "../Icons/InfoIcon";

type InfoProps = {
  showInstructions: boolean;
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Info = ({showInstructions, setShowInstructions} : InfoProps) => {
  return (
    <>
      {showInstructions ? (
        <InfoModal
          showInstructions={showInstructions}
          setShowInstructions={setShowInstructions}
        />
      ) : (
        <InfoIcon setShowInstructions={setShowInstructions}/>
      )}
    </>
  );
};
