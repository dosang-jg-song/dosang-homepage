# Dosang LLC — Homepage (Astro)

도상유한책임회사 (Dosang LLC) 공식 홈페이지 — `dosang.kr`

## 기술 스택

- **Framework**: Astro 4.16 (정적 사이트 생성기)
- **Styling**: Vanilla CSS Variables (디자인 토큰 v0.1)
- **Fonts**: Noto Sans KR (Google Fonts)
- **Form**: Web3Forms (Contact 폼)
- **Hosting**: GitHub Pages (CNAME → dosang.kr, 메일플러그 NS)
- **CI/CD**: GitHub Actions (push to main → 자동 배포)

## 로컬 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
├── content/
│   ├── config.ts          # Content Collections 스키마 (insights / solutions)
│   ├── insights/          # 컨설팅 블로그 마크다운
│   └── solutions/         # 솔루션 카탈로그 마크다운
├── layouts/
│   └── BaseLayout.astro   # 전 페이지 공통 레이아웃 (SEO·OG 메타)
├── pages/
│   ├── index.astro        # 홈 (9 섹션)
│   ├── solutions/das.astro
│   └── insights/index.astro
├── components/            # 페이지 컴포넌트 (Phase 1B에서 추가)
└── styles/
    └── tokens.css         # 디자인 토큰 v0.1 단일 출처
public/
├── CNAME                  # dosang.kr
└── dosang-logo.svg
```

## 콘텐츠 운영

- 블로그 글 추가: `src/content/insights/{slug}.md` 작성 → PR 머지 → 자동 배포
- 솔루션 카탈로그 추가: `src/content/solutions/{code}.md` 작성

## 디자인 시스템

- 디자인 토큰: `src/styles/tokens.css` (단일 출처)
- 컬러 팔레트, 타이포 스케일, 간격, 모션 모두 토큰화
- 변형·창작 표기 금지 (디자인 브리프 v1.0 §13)

## 회사 정보

- 도상유한책임회사 (Dosang LLC)
- 대표: 송재곤 | 사업자등록번호: 253-87-03688 | 법인등록번호: 180115-0000224
- 부산광역시 남구 용호로42번길 104-11, 사무동 1층
- jg.song@dosang.kr | https://dosang.kr
