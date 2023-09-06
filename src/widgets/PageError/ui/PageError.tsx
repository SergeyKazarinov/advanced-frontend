import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { Button } from '@shared/ui/deprecated/Button';

import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation('page-error');

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(s.pageError, {}, [className])}>
      <p>{t('An unexpected error has occurred')}</p>
      <Button onClick={reloadPage}>{t('Update page')}</Button>
    </div>
  );
};

export default memo(PageError);
