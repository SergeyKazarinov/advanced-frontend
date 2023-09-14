import { Reducer } from '@reduxjs/toolkit';

import { IStateSchema, TStateSchemaKey } from '@app/providers/StoreProvider';

export type TReducerList = {
  [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
};
