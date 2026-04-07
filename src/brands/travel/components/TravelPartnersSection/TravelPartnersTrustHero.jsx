import styles from "./TravelPartnersTrustHero.module.css";

export default function TravelPartnersTrustHero({ hero = {} }) {
  const safeTrustChips = Array.isArray(hero?.trustChips)
    ? hero.trustChips.filter(Boolean)
    : [];

  const safeStats = Array.isArray(hero?.stats)
    ? hero.stats.filter((item) => item?.value && item?.label)
    : [];

  const safeTrustNotes = Array.isArray(hero?.trustNotes)
    ? hero.trustNotes.filter((item) => item?.title && item?.description)
    : [];

  const hasContent =
    hero?.eyebrow ||
    hero?.title ||
    hero?.lead ||
    hero?.supportingText ||
    hero?.trustLabel ||
    safeTrustChips.length > 0 ||
    safeStats.length > 0 ||
    safeTrustNotes.length > 0;

  if (!hasContent) return null;

  const trustChipsAriaLabel =
    hero?.ui?.trustChipsAriaLabel ?? "Critérios da rede parceira";

  const statsAriaLabel =
    hero?.ui?.statsAriaLabel ?? "Destaques da secção de parceiros";

  const trustNotesAriaLabel =
    hero?.ui?.trustNotesAriaLabel ?? "Princípios da rede de parceiros";

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

        {hero?.trustLabel || safeTrustChips.length > 0 ? (
          <div className={styles.trustBlock}>
            {hero?.trustLabel ? (
              <p className={styles.trustLabel}>{hero.trustLabel}</p>
            ) : null}

            {safeTrustChips.length > 0 ? (
              <ul
                className={styles.trustChips}
                aria-label={trustChipsAriaLabel}
              >
                {safeTrustChips.map((chip) => (
                  <li key={chip} className={styles.trustChip}>
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className={styles.sidePanel}>
        {safeStats.length > 0 ? (
          <div className={styles.stats} aria-label={statsAriaLabel}>
            {safeStats.map((stat) => (
              <article
                key={`${stat.value}-${stat.label}`}
                className={styles.statCard}
              >
                <strong className={styles.statValue}>{stat.value}</strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </article>
            ))}
          </div>
        ) : null}

        {safeTrustNotes.length > 0 ? (
          <div className={styles.trustNotes} aria-label={trustNotesAriaLabel}>
            {safeTrustNotes.map((note) => (
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
