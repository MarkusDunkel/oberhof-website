import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { AppProviders } from './app-providers';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';

export async function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const app = (
    <HelmetProvider context={helmetContext}>
      <AppProviders>
        <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
          <App />
        </StaticRouter>
      </AppProviders>
    </HelmetProvider>
  );

  const appHtml = renderToString(app);
  const headTags = [
    helmetContext.helmet?.title?.toString() ?? '',
    helmetContext.helmet?.meta?.toString() ?? '',
    helmetContext.helmet?.link?.toString() ?? '',
    helmetContext.helmet?.script?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n');

  return { appHtml, headTags };
}
