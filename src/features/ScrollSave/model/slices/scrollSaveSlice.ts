import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: IScrollSaveSchema = {
  scroll: {},
};

const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const scrollSaveActions = scrollSaveSlice.actions;

export const scrollSaveReducer = scrollSaveSlice.reducer;
