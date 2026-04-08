import styles from "./InternationalDestinationsSection.module.css";

import travelBrand from "../../config/index.js";
import InternationalEditorialHero from "./InternationalEditorialHero.jsx";
import InternationalDestinationsShowcase from "./InternationalDestinationsShowcase.jsx";

export default function InternationalDestinationsSection() {
  const cfg = travelBrand?.sections?.internationalDestinations ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "destinos-internacionais";
  const sectionLabel =
    cfg?.showcase?.ariaLabel ?? "Explorar destinos internacionais";

  const hero = cfg?.showcaseHero ?? {};
  const showcase = cfg?.showcase ?? {};
  const destinations = Array.isArray(cfg?.destinations) ? cfg.destinations : [];
  const flags = travelBrand?.flags ?? {};

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="international-destinations"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <InternationalEditorialHero hero={hero} />

        <InternationalDestinationsShowcase
          showcase={showcase}
          destinations={destinations}
          flags={flags}
        />
      </div>
    </section>
  );
}
