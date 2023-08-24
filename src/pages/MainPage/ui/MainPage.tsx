import { useTranslation } from 'react-i18next';
import { Counter } from '@entities/Counter';
import { RatingCard } from '@entities/Rating';
import { getFeatureFlag, toggleFeatures } from '@shared/lib/features';
import { Page } from '@widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  const isCounterEnabled = getFeatureFlag('isCounterEnabled');

  const counter = toggleFeatures({
    name: 'isCounterEnabled',
    // eslint-disable-next-line
    on: () => <Counter />,
    off: () => null,
  })

  return (
    <Page data-testid="MainPage">
      {t('Main page')}
      {counter}
      <RatingCard title="Как вам статья" feedbackTitle="Оставьте пожалуйста отзыв" hasFeedback />
    </Page>
  );
};

export default MainPage;
