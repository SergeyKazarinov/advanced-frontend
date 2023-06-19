import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = null;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
