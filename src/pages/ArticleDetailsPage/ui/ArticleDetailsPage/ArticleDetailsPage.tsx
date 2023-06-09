import { ArticleDetails, ArticleList } from '@entities/Article';
import { CommentList } from '@entities/Comment';
import { AddCommentFormAsync } from 'features/addComment';
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Button } from 'shared/ui/Button';
import { TextComponent, TextSizeEnum } from 'shared/ui/TextComponent';
import { Page } from 'widgets/Page';
import {
  getArticleDetailsPageRecommendationError,
  getArticleDetailsPageRecommendationIsLoading,
} from '../../model/selectors/articleDetailsPageRecommendation';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import addCommentForArticle from '../../model/services/addCommentForArticle/addCommentForArticle';
import fetchArticleRecommendation from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import fetchCommentsByArticleId from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import {
  getArticlePageRecommendationAdapter,
} from '../../model/slice/articleDetailsPageRecommendationSlice';
import s from './ArticleDetailsPage.module.scss';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducer: TReducerList = {
  articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('article');
  const { articleId } = useParams<{ articleId: string; }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticlePageRecommendationAdapter.selectAll);
  const recommendationsIsLoading = useSelector(getArticleDetailsPageRecommendationIsLoading);
  const recommendationsError = useSelector(getArticleDetailsPageRecommendationError);

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
    dispatch(fetchArticleRecommendation());
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
      <Page className={s.articleDetailsPage}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={articleId} />
        <TextComponent size={TextSizeEnum.L} title={t('Recomendations')} className={s.commentTitle} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={s.recommendations}
          target="_blank"
        />
        <TextComponent size={TextSizeEnum.L} title={t('Comments')} className={s.commentTitle} />
        <AddCommentFormAsync onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
