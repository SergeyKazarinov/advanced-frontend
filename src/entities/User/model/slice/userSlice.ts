import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';
import { setFeatureFlags } from '@shared/lib/features';

import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {
  isLoadPage: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    initAuthData: (state) => {
      state.isLoadPage = false;
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        const userParsed = JSON.parse(user) as IUser;
        state.authData = userParsed;
        setFeatureFlags(userParsed.features);
      }
      state.isLoadPage = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
