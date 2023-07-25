import { TStateSchemaKey, IStateSchema } from '@app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type TReducerList = {
  [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
}
