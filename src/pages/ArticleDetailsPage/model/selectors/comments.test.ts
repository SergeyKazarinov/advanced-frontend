import { IStateSchema } from '@app/providers/StoreProvider';
import { IArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

const data: DeepPartial<IArticleDetailsCommentSchema> = {
  isLoading: false,
  error: 'error',
};

describe('articleDetailsPage comment selectors', () => {
  test('should return comments isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: { comments: data },
    };
    expect(getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
  });

  test('should return comments isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: { comments: data },
    };
    expect(getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
  });

  test('should return comments error', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: { comments: data },
    };
    expect(getArticleCommentsError(state as IStateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleCommentsError(state as IStateSchema)).toEqual(undefined);
  });
});
