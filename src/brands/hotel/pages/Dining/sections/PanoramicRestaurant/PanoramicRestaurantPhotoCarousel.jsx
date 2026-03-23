import { useMemo, useState, useCallback, useEffect } from "react";
import styles from "./PanoramicRestaurantPhotoCarousel.module.css";

import hotelBrand, {
  ICONS,
  resolveHotelIcon,
} from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function PanoramicRestaurantPhotoCarousel() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const gallery = section?.gallery ?? null;
  const highlightCard = section?.highlightCard ?? null;

  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Restaurante Panorâmico";

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

  const handleSelectIndex = useCallback(
    (index) => {
      if (!hasItems) return;
      setActiveIndex(clampIndex(index, items.length));
    },
    [hasItems, items.length],
  );

  const HighlightIcon = highlightCard?.iconKey
    ? resolveHotelIcon(ICONS, highlightCard.iconKey)
    : null;

  const showHighlight = Boolean(
    highlightCard?.title || highlightCard?.text || HighlightIcon,
  );

  return (
    <div
      className={styles.frame}
      id={section?.id ?? "restaurante-panoramico"}
      aria-label={section?.headerLabel ?? "Galeria do restaurante panorâmico"}
    >
      <div className={styles.shell}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            activeIndex={activeIndex}
            onPrev={goPrev}
            onNext={goNext}
            onSelectIndex={handleSelectIndex}
            fallbackLabel={fallbackLabel}
            className={styles.carouselStage}
            showIndicators
          />

          {showHighlight ? (
            <div
              className={styles.highlightCard}
              aria-label={highlightCard?.title ?? "Destaque"}
            >
              <div className={styles.highlightHeader}>
                <span className={styles.highlightIcon} aria-hidden="true">
                  {HighlightIcon ? <HighlightIcon size={18} /> : null}
                </span>

                {highlightCard?.title ? (
                  <h3 className={styles.highlightTitle}>
                    {highlightCard.title}
                  </h3>
                ) : null}
              </div>

              {highlightCard?.text ? (
                <p className={styles.highlightText}>{highlightCard.text}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
