import { NotificationList } from '@entities/Notification';
import { FC, memo } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { Popover } from 'shared/ui/Popups';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton: FC<NotificationButtonProps> = ({ className }) => (
  <Popover
    className={classNames(s.notificationButton, {}, [className])}
    trigger={(
      <Button theme={ThemeButtonEnum.CLEAR}>
        <IoMdNotificationsOutline size={28} className={s.inverted} />
      </Button>
    )}
  >
    <NotificationList className={s.notifications} />
  </Popover>
);

export default memo(NotificationButton);
