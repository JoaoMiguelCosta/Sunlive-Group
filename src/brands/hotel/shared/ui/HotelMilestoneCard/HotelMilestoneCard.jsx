import styles from "./HotelMilestoneCard.module.css";

/**
 * HotelMilestoneCard
 * Card para marcos cronológicos.
 *
 * Props:
 * - title: string
 * - subtitle?: string
 * - featured?: boolean
 * - className?: string
 */
export default function HotelMilestoneCard({
  title,
  subtitle,
  featured = false,
  className = "",
}) {
  if (!title) return null;

  const classNames = [styles.wrap, featured ? styles.featured : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <article className={styles.card}>
        <div className={styles.inner}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>
      </article>
    </div>
  );
}
