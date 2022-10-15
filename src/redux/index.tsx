import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { reducers as appData } from '@/redux/appData';
import { reducers as ui } from '@/redux/ui';

const reducer = combineReducers({
  appData,
  ui,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type ReduxDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof reducer>;

export { store };
