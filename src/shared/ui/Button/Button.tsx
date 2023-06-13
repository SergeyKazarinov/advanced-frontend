import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
}

const Button: FC<ButtonProps> = ({
  className, children, theme, ...otherProps
}) => (
  <button type="button" className={classNames(s.button, {}, [className, s[theme]])} {...otherProps}>
    {children}
  </button>
);

export default Button;
