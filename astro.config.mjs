// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yuuki35558-dev.github.io/Atelier-yuiragi/', // GitHub Pages URL
  output: 'static', // 静的サイトとして出力

  devOptions: {
    port: 4321, // 開発サーバーポート
  },

  devToolbar: {
    enabled: false, // 開発用ツールバーを非表示
  },

  build: {
    outDir: 'docs', // GitHub Pages 用のフォルダ
    sitemap: true, // サイトマップ作成
  },
});
