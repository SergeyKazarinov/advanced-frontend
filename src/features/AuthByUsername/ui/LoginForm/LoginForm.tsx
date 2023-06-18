import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFromProps {
  className?: string;
}

const LoginFrom: FC<LoginFromProps> = ({ className }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('Enter username')}
      // value={value}
      // onChange={onChange}
      />
      <Input
        placeholder={t('Enter password')}
        type="password"
      // value={value}
      // onChange={onChange}
      />
      <Button className={s.loginBtn}>
        {t('Sign In')}
      </Button>
    </div>
  );
};

export default LoginFrom;
