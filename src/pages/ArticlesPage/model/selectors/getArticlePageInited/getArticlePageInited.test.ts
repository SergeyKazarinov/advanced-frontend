import { IStateSchema } from '@app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageInited } from './getArticlePageInited';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  inited: false,
};

describe('getArticlePageInited selectors', () => {
  test('should return inited false', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageInited(state as IStateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageInited(state as IStateSchema)).toEqual(undefined);
  });
});
