import { IArticle } from '@entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';

interface fetchArticleListProps {
  page?: number;
}

const fetchArticleList = createAsyncThunk<IArticle[], fetchArticleListProps, IThunkConfig<string>>(
  'articlesPage/fetchArticleList',
  async ({ page = 1 }, thunkAPI) => {
    const limit = getArticlePageLimit(thunkAPI.getState());
    try {
      const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);
export default fetchArticleList;
