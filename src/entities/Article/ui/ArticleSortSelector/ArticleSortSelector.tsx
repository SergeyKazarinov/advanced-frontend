import {
  FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { ISelectOption } from 'shared/ui/Select/Select';
import { ArticleSortFieldEnum } from '@entities/Article/model/types/article';
import { TSortOrder } from 'shared/types';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFieldEnum;
  order: TSortOrder;
  onChangeOrder: (newOrder: TSortOrder) => void;
  onChangeSort: (newSort: ArticleSortFieldEnum) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = ({
  className, order, sort, onChangeOrder, onChangeSort,
}) => {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<ISelectOption<TSortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<ISelectOption<ArticleSortFieldEnum>[]>(() => [
    {
      value: ArticleSortFieldEnum.CREATED,
      content: t('date of creation'),
    },
    {
      value: ArticleSortFieldEnum.TITLE,
      content: t('name'),
    },
    {
      value: ArticleSortFieldEnum.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(s.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('By')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};

export default memo(ArticleSortSelector);
