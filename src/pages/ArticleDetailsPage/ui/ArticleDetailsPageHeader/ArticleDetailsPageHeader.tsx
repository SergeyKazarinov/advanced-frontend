import { getArticleDetailsData } from '@entities/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import s from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);
  const handleEdit = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [navigate, article?.id]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={classNames(s.articleDetailsPageHeader, {}, [className])}>
      <Button
        onClick={handleBack}
      >
        {t('Back')}
      </Button>
      {canEdit && (
        <Button
          className={s.editBtn}
          onClick={handleEdit}
        >
          {t('Edit')}
        </Button>
      )}
    </div>
  );
};

export default memo(ArticleDetailsPageHeader);
