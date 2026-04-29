---
title: "Peppol 5-Corner 모델 해설 — Access Point부터 정부 게이트웨이까지"
date: 2026-04-15
category: "Global Tax"
author: "도상 컨설팅팀"
summary: "EU-VIDA 시대를 대비한 Peppol 5-Corner 모델의 작동 원리와 SAP DRC 통합 패턴."
tags: ["PEPPOL", "5-corner", "EU-VIDA", "SAP DRC"]
featured: false
readMin: 10
---

EU-VIDA(VAT in the Digital Age) 패키지가 2030년 발효를 앞두고, Peppol은 사실상의 표준 인프라로 자리잡고 있습니다. 본 해설은 4-corner와 5-corner의 차이, 그리고 SAP DRC 운영 시 핵심 고려사항을 정리합니다.

## 1. 4-Corner vs 5-Corner

**4-Corner (전통 Peppol)**: Sender → Sender AP → Receiver AP → Receiver

**5-Corner (정부 게이트웨이 추가)**: 위 흐름에 정부 게이트웨이(예: 슬로바키아 IS EFA, 폴란드 KSeF)가 추가되어 양 AP가 정부에 사본을 전송. 슬로바키아·폴란드·프랑스(2027 예정) 등 다수 국가 채택.

## 2. SAP DRC 통합 패턴

| 패턴 | 적용 시나리오 | 특징 |
|---|---|---|
| Direct AP | 단일 국가 운영 | SAP DRC ↔ AP 직접 연결 |
| Multi-tenant AP | 다국가 운영 | AP가 국가별 라우팅 처리 |
| AP + Tax Engine | 50개국+ | Tax Engine이 AP·정부 게이트웨이 중계 |

## 3. 자가 호스팅 AP vs 위탁

- **자가 호스팅**: 데이터 주권·통제 우위. 다만 KYC·OpenPeppol 인증 필수.
- **위탁 AP**: 운영 부담 적음. 거래량·민감도에 따라 비용 vs 통제 트레이드오프.

## 4. 결론

5-Corner 채택 국가는 빠르게 늘고 있습니다. 다국가 SAP 운영 기업은 AP 전략을 단일화하지 말고, 국가별 거래량·정부 게이트웨이 의무 여부에 따라 단계적 결정을 권고합니다.
