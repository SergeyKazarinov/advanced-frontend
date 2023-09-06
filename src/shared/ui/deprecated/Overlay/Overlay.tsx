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

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(Overlay);
