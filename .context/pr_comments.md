# PR Review - Form validation rule engine (by Deepak Gupta)

## Reviewer: Ravi Iyer
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `ruleEngine.js`

> **Bug #1:** Required field check allows whitespace-only strings as valid so a space passes validation
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `validationRules.js`

> **Bug #2:** Email regex allows emails without domain so user-at is accepted as valid
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Deepak Gupta**
> Acknowledged. I have documented the issues for whoever picks this up.
