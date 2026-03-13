import styles from "./HotelMilestoneCard.module.css";

/**
 * HotelMilestoneCard
 * Card para marcos cronológicos.
 *
 * Props:
 * - title: string
 * - subtitle?: string
 * - className?: string
 */
export default function HotelMilestoneCard({
  title,
  subtitle,
  className = "",
}) {
  if (!title) return null;

  const classNames = [styles.wrap, className].filter(Boolean).join(" ");

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
