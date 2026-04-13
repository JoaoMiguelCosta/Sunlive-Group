import styles from "./TravelIntroPanel.module.css";

function getValidPills(pills) {
  return Array.isArray(pills) ? pills.filter(Boolean) : [];
}

function getValidStats(stats) {
  return Array.isArray(stats)
    ? stats.filter((item) => item?.value && item?.label)
    : [];
}

export default function TravelIntroPanel({
  eyebrow,
  title,
  lead,
  supportingText,
  pills = [],
  stats = [],
  pillsAriaLabel = "Pontos-chave",
  statsAriaLabel = "Destaques da secção",
  as: Tag = "header",
}) {
  const safePills = getValidPills(pills);
  const safeStats = getValidStats(stats);

  const hasContent =
    eyebrow ||
    title ||
    lead ||
    supportingText ||
    safePills.length > 0 ||
    safeStats.length > 0;

  if (!hasContent) return null;

  return (
    <Tag className={styles.hero}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

          {title ? <h2 className={styles.title}>{title}</h2> : null}

          {lead ? <p className={styles.lead}>{lead}</p> : null}

          {supportingText ? (
            <p className={styles.supportingText}>{supportingText}</p>
          ) : null}

          {safePills.length > 0 ? (
            <ul
              className={styles.pills}
              role="list"
              aria-label={pillsAriaLabel}
            >
              {safePills.map((pill, index) => (
                <li key={`${pill}-${index}`} className={styles.pill}>
                  {pill}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {safeStats.length > 0 ? (
          <div className={styles.stats} aria-label={statsAriaLabel}>
            {safeStats.map((stat, index) => (
              <article
                key={`${stat.value}-${stat.label}-${index}`}
                className={styles.statCard}
              >
                <strong className={styles.statValue}>{stat.value}</strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </Tag>
  );
}
