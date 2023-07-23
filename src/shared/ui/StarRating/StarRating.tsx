import { FC, memo, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useHover } from '@shared/lib/hooks/useHover';
import s from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (starCount: number) => void;
  size?: number;
  selectedStars?: number
}

const StarRating: FC<StarRatingProps> = ({
  className,
  onSelect,
  size = 30,
  selectedStars = 0,
}) => {
  const starts = [1, 2, 3, 4, 5];
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const handleHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const handleLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const handleClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };
  return (
    <div className={classNames(s.starRaiting, {}, [className])}>
      {starts.map((starNumber) => (
        <AiFillStar
          fill="none"
          strokeWidth={90}
          className={classNames(s.star, {
            [s.hovered]: currentStarsCount >= starNumber,
            [s.selected]: isSelected,
          }, [])}
          size={size}
          key={starNumber}
          onMouseEnter={handleHover(starNumber)}
          onMouseLeave={handleLeave}
          onClick={handleClick(starNumber)}
        />
      ))}
    </div>
  );
};

export default memo(StarRating);
