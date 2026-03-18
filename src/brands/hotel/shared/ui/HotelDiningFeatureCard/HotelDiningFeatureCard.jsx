import styles from "./HotelDiningFeatureCard.module.css";

export default function HotelDiningFeatureCard({
  title,
  description,
  icon = null,
  iconKey = null,
  className = "",
}) {
  const hasIcon = Boolean(icon);

  return (
    <article className={`${styles.card} ${className}`.trim()}>
      <div className={styles.header}>
        <span
          className={styles.iconSlot}
          aria-hidden="true"
          data-icon-key={iconKey ?? ""}
        >
          {hasIcon ? <span className={styles.iconInner}>{icon}</span> : null}
        </span>

        {title ? <h3 className={styles.title}>{title}</h3> : null}

        <span className={styles.headerSpacer} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </article>
  );
}