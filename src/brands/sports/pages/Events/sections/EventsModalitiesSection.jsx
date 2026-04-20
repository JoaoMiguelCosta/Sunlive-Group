import styles from "./EventsModalitiesSection.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function getCardClassName(index) {
  if (index === 0) return styles.cardPrimary;
  if (index === 1) return styles.cardSecondary;
  return styles.cardTertiary;
}

export default function EventsModalitiesSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "events-featured-modalities";
  const titleId = data.title ? `${sectionId}-title` : undefined;
  const items = hasItems(data.items) ? data.items : [];

  const hasHeading = data.eyebrow || data.title || data.description;

  if (!hasHeading && items.length === 0) {
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
        <div className={styles.ambientGlowSecondary} aria-hidden="true" />

        {hasHeading ? (
          <header className={styles.header}>
            {data.eyebrow ? (
              <p className={styles.eyebrow}>{data.eyebrow}</p>
            ) : null}

            {data.title ? (
              <h2 id={titleId} className={styles.title}>
                {data.title}
              </h2>
            ) : null}

            {data.description ? (
              <p className={styles.description}>{data.description}</p>
            ) : null}
          </header>
        ) : null}

        {items.length > 0 ? (
          <div className={styles.grid} aria-label={data.ariaLabel}>
            {items.map((item, index) => {
              const disciplines = hasItems(item.disciplines)
                ? item.disciplines
                : [];
              const eventExamples = hasItems(item.eventExamples)
                ? item.eventExamples
                : [];

              return (
                <article
                  key={item.key}
                  className={`${styles.card} ${getCardClassName(index)}`}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.cardHeader}>
                      {item.eyebrow ? (
                        <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                      ) : null}

                      {item.title ? (
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                      ) : null}
                    </div>

                    {item.description ? (
                      <p className={styles.cardDescription}>
                        {item.description}
                      </p>
                    ) : null}

                    {item.emphasis ? (
                      <p className={styles.cardEmphasis}>{item.emphasis}</p>
                    ) : null}
                  </div>

                  {(disciplines.length > 0 || eventExamples.length > 0) && (
                    <div className={styles.cardBottom}>
                      {disciplines.length > 0 ? (
                        <div className={styles.metaBlock}>
                          {item.disciplinesLabel ? (
                            <p className={styles.metaLabel}>
                              {item.disciplinesLabel}
                            </p>
                          ) : null}

                          <ul className={styles.metaList}>
                            {disciplines.map((entry, entryIndex) => (
                              <li
                                key={`${item.key}-discipline-${entryIndex}`}
                                className={styles.metaItem}
                              >
                                <span
                                  className={styles.metaDot}
                                  aria-hidden="true"
                                />
                                <span>{entry}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {eventExamples.length > 0 ? (
                        <div className={styles.metaBlock}>
                          {item.eventExamplesLabel ? (
                            <p className={styles.metaLabel}>
                              {item.eventExamplesLabel}
                            </p>
                          ) : null}

                          <ul className={styles.metaList}>
                            {eventExamples.map((entry, entryIndex) => (
                              <li
                                key={`${item.key}-event-${entryIndex}`}
                                className={styles.metaItem}
                              >
                                <span
                                  className={styles.metaDot}
                                  aria-hidden="true"
                                />
                                <span>{entry}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
