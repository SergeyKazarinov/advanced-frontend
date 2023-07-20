import { Menu } from '@headlessui/react';
import {
  FC, Fragment, ReactNode, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { TDropDownDirection } from 'shared/types/ui';
import s from './Dropdown.module.scss';
import { AppLink } from '../../../AppLink';
import popupCls from '../../styles/popup.module.scss';

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

const DropDown: FC<DropDownProps> = ({
  className, items, trigger, direction = 'bottomRight',
}) => {
  const { t } = useTranslation();

  return (
    <Menu as="div" className={classNames('', {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.btn}>
        {trigger}
      </Menu.Button>
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
              // eslint-disable-next-line
              <Menu.Item as={AppLink} to={item.href} key={index} disabled={item.disabled}>
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

export default memo(DropDown);
