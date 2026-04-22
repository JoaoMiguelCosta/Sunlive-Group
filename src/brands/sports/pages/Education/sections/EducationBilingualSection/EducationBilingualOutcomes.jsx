import styles from "./EducationBilingualOutcomes.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationBilingualOutcomes({ outcomes }) {
  if (!outcomes?.title && !hasItems(outcomes?.items)) return null;

  return (
    <div className={styles.outcomes}>
      {outcomes.title ? (
        <h3 className={styles.outcomesTitle}>{outcomes.title}</h3>
      ) : null}

      {hasItems(outcomes.items) ? (
        <ul className={styles.outcomesList}>
          {outcomes.items.map((item) => (
            <li key={item} className={styles.outcomeItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
