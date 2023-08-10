import { FC, memo } from 'react';
import { getRouteProfile } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { AppLink } from '@shared/ui/AppLink';
import { Avatar } from '@shared/ui/Avatar';
import { Skeleton } from '@shared/ui/Skeleton';
import { VStack } from '@shared/ui/Stack';
import { TextComponent } from '@shared/ui/TextComponent';

import { IComment } from '../../model/types/comment';

import s from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

const CommentItem: FC<CommentItemProps> = ({
  className,
  comment,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div
        data-testid="CommentItem.Loading"
        className={classNames(s.commentItem, {}, [className, s.loading])}
      >
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
    <VStack
      data-testid="CommentItem.Content"
      max
      className={classNames(s.commentItem, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={s.header}>
        <Avatar size={30} src={comment.user.avatar} />
        <TextComponent title={comment.user.username} />
      </AppLink>
      <TextComponent className={s.text} text={comment.text} />
    </VStack>
  );
};

export default memo(CommentItem);
