import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';
import { Loader } from '@shared/ui/deprecated/Loader';

import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(s.pageLoader, {}, [className])}>
    <Loader />
  </div>
);

export default memo(PageLoader);
