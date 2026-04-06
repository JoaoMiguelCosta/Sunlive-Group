import { useMemo, useState } from "react";
import styles from "./DestinationsBrowser.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";

function normalizeTabs(tabs = []) {
  if (!Array.isArray(tabs)) return [];

  return tabs
    .filter((tab) => tab?.key && tab?.label)
    .map((tab) => ({
      key: String(tab.key),
      label: String(tab.label),
    }));
}

function normalizeDestinations(destinations = []) {
  if (!Array.isArray(destinations)) return [];

  return destinations
    .filter((item) => item?.city)
    .map((item, index) => ({
      ...item,
      key: item?.key || `destination-${index}`,
    }));
}

function resolveVisibleDestinations(destinations, activeTab) {
  if (activeTab === "todos") return destinations;
  if (activeTab === "principais") return destinations.slice(0, 3);
  if (activeTab === "outros") return destinations.slice(3);
  return destinations;
}

export default function DestinationsBrowser({
  browser = {},
  destinations = [],
}) {
  const tabs = useMemo(() => normalizeTabs(browser?.tabs), [browser?.tabs]);
  const safeDestinations = useMemo(
    () => normalizeDestinations(destinations),
    [destinations],
  );

  const defaultTab = tabs[0]?.key ?? "todos";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const visibleDestinations = useMemo(
    () => resolveVisibleDestinations(safeDestinations, activeTab),
    [safeDestinations, activeTab],
  );

  if (safeDestinations.length === 0) return null;

  const browserAriaLabel = browser?.ariaLabel ?? "Explorar destinos nacionais";
  const filtersAriaLabel =
    browser?.filtersAriaLabel ?? "Filtrar destinos por grupo";
  const resultsLabel = browser?.resultsLabel ?? "destinos disponíveis";
  const kicker = browser?.kicker ?? "Exploração de destinos";
  const title =
    browser?.title ?? "Selecione um grupo para filtrar os destinos disponíveis";

  return (
    <div className={styles.wrapper} role="region" aria-label={browserAriaLabel}>
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <div className={styles.topbarCopy}>
            <p className={styles.kicker}>{kicker}</p>
            <p className={styles.topbarTitle}>{title}</p>
          </div>

          <p className={styles.resultsBadge}>
            <strong>{visibleDestinations.length}</strong>
            <span>{resultsLabel}</span>
          </p>
        </div>

        {tabs.length > 0 ? (
          <div
            className={styles.filters}
            role="tablist"
            aria-label={filtersAriaLabel}
          >
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;

              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className={styles.grid} role="list" aria-label={browserAriaLabel}>
        {visibleDestinations.map((destination) => (
          <div key={destination.key} role="listitem" className={styles.item}>
            <DestinationCard destination={destination} variant="domestic" />
          </div>
        ))}
      </div>
    </div>
  );
}
