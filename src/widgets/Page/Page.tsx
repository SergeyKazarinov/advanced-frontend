import { FC, memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IStateSchema } from '@app/providers/StoreProvider';
import { getScrollSaveByPath, scrollSaveActions } from '@features/ScrollSave';
import { classNames } from '@shared/lib/classNames';
import { toggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfititeScroll';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@shared/lib/hooks/useThrottle/useThrottle';
import { ITestProps } from '@shared/types';

import s from './Page.module.scss';

interface PageProps extends ITestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
  },
};

const Page: FC<PageProps> = ({ className, children, onScrollEnd, ...props }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: IStateSchema) => getScrollSaveByPath(state, pathname));

  useInfiniteScroll({
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  const pageClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => s.pageRedesigned,
    off: () => s.page,
  });

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={wrapperRef}
      className={classNames(pageClass, {}, [className])}
      onScroll={handleScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd && <div className={s.trigger} ref={triggerRef} />}
    </motion.main>
  );
};

export default memo(Page);
