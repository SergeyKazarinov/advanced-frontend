import { getArticleDetailsData } from '@entities/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

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
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button
        onClick={handleBack}
      >
        {t('Back')}
      </Button>
      {canEdit && (
        <Button
          onClick={handleEdit}
        >
          {t('Edit')}
        </Button>
      )}
    </HStack>
  );
};

export default memo(ArticleDetailsPageHeader);
