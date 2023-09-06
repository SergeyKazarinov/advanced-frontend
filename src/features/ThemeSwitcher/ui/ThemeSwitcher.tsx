import { FC, memo, useCallback } from 'react';
import { saveJsonSettings } from '@entities/User';
import ThemeIcon from '@shared/assets/icons/theme.svg';
import ThemeIconDeprecated from '@shared/assets/icons/theme-dark.svg';
import { classNames } from '@shared/lib/classNames/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useTheme } from '@shared/lib/hooks/useTheme/useTheme';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@shared/ui/deprecated/Icon';
import { Button } from '@shared/ui/redesigned/Button';
import { Icon } from '@shared/ui/redesigned/Icon';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button
          className={classNames('', {}, [className])}
          onClick={onToggleHandler}
          style={{ height: 30, width: 30 }}
          variant="clear"
        >
          <Icon Svg={ThemeIcon} width={30} height={30} />
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          onClick={onToggleHandler}
          theme={ThemeButtonEnum.CLEAR}
        >
          <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
        </ButtonDeprecated>
      }
    />
  );
};

export default memo(ThemeSwitcher);
