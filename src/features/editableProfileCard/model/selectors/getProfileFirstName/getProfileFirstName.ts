import { IStateSchema } from '@app/providers/StoreProvider';

export const getProfileFirstName = (state: IStateSchema) =>
  state.profile?.data?.name || '';
