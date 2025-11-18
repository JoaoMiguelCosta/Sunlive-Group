// src/brands/sports/pages/Consultancy/ConsultancyAreasSection.jsx
import styles from "./ConsultancyAreasSection.module.css";

import ServiceFeaturePanel from "../../../../shared/components/Sports/ServiceFeaturePanel/ServiceFeaturePanel.jsx"
import useAccordion from "../../../../shared/hooks/useAccordion.js";

/**
 * Secção de Áreas de Consultoria (cards em acordeão)
 *
 * Uso:
 *   <ConsultancyAreasSection data={data} />
 * onde data é o objeto "consultancy" do configSports.
 */
export default function ConsultancyAreasSection({ data }) {
  if (!data) return null;

  const { areasIntro, areasPanels } = data;
  if (!areasPanels?.items?.length) return null;

  const panels = areasPanels.items;

  // Acordeão: por omissão só um painel aberto de cada vez (igual Logística)
  const { isOpen, toggle } = useAccordion(panels, {
    allowMultiple: false,
  });

  const { id = "consultancy-areas-panels" } = areasPanels;
  const ariaLabel = areasIntro?.title || "Áreas de Consultoria";

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
              tagLabel="Serviços incluídos:"
              isOpen={isOpen(panel.key)}
              onToggle={() => toggle(panel.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
