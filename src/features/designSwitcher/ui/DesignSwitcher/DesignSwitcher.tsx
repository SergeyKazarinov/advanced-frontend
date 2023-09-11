import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { getFeatureFlag, updateFeatureFlags } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { ListBox } from '@shared/ui/redesigned/Popups';
import { Skeleton } from '@shared/ui/redesigned/Skeleton';
import { HStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

const DesignSwitcher: FC = () => {
  const { t } = useTranslation('main');
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      content: t('New'),
      value: 'new',
    },
    {
      content: t('Old'),
      value: 'old',
    },
  ];

  const handleChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          userId: authData.id,
          features: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap();
      setIsLoading(false);
    }
  };

  return (
    <HStack>
      <TextComponent text={t('Design Variang')} />
      {isLoading ? (
        <Skeleton width={120} height={40} border="20px" />
      ) : (
        <ListBox onChange={handleChange} items={items} value={isAppRedesigned ? 'new' : 'old'} />
      )}
    </HStack>
  );
};

export default memo(DesignSwitcher);
