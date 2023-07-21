import { IStateSchema } from '@app/providers/StoreProvider';
import { getAddCommentFormText } from './getAddCommentFormText';

describe('addCommentForm', () => {
  test('should return comment text', () => {
    const state: DeepPartial<IStateSchema> = {
      addCommentForm: { text: 'comment text' },
    };
    expect(getAddCommentFormText(state as IStateSchema)).toEqual('comment text');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getAddCommentFormText(state as IStateSchema)).toEqual('');
  });
});
