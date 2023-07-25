import { LOCAL_STORAGE_THEME_KEY } from '@shared/const/localStorage';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeContext } from '@shared/lib/context/ThemeContext';
import {
  FC, ReactNode, useMemo, useState,
} from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.DARK;

interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: ThemeEnum
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
