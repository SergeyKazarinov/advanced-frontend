import { ARTICLE } from '@entities/Article';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk';
import axios from 'axios';

import fetchArticleRecommendations from './fetchArticleRecommendations';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchArticleRecommendations', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ data: [ARTICLE, ARTICLE] }),
    );
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual([ARTICLE, ARTICLE]);
  });

  test('rejected fetchArticleRecommendations', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
