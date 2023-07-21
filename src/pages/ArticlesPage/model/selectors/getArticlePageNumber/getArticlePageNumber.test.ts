import { IStateSchema } from '@app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageNumber } from './getArticlePageNumber';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
};

describe('getArticlePageNumber selectors', () => {
  test('should return page number 2', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageNumber(state as IStateSchema)).toEqual(2);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageNumber(state as IStateSchema)).toEqual(1);
  });
});
