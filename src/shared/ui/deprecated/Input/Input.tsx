import { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  readonly?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoFocus,
  readonly,
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  const isCaretVisible = isFocus && !readonly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const mods = {
    [s.readonly]: readonly,
  };

  return (
    <div className={classNames(s.inputWrapper, mods, [className])}>
      {placeholder && <div className={s.placeHolder}>{`${placeholder} > `}</div>}
      <div className={s.caretWrapper}>
        <input
          ref={ref}
          onBlur={onBlur}
          onFocus={onFocus}
          className={classNames(s.input, {}, [])}
          type={type}
          value={value}
          onChange={handleChange}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && <span className={s.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(Input);
