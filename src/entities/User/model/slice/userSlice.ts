import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/user';

const initialState: IUserSchema = {
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
