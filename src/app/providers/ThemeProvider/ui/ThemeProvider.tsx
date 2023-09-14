import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@shared/const/localStorage';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeContext } from '@shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: ThemeEnum;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState(initialTheme || fallbackTheme || ThemeEnum.LIGHT);

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
