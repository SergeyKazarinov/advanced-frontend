import { IStateSchema } from '@app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: 'username' },
    };
    expect(getLoginUsername(state as IStateSchema)).toEqual('username');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginUsername(state as IStateSchema)).toEqual('');
  });
});
