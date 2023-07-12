import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageSearch } from './getArticlePageSearch';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  order: 'desc',
  search: 'title',
};

describe('getArticlePageSearch selectors', () => {
  test('should return page search string', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageSearch(state as IStateSchema)).toEqual('title');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageSearch(state as IStateSchema)).toEqual('');
  });
});
