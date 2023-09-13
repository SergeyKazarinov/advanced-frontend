import { FC, memo } from 'react';

import { getRouteProfile } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures, toggleFeatures } from '@shared/lib/features';
import { AppLink as ApplinkDeprecate } from '@shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@shared/ui/deprecated/Skeleton';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { AppLink } from '@shared/ui/redesigned/AppLink';
import { Avatar } from '@shared/ui/redesigned/Avatar';
import { Card } from '@shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@shared/ui/redesigned/Skeleton';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { IComment } from '../../model/types/comment';

import s from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

const CommentItem: FC<CommentItemProps> = ({ className, comment, isLoading }) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <div data-testid="CommentItem.Loading" className={classNames(s.commentItem, {}, [className, s.loading])}>
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" border="round" max>
          <VStack
            data-testid="CommentItem.Content"
            max
            className={classNames(s.commentItemRedesigned, {}, [className])}
          >
            <AppLink to={getRouteProfile(comment.user.id)} className={s.header}>
              <Avatar size={30} src={comment.user.avatar} />
              <TextComponent title={comment.user.username} />
            </AppLink>
            <TextComponent className={s.text} text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack data-testid="CommentItem.Content" max className={classNames(s.commentItem, {}, [className])}>
          <ApplinkDeprecate to={getRouteProfile(comment.user.id)} className={s.header}>
            <AvatarDeprecated size={30} src={comment.user.avatar} />
            <TextComponentDeprecated title={comment.user.username} />
          </ApplinkDeprecate>
          <TextComponentDeprecated className={s.text} text={comment.text} />
        </VStack>
      }
    />
  );
};

export default memo(CommentItem);
