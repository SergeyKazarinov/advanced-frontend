import { IFeatureFlags } from '@shared/types';

import { UserRoleEnum } from '../consts/consts';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoleEnum[];
  features?: IFeatureFlags;
}

export interface IUserSchema {
  authData?: IUser;
  isLoadPage: boolean;
}
