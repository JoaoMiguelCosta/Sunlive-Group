import styles from "./HotelWhoWeHostCard.module.css";

/**
 * HotelWhoWeHostCard
 *
 * Props:
 *  - id?: string
 *  - icon?: ReactNode
 *  - title?: string
 *  - description?: string
 *  - statValue?: string
 *  - variant?: "default" | "metric"
 *  - className?: string
 */
export default function HotelWhoWeHostCard({
  id,
  icon = null,
  title = "",
  description = "",
  statValue = null,
  variant = "default",
  className = "",
}) {
  if (!description && !title && !statValue) return null;

  const variantClass = styles[variant] ?? "";

  return (
    <article
      id={id}
      className={[styles.card, variantClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.cardTop}>
        {icon ? <div className={styles.iconCircle}>{icon}</div> : null}

        {variant === "metric" && statValue ? (
          <div className={styles.statValue}>{statValue}</div>
        ) : null}
      </div>

      {variant !== "metric" ? (
        <div className={styles.titleBand}>
          {title ? <h3 className={styles.title}>{title}</h3> : null}
        </div>
      ) : null}

      <div className={styles.body}>
        {variant === "metric" && title ? (
          <h3 className={styles.metricTitle}>{title}</h3>
        ) : null}

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </article>
  );
}
