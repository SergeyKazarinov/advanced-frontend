import { BugButton } from '@app/providers/ErrorBoundary';
import { Counter } from '@entities/Counter';
import { ThemeButtonEnum } from '@shared/ui/Button';
import { Page } from '@widgets/Page';
import { useTranslation } from 'react-i18next';

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
