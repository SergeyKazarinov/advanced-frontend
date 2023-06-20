import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './TextComponent.module.scss';

export enum TextThemeEnum {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeEnum;
}

const Text: FC<TextProps> = ({
  className, title, text, theme = TextThemeEnum.PRIMARY,
}) => (
  <div className={(classNames(s.textComponent, {}, [className, s[theme]]))}>
    {title && <p className={s.title}>{title}</p>}
    {text && <p className={s.text}>{text}</p>}
  </div>
);

export default memo(Text);
