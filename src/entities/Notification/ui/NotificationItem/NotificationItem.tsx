import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { AppLink } from '@shared/ui/deprecated/AppLink';
import { Card as CardDeprecated, CardThemeEnum } from '@shared/ui/deprecated/Card';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { Card } from '@shared/ui/redesigned/Card';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { INotification } from '../../model/types/notification';

import s from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: INotification;
}

const NotificationItem: FC<NotificationItemProps> = ({ className, notification }) => {
  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={classNames(s.notificationItem, {}, [className])}>
          <TextComponent title={notification.title} text={notification.description} />
        </Card>
      }
      off={
        <CardDeprecated theme={CardThemeEnum.OUTLINE} className={classNames(s.notificationItem, {}, [className])}>
          <TextComponentDeprecated title={notification.title} text={notification.description} />
        </CardDeprecated>
      }
    />
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
