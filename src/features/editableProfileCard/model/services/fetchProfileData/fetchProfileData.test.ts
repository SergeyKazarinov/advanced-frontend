import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk';
import axios from 'axios';
import fetchProfileData from './fetchProfileData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const data = {
  name: 'Name',
  lastName: 'LastName',
  age: 22,
  city: 'Perm',
  country: CountryEnum.Russia,
  currency: CurrencyEnum.RUB,
  username: 'UserName',
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected profile', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
