import { FC, memo, useEffect, useState } from 'react';

import { ScrollToTopButton } from '@features/ScrollToTopButton';
import { classNames } from '@shared/lib/classNames';
import { VStack } from '@shared/ui/redesigned/Stack';

import s from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
  className?: string;
}

const ScrollToolbar: FC<ScrollToolbarProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 200);
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <VStack
      onScroll={handleScroll}
      className={classNames(s.scrollToolbar, {}, [className])}
      justify="center"
      align="center"
      max
    >
      {isVisible && <ScrollToTopButton />}
    </VStack>
  );
};

export default memo(ScrollToolbar);
