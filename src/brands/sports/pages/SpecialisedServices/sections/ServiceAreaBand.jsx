import styles from "./ServiceAreaBand.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function ServiceAreaBand({
  eyebrow,
  title,
  summary,
  highlights = [],
  focusLabel,
  focusText,
  impactLabel,
  impactText,
  icon = null,
  reversed = false,
  highlightsAriaLabel,
}) {
  const hasHighlights = hasItems(highlights);

  const bandClassName = [styles.band, reversed ? styles.bandReversed : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={bandClassName} aria-label={title || undefined}>
      <div className={styles.mainColumn}>
        <header className={styles.header}>
          {(icon || eyebrow) && (
            <div className={styles.metaRow}>
              {icon ? (
                <div className={styles.iconWrap} aria-hidden="true">
                  <span className={styles.icon}>{icon}</span>
                </div>
              ) : null}

              {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            </div>
          )}

          {title ? <h3 className={styles.title}>{title}</h3> : null}
        </header>

        {summary ? <p className={styles.summary}>{summary}</p> : null}

        {hasHighlights ? (
          <ul
            className={styles.highlights}
            aria-label={highlightsAriaLabel || title || "Destaques da área"}
          >
            {highlights.map((item) => (
              <li key={item} className={styles.highlightItem}>
                <span className={styles.highlightBullet} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <aside className={styles.sideColumn}>
        {(focusLabel || focusText) && (
          <div className={styles.infoBlock}>
            {focusLabel ? (
              <p className={styles.infoLabel}>{focusLabel}</p>
            ) : null}
            {focusText ? <p className={styles.infoText}>{focusText}</p> : null}
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
    </article>
  );
}
