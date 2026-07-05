import { useId } from "react";

import styles from "./TestimonialsIndicators.module.css";

function IndicatorItem({ value, label }) {
  if (!value || !label) return null;

  return (
    <div className={styles.item} role="listitem">
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function TestimonialsIndicators({ indicators = [] }) {
  const headingId = useId();

  const validIndicators = Array.isArray(indicators)
    ? indicators.filter((indicator) => indicator?.value && indicator?.label)
    : [];

  if (validIndicators.length === 0) return null;

  return (
    <div className={styles.root} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.visuallyHidden}>
        Indicadores
      </h2>

      <div className={styles.bar} role="list">
        {validIndicators.map((indicator, index) => (
          <IndicatorItem
            key={indicator.key ?? `${indicator.label}-${index}`}
            value={indicator.value}
            label={indicator.label}
          />
        ))}
      </div>
    </div>
  );
}
