import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { AppLink } from '@shared/ui/deprecated/AppLink';
import { Card, CardThemeEnum } from '@shared/ui/deprecated/Card';
import { TextComponent } from '@shared/ui/deprecated/TextComponent';

import { INotification } from '../../model/types/notification';

import s from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: INotification;
}

const NotificationItem: FC<NotificationItemProps> = ({ className, notification }) => {
  const content = (
    <Card theme={CardThemeEnum.OUTLINE} className={classNames(s.notificationItem, {}, [className])}>
      <TextComponent title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification.href) {
    return (
      <AppLink to={notification.href} className={s.link}>
        {content}
      </AppLink>
    );
  }

  return content;
};

export default memo(NotificationItem);
