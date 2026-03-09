import styles from "./HotelRoomCard.module.css";

/**
 * HotelRoomCard (reutilizável)
 *
 * Props:
 *  - title: string
 *  - description?: string
 *  - features?: Array<string>
 *  - imageSrc?: string | null
 *  - imageAlt?: string
 *  - badge?: string
 *  - className?: string
 */
export default function HotelRoomCard({
  title,
  description,
  features = [],
  imageSrc = null,
  imageAlt = "",
  badge,
  className = "",
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.media} aria-label={imageAlt || title}>
        {hasImage ? (
          <img
            className={styles.image}
            src={imageSrc}
            alt={imageAlt || title}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderText}>Foto</span>
          </div>
        )}

        {badge ? <div className={styles.badge}>{badge}</div> : null}
      </div>

      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </header>

      {description ? (
        <div className={styles.desc}>
          <p className={styles.descText}>{description}</p>
        </div>
      ) : null}

      {features?.length ? (
        <ul className={styles.features} aria-label="Room features">
          {features.map((text, index) => (
            <li key={`${text}-${index}`} className={styles.featureItem}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <span className={styles.featureText}>{text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
