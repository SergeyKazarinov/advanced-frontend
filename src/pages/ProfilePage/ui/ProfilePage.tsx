import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@features/editableProfileCard';
import { VStack } from '@shared/ui/deprecated/Stack';
import { Page } from '@widgets/Page';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { profileId } = useParams<{ profileId: string }>();

  return (
    <Page data-testid="ProfilePage">
      <VStack gap="16" max>
        <EditableProfileCard profileId={profileId} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
