import { FC, memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { NotificationList } from '@entities/Notification';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Drawer } from '@shared/ui/deprecated/Drawer';
import { Popover as PopoverDeprecated } from '@shared/ui/deprecated/Popups';
import { Popover } from '@shared/ui/redesigned/Popups';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<IoMdNotificationsOutline size={28} onClick={openModalDrawer} />}
      off={
        <ButtonDeprecated onClick={openModalDrawer} theme={ThemeButtonEnum.CLEAR}>
          <IoMdNotificationsOutline size={28} className={s.inverted} />
        </ButtonDeprecated>
      }
    />
  );

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Popover className={classNames(s.notificationButton, {}, [className])} trigger={trigger}>
              <NotificationList className={s.notifications} />
            </Popover>
          }
          off={
            <PopoverDeprecated className={classNames(s.notificationButton, {}, [className])} trigger={trigger}>
              <NotificationList className={s.notifications} />
            </PopoverDeprecated>
          }
        />
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
