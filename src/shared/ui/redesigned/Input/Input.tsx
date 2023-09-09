import { ChangeEvent, FC, InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

const Input: FC<InputProps> = ({
  className,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoFocus,
  readonly,
  addonLeft,
  addonRight,
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const mods = {
    [s.readonly]: readonly,
    [s.focused]: isFocus,
    [s.withAddonLeft]: Boolean(addonLeft),
    [s.withAddonRight]: Boolean(addonRight),
  };

  return (
    <div className={classNames(s.inputWrapper, mods, [className])}>
      <div className={s.addonLeft}>{addonLeft}</div>
      <div className={s.caretWrapper}>
        <input
          ref={ref}
          onBlur={onBlur}
          onFocus={onFocus}
          className={classNames(s.input, {}, [])}
          type={type}
          value={value}
          onChange={handleChange}
          readOnly={readonly}
          placeholder={placeholder}
          {...otherProps}
        />
        <div className={s.addonRight}>{addonRight}</div>
      </div>
    </div>
  );
};

export default memo(Input);
