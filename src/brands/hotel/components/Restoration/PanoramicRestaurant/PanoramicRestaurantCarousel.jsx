import styles from "./PanoramicRestaurantPhotoCarousel.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function PanoramicRestaurantCarousel({
  items,
  activeIndex,
  onPrev,
  onNext,
  fallbackLabel = "Fotos",
}) {
  const hasItems = Array.isArray(items) && items.length > 0;

  const activeItem = hasItems
    ? items[clampIndex(activeIndex, items.length)]
    : null;
  const activeSrc = activeItem?.src ?? null;

  return (
    <>
      {activeSrc ? (
        <img
          className={styles.image}
          src={activeSrc}
          alt={activeItem?.alt ?? fallbackLabel}
          loading="lazy"
        />
      ) : (
        <div className={styles.fallback} role="img" aria-label={fallbackLabel}>
          <span className={styles.fallbackTitle}>{fallbackLabel}</span>
        </div>
      )}

      <button
        type="button"
        className={`${styles.navButton} ${styles.navLeft}`}
        onClick={onPrev}
        aria-label="Foto anterior"
      >
        <span className={styles.navGlyph} aria-hidden="true">
          ‹
        </span>
      </button>

      <button
        type="button"
        className={`${styles.navButton} ${styles.navRight}`}
        onClick={onNext}
        aria-label="Foto seguinte"
      >
        <span className={styles.navGlyph} aria-hidden="true">
          ›
        </span>
      </button>
    </>
  );
}
