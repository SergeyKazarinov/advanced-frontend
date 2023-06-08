import { FC } from "react";
import s from './LangSwitcher.module.scss';
import { useTranslation } from "react-i18next";
import Button, { ThemeButtonEnum } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate= () => {
    i18n.changeLanguage(i18n.language === "ru" ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(s.langSwitcher, {}, [className])}
      theme={ThemeButtonEnum.CLEAR}
      onClick={toggleTranslate}
    >
      {t('Language')}
    </Button>
  )
}

export default LangSwitcher;