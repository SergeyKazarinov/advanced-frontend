import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { IArticleDetailsSchema } from '@entities/Article';
import { ICounterSchema } from '@entities/Counter';
import { IUserSchema } from '@entities/User';
import { IAddCommentFormSchema } from '@features/addComment';
import { ILoginSchema } from '@features/AuthByUsername';
import { IProfileSchema } from '@features/editableProfileCard';
import { IScrollSaveSchema } from '@features/ScrollSave';
import { IArticleDetailsPageSchema } from '@pages/ArticleDetailsPage';
import { IArticlePageSchema } from '@pages/ArticlesPage';
import { rtkApi } from '@shared/api/rtkApi';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  scroll: IScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlePageSchema;
  articleDetailsPage?: IArticleDetailsPageSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export type TMountedReducers = OptionalRecord<TStateSchemaKey, boolean>;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction,
  ) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
  // true - редюсер монтирован, fasle редюсер не монтирован
  getMountedReducers: () => TMountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
