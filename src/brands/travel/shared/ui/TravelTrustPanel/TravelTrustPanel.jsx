import styles from "./TravelTrustPanel.module.css";

function getValidStats(stats) {
  return Array.isArray(stats)
    ? stats.filter((stat) => stat?.value && stat?.label)
    : [];
}

export default function TravelTrustPanel({
  eyebrow,
  title,
  titleId,
  lead,
  description,
  stats = [],
  statsAriaLabel,
  titleAs: TitleTag = "h2",
}) {
  const safeStats = getValidStats(stats);

  const hasContent =
    eyebrow || title || lead || description || safeStats.length > 0;

  if (!hasContent) return null;

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

        {title ? (
          <TitleTag id={titleId} className={styles.title}>
            {title}
          </TitleTag>
        ) : null}

        {lead || description ? (
          <div className={styles.copy}>
            {lead ? <p className={styles.lead}>{lead}</p> : null}

            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}
          </div>
        ) : null}
      </header>

      {safeStats.length > 0 ? (
        <ul className={styles.stats} aria-label={statsAriaLabel || undefined}>
          {safeStats.map((stat) => (
            <li
              key={`${stat.value}-${stat.label}`}
              className={styles.statCard}
            >
              <strong className={styles.statValue}>{stat.value}</strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
