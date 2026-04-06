import styles from "./TestimonialsAndMetricsSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";
import TravelCTABox from "../../shared/ui/TravelCTABox/TravelCTABox.jsx";
import TestimonialsGrid from "./TestimonialsGrid.jsx";
import KeyMetricsBar from "./KeyMetricsBar.jsx";

export default function TestimonialsAndMetricsSection() {
  const cfg = travelBrand?.sections?.testimonialsAndMetrics ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "testemunhos";
  const sectionLabel = cfg?.spotlight?.regionLabel ?? "Testemunhos e métricas";

  const headline = cfg?.headline ?? {};
  const contactPanel = cfg?.contactPanel ?? null;
  const cta = cfg?.cta ?? null;

  const pillsAriaLabel = headline?.ui?.pillsAriaLabel ?? "Pontos-chave";
  const statsAriaLabel = headline?.ui?.statsAriaLabel ?? "Destaques da secção";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionLabel}
      data-section="testimonials-and-metrics"
    >
      <div className={styles.inner}>
        <TravelIntroPanel
          eyebrow={headline.eyebrow}
          title={headline.title}
          lead={headline.lead}
          supportingText={headline.description}
          pills={headline.featuredPills}
          stats={headline.stats}
          pillsAriaLabel={pillsAriaLabel}
          statsAriaLabel={statsAriaLabel}
          as="header"
        />

        <div className={styles.gridBlock}>
          <TestimonialsGrid />
        </div>

        <div className={styles.metricsBlock}>
          <KeyMetricsBar />
        </div>

        <TravelCTABox cta={cta} panel={contactPanel} />
      </div>
    </section>
  );
}
