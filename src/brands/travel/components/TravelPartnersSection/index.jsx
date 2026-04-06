import styles from "./TravelPartnersSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";
import TravelCTABox from "../../shared/ui/TravelCTABox/TravelCTABox.jsx";

import TravelPartnersCardsGrid from "./TravelPartnersCardsGrid.jsx";

export default function TravelPartnersSection() {
  const cfg = travelBrand?.sections?.travelPartners ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "parceiros-viagens";
  const sectionLabel =
    cfg?.browser?.ariaLabel ?? "Explorar parceiros de viagem";

  const headline = cfg?.headline ?? {};
  const contactPanel = cfg?.contactPanel ?? null;
  const cta = cfg?.cta ?? null;

  const pillsAriaLabel = headline?.ui?.pillsAriaLabel ?? "Pontos-chave";
  const statsAriaLabel = headline?.ui?.statsAriaLabel ?? "Destaques da secção";

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="travel-partners"
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

    

        <TravelPartnersCardsGrid />

        <TravelCTABox cta={cta} panel={contactPanel} />
      </div>
    </section>
  );
}
