import logistics from "../../../../config/pages/logistics.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import LogisticsOperationalHero from "./LogisticsOperationalHero.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

import styles from "./LogisticsSolutionsSection.module.css";

export default function LogisticsSolutionsSection() {
  const section = logistics.sections.logisticsSolutions;

  if (!section) return null;

  const sectionId = section?.id ?? "logistica";
  const sectionLabel =
    section?.ui?.sectionAriaLabel ?? "Soluções Integradas de Logística";

  const operationalHero = section?.operationalHero ?? {};
  const servicesIntro = section?.servicesIntro ?? null;
  const services = Array.isArray(section?.services) ? section.services : [];
  const icons = ICONS;

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
          />
        </div>
      </div>
    </section>
  );
}
