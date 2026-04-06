import styles from "./DomesticDestinationsSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";
import TravelCTABox from "../../shared/ui/TravelCTABox/TravelCTABox.jsx";
import DestinationsBrowser from "./DestinationsBrowser.jsx";

export default function DomesticDestinationsSection() {
  const cfg = travelBrand?.sections?.domesticDestinations ?? null;
  if (!cfg) return null;

  const sectionId = cfg.id ?? "destinos-nacionais";
  const sectionLabel = cfg?.browser?.ariaLabel ?? "Explorar destinos nacionais";

  const headline = cfg?.headline ?? {};
  const browser = cfg?.browser ?? {};
  const destinations = Array.isArray(cfg?.destinations) ? cfg.destinations : [];
  const contactPanel = cfg?.contactPanel ?? null;
  const cta = cfg?.cta ?? null;

  const pillsAriaLabel = headline?.ui?.pillsAriaLabel ?? "Pontos-chave";
  const statsAriaLabel = headline?.ui?.statsAriaLabel ?? "Destaques da secção";

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="domestic-destinations"
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

        <DestinationsBrowser browser={browser} destinations={destinations} />

        <TravelCTABox cta={cta} panel={contactPanel} />
      </div>
    </section>
  );
}
