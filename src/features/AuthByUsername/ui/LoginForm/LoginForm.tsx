import {
  Dispatch,
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButtonEnum } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import TextComponent, { TextThemeEnum } from 'shared/ui/Text/TextComponent';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

interface LoginFromProps {
  className?: string;
}

const LoginFrom: FC<LoginFromProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch: ThunkDispatch<
    IStateSchema,
    undefined,
    AnyAction
  > & Dispatch<AnyAction> = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);
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
      {error && <TextComponent text={error} theme={TextThemeEnum.ERROR} />}
      <Button
        className={s.loginBtn}
        theme={ThemeButtonEnum.CLEAR}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Sign In')}
      </Button>
    </div>
  );
};

export default memo(LoginFrom);
