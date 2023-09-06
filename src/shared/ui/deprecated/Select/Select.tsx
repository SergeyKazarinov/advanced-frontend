import { ChangeEvent, useMemo } from 'react';
import { classNames, TMods } from '@shared/lib/classNames';

import { ISelectOption } from './Select.types';

import s from './Select.module.scss';

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: ISelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const Select = <T extends string>({ className, label, options, value, onChange, readonly }: SelectProps<T>) => {
  const optionList = useMemo(
    () =>
      options?.map((item) => (
        <option key={item.content} className={s.option} value={item.value}>
          {item.content}
        </option>
      )),
    [options],
  );
  const mods: TMods = {};

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(s.select, mods, [className])}>
      {label && <span className={classNames(s.label, { [s.disabled]: readonly }, [])}>{`${label} >  `}</span>}
      <select className={s.selectElement} value={value} onChange={handleChange} disabled={readonly}>
        {optionList}
      </select>
    </div>
  );
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default Select;
