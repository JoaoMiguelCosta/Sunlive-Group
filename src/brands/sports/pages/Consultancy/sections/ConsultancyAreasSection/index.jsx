import { useEffect, useMemo, useState } from "react";

import { ICONS, resolveSportsIcon } from "../../../../config/index.js";

import styles from "./ConsultancyAreasSection.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidPoints(points) {
  return Array.isArray(points) ? points.filter(isValidText) : [];
}

function getValidAreas(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          (isValidText(item.title) ||
            isValidText(item.summary) ||
            getValidPoints(item.points).length > 0),
      )
    : [];
}

function getInitialAreaKey(areas) {
  return areas[0]?.key;
}

function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;

  return resolveSportsIcon(ICONS, iconKey);
}

function getTabId(sectionId, areaKey) {
  return `${sectionId}-${areaKey}-tab`;
}

function getPanelId(sectionId, areaKey) {
  return `${sectionId}-${areaKey}-panel`;
}

function getNextIndex(currentIndex, direction, totalItems) {
  if (totalItems <= 0) return 0;

  return (currentIndex + direction + totalItems) % totalItems;
}

export default function ConsultancyAreasSection({ data }) {
  const areas = useMemo(() => getValidAreas(data?.items), [data?.items]);
  const [activeKey, setActiveKey] = useState(() => getInitialAreaKey(areas));

  useEffect(() => {
    if (!areas.length) return;

    const hasActiveArea = areas.some((area) => area.key === activeKey);

    if (!hasActiveArea) {
      setActiveKey(getInitialAreaKey(areas));
    }
  }, [areas, activeKey]);

  if (!data || areas.length === 0) return null;

  const activeArea =
    areas.find((area) => area.key === activeKey) ?? areas[0] ?? null;

  if (!activeArea) return null;

  const titleId = data.intro?.title ? `${data.id}-title` : undefined;
  const selectorAriaLabel = isValidText(data.ui?.selectorAriaLabel)
    ? data.ui.selectorAriaLabel
    : undefined;
  const activeKicker = isValidText(data.ui?.activeKicker)
    ? data.ui.activeKicker
    : null;

  const activeAreaTitle = isValidText(activeArea.title)
    ? activeArea.title
    : activeArea.summary;

  const activePoints = getValidPoints(activeArea.points);
  const ActiveIcon = getIconComponent(activeArea.iconKey);

  function handleSelectorKeyDown(event) {
    if (areas.length <= 1) return;

    const currentIndex = areas.findIndex((area) => area.key === activeArea.key);

    if (currentIndex < 0) return;

    let nextIndex;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = getNextIndex(currentIndex, 1, areas.length);
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = getNextIndex(currentIndex, -1, areas.length);
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = areas.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextArea = areas[nextIndex];

    if (!nextArea) return;

    setActiveKey(nextArea.key);

    window.requestAnimationFrame(() => {
      document.getElementById(getTabId(data.id, nextArea.key))?.focus();
    });
  }

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={titleId ? undefined : data.ui?.ariaLabel}
    >
      <div className={styles.shell}>
        {data.intro ? (
          <header className={styles.header}>
            {isValidText(data.intro.eyebrow) ? (
              <p className={styles.eyebrow}>{data.intro.eyebrow}</p>
            ) : null}

            {isValidText(data.intro.title) ? (
              <h2 id={titleId} className={styles.title}>
                {data.intro.title}
              </h2>
            ) : null}

            {isValidText(data.intro.lead) ? (
              <p className={styles.lead}>{data.intro.lead}</p>
            ) : null}
          </header>
        ) : null}

        <div className={styles.commandPanel}>
          <div
            className={styles.selector}
            role="tablist"
            aria-label={selectorAriaLabel}
            onKeyDown={handleSelectorKeyDown}
          >
            {areas.map((area, index) => {
              const isActive = area.key === activeArea.key;
              const AreaIcon = getIconComponent(area.iconKey);

              return (
                <button
                  key={area.key}
                  type="button"
                  className={`${styles.selectorButton} ${
                    isActive ? styles.selectorButtonActive : ""
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={getPanelId(data.id, area.key)}
                  id={getTabId(data.id, area.key)}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveKey(area.key)}
                >
                  <span className={styles.selectorIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.selectorIcon} aria-hidden="true">
                    {AreaIcon ? <AreaIcon /> : null}
                  </span>

                  <span className={styles.selectorText}>
                    {isValidText(area.title) ? (
                      <span className={styles.selectorTitle}>{area.title}</span>
                    ) : null}

                    {isValidText(area.summary) ? (
                      <span className={styles.selectorSummary}>
                        {area.summary}
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          <article
            id={getPanelId(data.id, activeArea.key)}
            className={styles.detailPanel}
            role="tabpanel"
            aria-labelledby={getTabId(data.id, activeArea.key)}
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelIcon} aria-hidden="true">
                {ActiveIcon ? <ActiveIcon /> : null}
              </span>

              <div className={styles.panelHeading}>
                {activeKicker ? (
                  <p className={styles.panelKicker}>{activeKicker}</p>
                ) : null}

                {isValidText(activeAreaTitle) ? (
                  <h3 className={styles.panelTitle}>{activeAreaTitle}</h3>
                ) : null}
              </div>
            </div>

            {isValidText(activeArea.summary) ? (
              <p className={styles.panelSummary}>{activeArea.summary}</p>
            ) : null}

            {activePoints.length > 0 ? (
              <ul className={styles.pointsList}>
                {activePoints.map((point) => (
                  <li key={point} className={styles.pointItem}>
                    <span className={styles.pointMarker} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
}
