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
const fn = () => {
    console.log('hello');
};
// GOOGLE UP ON LOOPING THROUGH REQUIRE
const myFonts = generateFontsByPathObj(["DMSans-Bold", "DMSans-BoldItalic"], '../assets/fonts');
fn();
console.log('abc');
exports.default = generateFontsByPathObj;
//# sourceMappingURL=generateFontsByPathObj.js.map