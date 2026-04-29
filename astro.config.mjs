import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dosang.kr',
  build: { assets: 'assets' },
  trailingSlash: 'ignore',
  compressHTML: true,
  markdown: {
    // Shiki syntax highlighter 비활성화 → 일반 <pre><code>로 렌더링
    // 도상 디자인 토큰(--color-bg-subtle + accent border)이 적용되도록 함
    syntaxHighlight: false,
  },
});
