import styles from "./LogisticsSolutionsSection.module.css";

import LogisticsActionPanel from "./LogisticsActionPanel.jsx";
import LogisticsOperationalHero from "./LogisticsOperationalHero.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

function hasOperationalHeroContent(hero = {}) {
  return Boolean(
    hero?.eyebrow ||
      hero?.title ||
      hero?.lead ||
      hero?.supportingText ||
      hero?.statusBadge ||
      (Array.isArray(hero?.metrics) && hero.metrics.length > 0) ||
      (Array.isArray(hero?.trustChips) && hero.trustChips.length > 0) ||
      (Array.isArray(hero?.assurances) && hero.assurances.length > 0),
  );
}

function hasActionPanelContent(panel = {}, cta = null) {
  return Boolean(
    panel?.eyebrow ||
      panel?.title ||
      panel?.description ||
      panel?.lead ||
      panel?.supportingText ||
      (Array.isArray(panel?.proofPoints) && panel.proofPoints.length > 0) ||
      (Array.isArray(panel?.trustPoints) && panel.trustPoints.length > 0) ||
      cta?.href,
  );
}

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

  const hasHero = hasOperationalHeroContent(operationalHero);
  const hasServices = services.length > 0;
  const hasActionPanel = hasActionPanelContent(actionPanel, cta);

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
