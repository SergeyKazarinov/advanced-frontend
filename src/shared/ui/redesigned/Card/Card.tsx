import { FC, HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './Card.module.scss';

export type TCardVariant = 'normal' | 'outline' | 'light';
export type TCardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: TCardVariant;
  max?: boolean;
  withoutPadding?: boolean;
  padding?: TCardPadding;
}

const mapPaddingToClass: Record<TCardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

const Card: FC<CardProps> = ({ className, children, variant = 'normal', max, padding = '8', ...otherProps }) => {
  const paddingClass = mapPaddingToClass[padding];
  return (
    <div className={classNames(s.card, { [s.max]: max }, [className, s[variant], s[paddingClass]])} {...otherProps}>
      {children}
    </div>
  );
};

export default memo(Card);
