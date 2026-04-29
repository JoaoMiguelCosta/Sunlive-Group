import styles from "./SummaryGrid.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

export default function SummaryGrid({ items }) {
  const validItems = getValidArray(items).filter(
    (item) => isValidText(item?.value) || isValidText(item?.label),
  );

  if (validItems.length === 0) return null;

  return (
    <ul className={styles.summaryGrid}>
      {validItems.map((item, index) => (
        <li
          key={item.key || `${item.value}-${item.label}-${index}`}
          className={styles.summaryCard}
        >
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
