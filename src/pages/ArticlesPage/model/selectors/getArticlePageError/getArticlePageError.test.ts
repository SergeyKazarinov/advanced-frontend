import { IStateSchema } from '@app/providers/StoreProvider';

import { IArticlePageSchema } from '../../types/articlePageSchema';

import { getArticlePageError } from './getArticlePageError';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: false,
  error: 'error',
};

describe('getArticlePageError error selectors', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageError(state as IStateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageError(state as IStateSchema)).toEqual(undefined);
  });
});
