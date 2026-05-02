import { isValidText } from "./logisticsServicesSection.utils.js";

import styles from "./LogisticsHighlights.module.css";

export default function LogisticsHighlights({ sectionId, items }) {
  if (!items?.length) return null;

  return (
    <div className={styles.highlightsGrid}>
      {items.map((item, index) => (
        <article
          key={`${sectionId}-highlight-${index}`}
          className={styles.highlightCard}
        >
          {isValidText(item.value) ? (
            <strong className={styles.highlightValue}>{item.value}</strong>
          ) : null}

          {isValidText(item.label) ? (
            <span className={styles.highlightLabel}>{item.label}</span>
          ) : null}
        </article>
      ))}
    </div>
  );
}
