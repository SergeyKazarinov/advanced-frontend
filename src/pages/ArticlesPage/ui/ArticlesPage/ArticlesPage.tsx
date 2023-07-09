import {
  ArticleList, ArticleViewEnum,
} from '@entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import fetchArticleList from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import fetchNextArticlesPage from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/Page';
import { TextComponent, TextThemeEnum } from 'shared/ui/TextComponent';
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

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlePageActions.initState());
    dispatch(fetchArticleList({
      page: 1,
    }));
  });

  const handleChangeView = useCallback((newView: ArticleViewEnum) => {
    dispatch(articlePageActions.setView(newView));
  }, [dispatch]);

  if (error) {
    return <TextComponent text={error} theme={TextThemeEnum.ERROR} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={s.articlePage} onScrollEnd={handleLoadNextPart}>
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
