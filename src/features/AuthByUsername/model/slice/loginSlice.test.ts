import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  const defaultInitialState = { username: '', password: '', isLoading: false };
  test('setUsername', () => {
    const state: ILoginSchema = defaultInitialState;

    expect(loginReducer(state, loginActions.setUsername('123')))
      .toEqual({ username: '123', password: '', isLoading: false });
  });

  test('setUsernameWithDeepPartial', () => {
    const state: DeepPartial<ILoginSchema> = { username: '123' };

    expect(loginReducer(state as ILoginSchema, loginActions.setUsername('1234567890')))
      .toEqual({ username: '1234567890' });
  });

  test('setPassword', () => {
    const state: DeepPartial<ILoginSchema> = { password: '123' };

    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('1234567890')))
      .toEqual({ password: '1234567890' });
  });
});
