import styles from "./LogisticsSolutionsSection.module.css";

import travelBrand from "../../config/index.js";
import LogisticsOperationalHero from "./LogisticsOperationalHero.jsx";
import LogisticsActionPanel from "./LogisticsActionPanel.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

export default function LogisticsSolutionsSection() {
  const cfg = travelBrand?.sections?.logisticsSolutions ?? null;
  if (!cfg) return null;

  const sectionId = cfg?.id ?? "logistica";
  const sectionLabel =
    cfg?.ui?.sectionAriaLabel ?? "Soluções Integradas de Logística";

  const operationalHero = cfg?.operationalHero ?? {};
  const servicesIntro = cfg?.servicesIntro ?? null;
  const services = Array.isArray(cfg?.services) ? cfg.services : [];
  const icons = travelBrand?.icons ?? {};
  const actionPanel = cfg?.actionPanel ?? null;
  const cta = cfg?.cta ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="logistics-solutions"
      aria-label={sectionLabel}
    >
      <div className={styles.sectionFrame}>
        <div className={styles.inner}>
          <LogisticsOperationalHero hero={operationalHero} />

          <ServiceOfferingsGrid
            services={services}
            intro={servicesIntro}
            icons={icons}
            ui={cfg?.ui}
            allowMultiple={false}
          />

          <LogisticsActionPanel panel={actionPanel} cta={cta} />
        </div>
      </div>
    </section>
  );
}
