import generateFontsByPathObj from "./generateFontsByPathObj";

// This test is wack, should be separated into 1. a test that the path given
// will give you back a font

// 2. Check that an object will be created given a correct path
it("generates an object from baseAssetsPath and fonts", () => {
  const fonts = [
    "DMSans-Regular",
    "DMSans-Bold",
    "DMSans-BoldItalic",
    "DMSans-Medium",
    "DMSans-MediumItalic",
    "DMSans-Italic",
  ] as const;
  const baseAssetsPath = "../assets/fonts";
  expect(generateFontsByPathObj(fonts, baseAssetsPath)).toBe({
    "DMSans-Regular": require(`${baseAssetsPath}/DMSans-Regular.ttf`),
    "DMSans-Bold": require(`${baseAssetsPath}/DMSans-Bold.ttf`),
    "DMSans-BoldItalic": require(`${baseAssetsPath}/DMSans-BoldItalic.ttf`),
    "DMSans-Medium": require(`${baseAssetsPath}/DMSans-Medium.ttf`),
    "DMSans-MediumItalic": require(`${baseAssetsPath}/DMSans-MediumItalic.ttf`),
    "DMSans-Italic": require(`${baseAssetsPath}/DMSans-Italic.ttf`),
  });
});
