import { FC, memo } from 'react';

import { ArticlesFilters } from '@widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersSelectorContainerProps {
  className?: string;
}

const FiltersSelectorContainer: FC<FiltersSelectorContainerProps> = ({ className }) => {
  const { handleChangeOrder, handleChangeSearch, handleChangeSort, handleChangeType, order, search, sort, type } =
    useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      search={search}
      order={order}
      sort={sort}
      value={type}
      onChangeSort={handleChangeSort}
      onChangeType={handleChangeType}
      onChangeOrder={handleChangeOrder}
      onChangeSearch={handleChangeSearch}
    />
  );
};

export default memo(FiltersSelectorContainer);
