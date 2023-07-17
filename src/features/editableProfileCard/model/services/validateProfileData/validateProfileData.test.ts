import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrorEnum } from '../../types/editableProfileCardSchema';

const data = {
  name: 'Name',
  lastName: 'LastName',
  age: 22,
  city: 'Perm',
  country: CountryEnum.Russia,
  currency: CurrencyEnum.RUB,
  username: 'UserName',
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firsName', async () => {
    const result = validateProfileData({ ...data, name: '' });

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_USER_DATA]);
  });

  test('without lastName', async () => {
    const result = validateProfileData({ ...data, lastName: '' });

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_USER_DATA]);
  });

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrorEnum.INCORRECT_USER_DATA,
      ValidateProfileErrorEnum.INCORRECT_AGE,
      ValidateProfileErrorEnum.INCORRECT_COUNTRY,
      ValidateProfileErrorEnum.INCORRECT_CITY,
    ]);
  });
});
