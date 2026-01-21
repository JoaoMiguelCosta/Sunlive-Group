import styles from "./WhyChooseCard.module.css";

export default function WhyChooseCard({
  title,
  description,
  icon,
  className = "",
  ariaLabel,
}) {
  const label = ariaLabel || title || "card";

  return (
    <article className={`${styles.card} ${className}`} aria-label={label}>
      <div className={styles.topBar}>
        <div className={styles.iconWrap} aria-hidden="true">
          {icon ? <span className={styles.icon}>{icon}</span> : null}
        </div>
      </div>

      <div className={styles.content}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
        {title && description ? (
          <div className={styles.divider} aria-hidden="true" />
        ) : null}
        {description ? <p className={styles.desc}>{description}</p> : null}
      </div>
    </article>
  );
}
