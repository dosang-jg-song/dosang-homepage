---
title: "FD → ABAP 변환의 사실 검증 워크플로"
date: 2026-04-02
category: "AX"
author: "도상 컨설팅팀"
summary: "AI 생성 ABAP 코드의 사실 정확성을 검증하는 도상 자체 워크플로 — 5개 검증 단계와 자동화 도구."
tags: ["AX", "ABAP", "Fact Verification", "Hallucination"]
featured: false
readMin: 8
---

AI 생성 코드의 가장 큰 위험은 **할루시네이션** — 존재하지 않는 BAPI, 잘못된 시그니처, 폐기된 트랜잭션 코드 인용입니다. 본 글은 도상이 운영하는 5단계 사실 검증 워크플로를 정리합니다.

## 1. 5단계 검증

### Step 1. BAPI/Function Module 존재 검증
SAP Note 검색 + S/4HANA SAP API Hub 대조. 폐기·deprecated API 자동 검출.

### Step 2. 시그니처 정확성 검증
SE37 메타데이터와 자동 비교. 파라미터 이름·타입·필수 여부 검증.

### Step 3. 트랜잭션 코드 검증
S/4HANA Simplification Item 카탈로그 대조. ECC 전용 트랜잭션 자동 차단.

### Step 4. 데이터 사전 검증
SE11에서 테이블·필드 실존 확인. 필드 길이·타입 일치 검증.

### Step 5. 비즈니스 로직 검증
인간 ABAP 컨설턴트의 도메인 지식 기반 최종 검토.

## 2. 자동화 도구

도상은 자체 개발한 Code Verification Pipeline을 운영합니다.

<figure class="workflow-fig workflow-fig--vertical">
  <div class="workflow-row">
    <div class="workflow-step workflow-step--terminal">
      <p class="workflow-step-code">INPUT</p>
      <p class="workflow-step-title">AI 생성 코드</p>
    </div>
    <div class="workflow-arrow">↓</div>
    <div class="workflow-step">
      <p class="workflow-step-code">GATE 01</p>
      <p class="workflow-step-title">SAP API Hub 조회</p>
      <p class="workflow-step-sub">존재하지 않는 BAPI·Function 검출</p>
    </div>
    <div class="workflow-arrow">↓</div>
    <div class="workflow-step">
      <p class="workflow-step-code">GATE 02</p>
      <p class="workflow-step-title">SE37 시그니처 비교</p>
      <p class="workflow-step-sub">파라미터 이름·타입·필수 여부 검증</p>
    </div>
    <div class="workflow-arrow">↓</div>
    <div class="workflow-step">
      <p class="workflow-step-code">GATE 03</p>
      <p class="workflow-step-title">SI Catalog 대조</p>
      <p class="workflow-step-sub">S/4HANA Simplification Item 영향도</p>
    </div>
    <div class="workflow-arrow">↓</div>
    <div class="workflow-step">
      <p class="workflow-step-code">GATE 04</p>
      <p class="workflow-step-title">SE11 메타데이터 검증</p>
      <p class="workflow-step-sub">테이블·필드 실존 + 길이·타입 일치</p>
    </div>
    <div class="workflow-arrow">↓</div>
    <div class="workflow-step">
      <p class="workflow-step-code">GATE 05</p>
      <p class="workflow-step-title">Senior 컨설턴트 검토</p>
      <p class="workflow-step-sub">도메인 지식 기반 최종 검증</p>
    </div>
    <div class="workflow-arrow">↓</div>
    <div class="workflow-step workflow-step--terminal">
      <p class="workflow-step-code">OUTPUT</p>
      <p class="workflow-step-title">Production 적용</p>
    </div>
  </div>
  <figcaption class="workflow-caption">FIG.AX-02 — Code Verification Pipeline</figcaption>
</figure>

## 3. 정확도 KPI

- BAPI 할루시네이션 검출률: 99.2%
- 시그니처 오류 검출률: 98.5%
- 폐기 API 차단률: 100%

## 4. 결론

AI 코드는 검증되지 않은 채 사용해서는 안 됩니다. 도상은 검증 자체를 자동화하여 인간 검토 시간을 80% 줄였습니다.
