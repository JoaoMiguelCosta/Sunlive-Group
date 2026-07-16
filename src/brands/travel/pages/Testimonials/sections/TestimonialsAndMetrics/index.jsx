import testimonialsPage from "../../../../config/pages/testimonials.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import TravelTrustPanel from "../../../../shared/ui/TravelTrustPanel/TravelTrustPanel.jsx";

import TestimonialsCarousel from "./TestimonialsCarousel.jsx";

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
        <TravelTrustPanel
          titleAs="h1"
          eyebrow={headline?.eyebrow}
          title={headline?.title}
          lead={headline?.lead}
          description={headline?.description}
          stats={headline?.stats}
          statsAriaLabel={headline?.ui?.statsAriaLabel}
        />

        <div className={styles.gridBlock}>
          <TestimonialsCarousel
            spotlight={spotlight}
            testimonials={testimonials}
            icons={icons}
          />
        </div>
      </div>
    </section>
  );
}
