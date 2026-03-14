import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";
// Ativar quando ligares os ícones:
// import { resolveHotelIcon } from "../../../../config/index.js";

import styles from "./BreakfastShowcase.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function BreakfastShowcase() {
  const section = hotelBrand?.pages?.dining?.sections?.breakfast ?? null;

  const intro = section?.intro ?? null;
  const highlightCard = section?.highlightCard ?? null;
  const gallery = section?.gallery ?? null;

  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Pequeno-almoço";

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((prev) => clampIndex(prev, items.length));
  }, [items.length]);

  const hasItems = items.length > 0;

  const goPrev = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) => clampIndex(prev - 1, items.length));
  }, [hasItems, items.length]);

  const goNext = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) => clampIndex(prev + 1, items.length));
  }, [hasItems, items.length]);

  if (!intro && !gallery && !highlightCard) return null;

  // Preparado para futuro:
  // const Icon = highlightCard?.iconKey
  //   ? resolveHotelIcon(hotelBrand?.icons, highlightCard.iconKey)
  //   : null;

  const showcaseId = `${section?.id ?? "restaurant-breakfast"}-showcase-title`;

  return (
    <div className={styles.block} aria-labelledby={showcaseId}>
      <div className={styles.grid}>
        <article className={styles.contentPanel}>
          {intro?.title ? (
            <header className={styles.header}>
              <h3 id={showcaseId} className={styles.title}>
                {intro.title}
              </h3>
            </header>
          ) : null}

          {intro?.paragraphs?.length ? (
            <div className={styles.body}>
              {intro.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section?.id ?? "restaurant-breakfast"}-intro-${index}`}
                  className={styles.paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {highlightCard?.title || highlightCard?.text ? (
            <div
              className={styles.highlightCard}
              aria-label="Informação de horário"
            >
              <div className={styles.highlightTop}>
                <span className={styles.highlightIconSlot} aria-hidden="true">
                  {/* Quando ativares os ícones:
                  {Icon ? <Icon className={styles.highlightIcon} /> : null}
                  */}
                </span>

                {highlightCard?.title ? (
                  <h4 className={styles.highlightTitle}>
                    {highlightCard.title}
                  </h4>
                ) : null}
              </div>

              {highlightCard?.text ? (
                <p className={styles.highlightText}>{highlightCard.text}</p>
              ) : null}
            </div>
          ) : null}
        </article>

        <div className={styles.carouselPanel}>
          <div className={styles.carouselCard}>
            <HotelPhotoCarouselBase
              items={items}
              activeIndex={activeIndex}
              onPrev={goPrev}
              onNext={goNext}
              fallbackLabel={fallbackLabel}
              className={styles.carouselStage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
