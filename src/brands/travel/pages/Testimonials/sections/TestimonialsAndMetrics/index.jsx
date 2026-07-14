import testimonialsPage from "../../../../config/pages/testimonials.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import TravelIntroPanel from "../../../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";

import TestimonialsGrid from "./TestimonialsGrid.jsx";

import styles from "./TestimonialsAndMetricsSection.module.css";

export default function TestimonialsAndMetricsSection() {
  const section = testimonialsPage.sections.testimonialsAndMetrics;

  if (!section) return null;

  const sectionId = section?.id ?? "testemunhos";
  const sectionLabel =
    section?.spotlight?.regionLabel ?? "Testemunhos e métricas";

  const headline = section?.headline ?? {};
  const spotlight = section?.spotlight ?? {};
  const testimonials = Array.isArray(section?.testimonials)
    ? section.testimonials
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
        <TravelIntroPanel
          as="header"
          titleAs="h1"
          eyebrow={headline?.eyebrow}
          title={headline?.title}
          lead={headline?.lead}
          supportingText={headline?.description}
          stats={headline?.stats}
          statsAriaLabel={headline?.ui?.statsAriaLabel ?? "Destaques da secção"}
          tone="lightForest"
        />

        <div className={styles.gridBlock}>
          <TestimonialsGrid
            spotlight={spotlight}
            testimonials={testimonials}
            icons={icons}
          />
        </div>
      </div>
    </section>
  );
}
