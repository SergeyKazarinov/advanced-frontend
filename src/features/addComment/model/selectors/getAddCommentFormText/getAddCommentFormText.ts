import { IStateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: IStateSchema) => state?.addCommentForm?.text || '';
