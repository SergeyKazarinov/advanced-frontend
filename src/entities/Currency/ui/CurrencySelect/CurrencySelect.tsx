import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@shared/ui/deprecated/Popups';
import { ListBox } from '@shared/ui/redesigned/Popups';

import { CurrencyEnum } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  readonly?: boolean;
}

const CurrencySelect: FC<CurrencySelectProps> = ({ className, value, onChange, readonly }) => {
  const { t } = useTranslation('profile');

  const optionList = useMemo(
    () => [
      { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
      { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
      { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
    ],
    [],
  );

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as CurrencyEnum);
    },
    [onChange],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ListBox
          className={className}
          onChange={handleChange}
          value={value}
          defaultValue={t('Specify the currency')}
          label={t('Specify the currency')}
          readonly={readonly}
          items={optionList}
          direction="topRight"
        />
      }
      off={
        <ListBoxDeprecated
          className={className}
          onChange={handleChange}
          value={value}
          defaultValue={t('Specify the currency')}
          label={t('Specify the currency')}
          readonly={readonly}
          items={optionList}
          direction="topRight"
        />
      }
    />
  );
};

export default memo(CurrencySelect);
