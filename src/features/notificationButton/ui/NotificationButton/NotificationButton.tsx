import { NotificationList } from '@entities/Notification';
import { FC, memo, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/ui/AnimationProvider';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton: FC<NotificationButtonProps> = ({ className }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openModalDrawer = () => {
    setOpenDrawer(true);
  };

  const closeModalDrawer = () => {
    setOpenDrawer(false);
  };

  const trigger = (
    <Button onClick={openModalDrawer} theme={ThemeButtonEnum.CLEAR}>
      <IoMdNotificationsOutline size={28} className={s.inverted} />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(s.notificationButton, {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={s.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={openDrawer} onClose={closeModalDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>

    </div>
  );
};

export default memo(NotificationButton);
