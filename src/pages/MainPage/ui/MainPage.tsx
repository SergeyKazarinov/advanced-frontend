import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { ThemeButtonEnum } from 'shared/ui/Button';
import { Counter } from '@entities/Counter';
import { Page } from 'shared/ui/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton theme={ThemeButtonEnum.OUTLINE} />
      {t('Main page')}
      <Counter />
    </Page>
  );
};

export default MainPage;
