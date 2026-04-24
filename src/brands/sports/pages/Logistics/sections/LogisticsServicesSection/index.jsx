import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import styles from "./LogisticsServicesSection.module.css";

const MOBILE_SCROLL_QUERY = "(max-width: 760px)";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isMobileViewport() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(MOBILE_SCROLL_QUERY).matches
  );
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getValidFeatures(features) {
  return Array.isArray(features) ? features.filter(isValidText) : [];
}

function getValidHighlights(highlights) {
  return Array.isArray(highlights)
    ? highlights.filter(
        (item) => isValidText(item?.value) || isValidText(item?.label),
      )
    : [];
}

function getValidServices(services) {
  return Array.isArray(services)
    ? services.filter(
        (service) =>
          service &&
          typeof service === "object" &&
          isValidText(service.key) &&
          (isValidText(service.title) || isValidText(service.summary)),
      )
    : [];
}

function getInitialActiveKey(services, preferredKey) {
  const hasPreferredService = services.some(
    (service) => service.key === preferredKey,
  );

  if (hasPreferredService) return preferredKey;

  return services[0]?.key;
}

function getIconComponent(iconSet, iconKey, resolveIcon) {
  if (!iconSet || !isValidText(iconKey)) return null;

  if (typeof resolveIcon === "function") {
    return resolveIcon(iconSet, iconKey);
  }

  return iconSet[iconKey] || null;
}

function ServiceIconSlot({
  iconSet,
  iconKey,
  iconClassName,
  slotClassName,
  resolveIcon,
}) {
  const Icon = getIconComponent(iconSet, iconKey, resolveIcon);

  if (!Icon) return null;

  return (
    <span className={slotClassName} aria-hidden="true">
      <Icon className={iconClassName} focusable="false" />
    </span>
  );
}

function ServiceTab({
  service,
  index,
  isActive,
  tabId,
  panelId,
  iconSet,
  resolveIcon,
  onSelect,
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
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
    >
      <span className={styles.serviceTopline}>
        <ServiceIconSlot
          iconSet={iconSet}
          iconKey={service.iconKey}
          iconClassName={styles.icon}
          slotClassName={styles.iconWrap}
          resolveIcon={resolveIcon}
        />

        <span className={styles.serviceNumber}>{serviceNumber}</span>
      </span>

      {service.title ? (
        <span className={styles.serviceTitle}>{service.title}</span>
      ) : null}

      {service.summary ? (
        <span className={styles.serviceSummary}>{service.summary}</span>
      ) : null}
    </button>
  );
}

export default function LogisticsServicesSection({
  data,
  iconSet = {},
  resolveIcon,
}) {
  const panelRef = useRef(null);
  const shouldScrollToPanelRef = useRef(false);

  const services = useMemo(() => getValidServices(data?.services), [data]);

  const highlights = useMemo(
    () => getValidHighlights(data?.operationalHighlights),
    [data],
  );

  const initialActiveKey = useMemo(
    () => getInitialActiveKey(services, data?.ui?.defaultActiveKey),
    [services, data?.ui?.defaultActiveKey],
  );

  const [activeKey, setActiveKey] = useState(initialActiveKey);

  useEffect(() => {
    setActiveKey(initialActiveKey);
  }, [initialActiveKey]);

  const activeService = useMemo(
    () => services.find((service) => service.key === activeKey) || services[0],
    [activeKey, services],
  );

  const activeFeatures = useMemo(
    () => getValidFeatures(activeService?.features),
    [activeService],
  );

  const scrollToPanel = useCallback(() => {
    window.requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "nearest",
      });
    });
  }, []);

  const handleServiceSelect = useCallback(
    (serviceKey) => {
      const shouldScroll = isMobileViewport();

      setActiveKey(serviceKey);

      if (!shouldScroll) return;

      shouldScrollToPanelRef.current = true;

      if (serviceKey === activeKey) {
        shouldScrollToPanelRef.current = false;
        scrollToPanel();
      }
    },
    [activeKey, scrollToPanel],
  );

  useEffect(() => {
    if (!shouldScrollToPanelRef.current || !panelRef.current) return;

    shouldScrollToPanelRef.current = false;
    scrollToPanel();
  }, [activeKey, scrollToPanel]);

  if (!data) return null;

  const hasIntro =
    isValidText(data.intro?.eyebrow) ||
    isValidText(data.intro?.title) ||
    isValidText(data.intro?.lead);

  const hasServices = services.length > 0;
  const hasHighlights = highlights.length > 0;

  if (!hasIntro && !hasServices && !hasHighlights) return null;

  const titleId = isValidText(data.intro?.title)
    ? `${data.id}-title`
    : undefined;

  const panelId = activeService ? `${data.id}-active-panel` : undefined;

  const activeTabId = activeService
    ? `${data.id}-tab-${activeService.key}`
    : undefined;

  const sectionAriaLabel = titleId ? undefined : data.ui?.ariaLabel;

  const servicesAriaLabel =
    data.ui?.servicesAriaLabel || data.ui?.ariaLabel || data.intro?.title;

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={sectionAriaLabel}
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        {hasIntro ? (
          <header className={styles.intro}>
            {data.intro?.eyebrow ? (
              <p className={styles.eyebrow}>{data.intro.eyebrow}</p>
            ) : null}

            {data.intro?.title ? (
              <h2 id={titleId} className={styles.title}>
                {data.intro.title}
              </h2>
            ) : null}

            {data.intro?.lead ? (
              <p className={styles.lead}>{data.intro.lead}</p>
            ) : null}
          </header>
        ) : null}

        {hasServices ? (
          <div className={styles.operationalGrid}>
            <div
              className={styles.servicesSelector}
              role="tablist"
              aria-label={servicesAriaLabel}
            >
              {services.map((service, index) => {
                const isActive = service.key === activeService?.key;
                const tabId = `${data.id}-tab-${service.key}`;

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
                    onSelect={handleServiceSelect}
                  />
                );
              })}
            </div>

            {activeService ? (
              <article
                ref={panelRef}
                id={panelId}
                className={styles.activePanel}
                role="tabpanel"
                aria-labelledby={activeTabId}
              >
                <div className={styles.panelHeader}>
                  <ServiceIconSlot
                    iconSet={iconSet}
                    iconKey={activeService.iconKey}
                    iconClassName={styles.panelIcon}
                    slotClassName={styles.panelIconWrap}
                    resolveIcon={resolveIcon}
                  />

                  <div className={styles.panelHeading}>
                    {activeService.number ? (
                      <p className={styles.panelNumber}>
                        {activeService.number}
                      </p>
                    ) : null}

                    {activeService.title ? (
                      <h3 className={styles.panelTitle}>
                        {activeService.title}
                      </h3>
                    ) : null}
                  </div>
                </div>

                {activeService.summary ? (
                  <p className={styles.panelSummary}>{activeService.summary}</p>
                ) : null}

                {activeFeatures.length > 0 ? (
                  <ul className={styles.featuresList}>
                    {activeFeatures.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <span className={styles.featureMarker} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ) : null}
          </div>
        ) : null}

        {hasHighlights ? (
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <article
                key={`${data.id}-highlight-${index}`}
                className={styles.highlightCard}
              >
                {item.value ? (
                  <strong className={styles.highlightValue}>
                    {item.value}
                  </strong>
                ) : null}

                {item.label ? (
                  <span className={styles.highlightLabel}>{item.label}</span>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
