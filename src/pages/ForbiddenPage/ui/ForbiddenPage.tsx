import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@widgets/Page';

const ForbiddenPage: FC = () => {
  const { t } = useTranslation('main');
  return <Page data-testid="ForbiddenPage">{t('Forbidden page')}</Page>;
};

export default ForbiddenPage;
