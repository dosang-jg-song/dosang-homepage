---
title: "AI 기반 ABAP 자동 생성 — 정확도 검증"
date: 2026-04-10
category: "AX"
author: "도상 컨설팅팀"
summary: "FD → ABAP 변환의 정합성 검증과 도상 자체 QA 파이프라인."
tags: ["AX", "ABAP", "AI", "Code Generation", "QA"]
featured: true
readMin: 10
---

AI 기반 ABAP 자동 생성은 도상의 자체 개발방법론(AX)의 핵심입니다. 본 글은 정확도 검증 메커니즘과 도상 자체 QA 파이프라인을 정리합니다.

## 1. AX 워크플로 — 4단계

```
1. FD (Functional Design) 작성 (구조화 마크다운)
2. AX 엔진이 ABAP 초안 생성
3. ABAP Code Reviewer가 자동 검수 (Clean ABAP 원칙)
4. 인간 ABAP 컨설턴트 최종 검증
```

## 2. 정확도 측정 지표

| 지표 | 목표 | 도상 PoC 결과 |
|---|---|---|
| 컴파일 통과율 | 95%+ | 97% |
| ATC Strict Check 통과 | 90%+ | 88% |
| 단위 테스트 자동 작성률 | 80%+ | 75% |
| 의미적 회귀 (인간 검증) | 95%+ | 93% |

## 3. 자체 QA 파이프라인

도상은 다음 4개 게이트를 운영합니다:

1. **Static Analysis Gate** — ATC Strict Check + Code Inspector
2. **Unit Test Gate** — 자동 생성된 단위 테스트의 80%+ 통과
3. **Semantic Diff Gate** — FD ↔ 생성 코드의 의미적 일치도 측정
4. **Human Review Gate** — Senior ABAP 컨설턴트 최종 승인

## 4. 한계 — 무엇을 자동화하지 않는가

- 복잡한 비즈니스 로직 (산업별 도메인 지식 필수)
- 성능 최적화 (HANA SQL 튜닝)
- 보안 검토 (RBAC·SoD 영향)
- 마이그레이션 시나리오의 데이터 보전 검증

## 5. 결론

AI는 ABAP 작성 시간을 50~70% 단축하지만, 마지막 5%의 정확성은 여전히 인간의 영역입니다. 도상 컨설팅팀은 AX 가속화 패키지를 운영합니다.
