import styles from "./SustainabilityPracticeCard.module.css";

function FeatureItem({ title, description, icon = null }) {
  if (!title && !description) return null;

  return (
    <li className={styles.featureItem}>
      <div className={styles.featureHeading}>
        <span className={styles.featureIcon} aria-hidden="true">
          {icon}
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
  metricIcon = null,
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
              icon={feature.icon ?? null}
            />
          ))}
        </ul>
      ) : null}

      {metricText ? (
        <div className={styles.metric}>
          <span className={styles.metricIcon} aria-hidden="true">
            {metricIcon}
          </span>
          <span className={styles.metricText}>{metricText}</span>
        </div>
      ) : null}
    </article>
  );
}
