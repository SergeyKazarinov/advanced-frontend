import { IStateSchema } from '@app/providers/StoreProvider';

import { getAddCommentFormError } from './getAddCommentFormError';

describe('getAddCommentFormError', () => {
  test('should return addCommentForm error', () => {
    const state: DeepPartial<IStateSchema> = {
      addCommentForm: { error: 'error' },
    };
    expect(getAddCommentFormError(state as IStateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getAddCommentFormError(state as IStateSchema)).toEqual(undefined);
  });
});
