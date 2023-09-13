import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@entities/Article';
import { Card } from '@shared/ui/redesigned/Card';

interface DetailsContainerProps {
  className?: string;
}

const DetailsContainer: FC<DetailsContainerProps> = ({ className }) => {
  const { articleId } = useParams<{ articleId: string }>();
  return (
    <Card max className={className} padding="24" border="round">
      <ArticleDetails id={articleId} />
    </Card>
  );
};

export default memo(DetailsContainer);
