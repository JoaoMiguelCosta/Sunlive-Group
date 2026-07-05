import destinationsPage from "../../../../config/pages/destinations.js";

import styles from "./InternationalDestinationsSection.module.css";

export default function InternationalDestinationsSection() {
  const section = destinationsPage.sections.internationalDestinations;

  if (!section) return null;

  const destinations = Array.isArray(section?.destinations)
    ? section.destinations
    : [];

  const hasContent =
    section?.title || section?.intro || destinations.length > 0;

  if (!hasContent) return null;

  const sectionId = section?.id ?? "destinos-internacionais";
  const sectionLabel =
    section?.ariaLabel ?? section?.title ?? "Viagens internacionais";

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="international-destinations"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          {section?.title ? (
            <h2 className={styles.title}>{section.title}</h2>
          ) : null}

          {section?.indicator ? (
            <p className={styles.indicator}>{section.indicator}</p>
          ) : null}

          {section?.intro ? (
            <p className={styles.intro}>{section.intro}</p>
          ) : null}
        </div>

        {destinations.length > 0 ? (
          <ul className={styles.grid}>
            {destinations.map((destination) => (
              <li
                key={destination.key}
                id={destination.anchorId}
                className={styles.card}
              >
                {destination?.picture?.src ? (
                  <div className={styles.mediaWrap}>
                    <img
                      src={destination.picture.src}
                      alt={destination?.picture?.alt ?? destination.city}
                      className={styles.media}
                      style={{
                        objectPosition: destination?.imagePosition ?? "center",
                      }}
                      loading="lazy"
                    />
                    <div className={styles.mediaOverlay} aria-hidden="true" />
                    <h3 className={styles.cardTitle}>{destination.city}</h3>
                  </div>
                ) : (
                  <h3 className={styles.cardTitle}>{destination.city}</h3>
                )}

                <div className={styles.cardBody}>
                  {destination?.description ? (
                    <p className={styles.cardDescription}>
                      {destination.description}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
