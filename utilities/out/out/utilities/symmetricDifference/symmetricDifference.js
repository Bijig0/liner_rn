"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symmetricDifference = (a, b) => {
    const setA = new Set(a);
    const setB = new Set(b);
    return a.filter((elm) => !setB.has(elm));
};
exports.default = symmetricDifference;
//# sourceMappingURL=symmetricDifference.js.map