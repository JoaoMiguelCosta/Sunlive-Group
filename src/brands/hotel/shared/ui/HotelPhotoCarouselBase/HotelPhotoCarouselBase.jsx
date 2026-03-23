import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./HotelPhotoCarouselBase.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function HotelPhotoCarouselBase({
  items = [],
  fallbackLabel = "Fotos",
  className = "",
  showIndicators = true,
  showCaption = false,
  initialIndex = 0,
  fitMode = "cover",
  imagePosition = "center",
  imageBackground = "#120b06",
  showImageBackdrop = false,
  backdropBlur = "16px",
  backdropScale = 1.12,
  backdropOpacity = 0.6,
}) {
  const normalizedItems = useMemo(
    () => (Array.isArray(items) ? items : []),
    [items],
  );

  const hasItems = normalizedItems.length > 0;

  const [activeIndex, setActiveIndex] = useState(() =>
    clampIndex(initialIndex, normalizedItems.length),
  );

  useEffect(() => {
    setActiveIndex((prev) => clampIndex(prev, normalizedItems.length));
  }, [normalizedItems.length]);

  const safeIndex = hasItems
    ? clampIndex(activeIndex, normalizedItems.length)
    : 0;

  const activeItem = hasItems ? normalizedItems[safeIndex] : null;
  const activeSrc = activeItem?.src ?? null;
  const activeAlt = activeItem?.alt ?? fallbackLabel;
  const activeLabel = activeItem?.label ?? fallbackLabel;

  const resolvedFitMode = activeItem?.fitMode ?? fitMode;
  const resolvedImagePosition = activeItem?.imagePosition ?? imagePosition;
  const resolvedImageBackground =
    activeItem?.imageBackground ?? imageBackground;

  const imageClassName =
    resolvedFitMode === "contain"
      ? `${styles.image} ${styles.imageContain}`
      : `${styles.image} ${styles.imageCover}`;

  const goPrev = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) => clampIndex(prev - 1, normalizedItems.length));
  }, [hasItems, normalizedItems.length]);

  const goNext = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) => clampIndex(prev + 1, normalizedItems.length));
  }, [hasItems, normalizedItems.length]);

  const handleSelectIndex = useCallback(
    (index) => {
      if (!hasItems) return;
      setActiveIndex(clampIndex(index, normalizedItems.length));
    },
    [hasItems, normalizedItems.length],
  );

  const shouldShowCaption = showCaption && Boolean(activeItem?.label);

  return (
    <div
      className={`${styles.stage} ${className}`.trim()}
      style={{ background: resolvedImageBackground }}
    >
      {activeSrc ? (
        <>
          {showImageBackdrop ? (
            <div
              className={styles.backdropLayer}
              aria-hidden="true"
              style={{ opacity: backdropOpacity }}
            >
              <img
                className={styles.backdropImage}
                src={activeSrc}
                alt=""
                loading="lazy"
                style={{
                  objectPosition: resolvedImagePosition,
                  filter: `blur(${backdropBlur}) saturate(1.04) brightness(0.72)`,
                  transform: `scale(${backdropScale})`,
                }}
              />
              <div className={styles.backdropTint} />
            </div>
          ) : null}

          <img
            className={imageClassName}
            src={activeSrc}
            alt={activeAlt}
            loading="lazy"
            style={{ objectPosition: resolvedImagePosition }}
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

      {shouldShowCaption ? (
        <div className={styles.caption} aria-label={activeLabel}>
          <span className={styles.captionText}>{activeLabel}</span>
        </div>
      ) : null}

      {hasItems && normalizedItems.length > 1 ? (
        <>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={goPrev}
            aria-label="Foto anterior"
          >
            <span className={styles.navGlyph} aria-hidden="true">
              ‹
            </span>
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={goNext}
            aria-label="Foto seguinte"
          >
            <span className={styles.navGlyph} aria-hidden="true">
              ›
            </span>
          </button>
        </>
      ) : null}

      {showIndicators && hasItems && normalizedItems.length > 1 ? (
        <div
          className={styles.indicatorDock}
          aria-label="Indicadores da galeria"
        >
          <div className={styles.indicatorRail}>
            {normalizedItems.map((item, index) => {
              const isActive = index === safeIndex;

              return (
                <button
                  key={item.id ?? `carousel-dot-${index}`}
                  type="button"
                  className={`${styles.indicatorDot} ${
                    isActive ? styles.indicatorDotActive : ""
                  }`}
                  onClick={() => handleSelectIndex(index)}
                  aria-label={`Ver foto ${index + 1}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
