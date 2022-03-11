import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

const spacing = {
  "0": "0",
  auto: "auto",
  microgap: "0.0625rem",
  smallgap: "0.125rem",
  "1": "0.3125rem",
  "2": "0.625rem",
  "3": "0.9375rem",
  "4": "1.25rem",
  "5": "1.5625rem",
  "6": "1.875rem",
  "8": "2.5rem",
  "10": " 3.125rem",
  "12": " 3.75rem",
  "16": " 5rem",
  "20": " 6.25rem",
  "-microgap": "-0.0625rem",
  "-smallgap": "-0.125rem",
  "-1": "-0.3125rem",
  "-2": "-0.625rem",
  "-3": "-0.9375rem",
  "-4": "-1.25rem",
  "-5": "-1.5625rem",
  "-6": "-1.875rem",
  "-8": "-2.5rem",
  "-10": "-3.125rem",
  "-12": "-3.75rem",
  "-16": "-5rem",
  "-20": "-6.25rem",
};

const fractions = {
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
};

export const vars = createGlobalTheme(":root", {
  colors: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    /* primary */
    "primary-brand": "#ff7900",
    "primary-brand-accessible": "#f16e00",
    "primary-black": "black",
    "primary-white": "white",
    /* grays */
    "gray-1": "#f5f5f5",
    "gray-2": "#eee",
    "gray-3": "#ddd",
    "gray-4": "#ccc",
    "gray-5": "#999",
    "gray-6": "#666",
    "gray-7": "#444",
    "gray-8": "#333",
    "gray-9": "#232323",
    /* functional */
    "functional-red": "#cd3c14",
    "functional-blue": "#527edb",
    "functional-green": "#32c832",
    "functional-yellow": "#fc0",
    /* supporting */
    "supporting-green-1": "#b8ebd6",
    "supporting-green-2": "#50be87",
    "supporting-green-3": "#0a6e31",
    "supporting-purple-1": "#d9c2f0",
    "supporting-purple-2": "#a885d8",
    "supporting-purple-3": "#492191",
    "supporting-blue-1": "#b5e8f7",
    "supporting-blue-2": "#4bb4e6",
    "supporting-blue-3": "#085ebd",
    "supporting-pink-1": "#ffe8f7",
    "supporting-pink-2": "#ffb4e6",
    "supporting-pink-3": "#ff8ad4",
    "supporting-yellow-1": "#fff6b6",
    "supporting-yellow-2": "#ffd200",
    "supporting-yellow-3": "#ffb400",
  },
  fractions,
  columns: {
    auto: "auto",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "4",
    "6": "4",
    "7": "4",
    "8": "4",
  },
  spacing,
  aspectRatio: {
    auto: "auto",
    square: "1",
    landscape: "4/3",
    portrait: "3/4",
    widescreen: "16/9",
    ultrawide: "18/5",
    golden: "1.6180/1",
  },
  blur: {
    "0": "0",
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "24px",
    "6": "40px",
    "7": "64px",
  },
  radius: {
    "0": "0px",
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.5rem",
    "4": "1rem",
    full: "1e5px",
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "3": "3px",
    "4": "4px",
  },
  fontSize: {
    "000": "0.625rem" /* 10px */,
    "00": "0.75rem" /* 12px */,
    "0": "0.875rem" /* 14px */,
    "1": "1rem;" /* 16px */,
    "2": "1.125rem" /* 18px */,
    "3": "1.25rem" /* 20px */,
    "4": "1.5rem" /* 24px */,
    "5": "1.875rem" /* 30px */,
    "6": "2.125rem" /* 34px */,
    "7": "2.5rem" /* 40px */,
    "8": "3.125rem" /* 50px */,
    "9": "3.75rem" /* 60px */,
  },
  lineHeight: {
    "000": "0.75rem",
    "00": "0.875rem",
    "0": "1rem",
    "1": "1.125rem",
    "1+relaxed": "1.5rem",
    "2": "1.25rem",
    "2+relaxed": "1.6875rem",
    "3": "1.375rem",
    "3+relaxed": "1.875rem",
    "4": "1.625rem",
    "5": "2.125rem",
    "6": "1",
    "7": "1",
    "8": "1",
    "9": "1",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
  fontFamily: {
    "brand-sans":
      'HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif',
    "os-sans":
      "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
    "os-serif": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
    "is-mono":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  height: {
    auto: "auto",
    ...spacing,
    ...fractions,
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vh",
  },
  width: {
    auto: "auto",
    ...spacing,
    ...fractions,
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vw",
  },
  maxHeight: {
    ...spacing,
    ...fractions,
    none: "none",
    0: "0",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vh",
  },
  maxWidth: {
    none: "none",
    ...fractions,
    ...spacing,
    0: "0",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vw",
  },
  order: {
    first: "-9999",
    last: "9999",
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
  },
  opacity: {
    "0": "0",
    "1": "0.1",
    "2": "0.2",
    "3": "0.3",
    "4": "0.4",
    "5": "0.5",
    "6": "0.6",
    "7": "0.7",
    "8": "0.8",
    "9": "0.9",
    "10": "1",
  },
});
