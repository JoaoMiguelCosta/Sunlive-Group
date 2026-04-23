import styles from "./EducationCareersPanel.module.css";

export default function EducationCareersPanel({
  item,
  detailPanel,
  panelId,
  tabId,
}) {
  if (!item) return null;

  const features = Array.isArray(item.features) ? item.features : [];
  const outcomes = Array.isArray(item.outcomes) ? item.outcomes : [];
  const hasFeatures = features.length > 0;
  const hasOutcomes = outcomes.length > 0;

  const featuresLabel = item.featuresLabel || detailPanel?.featuresLabel;
  const outcomesLabel = item.outcomesLabel || detailPanel?.outcomesLabel;

  return (
    <article
      id={panelId}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={tabId}
      className={styles.panel}
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

      {hasFeatures || hasOutcomes ? (
        <div className={styles.panelGrid}>
          {hasFeatures ? (
            <div className={styles.group}>
              {featuresLabel ? (
                <p className={styles.groupLabel}>{featuresLabel}</p>
              ) : null}

              <ul className={styles.tagList}>
                {features.map((feature, index) => (
                  <li
                    key={`${item.id}-feature-${index}-${feature}`}
                    className={styles.tagItem}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {hasOutcomes ? (
            <div className={styles.group}>
              {outcomesLabel ? (
                <p className={styles.groupLabel}>{outcomesLabel}</p>
              ) : null}

              <ul className={styles.outcomeList}>
                {outcomes.map((outcome, index) => (
                  <li
                    key={`${item.id}-outcome-${index}-${outcome}`}
                    className={styles.outcomeItem}
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
