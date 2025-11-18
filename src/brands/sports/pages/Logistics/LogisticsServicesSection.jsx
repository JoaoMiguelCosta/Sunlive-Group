// src/brands/sports/pages/TrainingCamps/LogisticsServicesSection.jsx
import styles from "./LogisticsServicesSection.module.css";

import ServiceFeaturePanel from "../../../../shared/components/Sports/ServiceFeaturePanel/ServiceFeaturePanel.jsx";
import useAccordion from "../../../../shared/hooks/useAccordion.js";

/**
 * Secção de Serviços Logísticos (cards em acordeão)
 *
 * Uso:
 *   <LogisticsServicesSection data={data} />
 * onde data é o objeto "logistics" do configSports.
 */
export default function LogisticsServicesSection({ data }) {
  if (!data) return null;

  const { servicesIntro, servicesPanels } = data;
  if (!servicesPanels?.items?.length) return null;

  const panels = servicesPanels.items;

  // Acordeão: por omissão só um painel aberto de cada vez
  const { isOpen, toggle } = useAccordion(panels, {
    allowMultiple: true,
  });

  const { id = "logistics-services-panels" } = servicesPanels;
  const ariaLabel = servicesIntro?.title || "Serviços Logísticos";

  return (
    <section id={id} className={styles.section} aria-label={ariaLabel}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {panels.map((panel) => (
            <ServiceFeaturePanel
              key={panel.key}
              title={panel.title}
              summary={panel.summary}
              items={panel.items}
              tagLabel="Inclui:"
              isOpen={isOpen(panel.key)}
              onToggle={() => toggle(panel.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
