import { configureStore } from '@reduxjs/toolkit';
import { environmentSlice } from './slices/environment';
import { gameStateSlice } from './slices/gameState';
import { userSlice } from './slices/user';
import reduxLogger from 'redux-logger';

export const store = configureStore({
  reducer: {
    environment: environmentSlice.reducer,
    gameState: gameStateSlice.reducer,
    user: userSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;