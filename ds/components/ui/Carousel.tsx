import { style } from "@vanilla-extract/css";
import clsx, { ClassValue } from "clsx";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import {
  CSSProperties,
  FC,
  ReactChild,
  ReactNode,
  useMemo,
  useState,
} from "react";
import generateContext from "react-generate-context";

import { Icon } from "~/ds/icons";
import { screens as themeScreens } from "~/ds/theme";
import * as styles from "./Carousle.css";

export type CarouselProps = {
  slideInlineSize?: number; // 0-1
  slideSpacing?: number; // in px
  containerInlineOffset?: number; // 0-1
  autoPlay?: boolean;
  animationDuration?: number; // in ms
  autoTimeout?: number; // in ms
  loop?: boolean;
  screens?: KeenSliderOptions["slides"];
  className?: string;
};

const useCarouselValue = (props) => useMemo(() => props, [props]);
const [CarouselProvider, useCarousel] = generateContext(useCarouselValue, {});

const Carousel: FC<CarouselProps> = ({
  className,
  slideInlineSize = 0.8,
  slideSpacing = 10,
  containerInlineOffset = 0,
  animationDuration = 2000,
  autoTimeout = 2000,
  autoPlay,
  loop = false,
  screens,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [slideListRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop,
      selector: ".slide",
      defaultAnimation: {
        duration: animationDuration,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      },
      breakpoints: {
        [`${themeScreens["sm-n-above"]}`]: {
          slides: (_, slidesNumber) =>
            slidesNumber.map((_) => ({
              size: 1,
              origin: 0,
            })),
        },
      },
      slides: (containerInlineSize, slidesNumber) =>
        slidesNumber.map((_, index) => {
          const firstIdx = index === 0;
          const lastIdx = slidesNumber.length - 1 === index;

          return {
            ...(firstIdx
              ? { origin: containerInlineOffset / containerInlineSize }
              : lastIdx
              ? {
                  origin:
                    (containerInlineSize -
                      slideInlineSize * containerInlineSize -
                      containerInlineOffset) /
                    containerInlineSize,
                }
              : {
                  origin:
                    (containerInlineSize -
                      slideInlineSize * containerInlineSize) /
                    (2 * containerInlineSize),
                }),
            size: slideInlineSize,
            spacing: slideSpacing / containerInlineSize,
          };
        }),
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, autoTimeout);
        }

        slider.on("created", () => {
          setLoaded(true);
          slider.container.parentNode.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.parentNode.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);

        slider.on("slideChanged", () => {
          setCurrentSlide(slider.track.details.rel);
          clearNextTimeout();
        });
      },
    ]
  );
  return (
    <CarouselProvider
      {...{
        instanceRef,
        slideListRef,
        onPrev: () => instanceRef.current.prev(),
        onNext: () => instanceRef.current.next(),
        currentSlide,
        loaded,
        animationDuration,
        autoTimeout,
        autoPlay,
      }}
    >
      <div className={styles.carousel} {...props} />
    </CarouselProvider>
  );
};

function CarouselSlideList({
  className,
  children,
}: {
  className?: ClassValue;
  children: ReactNode;
}) {
  const { slideListRef } = useCarousel();
  return (
    <div className={styles.list} ref={slideListRef}>
      {children}
    </div>
  );
}

function CarouselSlide({
  className,
  children,
  idx,
}: {
  className?: ClassValue;
  children: ReactChild;
  idx: number;
}) {
  const { currentSlide } = useCarousel();
  return (
    <div className={`slide ${styles.slide({ active: currentSlide === idx })}`}>
      {children}
    </div>
  );
}

function CarouselDots() {
  const {
    loaded,
    instanceRef,
    currentSlide,
    autoPlay,
    animationDuration,
    autoTimeout,
  } = useCarousel();
  const animationStyle = {
    "--_animationDuration": `${Math.floor(
      animationDuration / 1000 + autoTimeout / 1000
    )}s`,
  } as CSSProperties;
  return loaded && instanceRef.current ? (
    <div className={styles.dots} style={animationStyle}>
      {[...Array(instanceRef.current.track.details.slides.length).keys()].map(
        (idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={styles.dot}
            >
              <div
                className={styles.dotProgress}
                {...(autoPlay && { "data-carousel-animate": "" })}
                {...(currentSlide === idx && { "data-carousel-active": "" })}
              />
            </div>
          );
        }
      )}
    </div>
  ) : null;
}

function CarouselPrev() {
  const { onPrev, currentSlide } = useCarousel();
  return (
    <button
      type="button"
      className={styles.arrow({ side: "prev" })}
      onClick={onPrev}
      disabled={currentSlide === 0}
    >
      <Icon name="arrow-left" width="24" height="24" />
    </button>
  );
}

function CarouselNext() {
  const { onNext, currentSlide, instanceRef } = useCarousel();
  return instanceRef.current ? (
    <button
      type="button"
      className={styles.arrow({ side: "next" })}
      onClick={onNext}
      disabled={
        currentSlide === instanceRef.current.track.details.slides.length - 1
      }
    >
      <Icon name="arrow-right" width="24" height="24" />
    </button>
  ) : null;
}

export const Root = Carousel;
export const SlideList = CarouselSlideList;
export const Slide = CarouselSlide;
export const Next = CarouselNext;
export const Prev = CarouselPrev;
export const Dots = CarouselDots;
