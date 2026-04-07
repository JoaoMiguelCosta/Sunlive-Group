import styles from "./PartnerHotelsCollectionHero.module.css";

export default function PartnerHotelsCollectionHero({ hero = {} }) {
  const safeCollectionChips = Array.isArray(hero?.collectionChips)
    ? hero.collectionChips.filter(Boolean)
    : [];

  const safeMetrics = Array.isArray(hero?.metrics)
    ? hero.metrics.filter((item) => item?.value && item?.label)
    : [];

  const safeCollectionNotes = Array.isArray(hero?.collectionNotes)
    ? hero.collectionNotes.filter((item) => item?.title && item?.description)
    : [];

  const hasContent =
    hero?.eyebrow ||
    hero?.title ||
    hero?.lead ||
    hero?.supportingText ||
    hero?.collectionLabel ||
    safeCollectionChips.length > 0 ||
    safeMetrics.length > 0 ||
    safeCollectionNotes.length > 0;

  if (!hasContent) return null;

  const collectionChipsAriaLabel =
    hero?.ui?.collectionChipsAriaLabel ?? "Critérios da seleção de alojamento";

  const metricsAriaLabel =
    hero?.ui?.metricsAriaLabel ?? "Indicadores da secção de hotéis parceiros";

  const collectionNotesAriaLabel =
    hero?.ui?.collectionNotesAriaLabel ?? "Princípios da curadoria de hotéis";

  return (
    <header className={styles.hero}>
      <div className={styles.copyPanel}>
        {hero?.eyebrow ? (
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
        ) : null}

        {hero?.title ? <h2 className={styles.title}>{hero.title}</h2> : null}

        {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}

        {hero?.supportingText ? (
          <p className={styles.supportingText}>{hero.supportingText}</p>
        ) : null}

        {hero?.collectionLabel || safeCollectionChips.length > 0 ? (
          <div className={styles.collectionBlock}>
            {hero?.collectionLabel ? (
              <p className={styles.collectionLabel}>{hero.collectionLabel}</p>
            ) : null}

            {safeCollectionChips.length > 0 ? (
              <ul
                className={styles.collectionChips}
                aria-label={collectionChipsAriaLabel}
              >
                {safeCollectionChips.map((chip) => (
                  <li key={chip} className={styles.collectionChip}>
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className={styles.sidePanel}>
        {safeMetrics.length > 0 ? (
          <div className={styles.metrics} aria-label={metricsAriaLabel}>
            {safeMetrics.map((metric) => (
              <article
                key={`${metric.value}-${metric.label}`}
                className={styles.metricCard}
              >
                <strong className={styles.metricValue}>{metric.value}</strong>
                <span className={styles.metricLabel}>{metric.label}</span>
              </article>
            ))}
          </div>
        ) : null}

        {safeCollectionNotes.length > 0 ? (
          <div
            className={styles.collectionNotes}
            aria-label={collectionNotesAriaLabel}
          >
            {safeCollectionNotes.map((note) => (
              <article
                key={note?.key ?? note.title}
                className={styles.noteCard}
              >
                <h3 className={styles.noteTitle}>{note.title}</h3>
                <p className={styles.noteDescription}>{note.description}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
