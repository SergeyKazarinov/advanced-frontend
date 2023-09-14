import { useJsonSettings } from '@entities/User';

import ThemeProvider from './ThemeProvider';

const withTheme = (Component: React.ComponentType) =>
  function () {
    const { theme: defaultTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };

export default withTheme;
