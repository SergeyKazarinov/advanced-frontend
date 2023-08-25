import { useContext } from 'react';
import { ThemeEnum } from '@shared/const/theme';

import { ThemeContext } from '../../context/ThemeContext';

interface IUseThemeResult {
  toggleTheme: (saveAction?: (theme: ThemeEnum) => void) => void;
  theme: ThemeEnum;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: ThemeEnum) => void) => {
    let newTheme: ThemeEnum;
    switch (theme) {
      case ThemeEnum.DARK:
        newTheme = ThemeEnum.LIGHT;
        break;
      case ThemeEnum.LIGHT:
        newTheme = ThemeEnum.PURE;
        break;
      case ThemeEnum.PURE:
        newTheme = ThemeEnum.DARK;
        break;
      default:
        newTheme = ThemeEnum.LIGHT;
    }
    setTheme?.(newTheme);

    saveAction?.(newTheme);
  };

  return { theme: theme || ThemeEnum.LIGHT, toggleTheme };
};
