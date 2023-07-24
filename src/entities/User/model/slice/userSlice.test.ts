import { USER_DATA } from '../../utils/userData';
import { IUserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('userReducer', () => {
  test('initAuthData reducer', () => {
    const state: DeepPartial<IUserSchema> = USER_DATA;

    expect(userReducer(
      state as IUserSchema,
      userActions.initAuthData(),
    )).toEqual({ ...USER_DATA, isLoadPage: true });
  });

  test('setAuthData reducer', () => {
    const state: DeepPartial<IUserSchema> = USER_DATA;

    expect(userReducer(
      state as IUserSchema,
      userActions.setAuthData({ id: '2', username: '123', avatar: 'avatar' }),
    )).toEqual({ authData: { id: '2', username: '123', avatar: 'avatar' }, isLoadPage: false });
  });

  test('logout reducer', () => {
    expect(userReducer(undefined, userActions.logout())).toEqual({ ...USER_DATA, authData: undefined });
  });
});
