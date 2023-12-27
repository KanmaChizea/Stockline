import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';

export type User = {
  name: string;
};

const initialState: User = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User>>) => ({
      ...state,
      ...action.payload,
    }),
    resetUserSlice: () => initialState,
  },
});

export const {setUser, resetUserSlice} = userSlice.actions;

export const getUserName = (state: RootState) => state.User.name;

export default userSlice.reducer;
