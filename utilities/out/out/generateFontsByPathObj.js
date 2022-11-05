"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateFontsByPathObj = (fonts, baseAssetsPath, extension = "ttf") => {
    const obj = {};
    fonts.map((font) => {
        obj[font] = require(`../assets/fonts/DMSans-Regular.ttf`);
        console.log(require(`../assets/fonts/DMSans-Regular.ttf`));
    });
    return obj;
};
exports.default = generateFontsByPathObj;
//# sourceMappingURL=generateFontsByPathObj.js.map