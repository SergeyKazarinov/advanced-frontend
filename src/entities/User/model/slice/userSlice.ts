import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';
import { setFeatureFlags } from '@shared/lib/features';

import initAuthData from '../services/initAuthData';
import saveJsonSettings from '../services/saveJsonSettings';
import { IJsonSettings } from '../types/jsonSettings';
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
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<IJsonSettings>) => {
      if (state.authData) {
        state.authData.jsonSettings = action.payload;
      }
    });
    builder.addCase(initAuthData.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      state.isLoadPage = true;
    });
    builder.addCase(initAuthData.rejected, (state) => {
      state.isLoadPage = true;
    });
  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
