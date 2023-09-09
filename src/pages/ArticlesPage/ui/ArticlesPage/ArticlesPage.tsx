import { FC, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticlePageGreeting } from '@features/articlePageGreeting';
import { StickyContentLayout } from '@shared/layouts/StickyContentLayout';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { DynamicModuleLoader, TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { Page } from '@widgets/Page';

import fetchNextArticlesPage from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import initArticlesPage from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import ArticlesPageFilter from '../ArticlesPageFilter/ArticlesPageFilter';
import FiltersSelectorContainer from '../FiltersSelectorContainer/FiltersSelectorContainer';
import ViewSelectorContainer from '../ViewSelectorContainer/ViewSelectorContainer';

import s from './ArticlesPage.module.scss';

const reducers: TReducerList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          content={
            <Page data-testid="ArticlesPage" className={s.articlePageRed} onScrollEnd={handleLoadNextPart}>
              <ArticleInfiniteList />
              <ArticlePageGreeting />
            </Page>
          }
          left={<ViewSelectorContainer />}
          right={<FiltersSelectorContainer />}
        />
      }
      off={
        <Page data-testid="ArticlesPage" className={s.articlePage} onScrollEnd={handleLoadNextPart}>
          <ArticlesPageFilter />
          <ArticleInfiniteList />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
