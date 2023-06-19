import { DeepPartial, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';
import { IStateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
