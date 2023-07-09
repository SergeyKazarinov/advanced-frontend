import { ArticleViewEnum } from '@entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import fetchArticleList from '../services/fetchArticleList/fetchArticleList';
import { IArticlePageSchema } from '../types/articlePageSchema';
import { articlePageActions, articlePageReducer } from './articlePageSlice';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: false,
  error: undefined,
  view: ArticleViewEnum.SMALL,
  ids: [],
  entities: {},
};

describe('articlePageSlice', () => {
  const state: DeepPartial<IArticlePageSchema> = data;
  test('setView reducer', () => {
    expect(articlePageReducer(
      state as IArticlePageSchema,
      articlePageActions.setView(ArticleViewEnum.BIG),
    )).toEqual({ ...data, view: ArticleViewEnum.BIG });
  });

  test('initState reducer', () => {
    expect(articlePageReducer(
      state as IArticlePageSchema,
      articlePageActions.initState(),
    )).toEqual({ ...data, view: localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY), limit: 4 });
  });

  test('fetchArticleList service pending', () => {
    expect(articlePageReducer(
      state as IArticlePageSchema,
      fetchArticleList.pending,
    )).toEqual({ ...data, isLoading: true });
  });

  // test('fetchArticleList service fulfilled', () => {
  //   const state: DeepPartial<IArticlePageSchema> = {
  //     isLoading: true,
  //   };

  //   expect(articlePageReducer(
  //     state as IArticlePageSchema,
  //     fetchArticleList.fulfilled([ARTICLE], '', {}),
  //   )).toEqual({
  //     isLoading: false,
  //     error: undefined,
  //     ids: ['1'],
  //     entities: { 1: ARTICLE },
  //   });
  // });

  test('fetchCommentsByArticleId service rejected', () => {
    const state: DeepPartial<IArticlePageSchema> = {
      isLoading: true,
    };

    expect(articlePageReducer(
      state as IArticlePageSchema,
      fetchArticleList.rejected(new Error(), '', {}, 'Something wrong'),
    )).toEqual({
      isLoading: false,
      error: 'Something wrong',
    });
  });
});
