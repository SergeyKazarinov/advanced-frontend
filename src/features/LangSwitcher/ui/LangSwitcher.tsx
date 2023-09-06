import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Button } from '@shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button className={classNames('', {}, [className])} onClick={toggleTranslate} variant="clear">
          {short ? t('En') : t('English')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ThemeButtonEnum.CLEAR}
          onClick={toggleTranslate}
        >
          {short ? t('En') : t('English')}
        </ButtonDeprecated>
      }
    />
  );
};

export default memo(LangSwitcher);
