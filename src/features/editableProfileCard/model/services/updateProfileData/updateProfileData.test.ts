import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import updateProfileData from './updateProfileData';
import { ValidateProfileErrorEnum } from '../../types/editableProfileCardSchema';

const data = {
  id: '1',
  name: 'Name',
  lastName: 'LastName',
  age: 22,
  city: 'Perm',
  country: CountryEnum.Russia,
  currency: CurrencyEnum.RUB,
  username: 'UserName',
};

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected update profile', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrorEnum.SERVER_ERROR]);
  });

  test('rejected update profile', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastName: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrorEnum.INCORRECT_USER_DATA]);
  });
});
