import styles from "./WhyChooseCard.module.css";

export default function WhyChooseCard({
  title,
  description,
  icon,
  className = "",
  ariaLabel,
}) {
  const label = ariaLabel || title || "card";
  const hasIcon = Boolean(icon);

  return (
    <article
      className={[styles.card, className].filter(Boolean).join(" ")}
      aria-label={label}
    >
      <div className={styles.topBar}>
        <div className={styles.iconWrap} aria-hidden="true">
          {hasIcon ? (
            <span className={styles.icon}>{icon}</span>
          ) : (
            <span className={styles.iconPlaceholder} />
          )}
        </div>
      </div>

      <div className={styles.content}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
        {description ? <p className={styles.desc}>{description}</p> : null}
      </div>
    </article>
  );
}
