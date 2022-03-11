// @ts-ignore
module.exports = {
  icon: true,
  svgo: true,
  prettierConfig: {
    parser: "typescript",
  },
  svgoConfig: {
    plugins: [
      {
        removeUnknownsAndDefaults: false,
        removeXMLNS: true,
      },
    ],
  },
  replaceAttrValues: {
    "#000": "currentColor",
    "#FFF": "currentColor",
    "#fff": "currentColor",
  },
};
