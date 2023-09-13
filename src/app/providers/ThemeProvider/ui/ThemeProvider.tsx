import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@entities/User';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeContext } from '@shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: ThemeEnum;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState(initialTheme || defaultTheme || ThemeEnum.LIGHT);

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
