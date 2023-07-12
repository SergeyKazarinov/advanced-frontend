import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFieldEnum } from '@entities/Article';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { getArticlePageSort } from './getArticlePageSort';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  order: 'desc',
  sort: ArticleSortFieldEnum.CREATED,
};

describe('getArticlePageSort selectors', () => {
  test('should return page sort created', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageSort(state as IStateSchema)).toEqual(ArticleSortFieldEnum.CREATED);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageSort(state as IStateSchema)).toEqual(ArticleSortFieldEnum.CREATED);
  });
});
