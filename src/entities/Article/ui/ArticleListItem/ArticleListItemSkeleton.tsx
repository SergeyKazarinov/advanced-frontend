import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Skeleton } from '@shared/ui/Skeleton';

import { ArticleViewEnum } from '../../model/consts/consts';

import s from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleViewEnum;
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({
  className,
  view,
}) => {
  if (view === ArticleViewEnum.BIG) {
    return (
      <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
        <Card>
          <div className={s.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={s.username} />
            <Skeleton width={150} height={16} className={s.date} />
          </div>
          <Skeleton width={250} height={24} className={s.title} />
          <Skeleton className={s.image} height={300} />
          <div className={s.footer}>
            <Skeleton height={36} width={150} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
      <Card>
        <div className={s.imageWrapper}>
          <Skeleton className={s.image} width={200} height={200} />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton className={s.title} width={150} height={16} />
      </Card>
    </div>
  );
};

export default memo(ArticleListItemSkeleton);
