import travelBrand from "../../../../config/index.js";

import styles from "./InternationalDestinationsSection.module.css";
import InternationalEditorialHero from "./InternationalEditorialHero.jsx";
import InternationalDestinationsShowcase from "./InternationalDestinationsShowcase.jsx";
import InternationalExperiencePlanner from "./InternationalExperiencePlanner.jsx";

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
  const actionPanel = section?.actionPanel ?? null;
  const cta = section?.cta ?? null;
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

        <InternationalExperiencePlanner panel={actionPanel} cta={cta} />
      </div>
    </section>
  );
}
