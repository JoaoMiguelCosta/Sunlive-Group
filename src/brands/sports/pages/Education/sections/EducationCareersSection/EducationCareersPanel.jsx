import styles from "./EducationCareersPanel.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationCareersPanel({ item, detailPanel }) {
  if (!item) return null;

  return (
    <article
      className={styles.panel}
      aria-label={detailPanel?.ariaLabel || item.title}
    >
      <div className={styles.panelTop}>
        <div className={styles.panelHeading}>
          {item.title ? (
            <h3 className={styles.panelTitle}>{item.title}</h3>
          ) : null}

          {item.summary ? (
            <p className={styles.panelSummary}>{item.summary}</p>
          ) : null}
        </div>

        {item.duration ? (
          <span className={styles.durationPill}>{item.duration}</span>
        ) : null}
      </div>

      {item.description ? (
        <p className={styles.panelDescription}>{item.description}</p>
      ) : null}

      <div className={styles.panelGrid}>
        {hasItems(item.features) ? (
          <div className={styles.group}>
            <p className={styles.groupLabel}>
              {item.featuresLabel || "Opções disponíveis:"}
            </p>

            <ul className={styles.tagList}>
              {item.features.map((feature) => (
                <li key={feature} className={styles.tagItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasItems(item.outcomes) ? (
          <div className={styles.group}>
            <p className={styles.groupLabel}>
              {item.outcomesLabel || "Saídas possíveis:"}
            </p>

            <ul className={styles.outcomeList}>
              {item.outcomes.map((outcome) => (
                <li key={outcome} className={styles.outcomeItem}>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
