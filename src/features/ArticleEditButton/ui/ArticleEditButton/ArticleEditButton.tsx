import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@entities/Article';
import { getRouteArticleEdit } from '@shared/const/router';
import { Button } from '@shared/ui/redesigned/Button';

const ArticleEditButton: FC = () => {
  const { t } = useTranslation('article');
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [navigate, article]);

  return <Button onClick={handleEdit}>{t('Edit')}</Button>;
};

export default memo(ArticleEditButton);
