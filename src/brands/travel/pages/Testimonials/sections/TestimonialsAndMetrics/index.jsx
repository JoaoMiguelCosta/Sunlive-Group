import testimonialsAndMetrics from "../../../../config/sections/testimonials/testimonialsAndMetrics.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import TravelIntroPanel from "../../../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";

import TestimonialsGrid from "./TestimonialsGrid.jsx";
import KeyMetricsBar from "./KeyMetricsBar.jsx";

import styles from "./TestimonialsAndMetricsSection.module.css";

export default function TestimonialsAndMetricsSection() {
  const section = testimonialsAndMetrics;

  if (!section) return null;

  const sectionId = section?.id ?? "testemunhos";
  const sectionLabel =
    section?.spotlight?.regionLabel ?? "Testemunhos e métricas";

  const headline = section?.headline ?? {};
  const spotlight = section?.spotlight ?? {};
  const testimonials = Array.isArray(section?.testimonials)
    ? section.testimonials
    : [];
  const metrics = Array.isArray(section?.metrics) ? section.metrics : [];
  const icons = ICONS;

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
          <TestimonialsGrid
            spotlight={spotlight}
            testimonials={testimonials}
            icons={icons}
          />
        </div>

        <div className={styles.metricsBlock}>
          <KeyMetricsBar metrics={metrics} />
        </div>
      </div>
    </section>
  );
}
