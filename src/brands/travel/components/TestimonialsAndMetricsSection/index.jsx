import styles from "./TestimonialsAndMetricsSection.module.css";

import TestimonialsHeadline from "./TestimonialsHeadline.jsx";
import TestimonialsGrid from "./TestimonialsGrid.jsx";
import KeyMetricsBar from "./KeyMetricsBar.jsx";

/**
 * TestimonialsAndMetricsSection
 * - Wrapper da secção com espaçamentos consistentes (Prestige Noir + Liquid Gold)
 * - Ordem: Headline → Grid → KeyMetricsBar
 * - #testemunhos é tratado dentro do TestimonialsHeadline (via HeadlineBlock)
 */
export default function TestimonialsAndMetricsSection() {
  return (
    <section id = "testemunhos" className={styles.section} aria-label="Testemunhos e Métricas">
      <div className={styles.inner}>
        {/* Headline alinhada à mesma largura do banner/hotéis */}
        <div className={styles.headerRow}>
          <TestimonialsHeadline />
        </div>

        {/* Grelha de testemunhos */}
        <div className={styles.gridBlock}>
          <TestimonialsGrid />
        </div>

        {/* Barra de métricas/chips */}
        <div className={styles.metricsBlock}>
          <KeyMetricsBar />
        </div>
      </div>
    </section>
  );
}
