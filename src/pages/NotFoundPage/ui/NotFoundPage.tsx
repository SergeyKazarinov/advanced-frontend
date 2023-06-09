import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('not-found');
  return (
    <div className={classNames(s.notFoundPage, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};

export default NotFoundPage;
