---
title: "BEPS Pillar Two — 한국 다국적 기업의 SAP 대응 영향"
date: 2026-04-08
category: "Tax Compliance"
author: "도상 컨설팅팀"
summary: "OECD Pillar Two GloBE 규칙의 한국 적용. 글로벌 최저한세 15%를 SAP 환경에서 산출하기 위한 데이터·시스템 요건."
tags: ["BEPS", "Pillar Two", "GloBE", "Korea", "SAP"]
featured: false
readMin: 10
---

OECD BEPS Pillar Two는 다국적 기업의 글로벌 최저한세 15%를 강제하는 국제 합의입니다. 한국은 2024년 시행, 2025년 첫 신고를 마쳤고, 2026년부터 본격 운영 단계입니다.

## 1. 핵심 메커니즘

- **GloBE Income**: 회계 손익에서 출발해 영구·시간 차이 조정
- **Effective Tax Rate (ETR)**: GloBE Income 대비 실효세율
- **Top-up Tax**: ETR < 15% 시 차이만큼 추가 과세

## 2. SAP 환경에서의 데이터 요건

| 데이터 | 출처 SAP 모듈 | 비고 |
|---|---|---|
| 국가별 손익 | SAP S/4HANA Group Reporting | 회계 표준 일관성 |
| 이연법인세 | SAP S/4HANA Group Reporting + Excel 보정 | 계정·세무 차이 매핑 |
| 자산·인건비 (실질활동 면제) | HR + Asset Accounting | Substance-based Income Exclusion |
| 신고 데이터 (GIR) | 별도 신고 시스템 | XML 표준 |

## 3. SAP Group Reporting 활용

기존 SAP BPC/BFC를 운영 중인 기업은 SAP Group Reporting의 Pillar Two 컴플라이언스 시나리오를 활성화 가능합니다. 다만 다음 보강이 필요합니다:

1. 회사 코드별 ETR 계산 로직
2. CbC Report ↔ GloBE 매핑
3. 신고용 GIR(GloBE Information Return) 생성

## 4. 한국 운영 기업의 우선 과제

- 첫 신고(2025년) 결과의 외부 감사인 검증 결과 분석
- 안전기준(Safe Harbour) 적용 가능성 재검토
- 자회사 경영진 보고 자동화 (분기 ETR 추정)

## 5. 결론

Pillar Two는 단순 신고가 아니라 **글로벌 데이터 거버넌스 과제**입니다. 도상 컨설팅팀은 SAP Group Reporting 기반 Pillar Two 가속화 패키지를 운영합니다.
