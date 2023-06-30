import { CurrencyEnum } from '@entities/Currency/model/types/currency';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  readonly?: boolean;
}

const CurrencySelect: FC<CurrencySelectProps> = ({
  className, value, onChange, readonly,
}) => {
  const { t } = useTranslation('profile');

  const optionList = useMemo(() => [
    { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
    { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
    { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
  ], []);

  const handleChange = useCallback((value: string) => {
    onChange?.(value as CurrencyEnum);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Specify the currency')}
      options={optionList}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
};

export default CurrencySelect;
