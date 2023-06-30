import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { IProfileSchema, ValidateProfileErrorEnum } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import updateProfileData from '../services/updateProfileData/updateProfileData';

const data = {
  name: 'Name',
  lastName: 'LastName',
  age: 22,
  city: 'Perm',
  country: CountryEnum.Russia,
  currency: CurrencyEnum.RUB,
  username: 'UserName',
};

describe('profileReducer', () => {
  test('setReadonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };

    expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<IProfileSchema> = {
      form: data,
      data,
    };

    expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      form: data,
      validateError: undefined,
      data,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<IProfileSchema> = {
      form: { name: '123' },
    };

    expect(profileReducer(state as IProfileSchema, profileActions.updateProfile({ name: '12345' }))).toEqual({
      form: { name: '12345' },
    });
  });

  test('update profile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileErrorEnum.SERVER_ERROR],
    };

    expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('update profile service fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
      validateError: undefined,
      readonly: false,
    };

    expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateError: undefined,
      data,
      form: data,
      readonly: true,
    });
  });
});
