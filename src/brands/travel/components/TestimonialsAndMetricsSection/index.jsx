// src/brands/travel/components/TestimonialsAndMetricsSection/index.jsx
import styles from "./TestimonialsAndMetricsSection.module.css";

import TestimonialsHeadline from "./TestimonialsHeadline.jsx";
import TestimonialsGrid from "./TestimonialsGrid.jsx";
import KeyMetricsBar from "./KeyMetricsBar.jsx";

/**
 * TestimonialsAndMetricsSection
 * - Wrapper da secção com espaçamentos consistentes (Prestige Noir + Liquid Gold)
 * - Ordem: Headline → Grid → KeyMetricsBar
 * - O anchor #testemunhos é definido no TestimonialsHeadline; aqui é apenas contentor.
 */
export default function TestimonialsAndMetricsSection() {
  return (
    <section className={styles.section} aria-label="Testemunhos e Métricas">
      <div className={styles.inner}>
        <TestimonialsHeadline />
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
