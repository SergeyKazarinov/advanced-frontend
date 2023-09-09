import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortFieldEnum, ArticleTypeEnum } from '@entities/Article';
import { ArticleSortSelector } from '@features/articleSortSelector';
import { ArticleTypeTabs } from '@features/articleTypeTabs';
import { classNames } from '@shared/lib/classNames';
import { TSortOrder } from '@shared/types';
import { Card } from '@shared/ui/redesigned/Card';
import { Input } from '@shared/ui/redesigned/Input';
import { VStack } from '@shared/ui/redesigned/Stack';

import s from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortFieldEnum;
  order: TSortOrder;
  value: ArticleTypeEnum;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: TSortOrder) => void;
  onChangeSort: (newSort: ArticleSortFieldEnum) => void;
  onChangeType: (type: ArticleTypeEnum) => void;
}

const ArticlesFilters: FC<ArticlesFiltersProps> = ({
  className,
  onChangeOrder,
  onChangeSearch,
  onChangeSort,
  onChangeType,
  order,
  search,
  sort,
  value,
}) => {
  const { t } = useTranslation('article');

  return (
    <Card className={classNames(s.articlesFilters, {}, [className])} padding="24">
      <VStack gap="32">
        <Input placeholder={t('Serach')} value={search} onChange={onChangeSearch} />
        <ArticleTypeTabs className={s.tabs} value={value} onChangeType={onChangeType} />
        <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
      </VStack>
    </Card>
  );
};

export default memo(ArticlesFilters);
