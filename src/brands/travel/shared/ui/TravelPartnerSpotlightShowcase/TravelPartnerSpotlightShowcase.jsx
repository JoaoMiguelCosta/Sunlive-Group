import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TravelPartnerSpotlightShowcase.module.css";

function normalizeItems(items = []) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item?.key && item?.city)
    .map((item, index) => ({
      ...item,
      _index: index,
    }));
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

export default function TravelPartnerSpotlightShowcase({
  showcase = {},
  items = [],
  className = "",
  scrollOffset = 92,
}) {
  const normalizedItems = useMemo(() => normalizeItems(items), [items]);

  const initialItemKey =
    showcase?.initialKey &&
    normalizedItems.some((item) => item.key === showcase.initialKey)
      ? showcase.initialKey
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
    showcase?.ariaLabel ?? "Explorar parceiros em destaque";

  const selectorLabel = showcase?.selectorLabel ?? "Itens disponíveis";
  const selectorAriaLabel =
    showcase?.selectorAriaLabel ?? "Selecionar item em destaque";

  const kicker = showcase?.kicker ?? "Rede de parceiros";
  const title =
    showcase?.title ?? "Marcas selecionadas para ampliar a proposta de valor";
  const description =
    showcase?.description ??
    "Entidades escolhidas pela credibilidade e complementaridade da oferta.";

  const spotlightLabel = showcase?.spotlightLabel ?? "Item em destaque";
  const roleLabel = showcase?.roleLabel ?? "Detalhe principal";

  const ctaFallbackLabel = showcase?.ctaFallbackLabel ?? "Saiba mais";
  const overviewLabel = showcase?.overviewLabel ?? "Visão do item";

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
              ? "item selecionado"
              : "itens selecionados"}
          </p>
        </div>

        <div
          className={styles.selectorGrid}
          role="tablist"
          aria-label={selectorAriaLabel}
        >
          {normalizedItems.map((item, index) => {
            const isActive = item.key === activeItem.key;

            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                id={`spotlight-tab-${item.key}`}
                aria-selected={isActive}
                aria-controls={`spotlight-panel-${item.key}`}
                tabIndex={isActive ? 0 : -1}
                className={styles.selectorCard}
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveKey(item.key)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {item?.badge ? (
                  <span className={styles.selectorBadge}>{item.badge}</span>
                ) : null}

                <div className={styles.selectorCardTop}>
                  <strong className={styles.selectorTitle}>{item.city}</strong>

                  {item?.role ? (
                    <span className={styles.selectorRole}>{item.role}</span>
                  ) : null}
                </div>

                {item?.summary ? (
                  <p className={styles.selectorSummary}>{item.summary}</p>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={spotlightRef}
        className={styles.spotlight}
        id={`spotlight-panel-${activeItem.key}`}
        role="tabpanel"
        aria-labelledby={`spotlight-tab-${activeItem.key}`}
      >
        <article className={styles.mediaCard}>
          <div className={styles.mediaStage}>
            <div className={styles.mediaGlow} aria-hidden="true" />

            {activeItem?.picture?.src ? (
              <img
                className={styles.mediaImage}
                src={activeItem.picture.src}
                alt={activeItem?.picture?.alt || activeItem.city}
                style={{
                  objectFit: imageFit,
                  objectPosition: imagePosition,
                }}
              />
            ) : (
              <div className={styles.mediaFallback} aria-hidden="true">
                {activeItem.city}
              </div>
            )}
          </div>

          <div className={styles.mediaCaption}>
            {spotlightLabel ? (
              <span className={styles.mediaCaptionBadge}>{spotlightLabel}</span>
            ) : null}

            <h3 className={styles.mediaCaptionTitle}>{activeItem.city}</h3>

            {activeItem?.role ? (
              <p className={styles.mediaCaptionMeta}>{activeItem.role}</p>
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
            <section className={styles.infoPanel}>
              <p className={styles.infoLabel}>{overviewLabel}</p>
              <p className={styles.infoValue}>{activeItem.summary}</p>
            </section>

            <section className={styles.infoPanel}>
              <p className={styles.infoLabel}>{roleLabel}</p>
              <p className={styles.infoValueStrong}>{activeItem.role}</p>
            </section>
          </div>

          {activeItem?.href ? (
            <div className={styles.actions}>
              <a
                className={styles.primaryLink}
                href={activeItem.href}
                target="_blank"
                rel="noreferrer"
                aria-label={
                  activeItem?.ctaLabel ||
                  `${ctaFallbackLabel} ${activeItem.city}`
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
