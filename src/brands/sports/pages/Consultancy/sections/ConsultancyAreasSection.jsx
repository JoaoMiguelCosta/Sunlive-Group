import styles from "./ConsultancyAreasSection.module.css";

import ServiceFeaturePanel from "../../../shared/ui/ServiceFeaturePanel/ServiceFeaturePanel.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";

import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

/**
 * Secção de Áreas de Consultoria (cards em acordeão)
 *
 * Props:
 *  - data: objeto de configuração da secção ("consultancy")
 *  - iconSet (opcional): mapa de ícones vindo de fora (ex: sportsBrand.icons)
 */
export default function ConsultancyAreasSection({ data, iconSet }) {
  if (!data) return null;

  const { areasIntro, areasPanels } = data;
  if (!areasPanels?.items?.length) return null;

  const icons = iconSet || sportsBrand.icons;
  const panels = areasPanels.items;

  const { isOpen, toggle } = useAccordion(panels, {
    allowMultiple: false,
  });

  const { id = "consultancy-areas-panels" } = areasPanels;
  const ariaLabel = areasIntro?.title || "Áreas de Consultoria";

  return (
    <section id={id} className={styles.section} aria-label={ariaLabel}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {panels.map((panel) => {
            const IconComponent = resolveSportsIcon(icons, panel.iconKey);

            return (
              <ServiceFeaturePanel
                key={panel.key}
                icon={IconComponent ? <IconComponent /> : null}
                title={panel.title}
                summary={panel.summary}
                items={panel.items}
                tagLabel="Serviços incluídos:"
                isOpen={isOpen(panel.key)}
                onToggle={() => toggle(panel.key)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
