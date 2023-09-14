import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { IStateSchema } from '@app/providers/StoreProvider';
import { IComment } from '@entities/Comment';

import fetchCommentsByArticleId from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { IArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
  (state) =>
    state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentsAdapter.getInitialState<IArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articleDetailsCommentsActions = articleDetailsCommentSlice.actions;

export const articleDetailsCommentsReducer = articleDetailsCommentSlice.reducer;
