import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/ds/sprinkles.css";

export const container = style([
  sprinkles({
    mx: {
      base: "-4",
      "sm-n-above": "auto",
    },
    mt: "4",
  }),
]);

export const relative = sprinkles({
  position: "relative",
});

export const slide = style([
  {
    aspectRatio: "31/12",
  },
  sprinkles({
    position: "relative",
    display: "flex",
    flexDirection: {
      base: "column",
      "sm-n-above": "row",
    },
    alignItems: "center",
    borderRadius: "2",
    backgroundColor: "primary-white",
  }),
]);

export const picture = sprinkles({
  height: "full",
  borderWidth: {
    base: "1",
    "sm-n-above": "0",
  },
  borderColor: "gray-4",
  objectFit: "cover",
  position: {
    "sm-n-above": "absolute",
  },
  inset: {
    "sm-n-above": "0",
  },
});

export const badge = sprinkles({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  py: "4",
  pl: {
    base: "4",
    "sm-n-above": "8",
  },
  maxWidth: {
    "sm-n-above": "1/2",
  },
});

export const badgeText = sprinkles({
  fontSize: {
    base: "1",
    "sm-n-above": "0",
    "md-n-above": "2",
  },
  fontWeight: "bold",
  color: "primary-brand",
});

export const heading = sprinkles({
  mt: {
    base: "1",
    "lg-n-above": "2",
  },
  fontSize: {
    base: "2",
    "md-n-above": "4",
    "lg-n-above": "6",
  },
  fontWeight: "bold",
  lineHeight: {
    base: "2",
    "md-n-above": "4",
    "lg-n-above": "6",
  },
});

export const body = sprinkles({
  mt: {
    base: "1",
    "sm-n-above": "2",
    "lg-n-above": "4",
  },
  fontSize: {
    base: "0",
    "lg-n-above": "2",
  },
  maxWidth: {
    "md-n-above": "9/12",
  },
  lineHeight: "2",
});

export const actionWrapper = sprinkles({
  mt: {
    base: "4",
    "sm-n-above": "8",
  },
});
