import styles from "./SportsAreasDetailPanel.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function SportsAreasDetailPanel({
  id,
  eyebrow,
  title,
  summary,
  highlights = [],
  focusLabel,
  focusText,
  impactLabel,
  impactText,
  icon = null,
  highlightsLabel = "Destaques",
  highlightsAriaLabel,
  compact = false,
}) {
  const hasHighlights = hasItems(highlights);

  const panelClassName = [styles.panel, compact ? styles.panelCompact : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article id={id} className={panelClassName} aria-label={title || undefined}>
      <div className={styles.header}>
        <div className={styles.metaRow}>
          {icon ? (
            <div className={styles.iconWrap} aria-hidden="true">
              <span className={styles.icon}>{icon}</span>
            </div>
          ) : null}

          <div className={styles.headingBlock}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? <h3 className={styles.title}>{title}</h3> : null}
          </div>
        </div>

        {summary ? <p className={styles.summary}>{summary}</p> : null}
      </div>

      <div className={styles.body}>
        {hasHighlights ? (
          <section className={styles.mainInfo}>
            {highlightsLabel ? (
              <p className={styles.blockLabel}>{highlightsLabel}</p>
            ) : null}

            <ul
              className={styles.highlights}
              aria-label={highlightsAriaLabel || title || highlightsLabel}
            >
              {highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  <span className={styles.highlightBullet} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {(focusLabel || focusText || impactLabel || impactText) && (
          <aside className={styles.sideInfo}>
            {(focusLabel || focusText) && (
              <div className={styles.infoBlock}>
                {focusLabel ? (
                  <p className={styles.infoLabel}>{focusLabel}</p>
                ) : null}
                {focusText ? (
                  <p className={styles.infoText}>{focusText}</p>
                ) : null}
              </div>
            )}

            {(impactLabel || impactText) && (
              <div className={styles.infoBlock}>
                {impactLabel ? (
                  <p className={styles.infoLabel}>{impactLabel}</p>
                ) : null}
                {impactText ? (
                  <p className={styles.infoText}>{impactText}</p>
                ) : null}
              </div>
            )}
          </aside>
        )}
      </div>
    </article>
  );
}
