import travelPartners from "../../../../config/sections/partners/travelPartners.js";

import TravelPartnersHero from "./TravelPartnersHero.jsx";
import TravelPartnersNetworkPanel from "./TravelPartnersNetworkPanel.jsx";

import styles from "./TravelPartnersSection.module.css";

export default function TravelPartnersSection() {
  const section = travelPartners;

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
      <div className={styles.inner}>
        <TravelPartnersHero hero={hero} />

        <TravelPartnersNetworkPanel network={network} partners={partners} />
      </div>
    </section>
  );
}
