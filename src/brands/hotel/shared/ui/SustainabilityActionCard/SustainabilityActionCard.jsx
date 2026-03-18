import styles from "./SustainabilityActionCard.module.css";

export default function SustainabilityActionCard({
  title,
  description,
  icon = null,
  className = "",
  ariaLabel,
}) {
  const cardLabel = ariaLabel || title || "Ação sustentável";
  const classNames = [styles.card, className].filter(Boolean).join(" ");

  if (!title && !description) return null;

  return (
    <article className={classNames} aria-label={cardLabel}>
      <header className={styles.header}>
        {icon ? (
          <div className={styles.iconCircle} aria-hidden="true">
            {icon}
          </div>
        ) : null}
      </header>

      <div className={styles.body}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}

        {title && description ? (
          <div className={styles.divider} aria-hidden="true" />
        ) : null}

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </article>
  );
}