import * as Carousel from "~/ds/components/ui/Carousel";
import { Picture } from "~/ds/components/ui/Picture";

import * as styles from "./Hero.css";
import { button } from "~/ds/components/ui/Button.css";

export function Hero() {
  return (
    <div className={styles.container}>
      <Carousel.Root
        {...{
          autoPlay: true,
          animationDuration: 1000,
          slideInlineSize: 0.8,
          containerInlineOffset: 20,
          slideSpacing: 10,
          screens: {},
        }}
      >
        <div className={styles.relative}>
          <Carousel.SlideList>
            {[...Array(6).keys()].map((_, index) => (
              <Carousel.Slide key={index} idx={index}>
                <HeroSlide
                  {...{
                    badge: "Promocja",
                    heading:
                      "Zyskaj nawet 480 zł z&nbsp;rabatami na abonament komórkowy i&nbsp;smartfon",
                    body: "Zamów online, a zyskasz jeszcze więcej -&nbsp;łącznie nawet 560 zł",
                    action: {
                      label: "Sprawdź",
                      href: "https://orange.pl",
                    },
                  }}
                />
              </Carousel.Slide>
            ))}
          </Carousel.SlideList>
          <Carousel.Prev />
          <Carousel.Next />
        </div>
        <Carousel.Dots />
      </Carousel.Root>
    </div>
  );
}

export function HeroSlide({
  badge,
  heading,
  body,
  action,
}: {
  badge: string;
  heading: string;
  body: string;
  action: { label: string; href: string };
}) {
  return (
    <div className={styles.slide}>
      <Picture
        className={styles.picture}
        sets={[
          {
            src: "bg.webp",
            screen: "sm-n-above",
          },
        ]}
        DEFAULT={{ src: "bg-mobile.webp" }}
      />

      <div className={styles.badge}>
        {badge && <p className={styles.badgeText}>{badge}</p>}
        <h2
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
        <div className={styles.actionWrapper}>
          {action && (
            <a className={button()} href={action.href}>
              {action.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
