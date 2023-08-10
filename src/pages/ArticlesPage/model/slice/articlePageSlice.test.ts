import {
  ARTICLE,
  ArticleSortFieldEnum,
  ArticleTypeEnum,
  ArticleViewEnum,
} from '@entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';

import fetchArticleList from '../services/fetchArticleList/fetchArticleList';
import { IArticlePageSchema } from '../types/articlePageSchema';

import { articlePageActions, articlePageReducer } from './articlePageSlice';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: false,
  error: undefined,
  view: ArticleViewEnum.SMALL,
  ids: [],
  entities: { 1: ARTICLE },
  inited: false,
  page: 1,
  order: 'asc',
  sort: ArticleSortFieldEnum.CREATED,
  search: 'search',
  type: ArticleTypeEnum.ALL,
  hasMore: true,
  limit: 5,
};

describe('articlePageSlice', () => {
  const state: DeepPartial<IArticlePageSchema> = data;
  test('setView reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.setView(ArticleViewEnum.BIG),
      ),
    ).toEqual({
      ...data,
      view: ArticleViewEnum.BIG,
    });
  });

  test('setPage reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.setPage(2),
      ),
    ).toEqual({
      ...data,
      page: 2,
    });
  });

  test('setOrder reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.setOrder('desc'),
      ),
    ).toEqual({
      ...data,
      order: 'desc',
    });
  });

  test('setSort reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.setSort(ArticleSortFieldEnum.TITLE),
      ),
    ).toEqual({ ...data, sort: ArticleSortFieldEnum.TITLE });
  });

  test('setSearch reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.setSearch('search'),
      ),
    ).toEqual({
      ...data,
      search: 'search',
    });
  });

  test('setType reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.setType(ArticleTypeEnum.ECONOMICS),
      ),
    ).toEqual({ ...data, type: ArticleTypeEnum.ECONOMICS });
  });

  test('initState reducer', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        articlePageActions.initState(),
      ),
    ).toEqual({
      ...data,
      view: localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY),
      limit: 4,
      inited: true,
    });
  });

  test('fetchArticleList service pending', () => {
    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        fetchArticleList.pending('', {}),
      ),
    ).toEqual({
      ...data,
      isLoading: true,
      error: undefined,
    });
  });

  // test('fetchArticleList service fulfilled', () => {
  //   const state: DeepPartial<IArticlePageSchema> = {
  //     isLoading: true,
  //   };

  //   expect(articlePageReducer(
  //     state as IArticlePageSchema,
  //     fetchArticleList.fulfilled([ARTICLE, ARTICLE], '', {}),
  //   )).toEqual({
  //     isLoading: false,
  //     error: undefined,
  //     ids: ['1', '2'],
  //     entities: {
  //       1: ARTICLE,
  //       2: ARTICLE,
  //     },
  //   });
  // });

  test('fetchCommentsByArticleId service rejected', () => {
    const state: DeepPartial<IArticlePageSchema> = {
      isLoading: true,
    };

    expect(
      articlePageReducer(
        state as IArticlePageSchema,
        fetchArticleList.rejected(new Error(), '', {}, 'Something wrong'),
      ),
    ).toEqual({
      isLoading: false,
      error: 'Something wrong',
    });
  });
});
