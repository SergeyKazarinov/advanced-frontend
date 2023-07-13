import { IArticleDetailsCommentSchema } from './articleDetailsCommentSchema';
import { IArticleDetailsRecommendationSchema } from './articleDetailsPageRecommendation';

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentSchema;
  recommendations: IArticleDetailsRecommendationSchema;
}
