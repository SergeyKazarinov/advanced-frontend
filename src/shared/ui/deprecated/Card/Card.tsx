import { FC, HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './Card.module.scss';

export enum CardThemeEnum {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardThemeEnum;
  max?: boolean;
}

const Card: FC<CardProps> = ({ className, children, theme = CardThemeEnum.NORMAL, max, ...otherProps }) => (
  <div className={classNames(s.card, { [s.max]: max }, [className, s[theme]])} {...otherProps}>
    {children}
  </div>
);

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(Card);
