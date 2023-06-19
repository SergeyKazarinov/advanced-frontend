import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {
  Dispatch,
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { TReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButtonEnum } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import TextComponent, { TextThemeEnum } from 'shared/ui/TextComponent/TextComponent';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: TReducerList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch: ThunkDispatch<
    IStateSchema,
    undefined,
    AnyAction
  > & Dispatch<AnyAction> = useDispatch();
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(s.loginForm, {}, [className])}>
        <TextComponent title={t('Authorization')} className={s.title} />
        <Input
          autoFocus
          placeholder={t('Enter username')}
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          placeholder={t('Enter password')}
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
