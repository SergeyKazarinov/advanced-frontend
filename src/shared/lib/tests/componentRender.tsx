import { render } from '@testing-library/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface componentRenderOptionsProps {
  route?: string;
  initialState?: DeepPartial<IStateSchema>
}

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptionsProps = {},
) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={options.initialState as IStateSchema}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
