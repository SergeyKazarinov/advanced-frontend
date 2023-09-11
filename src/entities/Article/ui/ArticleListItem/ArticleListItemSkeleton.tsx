import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { toggleFeatures } from '@shared/lib/features';
import { Card as CardDeprecated } from '@shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@shared/ui/redesigned/Skeleton';

import { ArticleViewEnum } from '../../model/consts/consts';

import s from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleViewEnum;
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({ className, view }) => {
  const Card = toggleFeatures({ name: 'isAppRedesigned', on: () => CardRedesigned, off: () => CardDeprecated });
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => s.articleListItemRedesigned,
    off: () => s.articleListItem,
  });

  if (view === ArticleViewEnum.BIG) {
    return (
      <div className={classNames(mainClass, {}, [className, s[view]])}>
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
    <div className={classNames(mainClass, {}, [className, s[view]])}>
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
