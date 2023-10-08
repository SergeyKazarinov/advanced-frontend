// eslint-disable-next-line kss-fsd-imports/layer-imports
import { IArticlePageSchema } from '@pages/ArticlesPage';

import { IAddCommentFormSchema } from '../types/addCommentFormSchema';

import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

const data: IAddCommentFormSchema = {
  text: '',
};

describe('addCommentFormSlice', () => {
  const state: DeepPartial<IAddCommentFormSchema> = data;
  test('setText reducer', () => {
    expect(addCommentFormReducer(state as IArticlePageSchema, addCommentFormActions.setText('New text'))).toEqual({
      ...data,
      text: 'New text',
    });
  });
});
