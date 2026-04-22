import styles from "./EventsModalitiesCard.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function getVariantClassName(index) {
  if (index === 0) return styles.cardPrimary;
  if (index === 1) return styles.cardSecondary;
  return styles.cardTertiary;
}

export default function EventsModalitiesCard({ item, index, sectionId }) {
  const disciplines = hasItems(item.disciplines) ? item.disciplines : [];
  const eventExamples = hasItems(item.eventExamples) ? item.eventExamples : [];

  return (
    <article className={`${styles.card} ${getVariantClassName(index)}`}>
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
          <p className={styles.cardDescription}>{item.description}</p>
        ) : null}

        {item.emphasis ? (
          <p className={styles.cardEmphasis}>{item.emphasis}</p>
        ) : (
          <span className={styles.cardEmphasisPlaceholder} aria-hidden="true" />
        )}
      </div>

      {(disciplines.length > 0 || eventExamples.length > 0) && (
        <div className={styles.cardBottom}>
          {disciplines.length > 0 ? (
            <div className={styles.metaBlock}>
              {item.disciplinesLabel ? (
                <p className={styles.metaLabel}>{item.disciplinesLabel}</p>
              ) : null}

              <ul className={styles.metaList}>
                {disciplines.map((entry, entryIndex) => (
                  <li
                    key={`${item.key || sectionId}-discipline-${entryIndex}`}
                    className={styles.metaItem}
                  >
                    <span className={styles.metaDot} aria-hidden="true" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {eventExamples.length > 0 ? (
            <div className={styles.metaBlock}>
              {item.eventExamplesLabel ? (
                <p className={styles.metaLabel}>{item.eventExamplesLabel}</p>
              ) : null}

              <ul className={styles.metaList}>
                {eventExamples.map((entry, entryIndex) => (
                  <li
                    key={`${item.key || sectionId}-event-${entryIndex}`}
                    className={styles.metaItem}
                  >
                    <span className={styles.metaDot} aria-hidden="true" />
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
}
