import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { TReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../../../entities/Profile';

const reducers: TReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t('Profile Page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
