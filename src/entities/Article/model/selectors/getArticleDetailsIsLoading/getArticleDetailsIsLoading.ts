import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: IStateSchema) => state.articleDetails?.isLoading;
