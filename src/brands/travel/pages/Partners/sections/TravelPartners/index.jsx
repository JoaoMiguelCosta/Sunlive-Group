import partnersPage from "../../../../config/pages/partners.js";

import TravelPartnersHero from "./TravelPartnersHero.jsx";
import TravelPartnersGrid from "./TravelPartnersGrid.jsx";

import styles from "./TravelPartnersSection.module.css";

export default function TravelPartnersSection() {
  const section = partnersPage.sections.travelPartners;

  if (!section) return null;

  const sectionId = section?.id ?? "parceiros-viagens";
  const sectionLabel =
    section?.network?.ariaLabel ?? "Explorar parceiros de viagem";

  const hero = section?.showcaseHero ?? {};
  const network = section?.network ?? {};
  const partners = Array.isArray(section?.partners) ? section.partners : [];

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="travel-partners"
      aria-label={sectionLabel}
    >
      <TravelPartnersHero hero={hero} />

      <div className={styles.inner}>
        <TravelPartnersGrid network={network} partners={partners} />
      </div>
    </section>
  );
}
