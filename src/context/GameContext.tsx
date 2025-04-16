import { createContext, useContext } from 'react';

type GameContextType = {
  handleCellClick: (colIndex: number) => void;
  gameOver: boolean;
};

export const GameContext = createContext<GameContextType | null>(null);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
