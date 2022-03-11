import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/ds/sprinkles.css";
import { vars } from "~/ds/vars.css";

export const list = sprinkles({
  position: "relative",
  display: "flex",
  width: "full",
  touchAction: "pan-y",
  userSelect: "none",
  justifyContent: "flex-start",
  overflow: "hidden",
  pr: "4",
});

globalStyle(`${list} [data-keen-slider-moves] *`, {
  pointerEvents: "none",
});

export const carousel = sprinkles({
  position: "relative",
});

export const slide = recipe({
  base: style([
    {
      transition: "opacity",
      transitionDuration: "300",
    },
    sprinkles({
      position: "relative",
      minHeight: "full",
      width: "full",
      overflow: "hidden",
    }),
  ]),
  variants: {
    active: {
      false: sprinkles({
        opacity: "4",
      }),
    },
  },
});

export const arrow = recipe({
  base: sprinkles({
    position: "absolute",
    top: "1/2",
    zIndex: "1",
    display: {
      base: "none",
      "sm-n-above": "flex",
    },
    height: "8",
    width: "8",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "primary-black",
    padding: "0",
    fontSize: "6",
    color: "primary-white",
  }),
  variants: {
    side: {
      prev: style({
        transform: "translate3d(-50%, -50%, 0);",
        left: 0,
      }),
      next: style({
        transform: "translate3d(50%, -50%, 0)",
        right: 0,
      }),
    },
  },
});

export const dots = sprinkles({
  mt: "2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  py: "2",
  px: "4",
  gap: "2",
});

export const dot = style([
  {
    selectors: {
      "&::after": {
        content: "",
        position: "absolute",
        top: vars.spacing["-2"],
        left: vars.spacing["-2"],
        bottom: vars.spacing["-2"],
        right: vars.spacing["-2"],
        display: "block",
      },
    },
  },
  sprinkles({
    position: "relative",
    display: "block",
    height: "smallgap",
    width: "full",
    maxWidth: "12",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "full",
    backgroundColor: "primary-black",
  }),
]);

const progressAnimation = keyframes({
  from: { width: vars.width["0"] },
  to: { width: vars.width.full },
});

export const dotProgress = style([
  sprinkles({
    position: "absolute",
    top: "0",
    left: "0",
    height: "full",
    width: "0",
    backgroundColor: "primary-brand-accessible",
  }),
  {
    selectors: {
      "&[data-carousel-active][data-carousel-animate]": {
        animationName: progressAnimation,
        animationTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1);",
        animationDuration: "var(--_animationDuration)",
      },
      "&[data-carousel-active]": {
        width: "full",
      },
    },
  },
]);
