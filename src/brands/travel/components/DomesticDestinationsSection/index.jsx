import styles from "./DomesticDestinationsSection.module.css";

import travelBrand from "../../config/index.js";
import DomesticEditorialHero from "./DomesticEditorialHero.jsx";
import DomesticDestinationsShowcase from "./DomesticDestinationsShowcase.jsx";
import DomesticJourneyPlanner from "./DomesticJourneyPlanner.jsx";

export default function DomesticDestinationsSection() {
  const cfg = travelBrand?.sections?.domesticDestinations ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "destinos-nacionais";
  const sectionLabel =
    cfg?.showcase?.ariaLabel ?? "Explorar destinos nacionais";

  const editorialHero = cfg?.editorialHero ?? {};
  const showcase = cfg?.showcase ?? {};
  const destinations = Array.isArray(cfg?.destinations) ? cfg.destinations : [];
  const planningPanel = cfg?.planningPanel ?? null;
  const cta = cfg?.cta ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="domestic-destinations"
      aria-label={sectionLabel}
    >
      <div className={styles.sectionFrame}>
        <div className={styles.inner}>
          <DomesticEditorialHero hero={editorialHero} />

          <DomesticDestinationsShowcase
            showcase={showcase}
            destinations={destinations}
          />

          <DomesticJourneyPlanner panel={planningPanel} cta={cta} />
        </div>
      </div>
    </section>
  );
}
