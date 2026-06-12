# Beginner Explanatory Guide: FINSERV-4156: Investigate loan eligibility checker giving wrong approvals

> **Task Type**: Service Task  
> **Domain/Focus**: Code Debugging, JavaScript

---

## 1. The Goal (In-Depth Beginner Explanation)

### The Core Problem
The task at hand involves investigating a critical issue within the loan eligibility checker of a financial application. Currently, the system is erroneously approving loan applications that should be denied based on specific criteria, such as credit scores and debt-to-income (DTI) ratios. For instance, an application with a credit score of 580, which is below the acceptable threshold of 600, is being approved. Similarly, an application with a DTI ratio of 85%, exceeding the maximum allowable limit of 43%, is also receiving approval. This malfunction poses a significant compliance risk, as it could lead to financial losses for the institution and potentially harm customers who may not be able to repay their loans.

The root of the problem lies in the logic that governs the approval process. The current implementation may not be correctly applying the validation rules that determine eligibility, leading to inconsistent and incorrect outcomes. Fixing this issue is paramount not only for maintaining the integrity of the loan approval process but also for ensuring that the application adheres to regulatory standards and protects the financial institution from potential legal repercussions.

### Jargon Buster (Key Terms Explained)
* **Credit Score**: A numerical representation of a person's creditworthiness, typically ranging from 300 to 850. A higher score indicates better credit health. For example, a score of 700 is generally considered good, while a score below 600 is often seen as poor.
* **Debt-to-Income (DTI) Ratio**: A financial measure that compares an individual's total monthly debt payments to their gross monthly income. It is expressed as a percentage. For instance, if someone earns $5,000 a month and pays $2,000 in debts, their DTI ratio is 40% ($2,000 / $5,000).
* **Validation Rules**: These are predefined criteria that determine whether an application meets the necessary conditions for approval. For example, a validation rule might state that a credit score must be above 600 and a DTI ratio must be below 43% for a loan to be approved.
* **Compliance Risk**: The potential for financial loss or legal penalties due to failure to adhere to laws, regulations, or internal policies. In this context, approving loans that should be denied can lead to significant compliance risks.

### Expected Outcome
After implementing the solution, the loan eligibility checker should function correctly, ensuring that only applications meeting the specified criteria are approved. 

**Before vs. After Comparison**:
- **Before**: Applications with a credit score below 600 and DTI ratios above 43% are being approved erroneously.
- **After**: The system accurately denies applications that do not meet the criteria, ensuring compliance and reducing financial risk.

---

## 2. Related Coding Concepts & Syntax (50% Theory, 50% Practice)

### Concept 1: Conditional Statements
#### 📘 Theoretical Overview (50%)
Conditional statements are fundamental programming constructs that allow the execution of certain blocks of code based on whether a specified condition evaluates to true or false. They are essential for implementing decision-making logic in applications. Without conditional statements, a program would execute the same sequence of instructions regardless of the input, making it impossible to handle different scenarios effectively.

Key mechanisms include:
- **If Statements**: Execute a block of code if a condition is true.
- **Else Statements**: Provide an alternative block of code to execute if the condition is false.
- **Else If Statements**: Allow for multiple conditions to be checked in sequence.

#### 💻 Syntax & Practical Examples (50%)
* **Language Syntax**:
  ```javascript
  if (condition) {
      // Code to execute if condition is true
  } else {
      // Code to execute if condition is false
  }
  ```

* **Real-World Application**:
  ```javascript
  const creditScore = 580;
  const dtiRatio = 85;

  if (creditScore >= 600 && dtiRatio <= 43) {
      console.log("Loan Approved");
  } else {
      console.log("Loan Denied");
  }
  ```
In this example, the loan will be denied because the credit score is below the required threshold and the DTI ratio exceeds the limit.

---

## 3. Step-by-Step Logic & Walkthrough

1. **Step 1: Locate and Analyze the Target File**
   * Navigate to the `s-w04-task-05` folder and open `ruleEngine.js` and `validationRules.js`. These files contain the core logic for processing loan applications.
   * Focus on the methods that handle input data and apply validation rules.

2. **Step 2: Input Verification & Validation**
   * Check the input data for null or undefined values. Ensure that the data structure contains the necessary fields, such as credit score and DTI ratio.

3. **Step 3: Core Implementation / Modification**
   * Modify the `_transform` method in `ruleEngine.js` or `validationRules.js` to include the necessary validation logic. Implement conditions that check if the credit score is below 600 or if the DTI ratio exceeds 43%. If either condition is true, the application should be denied.

4. **Step 4: Output Verification & Testing**
   * Run the existing test cases in `ruleEngine.test.js` to verify that the changes work as expected. Ensure that all tests pass and that the output reflects the correct approval or denial of applications based on the new logic.

---

## 4. Detailed Walkthrough of Test Cases

### Test Case 1: Standard / Success Case
* **Description**: This test checks if a valid application with acceptable credit score and DTI ratio is approved.
* **Inputs**:
  ```json
  {
      "creditScore": 650,
      "dtiRatio": 30
  }
  ```
* **Step-by-Step Execution Trace**:
  1. Input values are received by the function.
  2. The function checks if the credit score is below 600 (false) and if the DTI ratio exceeds 43% (false).
  3. Since both conditions are false, the main logic runs, approving the loan.
  4. Returns the final result: "Loan Approved".
* **Expected Output**: "Loan Approved"

### Test Case 2: Edge Case / Validation Fail
* **Description**: This test checks if an application with a credit score below the threshold is denied.
* **Inputs**:
  ```json
  {
      "creditScore": 580,
      "dtiRatio": 40
  }
  ```
* **Step-by-Step Execution Trace**:
  1. Input values are received.
  2. The validation block detects that the credit score is below 600 (true).
  3. The execution is halted early, and the loan is denied.
  4. Returns the final result: "Loan Denied".
* **Expected Output**: "Loan Denied" 

This guide provides a comprehensive understanding of the task, the underlying concepts, and the necessary steps to resolve the issue effectively.