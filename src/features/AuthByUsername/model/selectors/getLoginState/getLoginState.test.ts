import { IStateSchema } from '@app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return loginForm data', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        isLoading: false,
        error: '',
      },
    };
    expect(getLoginState(state as IStateSchema)).toEqual({
      username: 'username',
      password: 'password',
      isLoading: false,
      error: '',
    });
  });

  test('loginForm data without username property', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password: 'password',
        isLoading: false,
        error: '',
      },
    };
    expect(getLoginState(state as IStateSchema)).not.toEqual({
      username: 'username',
      password: 'password',
      isLoading: false,
      error: '',
    });
  });

  test('loginForm data without error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        isLoading: false,
      },
    };
    expect(getLoginState(state as IStateSchema)).toEqual({
      username: 'username',
      password: 'password',
      isLoading: false,
    });
  });
});
