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
  className = "",
}) {
  const classNames = [styles.card, className].filter(Boolean).join(" ");

  if (!title) return null;

  return (
    <article className={classNames} aria-label={title}>
      <header className={styles.header}>
        <div className={styles.topIconWrap} aria-hidden="true">
          {topIcon}
        </div>

        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>
      </header>

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
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          <span className={styles.metricText}>{metricText}</span>
        </div>
      ) : null}
    </article>
  );
}