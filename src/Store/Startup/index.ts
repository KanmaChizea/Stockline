import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';

export type StartupState = {
  isFirstSignIn: boolean;
};

const initialState: StartupState = {
  isFirstSignIn: true,
};

export const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    setIsFirstSignIn: (state, action: PayloadAction<boolean>) => {
      state.isFirstSignIn = action.payload;
    },
  },
});

export const {setIsFirstSignIn} = startupSlice.actions;

export const getIsFirstSignIn = (state: RootState) =>
  state.Startup.isFirstSignIn;

export default startupSlice.reducer;
