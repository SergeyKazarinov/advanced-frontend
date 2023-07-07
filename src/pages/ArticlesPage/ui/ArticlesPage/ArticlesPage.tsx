import {
  ArticleList, ArticleViewEnum,
} from '@entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import fetchArticleList from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import s from './ArticlesPage.module.scss';

const reducers: TReducerList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  useInitialEffect(() => {
    dispatch(fetchArticleList());
    dispatch(articlePageActions.initState());
  });

  const handleChangeView = useCallback((newView: ArticleViewEnum) => {
    dispatch(articlePageActions.setView(newView));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={s.articlePage}>
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
