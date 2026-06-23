import { useEffect, useMemo, useRef, useState } from "react";

import { resolveSportsIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import LogisticsActiveServicePanel from "./LogisticsActiveServicePanel.jsx";
import LogisticsHighlights from "./LogisticsHighlights.jsx";
import LogisticsServiceSelector from "./LogisticsServiceSelector.jsx";
import LogisticsServicesIntro from "./LogisticsServicesIntro.jsx";

import {
  focusSelectorButton,
  getInitialActiveKey,
  getValidHighlights,
  getValidServices,
  isValidText,
  scrollElementIntoMobileView,
  shouldScrollToPanelOnMobile,
  toDomSafeId,
} from "./logisticsServicesSection.utils.js";

import styles from "./LogisticsServicesSection.module.css";

export default function LogisticsServicesSection({ data }) {
  const iconSet = ICONS;
  const resolveIcon = resolveSportsIcon;
  const panelRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);

  const sectionId = data?.id || "sunlive-sports-logistica-servicos";

  const services = useMemo(
    () => getValidServices(data?.services),
    [data?.services],
  );

  const highlights = useMemo(
    () => getValidHighlights(data?.operationalHighlights),
    [data?.operationalHighlights],
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

  const titleId = isValidText(data.intro?.title)
    ? `${sectionId}-title`
    : undefined;

  const panelId = activeService ? `${sectionId}-active-panel` : undefined;

  const activeTabId = activeService
    ? `${sectionId}-tab-${toDomSafeId(activeServiceKey)}`
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
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={sectionAriaLabel}
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        <LogisticsServicesIntro
          intro={data.intro}
          titleId={titleId}
          hasIntro={hasIntro}
        />

        {hasServices ? (
          <div className={styles.operationalGrid}>
            <LogisticsServiceSelector
              sectionId={sectionId}
              services={services}
              activeServiceKey={activeServiceKey}
              panelId={panelId}
              ariaLabel={servicesAriaLabel}
              iconSet={iconSet}
              resolveIcon={resolveIcon}
              onSelect={handleServiceSelect}
              onKeyDown={handleServiceKeyDown}
            />

            <LogisticsActiveServicePanel
              ref={panelRef}
              service={activeService}
              panelId={panelId}
              activeTabId={activeTabId}
              iconSet={iconSet}
              resolveIcon={resolveIcon}
            />
          </div>
        ) : null}

        <LogisticsHighlights sectionId={sectionId} items={highlights} />
      </div>
    </section>
  );
}
