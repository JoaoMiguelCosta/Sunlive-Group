import LogisticsIconSlot from "./LogisticsIconSlot.jsx";

import { isValidText, toDomSafeId } from "./logisticsServicesSection.utils.js";

import styles from "./LogisticsServiceSelector.module.css";

function ServiceTab({
  service,
  index,
  isActive,
  tabId,
  panelId,
  iconSet,
  resolveIcon,
  onSelect,
  onKeyDown,
}) {
  const serviceNumber = service.number || String(index + 1).padStart(2, "0");

  return (
    <button
      id={tabId}
      type="button"
      className={`${styles.serviceButton} ${
        isActive ? styles.serviceButtonActive : ""
      }`}
      onClick={() => onSelect(service.key)}
      onKeyDown={(event) => onKeyDown(event, index)}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
    >
      <span className={styles.serviceTopline}>
        <LogisticsIconSlot
          variant="selector"
          iconSet={iconSet}
          iconKey={service.iconKey}
          resolveIcon={resolveIcon}
        />

        <span className={styles.serviceNumber}>{serviceNumber}</span>
      </span>

      {isValidText(service.title) ? (
        <span className={styles.serviceTitle}>{service.title}</span>
      ) : null}

      {isValidText(service.summary) ? (
        <span className={styles.serviceSummary}>{service.summary}</span>
      ) : null}
    </button>
  );
}

export default function LogisticsServiceSelector({
  sectionId,
  services,
  activeServiceKey,
  panelId,
  ariaLabel,
  iconSet,
  resolveIcon,
  onSelect,
  onKeyDown,
}) {
  if (!services?.length) return null;

  return (
    <div
      className={styles.servicesSelector}
      role="tablist"
      aria-label={ariaLabel}
    >
      {services.map((service, index) => {
        const isActive = service.key === activeServiceKey;
        const tabId = `${sectionId}-tab-${toDomSafeId(service.key)}`;

        return (
          <ServiceTab
            key={service.key}
            service={service}
            index={index}
            isActive={isActive}
            tabId={tabId}
            panelId={panelId}
            iconSet={iconSet}
            resolveIcon={resolveIcon}
            onSelect={onSelect}
            onKeyDown={onKeyDown}
          />
        );
      })}
    </div>
  );
}
