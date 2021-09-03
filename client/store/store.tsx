import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import trackSlice from './slice/trackSlice';
import listSlice from './slice/listSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      [trackSlice.name]: trackSlice.reducer,
      [listSlice.name]: listSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);