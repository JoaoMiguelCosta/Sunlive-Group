import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CuratedSpotlightCollection.module.css";

function normalizeItems(items = []) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item?.key)
    .map((item, index) => ({
      ...item,
      _index: index,
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
}) {
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

  const activeItem =
    normalizedItems.find((item) => item.key === activeKey) ??
    normalizedItems[0] ??
    null;

  useEffect(() => {
    if (!normalizedItems.length) return;

    if (!normalizedItems.some((item) => item.key === activeKey)) {
      setActiveKey(initialItemKey);
    }
  }, [activeKey, initialItemKey, normalizedItems]);

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

  if (!activeItem) return null;

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

  const kicker = collection?.kicker ?? "Coleção curada";

  const title =
    collection?.title ?? "Seleção curada para reforçar a proposta de valor";

  const description =
    collection?.description ??
    "Itens escolhidos pela relevância, coerência e qualidade da proposta.";

  const spotlightLabel = collection?.spotlightLabel ?? "Seleção principal";

  const overviewLabel =
    collection?.overviewLabel ?? collection?.summaryLabel ?? "Visão do item";

  const primaryMetaLabel = collection?.primaryMetaLabel ?? "Detalhe principal";

  const ctaFallbackLabel =
    collection?.ctaFallbackLabel ?? collection?.ctaLabel ?? "Saiba mais";

  const activeTitle = getItemTitle(activeItem);
  const activeSummary = getItemSummary(activeItem);
  const activePrimaryMeta = getItemPrimaryMeta(activeItem);
  const activeBadge = getItemBadge(activeItem);
  const activeImage = getItemImage(activeItem);

  const imageFit = activeItem?.imageFit ?? "contain";
  const imagePosition = activeItem?.imagePosition ?? "center";

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
        id={`${sectionKey}-panel-${activeItem.key}`}
        role="tabpanel"
        aria-labelledby={`${sectionKey}-tab-${activeItem.key}`}
      >
        <article className={styles.mediaCard}>
          <div className={styles.mediaStage}>
            <div className={styles.mediaGlow} aria-hidden="true" />

            {activeImage?.src ? (
              <img
                className={styles.mediaImage}
                src={activeImage.src}
                alt={activeImage?.alt || activeTitle}
                style={{
                  objectFit: imageFit,
                  objectPosition: imagePosition,
                }}
              />
            ) : (
              <div className={styles.mediaFallback} aria-hidden="true">
                {activeTitle}
              </div>
            )}
          </div>

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
