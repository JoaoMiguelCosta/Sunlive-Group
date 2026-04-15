import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./CuratedSpotlightCollection.module.css";

function normalizeItems(items = []) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item?.key)
    .map((item, index) => ({
      ...item,
      _index: index,
      anchorId:
        item?.anchorId ||
        item?.id ||
        item?.key ||
        `curated-spotlight-item-${index + 1}`,
    }));
}

function defaultGetItemTitle(item) {
  return item?.title ?? item?.city ?? item?.name ?? item?.label ?? "";
}

function defaultGetItemSummary(item) {
  return item?.summary ?? item?.description ?? "";
}

function defaultGetItemPrimaryMeta(item) {
  return item?.primaryMeta ?? item?.location ?? item?.role ?? "";
}

function defaultGetItemBadge(item) {
  return item?.badge ?? "";
}

function defaultGetItemImage(item) {
  return item?.picture ?? null;
}

function defaultGetItemGallery(item) {
  if (!Array.isArray(item?.gallery)) return [];

  return item.gallery
    .filter((image) => image?.src)
    .map((image, index) => ({
      key: image?.key || `${item?.key || "gallery"}-${index + 1}`,
      src: image.src,
      alt: image.alt || "",
      imageFit: image?.imageFit,
      imagePosition: image?.imagePosition,
    }));
}

function defaultGetItemSpotlightTitle(item) {
  return item?.spotlightTitle ?? "";
}

function defaultGetItemSpotlightDescription(item) {
  return item?.spotlightDescription ?? "";
}

function isElementSufficientlyVisible(element, visibilityRatio = 0.68) {
  if (!element || typeof window === "undefined") return true;

  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight || 0;
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth || 0;

  if (viewportHeight <= 0 || viewportWidth <= 0) return true;

  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, viewportHeight);
  const visibleLeft = Math.max(rect.left, 0);
  const visibleRight = Math.min(rect.right, viewportWidth);

  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);
  const visibleArea = visibleHeight * visibleWidth;
  const totalArea = Math.max(rect.width * rect.height, 1);

  return visibleArea / totalArea >= visibilityRatio;
}

function getScrollTarget(elements = []) {
  for (const element of elements) {
    if (element && !isElementSufficientlyVisible(element)) {
      return element;
    }
  }

  return null;
}

function scrollElementIntoView(element, offset = 92) {
  if (!element || typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  )?.matches;

  const rect = element.getBoundingClientRect();
  const targetTop = window.scrollY + rect.top - offset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

function buildGalleryItems({
  item,
  getItemImage,
  getItemGallery,
  fallbackAlt,
  fallbackFit,
  fallbackPosition,
}) {
  const primaryImage = getItemImage(item);
  const galleryImages = getItemGallery(item);

  if (galleryImages.length > 0) {
    return galleryImages.map((image, index) => ({
      key: image.key || `${item?.key || "item"}-gallery-${index + 1}`,
      src: image.src,
      alt: image.alt || fallbackAlt,
      imageFit: image.imageFit || fallbackFit,
      imagePosition: image.imagePosition || fallbackPosition,
    }));
  }

  if (primaryImage?.src) {
    return [
      {
        key: `${item?.key || "item"}-primary-image`,
        src: primaryImage.src,
        alt: primaryImage.alt || fallbackAlt,
        imageFit: fallbackFit,
        imagePosition: fallbackPosition,
      },
    ];
  }

  return [];
}

export default function CuratedSpotlightCollection({
  collection = {},
  items = [],
  sectionKey = "curated-spotlight-collection",
  className = "",
  scrollOffset = 92,
  getItemTitle = defaultGetItemTitle,
  getItemSummary = defaultGetItemSummary,
  getItemPrimaryMeta = defaultGetItemPrimaryMeta,
  getItemBadge = defaultGetItemBadge,
  getItemImage = defaultGetItemImage,
  getItemGallery = defaultGetItemGallery,
  getItemSpotlightTitle = defaultGetItemSpotlightTitle,
  getItemSpotlightDescription = defaultGetItemSpotlightDescription,
}) {
  const { hash } = useLocation();

  const normalizedItems = useMemo(() => normalizeItems(items), [items]);

  const initialItemKey =
    collection?.initialKey &&
    normalizedItems.some((item) => item.key === collection.initialKey)
      ? collection.initialKey
      : (normalizedItems[0]?.key ?? null);

  const [activeKey, setActiveKey] = useState(initialItemKey);

  const rootRef = useRef(null);
  const spotlightRef = useRef(null);
  const hasMountedRef = useRef(false);
  const initialRenderRef = useRef(true);

  useEffect(() => {
    if (!normalizedItems.length) return;

    if (!normalizedItems.some((item) => item.key === activeKey)) {
      setActiveKey(initialItemKey);
    }
  }, [activeKey, initialItemKey, normalizedItems]);

  useEffect(() => {
    if (!hash || !normalizedItems.length) return;

    const decodedHash = decodeURIComponent(hash.replace(/^#/, ""));
    const matchedItem = normalizedItems.find(
      (item) => item.anchorId === decodedHash,
    );

    if (!matchedItem || matchedItem.key === activeKey) return;

    setActiveKey(matchedItem.key);
  }, [hash, normalizedItems, activeKey]);

  const activeItem =
    normalizedItems.find((item) => item.key === activeKey) ??
    normalizedItems[0] ??
    null;

  const activeTitle = getItemTitle(activeItem);
  const activeSummary = getItemSummary(activeItem);
  const activePrimaryMeta = getItemPrimaryMeta(activeItem);
  const activeBadge = getItemBadge(activeItem);
  const activeSpotlightTitle = getItemSpotlightTitle(activeItem);
  const activeSpotlightDescription = getItemSpotlightDescription(activeItem);

  const brandImage = getItemImage(activeItem);
  const defaultImageFit = activeItem?.imageFit ?? "contain";
  const defaultImagePosition = activeItem?.imagePosition ?? "center";

  const activeGallery = useMemo(
    () =>
      buildGalleryItems({
        item: activeItem,
        getItemImage,
        getItemGallery,
        fallbackAlt: activeTitle,
        fallbackFit: defaultImageFit,
        fallbackPosition: defaultImagePosition,
      }),
    [
      activeItem,
      activeTitle,
      defaultImageFit,
      defaultImagePosition,
      getItemGallery,
      getItemImage,
    ],
  );

  const [activeMediaKey, setActiveMediaKey] = useState(
    activeGallery[0]?.key ?? null,
  );

  useEffect(() => {
    if (!activeGallery.length) {
      setActiveMediaKey(null);
      return;
    }

    const hasCurrentKey = activeGallery.some(
      (image) => image.key === activeMediaKey,
    );

    if (!hasCurrentKey) {
      setActiveMediaKey(activeGallery[0].key);
    }
  }, [activeGallery, activeMediaKey]);

  useEffect(() => {
    if (!activeItem) return;

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    const scrollTarget = getScrollTarget([
      spotlightRef.current,
      rootRef.current,
    ]);

    if (scrollTarget) {
      scrollElementIntoView(scrollTarget, scrollOffset);
    }
  }, [activeItem, scrollOffset]);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
    }
  }, []);

  if (!activeItem) return null;

  const activeMedia =
    activeGallery.find((image) => image.key === activeMediaKey) ??
    activeGallery[0] ??
    null;

  const hasGallery = activeGallery.length > 1;
  const hasBrandOverlay = Boolean(hasGallery && brandImage?.src);

  const rootClassName = [styles.root, className].filter(Boolean).join(" ");

  const sectionAriaLabel =
    collection?.ariaLabel ?? "Explorar coleção em destaque";

  const selectorLabel =
    collection?.selectorLabel ?? collection?.railLabel ?? "Itens disponíveis";

  const selectorAriaLabel =
    collection?.selectorAriaLabel ??
    collection?.railAriaLabel ??
    "Selecionar item em destaque";

  const selectorCountSingularSuffix =
    collection?.selectorCountSingularSuffix ?? "item selecionado";

  const selectorCountSuffix =
    collection?.selectorCountSuffix ??
    collection?.railCountSuffix ??
    "itens selecionados";

  const kicker = collection?.kicker ?? "Seleção Hoteleira";

  const fallbackTitle =
    collection?.title ?? "Seleção curada para reforçar a proposta de valor";

  const fallbackDescription =
    collection?.description ??
    "Itens escolhidos pela relevância, coerência e qualidade da proposta.";

  const title = activeSpotlightTitle || fallbackTitle;
  const description = activeSpotlightDescription || fallbackDescription;

  const spotlightLabel = collection?.spotlightLabel ?? "Seleção principal";

  const overviewLabel =
    collection?.overviewLabel ?? collection?.summaryLabel ?? "Visão do item";

  const primaryMetaLabel = collection?.primaryMetaLabel ?? "Detalhe principal";

  const ctaFallbackLabel =
    collection?.ctaFallbackLabel ?? collection?.ctaLabel ?? "Saiba mais";

  const galleryLabel = collection?.galleryLabel ?? "Galeria";
  const galleryCountLabel = collection?.galleryCountLabel ?? "Imagens";
  const galleryAriaLabel =
    collection?.galleryAriaLabel ?? "Selecionar imagem da galeria";
  const brandBadgeLabel = collection?.brandBadgeLabel ?? "Marca do parceiro";

  function handleKeyDown(event, currentIndex) {
    if (!normalizedItems.length) return;

    const lastIndex = normalizedItems.length - 1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
    }

    if (nextIndex !== currentIndex) {
      setActiveKey(normalizedItems[nextIndex].key);
    }
  }

  function handleGalleryKeyDown(event, currentIndex) {
    if (!hasGallery) return;

    const lastIndex = activeGallery.length - 1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
    }

    if (nextIndex !== currentIndex) {
      setActiveMediaKey(activeGallery[nextIndex].key);
    }
  }

  return (
    <div ref={rootRef} className={rootClassName} aria-label={sectionAriaLabel}>
      <div className={styles.topRail}>
        <div className={styles.topRailHeader}>
          <p className={styles.topRailEyebrow}>{selectorLabel}</p>
          <p className={styles.topRailCount}>
            {normalizedItems.length}{" "}
            {normalizedItems.length === 1
              ? selectorCountSingularSuffix
              : selectorCountSuffix}
          </p>
        </div>

        <div
          className={styles.selectorGrid}
          role="tablist"
          aria-label={selectorAriaLabel}
        >
          {normalizedItems.map((item, index) => {
            const isActive = item.key === activeItem.key;
            const itemTitle = getItemTitle(item);
            const itemSummary = getItemSummary(item);
            const itemPrimaryMeta = getItemPrimaryMeta(item);
            const itemBadge = getItemBadge(item);

            const tabId = `${sectionKey}-tab-${item.key}`;
            const panelId = `${sectionKey}-panel-${item.key}`;

            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                id={tabId}
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                className={styles.selectorCard}
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveKey(item.key)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {itemBadge ? (
                  <span className={styles.selectorBadge}>{itemBadge}</span>
                ) : null}

                <div className={styles.selectorCardTop}>
                  <strong className={styles.selectorTitle}>{itemTitle}</strong>

                  {itemPrimaryMeta ? (
                    <span className={styles.selectorMeta}>
                      {itemPrimaryMeta}
                    </span>
                  ) : null}
                </div>

                {itemSummary ? (
                  <p className={styles.selectorSummary}>{itemSummary}</p>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={spotlightRef}
        className={styles.spotlight}
        id={activeItem.anchorId}
        role="tabpanel"
        aria-labelledby={`${sectionKey}-tab-${activeItem.key}`}
        data-anchor-id={activeItem.anchorId}
      >
        <article className={styles.mediaCard}>
          <div className={styles.mediaStage}>
            <div className={styles.mediaGlow} aria-hidden="true" />

            {activeMedia?.src ? (
              <img
                key={activeMedia.key}
                className={styles.mediaImage}
                src={activeMedia.src}
                alt={activeMedia.alt || activeTitle}
                style={{
                  objectFit: activeMedia.imageFit || defaultImageFit,
                  objectPosition:
                    activeMedia.imagePosition || defaultImagePosition,
                }}
                loading="eager"
                decoding="async"
                fetchPriority={initialRenderRef.current ? "high" : "auto"}
              />
            ) : (
              <div className={styles.mediaFallback} aria-hidden="true">
                {activeTitle}
              </div>
            )}

            {hasBrandOverlay ? (
              <div className={styles.brandOverlay} aria-label={brandBadgeLabel}>
                <img
                  className={styles.brandOverlayImage}
                  src={brandImage.src}
                  alt={brandImage.alt || activeTitle}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : null}
          </div>

          {hasGallery ? (
            <div className={styles.galleryRail}>
              <div className={styles.galleryRailHeader}>
                <p className={styles.galleryRailLabel}>{galleryLabel}</p>
                <p className={styles.galleryRailCount}>
                  {activeGallery.length} {galleryCountLabel}
                </p>
              </div>

              <div
                className={styles.galleryGrid}
                role="tablist"
                aria-label={galleryAriaLabel}
              >
                {activeGallery.map((image, index) => {
                  const isActive = image.key === activeMedia?.key;
                  const tabId = `${sectionKey}-gallery-tab-${activeItem.key}-${image.key}`;
                  const panelId = `${sectionKey}-panel-${activeItem.key}`;

                  return (
                    <button
                      key={image.key}
                      type="button"
                      role="tab"
                      id={tabId}
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      className={styles.galleryThumb}
                      data-active={isActive ? "true" : "false"}
                      onClick={() => setActiveMediaKey(image.key)}
                      onKeyDown={(event) => handleGalleryKeyDown(event, index)}
                    >
                      <img
                        className={styles.galleryThumbImage}
                        src={image.src}
                        alt={image.alt || activeTitle}
                        style={{
                          objectFit: image.imageFit || defaultImageFit,
                          objectPosition:
                            image.imagePosition || defaultImagePosition,
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className={styles.mediaCaption}>
            {spotlightLabel ? (
              <span className={styles.mediaCaptionBadge}>{spotlightLabel}</span>
            ) : null}

            <h3 className={styles.mediaCaptionTitle}>{activeTitle}</h3>

            {activeBadge ? (
              <p className={styles.mediaCaptionMeta}>{activeBadge}</p>
            ) : activePrimaryMeta ? (
              <p className={styles.mediaCaptionMeta}>{activePrimaryMeta}</p>
            ) : null}
          </div>
        </article>

        <article className={styles.contentCard}>
          <div className={styles.contentIntro}>
            {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
            {title ? <h3 className={styles.title}>{title}</h3> : null}
            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}
          </div>

          <div className={styles.infoStack}>
            {activeSummary ? (
              <section className={styles.infoPanel}>
                <p className={styles.infoLabel}>{overviewLabel}</p>
                <p className={styles.infoValue}>{activeSummary}</p>
              </section>
            ) : null}

            {activePrimaryMeta ? (
              <section className={styles.infoPanel}>
                <p className={styles.infoLabel}>{primaryMetaLabel}</p>
                <p className={styles.infoValueStrong}>{activePrimaryMeta}</p>
              </section>
            ) : null}
          </div>

          {activeItem?.href ? (
            <div className={styles.actions}>
              <a
                className={styles.primaryLink}
                href={activeItem.href}
                target="_blank"
                rel="noreferrer"
                aria-label={
                  activeItem?.ctaLabel || `${ctaFallbackLabel} ${activeTitle}`
                }
              >
                <span>{activeItem?.ctaLabel ?? ctaFallbackLabel}</span>
                <span className={styles.primaryLinkIcon} aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          ) : null}
        </article>
      </div>
    </div>
  );
}
