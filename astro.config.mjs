import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dosang.kr',
  build: { assets: 'assets' },
  trailingSlash: 'ignore',
  compressHTML: true,
});
