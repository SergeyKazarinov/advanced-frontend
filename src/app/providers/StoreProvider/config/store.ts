import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';
import { loginReducer } from '../../../../features/AuthByUsername';
import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState?: IStateSchema) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
