import {
  ChangeEvent,
  CSSProperties,
  FC,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames } from '@shared/lib/classNames';

import { HStack } from '../Stack';
import { TextComponent } from '../TextComponent';

import s from './Textarea.module.scss';

type HTMLTextareaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly'>;

interface TextareaProps extends HTMLTextareaProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  label?: string;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  styleLabel?: CSSProperties;
}

const Textarea: FC<TextareaProps> = ({
  className,
  value,
  label,
  onChange,
  placeholder,
  autoFocus,
  readonly,
  addonLeft,
  addonRight,
  styleLabel,
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

  const textarea = (
    <div className={classNames(s.textareaWrapper, mods, [className])}>
      <div className={s.addonLeft}>{addonLeft}</div>
      <textarea
        ref={ref}
        onBlur={onBlur}
        onFocus={onFocus}
        className={s.textarea}
        value={value}
        onChange={handleChange}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={s.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <HStack align="center" max>
        <TextComponent text={label} className={s.label} style={styleLabel} />
        {textarea}
      </HStack>
    );
  }

  return textarea;
};

export default memo(Textarea);
