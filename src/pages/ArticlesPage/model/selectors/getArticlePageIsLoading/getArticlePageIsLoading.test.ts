import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageIsLoading } from './getArticlePageIsLoading';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
};

describe('getArticlePageError error selectors', () => {
  test('should return boolean true', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageIsLoading(state as IStateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageIsLoading(state as IStateSchema)).toEqual(false);
  });
});
