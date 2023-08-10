import { IStateSchema } from '@app/providers/StoreProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return profile isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(false);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
