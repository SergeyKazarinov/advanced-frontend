import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@entities/Article';
import { useParams } from 'react-router-dom';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {

}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
  const { t } = useTranslation('article');
  const { articleId } = useParams<{ articleId: string; }>();

  if (!articleId) {
    return (
      <div>
        {t('Article not found')}
      </div>
    );
  }
  return (
    <div className={s.articleDetailsPage}>
      <ArticleDetails id={articleId} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
