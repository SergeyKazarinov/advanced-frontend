import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from '@app/App';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { StoreProvider } from '@app/providers/StoreProvider';
import { ForceUpdateProvider } from '@shared/lib/render/forceUpdate';

import '@shared/config/i18n/i18n';

import '@app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение');
}
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AnimatePresence>
      <StoreProvider>
        <ErrorBoundary>
          <ForceUpdateProvider>
            <DndProvider backend={HTML5Backend}>
              <App />
            </DndProvider>
          </ForceUpdateProvider>
        </ErrorBoundary>
      </StoreProvider>
    </AnimatePresence>
  </BrowserRouter>,
);
