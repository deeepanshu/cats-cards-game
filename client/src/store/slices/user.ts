import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '@lib/interfaces';

const initialState: UserState = {
  userName: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => { state.userName = action.payload; },
    resetUser: (state) => {state.userName = '';}
  }
})

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;