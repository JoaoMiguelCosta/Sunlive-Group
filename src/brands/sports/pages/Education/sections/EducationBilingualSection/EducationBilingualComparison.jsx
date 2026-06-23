import styles from "./EducationBilingualComparison.module.css";

import EducationBilingualPanel from "./EducationBilingualPanel.jsx";

import { getTextItemKey, hasItems } from "./educationBilingualSection.utils.js";

export default function EducationBilingualComparison({
  comparison,
  items,
  comparisonLabelId,
}) {
  if (!hasItems(items)) return null;

  return (
    <div className={styles.comparisonWrap}>
      {comparison?.itemsLabel ? (
        <p id={comparisonLabelId} className={styles.comparisonLabel}>
          {comparison.itemsLabel}
        </p>
      ) : null}

      <div
        className={styles.comparison}
        aria-label={!comparisonLabelId ? comparison?.ariaLabel : undefined}
        aria-labelledby={comparisonLabelId || undefined}
      >
        {items.map((item, index) => (
          <EducationBilingualPanel
            key={getTextItemKey(item, index, "education-bilingual-panel")}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
