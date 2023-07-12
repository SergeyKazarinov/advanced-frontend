import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageOrder } from './getArticlePageOrder';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  order: 'desc',
};

describe('getArticlePageOrder selectors', () => {
  test('should return page order desc', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageOrder(state as IStateSchema)).toEqual('desc');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageOrder(state as IStateSchema)).toEqual('asc');
  });
});
