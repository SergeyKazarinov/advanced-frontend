import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export const addCommentFormActions = addCommentFormSlice.actions;

export const addCommentFormReducer = addCommentFormSlice.reducer;
