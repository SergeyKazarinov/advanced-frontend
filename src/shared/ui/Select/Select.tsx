import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import { TMods, classNames } from 'shared/lib/classNames';
import s from './Select.module.scss';

export interface ISelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: ISelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select: FC<SelectProps> = ({
  className, label, options, value, onChange, readonly,
}) => {
  const optionList = useMemo(() => options?.map((item) => (
    <option
      key={item.content}
      className={s.option}
      value={item.value}
    >
      {item.content}
    </option>
  )), [options]);
  const mods: TMods = {

  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(s.select, mods, [className])}>
      {label && <span className={classNames(s.selectElement, { [s.disabled]: readonly }, [])}>{`${label} >  `}</span>}
      <select
        className={s.selectElement}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};

export default memo(Select);
