import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppMode } from '@/types';

type AppSliceState = {
  currentMode: AppMode;
};

const initialState: AppSliceState = {
  currentMode: 'upcomer',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<AppMode>) => {
      state.currentMode = action.payload;
    },
  },
});

export const { setMode } = appSlice.actions;
export default appSlice.reducer;
