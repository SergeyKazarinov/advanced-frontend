import { useContext } from 'react';
import { ThemeEnum } from '@shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@shared/const/localStorage';
import { ThemeContext } from '../../context/ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: ThemeEnum;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
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

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || ThemeEnum.LIGHT, toggleTheme };
};
