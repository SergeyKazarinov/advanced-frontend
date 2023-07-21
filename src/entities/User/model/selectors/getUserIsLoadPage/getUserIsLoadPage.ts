import { IStateSchema } from '@app/providers/StoreProvider';

export const getUserIsLoadPage = (state: IStateSchema) => state.user.isLoadPage;
