import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButtonEnum.CLEAR}
    >
      {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default memo(ThemeSwitcher);
