import { IStateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading', () => {
  test('should return article details isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(false);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
