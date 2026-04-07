import styles from "./InternationalDestinationsSection.module.css";

import travelBrand from "../../config/index.js";
import InternationalImmersiveHero from "./InternationalImmersiveHero.jsx";
import InternationalDestinationsShowcase from "./InternationalDestinationsShowcase.jsx";
import InternationalExperiencePlanner from "./InternationalExperiencePlanner.jsx";

export default function InternationalDestinationsSection() {
  const cfg = travelBrand?.sections?.internationalDestinations ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "destinos-internacionais";
  const sectionLabel =
    cfg?.showcase?.ariaLabel ?? "Explorar destinos internacionais";

  const immersiveHero = cfg?.immersiveHero ?? {};
  const showcase = cfg?.showcase ?? {};
  const destinations = Array.isArray(cfg?.destinations) ? cfg.destinations : [];
  const actionPanel = cfg?.actionPanel ?? null;
  const cta = cfg?.cta ?? null;
  const flags = travelBrand?.flags ?? {};

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="international-destinations"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <InternationalImmersiveHero hero={immersiveHero} />

        <InternationalDestinationsShowcase
          showcase={showcase}
          destinations={destinations}
          flags={flags}
        />

        <InternationalExperiencePlanner panel={actionPanel} cta={cta} />
      </div>
    </section>
  );
}
