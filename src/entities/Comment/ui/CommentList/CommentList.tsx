import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { IComment } from '@entities/Comment/model/types/comment';
import { TextComponent } from 'shared/ui/TextComponent';
import s from './CommentList.module.scss';
import CommentItem from '../CommentItem/CommentItem';

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = ({ className, comments, isLoading }) => {
  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={(classNames(s.commentList, {}, [className]))}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </div>
    );
  }

  return (
    <div className={(classNames(s.commentList, {}, [className]))}>
      {(comments?.length)
        ? comments.map((comment) => (
          <CommentItem
            key={comment.id}
            className={s.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <TextComponent text={t('No comments')} />}
    </div>
  );
};

export default memo(CommentList);
