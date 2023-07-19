export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

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
