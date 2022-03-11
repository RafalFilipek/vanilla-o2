module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  // importOrder: ["^~/(.*)$", "^[./]"],
  // importOrderSeparation: true,

  plugins: [
    require("prettier-plugin-tailwindcss"),
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/9#issuecomment-1021028722
    // require("@trivago/prettier-plugin-sort-imports"),
  ],
};
