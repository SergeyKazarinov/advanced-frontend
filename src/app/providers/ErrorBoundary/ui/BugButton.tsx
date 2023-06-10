import { FC, useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

const BugButton: FC<BugButtonProps> = ({ className }) => {
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
    <Button onClick={onThrow} className={classNames('', {}, [className])}>
      {t('Throw Error')}
    </Button>
  );
};

export default BugButton;
