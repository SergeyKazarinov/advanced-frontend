import { IArticle } from '@entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@app/providers/StoreProvider';

const fetchArticleRecommendation = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
  'articlesDetailsPage/fetchArticleRecommendation',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
        params: {
          _limit: 4,
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
export default fetchArticleRecommendation;
