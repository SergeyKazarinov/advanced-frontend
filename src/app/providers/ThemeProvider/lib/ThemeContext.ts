import { createContext } from 'react';

export enum ThemeEnum {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  PURE = 'app_pure_theme',
}

export interface IThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
