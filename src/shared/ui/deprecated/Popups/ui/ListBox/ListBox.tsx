import { FC, Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@shared/lib/classNames';
import { TDropDownDirection } from '@shared/types';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';

import popupCls from '../../styles/popup.module.scss';
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
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottomLeft',
  label,
}) => (
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
        <Button disabled={readonly}>{value ?? defaultValue}</Button>
      </HListBox.Button>
      <HListBox.Options className={classNames(s.options, {}, [popupCls[direction]])}>
        {items?.map((item) => (
          <HListBox.Option key={item.value} value={item.value} as={Fragment} disabled={item.disabled}>
            {({ active, selected }) => (
              <li
                className={classNames(
                  '',
                  {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  },
                  [className, popupCls.popup],
                )}
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

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(ListBox);
