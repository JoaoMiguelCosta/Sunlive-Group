import styles from "./LogisticsSolutionsSection.module.css";

import travelBrand from "../../config/index.js";
import TravelIntroPanel from "../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";
import TravelCTABox from "../../shared/ui/TravelCTABox/TravelCTABox.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

export default function LogisticsSolutionsSection() {
  const cfg = travelBrand?.sections?.logisticsSolutions ?? null;
  if (!cfg) return null;

  const sectionId = cfg.id ?? "logistica";
  const sectionLabel =
    cfg?.ui?.sectionAriaLabel ?? "Soluções Integradas de Logística";

  const headline = cfg?.headline ?? {};
  const services = Array.isArray(cfg?.services) ? cfg.services : [];
  const icons = travelBrand?.icons ?? {};
  const cta = cfg?.cta ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="logistics-solutions"
      aria-label={sectionLabel}
    >
      <div className={styles.inner}>
        <TravelIntroPanel
          eyebrow={headline.eyebrow}
          title={headline.title}
          lead={headline.lead}
          supportingText={headline.supportingText}
          pills={headline.pills}
          stats={headline.stats}
          pillsAriaLabel="Pontos-chave"
          statsAriaLabel="Destaques operacionais"
          as="header"
        />

        <ServiceOfferingsGrid
          services={services}
          icons={icons}
          ui={cfg?.ui}
          allowMultiple={false}
        />

        <TravelCTABox cta={cta} />
      </div>
    </section>
  );
}
