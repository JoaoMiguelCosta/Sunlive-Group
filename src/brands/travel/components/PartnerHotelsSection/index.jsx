import styles from "./PartnerHotelsSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";
import TravelCTABox from "../../shared/ui/TravelCTABox/TravelCTABox.jsx";
import PartnerHotelsCardsGrid from "./PartnerHotelsCardsGrid.jsx";

export default function PartnerHotelsSection() {
  const cfg = travelBrand?.sections?.partnerHotels ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "parceiros-hoteis";
  const sectionLabel = cfg?.browser?.ariaLabel ?? "Explorar hotéis parceiros";

  const headline = cfg?.headline ?? {};
  const contactPanel = cfg?.contactPanel ?? null;
  const cta = cfg?.cta ?? null;

  const pillsAriaLabel = headline?.ui?.pillsAriaLabel ?? "Pontos-chave";
  const statsAriaLabel = headline?.ui?.statsAriaLabel ?? "Destaques da secção";

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="partner-hotels"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <TravelIntroPanel
          eyebrow={headline.eyebrow}
          title={headline.title}
          lead={headline.lead}
          supportingText={headline.description}
          pills={headline.featuredPills}
          stats={headline.stats}
          pillsAriaLabel={pillsAriaLabel}
          statsAriaLabel={statsAriaLabel}
          as="header"
        />

        <PartnerHotelsCardsGrid />

        <TravelCTABox cta={cta} panel={contactPanel} />
      </div>
    </section>
  );
}
