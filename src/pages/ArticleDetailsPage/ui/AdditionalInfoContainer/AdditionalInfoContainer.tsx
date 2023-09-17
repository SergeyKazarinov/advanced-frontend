import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getArticleDetailsData } from '@entities/Article';
import { Card } from '@shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@widgets/ArticleAdditionalInfo';

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

import s from './AdditionalInfoContainer.module.scss';

interface AdditionalInfoContainerProps {
  className?: string;
}

const AdditionalInfoContainer: FC<AdditionalInfoContainerProps> = ({ className }) => {
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  if (!article) {
    return null;
  }
  return (
    <Card padding="24" border="round" className={s.card}>
      <ArticleAdditionalInfo
        className={className}
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        canEdit={canEdit}
      />
    </Card>
  );
};

export default memo(AdditionalInfoContainer);
