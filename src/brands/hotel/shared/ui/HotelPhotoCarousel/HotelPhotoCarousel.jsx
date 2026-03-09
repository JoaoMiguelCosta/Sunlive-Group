// src/shared/components/Hotel/HotelPhotoCarousel/HotelPhotoCarousel.jsx

import { useState } from "react";
import styles from "./HotelPhotoCarousel.module.css";

/**
 * HotelPhotoCarousel
 *
 * Props:
 *  - items?: Array<{
 *      id?: string | number;
 *      src: string;
 *      alt?: string;
 *      label?: string; // opcional, ex: "Quarto Triplo"
 *    }>
 *  - fallbackLabel?: string (default: "Fotos")
 */
export default function HotelPhotoCarousel({
  items = [],
  fallbackLabel = "Fotos",
}) {
  const [index, setIndex] = useState(0);

  const hasItems = items && items.length > 0;
  const current = hasItems ? items[index] : null;

  const goPrev = () => {
    if (!hasItems) return;
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!hasItems) return;
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.wrap} aria-label="Accommodation photo gallery">
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.navButton}
          onClick={goPrev}
          aria-label="Foto anterior"
        >
          <span className={styles.navIcon} aria-hidden="true">
            ‹
          </span>
        </button>

        <div className={styles.media}>
          {hasItems ? (
            <>
              <img
                src={current.src}
                alt={current.alt || current.label || "Accommodation photo"}
                className={styles.image}
              />
              {current.label && (
                <div className={styles.caption}>{current.label}</div>
              )}
            </>
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderLabel}>{fallbackLabel}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          className={styles.navButton}
          onClick={goNext}
          aria-label="Foto seguinte"
        >
          <span className={styles.navIcon} aria-hidden="true">
            ›
          </span>
        </button>
      </div>
    </section>
  );
}
