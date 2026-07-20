# dosang.kr 인사이트 콘텐츠 추가 가이드

이 저장소(`dosang-homepage`)는 GitHub에 있으므로, **어느 PC에서든 GitHub Desktop에 로그인만 되어 있으면** 콘텐츠를 추가할 수 있습니다. 이 문서는 저장소와 함께 이동하므로 항상 최신 절차를 여기서 확인할 수 있습니다.

## 어디에 무엇을 두나

- **인사이트 글**: `src/content/insights/{slug}.md` (파일명 `{slug}`이 그대로 URL이 됩니다 → `https://dosang.kr/insights/{slug}/`)
- **sitemap**: `public/sitemap.xml` 에 새 글 URL을 한 줄 추가
- 빌드 산출물(`dist/`)과 의존성(`node_modules/`)은 커밋하지 않습니다(`.gitignore`가 자동 제외).

## 프론트매터 스키마 (글 맨 위 `---` 블록)

| 항목 | 설명 |
|---|---|
| title | 글 제목 |
| date | 게시일 `YYYY-MM-DD` |
| category | `Global Tax` / `SAP 전환` / `Tax Compliance` / `AX` 중 하나 |
| author | 기본값 `도상 컨설팅팀` |
| summary | 목록·홈 카드에 노출되는 한두 문장 요약 |
| tags | 태그 배열 (예: `["US", "SAP"]`) |
| featured | `true`/`false` (강조 여부) |
| readMin | 예상 읽기 시간(분, 숫자) |

### 예시

```
---
title: "글 제목"
date: 2026-07-20
category: "Global Tax"
author: "도상 컨설팅팀"
summary: "목록에 보일 요약 문장."
tags: ["US", "SAP"]
featured: false
readMin: 10
---

본문은 첫 문단이 리드(큰 글씨)로 표시됩니다. 이후 `## 1. 소제목` 형태의
번호형 섹션, 표, 코드블록을 사용할 수 있고, 맨 아래에 면책 문구를 둡니다.
```

## 새 글 추가 절차 (어느 PC에서든)

1. GitHub Desktop에서 `dosang-homepage` 저장소를 엽니다(없으면 Clone).
2. `src/content/insights/` 에 새 `{slug}.md` 를 작성합니다(위 예시 참고).
3. `public/sitemap.xml` 에 새 글 URL을 추가합니다.
4. GitHub Desktop에서 바뀐 파일을 확인 → Summary 입력 → **Commit to main** → **Push origin**.
5. 몇 분 뒤 자동 배포가 끝나면 `https://dosang.kr/insights/{slug}/` 에서 확인합니다.

## Claude(Cowork)로 초안 만들기

`Homepage` 프로젝트에서 원문이나 주제를 주면, 도상 톤 리라이팅 → 공신력 자료 사실검증 → 이 저장소에 `.md` 반영 → 빌드검증까지 도와줍니다. 마지막 **Commit·Push만 GitHub Desktop에서 직접** 눌러 주세요.

## 배포·동작 참고

- 배포: `main`에 push → GitHub Actions(`.github/workflows/deploy.yml`)가 빌드 → GitHub Pages로 배포 → `dosang.kr`.
- 홈 첫 화면 "최신 인사이트" 섹션은 **날짜순 최신 3개**를 자동으로 보여줍니다.
- 전체 목록(`/insights/`)에는 모든 글이 표시됩니다.

## 주의 (Cowork 브리지 사용 시)

Cowork(클라우드)에서 이 저장소를 다룰 때 git 명령이 실행되면 `.git/index.lock` 잠금 파일이 남아 커밋이 막힐 수 있습니다. GitHub Desktop 커밋이 "another process/locked" 오류로 막히면, Finder에서 저장소 폴더 → `⌘+Shift+.`(숨김표시) → `.git/index.lock` 파일을 삭제하세요.
