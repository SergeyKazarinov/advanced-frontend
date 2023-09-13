import { FC, memo, useCallback } from 'react';
import { BiCopy } from 'react-icons/bi';

import { classNames } from '@shared/lib/classNames';

import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

const Code: FC<CodeProps> = ({ className, text }) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(s.code, {}, [className])}>
      <BiCopy className={s.copyBtn} onClick={handleCopy} />
      <code>{text}</code>
    </pre>
  );
};

export default memo(Code);
