import { IStateSchema } from '@app/providers/StoreProvider';

import { USER_DATA } from '../../../utils/userData';

import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData selectors', () => {
  test('should return authData', () => {
    const state: DeepPartial<IStateSchema> = {
      user: USER_DATA,
    };
    expect(getUserAuthData(state as IStateSchema)).toEqual(USER_DATA.authData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getUserAuthData(state as IStateSchema)).toEqual(undefined);
  });
});
