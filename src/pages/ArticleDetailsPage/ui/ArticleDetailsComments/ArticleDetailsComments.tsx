import { CommentList } from '@entities/Comment';
import { AddCommentFormAsync } from '@features/addComment';
import {
  FC, Suspense, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@shared/lib/classNames';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { TextComponent, TextSizeEnum } from '@shared/ui/TextComponent';
import { VStack } from '@shared/ui/Stack';
import { Loader } from '@shared/ui/Loader';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import addCommentForArticle from '../../model/services/addCommentForArticle/addCommentForArticle';
import fetchCommentsByArticleId from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = ({ className, id }) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <VStack max className={classNames('', {}, [className])}>
      <TextComponent size={TextSizeEnum.L} title={t('Comments')} />
      <Suspense fallback={<Loader />}>
        <AddCommentFormAsync onSendComment={handleSendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={isLoading} />
    </VStack>
  );
};

export default memo(ArticleDetailsComments);
