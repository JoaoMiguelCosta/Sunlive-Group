import styles from "./DestinationCard.module.css";

function createDestinationId(destination) {
  if (destination?.key) return String(destination.key);

  const city = String(destination?.city ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return city || "destination";
}

export default function DestinationCard({ destination, variant = "default" }) {
  if (!destination?.city) return null;

  const destinationId = createDestinationId(destination);

  const highlights = Array.isArray(destination?.highlights)
    ? destination.highlights.filter(Boolean)
    : [];

  const pictureSrc = destination?.picture?.src ?? null;
  const pictureAlt = destination?.picture?.alt ?? destination.city;

  return (
    <article
      className={styles.card}
      data-variant={variant}
      aria-labelledby={`${destinationId}-title`}
    >
      {pictureSrc ? (
        <div className={styles.imageWrap}>
          <img
            src={pictureSrc}
            alt={pictureAlt}
            className={styles.image}
            loading="lazy"
          />

          <div className={styles.imageOverlay} aria-hidden="true" />

          {destination?.badge ? (
            <span className={styles.badge}>{destination.badge}</span>
          ) : null}
        </div>
      ) : null}

      <div className={styles.titleBar}>
        <h3 id={`${destinationId}-title`} className={styles.title}>
          {destination.city}
        </h3>
      </div>

      <div className={styles.content}>
        {destination?.summary ? (
          <p className={styles.summary}>{destination.summary}</p>
        ) : null}

        {destination?.duration ? (
          <div className={styles.metaRow}>
            <span className={styles.metaIcon} aria-hidden="true" />
            <p className={styles.duration}>{destination.duration}</p>
          </div>
        ) : null}

        {highlights.length > 0 ? (
          <div className={styles.highlightsBlock}>
            <p className={styles.highlightsLabel}>Destaques:</p>

            <ul
              className={styles.highlights}
              aria-label={`Destaques de ${destination.city}`}
            >
              {highlights.map((item) => (
                <li key={item} className={styles.highlight}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
