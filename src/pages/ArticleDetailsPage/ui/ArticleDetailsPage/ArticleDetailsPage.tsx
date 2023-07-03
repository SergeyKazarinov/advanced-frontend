import { ArticleDetails } from '@entities/Article';
import { CommentList } from '@entities/Comment';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { TextComponent } from 'shared/ui/TextComponent';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import fetchCommentsByArticleId from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {

}
const reducer: TReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
  const { t } = useTranslation('article');
  const { articleId } = useParams<{ articleId: string; }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  });

  if (!articleId) {
    return (
      <div>
        {t('Article not found')}
      </div>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
      <div className={s.articleDetailsPage}>
        <ArticleDetails id={articleId} />
        <TextComponent title={t('Comments')} className={s.commentTitle} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
