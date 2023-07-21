import {
  FC, HTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from '@shared/lib/classNames';
import s from './Card.module.scss';

export enum CardThemeEnum {
  NORMAL = 'normal',
  OUTLINE = 'outline',

}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardThemeEnum
}

const Card: FC<CardProps> = ({
  className, children, theme = CardThemeEnum.NORMAL, ...otherProps
}) => (
  <div className={classNames(s.card, {}, [className, s[theme]])} {...otherProps}>
    {children}
  </div>
);

export default memo(Card);
