import styles from "./EventsOverviewSection.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOverviewSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "events-overview";
  const titleId = data.sectionIntro?.title ? `${sectionId}-title` : undefined;

  const sectionIntro = data.sectionIntro ?? {};
  const editorialBlock = data.editorialBlock ?? {};
  const capabilityCards = data.capabilityCards ?? {};

  const editorialBody = hasItems(editorialBlock.body)
    ? editorialBlock.body
    : [];
  const capabilityItems = hasItems(capabilityCards.items)
    ? capabilityCards.items
    : [];

  const hasIntro =
    Boolean(sectionIntro.eyebrow) ||
    Boolean(sectionIntro.title) ||
    Boolean(sectionIntro.description) ||
    Boolean(editorialBlock.lead) ||
    editorialBody.length > 0;

  const hasEditorialPanel =
    Boolean(editorialBlock.lead) || editorialBody.length > 0;

  const hasCapabilities = capabilityItems.length > 0;

  if (!hasIntro && !hasCapabilities) {
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

        <div className={styles.topLayout}>
          {hasIntro ? (
            <header className={styles.editorialColumn}>
              {(sectionIntro.eyebrow ||
                sectionIntro.title ||
                sectionIntro.description) && (
                <div className={styles.editorialIntro}>
                  {sectionIntro.eyebrow ? (
                    <p className={styles.eyebrow}>{sectionIntro.eyebrow}</p>
                  ) : null}

                  {sectionIntro.title ? (
                    <h2 id={titleId} className={styles.title}>
                      {sectionIntro.title}
                    </h2>
                  ) : null}

                  {sectionIntro.description ? (
                    <p className={styles.description}>
                      {sectionIntro.description}
                    </p>
                  ) : null}
                </div>
              )}

              {hasEditorialPanel ? (
                <div className={styles.editorialPanel}>
                  {editorialBlock.lead ? (
                    <p className={styles.editorialLead}>
                      {editorialBlock.lead}
                    </p>
                  ) : null}

                  {editorialBody.length > 0 ? (
                    <div className={styles.editorialBody}>
                      {editorialBody.map((paragraph, index) => (
                        <p key={`${sectionId}-editorial-${index}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </header>
          ) : null}

          {hasCapabilities ? (
            <aside className={styles.sideColumn}>
              <div className={styles.capabilityColumn}>
                <ul
                  className={styles.capabilityStack}
                  aria-label={capabilityCards.ariaLabel}
                >
                  {capabilityItems.map((item, index) => (
                    <li
                      key={item.key ?? `${sectionId}-capability-${index}`}
                      className={`${styles.capabilityCard} ${
                        index === 0 ? styles.capabilityCardPrimary : ""
                      }`}
                    >
                      <span
                        className={styles.capabilityIndex}
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className={styles.capabilityContent}>
                        {item.title ? (
                          <h3 className={styles.capabilityTitle}>
                            {item.title}
                          </h3>
                        ) : null}

                        {item.description ? (
                          <p className={styles.capabilityDescription}>
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
