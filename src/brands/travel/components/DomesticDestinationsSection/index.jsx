import styles from "./DomesticDestinationsSection.module.css";

import travelBrand from "../../config/index.js";
import DomesticEditorialHero from "./DomesticEditorialHero.jsx";
import DomesticDestinationsShowcase from "./DomesticDestinationsShowcase.jsx";

export default function DomesticDestinationsSection() {
  const cfg = travelBrand?.sections?.domesticDestinations ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "destinos-nacionais";
  const sectionLabel =
    cfg?.showcase?.ariaLabel ?? "Explorar destinos nacionais";

  const hero = cfg?.showcaseHero ?? {};
  const showcase = cfg?.showcase ?? {};
  const destinations = Array.isArray(cfg?.destinations) ? cfg.destinations : [];

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="domestic-destinations"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <DomesticEditorialHero hero={hero} />

        <DomesticDestinationsShowcase
          showcase={showcase}
          destinations={destinations}
        />
      </div>
    </section>
  );
}
