import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';
import { toggleFeatures } from '@shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@shared/ui/redesigned/Skeleton';
import { VStack } from '@shared/ui/redesigned/Stack';

import { useNotifications } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames('', {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack max gap="16" className={classNames('', {}, [className])}>
      {notifications?.map((item) => <NotificationItem key={item.id} notification={item} />)}
    </VStack>
  );
};

export default memo(NotificationList);
