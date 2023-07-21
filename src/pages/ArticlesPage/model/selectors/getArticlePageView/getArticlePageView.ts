import { ArticleViewEnum } from '@entities/Article';
import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageView = (state: IStateSchema) => state.articlesPage?.view || ArticleViewEnum.SMALL;
