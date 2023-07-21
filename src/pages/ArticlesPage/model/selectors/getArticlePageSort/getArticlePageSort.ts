import { ArticleSortFieldEnum } from '@entities/Article';
import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageSort = (state: IStateSchema) => state.articlesPage?.sort ?? ArticleSortFieldEnum.CREATED;
