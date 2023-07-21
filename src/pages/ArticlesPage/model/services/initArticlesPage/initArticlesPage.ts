import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@app/providers/StoreProvider';
import { TSortOrder } from '@shared/types';
import { ArticleSortFieldEnum, ArticleTypeEnum } from '@entities/Article';
import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited';
import { articlePageActions } from '../../slice/articlePageSlice';
import fetchArticleList from '../fetchArticleList/fetchArticleList';

const initArticlesPage = createAsyncThunk<void, URLSearchParams, IThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const inited = getArticlePageInited(thunkAPI.getState());
    if (!inited) {
      const orderFromUtl = searchParams.get('order') as TSortOrder;
      const sortFromUtl = searchParams.get('sort') as ArticleSortFieldEnum;
      const searchFromUtl = searchParams.get('search');
      const typeFromUtl = searchParams.get('type') as ArticleTypeEnum;

      if (orderFromUtl) {
        thunkAPI.dispatch(articlePageActions.setOrder(orderFromUtl));
      }
      if (sortFromUtl) {
        thunkAPI.dispatch(articlePageActions.setSort(sortFromUtl));
      }
      if (searchFromUtl) {
        thunkAPI.dispatch(articlePageActions.setSearch(searchFromUtl));
      }
      if (typeFromUtl) {
        thunkAPI.dispatch(articlePageActions.setType(typeFromUtl));
      }
      thunkAPI.dispatch(articlePageActions.initState());
      thunkAPI.dispatch(fetchArticleList({}));
    }
  },
);
export default initArticlesPage;
