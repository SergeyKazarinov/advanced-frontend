import { IFeatureFlags } from '@shared/types';

import { UserRoleEnum } from '../consts/consts';

import { IJsonSettings } from './jsonSettings';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoleEnum[];
  features?: IFeatureFlags;
  jsonSettings?: IJsonSettings;
}

export interface IUserSchema {
  authData?: IUser;
  isLoadPage: boolean;
}
