import { FC, memo, useCallback } from 'react';
import { BiCopy } from 'react-icons/bi';

import { classNames } from '@shared/lib/classNames';

import { Button, SizeButtonEnum, ThemeButtonEnum } from '../Button';

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
      <Button className={s.copyBtn} theme={ThemeButtonEnum.CLEAR} size={SizeButtonEnum.L} onClick={handleCopy}>
        <BiCopy />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(Code);
