import testimonialsPage from "../../../../config/pages/testimonials.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
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

  const titleId = `${sectionId}-title`;
  // Quando existe headline.title, a section passa a ser identificada pelo
  // heading real (aria-labelledby) em vez de repetir a instrução do
  // carrossel (aria-label) — evita dois landmarks aninhados com o mesmo
  // nome acessível. Sem título, mantém-se o aria-label como recurso.
  const hasTitleHeading = Boolean(headline?.title);

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={hasTitleHeading ? titleId : undefined}
      aria-label={hasTitleHeading ? undefined : sectionLabel}
      data-section="testimonials-and-metrics"
    >
      <div className={styles.inner}>
        <ScrollReveal>
          <TravelTrustPanel
            titleAs="h1"
            titleId={hasTitleHeading ? titleId : undefined}
            eyebrow={headline?.eyebrow}
            title={headline?.title}
            lead={headline?.lead}
            description={headline?.description}
            stats={headline?.stats}
            statsAriaLabel={headline?.ui?.statsAriaLabel}
          />
        </ScrollReveal>

        <div className={styles.gridBlock}>
          <ScrollReveal>
            <TestimonialsCarousel
              spotlight={spotlight}
              testimonials={testimonials}
              icons={icons}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
