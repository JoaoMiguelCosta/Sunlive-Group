import styles from "./InternationalDestinationsSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";
import TravelCTABox from "../../shared/ui/TravelCTABox/TravelCTABox.jsx";
import DestinationsInternational from "./DestinationsInternational.jsx";

export default function InternationalDestinationsSection() {
  const cfg = travelBrand?.sections?.internationalDestinations ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "destinos-internacionais";
  const sectionLabel =
    cfg?.grid?.ariaLabel ?? "Explorar destinos internacionais";

  const headline = cfg?.headline ?? {};
  const grid = cfg?.grid ?? {};
  const destinations = Array.isArray(cfg?.destinations) ? cfg.destinations : [];
  const contactPanel = cfg?.contactPanel ?? null;
  const cta = cfg?.cta ?? null;

  const pillsAriaLabel = headline?.ui?.pillsAriaLabel ?? "Pontos-chave";
  const statsAriaLabel = headline?.ui?.statsAriaLabel ?? "Destaques da secção";

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="international-destinations"
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

        <DestinationsInternational grid={grid} destinations={destinations} />

        <TravelCTABox cta={cta} panel={contactPanel} />
      </div>
    </section>
  );
}
