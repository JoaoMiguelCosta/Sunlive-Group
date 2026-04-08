import styles from "./TestimonialsAndMetricsSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";

import TestimonialsGrid from "./TestimonialsGrid.jsx";
import KeyMetricsBar from "./KeyMetricsBar.jsx";

export default function TestimonialsAndMetricsSection() {
  const section = travelBrand?.sections?.testimonialsAndMetrics ?? null;
  if (!section) return null;

  const sectionId = section?.id ?? "testemunhos";
  const sectionLabel =
    section?.spotlight?.regionLabel ?? "Testemunhos e métricas";

  const headline = section?.headline ?? {};

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionLabel}
      data-section="testimonials-and-metrics"
    >
      <div className={styles.inner}>
        <TravelIntroPanel
          as="header"
          eyebrow={headline?.eyebrow}
          title={headline?.title}
          lead={headline?.lead}
          supportingText={headline?.description}
          pills={headline?.featuredPills}
          stats={headline?.stats}
          pillsAriaLabel={headline?.ui?.pillsAriaLabel ?? "Pontos-chave"}
          statsAriaLabel={headline?.ui?.statsAriaLabel ?? "Destaques da secção"}
        />

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
