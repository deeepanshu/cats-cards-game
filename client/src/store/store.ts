import { configureStore } from '@reduxjs/toolkit';
import environmentReducer from './slices/environment';
import reduxLogger from 'redux-logger';

export const store = configureStore({
  reducer: {
    environment: environmentReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;