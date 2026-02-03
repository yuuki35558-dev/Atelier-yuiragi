import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yuuki35558-dev.github.io/Atelier-yuiragi/',
  output: 'static',
  devOptions: { port: 4321 },
  devToolbar: { enabled: false },
  build: { outDir: 'docs', sitemap: true },
});
