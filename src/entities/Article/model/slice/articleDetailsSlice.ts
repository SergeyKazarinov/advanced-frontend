import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import fetchArticleById from '../services/fetchArticleById/fetchArticleById';
import { IArticle } from '../types/article';

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: '',
  data: undefined,
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articleDetailsActions = articleDetailsSlice.actions;

export const articleDetailsReducer = articleDetailsSlice.reducer;
