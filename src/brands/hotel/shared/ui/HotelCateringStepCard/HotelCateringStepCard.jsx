import styles from "./HotelCateringStepCard.module.css";

export default function HotelCateringStepCard({
  stepNumber,
  title,
  description,
  icon = null,
  iconKey = null,
  className = "",
  isActive = false,
  onClick,
}) {
  if (!title || !description) return null;

  const Tag = typeof onClick === "function" ? "button" : "article";

  return (
    <Tag
      className={`${styles.card} ${isActive ? styles.active : ""} ${className}`.trim()}
      onClick={onClick}
      type={Tag === "button" ? "button" : undefined}
      aria-pressed={Tag === "button" ? isActive : undefined}
    >
      <div className={styles.topBar}>
        {stepNumber ? (
          <span className={styles.stepBadge} aria-label={`Passo ${stepNumber}`}>
            {stepNumber}
          </span>
        ) : null}
      </div>

      <div className={styles.main}>
        <span
          className={styles.iconCircle}
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
    </Tag>
  );
}
