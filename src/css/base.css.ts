import { globalStyle, style } from "@vanilla-extract/css";
import { conditions, sprinkles } from "~/ds/sprinkles.css";
import { vars } from "~/ds/vars.css";

globalStyle("html", {
  WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
  backgroundColor: vars.colors["gray-1"],
  fontFamily: vars.fontFamily["brand-sans"],
});

export const container = style([
  {
    maxWidth: "26.25rem",
    "@media": {
      [conditions["sm-n-above"]["@media"]]: {
        maxWidth: "45rem",
      },
      [conditions["md-n-above"]["@media"]]: {
        maxWidth: "55rem",
      },
      [conditions["lg-n-above"]["@media"]]: {
        maxWidth: "72.5rem",
      },
      [conditions["xl-n-above"]["@media"]]: {
        maxWidth: "80rem",
      },
    },
  },
  sprinkles({
    px: "4",
    mx: "auto",
    width: "full",
  }),
]);
