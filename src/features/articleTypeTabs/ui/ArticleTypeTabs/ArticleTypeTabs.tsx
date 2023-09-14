import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypeEnum } from '@entities/Article';
import { ToggleFeatures } from '@shared/lib/features';
import { ITabItem, Tabs as TabsRedesigned } from '@shared/ui/deprecated/Tabs';
import { Tabs } from '@shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleTypeEnum;
  onChangeType: (type: ArticleTypeEnum) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ className, value, onChangeType }) => {
  const { t } = useTranslation('article');

  const typeTabs = useMemo<ITabItem[]>(
    () => [
      {
        value: ArticleTypeEnum.ALL,
        content: t('All'),
      },
      {
        value: ArticleTypeEnum.IT,
        content: t('IT'),
      },
      {
        value: ArticleTypeEnum.ECONOMICS,
        content: t('Economics'),
      },
      {
        value: ArticleTypeEnum.SCIENCE,
        content: t('Science'),
      },
    ],
    [t],
  );

  const handleChangeType = useCallback(
    (tab: ITabItem) => {
      onChangeType(tab.value as ArticleTypeEnum);
    },
    [onChangeType],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Tabs direction="column" className={className} tabs={typeTabs} value={value} onTabClick={handleChangeType} />}
      off={<TabsRedesigned className={className} tabs={typeTabs} value={value} onTabClick={handleChangeType} />}
    />
  );
};

export default memo(ArticleTypeTabs);
