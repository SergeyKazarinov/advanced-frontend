import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import fetchNextArticlesPage from './fetchNextArticlesPage';
import fetchArticleList from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toBeCalledWith({});
  });

  test('fetchArticleList not called with hasMore', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toBeCalledWith();
  });

  test('fetchArticleList not called with isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toBeCalledWith();
  });
});
