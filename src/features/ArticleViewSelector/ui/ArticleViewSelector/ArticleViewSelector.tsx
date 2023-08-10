import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineTable } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';
import { ArticleViewEnum } from '@entities/Article';
import { classNames } from '@shared/lib/classNames';
import { Button, ThemeButtonEnum } from '@shared/ui/Button';

import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewEnum;
  onViewClick?: (view: ArticleViewEnum) => void;
}

const viewTypes = [
  {
    view: ArticleViewEnum.SMALL,
    Icon: AiOutlineTable,
  },
  {
    view: ArticleViewEnum.BIG,
    Icon: BsList,
  },
];

const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({
  className,
  view,
  onViewClick,
}) => {
  const { t } = useTranslation();

  const handleClick = (newView: ArticleViewEnum) => () => {
    onViewClick?.(newView);
  };
  return (
    <div className={classNames(s.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ThemeButtonEnum.CLEAR}
          onClick={handleClick(viewType.view)}
          className={classNames('', {
            [s.viewSelected]: viewType.view === view,
          })}
        >
          <viewType.Icon size={28} />
        </Button>
      ))}
    </div>
  );
};

export default memo(ArticleViewSelector);
