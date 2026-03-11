import styles from "./HotelFacilitySummaryCard.module.css";

function IconSlot({ icon = null, iconLabel = "" }) {
  if (icon) {
    return (
      <span className={styles.iconSlot} aria-label={iconLabel}>
        {icon}
      </span>
    );
  }

  return (
    <span className={styles.iconSlot} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

export default function HotelFacilitySummaryCard({
  title,
  summary,
  icon = null,
  iconLabel = "",
  isOpen = false,
  onToggle,
  controlsId,
  buttonId,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <IconSlot icon={icon} iconLabel={iconLabel} />
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.body}>
        <p className={styles.summary}>{summary}</p>
      </div>

      <div className={styles.footer}>
        <button
          id={buttonId}
          type="button"
          className={styles.button}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={controlsId}
        >
          <span className={styles.buttonLabel}>
            {isOpen ? "Ocultar Detalhes" : "Ver Detalhes"}
          </span>

          <span
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
