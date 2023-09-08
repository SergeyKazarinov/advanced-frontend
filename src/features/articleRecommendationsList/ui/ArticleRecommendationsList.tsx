import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@entities/Article';
import { classNames } from '@shared/lib/classNames';
import { TextComponent, TextSizeEnum } from '@shared/ui/deprecated/TextComponent';
import { VStack } from '@shared/ui/redesigned/Stack';

import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = ({ className }) => {
  const { t } = useTranslation('article');
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack data-testid="ArticleRecommendationsList" className={classNames('', {}, [className])}>
      <TextComponent size={TextSizeEnum.L} title={t('Recomendations')} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};

export default memo(ArticleRecommendationsList);
