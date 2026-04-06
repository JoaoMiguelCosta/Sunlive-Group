import styles from "./TestimonialsAndMetricsSection.module.css";

import TestimonialsHeadline from "./TestimonialsHeadline.jsx";
import TestimonialsGrid from "./TestimonialsGrid.jsx";
import KeyMetricsBar from "./KeyMetricsBar.jsx";

export default function TestimonialsAndMetricsSection() {
  return (
    <section
      id="testemunhos"
      className={styles.section}
      aria-label="Testemunhos e Métricas"
    >
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <TestimonialsHeadline />
        </div>

        <div className={styles.gridBlock}>
          <TestimonialsGrid />
        </div>

        <div className={styles.metricsBlock}>
          <KeyMetricsBar />
        </div>
      </div>
    </section>
  );
}
