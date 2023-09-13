import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { Button as ButtonDeprecated } from '@shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@shared/ui/deprecated/Input';
import { Button } from '@shared/ui/redesigned/Button';
import { Card } from '@shared/ui/redesigned/Card';
import { Input } from '@shared/ui/redesigned/Input';
import { HStack } from '@shared/ui/redesigned/Stack';

import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import s from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: TReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const handleChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const handleSendComment = useCallback(() => {
    onSendComment(text);
    dispatch(addCommentFormActions.setText(''));
  }, [dispatch, text, onSendComment]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="round" max>
            <HStack
              data-testid="AddCommentForm"
              gap="16"
              max
              justify="between"
              className={classNames(s.addCommentFormRedesigned, {}, [className])}
            >
              <Input
                data-testid="AddCommentForm.Input"
                className={s.input}
                placeholder={t('Enter message text')}
                value={text}
                onChange={handleChange}
              />
              <Button data-testid="AddCommentForm.Button" onClick={handleSendComment}>
                {t('Send')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            data-testid="AddCommentForm"
            max
            justify="between"
            className={classNames(s.addCommentForm, {}, [className])}
          >
            <InputDeprecated
              data-testid="AddCommentForm.Input"
              className={s.input}
              placeholder={t('Enter message text')}
              value={text}
              onChange={handleChange}
            />
            <ButtonDeprecated data-testid="AddCommentForm.Button" onClick={handleSendComment}>
              {t('Send')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
