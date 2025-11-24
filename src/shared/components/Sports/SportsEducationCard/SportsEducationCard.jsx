// src/shared/components/Sports/SportsEducationCard/SportsEducationCard.jsx
import styles from "./SportsEducationCard.module.css";

export default function SportsEducationCard({
  icon,
  title,
  ageRange,
  subtitle,
  description,
  features = [],
  featuresLabel = "Características:", // 👈 NOVO
  bookCta = null,
  className = "",
  ...rest
}) {
  if (!title) return null;

  const rootClassName = [styles.card, className].filter(Boolean).join(" ");

  const hasFeatures = Array.isArray(features) && features.length > 0;
  const hasBook = bookCta && bookCta.href;

  return (
    <article className={rootClassName} {...rest}>
      {/* Topo: icon + título + idade */}
      <header className={styles.cardHeader}>
        {icon && (
          <div className={styles.iconBadge} aria-hidden="true">
            {icon}
          </div>
        )}

        <div className={styles.headerText}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{title}</h3>
            {ageRange && <span className={styles.ageRange}>({ageRange})</span>}
          </div>
        </div>
      </header>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {description && <p className={styles.description}>{description}</p>}

      {hasFeatures && (
        <div className={styles.featuresBlock}>
          <p className={styles.featuresTitle}>{featuresLabel}</p>
          <ul className={styles.featuresList}>
            {features.map((feat, idx) => (
              <li key={idx} className={styles.featureItem}>
                <span className={styles.featureBullet} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasBook && (
        <div className={styles.bookCtaWrapper}>
          <a
            href={bookCta.href}
            className={styles.bookCta}
            aria-label={bookCta.ariaLabel || bookCta.label}
            target="_blank"
            rel="noreferrer"
          >
            <span>{bookCta.label}</span>
          </a>
        </div>
      )}
    </article>
  );
}
