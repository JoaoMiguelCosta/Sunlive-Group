import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./LogisticsServicesSection.module.css";

const MOBILE_SCROLL_QUERY = "(max-width: 1080px)";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
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

  return services[0]?.key || null;
}

function getIconComponent(iconSet, iconKey, resolveIcon) {
  if (!iconSet || !isValidText(iconKey)) return null;

  if (typeof resolveIcon === "function") {
    return resolveIcon(iconSet, iconKey);
  }

  return iconSet[iconKey] || null;
}

function toDomSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function shouldScrollToPanelOnMobile() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(MOBILE_SCROLL_QUERY).matches;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMobileScrollOffset() {
  if (typeof window === "undefined") return 12;

  return Math.max(10, Math.min(18, window.innerWidth * 0.03));
}

function scrollElementIntoMobileView(element) {
  if (!element || typeof window === "undefined") return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    getMobileScrollOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function focusSelectorButton(container, index) {
  if (!container) return;

  const buttons = Array.from(container.querySelectorAll('[role="tab"]'));
  const button = buttons[index];

  if (!button) return;

  window.requestAnimationFrame(() => {
    try {
      button.focus({ preventScroll: true });
    } catch {
      button.focus();
    }
  });
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
        <ServiceIconSlot
          iconSet={iconSet}
          iconKey={service.iconKey}
          iconClassName={styles.icon}
          slotClassName={styles.iconWrap}
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

export default function LogisticsServicesSection({
  data,
  iconSet = {},
  resolveIcon,
}) {
  const panelRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);

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
    if (!initialActiveKey) {
      setActiveKey(null);
      return;
    }

    const hasActiveService = services.some(
      (service) => service.key === activeKey,
    );

    if (!hasActiveService) {
      setActiveKey(initialActiveKey);
    }
  }, [activeKey, initialActiveKey, services]);

  useEffect(() => {
    if (!shouldScrollAfterSelectRef.current) return;

    shouldScrollAfterSelectRef.current = false;

    if (!shouldScrollToPanelOnMobile()) return;

    const frameId = window.requestAnimationFrame(() => {
      scrollElementIntoMobileView(panelRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeKey]);

  if (!data) return null;

  const hasIntro =
    isValidText(data.intro?.eyebrow) ||
    isValidText(data.intro?.title) ||
    isValidText(data.intro?.lead);

  const hasServices = services.length > 0;
  const hasHighlights = highlights.length > 0;

  if (!hasIntro && !hasServices && !hasHighlights) return null;

  const activeService =
    services.find((service) => service.key === activeKey) || services[0];

  const activeServiceKey = activeService?.key;
  const activeFeatures = getValidFeatures(activeService?.features);

  const titleId = isValidText(data.intro?.title)
    ? `${data.id}-title`
    : undefined;

  const panelId = activeService ? `${data.id}-active-panel` : undefined;

  const activeTabId = activeService
    ? `${data.id}-tab-${toDomSafeId(activeServiceKey)}`
    : undefined;

  const sectionAriaLabel = titleId ? undefined : data.ui?.ariaLabel;

  const servicesAriaLabel =
    data.ui?.servicesAriaLabel || data.ui?.ariaLabel || data.intro?.title;

  function handleServiceSelect(serviceKey) {
    const shouldScroll = shouldScrollToPanelOnMobile();

    shouldScrollAfterSelectRef.current = shouldScroll;

    if (serviceKey === activeServiceKey) {
      shouldScrollAfterSelectRef.current = false;

      if (shouldScroll) {
        window.requestAnimationFrame(() => {
          scrollElementIntoMobileView(panelRef.current);
        });
      }

      return;
    }

    setActiveKey(serviceKey);
  }

  function handleServiceKeyDown(event, index) {
    const lastIndex = services.length - 1;
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = lastIndex;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextService = services[nextIndex];

    if (!nextService) return;

    setActiveKey(nextService.key);
    focusSelectorButton(
      event.currentTarget.closest('[role="tablist"]'),
      nextIndex,
    );
  }

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
            {isValidText(data.intro?.eyebrow) ? (
              <p className={styles.eyebrow}>{data.intro.eyebrow}</p>
            ) : null}

            {isValidText(data.intro?.title) ? (
              <h2 id={titleId} className={styles.title}>
                {data.intro.title}
              </h2>
            ) : null}

            {isValidText(data.intro?.lead) ? (
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
                const isActive = service.key === activeServiceKey;
                const tabId = `${data.id}-tab-${toDomSafeId(service.key)}`;

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
                    onKeyDown={handleServiceKeyDown}
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
                aria-live="polite"
                tabIndex={-1}
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
                    {isValidText(activeService.number) ? (
                      <p className={styles.panelNumber}>
                        {activeService.number}
                      </p>
                    ) : null}

                    {isValidText(activeService.title) ? (
                      <h3 className={styles.panelTitle}>
                        {activeService.title}
                      </h3>
                    ) : null}
                  </div>
                </div>

                {isValidText(activeService.summary) ? (
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
                {isValidText(item.value) ? (
                  <strong className={styles.highlightValue}>
                    {item.value}
                  </strong>
                ) : null}

                {isValidText(item.label) ? (
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
