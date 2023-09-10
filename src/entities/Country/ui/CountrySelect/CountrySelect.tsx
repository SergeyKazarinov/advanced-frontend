import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleFeatures } from '@shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@shared/ui/deprecated/Popups';
import { ListBox } from '@shared/ui/redesigned/Popups';

import { CountryEnum } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  readonly?: boolean;
}

const CountrySelect: FC<CountrySelectProps> = ({ className, value, onChange, readonly }) => {
  const { t } = useTranslation('profile');

  const optionList = useMemo(
    () => [
      { value: CountryEnum.Armenia, content: CountryEnum.Armenia },
      { value: CountryEnum.Belarus, content: CountryEnum.Belarus },
      { value: CountryEnum.Kazakhstan, content: CountryEnum.Kazakhstan },
      { value: CountryEnum.Russia, content: CountryEnum.Russia },
      { value: CountryEnum.Ukraine, content: CountryEnum.Ukraine },
    ],
    [],
  );

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as CountryEnum);
    },
    [onChange],
  );

  const props = {
    className,
    onChange: handleChange,
    value,
    defaultValue: t('Specify the country'),
    label: t('Specify the country'),
    readonly,
    items: optionList,
    direction: 'topRight' as const,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      // eslint-disable-next-line
      on={<ListBox {...props} />}
      off={
        <ListBoxDeprecated
          className={className}
          onChange={handleChange}
          value={value}
          defaultValue={t('Specify the country')}
          label={t('Specify the country')}
          readonly={readonly}
          items={optionList}
          direction="topRight"
        />
      }
    />
  );
};

export default CountrySelect;
