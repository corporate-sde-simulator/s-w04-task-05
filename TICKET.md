# FINSERV-4156: Investigate loan eligibility checker giving wrong approvals

**Status:** In Progress · **Priority:** Critical
**Sprint:** Sprint 26 · **Story Points:** 8
**Reporter:** Arun Nair (Credit Risk Lead) · **Assignee:** You (Intern)
**Labels:** `backend`, `javascript`, `finance`, `investigation`
**Task Type:** Code Debugging

---

## Description

The loan eligibility checker is approving applications that should be denied and vice versa. This is a compliance risk.

**DEBUGGING task — no hint comments.**

## Symptoms

- Application with credit score 580 (below 600 threshold) gets approved
- Application with 85% DTI ratio (above 43% max) gets approved
- Some valid applications randomly denied (same input, different results on re-run)

## Acceptance Criteria

- [ ] Root cause found and fixed
- [ ] All unit tests pass
