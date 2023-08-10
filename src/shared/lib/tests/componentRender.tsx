import { IStateSchema, StoreProvider } from '@app/providers/StoreProvider';
// eslint-disable-next-line
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@shared/config/i18n/i18nForTests';
import { ThemeEnum } from '@shared/const/theme';
import { render } from '@testing-library/react';
import { FC, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line
import '@app/styles/index.scss';

interface componentRenderOptionsProps {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
  theme?: ThemeEnum;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptionsProps;
}

export const TestProvider: FC<TestProviderProps> = ({ children, options = {} }) => {
  const { route = '/', theme = ThemeEnum.DARK } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={options.asyncReducers} initialState={options.initialState as IStateSchema}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`stories ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptionsProps = {},
) => render(<TestProvider options={options}>{component}</TestProvider>);
