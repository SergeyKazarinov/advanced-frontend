import { FC, memo } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';

import { ArticleViewEnum } from '@entities/Article';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Card } from '@shared/ui/redesigned/Card';
import { HStack } from '@shared/ui/redesigned/Stack';

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

const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({ className, view, onViewClick }) => {
  const handleClick = (newView: ArticleViewEnum) => () => {
    onViewClick?.(newView);
  };
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={classNames(s.articleViewSelectorRedesigned, {}, [className])} border="round">
          <HStack>
            {viewTypes.map((viewType) => (
              <viewType.Icon
                key={viewType.view}
                size={28}
                className={classNames(s.icon, {
                  [s.notSelected]: viewType.view !== view,
                })}
                onClick={handleClick(viewType.view)}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(s.articleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ThemeButtonEnum.CLEAR}
              onClick={handleClick(viewType.view)}
              className={classNames('', {
                [s.viewSelected]: viewType.view === view,
              })}
            >
              <viewType.Icon size={28} />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
};

export default memo(ArticleViewSelector);
