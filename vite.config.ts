import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'node:path';

const RESPONSIVE_WIDTHS = '320;640;960;1280;1600';

function createImageDirectives(url: URL) {
  const isPhotoAsset = /\/src\/assets\/(photos|images)\//.test(url.pathname);
  if (!isPhotoAsset) {
    return new URLSearchParams();
  }

  const extension = url.pathname.split('.').pop()?.toLowerCase() ?? 'jpeg';
  const fallbackFormat = extension === 'jpg' ? 'jpeg' : extension;

  return new URLSearchParams({
    w: RESPONSIVE_WIDTHS,
    format: `avif;webp;${fallbackFormat}`,
    as: 'picture',
    quality: '78',
  });
}

export default defineConfig({
  base: '/',
  plugins: [react(), imagetools({ defaultDirectives: createImageDirectives })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
