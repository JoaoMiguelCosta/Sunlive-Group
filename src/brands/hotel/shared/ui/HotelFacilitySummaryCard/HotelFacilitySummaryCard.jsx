import styles from "./HotelFacilitySummaryCard.module.css";

function IconSlot({ icon: Icon = null, iconLabel = "" }) {
  if (Icon) {
    return (
      <span className={styles.iconCircle} aria-label={iconLabel}>
        <Icon />
      </span>
    );
  }

  return (
    <span className={styles.iconCircle} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

export default function HotelFacilitySummaryCard({
  title,
  shortTitle,
  summary,
  icon = null,
  iconLabel = "",
  isOpen = false,
  onToggle,
  controlsId,
  buttonId,
  openLabel = "Ver detalhes",
  closeLabel = "Ocultar detalhes",
}) {
  if (!title && !summary) return null;

  return (
    <article className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}>
      <div className={styles.header}>
        <IconSlot icon={icon} iconLabel={iconLabel} />

        <div className={styles.titleWrap}>
          {shortTitle ? (
            <span className={styles.kicker} aria-hidden="true">
              {shortTitle}
            </span>
          ) : null}

          {title ? <h3 className={styles.title}>{title}</h3> : null}
        </div>
      </div>

      {summary ? (
        <div className={styles.body}>
          <p className={styles.summary}>{summary}</p>
        </div>
      ) : null}

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
            {isOpen ? closeLabel : openLabel}
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
