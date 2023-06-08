import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from "app/providers/ThemeProvider/lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT;

const ThemeProvider:FC = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme); 

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])
  
  return ( 
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;