import styles from "./HotelRegionHighlightCard.module.css";

/**
 * HotelRegionHighlightCard
 * Card compacto para destaques da secção "A Região da Bairrada".
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
      {icon ? (
        <div className={styles.iconWrap} aria-hidden="true">
          <div className={styles.iconCircle}>{icon}</div>
        </div>
      ) : null}

      {title ? <h3 className={styles.title}>{title}</h3> : null}

      {description ? <p className={styles.description}>{description}</p> : null}
    </article>
  );
}
