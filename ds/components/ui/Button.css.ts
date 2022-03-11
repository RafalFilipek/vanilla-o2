import { sprinkles } from "~/ds/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: sprinkles({
    display: "inline-flex",
    height: "6",
    alignItems: "center",
    justifyContent: "center",
    px: "4",
    // fontSize: "00",
    fontWeight: "bold",
    // ???
    color: "primary-black",
  }),
  variants: {
    variant: {
      primary: sprinkles({
        backgroundColor: "primary-brand",
      }),
      secondary: sprinkles({
        backgroundColor: "primary-black",
        color: "primary-white",
      }),
    },
    size: {
      md: sprinkles({
        height: "8",
        fontSize: "0",
        lineHeight: "1",
      }),
      lg: sprinkles({
        height: "10",
        fontSize: "1",
        lineHeight: "2",
      }),
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
