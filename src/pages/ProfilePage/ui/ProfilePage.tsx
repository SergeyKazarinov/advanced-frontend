import { EditableProfileCard } from 'features/editableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import { TextComponent } from 'shared/ui/TextComponent';
import { Page } from 'widgets/Page';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { profileId } = useParams<{ profileId: string }>();

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard profileId={profileId} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
