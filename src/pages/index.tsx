import { IconsProvider } from "~/ds/icons";
import spritePath from "~/ds/icons/sprite.svg";
import { Hero } from "~/src/components/Hero";
import { container } from "../css/base.css";

export default function IndexPage() {
  return (
    <IconsProvider src={spritePath}>
      <div className={container}>
        <Hero />
      </div>
    </IconsProvider>
  );
}
