const generateFontsByPathObj = (
  fonts: readonly Font[],
  baseAssetsPath: string,
  extension: string = "ttf"
) => {
  const obj = {};
  fonts.map((font: Font) => {
    obj[font] = require(`../assets/fonts/DMSans-Regular.ttf`);
    console.log(require(`../assets/fonts/DMSans-Regular.ttf`));
  });
  return obj;
};

const fn = () => {
  console.log('hello')
}

// GOOGLE UP ON LOOPING THROUGH REQUIRE
const myFonts = generateFontsByPathObj(["DMSans-Bold", "DMSans-BoldItalic"], '../assets/fonts')
fn()
console.log('abc')

export default generateFontsByPathObj;
