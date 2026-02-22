const RuleEngine = require("../src/ruleEngine.js");
const ValidationRules = require("../src/validationRules.js");

describe("Form validation rule engine", () => {
    test("should process valid input", () => {
        const obj = new RuleEngine();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new RuleEngine();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new RuleEngine();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new ValidationRules();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
