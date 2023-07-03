import { IComment } from '@entities/Comment/model/types/comment';
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { TextComponent } from 'shared/ui/TextComponent';
import s from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment: IComment;
  isLoading?: boolean
}

const CommentItem: FC<CommentItemProps> = ({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={(classNames(s.commentItem, {}, [className]))}>
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }
  return (
    <div className={(classNames(s.commentItem, {}, [className]))}>
      <div className={s.header}>
        <Avatar size={30} src={comment.user.avatar} />
        <TextComponent title={comment.user.username} />
      </div>
      <TextComponent className={s.text} text={comment.text} />
    </div>
  );
};

export default memo(CommentItem);
