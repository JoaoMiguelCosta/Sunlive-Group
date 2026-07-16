import partners from "../../../../config/pages/partners.js";

import PartnerHotelsHero from "./PartnerHotelsHero.jsx";
import TravelCollectionSection from "../../../../shared/ui/TravelCollectionSection/TravelCollectionSection.jsx";

import styles from "./PartnerHotelsSection.module.css";

export default function PartnerHotelsSection() {
  const section = partners.sections.partnerHotels;

  if (!section) return null;

  const sectionId = section?.id ?? "parceiros-hoteis";
  const sectionLabel =
    section?.collection?.ariaLabel ?? "Explorar hotéis parceiros";

  const hero = section?.showcaseHero ?? {};
  const collection = section?.collection ?? {};
  const hotels = Array.isArray(section?.hotels) ? section.hotels : [];

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="partner-hotels"
      aria-label={sectionLabel}
    >
      <PartnerHotelsHero hero={hero} />

      <div className={styles.inner}>
        <TravelCollectionSection
          eyebrow={collection?.eyebrow}
          title={collection?.title}
          description={collection?.description}
          items={hotels}
          sectionKey="partner-hotels"
        />
      </div>
    </section>
  );
}
