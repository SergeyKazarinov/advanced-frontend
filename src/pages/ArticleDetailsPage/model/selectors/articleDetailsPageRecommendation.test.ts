import { IStateSchema } from '@app/providers/StoreProvider';
import { IArticleDetailsRecommendationSchema } from '../types/articleDetailsPageRecommendation';
import {
  getArticleDetailsPageRecommendationError,
  getArticleDetailsPageRecommendationIsLoading,
} from './articleDetailsPageRecommendation';

const data: DeepPartial<IArticleDetailsRecommendationSchema> = {
  isLoading: false,
  error: 'error',
};

describe('articleDetailsPageRecommendation comment selectors', () => {
  test('should return recommendation isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: { recommendations: data },
    };
    expect(getArticleDetailsPageRecommendationIsLoading(state as IStateSchema)).toEqual(false);
  });
  test('should return comments error', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: { recommendations: data },
    };
    expect(getArticleDetailsPageRecommendationError(state as IStateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsPageRecommendationIsLoading(state as IStateSchema)).toEqual(undefined);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsPageRecommendationIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
