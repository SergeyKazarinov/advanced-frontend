import { ThemeEnum } from '@shared/const/theme';
import { createContext } from 'react';

export interface IThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
