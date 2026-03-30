import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import hotelBrand from "../../../../config/index.js";

import styles from "./FacilitiesLeisureGallery.module.css";

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function normalizeGalleryItems(items) {
  return (Array.isArray(items) ? items : []).filter((item) => item?.src);
}

function preloadGalleryImages(items) {
  items.slice(0, 4).forEach((item) => {
    if (!item?.src) return;

    const image = new Image();
    image.src = item.src;
  });
}

const FADE_DURATION_MS = 560;
const STACKED_BREAKPOINT = 1180;

export default function FacilitiesLeisureGallery() {
  const section =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

  const ui = section?.ui ?? {};
  const gallery = section?.gallery ?? null;

  const items = useMemo(
    () => normalizeGalleryItems(gallery?.items ?? []),
    [gallery?.items],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayItem, setDisplayItem] = useState(items[0] ?? null);
  const [previousItem, setPreviousItem] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const fadeTimeoutRef = useRef(null);
  const rafFirstRef = useRef(null);
  const rafSecondRef = useRef(null);
  const mediaPanelRef = useRef(null);
  const shouldRevealMediaRef = useRef(false);

  useEffect(() => {
    setActiveIndex((previousIndex) => clampIndex(previousIndex, items.length));
  }, [items.length]);

  useEffect(() => {
    if (!items.length) return;
    preloadGalleryImages(items);
  }, [items]);

  useEffect(() => {
    const nextItem = items[activeIndex] ?? null;

    if (!nextItem) {
      setDisplayItem(null);
      setPreviousItem(null);
      setIsFading(false);
      return;
    }

    setDisplayItem((currentDisplayItem) => {
      if (!currentDisplayItem) {
        setPreviousItem(null);
        setIsFading(false);
        return nextItem;
      }

      if (currentDisplayItem.id === nextItem.id) {
        return currentDisplayItem;
      }

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }

      if (rafFirstRef.current) {
        cancelAnimationFrame(rafFirstRef.current);
        rafFirstRef.current = null;
      }

      if (rafSecondRef.current) {
        cancelAnimationFrame(rafSecondRef.current);
        rafSecondRef.current = null;
      }

      setIsFading(false);
      setPreviousItem(currentDisplayItem);

      rafFirstRef.current = requestAnimationFrame(() => {
        rafSecondRef.current = requestAnimationFrame(() => {
          setIsFading(true);

          fadeTimeoutRef.current = window.setTimeout(() => {
            setPreviousItem(null);
            setIsFading(false);
            fadeTimeoutRef.current = null;
          }, FADE_DURATION_MS);
        });
      });

      return nextItem;
    });
  }, [activeIndex, items]);

  useEffect(() => {
    if (!shouldRevealMediaRef.current) return;
    if (typeof window === "undefined") return;

    const isStackedLayout = window.innerWidth <= STACKED_BREAKPOINT;
    if (!isStackedLayout) {
      shouldRevealMediaRef.current = false;
      return;
    }

    mediaPanelRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    shouldRevealMediaRef.current = false;
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      if (rafFirstRef.current) {
        cancelAnimationFrame(rafFirstRef.current);
      }

      if (rafSecondRef.current) {
        cancelAnimationFrame(rafSecondRef.current);
      }
    };
  }, []);

  const activeItem = items[activeIndex] ?? null;
  const totalItems = items.length;

  const goPrev = useCallback(() => {
    shouldRevealMediaRef.current = true;
    setActiveIndex((previousIndex) =>
      clampIndex(previousIndex - 1, totalItems),
    );
  }, [totalItems]);

  const goNext = useCallback(() => {
    shouldRevealMediaRef.current = true;
    setActiveIndex((previousIndex) =>
      clampIndex(previousIndex + 1, totalItems),
    );
  }, [totalItems]);

  const handleSelectItem = useCallback((index) => {
    shouldRevealMediaRef.current = true;
    setActiveIndex(index);
  }, []);

  if (!items.length || !activeItem || !displayItem) return null;

  return (
    <div
      className={styles.galleryBlock}
      aria-label={ui.galleryAriaLabel ?? "Galeria de instalações e lazer"}
    >
      <div className={styles.galleryShell}>
        <div className={styles.galleryLayout}>
          <div className={styles.overviewBlock}>
            <span className={styles.overviewEyebrow}>
              {ui.overviewEyebrow ?? "Experiência"}
            </span>

            <h3 className={styles.overviewTitle}>
              {ui.overviewTitle ?? "Galeria"}
            </h3>

            <p className={styles.overviewText}>{ui.overviewText ?? ""}</p>
          </div>

          <div className={styles.activeInfoCard}>
            <div className={styles.activeMetaRow}>
              <span className={styles.counterPill}>
                {ui.counterPrefix ?? "Imagem"} {activeIndex + 1}/{totalItems}
              </span>

              {ui.featuredBadge ? (
                <span className={styles.featuredBadge}>{ui.featuredBadge}</span>
              ) : null}
            </div>

            <div className={styles.activeCopy}>
              <h4 className={styles.activeTitle}>{activeItem.label}</h4>
              <p className={styles.activeDescription}>
                {activeItem.description}
              </p>
            </div>

            <div className={styles.controlsRow}>
              <button
                type="button"
                className={styles.navButton}
                onClick={goPrev}
                aria-label={ui.previousLabel ?? "Imagem anterior"}
              >
                <span className={styles.navGlyph} aria-hidden="true">
                  ‹
                </span>
                <span className={styles.navText}>Anterior</span>
              </button>

              <button
                type="button"
                className={styles.navButton}
                onClick={goNext}
                aria-label={ui.nextLabel ?? "Imagem seguinte"}
              >
                <span className={styles.navText}>Seguinte</span>
                <span className={styles.navGlyph} aria-hidden="true">
                  ›
                </span>
              </button>
            </div>
          </div>

          <div ref={mediaPanelRef} className={styles.mediaPanel}>
            <div className={styles.mediaCard}>
              {previousItem ? (
                <div
                  className={`${styles.mediaBackdrop} ${styles.transitionLayer} ${
                    styles.previousBackdrop
                  } ${isFading ? styles.previousBackdropHidden : ""}`}
                  aria-hidden="true"
                >
                  <img
                    className={styles.mediaBackdropImage}
                    src={previousItem.src}
                    alt=""
                    loading="lazy"
                    style={{
                      objectPosition: previousItem.imagePosition ?? "center",
                    }}
                  />
                </div>
              ) : null}

              <div
                className={`${styles.mediaBackdrop} ${styles.transitionLayer} ${
                  styles.currentBackdrop
                } ${!previousItem || isFading ? styles.currentBackdropVisible : ""}`}
                aria-hidden="true"
              >
                <img
                  className={styles.mediaBackdropImage}
                  src={displayItem.src}
                  alt=""
                  loading="lazy"
                  style={{
                    objectPosition: displayItem.imagePosition ?? "center",
                  }}
                />
              </div>

              {previousItem ? (
                <img
                  className={`${styles.mainImage} ${styles.transitionLayer} ${
                    styles.previousImage
                  } ${isFading ? styles.previousImageHidden : ""}`}
                  src={previousItem.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  style={{
                    objectPosition: previousItem.imagePosition ?? "center",
                  }}
                />
              ) : null}

              <img
                className={`${styles.mainImage} ${styles.transitionLayer} ${
                  styles.currentImage
                } ${!previousItem || isFading ? styles.currentImageVisible : ""}`}
                src={displayItem.src}
                alt={displayItem.alt}
                loading="eager"
                style={{
                  objectPosition: displayItem.imagePosition ?? "center",
                }}
              />

              <div className={styles.mediaOverlay} aria-hidden="true" />

              <div className={styles.mediaBottomBar}>
                <span className={styles.mediaBottomLabel}>
                  {displayItem.label}
                </span>
              </div>
            </div>
          </div>

          <div
            className={styles.thumbnailsBlock}
            aria-label={ui.thumbnailsLabel ?? "Miniaturas da galeria"}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id ?? `facilities-thumb-${index}`}
                  type="button"
                  className={`${styles.thumbnailButton} ${
                    isActive ? styles.thumbnailButtonActive : ""
                  }`}
                  onClick={() => handleSelectItem(index)}
                  aria-label={`Ver ${item.label}`}
                  aria-pressed={isActive}
                >
                  <span className={styles.thumbnailMedia}>
                    <img
                      className={styles.thumbnailImage}
                      src={item.src}
                      alt={item.thumbAlt ?? item.alt ?? item.label}
                      loading="lazy"
                      style={{
                        objectPosition: item.imagePosition ?? "center",
                      }}
                    />
                  </span>

                  <span className={styles.thumbnailLabel}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
