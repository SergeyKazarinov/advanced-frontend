import { rtkApi } from '@shared/api/rtkApi';

import { IJsonSettings } from '../model/types/jsonSettings';
import { IUser } from '../model/types/user';

interface SetJsonSettingsArg {
  userId: string;
  jsonSettings: IJsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<IUser, SetJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
