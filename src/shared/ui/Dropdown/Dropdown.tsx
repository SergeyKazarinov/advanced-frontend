import { Menu } from '@headlessui/react';
import {
  FC, Fragment, ReactNode, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { TDropDownDirection } from 'shared/types/ui';
import s from './Dropdown.module.scss';
import { AppLink } from '../AppLink';

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
  direction?: TDropDownDirection
}

const DropDown: FC<DropDownProps> = ({
  className, items, trigger, direction = 'bottomRight',
}) => {
  const { t } = useTranslation();

  return (
    <Menu as="div" className={classNames(s.dropdown, {}, [className])}>
      <Menu.Button className={s.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(s.menu, {}, [s[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(s.item, { [s.active]: active })}
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
