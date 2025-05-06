import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  showInstructions: boolean;
  isFullscreen: boolean;
  showStats: boolean;
}

const initialState: GameState = {
  showInstructions: false,
  isFullscreen: false,
  showStats: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setShowInstructions: (state, action) => {
      state.showInstructions = action.payload;
    },
    setIsFullscreen: (state, action) => {
      state.isFullscreen = action.payload;
    },
    setShowStats: (state, action) => {
      state.showStats = action.payload;
    }
  }
});

export const {
  setShowInstructions,
  setIsFullscreen,
  setShowStats,
} = gameSlice.actions;

export default gameSlice.reducer;
