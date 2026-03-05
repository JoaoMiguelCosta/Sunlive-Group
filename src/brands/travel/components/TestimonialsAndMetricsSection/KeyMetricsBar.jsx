import styles from "./KeyMetricsBar.module.css";
import travelBrand from "../../config/registry/index.js";

/**
 * KeyMetricsBar — Barra de KPIs para a secção de Testemunhos
 * - Consome travelBrand.sections.testimonialsAndMetrics.metrics
 */
function MetricItem({ value, label, ariaLabel }) {
  return (
    <div className={styles.item} role="listitem">
      <div className={styles.valueWrap} aria-label={ariaLabel || label}>
        <span className={styles.value}>{value}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function KeyMetricsBar() {
  const metrics = travelBrand?.sections?.testimonialsAndMetrics?.metrics ?? [];
  if (!Array.isArray(metrics) || metrics.length === 0) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="metrics-heading"
      role="region"
    >
      <h2 id="metrics-heading" className={styles.visuallyHidden}>
        Indicadores de desempenho
      </h2>

      <div className={styles.bar} role="list">
        {metrics.map((m) => (
          <MetricItem
            key={m.key || m.label}
            value={m.value}
            label={m.label}
            ariaLabel={m.ariaLabel}
          />
        ))}
      </div>
    </section>
  );
}
