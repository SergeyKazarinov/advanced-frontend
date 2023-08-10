import { useTranslation } from 'react-i18next';
import { Counter } from '@entities/Counter';
import { RatingCard } from '@entities/Rating';
import { Page } from '@widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      {t('Main page')}
      <Counter />
      <RatingCard
        title="Как вам статья"
        feedbackTitle="Оставьте пожалуйста отзыв"
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
