import { FC, ReactNode } from 'react';
import { Popover as PopoverUI } from '@headlessui/react';
import { classNames } from '@shared/lib/classNames';
import { TDropDownDirection } from '@shared/types';

import popupCls from '../../styles/popup.module.scss';
import s from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: TDropDownDirection;
  children: ReactNode;
}

const Popover: FC<PopoverProps> = ({ className, trigger, direction = 'bottomLeft', children }) => (
  <PopoverUI className={classNames(s.popover, {}, [className, popupCls.popup])}>
    <PopoverUI.Button as="div" className={popupCls.btn}>
      {trigger}
    </PopoverUI.Button>
    <PopoverUI.Panel className={classNames(s.panel, {}, [popupCls[direction], popupCls.menu])}>
      {children}
    </PopoverUI.Panel>
  </PopoverUI>
);

export default Popover;
