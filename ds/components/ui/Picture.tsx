import clsx, { ClassValue } from "clsx";

import { screens } from "~/ds/theme";

export function Picture({
  sets,
  DEFAULT,
  className,
}: {
  sets?: {
    src: string;
    screen: keyof typeof screens;
  }[];
  DEFAULT: { src: string };
  className?: ClassValue;
}) {
  return (
    <picture>
      {sets?.map((source, index) => (
        <source
          key={index}
          srcSet={source.src}
          media={screens[source.screen]}
        />
      ))}
      {DEFAULT ? (
        <img className={clsx(className)} src={DEFAULT.src} alt="" />
      ) : (
        <div className="border-1 border-supporting-yellow-3 py-2 px-4">
          You must specify a DEFAULT for &lt;Picture /&gt;.
        </div>
      )}
    </picture>
  );
}
