import { IStateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormError = (state: IStateSchema) => state?.addCommentForm?.error;
