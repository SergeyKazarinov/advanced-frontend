import { Suspense, lazy } from 'react';
import { Skeleton } from '@shared/ui/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRating = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    {/* eslint-disable-next-line */}
    <ArticleRating {...props} />
  </Suspense>
);
