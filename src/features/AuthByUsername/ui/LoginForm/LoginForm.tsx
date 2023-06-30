import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { TextComponent, TextThemeEnum } from 'shared/ui/TextComponent';
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

  const errorMessage = t('The username or password you entered is incorrect');
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(s.loginForm, {}, [className])}>
        <TextComponent title={t('Authorization') ?? ''} className={s.title} />
        <Input
          autoFocus
          placeholder={t('Enter username') ?? ''}
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          placeholder={t('Enter password') ?? ''}
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {error && <TextComponent text={errorMessage} theme={TextThemeEnum.ERROR} />}
        <Button
          className={s.loginBtn}
          theme={ThemeButtonEnum.CLEAR}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Sign In')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
