import { ARTICLE } from '@entities/Article';
import { COMMENT } from '@entities/Comment/utils/comment';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import addCommentForArticle from './addCommentForArticle';

describe('addCommentForArticle', () => {
  test('add Comment without userData', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      articleDetails: {
        data: ARTICLE,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve(COMMENT));
    const result = await thunk.callThunk('Comment text');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('No data');
  });

  test('add Comment without article', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'username',
          avatar: 'avatarLink',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve(COMMENT));
    const result = await thunk.callThunk('Comment text');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('No data');
  });

  test('add Comment with empty string', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'username',
          avatar: 'avatarLink',
        },
      },
      articleDetails: {
        data: ARTICLE,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve(COMMENT));
    const result = await thunk.callThunk('');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('No data');
  });

  test('success', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'username',
          avatar: 'avatarLink',
        },
      },
      articleDetails: {
        data: ARTICLE,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data: COMMENT }));
    const result = await thunk.callThunk('Comment text');

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(COMMENT);
  });

  test('fetch request, response without data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'username',
          avatar: 'avatarLink',
        },
      },
      articleDetails: {
        data: ARTICLE,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve(COMMENT));
    const result = await thunk.callThunk('Comment text');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });

  test('rejected request', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'username',
          avatar: 'avatarLink',
        },
      },
      articleDetails: {
        data: ARTICLE,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('Comment text');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error');
  });
});
