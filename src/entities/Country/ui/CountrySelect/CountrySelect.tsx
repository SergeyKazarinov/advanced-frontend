import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@shared/ui/Popups';
import { CountryEnum } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  readonly?: boolean;
}

const CountrySelect: FC<CountrySelectProps> = ({
  className, value, onChange, readonly,
}) => {
  const { t } = useTranslation('profile');

  const optionList = useMemo(() => [
    { value: CountryEnum.Armenia, content: CountryEnum.Armenia },
    { value: CountryEnum.Belarus, content: CountryEnum.Belarus },
    { value: CountryEnum.Kazakhstan, content: CountryEnum.Kazakhstan },
    { value: CountryEnum.Russia, content: CountryEnum.Russia },
    { value: CountryEnum.Ukraine, content: CountryEnum.Ukraine },
  ], []);

  const handleChange = useCallback((value: string) => {
    onChange?.(value as CountryEnum);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      onChange={handleChange}
      value={value}
      defaultValue={t('Specify the country')}
      label={t('Specify the country')}
      readonly={readonly}
      items={optionList}
      direction="topRight"
    />
  );
};

export default CountrySelect;
