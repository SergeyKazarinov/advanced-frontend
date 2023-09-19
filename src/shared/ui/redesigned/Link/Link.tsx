import { FC, memo, ReactNode } from 'react';

import { classNames } from '@shared/lib/classNames';

import s from './Link.module.scss';

type TTargetVariants = '_blank' | '_parent' | '_self' | '_top';

interface LinkProps {
  className?: string;
  href: string;
  target?: TTargetVariants;
  children: ReactNode;
  underline?: boolean;
}

const Link: FC<LinkProps> = ({ className, href, target = '_blank', children, underline = false }) => {
  const mods = {
    [s.underline]: underline,
  };
  return (
    <a className={classNames(s.link, mods, [className])} href={href} target={target}>
      {children}
    </a>
  );
};

export default memo(Link);
