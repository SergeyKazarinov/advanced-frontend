import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButtonEnum } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButtonEnum.CLEAR}
      onClick={toggleTranslate}
    >
      {short ? t('En') : t('English')}
    </Button>
  );
};

export default LangSwitcher;
