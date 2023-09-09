import { FC, memo } from 'react';
import { ArticleViewSelector } from '@features/ArticleViewSelector';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

const ViewSelectorContainer: FC<ViewSelectorContainerProps> = ({ className }) => {
  const { handleChangeView, view } = useArticleFilters();

  return <ArticleViewSelector className={className} view={view} onViewClick={handleChangeView} />;
};

export default memo(ViewSelectorContainer);
