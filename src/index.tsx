import { App, ThemeProvider } from 'app';
import React from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './shared/config/i18n/i18n';
import { Provider } from 'react-redux';
import store from 'app/store/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);
