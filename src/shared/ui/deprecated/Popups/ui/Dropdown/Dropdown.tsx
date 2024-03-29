import { FC, Fragment, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';

import { classNames } from '@shared/lib/classNames';
import { TDropDownDirection } from '@shared/types';

import { AppLink } from '../../../AppLink';

import popupCls from '../../styles/popup.module.scss';
import s from './Dropdown.module.scss';

export interface IDropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: IDropdownItem[];
  trigger: ReactNode;
  direction?: TDropDownDirection;
}

const DropDown: FC<DropDownProps> = ({ className, items, trigger, direction = 'bottomRight' }) => {
  const { t } = useTranslation();

  return (
    <Menu as="div" className={classNames('', {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(s.menu, {}, [popupCls[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(s.item, { [popupCls.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                // eslint-disable-next-line
                key={index}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            // eslint-disable-next-line
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(DropDown);
