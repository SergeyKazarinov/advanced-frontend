import { Reducer } from '@reduxjs/toolkit';
import { IReduxStoreWithManager } from 'app/providers/StoreProvider';
import { TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import {
  FC, ReactNode, useEffect,
} from 'react';
import { useDispatch, useStore } from 'react-redux';

export type TReducerList = {
  [name in TStateSchemaKey]?: Reducer;
}

type TReducerListEntry = [TStateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: TReducerList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children, reducers, removeAfterUnmount = true,
}) => {
  const store = useStore() as IReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: TReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: TReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    // eslint-disable-next-line
    <>
      {children}
    </>
  );
};

export default DynamicModuleLoader;
