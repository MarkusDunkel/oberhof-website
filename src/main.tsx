import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProviders } from './app-providers';

if (typeof window !== 'undefined') {
  const redirect = window.sessionStorage.getItem('redirect');
  if (redirect) {
    window.sessionStorage.removeItem('redirect');
    window.history.replaceState(null, '', redirect);
  }
}

const AppTree = (
  <React.StrictMode>
    <HelmetProvider>
      <AppProviders>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </AppProviders>
    </HelmetProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, AppTree);
} else {
  createRoot(rootElement).render(AppTree);
}
