import { UserRoleEnum } from '../consts/consts';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoleEnum
}

export interface IUserSchema {
  authData?: IUser;
  isLoadPage: boolean;
}
