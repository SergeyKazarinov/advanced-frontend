import {
  ArticleList,
} from '@entities/Article';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { TextComponent, TextThemeEnum } from 'shared/ui/TextComponent';
import { Page } from 'widgets/Page';
import initArticlesPage from '../../model/services/initArticlesPage/initArticlesPage';
import fetchNextArticlesPage from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import ArticlesPageFilter from '../ArticlesPageFilter/ArticlesPageFilter';
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
  const [searchParams] = useSearchParams();

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <TextComponent text={error} theme={TextThemeEnum.ERROR} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={s.articlePage} onScrollEnd={handleLoadNextPart}>
        <ArticlesPageFilter />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
          className={s.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
