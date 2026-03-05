import { useMemo, useState, useCallback, useEffect } from "react";
import styles from "./PanoramicRestaurantPhotoCarousel.module.css";

import hotelBrand from "../../../../config/registry/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function PanoramicRestaurantPhotoCarousel() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const gallery = section?.gallery;
  const highlight = section?.highlightCard;

  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Fotos";

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

  return (
    <section
      className={styles.section}
      id={section?.id ?? "restaurante-panoramico"}
      aria-label={section?.headerLabel ?? "Galeria"}
    >
      <div className={styles.frame}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            activeIndex={activeIndex}
            onPrev={goPrev}
            onNext={goNext}
            fallbackLabel={fallbackLabel}
          />

          {highlight?.title || highlight?.text ? (
            <div className={styles.highlight} aria-label="Destaque">
              <div className={styles.highlightHeader}>
                <span className={styles.highlightIconSlot} aria-hidden="true" />
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
              </div>

              {highlight?.text ? (
                <p className={styles.highlightBody}>{highlight.text}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
