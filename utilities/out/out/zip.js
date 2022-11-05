"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* zip(arrayOne, arrayTwo) {
    const len = arrayOne.length;
    for (let i = 0; i < len; i++) {
        yield [arrayOne[i], arrayTwo[i]];
    }
}
exports.default = zip;
//# sourceMappingURL=zip.js.map