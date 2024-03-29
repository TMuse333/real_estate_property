import './index.css'
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RouteProvider } from './context/context';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <RouteProvider>
      
    </RouteProvider>
      <App />
    </BrowserRouter>
  </StrictMode>
);