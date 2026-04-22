import styles from "./ProgramSportCardDetailsBlock.module.css";

export default function ProgramSportCardDetailsBlock({
  audienceLabel,
  audience,
  pillarsLabel,
  pillars,
}) {
  const safePillars = Array.isArray(pillars) ? pillars : [];

  const hasAudience = Boolean(audienceLabel || audience);
  const hasPillars = safePillars.length > 0;

  if (!hasAudience && !hasPillars) return null;

  return (
    <div className={styles.stack}>
      {hasAudience ? (
        <div className={styles.block}>
          {audienceLabel ? (
            <h4 className={styles.blockTitle}>{audienceLabel}</h4>
          ) : null}

          {audience ? <p className={styles.audience}>{audience}</p> : null}
        </div>
      ) : null}

      {hasPillars ? (
        <div className={styles.block}>
          {pillarsLabel ? (
            <h4 className={styles.blockTitle}>{pillarsLabel}</h4>
          ) : null}

          <ul className={styles.pillarsList}>
            {safePillars.map((pillar) => (
              <li key={pillar} className={styles.pillarItem}>
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
