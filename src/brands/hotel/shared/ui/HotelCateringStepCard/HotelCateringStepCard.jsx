import styles from "./HotelCateringStepCard.module.css";

export default function HotelCateringStepCard({
  stepNumber,
  title,
  description,
  icon = null,
  iconKey = null,
  className = "",
}) {
  if (!title || !description) return null;

  return (
    <article className={`${styles.card} ${className}`.trim()}>
      <div className={styles.topBar}>
        {stepNumber ? (
          <span className={styles.stepBadge} aria-label={`Passo ${stepNumber}`}>
            {stepNumber}
          </span>
        ) : null}
      </div>

      <div className={styles.main}>
        <span
          className={styles.iconSlot}
          aria-hidden="true"
          data-icon-key={iconKey ?? ""}
        >
          {icon ? <span className={styles.iconInner}>{icon}</span> : null}
        </span>

        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.footer}>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
