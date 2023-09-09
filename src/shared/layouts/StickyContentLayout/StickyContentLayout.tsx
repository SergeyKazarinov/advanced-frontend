import { FC, memo, ReactElement } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

const StickyContentLayout: FC<StickyContentLayoutProps> = ({ className, content, left, right }) => (
  <div className={classNames(s.stickyContentLayout, {}, [className])}>
    {left && <div className={s.left}>{left}</div>}
    <div className={s.content}>{content}</div>
    {right && <div className={s.right}>{right}</div>}
  </div>
);

export default memo(StickyContentLayout);
