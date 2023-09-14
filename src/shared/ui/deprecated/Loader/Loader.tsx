import { FC } from 'react';

import { classNames } from '@shared/lib/classNames';

import s from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => <span className={classNames(s.loader, {}, [className])} />;

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default Loader;
