import { ArticleViewEnum } from '@entities/Article';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk';
import initArticlesPage from './initArticlesPage';

describe('initArticlesPage', () => {
  test('init state false', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        inited: false,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ view: ArticleViewEnum.BIG, limit: 4, inited: true }));
    const result = await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('init state true', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        inited: true,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ view: ArticleViewEnum.BIG, limit: 4, inited: true }));
    const result = await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
});
