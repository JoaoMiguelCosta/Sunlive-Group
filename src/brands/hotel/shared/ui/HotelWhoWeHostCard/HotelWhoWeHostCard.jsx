import styles from "./HotelWhoWeHostCard.module.css";

/**
 * HotelWhoWeHostCard
 * Card único para conteúdo visual do Hotel.
 *
 * Props:
 *  - id?: string
 *  - icon?: ReactNode
 *  - title?: string
 *  - description: string
 *  - statValue?: string
 *  - variant?: "default" | "metric"
 */
export default function HotelWhoWeHostCard({
  id,
  icon = null,
  title = "",
  description,
  statValue = null,
  variant = "default",
}) {
  const variantClass = styles[variant] ?? "";

  return (
    <article id={id} className={`${styles.card} ${variantClass}`}>
      <div className={styles.cardTop}>
        {icon ? <div className={styles.iconCircle}>{icon}</div> : null}

        {variant === "metric" && statValue ? (
          <div className={styles.statValue}>{statValue}</div>
        ) : null}
      </div>

      <div className={styles.titleBand}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
