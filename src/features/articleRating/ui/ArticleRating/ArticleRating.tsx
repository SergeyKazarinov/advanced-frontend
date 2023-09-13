import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@entities/Rating';
import { getUserAuthData } from '@entities/User';
import { Skeleton } from '@shared/ui/deprecated/Skeleton';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi/articleRatingApi';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = ({ className, articleId }) => {
  const { t } = useTranslation('article');
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          userId: userData?.id ?? '',
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, userData?.id, rateArticleMutation],
  );

  const handleAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const handleCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];
  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title={t('Rate the article')}
      feedbackTitle={t('Leave your feedback about the article')}
      hasFeedback
      onAccept={handleAccept}
      onCancel={handleCancel}
    />
  );
};

export default memo(ArticleRating);
