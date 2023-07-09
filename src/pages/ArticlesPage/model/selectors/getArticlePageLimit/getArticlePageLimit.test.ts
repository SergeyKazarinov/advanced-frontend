import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageLimit } from './getArticlePageLimit';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  limit: 4,
};

describe('getArticlePageLimit selectors', () => {
  test('should return page number 2', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageLimit(state as IStateSchema)).toEqual(4);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageLimit(state as IStateSchema)).toEqual(9);
  });
});
