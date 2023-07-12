import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageHasMore } from '../../selectors/getArticlePageHasMore/getArticlePageHasMore';
import { getArticlePageIsLoading } from '../../selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageNumber } from '../../selectors/getArticlePageNumber/getArticlePageNumber';
import { articlePageActions } from '../../slice/articlePageSlice';
import fetchArticleList from '../fetchArticleList/fetchArticleList';

const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const hasMore = getArticlePageHasMore(thunkAPI.getState());
    const page = getArticlePageNumber(thunkAPI.getState());
    const isLoading = getArticlePageIsLoading(thunkAPI.getState());

    if (hasMore && !isLoading) {
      thunkAPI.dispatch(articlePageActions.setPage(page + 1));
      thunkAPI.dispatch(fetchArticleList({}));
    }
  },
);
export default fetchNextArticlesPage;
