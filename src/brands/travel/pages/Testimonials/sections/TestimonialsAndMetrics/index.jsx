import testimonialsPage from "../../../../config/pages/testimonials.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import TestimonialsGrid from "./TestimonialsGrid.jsx";
import TestimonialsIndicators from "./TestimonialsIndicators.jsx";

import styles from "./TestimonialsAndMetricsSection.module.css";

export default function TestimonialsAndMetricsSection() {
  const section = testimonialsPage.sections.testimonialsAndMetrics;

  if (!section) return null;

  const sectionId = section?.id ?? "testemunhos";
  const sectionLabel =
    section?.spotlight?.regionLabel ?? "Testemunhos e indicadores";

  const spotlight = section?.spotlight ?? {};
  const testimonials = Array.isArray(section?.testimonials)
    ? section.testimonials
    : [];
  const indicators = Array.isArray(section?.indicators)
    ? section.indicators
    : [];
  const icons = ICONS;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionLabel}
      data-section="testimonials-and-metrics"
    >
      <div className={styles.inner}>
        <div className={styles.gridBlock}>
          <TestimonialsGrid
            spotlight={spotlight}
            testimonials={testimonials}
            icons={icons}
          />
        </div>

        <div className={styles.indicatorsBlock}>
          <TestimonialsIndicators indicators={indicators} />
        </div>
      </div>
    </section>
  );
}
