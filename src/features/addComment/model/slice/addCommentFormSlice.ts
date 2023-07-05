import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: IAddCommentFormSchema = {
  text: '',
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state) => {
  //       state.error = undefined;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action: PayloadAction<IAddCommentFormSchema>) => {
  //       localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action.payload;
  //     });
  // },
});

export const addCommentFormActions = addCommentFormSlice.actions;

export const addCommentFormReducer = addCommentFormSlice.reducer;
