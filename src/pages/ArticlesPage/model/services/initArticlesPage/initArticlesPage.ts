import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited';
import { articlePageActions } from '../../slice/articlePageSlice';
import fetchArticleList from '../fetchArticleList/fetchArticleList';

const initArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const inited = getArticlePageInited(thunkAPI.getState());
    if (!inited) {
      thunkAPI.dispatch(articlePageActions.initState());
      thunkAPI.dispatch(fetchArticleList({
        page: 1,
      }));
    }
  },
);
export default initArticlesPage;
