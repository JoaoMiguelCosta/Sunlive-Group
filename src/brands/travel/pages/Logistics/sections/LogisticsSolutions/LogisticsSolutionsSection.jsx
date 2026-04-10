import styles from "./LogisticsSolutionsSection.module.css";

import LogisticsActionPanel from "./LogisticsActionPanel.jsx";
import LogisticsOperationalHero from "./LogisticsOperationalHero.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

export default function LogisticsSolutionsSection({
  section = null,
  icons = {},
}) {
  if (!section) return null;

  const sectionId = section?.id ?? "logistica";
  const sectionLabel =
    section?.ui?.sectionAriaLabel ?? "Soluções Integradas de Logística";

  const operationalHero = section?.operationalHero ?? {};
  const servicesIntro = section?.servicesIntro ?? null;
  const services = Array.isArray(section?.services) ? section.services : [];
  const actionPanel = section?.actionPanel ?? null;
  const cta = section?.cta ?? null;

  const hasHero = Boolean(
    operationalHero?.eyebrow ||
      operationalHero?.title ||
      operationalHero?.lead ||
      operationalHero?.supportingText ||
      operationalHero?.statusBadge ||
      (Array.isArray(operationalHero?.metrics) &&
        operationalHero.metrics.length > 0) ||
      (Array.isArray(operationalHero?.trustChips) &&
        operationalHero.trustChips.length > 0) ||
      (Array.isArray(operationalHero?.assurances) &&
        operationalHero.assurances.length > 0),
  );

  const hasServices = services.length > 0;
  const hasActionPanel = Boolean(
    actionPanel?.eyebrow ||
      actionPanel?.title ||
      actionPanel?.description ||
      actionPanel?.lead ||
      actionPanel?.supportingText ||
      (Array.isArray(actionPanel?.proofPoints) &&
        actionPanel.proofPoints.length > 0) ||
      (Array.isArray(actionPanel?.trustPoints) &&
        actionPanel.trustPoints.length > 0) ||
      cta?.href,
  );

  if (!hasHero && !hasServices && !hasActionPanel) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="logistics-solutions"
      aria-label={sectionLabel}
    >
      <div className={styles.sectionFrame}>
        <div className={styles.inner}>
          {hasHero ? <LogisticsOperationalHero hero={operationalHero} /> : null}

          {hasServices ? (
            <ServiceOfferingsGrid
              services={services}
              intro={servicesIntro}
              icons={icons}
              ui={section?.ui}
              allowMultiple={false}
            />
          ) : null}

          {hasActionPanel ? (
            <LogisticsActionPanel panel={actionPanel} cta={cta} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
