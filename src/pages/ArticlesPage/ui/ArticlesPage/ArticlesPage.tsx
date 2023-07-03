import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {

}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const { t } = useTranslation('article');
  return (
    <div />
  );
};

export default ArticlesPage;
