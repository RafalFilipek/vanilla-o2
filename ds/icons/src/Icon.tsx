import * as React from "react";

import { useIconsProvider } from "./IconsProvider";
import type { IconType } from "./iconsMap";

type IconProps = { name: IconType } & React.SVGProps<SVGSVGElement>;

const map: Record<string, string> = {
  "info-icon": "info",
  "check-mark2": "check-mark-2",
};

export function Icon({ name: providedName, ...rest }: IconProps) {
  const { src } = useIconsProvider();
  const name = map[providedName] || providedName;

  return (
    <svg width="1em" height="1em" {...rest}>
      <use style={{ fill: "currentColor" }} xlinkHref={`${src}#${name}`} />
    </svg>
  );
}
