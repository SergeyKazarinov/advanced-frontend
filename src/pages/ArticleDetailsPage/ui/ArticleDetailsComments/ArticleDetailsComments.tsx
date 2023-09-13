import { FC, memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentList } from '@entities/Comment';
import { AddCommentFormAsync } from '@features/addComment';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { Loader } from '@shared/ui/deprecated/Loader';
import { TextComponent as TextComponentDeprecated, TextSizeEnum } from '@shared/ui/deprecated/TextComponent';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

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

  const handleSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  return (
    <VStack max className={classNames('', {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<TextComponent size="size_l" title={t('Comments')} />}
        off={<TextComponentDeprecated size={TextSizeEnum.L} title={t('Comments')} />}
      />

      <Suspense fallback={<Loader />}>
        <AddCommentFormAsync onSendComment={handleSendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={isLoading} />
    </VStack>
  );
};

export default memo(ArticleDetailsComments);
