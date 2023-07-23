import { BugButton } from '@app/providers/ErrorBoundary';
import { Counter } from '@entities/Counter';
import { RatingCard } from '@entities/Rating';
import { ThemeButtonEnum } from '@shared/ui/Button';
import { StarRating } from '@shared/ui/StarRating';
import { Page } from '@widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton theme={ThemeButtonEnum.OUTLINE} />
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
