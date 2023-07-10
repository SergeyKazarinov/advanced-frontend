import { ArticleViewEnum, IArticle } from '@entities/Article';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
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
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewEnum>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleViewEnum;
      state.view = view;
      state.limit = view === ArticleViewEnum.BIG ? 4 : 9;
      state.inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articleAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articlePageActions = articlePageSlice.actions;

export const articlePageReducer = articlePageSlice.reducer;
