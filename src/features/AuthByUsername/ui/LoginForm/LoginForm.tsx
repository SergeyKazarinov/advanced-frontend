import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useForceUpdate } from '@shared/lib/render/forceUpdate';
import { DynamicModuleLoader, TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@shared/ui/deprecated/Input';
import { TextComponent as TextComponentDeprecated, TextThemeEnum } from '@shared/ui/deprecated/TextComponent';
import { Button } from '@shared/ui/redesigned/Button';
import { Input } from '@shared/ui/redesigned/Input';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import s from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: TReducerList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const forceUpdate = useForceUpdate();

  const errorMessage = t('The username or password you entered is incorrect');
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [onSuccess, dispatch, username, password, forceUpdate]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack gap="16" className={classNames(s.loginFormRedesigned, {}, [className])}>
            <TextComponent title={t('Authorization') ?? ''} className={s.title} />
            <Input autoFocus placeholder={t('Enter username') ?? ''} value={username} onChange={onChangeUsername} />
            <Input
              placeholder={t('Enter password') ?? ''}
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            {error && <TextComponent text={errorMessage} variant="error" />}
            <Button className={s.loginBtn} onClick={onLoginClick} disabled={isLoading}>
              {t('Sign In')}
            </Button>
          </VStack>
        }
        off={
          <VStack className={classNames(s.loginForm, {}, [className])}>
            <TextComponentDeprecated title={t('Authorization') ?? ''} className={s.title} />
            <InputDeprecated
              autoFocus
              placeholder={t('Enter username') ?? ''}
              value={username}
              onChange={onChangeUsername}
            />
            <InputDeprecated
              placeholder={t('Enter password') ?? ''}
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            {error && <TextComponentDeprecated text={errorMessage} theme={TextThemeEnum.ERROR} />}
            <ButtonDeprecated
              className={s.loginBtn}
              theme={ThemeButtonEnum.CLEAR}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Sign In')}
            </ButtonDeprecated>
          </VStack>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
