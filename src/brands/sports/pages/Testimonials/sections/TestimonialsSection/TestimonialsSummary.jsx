import { isValidText } from "./testimonialsSection.utils.js";

import styles from "./TestimonialsSummary.module.css";

export default function TestimonialsSummary({ items }) {
  if (!items?.length) return null;

  return (
    <dl className={styles.summaryGrid}>
      {items.map((item, index) => (
        <div
          key={item?.key || `testimonial-summary-${index + 1}`}
          className={styles.summaryCard}
        >
          {isValidText(item?.value) && (
            <dt className={styles.summaryValue}>{item.value}</dt>
          )}

          {isValidText(item?.label) && (
            <dd className={styles.summaryLabel}>{item.label}</dd>
          )}
        </div>
      ))}
    </dl>
  );
}
