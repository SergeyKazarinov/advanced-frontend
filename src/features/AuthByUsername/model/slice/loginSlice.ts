import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/loginSchema';
import loginByUsername from '../services/loginByUsername/loginByUsername';

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
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const loginActions = loginSlice.actions;

export const loginReducer = loginSlice.reducer;