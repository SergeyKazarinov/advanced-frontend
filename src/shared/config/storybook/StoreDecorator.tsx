import { IStateSchema, StoreProvider } from '@app/providers/StoreProvider';
import { articleDetailsReducer } from '@entities/Article/testing';
import { loginReducer } from '@features/AuthByUsername/testing';
import { addCommentFormReducer } from '@features/addComment/testing';
import { profileReducer } from '@features/editableProfileCard/testing';
import { articleDetailsPageReducers } from '@pages/ArticleDetailsPage/testing';
import { articlePageReducer } from '@pages/ArticlesPage/testing';
import { TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { StoryFn } from '@storybook/react';

const defaultAsyncReducers: TReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducers,
  articlesPage: articlePageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: TReducerList,
) => function (Story: StoryFn) {
  return (
    <StoreProvider initialState={state as IStateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );
};
