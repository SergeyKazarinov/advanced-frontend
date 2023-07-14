import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import s from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {

}

const ArticleEditPage: FC<ArticleEditPageProps> = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page>
      {t('No data')}
    </Page>
  );
};

export default memo(ArticleEditPage);
