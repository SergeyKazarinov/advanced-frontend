import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { IComment } from '../../model/types/comment';
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
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => <CommentItem key={comment.id} comment={comment} isLoading={isLoading} />)
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<TextComponent text={t('No comments')} />}
          off={<TextComponentDeprecated text={t('No comments')} />}
        />
      )}
    </VStack>
  );
};

export default memo(CommentList);
