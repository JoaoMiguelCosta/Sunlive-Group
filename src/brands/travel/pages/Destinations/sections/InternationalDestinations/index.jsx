import travelBrand from "../../../../config/index.js";

import styles from "./InternationalDestinationsSection.module.css";
import InternationalEditorialHero from "./InternationalEditorialHero.jsx";
import InternationalDestinationsShowcase from "./InternationalDestinationsShowcase.jsx";

export default function InternationalDestinationsSection() {
  const section =
    travelBrand?.pages?.destinations?.sections?.internationalDestinations ??
    null;

  if (!section) return null;

  const sectionId = section?.id ?? "destinos-internacionais";
  const sectionLabel =
    section?.showcase?.ariaLabel ?? "Explorar destinos internacionais";

  const hero = section?.showcaseHero ?? {};
  const showcase = section?.showcase ?? {};
  const destinations = Array.isArray(section?.destinations)
    ? section.destinations
    : [];
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
