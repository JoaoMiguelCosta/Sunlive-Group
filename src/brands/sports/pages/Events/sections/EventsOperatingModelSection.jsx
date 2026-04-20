import styles from "./EventsOperatingModelSection.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOperatingModelSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "events-operating-model";
  const titleId = data.operatingModel?.title ? `${sectionId}-title` : undefined;

  const operatingModel = data.operatingModel ?? {};
  const summaryPanel = data.summaryPanel ?? {};
  const points = hasItems(operatingModel.points) ? operatingModel.points : [];

  const hasOperating =
    operatingModel.eyebrow || operatingModel.title || points.length > 0;

  const hasSummary =
    summaryPanel.title ||
    summaryPanel.description ||
    summaryPanel.conclusion ||
    summaryPanel.note;

  if (!hasOperating && !hasSummary) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.surface}>
        <div className={styles.ambientGlow} aria-hidden="true" />

        <div className={styles.layout}>
          {hasSummary ? (
            <aside className={styles.summaryPanel}>
              <div className={styles.summaryPanelInner}>
                {summaryPanel.title ? (
                  <p className={styles.summaryEyebrow}>{summaryPanel.title}</p>
                ) : null}

                {summaryPanel.description ? (
                  <h2 className={styles.summaryLead}>
                    {summaryPanel.description}
                  </h2>
                ) : null}

                {summaryPanel.conclusion ? (
                  <p className={styles.summaryConclusion}>
                    {summaryPanel.conclusion}
                  </p>
                ) : null}

                {summaryPanel.note ? (
                  <p className={styles.summaryNote}>{summaryPanel.note}</p>
                ) : null}
              </div>
            </aside>
          ) : null}

          {hasOperating ? (
            <div className={styles.operatingBlock}>
              <header className={styles.header}>
                {operatingModel.eyebrow ? (
                  <p className={styles.eyebrow}>{operatingModel.eyebrow}</p>
                ) : null}

                {operatingModel.title ? (
                  <h2 id={titleId} className={styles.title}>
                    {operatingModel.title}
                  </h2>
                ) : null}
              </header>

              {points.length > 0 ? (
                <ul
                  className={styles.grid}
                  aria-label={operatingModel.ariaLabel}
                >
                  {points.map((point, index) => (
                    <li
                      key={point.key}
                      className={`${styles.card} ${
                        index === 0 ? styles.cardPrimary : ""
                      }`}
                    >
                      <span className={styles.cardIndex} aria-hidden="true">
                        0{index + 1}
                      </span>

                      <div className={styles.cardContent}>
                        {point.title ? (
                          <h3 className={styles.cardTitle}>{point.title}</h3>
                        ) : null}

                        {point.description ? (
                          <p className={styles.cardDescription}>
                            {point.description}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
