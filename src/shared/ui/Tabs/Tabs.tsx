import {
  FC, ReactNode, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import s from './Tabs.module.scss';
import { Card, CardThemeEnum } from '../Card';

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: ITabItem[];
  value: string;
  onTabClick: (tab: ITabItem) => void;
}

const Tabs: FC<TabsProps> = ({
  className, value, tabs, onTabClick,
}) => {
  const handleClick = useCallback((tab: ITabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);
  return (
    <div className={classNames(s.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={s.tab}
          theme={tab.value === value ? CardThemeEnum.NORMAL : CardThemeEnum.OUTLINE}
          onClick={handleClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export default memo(Tabs);
