import { IStateSchema } from '@app/providers/StoreProvider';
import {
  ArticleSortFieldEnum,
  ArticleTypeEnum,
  ArticleViewEnum,
  IArticle,
} from '@entities/Article';
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';
import { TSortOrder } from '@shared/types';

import fetchArticleList from '../services/fetchArticleList/fetchArticleList';
import { IArticlePageSchema } from '../types/articlePageSchema';

const articleAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articleAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articleAdapter.getInitialState<IArticlePageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleViewEnum.SMALL,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    inited: false,
    limit: 9,
    sort: ArticleSortFieldEnum.CREATED,
    search: '',
    order: 'asc',
    type: ArticleTypeEnum.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewEnum>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortFieldEnum>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypeEnum>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCAL_STORAGE_KEY,
      ) as ArticleViewEnum;
      state.view = view;
      state.limit = view === ArticleViewEnum.BIG ? 4 : 9;
      state.inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articleAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.isLoading = false;

        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articleAdapter.setAll(state, action.payload);
        } else {
          articleAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articlePageActions = articlePageSlice.actions;

export const articlePageReducer = articlePageSlice.reducer;
