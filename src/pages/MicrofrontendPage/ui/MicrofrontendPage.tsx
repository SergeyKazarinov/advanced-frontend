import { useTranslation } from 'react-i18next';
import Todo from 'microfrontend/Todo';

import { Link } from '@shared/ui/redesigned/Link';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';
import { Page } from '@widgets/Page';

import s from './MicrofrontendPage.module.scss';

const MicrofrontendPage = () => {
  const { t } = useTranslation('main');

  // const counter = toggleFeatures({
  //   name: 'isCounterEnabled',
  //   // eslint-disable-next-line
  //   on: () => <Counter />,
  //   off: () => null,
  // });

  return (
    <Page data-testid="MicrofrontendPage">
      <VStack max>
        <TextComponent title={t('Microfrontend')} align="center" className={s.title} />
        <TextComponent text={t('Microfrontend description')} />
        <Link href="https://github.com/SergeyKazarinov/microfrontend-todo" underline>
          {t('Link to microfrontend')}
        </Link>
        <div className={s.todo}>
          <Todo />
        </div>
      </VStack>
    </Page>
  );
};

export default MicrofrontendPage;
