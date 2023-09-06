import { FC, memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { NotificationList } from '@entities/Notification';
import { classNames } from '@shared/lib/classNames';
import { Button, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Drawer } from '@shared/ui/deprecated/Drawer';
import { Popover } from '@shared/ui/deprecated/Popups';

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
        <Popover className={classNames(s.notificationButton, {}, [className])} trigger={trigger}>
          <NotificationList className={s.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={openDrawer} onClose={closeModalDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
};

export default memo(NotificationButton);
