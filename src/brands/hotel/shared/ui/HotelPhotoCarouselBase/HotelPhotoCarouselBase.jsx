import styles from "./HotelPhotoCarouselBase.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function HotelPhotoCarouselBase({
  items,
  activeIndex,
  onPrev,
  onNext,
  fallbackLabel = "Fotos",
  className = "",
}) {
  const hasItems = Array.isArray(items) && items.length > 0;

  const activeItem = hasItems
    ? items[clampIndex(activeIndex, items.length)]
    : null;

  const activeSrc = activeItem?.src ?? null;
  const activeAlt = activeItem?.alt ?? fallbackLabel;

  return (
    <div className={`${styles.stage} ${className}`.trim()}>
      {activeSrc ? (
        <>
          <img
            className={styles.image}
            src={activeSrc}
            alt={activeAlt}
            loading="lazy"
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
        </>
      ) : (
        <div className={styles.fallback} role="img" aria-label={fallbackLabel}>
          <div className={styles.fallbackInner}>
            <span className={styles.fallbackEyebrow}>Galeria</span>
            <span className={styles.fallbackTitle}>{fallbackLabel}</span>
          </div>
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
    </div>
  );
}
