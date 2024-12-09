import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App, ThemeProvider } from 'app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
     <App />
    </ThemeProvider>
  </BrowserRouter>
);
