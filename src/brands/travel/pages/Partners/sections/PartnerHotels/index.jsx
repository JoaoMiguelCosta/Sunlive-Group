import partnerHotels from "../../../../config/sections/partners/partnerHotels.js";

import PartnerHotelsHero from "./PartnerHotelsHero.jsx";
import PartnerHotelsCuratedCollection from "./PartnerHotelsCuratedCollection.jsx";
import PartnerHotelsPlanningPanel from "./PartnerHotelsPlanningPanel.jsx";

import styles from "./PartnerHotelsSection.module.css";

export default function PartnerHotelsSection() {
  const section = partnerHotels;

  if (!section) return null;

  const sectionId = section?.id ?? "parceiros-hoteis";
  const sectionLabel =
    section?.collection?.ariaLabel ?? "Explorar hotéis parceiros";

  const hero = section?.showcaseHero ?? {};
  const collection = section?.collection ?? {};
  const hotels = Array.isArray(section?.hotels) ? section.hotels : [];
  const planningPanel = section?.planningPanel ?? null;
  const cta = section?.cta ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="partner-hotels"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <PartnerHotelsHero hero={hero} />

        <PartnerHotelsCuratedCollection
          collection={collection}
          hotels={hotels}
        />

        <PartnerHotelsPlanningPanel panel={planningPanel} cta={cta} />
      </div>
    </section>
  );
}
