import { ArticleDetails } from '@entities/Article';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/ui/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { articleDetailsPageReducers } from '../../model/slice';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import s from './ArticleDetailsPage.module.scss';

const reducer: TReducerList = {
  articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('article');
  const { articleId } = useParams<{ articleId: string; }>();

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
      <Page className={s.articleDetailsPage}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={articleId} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={articleId} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
