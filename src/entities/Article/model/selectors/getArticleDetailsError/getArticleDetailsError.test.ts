import { IStateSchema } from '@app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError', () => {
  test('should return article details error', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as IStateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined);
  });
});
