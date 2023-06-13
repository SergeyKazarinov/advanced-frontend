import { FC, useEffect, useState } from 'react';
import Button, { ThemeButtonEnum } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
  theme?: ThemeButtonEnum;
}

const BugButton: FC<BugButtonProps> = ({ className, theme }) => {
  const { t } = useTranslation('not-found');
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button theme={theme} onClick={onThrow} className={classNames('', {}, [className])}>
      {t('Throw Error')}
    </Button>
  );
};

export default BugButton;
