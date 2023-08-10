import { useTranslation } from 'react-i18next';
import { Counter } from '@entities/Counter';
import { RatingCard } from '@entities/Rating';
import { getFeatureFlag } from '@shared/lib/features';
import { Page } from '@widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  const isCounterEnabled = getFeatureFlag('isCounterEnabled');

  return (
    <Page data-testid="MainPage">
      {t('Main page')}
      {isCounterEnabled && <Counter />}
      <RatingCard title="Как вам статья" feedbackTitle="Оставьте пожалуйста отзыв" hasFeedback />
    </Page>
  );
};

export default MainPage;
