---
title: "Germany Xrechnung vs ZUGFeRD — 무엇을 선택해야 하나"
date: 2026-04-22
category: "Global Tax"
author: "도상 컨설팅팀"
summary: "독일 B2G 의무 표준 Xrechnung 3.0과 하이브리드 표준 ZUGFeRD 2.4의 차이. SAP DRC 매핑 시 선택 기준."
tags: ["Germany", "Xrechnung", "ZUGFeRD", "SAP DRC"]
featured: false
readMin: 8
---

독일은 EN 16931 기반의 두 가지 eInvoice 표준을 운영합니다. **Xrechnung 3.0**(공공조달 의무·KoSIT 관리)과 **ZUGFeRD 2.4**(민간 하이브리드·FeRD 관리). 같은 EN 16931 코어를 공유하지만 운영 맥락이 다릅니다.

## 1. 핵심 차이

| 항목 | Xrechnung 3.0 | ZUGFeRD 2.4 |
|---|---|---|
| 형식 | XML 단독 | PDF/A-3 + XML 임베드 |
| 의무 영역 | 공공조달(B2G) | 민간(B2B) |
| 관리 기관 | KoSIT (정부) | FeRD (민간 표준화) |
| BR-DE 룰 | KoSIT Schematron | (적용 안 함) |
| Wachstumschancengesetz 후 의무 | 2025-01-01 모든 사업자 수신 의무 | (선택) |

## 2. SAP DRC 매핑 시 권고

- **B2G 거래 비중 30%+ 기업**: Xrechnung 정본 발행 + ZUGFeRD 보조 (PDF 시각 보존)
- **B2B 중심 기업**: ZUGFeRD 단독 + 거래처 요청 시 Xrechnung 별도 발행
- **다국가 운영**: PEPPOL 표준 우선 + 독일은 Xrechnung·ZUGFeRD 동시 지원

## 3. 도입 체크리스트

1. KoSIT 공식 Schematron 검증기로 BR-DE 룰 풀 매핑
2. ZUGFeRD Profile (MINIMUM·BASIC·EN16931·EXTENDED) 결정
3. SAP DRC Document Type Setup
4. PDF/A-3 컴플라이언스 검증 (Adobe Acrobat 또는 veraPDF)

## 4. 결론

선택의 본질은 거래처 분포입니다. B2G 비중과 다국가 PEPPOL 노출도를 먼저 측정하십시오. 도상 컨설팅팀은 독일 Xrechnung·ZUGFeRD 매핑 표준 패키지를 운영합니다.
