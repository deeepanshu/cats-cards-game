import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '@lib/interfaces';


const initialState: UserState = {
    userName: localStorage.getItem('username') || '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => { state.userName = action.payload; }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;