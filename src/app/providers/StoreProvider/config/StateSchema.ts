import { IArticleDetailsSchema } from '@entities/Article';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { IArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  // async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager?: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
