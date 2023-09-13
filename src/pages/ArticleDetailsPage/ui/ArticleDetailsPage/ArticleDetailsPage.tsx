import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@entities/Article';
import { ArticleRatingLazy } from '@features/articleRating';
import { ArticleRecommendationsList } from '@features/articleRecommendationsList';
import { StickyContentLayout } from '@shared/layouts/StickyContentLayout';
import { ToggleFeatures } from '@shared/lib/features';
import { DynamicModuleLoader, TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { Card } from '@shared/ui/deprecated/Card';
import { VStack } from '@shared/ui/redesigned/Stack';
import { Page } from '@widgets/Page';

import { articleDetailsPageReducers } from '../../model/slice';
import AdditionalInfoContainer from '../AdditionalInfoContainer/AdditionalInfoContainer';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import DetailsContainer from '../DetailsContainer/DetailsContainer';

import s from './ArticleDetailsPage.module.scss';

const reducer: TReducerList = {
  articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage: FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { t } = useTranslation();

  if (!articleId) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page className={s.articleDetailsPage}>
                <VStack gap="16" max>
                  <DetailsContainer />

                  <ArticleRatingLazy articleId={articleId} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={articleId} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={s.articleDetailsPage}>
            <VStack gap="16" max>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={articleId} />
              <ToggleFeatures
                feature="isArticleRatingEnabled"
                on={<ArticleRatingLazy articleId={articleId} />}
                off={<Card>{t('Скоро здесь будет новая фича')}</Card>}
              />
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={articleId} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
