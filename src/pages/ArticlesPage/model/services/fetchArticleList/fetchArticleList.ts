import { IThunkConfig } from '@app/providers/StoreProvider';
import { ArticleTypeEnum, IArticle } from '@entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addQueryParams } from '@shared/lib/url/addQueryParams';

import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';
import { getArticlePageNumber } from '../../selectors/getArticlePageNumber/getArticlePageNumber';
import { getArticlePageOrder } from '../../selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageType } from '../../selectors/getArticlePageType/getArticlePageType';

interface fetchArticleListProps {
  replace?: boolean;
}

const fetchArticleList = createAsyncThunk<
  IArticle[],
  fetchArticleListProps,
  IThunkConfig<string>
>('articlesPage/fetchArticleList', async (_, thunkAPI) => {
  const limit = getArticlePageLimit(thunkAPI.getState());
  const sort = getArticlePageSort(thunkAPI.getState());
  const order = getArticlePageOrder(thunkAPI.getState());
  const search = getArticlePageSearch(thunkAPI.getState());
  const page = getArticlePageNumber(thunkAPI.getState());
  const type = getArticlePageType(thunkAPI.getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
    });
    const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleTypeEnum.ALL ? undefined : type,
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
});
export default fetchArticleList;
