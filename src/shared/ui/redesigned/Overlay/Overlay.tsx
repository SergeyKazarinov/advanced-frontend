import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';

import s from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay: FC<OverlayProps> = ({ className, onClick }) => (
  <div className={classNames(s.overlay, {}, [className])} onClick={onClick} />
);

export default memo(Overlay);
