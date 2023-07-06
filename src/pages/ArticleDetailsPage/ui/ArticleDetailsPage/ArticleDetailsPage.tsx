import { ArticleDetails } from '@entities/Article';
import { CommentList } from '@entities/Comment';
import AddCommentForm from 'features/addComment/ui/AddCommentForm/AddCommentForm';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { TextComponent } from 'shared/ui/TextComponent';
import { Button } from 'shared/ui/Button';
import addCommentForArticle from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import fetchCommentsByArticleId from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import s from './ArticleDetailsPage.module.scss';

const reducer: TReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const { articleId } = useParams<{ articleId: string; }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  });

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

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
        <Button
          onClick={handleBack}
        >
          {t('Back')}
        </Button>
        <ArticleDetails id={articleId} />
        <TextComponent title={t('Comments')} className={s.commentTitle} />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
