"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tagsController_1 = require("../tagsController");
describe('Games testing', () => {
    it('Should return a value between 0 and 6', () => {
        const result = tagsController_1.dice(6);
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(7);
    });
});
//# sourceMappingURL=tagsController.test.js.map