import { FC, memo } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import s from './ScrollToTopButton.module.scss';

const ScrollToTopButton: FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <BsFillArrowUpCircleFill className={s.scrollToTopButton} size={32} onClick={handleClick} />;
};

export default memo(ScrollToTopButton);
