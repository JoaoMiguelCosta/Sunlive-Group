import travelBrand from "../../../../config/index.js";

import LogisticsOperationalHero from "./LogisticsOperationalHero.jsx";
import LogisticsActionPanel from "./LogisticsActionPanel.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

import styles from "./LogisticsSolutionsSection.module.css";

export default function LogisticsSolutionsSection() {
  const section =
    travelBrand?.pages?.logistics?.sections?.logisticsSolutions ?? null;

  if (!section) return null;

  const sectionId = section?.id ?? "logistica";
  const sectionLabel =
    section?.ui?.sectionAriaLabel ?? "Soluções Integradas de Logística";

  const operationalHero = section?.operationalHero ?? {};
  const servicesIntro = section?.servicesIntro ?? null;
  const services = Array.isArray(section?.services) ? section.services : [];
  const actionPanel = section?.actionPanel ?? null;
  const cta = section?.cta ?? null;
  const icons = travelBrand?.icons ?? {};

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
            ui={section?.ui}
            allowMultiple={false}
          />

          <LogisticsActionPanel panel={actionPanel} cta={cta} />
        </div>
      </div>
    </section>
  );
}
