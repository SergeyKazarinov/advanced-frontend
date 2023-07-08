import { ARTICLE } from '@entities/Article';
import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import fetchArticleList from './fetchArticleList';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchArticleList', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleList);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: [ARTICLE] }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual([ARTICLE]);
  });

  test('rejected profile', async () => {
    const thunk = new TestAsyncThunk(fetchArticleList);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(undefined);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
