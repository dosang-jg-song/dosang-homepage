---
title: "S/4HANA Conversion — Custom Code Migration 전략"
date: 2026-04-20
category: "SAP 전환"
author: "도상 컨설팅팀"
summary: "Brownfield 시나리오에서의 Simplification Item 분석 절차. SPDD/SPAU·ATC 검증·Functional Equivalence 단계 정리."
tags: ["S/4HANA", "Conversion", "Brownfield", "Custom Code", "ATC"]
featured: true
readMin: 12
---

S/4HANA Conversion(Brownfield)에서 가장 큰 리스크는 커스텀 코드입니다. 본 글은 도상 컨설팅팀의 Fortune 500 OEM Conversion 경험을 토대로 Custom Code Migration의 5단계 절차를 정리합니다.

## 1. 절차 — 5 Steps

| Step | 활동 | 산출물 |
|---|---|---|
| 1. Inventory | SAP Readiness Check + Custom Code Analyzer | 영향도 보고서 |
| 2. Simplification Item Analysis | SI Catalog 매핑 | SI 영향도 매트릭스 |
| 3. SPDD/SPAU | Repository·Customizing 조정 | 변경 로그 |
| 4. ATC Strict Mode | S/4HANA Strict Check 검증 | ATC 결과 |
| 5. Functional Equivalence | 회귀 테스트 | 비교 보고서 |

## 2. Simplification Item — 핵심 영향 영역

- 데이터 모델 변경 (BSEG → ACDOCA 통합)
- BAPI/RFC 시그니처 변경
- 트랜잭션 코드 deprecation (예: MM01 → MM01H)
- 표준 보고서 대체 (예: F.01 → S_PL0_*)

## 3. ATC Strict Mode 활용

ABAP Test Cockpit의 S/4HANA Strict Check 변형은 deprecated API·필드 길이 변경·HANA 호환성 이슈를 자동 검출합니다. ATC를 CI 파이프라인에 통합하면 회귀 차단이 가능합니다.

## 4. 함정 — 자주 발생하는 실수

1. SPDD를 SPAU 이전에 처리하지 않음 → 데이터 사전 충돌
2. Customizing은 그대로 두고 코드만 정정 → 런타임 오류
3. 단위 테스트 없이 ATC만 통과시킴 → 의미적 회귀 탐지 실패

## 5. 결론

Custom Code Migration은 단순 코드 정정이 아니라 **데이터 모델·BAPI·표준 변경의 영향 분석**이 본질입니다. 도상 컨설팅팀은 12~16주 Conversion 가속화 패키지를 운영합니다.
