import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { ThemeButtonEnum } from 'shared/ui/Button';
import { Counter } from '@entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton theme={ThemeButtonEnum.OUTLINE} />
      {t('Main page')}
      <Counter />
    </div>
  );
};

export default MainPage;
