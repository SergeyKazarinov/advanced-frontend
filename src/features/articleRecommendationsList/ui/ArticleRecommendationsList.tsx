import { ArticleList } from '@entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { VStack } from '@shared/ui/Stack';
import { TextComponent, TextSizeEnum } from '@shared/ui/TextComponent';
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
    <VStack
      data-testid="ArticleRecommendationsList"
      className={classNames('', {}, [className])}
    >
      <TextComponent
        size={TextSizeEnum.L}
        title={t('Recomendations')}
      />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
};

export default memo(ArticleRecommendationsList);
