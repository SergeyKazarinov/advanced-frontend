import { useTranslation } from 'react-i18next';

// import Todo from 'microfrontend/Todo';
import { Page } from '@widgets/Page';
import { Resume } from '@widgets/Resume';

const MainPage = () => {
  const { t } = useTranslation('main');

  // const counter = toggleFeatures({
  //   name: 'isCounterEnabled',
  //   // eslint-disable-next-line
  //   on: () => <Counter />,
  //   off: () => null,
  // });

  return (
    <Page data-testid="MainPage">
      {/* {t('Main page')} */}
      {/* <Todo /> */}
      <Resume />
      {/* {counter} */}
    </Page>
  );
};

export default MainPage;
