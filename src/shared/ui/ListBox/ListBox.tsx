import { Listbox as HListBox } from '@headlessui/react';
import {
  FC, Fragment, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { TDropDownDirection } from 'shared/types/ui';
import { Button } from '../Button';
import { HStack } from '../Stack';
import s from './ListBox.module.scss';

export interface IListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: IListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: TDropDownDirection;
  label?: string;
}

const ListBox: FC<ListBoxProps> = ({
  className, items, value, defaultValue, onChange, readonly, direction = 'bottomLeft', label,
}) => (
  <HStack gap="4">
    {label && <span className={classNames('', { [s.disabled]: readonly }, [])}>{`${label} > `}</span>}
    <HListBox
      as="div"
      className={classNames(s.listBox, {}, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      <HListBox.Button
        className={s.btn}
      >
        <Button disabled={readonly}>
          {value ?? defaultValue}
        </Button>
      </HListBox.Button>
      <HListBox.Options className={classNames(s.options, {}, [s[direction]])}>
        {items?.map((item) => (
          <HListBox.Option
            key={item.value}
            value={item.value}
            as={Fragment}
            disabled={item.disabled}
          >
            {({ active, selected }) => (
              <li
                className={classNames(s.listBox, { [s.active]: active, [s.disabled]: item.disabled }, [className])}
              >
                {selected && <>!!</>}
                {item.value}
              </li>
            )}
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  </HStack>
);

export default memo(ListBox);
