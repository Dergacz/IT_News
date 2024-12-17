import { App, ThemeProvider } from 'app';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../config/i18n/i18n';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
);
