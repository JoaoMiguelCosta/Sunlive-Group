import { useEffect, useMemo, useState } from "react";

import styles from "./SportsAreasShowcase.module.css";

import SportsAreasSelectorList from "./SportsAreasSelectorList.jsx";
import SportsAreasDetailPanel from "./SportsAreasDetailPanel.jsx";
import SportsAreasAccordionList from "./SportsAreasAccordionList.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidAreas(areas) {
  return Array.isArray(areas)
    ? areas.filter(
        (area) =>
          area &&
          typeof area === "object" &&
          isValidText(area.key) &&
          (isValidText(area.title) || isValidText(area.navLabel)),
      )
    : [];
}

function getFirstAreaKey(areas) {
  return areas[0]?.key ?? null;
}

function getLayoutDensity(areasCount) {
  return areasCount >= 8 ? "compact" : "default";
}

const DEFAULT_DESKTOP_BREAKPOINT = 1180;

const DEFAULT_UI = {
  sectionAriaLabel: "Áreas em destaque",
  selectorAriaLabel: "Lista de áreas",
  selectorKicker: "Áreas",
  selectorTitle: "Selecionar área",
  accordionAriaLabel: "Lista de áreas",
  accordionKicker: "Áreas",
  accordionTitle: "Selecionar área",
  markersAriaLabel: "Indicadores principais",
  highlightsLabel: "Destaques",
  highlightsAriaLabel: "Destaques da área",
};

export default function SportsAreasShowcase({
  id,
  intro,
  areas,
  ui,
  resolveIcon,
  desktopBreakpoint = DEFAULT_DESKTOP_BREAKPOINT,
}) {
  const validAreas = useMemo(() => getValidAreas(areas), [areas]);
  const markers = hasItems(intro?.markers) ? intro.markers : [];

  const mergedUi = {
    ...DEFAULT_UI,
    ...ui,
  };

  const sectionId = id || intro?.id || "sports-areas-showcase";
  const sectionTitleId = intro?.title ? `${sectionId}-title` : undefined;
  const detailPanelId = `${sectionId}-detail-panel`;

  const areasCount = validAreas.length;
  const layoutDensity = getLayoutDensity(areasCount);

  const areaKeysSignature = useMemo(
    () => validAreas.map((area) => area.key).join("|"),
    [validAreas],
  );

  const [isDesktopView, setIsDesktopView] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia(
      `(min-width: ${desktopBreakpoint + 1}px)`,
    );

    function syncFromViewport(matches) {
      setIsDesktopView(matches);

      setActiveKey((previousKey) => {
        const previousKeyStillExists = validAreas.some(
          (area) => area.key === previousKey,
        );

        if (matches) {
          return previousKeyStillExists
            ? previousKey
            : getFirstAreaKey(validAreas);
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
  }, [desktopBreakpoint, validAreas, areaKeysSignature]);

  const activeArea = useMemo(() => {
    return validAreas.find((area) => area.key === activeKey) || null;
  }, [validAreas, activeKey]);

  function getAreaIcon(iconKey, className) {
    if (typeof resolveIcon !== "function") return null;

    return resolveIcon(iconKey, className);
  }

  function handleSelect(key) {
    if (isDesktopView) {
      setActiveKey(key);
      return;
    }

    setActiveKey((previousKey) => (previousKey === key ? null : key));
  }

  if (!intro && validAreas.length === 0) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={sectionTitleId}
      aria-label={sectionTitleId ? undefined : mergedUi.sectionAriaLabel}
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
                aria-label={intro.markersAriaLabel || mergedUi.markersAriaLabel}
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

        {validAreas.length > 0 ? (
          <>
            <div
              className={styles.showcaseDesktop}
              data-areas-count={areasCount}
              data-density={layoutDensity}
            >
              <SportsAreasSelectorList
                areas={validAreas}
                activeKey={activeKey}
                onSelect={handleSelect}
                ariaLabel={mergedUi.selectorAriaLabel}
                kicker={mergedUi.selectorKicker}
                title={mergedUi.selectorTitle}
                resolveIcon={(iconKey) =>
                  getAreaIcon(iconKey, styles.selectorIcon)
                }
              />

              {activeArea ? (
                <SportsAreasDetailPanel
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
                  highlightsLabel={
                    activeArea.highlightsLabel || mergedUi.highlightsLabel
                  }
                  highlightsAriaLabel={
                    activeArea.highlightsAriaLabel ||
                    mergedUi.highlightsAriaLabel
                  }
                  icon={getAreaIcon(activeArea.iconKey, styles.detailIcon)}
                />
              ) : null}
            </div>

            <div
              className={styles.showcaseMobile}
              data-areas-count={areasCount}
              data-density={layoutDensity}
            >
              <SportsAreasAccordionList
                areas={validAreas}
                activeKey={activeKey}
                onSelect={handleSelect}
                ariaLabel={mergedUi.accordionAriaLabel}
                kicker={mergedUi.accordionKicker}
                title={mergedUi.accordionTitle}
                highlightsLabel={mergedUi.highlightsLabel}
                highlightsAriaLabel={mergedUi.highlightsAriaLabel}
                resolveIcon={(iconKey) =>
                  getAreaIcon(iconKey, styles.accordionIcon)
                }
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
