import { IUser } from '@entities/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';

import loginByUsername from '../services/loginByUsername/loginByUsername';
import { ILoginSchema } from '../types/loginSchema';

const initialState: ILoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        loginByUsername.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(action.payload),
          );
        },
      )
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const loginActions = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
