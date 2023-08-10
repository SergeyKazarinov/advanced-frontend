import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  ArticleSortFieldEnum,
  ArticleTypeEnum,
  ArticleViewEnum,
} from '@entities/Article';
import { ArticleSortSelector } from '@features/articleSortSelector';
import { ArticleTypeTabs } from '@features/articleTypeTabs';
import { ArticleViewSelector } from '@features/ArticleViewSelector';
import { classNames } from '@shared/lib/classNames';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { TSortOrder } from '@shared/types';
import { Card } from '@shared/ui/Card';
import { Input } from '@shared/ui/Input';

import { getArticlePageOrder } from '../../model/selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../model/selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageType } from '../../model/selectors/getArticlePageType/getArticlePageType';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import fetchArticleList from '../../model/services/fetchArticleList/fetchArticleList';
import { articlePageActions } from '../../model/slice/articlePageSlice';

import s from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

const ArticlesPageFilter: FC<ArticlesPageFilterProps> = ({ className }) => {
  const { t } = useTranslation('article');
  const view = useSelector(getArticlePageView);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const handleChangeView = useCallback(
    (newView: ArticleViewEnum) => {
      dispatch(articlePageActions.setView(newView));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleChangeOrder = useCallback(
    (newOrder: TSortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleChangeSort = useCallback(
    (newSort: ArticleSortFieldEnum) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlePageActions.setSearch(search));
      dispatch(articlePageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const handleChangeType = useCallback(
    (value: ArticleTypeEnum) => {
      dispatch(articlePageActions.setType(value));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={classNames(s.articlesPageFilter, {}, [className])}>
      <div className={s.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
      </div>
      <Card className={s.search}>
        <Input
          placeholder={t('Serach')}
          value={search}
          onChange={handleChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        className={s.tabs}
        value={type}
        onChangeType={handleChangeType}
      />
    </div>
  );
};

export default memo(ArticlesPageFilter);
