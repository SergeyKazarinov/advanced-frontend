import { FC } from 'react';

import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { ToggleFeatures } from '@shared/lib/features';

import { IProfile } from '../../model/types/profile';

import ProfileCardDeprecated from './ProfileCardDeprecated/ProfileCardDeprecated';
import ProfileCardRedesigned from './ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: CurrencyEnum) => void;
  onChangeCountry?: (country: CountryEnum) => void;
}

const ProfileCard: FC<ProfileCardProps> = (props) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    // eslint-disable-next-line
    on={<ProfileCardRedesigned {...props} />}
    // eslint-disable-next-line
    off={<ProfileCardDeprecated {...props} />}
  />
);

export default ProfileCard;
