import { IArticleDetailsSchema } from '@entities/Article';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { IScrollSaveSchema } from 'features/ScrollSave';
import { IAddCommentFormSchema } from 'features/addComment';
import { IArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { IArticlePageSchema } from 'pages/ArticlesPage';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  scroll: IScrollSaveSchema;

  // async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlePageSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export type TMountedReducers = OptionalRecord<TStateSchemaKey, boolean>;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
  // true - редюсер монтирован, fasle редюсер не монтирован
  getMountedReducers: () => TMountedReducers
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
