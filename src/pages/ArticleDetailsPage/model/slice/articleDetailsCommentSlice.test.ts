import { IComment } from '@entities/Comment';
import fetchCommentsByArticleId from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { IArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

const comment: IComment = {
  id: '1',
  user: {
    id: '1',
    username: 'username',
  },
  text: 'comment text',
};

const anotherComment: IComment = {
  id: '2',
  user: {
    id: '2',
    username: 'username',
  },
  text: 'comment text 2',
};

describe('articleDetailsCommentReducer', () => {
  test('fetchCommentsByArticleId service pending', () => {
    const state: DeepPartial<IArticleDetailsCommentSchema> = {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    };

    expect(articleDetailsCommentsReducer(
      state as IArticleDetailsCommentSchema,
      fetchCommentsByArticleId.pending,
    )).toEqual({
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {},
    });
  });

  test('fetchCommentsByArticleId service fulfilled', () => {
    const state: DeepPartial<IArticleDetailsCommentSchema> = {
      isLoading: true,
    };

    expect(articleDetailsCommentsReducer(
      state as IArticleDetailsCommentSchema,
      fetchCommentsByArticleId.fulfilled([comment], '', '', undefined),
    )).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1'],
      entities: {
        1: comment,
      },
    });
  });

  test('fetchCommentsByArticleId service fulfilled with several comments', () => {
    const state: DeepPartial<IArticleDetailsCommentSchema> = {
      isLoading: true,
    };

    expect(articleDetailsCommentsReducer(
      state as IArticleDetailsCommentSchema,
      fetchCommentsByArticleId.fulfilled([comment, anotherComment], '', '', undefined),
    )).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1', '2'],
      entities: {
        1: comment,
        2: anotherComment,
      },
    });
  });

  test('fetchCommentsByArticleId service rejected', () => {
    const state: DeepPartial<IArticleDetailsCommentSchema> = {
      isLoading: true,
    };

    expect(articleDetailsCommentsReducer(
      state as IArticleDetailsCommentSchema,
      fetchCommentsByArticleId.rejected(new Error(), '', '', 'Something wrong'),
    )).toEqual({
      error: 'Something wrong',
      isLoading: false,
    });
  });
});
