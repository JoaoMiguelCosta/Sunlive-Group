import styles from "./SummaryGrid.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

function getValidSummaryItems(items) {
  return getValidArray(items).filter(
    (item) => isValidText(item?.value) || isValidText(item?.label),
  );
}

function getSummaryItemKey(item, index) {
  if (isValidText(item?.key)) return item.key;

  const value = isValidText(item?.value) ? item.value : "value";
  const label = isValidText(item?.label) ? item.label : "label";

  return `${value}-${label}-${index}`;
}

export default function SummaryGrid({ items, ariaLabel }) {
  const validItems = getValidSummaryItems(items);

  if (validItems.length === 0) return null;

  return (
    <ul
      className={styles.summaryGrid}
      aria-label={isValidText(ariaLabel) ? ariaLabel : undefined}
      data-items-count={validItems.length}
    >
      {validItems.map((item, index) => (
        <li key={getSummaryItemKey(item, index)} className={styles.summaryCard}>
          {isValidText(item.value) ? (
            <strong className={styles.summaryValue}>{item.value}</strong>
          ) : null}

          {isValidText(item.label) ? (
            <span className={styles.summaryLabel}>{item.label}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
