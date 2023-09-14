import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@features/articleSortSelector';
import { ArticleTypeTabs } from '@features/articleTypeTabs';
import { ArticleViewSelector } from '@features/ArticleViewSelector';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/deprecated/Card';
import { Input } from '@shared/ui/deprecated/Input';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import s from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

const ArticlesPageFilter: FC<ArticlesPageFilterProps> = ({ className }) => {
  const { t } = useTranslation('article');
  const {
    handleChangeOrder,
    handleChangeSearch,
    handleChangeSort,
    handleChangeType,
    handleChangeView,
    order,
    search,
    sort,
    type,
    view,
  } = useArticleFilters();

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
        <Input placeholder={t('Serach')} value={search} onChange={handleChangeSearch} />
      </Card>
      <ArticleTypeTabs className={s.tabs} value={type} onChangeType={handleChangeType} />
    </div>
  );
};

export default memo(ArticlesPageFilter);
