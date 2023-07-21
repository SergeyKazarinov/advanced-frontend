import { IStateSchema } from '@app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageHasMore } from './getArticlePageHasMore';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  limit: 4,
  hasMore: false,
};

describe('getArticlePageHasMore selectors', () => {
  test('should return page number 2', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageHasMore(state as IStateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageHasMore(state as IStateSchema)).toEqual(undefined);
  });
});
