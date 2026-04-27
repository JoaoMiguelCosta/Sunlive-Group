import styles from "./SportsAreasAccordionList.module.css";

import SportsAreasDetailPanel from "./SportsAreasDetailPanel.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function SportsAreasAccordionList({
  areas = [],
  activeKey,
  onSelect,
  resolveIcon,
  ariaLabel,
  kicker,
  title,
  highlightsLabel,
  highlightsAriaLabel,
}) {
  if (!hasItems(areas)) return null;

  return (
    <div className={styles.accordion} aria-label={ariaLabel}>
      {(kicker || title) && (
        <div className={styles.header}>
          {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
          {title ? <h3 className={styles.title}>{title}</h3> : null}
        </div>
      )}

      <ul className={styles.list}>
        {areas.map((area) => {
          const isActive = area.key === activeKey;
          const icon = resolveIcon ? resolveIcon(area.iconKey) : null;
          const panelId = `sports-area-panel-${area.key}`;
          const buttonId = `sports-area-trigger-${area.key}`;

          return (
            <li key={area.key} className={styles.item}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                data-active={isActive ? "true" : "false"}
                aria-expanded={isActive}
                aria-controls={panelId}
                onClick={() => onSelect(area.key)}
              >
                <span className={styles.triggerInner}>
                  {icon ? (
                    <span className={styles.iconWrap} aria-hidden="true">
                      {icon}
                    </span>
                  ) : null}

                  <span className={styles.textWrap}>
                    <span className={styles.itemTitle}>
                      {area.navLabel || area.title}
                    </span>

                    {area.eyebrow ? (
                      <span className={styles.itemEyebrow}>{area.eyebrow}</span>
                    ) : null}
                  </span>
                </span>

                <span className={styles.chevron} aria-hidden="true">
                  <svg viewBox="0 0 12 8" width="16" height="16">
                    <path
                      d="M1.25 1.75L6 6.25L10.75 1.75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {isActive ? (
                <div
                  id={panelId}
                  className={styles.panelWrap}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <SportsAreasDetailPanel
                    compact
                    eyebrow={area.eyebrow}
                    title={area.title}
                    summary={area.summary}
                    highlights={area.highlights}
                    focusLabel={area.focusLabel}
                    focusText={area.focusText}
                    impactLabel={area.impactLabel}
                    impactText={area.impactText}
                    highlightsLabel={area.highlightsLabel || highlightsLabel}
                    highlightsAriaLabel={
                      area.highlightsAriaLabel || highlightsAriaLabel
                    }
                    icon={icon}
                  />
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
