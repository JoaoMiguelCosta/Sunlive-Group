import styles from "./TravelPartnersSection.module.css";

import travelBrand from "../../config/index.js";
import TravelPartnersHero from "./TravelPartnersHero.jsx";
import TravelPartnersNetworkPanel from "./TravelPartnersNetworkPanel.jsx";
import TravelPartnersActionPanel from "./TravelPartnersActionPanel.jsx";

export default function TravelPartnersSection() {
  const cfg = travelBrand?.sections?.travelPartners ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "parceiros-viagens";
  const sectionLabel =
    cfg?.network?.ariaLabel ?? "Explorar parceiros de viagem";

  const hero = cfg?.showcaseHero ?? {};
  const network = cfg?.network ?? {};
  const partners = Array.isArray(cfg?.partners) ? cfg.partners : [];
  const actionPanel = cfg?.actionPanel ?? null;
  const cta = cfg?.cta ?? null;

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

        <TravelPartnersActionPanel panel={actionPanel} cta={cta} />
      </div>
    </section>
  );
}
