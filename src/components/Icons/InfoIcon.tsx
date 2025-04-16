import { BsInfoSquareFill } from "react-icons/bs";

type InfoIconProps = {
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InfoIcon = ({ setShowInstructions }: InfoIconProps) => {
  return (
    <BsInfoSquareFill
      className="info-icon"
      onClick={() => setShowInstructions(true)}
    />
  );
};
