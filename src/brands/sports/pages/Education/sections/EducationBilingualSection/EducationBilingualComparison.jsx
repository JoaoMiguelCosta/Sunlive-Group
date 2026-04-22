import styles from "./EducationBilingualComparison.module.css";
import EducationBilingualPanel from "./EducationBilingualPanel.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

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
        aria-label={
          comparison?.ariaLabel ||
          "Comparação entre sistema português e via de diploma duplo"
        }
        aria-labelledby={comparisonLabelId}
      >
        {items.map((item) => (
          <EducationBilingualPanel key={item.id || item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
