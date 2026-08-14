---
title: "Slovakia VAT 2026 — eInvoice 의무화 분석"
date: 2026-04-18
category: "Global Tax"
author: "도상 컨설팅팀"
summary: "Phase별 의무 시점·SAP DRC 영향·5-corner 모델 권고. 다국적 SAP 운영 환경에서 슬로바키아 법인이 마주할 실무 영향과 SAP DRC 기반 대응 옵션 정리."
tags: ["Slovakia", "VAT", "eInvoice", "PEPPOL", "SAP DRC"]
featured: true
readMin: 12
---

슬로바키아는 2026년 1월부로 B2B eInvoice를 의무화했습니다. EU 내 후발 도입국이지만, PEPPOL 기반의 5-corner 모델을 표준으로 채택했다는 점에서 향후 EU-VIDA 정합성을 가장 빨리 확보할 가능성이 큰 사례입니다. 슬로바키아 법인을 둔 다국적 SAP 운영 기업이라면 지금이 실무 영향과 SAP DRC 기반 대응 옵션을 따져볼 시점입니다.

이 분석은 도상 컨설팅팀이 2025년 4분기에 진행한 슬로바키아 자회사 3개사 PoC를 기반으로 합니다. 모든 수치는 PoC 환경에서 측정된 값이며, 실제 운영 환경에서는 마스터 데이터 정합성과 관할권 설정에 따라 차이가 있을 수 있습니다.

## 1. 규제 개요 — IS EFA의 도입

슬로바키아 재무부(MF SR)는 `Informačný Systém Elektronickej Fakturácie (IS EFA)`를 중앙 청구 게이트웨이로 운영합니다. 기존 *Kontrolný výkaz* 신고 체계와 병행되며, 2026년 1월부 단계적으로 강제 적용되고 있습니다.

### 1.1 적용 범위 및 일정

| Phase | Effective Date | Scope | Threshold |
|---|---|---|---|
| Phase I | 2026.01.01 | B2G | 전 거래 |
| Phase II | 2026.04.01 | B2B (대형) | 매출 €5M+ |
| Phase III | 2026.10.01 | B2B (전체) | 전 거래 |
| Phase IV | 2027.01.01 | B2C (선택) | 합산 보고 |

### 1.2 채택 표준 — PEPPOL 5-corner

슬로바키아는 PEPPOL BIS Billing 3.0을 기준 포맷으로 채택했습니다. 5-corner 모델에서 IS EFA가 5번째 corner인 정부 청구 게이트웨이 역할을 수행합니다. 공급자(Sender)와 구매자(Receiver)는 각자의 Access Point(AP)를 통해 IS EFA에 사본을 전송해야 합니다.

## 2. SAP 환경에 미치는 영향

기존 SAP DRC(Document & Reporting Compliance)를 이미 운영 중인 조직이라면 표준 컴플라이언스 시나리오 활성화로 대부분 대응됩니다. 다만 다음 4개 영역은 사용자 정의를 피하기 어렵습니다.

1. **마스터 데이터**: 슬로바키아 사업자등록번호(IČ DPH)의 형식 검증
2. **분류 코드**: UNCL 1001 보다 상세한 슬로바키아 로컬 코드 매핑
3. **예외 처리**: 거래 취소/수정 시 IS EFA의 reference 체인 관리
4. **재시도 정책**: AP 응답 지연 시 Outbound queue 거버넌스

## 3. 대응 옵션 비교

| 옵션 | 장점 | 단점 | 권고 시나리오 |
|---|---|---|---|
| A. SAP DRC 표준 활성 | 라이선스 내 즉시 가능 | 슬로바키아 로컬 코드 별도 매핑 | 기존 DRC 운영 + 거래량 보통 |
| B. SAP DRC + Custom AP | 표준 우회 없이 확장성 | 개발·유지보수 비용 | 다국가 동시 운영 |
| C. Third-party Tax Engine | 글로벌 일관성 | 라이선스 부담 | 50개국+ 운영 |

## 4. 거버넌스 통제 (SoD)

발행 → AP 전송 → IS EFA 응답 수신의 3개 권한을 분리해야 합니다. SAP 표준 PFCG 역할에는 다음 4개 권한 객체의 신설을 권고합니다.

- `Z_DRC_SK_SUBMIT` (발행 권한)
- `Z_DRC_SK_AP_TRANSMIT` (AP 전송)
- `Z_DRC_SK_RESPONSE` (응답 처리)
- `Z_DRC_SK_RECONCILE` (대사·정산)

## 5. 권고 — 단계별 접근

| 단계 | 시점 | 작업 |
|---|---|---|
| Sprint 1 | 2025.Q4 | DRC 표준 활성, 마스터 데이터 정비, 테스트 환경 구축 |
| Sprint 2 | 2026.Q1 | B2G 거래 우선 반영 (Phase I 대응) |
| Sprint 3 | 2026.Q2 | B2B 대형 거래 (Phase II 대응) — 매출 €5M+ 식별 |
| Sprint 4 | 2026.Q3 | B2B 전체 거래 (Phase III 대응) |
| Sprint 5 | 2026.Q4 | KPI 측정·운영 안정화 |

## 6. 결론

슬로바키아 IS EFA는 PEPPOL 5-corner 기반의 표준적 구현입니다. SAP DRC를 운영 중인 조직은 표준 시나리오 활성화만으로 70~80%를 커버하지만, 로컬 코드 매핑·재시도 정책·SoD 통제를 포함한 4개 영역은 사용자 정의가 남습니다. 이 부분을 사전 설계 없이 직접 구현하면 운영 리스크로 되돌아옵니다.

도상 컨설팅팀은 2026년 슬로바키아 PoC 결과를 토대로 4~8주 도입 가속화 패키지를 운영합니다. 슬로바키아 법인 보유 기업의 30분 무상 진단 세션을 별도 안내드립니다.

---

*본 분석은 일반 정보 제공을 목적으로 하며, 개별 거래의 세무·법무 자문이 아닙니다. 의사결정 전 자체 법무·감사인 검토를 권고합니다.*
