import { ARTICLE } from '@entities/Article';

import fetchArticleRecommendation from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { IArticleDetailsRecommendationSchema } from '../types/articleDetailsPageRecommendation';

import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationSlice';

const data: DeepPartial<IArticleDetailsRecommendationSchema> = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
};

describe('articleDetailsPageRecommendationReducer', () => {
  test('fetchArticleRecommendation service pending', () => {
    const state: DeepPartial<IArticleDetailsRecommendationSchema> = data;

    expect(
      articleDetailsPageRecommendationReducer(
        state as IArticleDetailsRecommendationSchema,
        fetchArticleRecommendation.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {},
    });
  });

  test('fetchArticleRecommendation service fulfilled', () => {
    const state: DeepPartial<IArticleDetailsRecommendationSchema> = data;

    expect(
      articleDetailsPageRecommendationReducer(
        state as IArticleDetailsRecommendationSchema,
        fetchArticleRecommendation.fulfilled([ARTICLE], '', undefined),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1'],
      entities: { 1: ARTICLE },
    });
  });

  test('fetchArticleRecommendation service rejected', () => {
    const state: DeepPartial<IArticleDetailsRecommendationSchema> = data;

    expect(
      articleDetailsPageRecommendationReducer(
        state as IArticleDetailsRecommendationSchema,
        fetchArticleRecommendation.rejected(
          new Error(),
          '',
          undefined,
          'Something wrong',
        ),
      ),
    ).toEqual({
      error: 'Something wrong',
      isLoading: false,
      ids: [],
      entities: {},
    });
  });
});
