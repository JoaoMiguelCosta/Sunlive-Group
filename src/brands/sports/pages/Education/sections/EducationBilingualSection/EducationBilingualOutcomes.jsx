import styles from "./EducationBilingualOutcomes.module.css";

import { getTextItemKey, hasItems } from "./educationBilingualSection.utils.js";

export default function EducationBilingualOutcomes({ outcomes }) {
  if (!outcomes?.title && !hasItems(outcomes?.items)) return null;

  return (
    <div className={styles.outcomes}>
      {outcomes.title ? (
        <h3 className={styles.outcomesTitle}>{outcomes.title}</h3>
      ) : null}

      {hasItems(outcomes?.items) ? (
        <ul className={styles.outcomesList}>
          {outcomes.items.map((item, index) => (
            <li
              key={getTextItemKey(item, index, "education-bilingual-outcome")}
              className={styles.outcomeItem}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
