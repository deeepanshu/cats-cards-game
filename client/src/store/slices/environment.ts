import { createSlice } from '@reduxjs/toolkit';

export const environmentSlice = createSlice({
  name: 'environment',
  initialState: {
      environment: 'dev',
  },
  reducers: {
    set: (state, action) => action.payload
  }
})

export const { set } = environmentSlice.actions;
export default environmentSlice.reducer;