import { IStateSchema } from '@app/providers/StoreProvider';
import { ArticleViewEnum } from '@entities/Article';

import { IArticlePageSchema } from '../../types/articlePageSchema';

import { getArticlePageView } from './getArticlePageView';

const data: DeepPartial<IArticlePageSchema> = {
  isLoading: true,
  error: 'error',
  view: ArticleViewEnum.BIG,
};

describe('getArticlePageError error selectors', () => {
  test('should return boolean true', () => {
    const state: DeepPartial<IStateSchema> = {
      articlesPage: data,
    };
    expect(getArticlePageView(state as IStateSchema)).toEqual(
      ArticleViewEnum.BIG,
    );
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticlePageView(state as IStateSchema)).toEqual(
      ArticleViewEnum.SMALL,
    );
  });
});
