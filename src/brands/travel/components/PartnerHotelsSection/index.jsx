import styles from "./PartnerHotelsSection.module.css";

import travelBrand from "../../config/index.js";
import PartnerHotelsCollectionHero from "./PartnerHotelsCollectionHero.jsx";
import PartnerHotelsCuratedCollection from "./PartnerHotelsCuratedCollection.jsx";
import PartnerHotelsPlanningPanel from "./PartnerHotelsPlanningPanel.jsx";

export default function PartnerHotelsSection() {
  const cfg = travelBrand?.sections?.partnerHotels ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "parceiros-hoteis";
  const sectionLabel =
    cfg?.collection?.ariaLabel ?? "Explorar hotéis parceiros";

  const collectionHero = cfg?.collectionHero ?? {};
  const collection = cfg?.collection ?? {};
  const hotels = Array.isArray(cfg?.hotels) ? cfg.hotels : [];
  const planningPanel = cfg?.planningPanel ?? null;
  const cta = cfg?.cta ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="partner-hotels"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <PartnerHotelsCollectionHero hero={collectionHero} />

        <PartnerHotelsCuratedCollection
          collection={collection}
          hotels={hotels}
        />

        <PartnerHotelsPlanningPanel panel={planningPanel} cta={cta} />
      </div>
    </section>
  );
}
