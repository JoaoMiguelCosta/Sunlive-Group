import { useEffect, useMemo, useState } from "react";
import styles from "./AreasSection.module.css";

import ServiceAreaSelectorList from "./ServiceAreaSelectorList.jsx";
import ServiceAreaDetailPanel from "./ServiceAreaDetailPanel.jsx";
import ServiceAreaAccordionList from "./ServiceAreaAccordionList.jsx";

import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function getFirstAreaKey(areas) {
  return areas[0]?.key ?? null;
}

const DESKTOP_BREAKPOINT = 1180;

export default function AreasSection({ data }) {
  const intro = data?.areasIntro ?? null;
  const areas = hasItems(data?.serviceAreas) ? data.serviceAreas : [];
  const icons = sportsBrand.icons;

  const sectionId = intro?.id || "specialised-services-areas";
  const sectionTitleId = intro?.title ? `${sectionId}-title` : undefined;
  const sectionAriaLabel =
    intro?.ariaLabel || "Áreas de Especialização — Serviços Especializados";
  const detailPanelId = `${sectionId}-detail-panel`;
  const markers = hasItems(intro?.markers) ? intro.markers : [];

  const areaKeysSignature = useMemo(
    () => areas.map((area) => area.key).join("|"),
    [areas],
  );

  const [isDesktopView, setIsDesktopView] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia(
      `(min-width: ${DESKTOP_BREAKPOINT + 1}px)`,
    );

    function syncFromViewport(matches) {
      setIsDesktopView(matches);

      setActiveKey((prev) => {
        const prevStillExists = areas.some((area) => area.key === prev);

        if (matches) {
          return prevStillExists ? prev : getFirstAreaKey(areas);
        }

        return null;
      });
    }

    syncFromViewport(mediaQuery.matches);

    function handleChange(event) {
      syncFromViewport(event.matches);
    }

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [areas, areaKeysSignature]);

  const activeArea = useMemo(() => {
    return areas.find((area) => area.key === activeKey) || null;
  }, [areas, activeKey]);

  function resolveAreaIcon(iconKey, className) {
    const IconComponent = resolveSportsIcon(icons, iconKey);
    return IconComponent ? <IconComponent className={className} /> : null;
  }

  function handleSelect(key) {
    if (isDesktopView) {
      setActiveKey(key);
      return;
    }

    setActiveKey((prev) => (prev === key ? null : key));
  }

  if (!intro && areas.length === 0) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={sectionTitleId}
      aria-label={sectionTitleId ? undefined : sectionAriaLabel}
    >
      <div className={styles.inner}>
        {intro ? (
          <header className={styles.introPanel}>
            <div className={styles.introContent}>
              {intro.eyebrow ? (
                <p className={styles.eyebrow}>{intro.eyebrow}</p>
              ) : null}

              {intro.title ? (
                <h2 id={sectionTitleId} className={styles.title}>
                  {intro.title}
                </h2>
              ) : null}

              {intro.lead ? <p className={styles.lead}>{intro.lead}</p> : null}
            </div>

            {markers.length > 0 ? (
              <ul
                className={styles.markers}
                aria-label={
                  intro.markersAriaLabel ||
                  "Indicadores principais das áreas de especialização"
                }
              >
                {markers.map((item, index) => (
                  <li
                    key={`${sectionId}-marker-${index}`}
                    className={styles.markerItem}
                  >
                    <span className={styles.markerBullet} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </header>
        ) : null}

        {areas.length > 0 ? (
          <>
            <div className={styles.showcaseDesktop}>
              <ServiceAreaSelectorList
                areas={areas}
                activeKey={activeKey}
                onSelect={handleSelect}
                panelId={detailPanelId}
                resolveIcon={(iconKey) =>
                  resolveAreaIcon(iconKey, styles.selectorIcon)
                }
              />

              {activeArea ? (
                <ServiceAreaDetailPanel
                  key={activeArea.key}
                  id={detailPanelId}
                  eyebrow={activeArea.eyebrow}
                  title={activeArea.title}
                  summary={activeArea.summary}
                  highlights={activeArea.highlights}
                  focusLabel={activeArea.focusLabel}
                  focusText={activeArea.focusText}
                  impactLabel={activeArea.impactLabel}
                  impactText={activeArea.impactText}
                  highlightsAriaLabel={activeArea.highlightsAriaLabel}
                  icon={resolveAreaIcon(activeArea.iconKey, styles.detailIcon)}
                />
              ) : null}
            </div>

            <div className={styles.showcaseMobile}>
              <ServiceAreaAccordionList
                areas={areas}
                activeKey={activeKey}
                onSelect={handleSelect}
                resolveIcon={(iconKey) =>
                  resolveAreaIcon(iconKey, styles.accordionIcon)
                }
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
