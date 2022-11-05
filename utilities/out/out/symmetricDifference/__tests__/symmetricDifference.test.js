"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symmetricDifference_1 = require("../symmetricDifference");
it("gets the symmetric difference between two number arrays", () => {
    const iterableOne = [1, 2, 3, 4];
    const iterableTwo = [1, 2];
    const actualResult = (0, symmetricDifference_1.default)(iterableOne, iterableTwo);
    const expectedResult = [3, 4];
    expect(actualResult).toEqual(expectedResult);
});
//# sourceMappingURL=symmetricDifference.test.js.map