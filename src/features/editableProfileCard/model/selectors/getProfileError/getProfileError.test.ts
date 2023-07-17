import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
