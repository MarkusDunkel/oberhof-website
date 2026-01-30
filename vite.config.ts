import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'node:path';

const RESPONSIVE_WIDTHS = '320;640;960;1280;1600';

function createImageDirectives(url: URL) {
  const isPhotoAsset = /\/src\/assets\/(photos|images)\//.test(url.pathname);
  if (!isPhotoAsset) return new URLSearchParams();

  const ext = url.pathname.split('.').pop()?.toLowerCase();

  // SVG niemals über imagetools rasterisieren
  if (ext === 'svg') return new URLSearchParams();

  // jpg -> jpeg für MIME/Sharp-Konsistenz
  const fallbackFormat = ext === 'jpg' ? 'jpeg' : (ext ?? 'jpeg');

  // Default-Qualität (wird vom Import überschrieben, falls dort gesetzt)
  const defaultQuality = fallbackFormat === 'png' ? '70' : '72';

  // ✅ Wichtig: Direktiven aus dem Import übernehmen und nur Defaults ergänzen
  const params = new URLSearchParams(url.searchParams);

  if (!params.has('w')) params.set('w', RESPONSIVE_WIDTHS);
  if (!params.has('format'))
    params.set('format', `avif;webp;${fallbackFormat}`);
  if (!params.has('as')) params.set('as', 'picture');
  if (!params.has('quality')) params.set('quality', defaultQuality);

  // Sinnvoller Default, aber Import darf es überschreiben
  if (!params.has('withoutEnlargement'))
    params.set('withoutEnlargement', 'true');

  return params;
}

export default defineConfig({
  base: '/',
  plugins: [react(), imagetools({ defaultDirectives: createImageDirectives })],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
