import styles from "./LogisticsServiceCard.module.css";

export default function LogisticsServiceCard({
  icon: Icon,
  title,
  summary,
  items = [],
  includesLabel,
}) {
  if (!title) return null;

  const safeItems = Array.isArray(items)
    ? items.map((item) => String(item).trim()).filter(Boolean)
    : [];

  const hasDetails = safeItems.length > 0;

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        {Icon ? (
          <span className={styles.iconWrap} aria-hidden="true">
            <Icon className={styles.icon} />
          </span>
        ) : null}

        {/* aria-hidden: aria-labelledby no painel já usa este texto */}
        <h4 className={styles.title} aria-hidden="true">
          {title}
        </h4>
      </div>

      {summary ? <p className={styles.summary}>{summary}</p> : null}

      {hasDetails ? (
        <div className={styles.details}>
          {includesLabel ? (
            <p className={styles.includesLabel}>{includesLabel}</p>
          ) : null}

          <ul className={styles.list}>
            {safeItems.map((text, index) => (
              <li key={`item-${index}`} className={styles.listItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span className={styles.listText}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
