import { FaExpand, FaCompress } from "react-icons/fa";

import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { useDispatch } from "react-redux";
import {setIsFullscreen} from '../../store/gameSlice';

export const WindowSizeIcons = () => {
  const isFullscreen = useSelector((state : RootState) => state.game.isFullscreen);
  const dispatch = useDispatch();

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

    dispatch(setIsFullscreen(!isFullscreen));
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
