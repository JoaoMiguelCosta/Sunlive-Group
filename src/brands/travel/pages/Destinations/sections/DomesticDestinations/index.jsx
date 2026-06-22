import domesticDestinations from "../../../../config/sections/destinations/domesticDestinations.js";

import styles from "./DomesticDestinationsSection.module.css";
import DomesticEditorialHero from "./DomesticEditorialHero.jsx";
import DomesticDestinationsShowcase from "./DomesticDestinationsShowcase.jsx";

export default function DomesticDestinationsSection() {
  const section = domesticDestinations;

  if (!section) return null;

  const sectionId = section?.id ?? "destinos-nacionais";
  const sectionLabel =
    section?.showcase?.ariaLabel ?? "Explorar destinos nacionais";

  const hero = section?.showcaseHero ?? {};
  const showcase = section?.showcase ?? {};
  const destinations = Array.isArray(section?.destinations)
    ? section.destinations
    : [];

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
