import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./TravelCuratedShowcase.module.css";

function normalizeItems(items = []) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item && (item.city || item.title || item.name))
    .map((item, index) => ({
      ...item,
      key: item?.key || `showcase-item-${index}`,
      anchorId:
        item?.anchorId || item?.id || item?.key || `showcase-anchor-${index}`,
    }));
}

function getItemTitle(item = {}) {
  return item?.city || item?.title || item?.name || "";
}

function getPrimaryMetaValue(item = {}, showcase = {}) {
  const primaryMetaKey = showcase?.primaryMetaKey ?? null;

  if (primaryMetaKey && item?.[primaryMetaKey]) {
    return item[primaryMetaKey];
  }

  return item?.duration || item?.location || item?.role || item?.meta || "";
}

function getHighlightItems(item = {}, showcase = {}) {
  const highlightsKey = showcase?.highlightsKey ?? "highlights";
  const value = item?.[highlightsKey];

  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function isElementSufficientlyVisible(element) {
  if (!element || typeof window === "undefined") return true;

  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 0;

  const visibleTop = rect.top >= 24;
  const visibleBottom = rect.bottom <= viewportHeight - 24;

  return visibleTop && visibleBottom;
}

function scrollSpotlightIntoView(element) {
  if (!element || typeof window === "undefined") return;

  const topOffset = 88;
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY + rect.top - topOffset;

  window.scrollTo({
    top: Math.max(0, scrollTop),
    behavior: "smooth",
  });
}

export default function TravelCuratedShowcase({
  showcase = {},
  items = [],
  className = "",
  sectionKey = "travel-curated-showcase",
}) {
  const { hash } = useLocation();
  const instanceId = useId();
  const spotlightRef = useRef(null);

  const safeItems = useMemo(() => normalizeItems(items), [items]);

  const initialKey =
    safeItems.find((item) => item.key === showcase?.initialKey)?.key ??
    safeItems[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialKey);

  useEffect(() => {
    setActiveKey(initialKey);
  }, [initialKey]);

  useEffect(() => {
    if (!hash || safeItems.length === 0) return;

    const decodedHash = decodeURIComponent(hash.replace(/^#/, ""));
    const matchedItem = safeItems.find((item) => item.anchorId === decodedHash);

    if (!matchedItem) return;
    if (matchedItem.key === activeKey) return;

    setActiveKey(matchedItem.key);
  }, [hash, safeItems, activeKey]);

  const activeItem =
    safeItems.find((item) => item.key === activeKey) ?? safeItems[0] ?? null;

  useEffect(() => {
    if (!activeItem || !hash) return;

    const decodedHash = decodeURIComponent(hash.replace(/^#/, ""));
    if (decodedHash !== activeItem.anchorId) return;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const spotlightElement = spotlightRef.current;
        if (!spotlightElement) return;

        if (!isElementSufficientlyVisible(spotlightElement)) {
          scrollSpotlightIntoView(spotlightElement);
        }
      });
    });
  }, [activeItem, hash]);

  if (!activeItem) return null;

  const rootClassName = [styles.root, className].filter(Boolean).join(" ");

  const regionLabel = showcase?.ariaLabel ?? "Explorar coleção em destaque";
  const railAriaLabel =
    showcase?.railAriaLabel ?? "Selecionar item em destaque";
  const spotlightLabel = showcase?.spotlightLabel ?? "Item em destaque";
  const summaryLabel = showcase?.summaryLabel ?? "Visão do item";
  const primaryMetaLabel = showcase?.primaryMetaLabel ?? "Detalhe principal";
  const highlightsLabel = showcase?.highlightsLabel ?? "Pontos de interesse";
  const railLabel = showcase?.railLabel ?? "Itens disponíveis";
  const railCountSuffix = showcase?.railCountSuffix ?? "itens selecionados";

  const spotlightPanelId = `${instanceId}-spotlight-panel`;
  const itemTitle = getItemTitle(activeItem);
  const primaryMetaValue = getPrimaryMetaValue(activeItem, showcase);
  const highlightItems = getHighlightItems(activeItem, showcase);

  function handleItemChange(nextKey) {
    if (!nextKey || nextKey === activeKey) return;

    setActiveKey(nextKey);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const spotlightElement = spotlightRef.current;
        if (!spotlightElement) return;

        if (!isElementSufficientlyVisible(spotlightElement)) {
          scrollSpotlightIntoView(spotlightElement);
        }
      });
    });
  }

  return (
    <div
      className={rootClassName}
      role="region"
      aria-label={regionLabel}
      data-travel-curated-showcase={sectionKey}
    >
      <div className={styles.shell}>
        <div className={styles.stage}>
          <aside className={styles.rail} aria-label={railAriaLabel}>
            <div className={styles.railHead}>
              <div className={styles.railHeadText}>
                <p className={styles.railLabel}>{railLabel}</p>
                <p className={styles.railCount}>
                  {safeItems.length} {railCountSuffix}
                </p>
              </div>
            </div>

            <div
              className={styles.railList}
              role="tablist"
              aria-label={railAriaLabel}
            >
              {safeItems.map((item) => {
                const isActive = item.key === activeItem.key;
                const tabId = `${instanceId}-tab-${item.key}`;
                const itemMetaValue = getPrimaryMetaValue(item, showcase);
                const itemDisplayTitle = getItemTitle(item);

                return (
                  <button
                    key={item.key}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={spotlightPanelId}
                    className={[
                      styles.railItem,
                      isActive ? styles.railItemActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => handleItemChange(item.key)}
                  >
                    <span className={styles.railItemTop}>
                      <span className={styles.railItemBadge}>
                        {item?.badge ?? itemDisplayTitle}
                      </span>

                      {itemMetaValue ? (
                        <span className={styles.railItemMeta}>
                          {itemMetaValue}
                        </span>
                      ) : null}
                    </span>

                    <span className={styles.railItemBody}>
                      <span className={styles.railItemTitle}>
                        {itemDisplayTitle}
                      </span>

                      {item?.summary ? (
                        <span className={styles.railItemSummary}>
                          {item.summary}
                        </span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div
            ref={spotlightRef}
            id={activeItem.anchorId}
            className={styles.spotlightCard}
            role="tabpanel"
            aria-labelledby={`${instanceId}-tab-${activeItem.key}`}
            data-anchor-id={activeItem.anchorId}
          >
            <div id={spotlightPanelId} className={styles.spotlightPanelInner}>
              <div className={styles.spotlightMediaColumn}>
                <div className={styles.mediaWrap}>
                  {activeItem?.picture?.src ? (
                    <img
                      src={activeItem.picture.src}
                      alt={activeItem?.picture?.alt ?? itemTitle}
                      className={styles.media}
                      style={{
                        objectPosition: activeItem?.imagePosition ?? "center",
                        objectFit: activeItem?.imageFit ?? "cover",
                      }}
                      loading="lazy"
                    />
                  ) : null}

                  <div className={styles.mediaOverlay} aria-hidden="true" />
                  <div className={styles.mediaGlow} aria-hidden="true" />

                  <div className={styles.mediaMeta}>
                    <span className={styles.spotlightBadge}>
                      {spotlightLabel}
                    </span>

                    <div className={styles.mediaTitleGroup}>
                      <h3 className={styles.destinationTitle}>{itemTitle}</h3>

                      {primaryMetaValue ? (
                        <p className={styles.mediaDuration}>
                          {primaryMetaValue}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.spotlightContentColumn}>
                <div className={styles.editorialPanel}>
                  <div className={styles.editorialHead}>
                    {showcase?.kicker ? (
                      <p className={styles.kicker}>{showcase.kicker}</p>
                    ) : null}

                    {showcase?.title ? (
                      <h3 className={styles.editorialTitle}>
                        {showcase.title}
                      </h3>
                    ) : null}

                    {showcase?.description ? (
                      <p className={styles.editorialDescription}>
                        {showcase.description}
                      </p>
                    ) : null}
                  </div>

                  <div className={styles.destinationDetails}>
                    {activeItem?.summary ? (
                      <div className={styles.infoBlock}>
                        <p className={styles.infoEyebrow}>{summaryLabel}</p>
                        <p className={styles.summary}>{activeItem.summary}</p>
                      </div>
                    ) : null}

                    <div className={styles.detailsGrid}>
                      {primaryMetaValue ? (
                        <div className={styles.detailCard}>
                          <p className={styles.detailLabel}>
                            {primaryMetaLabel}
                          </p>
                          <p className={styles.detailValue}>
                            {primaryMetaValue}
                          </p>
                        </div>
                      ) : null}

                      {highlightItems.length > 0 ? (
                        <div className={styles.detailCard}>
                          <p className={styles.detailLabel}>
                            {highlightsLabel}
                          </p>

                          <ul
                            className={styles.highlights}
                            aria-label={`Destaques de ${itemTitle}`}
                          >
                            {highlightItems.map((item) => (
                              <li key={item} className={styles.highlight}>
                                <span
                                  className={styles.highlightDot}
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
