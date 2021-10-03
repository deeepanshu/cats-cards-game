import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LeaderBoardState } from '@lib/interfaces';
import { getLeaderboard } from '@lib/api';

const initialState: LeaderBoardState = []

export const getLeaderboardData = createAsyncThunk('/leaderboard/getLeaderboard', async (_, { dispatch }): Promise<LeaderBoardState> => {
  const response = await getLeaderboard();
  return response.data;
});

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    setLeaderBoard: (state, action) => action.payload
  },
  extraReducers: {
    [getLeaderboardData.fulfilled as any]: (state, action) => action.payload
  }
})

export const { setLeaderBoard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;