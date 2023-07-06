import { IUserSchema } from '../model/types/user';

export const USER_DATA: DeepPartial<IUserSchema> = {
  authData: {
    id: '1',
    username: 'username',
    avatar: 'avatarLink',
  },
  isLoadPage: false,
};
