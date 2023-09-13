import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@entities/Article';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { TextComponent as TextComponentDeprecated, TextSizeEnum } from '@shared/ui/deprecated/TextComponent';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<TextComponent size="size_l" title={t('Recomendations')} />}
        off={<TextComponentDeprecated size={TextSizeEnum.L} title={t('Recomendations')} />}
      />

      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};

export default memo(ArticleRecommendationsList);
