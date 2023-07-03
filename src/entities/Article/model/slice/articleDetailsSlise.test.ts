import { ARTICLE } from '../../utils/article';
import fetchArticleById from '../services/fetchArticleById/fetchArticleById';
import { IArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsReducer', () => {
  test('get article pending', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };

    expect(articleDetailsReducer(state as IArticleDetailsSchema, fetchArticleById.pending)).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('get article fulfilled', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {
      isLoading: true,
      error: undefined,
      data: undefined,
    };

    expect(articleDetailsReducer(
      state as IArticleDetailsSchema,
      fetchArticleById.fulfilled(ARTICLE, '', ''),
    )).toEqual({
      isLoading: false,
      error: undefined,
      data: ARTICLE,
    });
  });
});
