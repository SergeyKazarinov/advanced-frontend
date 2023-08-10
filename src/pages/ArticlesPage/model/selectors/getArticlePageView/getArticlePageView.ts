import { IStateSchema } from '@app/providers/StoreProvider';
import { ArticleViewEnum } from '@entities/Article';

export const getArticlePageView = (state: IStateSchema) =>
  state.articlesPage?.view || ArticleViewEnum.SMALL;
