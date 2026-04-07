import { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "./DomesticDestinationsShowcase.module.css";

function normalizeDestinations(destinations = []) {
  if (!Array.isArray(destinations)) return [];

  return destinations
    .filter((item) => item?.city)
    .map((item, index) => ({
      ...item,
      key: item?.key || `destination-${index}`,
    }));
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

export default function DomesticDestinationsShowcase({
  showcase = {},
  destinations = [],
}) {
  const instanceId = useId();
  const spotlightRef = useRef(null);

  const safeDestinations = useMemo(
    () => normalizeDestinations(destinations),
    [destinations],
  );

  const initialKey =
    safeDestinations.find((item) => item.key === showcase?.initialKey)?.key ??
    safeDestinations[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialKey);

  useEffect(() => {
    setActiveKey(initialKey);
  }, [initialKey]);

  const activeDestination =
    safeDestinations.find((item) => item.key === activeKey) ??
    safeDestinations[0] ??
    null;

  if (!activeDestination) return null;

  const railAriaLabel =
    showcase?.railAriaLabel ?? "Selecionar destino em destaque";
  const spotlightLabel = showcase?.spotlightLabel ?? "Destino em destaque";
  const detailsLabel = showcase?.detailsLabel ?? "Duração ideal";
  const highlightsLabel = showcase?.highlightsLabel ?? "Pontos de interesse";
  const railLabel = showcase?.railLabel ?? "Destinos disponíveis";

  const spotlightPanelId = `${instanceId}-spotlight-panel`;

  const highlightItems = Array.isArray(activeDestination?.highlights)
    ? activeDestination.highlights.filter(Boolean)
    : [];

  function handleDestinationChange(nextKey) {
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
      className={styles.root}
      role="region"
      aria-label={showcase?.ariaLabel ?? "Explorar destinos nacionais"}
    >
      <div className={styles.shell}>
        <div className={styles.stage}>
          <div
            ref={spotlightRef}
            className={styles.spotlightCard}
            id={spotlightPanelId}
            role="tabpanel"
            aria-labelledby={`${instanceId}-tab-${activeDestination.key}`}
          >
            <div className={styles.spotlightMediaColumn}>
              <div className={styles.mediaWrap}>
                {activeDestination?.picture?.src ? (
                  <img
                    src={activeDestination.picture.src}
                    alt={
                      activeDestination?.picture?.alt ?? activeDestination.city
                    }
                    className={styles.media}
                    style={{
                      objectPosition:
                        activeDestination?.imagePosition ?? "center",
                      objectFit: activeDestination?.imageFit ?? "cover",
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
                    <h3 className={styles.destinationTitle}>
                      {activeDestination.city}
                    </h3>

                    {activeDestination?.duration ? (
                      <p className={styles.mediaDuration}>
                        {activeDestination.duration}
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
                    <h3 className={styles.editorialTitle}>{showcase.title}</h3>
                  ) : null}

                  {showcase?.description ? (
                    <p className={styles.editorialDescription}>
                      {showcase.description}
                    </p>
                  ) : null}
                </div>

                <div className={styles.destinationDetails}>
                  {activeDestination?.summary ? (
                    <div className={styles.infoBlock}>
                      <p className={styles.infoEyebrow}>Visão do destino</p>
                      <p className={styles.summary}>
                        {activeDestination.summary}
                      </p>
                    </div>
                  ) : null}

                  <div className={styles.detailsGrid}>
                    {activeDestination?.duration ? (
                      <div className={styles.detailCard}>
                        <p className={styles.detailLabel}>{detailsLabel}</p>
                        <p className={styles.detailValue}>
                          {activeDestination.duration}
                        </p>
                      </div>
                    ) : null}

                    {highlightItems.length > 0 ? (
                      <div className={styles.detailCard}>
                        <p className={styles.detailLabel}>{highlightsLabel}</p>

                        <ul
                          className={styles.highlights}
                          aria-label={`Destaques de ${activeDestination.city}`}
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

          <aside className={styles.rail} aria-label={railAriaLabel}>
            <div className={styles.railHead}>
              <div className={styles.railHeadText}>
                <p className={styles.railLabel}>{railLabel}</p>
                <p className={styles.railCount}>
                  {safeDestinations.length} destinos selecionados
                </p>
              </div>
            </div>

            <div
              className={styles.railList}
              role="tablist"
              aria-label={railAriaLabel}
            >
              {safeDestinations.map((destination) => {
                const isActive = destination.key === activeDestination.key;
                const tabId = `${instanceId}-tab-${destination.key}`;

                return (
                  <button
                    key={destination.key}
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
                    onClick={() => handleDestinationChange(destination.key)}
                  >
                    <span className={styles.railItemTop}>
                      <span className={styles.railItemBadge}>
                        {destination?.badge ?? destination.city}
                      </span>

                      {destination?.duration ? (
                        <span className={styles.railItemMeta}>
                          {destination.duration}
                        </span>
                      ) : null}
                    </span>

                    <span className={styles.railItemBody}>
                      <span className={styles.railItemTitle}>
                        {destination.city}
                      </span>

                      {destination?.summary ? (
                        <span className={styles.railItemSummary}>
                          {destination.summary}
                        </span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
