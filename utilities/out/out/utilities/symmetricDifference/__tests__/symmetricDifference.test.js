"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const symmetricDifference_1 = __importDefault(require("../symmetricDifference"));
it("gets the symmetric difference between two number arrays", () => {
    const iterableOne = [1, 2, 3, 4];
    const iterableTwo = [1, 2];
    const actualResult = (0, symmetricDifference_1.default)(iterableOne, iterableTwo);
    const expectedResult = [3, 4];
    expect(actualResult).toEqual(expectedResult);
});
//# sourceMappingURL=symmetricDifference.test.js.map