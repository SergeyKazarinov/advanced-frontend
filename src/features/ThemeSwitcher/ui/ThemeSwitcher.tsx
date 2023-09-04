import { FC, memo, useCallback } from 'react';
import { saveJsonSettings } from '@entities/User';
import ThemeIcon from '@shared/assets/icons/theme-dark.svg';
import { classNames } from '@shared/lib/classNames/classNames';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useTheme } from '@shared/lib/hooks/useTheme/useTheme';
import { Button, ThemeButtonEnum } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Button className={classNames('', {}, [className])} onClick={onToggleHandler} theme={ThemeButtonEnum.CLEAR}>
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  );
};

export default memo(ThemeSwitcher);
