import { useState } from "react";
import { FaExpand, FaCompress } from "react-icons/fa";

export const WindowSizeIcons = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {isFullscreen ? (
        <FaCompress
          onClick={toggleFullscreen}
          className="screen-size-icon"
        />
      ) : (
        <FaExpand
          onClick={toggleFullscreen}
          className="screen-size-icon"
        />
      )}
    </>
  );
};
