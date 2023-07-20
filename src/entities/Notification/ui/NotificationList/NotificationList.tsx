import { FC, memo } from 'react';
import { useNotifications } from '@entities/Notification/api/notificationApi';
import { classNames } from 'shared/lib/classNames';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton';
import NotificationItem from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
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
      {notifications?.map((item) => (
        <NotificationItem key={item.id} notification={item} />
      ))}
    </VStack>
  );
};

export default memo(NotificationList);
