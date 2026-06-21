import { useEffect, useMemo, useState } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import useSpotlightCycle from "../../../../../../shared/hooks/useSpotlightCycle.js";

import HotelTestimonialSpotlightCard from "../../../../shared/ui/HotelTestimonialSpotlightCard/HotelTestimonialSpotlightCard.jsx";

import styles from "./TestimonialsSpotlight.module.css";

const EMPTY_ITEMS = Object.freeze([]);
const EMPTY_NAVIGATION = Object.freeze({});

function chunkItems(items = EMPTY_ITEMS, size = 3) {
  const safeSize = Math.max(1, size);
  const chunks = [];

  for (let index = 0; index < items.length; index += safeSize) {
    chunks.push(items.slice(index, index + safeSize));
  }

  return chunks;
}

function getCardsPerView(viewportWidth, cardsPerView = {}) {
  if (viewportWidth <= 760) return cardsPerView.mobile ?? 1;
  if (viewportWidth <= 1220) return cardsPerView.tablet ?? 2;

  return cardsPerView.desktop ?? 3;
}

function resolveNavigationIcon(iconNode, iconName) {
  if (iconNode) return iconNode;
  if (!iconName) return null;

  const Icon = resolveHotelIcon(hotelBrand?.icons, iconName);

  return Icon ? <Icon /> : null;
}

export default function TestimonialsSpotlight() {
  const content =
    hotelBrand?.pages?.information?.sections?.testimonials?.spotlight ?? null;

  const items = Array.isArray(content?.items) ? content.items : EMPTY_ITEMS;

  const navigation = content?.navigation ?? EMPTY_NAVIGATION;

  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === "undefined"
      ? (content?.cardsPerView?.desktop ?? 3)
      : getCardsPerView(window.innerWidth, content?.cardsPerView),
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => {
      setCardsPerView(
        getCardsPerView(window.innerWidth, content?.cardsPerView),
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [content?.cardsPerView]);

  const slides = useMemo(
    () => chunkItems(items, cardsPerView),
    [cardsPerView, items],
  );

  const { index, setIndex } = useSpotlightCycle(
    slides.length,
    content?.autoplayMs ?? 4500,
  );

  useEffect(() => {
    if (slides.length === 0) {
      return;
    }

    if (index > slides.length - 1) {
      setIndex(0);
    }
  }, [index, setIndex, slides.length]);

  const resolvedNavigation = useMemo(
    () => ({
      previousIcon:
        resolveNavigationIcon(
          navigation.previousIcon,
          navigation.previousIconName,
        ) ?? "‹",

      nextIcon:
        resolveNavigationIcon(navigation.nextIcon, navigation.nextIconName) ??
        "›",

      profileIcon: resolveNavigationIcon(
        navigation.profileIcon,
        navigation.profileIconName,
      ),

      quoteIcon: resolveNavigationIcon(
        navigation.quoteIcon,
        navigation.quoteIconName,
      ),

      locationIcon: resolveNavigationIcon(
        navigation.locationIcon,
        navigation.locationIconName,
      ),

      dateIcon: resolveNavigationIcon(
        navigation.dateIcon,
        navigation.dateIconName,
      ),

      starIcon: resolveNavigationIcon(
        navigation.starIcon,
        navigation.starIconName,
      ),
    }),
    [navigation],
  );

  if (!content || items.length === 0 || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[index] ?? [];
  const labels = content?.labels ?? {};

  const handlePrevious = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + slides.length) % slides.length,
    );
  };

  const handleNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <div
      id={content.id ?? "informacoes-testemunhos-spotlight"}
      className={styles.wrapper}
      aria-label="Testemunhos em destaque"
    >
      <div className={styles.stageHeader}>
        {labels.stageEyebrow ? (
          <p className={styles.eyebrow}>{labels.stageEyebrow}</p>
        ) : null}

        {labels.stageTitle ? (
          <h3 className={styles.stageTitle}>{labels.stageTitle}</h3>
        ) : null}

        {labels.stageDescription ? (
          <p className={styles.stageDescription}>{labels.stageDescription}</p>
        ) : null}
      </div>

      <div className={styles.stage}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navPrev}`}
          onClick={handlePrevious}
          aria-label="Ver testemunhos anteriores"
        >
          <span className={styles.navIcon} aria-hidden="true">
            {resolvedNavigation.previousIcon}
          </span>
        </button>

        <div className={styles.viewport}>
          <div className={styles.grid}>
            {activeSlide.map((item) => (
              <HotelTestimonialSpotlightCard
                key={item.id}
                organisation={item.organisation}
                context={item.context}
                category={item.category}
                rating={item.rating}
                quote={item.quote}
                dateLabel={item.dateLabel}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                verifiedLabel={labels.verifiedLabel}
                profileIcon={resolvedNavigation.profileIcon}
                quoteIcon={resolvedNavigation.quoteIcon}
                locationIcon={resolvedNavigation.locationIcon}
                dateIcon={resolvedNavigation.dateIcon}
                starIcon={resolvedNavigation.starIcon}
              />
            ))}
          </div>

          <div className={styles.controlsRow}>
            <div className={styles.dots} aria-label="Paginação de testemunhos">
              {slides.map((slide, slideIndex) => (
                <button
                  key={`dot-${slide[0]?.id ?? slideIndex}`}
                  type="button"
                  className={`${styles.dot} ${
                    slideIndex === index ? styles.dotActive : ""
                  }`}
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Ir para grupo ${slideIndex + 1}`}
                  aria-pressed={slideIndex === index}
                />
              ))}
            </div>

            <p className={styles.counter}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.counterDivider}>/</span>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navNext}`}
          onClick={handleNext}
          aria-label="Ver próximos testemunhos"
        >
          <span className={styles.navIcon} aria-hidden="true">
            {resolvedNavigation.nextIcon}
          </span>
        </button>
      </div>
    </div>
  );
}
