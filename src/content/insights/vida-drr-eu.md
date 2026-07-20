---
title: "ViDA DRR — EU 디지털 보고 의무화 분석"
date: 2026-04-29
category: "Global Tax"
author: "도상 컨설팅팀"
summary: "EU VAT in the Digital Age (ViDA) 패키지의 Digital Reporting Requirements 핵심 분석. 2030년 7월 시행, SAP DRC 영향, 한국 다국적 기업의 EU 자회사 대응 권고."
tags: ["ViDA", "DRR", "EU VAT", "eInvoice", "Peppol", "SAP DRC"]
featured: true
readMin: 11
---

EU Council ECOFIN(EU 재무장관회의)은 2024년 11월 5일 **VAT in the Digital Age** (이하 ViDA) 패키지에 정치적 합의를 이루었고, 2025년 EU Council Directive로 정식 채택되었습니다. 본 분석은 ViDA의 3개 축 중 **Digital Reporting Requirements (DRR)**에 초점을 맞춰, 한국 다국적 기업의 EU 자회사가 직면할 실무 영향과 SAP DRC 기반 대응 옵션을 정리합니다.

본 글은 도상 컨설팅팀이 진행한 다수의 EU 자회사 SAP DRC PoC 경험을 토대로 작성되었으며, 모든 일정·시점은 EU Council 공식 발표 기준입니다. 각 회원국 자체 시스템 변경은 별도 검토가 필요합니다.

## 1. ViDA 패키지 개요

ViDA는 EU VAT 시스템의 디지털 시대 적응을 목적으로 한 종합 패키지로, 다음 3개 축으로 구성됩니다.

| 축 | 영문 | 핵심 내용 |
|---|---|---|
| **DRR** | Digital Reporting Requirements | 국경 간 B2B 거래의 실시간 디지털 보고 의무화 |
| **Platform Economy** | Platform Economy VAT | 단기 숙박·승차 공유 플랫폼의 deemed supplier 책임 |
| **SVR** | Single VAT Registration | 다국가 운영 기업의 단일 VAT 등록 확대 |

본 글은 **DRR 축에 한정**합니다. Platform Economy와 SVR은 별도 분석에서 다룹니다.

## 2. DRR — 핵심 시행 일정

EU Council 공식 합의(2024-11-05) 기준 DRR 적용 일정:

| 시점 | 내용 |
|---|---|
| 2025 | EU Council Directive 정식 채택 + 회원국 transposition 시작 |
| 2027.01.01 | SVR 우선 시행 (DRR 준비 단계) |
| **2030.07.01** | **DRR 본격 시행 — 국경 간 B2B 거래 eInvoice + 실시간 보고 의무화** |
| 2035.01.01 | 회원국 자체 eInvoice 시스템의 EU 표준 정합 의무 완료 |

> 회원국별 자체 시스템(예: 슬로바키아 IS EFA, 폴란드 KSeF, 프랑스 PPF/PDP)은 2035년까지 EU 표준에 맞추어야 합니다. 2025~2030년 사이 회원국 선행 시스템은 이행기 운영입니다.

## 3. DRR의 3대 핵심 요건

### 3.1 EN 16931 표준 의무

모든 국경 간 B2B eInvoice는 **EN 16931 (European Standard for electronic invoicing)** 데이터 모델을 따라야 합니다. 회원국 자체 표준은 EN 16931의 syntax/extension으로 매핑 가능해야 합니다.

### 3.2 실시간 디지털 보고

거래 발생 후 일정 시간 내 (지침상 2 working days, 회원국별 단축 가능) 거래 데이터를 자국 세무당국에 제출해야 합니다. 기존의 정기 신고(예: EU Sales List, VIES)는 단계적 폐지됩니다.

### 3.3 정기 신고 제도 폐지

**VIES (VAT Information Exchange System)** 등 분기·월 단위 종합 신고 제도가 실시간 보고로 대체됩니다. 즉 거래 시점에 데이터가 송신되며, 사후 종합 보고 의무는 사라집니다.

## 4. SAP 환경에 미치는 영향

SAP S/4HANA 운영 기업은 다음 4개 영역에서 변경이 불가피합니다.

### 4.1 SAP DRC (Document and Reporting Compliance) 활성화

DRC가 EU 회원국별 시나리오를 표준 제공하므로, 우선 활성화가 가장 안정적인 경로입니다. 다만 다음 보강이 필요합니다:

1. **EN 16931 출력 포맷 매핑** — 자국 syntax 추가 (예: UBL, CII)
2. **Peppol AP 연결** — 회원국 정부 게이트웨이 또는 Peppol BIS 3.0
3. **재시도 정책** — 2-day SLA 내 응답 보장

### 4.2 마스터 데이터 정비

거래처 VAT ID 검증 정확도가 핵심입니다. EN 16931은 BT-31 Seller VAT identifier에 ISO 3166 + 회원국 형식을 강제합니다.

### 4.3 데이터 거버넌스

거래 → DRC → AP → 정부 게이트웨이의 4-단계 흐름에서 SoD(Segregation of Duties) 통제가 필요합니다. 도상 컨설팅팀은 다음 4개 권한 객체 분리를 권고합니다:

- 발행 권한
- AP 전송 권한
- 응답 처리 권한
- 대사·정정 권한

### 4.4 Statutory Reporting 통합

기존 VIES·Intrastat 신고 로직은 단계적 폐지·축소됩니다. SAP 환경에서 해당 보고 자동화 모듈의 deactivate·archive 일정을 사전 수립해야 합니다.

## 5. 한국 다국적 기업의 EU 자회사 — 실무 영향

### 5.1 영향 받는 거래

한국 본사를 둔 다음 EU 자회사 거래가 영향 받습니다:

| 거래 유형 | DRR 적용 | 비고 |
|---|---|---|
| EU 자회사 → 다른 EU 자회사 (B2B 국경 간) | ✅ 의무 | 본 분석 주 대상 |
| EU 자회사 → EU 외 (한국 본사 포함) | 회원국별 | 일부 회원국 강제 적용 |
| EU 자회사 내 동일국 거래 (B2B) | 회원국 자체 규정 | 회원국별 조기 시행 |
| B2C 거래 | 회원국 옵션 | 본 패키지 직접 적용 외 |

### 5.2 실무 우선순위

1. EU 자회사 SAP DRC 활성화 PoC (2027 이전)
2. 회원국 선행 시스템 동시 대응 (Slovakia 2026, France 2026~2027 등)
3. 마스터 데이터 정비 (VAT ID, 분류 코드)
4. 한국 본사 IT·세무 부서의 EU 회원국별 거버넌스 체계 구축

### 5.3 회원국 선행 사례 활용

ViDA 본격 시행(2030) 이전에 다음 회원국이 자체 eInvoice 시스템을 우선 시행하므로, 도입 경험을 ViDA 대비에 활용 가능합니다:

- **Slovakia** (2026.01~) — IS EFA, Peppol 5-corner
- **France** (2026.09~ B2B 의무화 일정 조정 진행 중) — PPF/PDP 모델
- **Poland** (KSeF, 일정 재조정) — 정부 중앙 게이트웨이
- **Germany** (2025.01~ 수신 의무, 2027~ 발행 단계 의무) — Xrechnung·ZUGFeRD

## 6. 도상 권고 — 단계적 접근

| 단계 | 시점 | 작업 | 핵심 산출 |
|---|---|---|---|
| Sprint 1 | 2025.Q4 ~ 2026.Q1 | EU 자회사 SAP 환경 진단 + DRC 활성화 검토 | 진단 보고서 |
| Sprint 2 | 2026 | 회원국 선행 시스템 우선 대응 (Slovakia/France 등) | 회원국별 PoC |
| Sprint 3 | 2027 ~ 2028 | SVR 적용 + 마스터 데이터 정비 | 데이터 정합성 보고서 |
| Sprint 4 | 2029 | DRR Pre-production 검증 + AP 전략 확정 | 운영 시뮬레이션 |
| Sprint 5 | 2030.07 시점 | DRR 본격 운영 + KPI 측정 | 운영 안정화 보고서 |

## 7. 결론

ViDA DRR은 단순한 신고 양식 변경이 아니라 **EU VAT 운영 패러다임의 근본적 전환**입니다. 정기 신고 → 실시간 보고로의 이행은 SAP 환경에서 데이터·통제·인력 거버넌스의 동시 재설계를 요구합니다.

한국 다국적 기업의 EU 자회사는 2030년 시행을 기다리지 말고 **2026년부터 회원국 선행 사례 대응을 통해 DRR 대비 역량을 사전 확보**해야 합니다. 도상 컨설팅팀은 SAP DRC 기반 4~12주 회원국별 PoC 패키지를 운영합니다.

---

*본 분석은 일반 정보 제공을 목적으로 하며, 개별 거래의 세무·법무 자문이 아닙니다. 회원국별 시행 세부는 변경 가능하며, 의사결정 전 자체 법무·감사인 검토를 권고합니다. 출처: EU Council ECOFIN 2024-11-05 합의, EU Commission Taxation 공식 ViDA 자료.*
