import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const facilitiesLeisure = facilitiesLeisurePage.sections.facilitiesLeisure;

import styles from "./FacilitiesLeisureGallery.module.css";

const FADE_DURATION_MS = 560;
const STACKED_BREAKPOINT = 1180;

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

function getImageFitMode(item) {
  return item?.fitMode ?? "cover";
}

function getImagePosition(item) {
  return item?.imagePosition ?? "center";
}

export default function FacilitiesLeisureGallery() {
  const section = facilitiesLeisure;

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
  const hasMultipleItems = totalItems > 1;

  const goPrev = useCallback(() => {
    if (!hasMultipleItems) return;

    shouldRevealMediaRef.current = true;

    setActiveIndex((previousIndex) =>
      clampIndex(previousIndex - 1, totalItems),
    );
  }, [hasMultipleItems, totalItems]);

  const goNext = useCallback(() => {
    if (!hasMultipleItems) return;

    shouldRevealMediaRef.current = true;

    setActiveIndex((previousIndex) =>
      clampIndex(previousIndex + 1, totalItems),
    );
  }, [hasMultipleItems, totalItems]);

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
            {ui.overviewEyebrow ? (
              <span className={styles.overviewEyebrow}>
                {ui.overviewEyebrow}
              </span>
            ) : null}

            {ui.overviewTitle ? (
              <h3 className={styles.overviewTitle}>{ui.overviewTitle}</h3>
            ) : null}

            {ui.overviewText ? (
              <p className={styles.overviewText}>{ui.overviewText}</p>
            ) : null}
          </div>

          <article className={styles.activeInfoCard} aria-live="polite">
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

              {activeItem.description ? (
                <p className={styles.activeDescription}>
                  {activeItem.description}
                </p>
              ) : null}
            </div>

            {hasMultipleItems ? (
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
                  <span className={styles.navText}>
                    {ui.previousText ?? "Anterior"}
                  </span>
                </button>

                <button
                  type="button"
                  className={styles.navButton}
                  onClick={goNext}
                  aria-label={ui.nextLabel ?? "Imagem seguinte"}
                >
                  <span className={styles.navText}>
                    {ui.nextText ?? "Seguinte"}
                  </span>
                  <span className={styles.navGlyph} aria-hidden="true">
                    ›
                  </span>
                </button>
              </div>
            ) : null}
          </article>

          <div ref={mediaPanelRef} className={styles.mediaPanel}>
            <div className={styles.mediaCard}>
              {previousItem ? (
                <div
                  className={[
                    styles.mediaBackdrop,
                    styles.transitionLayer,
                    styles.previousBackdrop,
                    isFading ? styles.previousBackdropHidden : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-hidden="true"
                >
                  <img
                    className={styles.mediaBackdropImage}
                    src={previousItem.src}
                    alt=""
                    loading="lazy"
                    style={{
                      objectPosition: getImagePosition(previousItem),
                    }}
                  />
                </div>
              ) : null}

              <div
                className={[
                  styles.mediaBackdrop,
                  styles.transitionLayer,
                  styles.currentBackdrop,
                  !previousItem || isFading
                    ? styles.currentBackdropVisible
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              >
                <img
                  className={styles.mediaBackdropImage}
                  src={displayItem.src}
                  alt=""
                  loading="lazy"
                  style={{
                    objectPosition: getImagePosition(displayItem),
                  }}
                />
              </div>

              {previousItem ? (
                <img
                  className={[
                    styles.mainImage,
                    styles.transitionLayer,
                    styles.previousImage,
                    isFading ? styles.previousImageHidden : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  src={previousItem.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectPosition: getImagePosition(previousItem),
                    objectFit: getImageFitMode(previousItem),
                  }}
                />
              ) : null}

              <img
                className={[
                  styles.mainImage,
                  styles.transitionLayer,
                  styles.currentImage,
                  !previousItem || isFading ? styles.currentImageVisible : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                src={displayItem.src}
                alt={displayItem.alt}
                loading="eager"
                decoding="async"
                style={{
                  objectPosition: getImagePosition(displayItem),
                  objectFit: getImageFitMode(displayItem),
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

          {hasMultipleItems ? (
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
                    className={[
                      styles.thumbnailButton,
                      isActive ? styles.thumbnailButtonActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
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
                          objectPosition: getImagePosition(item),
                        }}
                      />
                    </span>

                    <span className={styles.thumbnailLabel}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
