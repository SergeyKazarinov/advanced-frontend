import { Reducer } from '@reduxjs/toolkit';
import { IStateSchema, TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type TReducerList = {
  [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
}
