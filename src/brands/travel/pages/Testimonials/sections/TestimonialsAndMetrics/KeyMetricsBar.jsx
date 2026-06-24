import { useId } from "react";

import styles from "./KeyMetricsBar.module.css";

function MetricItem({ value, label, ariaLabel }) {
  if (!value || !label) return null;

  return (
    <div className={styles.item} role="listitem">
      <div className={styles.valueWrap} aria-label={ariaLabel || label}>
        <span className={styles.value}>{value}</span>
      </div>

      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function KeyMetricsBar({ metrics = [] }) {
  const metricsHeadingId = useId();

  if (!Array.isArray(metrics) || metrics.length === 0) return null;

  const validMetrics = metrics.filter(
    (metric) => metric?.value && metric?.label,
  );

  if (validMetrics.length === 0) return null;

  return (
    <div className={styles.root} aria-labelledby={metricsHeadingId}>
      <h2 id={metricsHeadingId} className={styles.visuallyHidden}>
        Indicadores de desempenho
      </h2>

      <div className={styles.bar} role="list">
        {validMetrics.map((metric, index) => (
          <MetricItem
            key={metric.key || `${metric.label}-${index}`}
            value={metric.value}
            label={metric.label}
            ariaLabel={metric.ariaLabel}
          />
        ))}
      </div>
    </div>
  );
}
