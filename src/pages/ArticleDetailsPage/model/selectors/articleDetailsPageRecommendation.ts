import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsPageRecommendationIsLoading = (
  state: IStateSchema,
) => state.articleDetailsPage?.recommendations.isLoading;

export const getArticleDetailsPageRecommendationError = (
  state: IStateSchema,
) => state.articleDetailsPage?.recommendations.error;
