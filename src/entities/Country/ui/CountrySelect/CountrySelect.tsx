import { CountryEnum } from '@entities/Country/model/types/country';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';

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
    <Select
      className={classNames('', {}, [className])}
      label={t('Specify the country')}
      options={optionList}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
};

export default CountrySelect;
