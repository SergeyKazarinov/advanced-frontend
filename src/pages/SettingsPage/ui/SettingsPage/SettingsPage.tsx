import { useTranslation } from 'react-i18next';
import { DesignSwitcher } from '@features/designSwitcher';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';
import { Page } from '@widgets/Page';

const SettingsPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="SettingsPage">
      <VStack>
        <TextComponent title={t('User Settings')} />
        <DesignSwitcher />
      </VStack>
    </Page>
  );
};

export default SettingsPage;
