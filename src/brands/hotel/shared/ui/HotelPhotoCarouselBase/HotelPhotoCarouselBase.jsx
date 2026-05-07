import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./HotelPhotoCarouselBase.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

function joinClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

export default function HotelPhotoCarouselBase({
  items = [],
  fallbackLabel = "Fotos",
  fallbackEyebrow = "Galeria",
  fallbackTitle = "Fotos",
  previousLabel = "Foto anterior",
  nextLabel = "Foto seguinte",
  indicatorsLabel = "Indicadores da galeria",
  className = "",
  captionClassName = "",
  indicatorDockClassName = "",
  indicatorRailClassName = "",
  showIndicators = true,
  showCaption = false,
  initialIndex = 0,
  activeIndex: controlledActiveIndex,
  onPrev,
  onNext,
  onSelectIndex,
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
  const isControlled = typeof controlledActiveIndex === "number";

  const [internalActiveIndex, setInternalActiveIndex] = useState(() =>
    clampIndex(initialIndex, normalizedItems.length),
  );

  useEffect(() => {
    if (!isControlled) {
      setInternalActiveIndex((prev) =>
        clampIndex(prev, normalizedItems.length),
      );
    }
  }, [isControlled, normalizedItems.length]);

  const resolvedIndex = isControlled
    ? clampIndex(controlledActiveIndex, normalizedItems.length)
    : clampIndex(internalActiveIndex, normalizedItems.length);

  const activeItem = hasItems ? normalizedItems[resolvedIndex] : null;

  const activeSrc = activeItem?.src ?? null;
  const activeAlt = activeItem?.alt ?? fallbackLabel;
  const activeLabel = activeItem?.label ?? fallbackLabel;

  const resolvedFitMode = activeItem?.fitMode ?? fitMode;
  const resolvedImagePosition = activeItem?.imagePosition ?? imagePosition;
  const resolvedImageBackground =
    activeItem?.imageBackground ?? imageBackground;

  const shouldShowCaption = showCaption && Boolean(activeItem?.label);
  const shouldShowIndicators =
    showIndicators && hasItems && normalizedItems.length > 1;

  const imageClassName =
    resolvedFitMode === "contain"
      ? joinClassNames(styles.image, styles.imageContain)
      : joinClassNames(styles.image, styles.imageCover);

  const stageStyle = {
    "--carousel-image-bg": resolvedImageBackground,
    "--carousel-image-position": resolvedImagePosition,
    "--carousel-backdrop-blur": backdropBlur,
    "--carousel-backdrop-scale": String(backdropScale),
    "--carousel-backdrop-current-scale": String(backdropScale),
    "--carousel-backdrop-opacity": String(backdropOpacity),
    background: resolvedImageBackground,
  };

  const setIndex = useCallback(
    (index) => {
      if (!hasItems) return;

      const safeIndex = clampIndex(index, normalizedItems.length);

      if (!isControlled) {
        setInternalActiveIndex(safeIndex);
      }

      onSelectIndex?.(safeIndex);
    },
    [hasItems, isControlled, normalizedItems.length, onSelectIndex],
  );

  const goPrev = useCallback(() => {
    if (!hasItems) return;

    if (onPrev) {
      onPrev();
      return;
    }

    setIndex(resolvedIndex - 1);
  }, [hasItems, onPrev, resolvedIndex, setIndex]);

  const goNext = useCallback(() => {
    if (!hasItems) return;

    if (onNext) {
      onNext();
      return;
    }

    setIndex(resolvedIndex + 1);
  }, [hasItems, onNext, resolvedIndex, setIndex]);

  return (
    <div
      className={joinClassNames(styles.stage, className)}
      style={stageStyle}
      data-has-caption={shouldShowCaption ? "true" : "false"}
      data-has-indicators={shouldShowIndicators ? "true" : "false"}
    >
      {activeSrc ? (
        <>
          {showImageBackdrop ? (
            <div className={styles.backdropLayer} aria-hidden="true">
              <img
                className={styles.backdropImage}
                src={activeSrc}
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <div className={styles.backdropTint} />
            </div>
          ) : null}

          <img
            className={imageClassName}
            src={activeSrc}
            alt={activeAlt}
            loading={resolvedIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable="false"
          />

          <div className={styles.imageOverlay} aria-hidden="true" />
        </>
      ) : (
        <div className={styles.fallback} role="img" aria-label={fallbackLabel}>
          <div className={styles.fallbackInner}>
            <span className={styles.fallbackEyebrow}>{fallbackEyebrow}</span>
            <span className={styles.fallbackTitle}>{fallbackTitle}</span>
          </div>
        </div>
      )}

      {shouldShowCaption ? (
        <div
          className={joinClassNames(styles.caption, captionClassName)}
          aria-label={activeLabel}
        >
          <span className={styles.captionText}>{activeLabel}</span>
        </div>
      ) : null}

      {hasItems && normalizedItems.length > 1 ? (
        <>
          <button
            type="button"
            className={joinClassNames(styles.navButton, styles.navLeft)}
            onClick={goPrev}
            aria-label={previousLabel}
          >
            <span className={styles.navGlyph} aria-hidden="true">
              ‹
            </span>
          </button>

          <button
            type="button"
            className={joinClassNames(styles.navButton, styles.navRight)}
            onClick={goNext}
            aria-label={nextLabel}
          >
            <span className={styles.navGlyph} aria-hidden="true">
              ›
            </span>
          </button>
        </>
      ) : null}

      {shouldShowIndicators ? (
        <div
          className={joinClassNames(
            styles.indicatorDock,
            indicatorDockClassName,
          )}
          aria-label={indicatorsLabel}
        >
          <div
            className={joinClassNames(
              styles.indicatorRail,
              indicatorRailClassName,
            )}
          >
            {normalizedItems.map((item, index) => {
              const isActive = index === resolvedIndex;

              return (
                <button
                  key={item.id ?? `carousel-dot-${index}`}
                  type="button"
                  className={joinClassNames(
                    styles.indicatorDot,
                    isActive ? styles.indicatorDotActive : "",
                  )}
                  onClick={() => setIndex(index)}
                  aria-label={`Ver imagem ${index + 1}`}
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
