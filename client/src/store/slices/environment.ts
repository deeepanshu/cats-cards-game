import { createSlice } from '@reduxjs/toolkit';

export const environmentSlice = createSlice({
  name: 'environment',
  initialState: {
      environment: 'dev',
      loading: false,
  },
  reducers: {
    set: (state, action) => action.payload,
    toggleLoading: (state, action) => { state.loading = action.payload; }
  }
})

export const { set, toggleLoading } = environmentSlice.actions;
export default environmentSlice.reducer;