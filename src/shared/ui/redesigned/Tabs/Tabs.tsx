import { FC, memo, useCallback } from 'react';
import { classNames } from '@shared/lib/classNames';

import { Card } from '../Card';
import Flex, { TFlexDirection, TFlexGap } from '../Stack/Flex/Flex';

import { ITabItem } from './Tabs.types';

import s from './Tabs.module.scss';

interface TabsProps {
  className?: string;
  tabs: ITabItem[];
  value: string;
  onTabClick: (tab: ITabItem) => void;
  direction?: TFlexDirection;
  gap?: TFlexGap;
}

const Tabs: FC<TabsProps> = ({ className, value, tabs, onTabClick, direction, gap }) => {
  const handleClick = useCallback(
    (tab: ITabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );
  return (
    <Flex direction={direction} gap={gap} align="start" className={classNames(s.tabs, {}, [className])}>
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            key={tab.value}
            className={classNames(s.tabs, { [s.selected]: isSelected })}
            variant={isSelected ? 'light' : 'normal'}
            onClick={handleClick(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};

export default memo(Tabs);
