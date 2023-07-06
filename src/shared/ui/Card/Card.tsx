import {
  FC, HTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode
}

const Card: FC<CardProps> = ({ className, children, ...otherProps }) => (
  <div className={classNames(s.card, {}, [className])} {...otherProps}>
    {children}
  </div>
);

export default memo(Card);
