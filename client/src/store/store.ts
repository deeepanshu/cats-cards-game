import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import { environmentSlice } from './slices/environment';
import { gameStateSlice } from './slices/gameState';
import { userSlice } from './slices/user';
import { leaderboardSlice } from './slices/leaderboard';
import { gameStateListener } from '@lib/utils';

export const store = configureStore({
  reducer: {
    environment: environmentSlice.reducer,
    gameState: gameStateSlice.reducer,
    user: userSlice.reducer,
    leaderboard: leaderboardSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger, gameStateListener)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;