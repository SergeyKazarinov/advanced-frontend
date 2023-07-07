import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlePageError = (state: IStateSchema) => state.articlesPage?.error;
