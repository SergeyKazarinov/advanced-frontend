import { IStateSchema } from '@app/providers/StoreProvider';
import { ArticleTypeEnum } from '@entities/Article';

import { IArticlePageSchema } from '../../types/articlePageSchema';

import { getArticlePageType } from './getArticlePageType';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  page: 2,
  order: 'desc',
  type: ArticleTypeEnum.ECONOMICS,
};

describe('getArticlePageType selectors', () => {
  test('should return article type ', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageType(state as IStateSchema)).toEqual(
      ArticleTypeEnum.ECONOMICS,
    );
  });

  test('should work with empty state and return type All', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageType(state as IStateSchema)).toEqual(
      ArticleTypeEnum.ALL,
    );
  });
});
