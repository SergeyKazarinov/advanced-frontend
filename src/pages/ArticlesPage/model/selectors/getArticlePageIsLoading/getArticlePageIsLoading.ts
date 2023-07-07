import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticlePageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
