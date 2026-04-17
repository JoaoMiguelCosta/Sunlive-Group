import styles from "./SportsHeroIntro.module.css";

function buildKey(value, index) {
  if (typeof value === "string" && value.trim()) {
    return `${value}-${index}`;
  }

  return `hero-item-${index}`;
}

function isValidStat(stat) {
  return stat && typeof stat === "object" && (stat.value || stat.label);
}

export default function SportsHeroIntro({
  id,
  eyebrow,
  secondaryLine,
  title,
  description,
  supportingText,
  proofPoints = [],
  stats = [],
  ui = {},
}) {
  const validProofPoints = Array.isArray(proofPoints)
    ? proofPoints.filter((item) => typeof item === "string" && item.trim())
    : [];

  const validStats = Array.isArray(stats) ? stats.filter(isValidStat) : [];

  if (!title && !description) return null;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label={ui?.ariaLabel || "Introdução da página Sunlive Sports"}
    >
      <div className={styles.surface}>
        <span className={styles.topRule} aria-hidden="true" />

        <div className={styles.glowOrb} aria-hidden="true" />
        <div className={styles.glowBeam} aria-hidden="true" />
        <div className={styles.noise} aria-hidden="true" />

        <div className={styles.inner}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

          {secondaryLine ? (
            <p className={styles.secondaryLine}>{secondaryLine}</p>
          ) : null}

          {title ? <h1 className={styles.title}>{title}</h1> : null}

          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}

          {supportingText ? (
            <p className={styles.supportingText}>{supportingText}</p>
          ) : null}

          {validProofPoints.length > 0 ? (
            <ul
              className={styles.proofList}
              role="list"
              aria-label={ui?.proofListAriaLabel || "Pontos-chave"}
            >
              {validProofPoints.map((item, index) => (
                <li key={buildKey(item, index)} className={styles.proofItem}>
                  <span className={styles.proofDot} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {validStats.length > 0 ? (
            <div
              className={styles.statsGrid}
              role="list"
              aria-label={ui?.statsAriaLabel || "Destaques da secção"}
            >
              {validStats.map((stat, index) => (
                <article
                  key={buildKey(`${stat.value}-${stat.label}`, index)}
                  className={styles.statCard}
                  role="listitem"
                >
                  {stat.value ? (
                    <strong className={styles.statValue}>{stat.value}</strong>
                  ) : null}

                  {stat.label ? (
                    <span className={styles.statLabel}>{stat.label}</span>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
