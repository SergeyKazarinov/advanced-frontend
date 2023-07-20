import { articleDetailsReducer } from '@entities/Article/model/slice/articleDetailsSlice';
import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { addCommentFormReducer } from 'features/addComment/model/slice/addCommentFormSlice';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slice';
import { articlePageReducer } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { TReducerList } from 'shared/lib/ui/DynamicModuleLoader';

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
