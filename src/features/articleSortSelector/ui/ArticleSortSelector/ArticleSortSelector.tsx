import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortFieldEnum } from '@entities/Article';
import { classNames } from '@shared/lib/classNames';
import { TSortOrder } from '@shared/types';
import { ISelectOption, Select } from '@shared/ui/deprecated/Select';

import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFieldEnum;
  order: TSortOrder;
  onChangeOrder: (newOrder: TSortOrder) => void;
  onChangeSort: (newSort: ArticleSortFieldEnum) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = ({ className, order, sort, onChangeOrder, onChangeSort }) => {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<ISelectOption<TSortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending'),
      },
      {
        value: 'desc',
        content: t('descending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<ISelectOption<ArticleSortFieldEnum>[]>(
    () => [
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
    ],
    [t],
  );

  return (
    <div className={classNames(s.articleSortSelector, {}, [className])}>
      <Select<ArticleSortFieldEnum>
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select options={orderOptions} label={t('By')} value={order} onChange={onChangeOrder} />
    </div>
  );
};

export default memo(ArticleSortSelector);
