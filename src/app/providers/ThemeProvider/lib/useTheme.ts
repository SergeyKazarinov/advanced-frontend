import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: ThemeEnum;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
