import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yuuki35558-dev.github.io',
  base: '/Atelier-yuiragi/',
  output: 'static',
  build: {
    outDir: 'docs',
  },
});
