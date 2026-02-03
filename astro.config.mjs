// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yuuki35558-dev.github.io',
  base: '/Atelier-yuiragi/',   // ← ★末尾スラッシュ必須
  output: 'static',
  build: {
    outDir: 'docs',
  },
  devToolbar: {
    enabled: false,
  },
});
