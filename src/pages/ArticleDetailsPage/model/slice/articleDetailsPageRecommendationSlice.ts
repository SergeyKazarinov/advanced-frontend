import { IArticle } from '@entities/Article';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import fetchArticleRecommendation from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { IArticleDetailsRecommendationSchema } from '../types/articleDetailsPageRecommendation';

const recommendationAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticlePageRecommendationAdapter = recommendationAdapter.getSelectors<IStateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState(),
);

const articleDetailsPageRecommendationSlice = createSlice({
  name: 'articleDetailsPageRecommendationSlice',
  initialState: recommendationAdapter.getInitialState<IArticleDetailsRecommendationSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendation.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendation.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        recommendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

export const articleDetailsPageRecommendationActions = articleDetailsPageRecommendationSlice.actions;

export const articleDetailsPageRecommendationReducer = articleDetailsPageRecommendationSlice.reducer;
