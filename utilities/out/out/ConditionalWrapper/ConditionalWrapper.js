"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConditionalWrapper = ({ condition, wrapper, children, }) => (<>{condition ? wrapper(children) : children}</>);
exports.default = ConditionalWrapper;
//# sourceMappingURL=ConditionalWrapper.js.map