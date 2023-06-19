import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: IStateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
