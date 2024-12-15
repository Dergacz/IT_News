import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App, ThemeProvider } from 'app';
import '../config/i18n/i18n';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
     <App />
    </ThemeProvider>
  </BrowserRouter>
);
