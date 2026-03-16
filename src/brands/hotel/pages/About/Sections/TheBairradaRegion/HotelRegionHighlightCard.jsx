import styles from "./HotelRegionHighlightCard.module.css";

/**
 * HotelRegionHighlightCard
 *
 * Props:
 * - id?: string
 * - icon?: ReactNode
 * - title?: string
 * - description?: string
 */
export default function HotelRegionHighlightCard({
  id,
  icon = null,
  title = "",
  description = "",
}) {
  if (!title && !description && !icon) return null;

  return (
    <article id={id} className={styles.card}>
      <div className={styles.cardTop}>
        {icon ? (
          <div className={styles.iconCircle} aria-hidden="true">
            {icon}
          </div>
        ) : null}
      </div>

      {title ? (
        <div className={styles.titleBand}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      ) : null}

      {description ? (
        <div className={styles.body}>
          <p className={styles.description}>{description}</p>
        </div>
      ) : null}
    </article>
  );
}
