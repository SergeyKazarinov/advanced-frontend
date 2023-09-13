import { FC, HTMLAttributeAnchorTarget, memo } from 'react';

import { ToggleFeatures } from '@shared/lib/features';

import { ArticleViewEnum } from '../../model/consts/consts';
import { IArticle } from '../../model/types/article';

import ArticleListItemDeprecated from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import ArticleListItemRedesigned from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  className?: string;
  article: IArticle;
  view: ArticleViewEnum;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem: FC<ArticleListItemProps> = (props) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    // eslint-disable-next-line
    on={<ArticleListItemRedesigned {...props} />}
    // eslint-disable-next-line
    off={<ArticleListItemDeprecated {...props} />}
  />
);

export default memo(ArticleListItem);
