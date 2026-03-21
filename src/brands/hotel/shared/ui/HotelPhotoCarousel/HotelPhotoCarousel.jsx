import { useEffect, useMemo, useState } from "react";
import styles from "./HotelPhotoCarousel.module.css";

/**
 * HotelPhotoCarousel
 *
 * Props:
 *  - items?: Array<{
 *      id?: string | number;
 *      src: string;
 *      alt?: string;
 *      label?: string;
 *    }>
 *  - fallbackLabel?: string
 */
export default function HotelPhotoCarousel({
  items = [],
  fallbackLabel = "Fotos",
}) {
  const [index, setIndex] = useState(0);

  const hasItems = Array.isArray(items) && items.length > 0;
  const hasMultipleItems = items.length > 1;

  useEffect(() => {
    if (!hasItems) {
      setIndex(0);
      return;
    }

    if (index > items.length - 1) {
      setIndex(0);
    }
  }, [hasItems, index, items.length]);

  const current = useMemo(() => {
    if (!hasItems) return null;
    return items[index];
  }, [hasItems, index, items]);

  const goPrev = () => {
    if (!hasMultipleItems) return;
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!hasMultipleItems) return;
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={styles.wrap}
      aria-label="Galeria de fotografias do alojamento"
    >
      <div className={styles.shell}>
        <div className={styles.stage}>
          {hasItems ? (
            <figure className={styles.media}>
              <img
                src={current.src}
                alt={current.alt || current.label || "Fotografia do alojamento"}
                className={styles.image}
              />

              {current.label ? (
                <figcaption className={styles.caption}>
                  {current.label}
                </figcaption>
              ) : null}

              <button
                type="button"
                className={`${styles.navButton} ${styles.navButtonPrev}`}
                onClick={goPrev}
                aria-label="Foto anterior"
                disabled={!hasMultipleItems}
              >
                <span className={styles.navIcon} aria-hidden="true">
                  ‹
                </span>
              </button>

              <button
                type="button"
                className={`${styles.navButton} ${styles.navButtonNext}`}
                onClick={goNext}
                aria-label="Foto seguinte"
                disabled={!hasMultipleItems}
              >
                <span className={styles.navIcon} aria-hidden="true">
                  ›
                </span>
              </button>
            </figure>
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderLabel}>{fallbackLabel}</span>
            </div>
          )}
        </div>

        {hasMultipleItems ? (
          <div
            className={styles.pagination}
            role="tablist"
            aria-label="Selecionar fotografia"
          >
            {items.map((item, itemIndex) => {
              const isActive = itemIndex === index;

              return (
                <button
                  key={item.id ?? `carousel-dot-${itemIndex}`}
                  type="button"
                  className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                  onClick={() => setIndex(itemIndex)}
                  aria-label={`Ir para fotografia ${itemIndex + 1}`}
                  aria-selected={isActive}
                  role="tab"
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
