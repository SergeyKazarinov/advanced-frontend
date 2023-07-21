import { ArticleTypeEnum } from '@entities/Article';
import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageType = (state: IStateSchema) => state.articlesPage?.type ?? ArticleTypeEnum.ALL;
