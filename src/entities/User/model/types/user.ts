export interface IUser {
  id: string;
  username: string;
  avatar?: string;
}

export interface IUserSchema {
  authData?: IUser;
  isLoadPage: boolean;
}
