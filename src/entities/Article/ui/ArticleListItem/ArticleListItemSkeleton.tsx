import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures, toggleFeatures } from '@shared/lib/features';
import { Card as CardDeprecated } from '@shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@shared/ui/redesigned/Card';
import { Skeleton } from '@shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';

import { ArticleViewEnum } from '../../model/consts/consts';

import s from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleViewEnum;
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({ className, view }) => {
  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => s.articleListItemRedesigned,
    off: () => s.articleListItem,
  });

  if (view === ArticleViewEnum.BIG) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <CardRedesigned max padding="24">
            <VStack max gap="16">
              <HStack>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={150} height={16} className={s.username} />
              </HStack>
              <Skeleton width={520} height={32} className={s.title} />
              <Skeleton width={520} height={32} className={s.title} />
              <Skeleton className={s.image} height={313} />
              <Skeleton width="100%" height={72} />
              <HStack justify="between" max>
                <Skeleton height={46} width={163} border="34px" />
                <Skeleton height={24} width={70} />
              </HStack>
            </VStack>
          </CardRedesigned>
        }
        off={
          <div className={classNames(mainClass, {}, [className, s[view]])}>
            <CardDeprecated>
              <div className={s.header}>
                <SkeletonDeprecated width={30} height={30} border="50%" />
                <SkeletonDeprecated width={150} height={16} className={s.username} />
                <SkeletonDeprecated width={150} height={16} className={s.date} />
              </div>
              <SkeletonDeprecated width={250} height={24} className={s.title} />
              <SkeletonDeprecated className={s.image} height={300} />
              <div className={s.footer}>
                <SkeletonDeprecated height={36} width={150} />
              </div>
            </CardDeprecated>
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames(mainClass, {}, [className, s[view]])}>
          <CardRedesigned padding="0" border="round" className={s.cardRedesigned}>
            <VStack gap="8">
              <Skeleton className={s.image} width={240} height={140} />
              <VStack>
                <Skeleton width={240} height={32} />
                <Skeleton width={240} height={32} />
                <Skeleton width={240} height={32} />
              </VStack>
              <Skeleton className={s.title} width={240} height={24} />
            </VStack>
            <HStack>
              <Skeleton border="100%" width={32} height={32} className={s.avatarSkeleton} />
              <Skeleton className={s.title} width={150} height={24} />
            </HStack>
          </CardRedesigned>
        </div>
      }
      off={
        <div className={classNames(mainClass, {}, [className, s[view]])}>
          <CardDeprecated>
            <div className={s.imageWrapper}>
              <SkeletonDeprecated className={s.image} width={200} height={200} />
            </div>
            <div className={s.infoWrapper}>
              <SkeletonDeprecated width={130} height={16} />
            </div>
            <SkeletonDeprecated className={s.title} width={150} height={16} />
          </CardDeprecated>
        </div>
      }
    />
  );
};

export default memo(ArticleListItemSkeleton);
