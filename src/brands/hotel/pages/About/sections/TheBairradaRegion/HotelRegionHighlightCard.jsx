import styles from "./HotelRegionHighlightCard.module.css";

export default function HotelRegionHighlightCard({
  id,
  icon = null,
  title = "",
  description = "",
}) {
  if (!title && !description && !icon) return null;

  return (
    <article id={id} className={styles.card}>
      <div className={styles.inner}>
        {icon ? (
          <div className={styles.iconCircle} aria-hidden="true">
            {icon}
          </div>
        ) : null}

        <div className={styles.copy}>
          {title ? <h3 className={styles.title}>{title}</h3> : null}

          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
