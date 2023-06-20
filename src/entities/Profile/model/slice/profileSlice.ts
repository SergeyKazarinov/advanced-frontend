import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: '',
  data: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

export const profileActions = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
