import styles from "./SustainabilityPracticeCard.module.css";

function FeatureItem({ title, description }) {
  if (!title && !description) return null;

  return (
    <li className={styles.featureItem}>
      <div className={styles.featureHeading}>
        <span className={styles.check} aria-hidden="true">
          ✓
        </span>

        {title ? <h4 className={styles.featureTitle}>{title}</h4> : null}
      </div>

      {description ? (
        <p className={styles.featureDescription}>{description}</p>
      ) : null}
    </li>
  );
}

export default function SustainabilityPracticeCard({
  title,
  subtitle,
  description,
  topIcon = null,
  features = [],
  metricText,
  featured = false,
  media = null,
  className = "",
}) {
  if (!title) return null;

  const hasMedia = Boolean(media?.imageSrc);

  const classNames = [styles.card, featured ? styles.featured : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classNames} aria-label={title}>
      <header className={styles.header}>
        <div className={styles.topIconWrap} aria-hidden="true">
          {topIcon ? topIcon : <span className={styles.iconFallback} />}
        </div>

        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>
      </header>

      <div
        className={[
          styles.content,
          featured ? styles.featuredContent : "",
          hasMedia ? styles.hasMedia : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.contentMain}>
          {description ? (
            <div className={styles.descriptionBlock}>
              <p className={styles.description}>{description}</p>
            </div>
          ) : null}

          {features.length > 0 ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </ul>
          ) : null}

          {metricText ? (
            <div className={styles.metric}>
              <span className={styles.metricCheck} aria-hidden="true">
                ✓
              </span>
              <span className={styles.metricText}>{metricText}</span>
            </div>
          ) : null}
        </div>

        {featured && hasMedia ? (
          <div className={styles.mediaColumn}>
            <div className={styles.mediaFrame}>
              <img
                src={media.imageSrc}
                alt={media.imageAlt ?? ""}
                className={styles.mediaImage}
                loading="lazy"
                style={{
                  objectPosition: media.imagePosition ?? "center center",
                }}
              />

              <div className={styles.mediaOverlay} aria-hidden="true" />

              {media.eyebrow ? (
                <span className={styles.mediaEyebrow}>{media.eyebrow}</span>
              ) : null}

              {media.caption ? (
                <p className={styles.mediaCaption}>{media.caption}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
