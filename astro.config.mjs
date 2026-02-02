// @ts-check
// astro.config.mjs
import { defineConfig } from 'astro/config';

// GitHub Pages 用設定
// GitHub Pages に docs/ フォルダをアップする前提
export default defineConfig({
  site: 'https://yuuki35558-dev.github.io/Atelier-yuiragi/', // ここは自分のリポジトリURLに変更
  output: 'static',
  // Tailwindなどの統合はなし
  devOptions: {
    port: 4321,
  },
  build: {
    // @ts-ignore
site: 'https://yuuki35558-dev.github.io/Atelier-yuiragi/',

    sitemap: true, // サイトマップ作成
  },
  devToolbar: {
    enabled: false, // 開発用ツールバーを非表示
  },
});


// https://astro.build/config


