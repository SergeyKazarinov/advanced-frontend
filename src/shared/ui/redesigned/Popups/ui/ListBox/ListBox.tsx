import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@shared/lib/classNames';
import { TDropDownDirection } from '@shared/types';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';

import popupCls from '../../styles/popup.module.scss';
import s from './ListBox.module.scss';

export interface IListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  items?: IListBoxItem<T>[];
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: TDropDownDirection;
  label?: string;
}

const ListBox = <T extends string>({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottomLeft',
  label,
}: ListBoxProps<T>) => {
  const selectedItem = useMemo(() => items?.find((item) => item.value === value), [items, value]);
  return (
    <HStack gap="4">
      {label && <span className={classNames('', { [popupCls.disabled]: readonly }, [])}>{`${label} > `}</span>}
      <HListBox
        as="div"
        className={classNames('', {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button as="div" className={popupCls.btn}>
          <Button variant="filled" disabled={readonly}>
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(s.options, {}, [popupCls[direction], popupCls.menu])}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} as={Fragment} disabled={item.disabled}>
              {({ active, selected }) => (
                <li
                  className={classNames(
                    s.item,
                    {
                      [s.active]: active,
                      [popupCls.disabled]: item.disabled,
                      [popupCls.selected]: selected,
                    },
                    [className, popupCls.popup],
                  )}
                >
                  {selected}
                  {item.value}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};

export default ListBox;
