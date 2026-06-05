import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import appReducer from './appSlice';

export const rootReducer = combineReducers({
  app: appReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
