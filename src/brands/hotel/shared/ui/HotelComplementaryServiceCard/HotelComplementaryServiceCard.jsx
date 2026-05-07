import styles from "./HotelComplementaryServiceCard.module.css";

function IconSlot({ icon = null, iconLabel = "" }) {
  if (icon) {
    return (
      <span className={styles.iconCircle} aria-label={iconLabel}>
        {icon}
      </span>
    );
  }

  return (
    <span className={styles.iconCircle} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

export default function HotelComplementaryServiceCard({
  title,
  description,
  badge,
  icon = null,
  iconLabel = "",
  isActive = false,
  onClick,
  ariaControls = "",
}) {
  if (!title) return null;

  return (
    <article className={`${styles.card} ${isActive ? styles.cardActive : ""}`}>
      <button
        type="button"
        className={styles.trigger}
        onClick={onClick}
        aria-pressed={isActive}
        aria-controls={ariaControls || undefined}
      >
        <div className={styles.iconColumn}>
          <IconSlot icon={icon} iconLabel={iconLabel} />
        </div>

        <div className={styles.content}>
          <div className={styles.topRow}>
            <h3 className={styles.title}>{title}</h3>
            {badge ? <span className={styles.badge}>{badge}</span> : null}
          </div>

          {description ? (
            <div className={styles.bottomRow}>
              <p className={styles.description}>{description}</p>
            </div>
          ) : null}
        </div>
      </button>
    </article>
  );
}
