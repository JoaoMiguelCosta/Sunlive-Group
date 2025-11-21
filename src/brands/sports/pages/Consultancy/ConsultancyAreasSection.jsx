// src/brands/sports/pages/Consultancy/ConsultancyAreasSection.jsx
import styles from "./ConsultancyAreasSection.module.css";

import ServiceFeaturePanel from "../../../../shared/components/Sports/ServiceFeaturePanel/ServiceFeaturePanel.jsx";
import useAccordion from "../../../../shared/hooks/useAccordion.js";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

/**
 * Mapa local de iconKey → componente
 * Ajusta as keys para alinharem com o configSports.consultancy.areasPanels.items
 */
const PANEL_ICONS = {
  // exemplos — troca pelos que fizerem mais sentido:
  global: ICONS.GlobeIcon,
  luggage: ICONS.LuggageIcon,
  trendup: ICONS.TrendUpIcon,
  cog: ICONS.CogIcon,
  medal: ICONS.MedalIcon,
  circus: ICONS.CircusTentIcon,
};

/**
 * Secção de Áreas de Consultoria (cards em acordeão)
 *
 * Uso:
 *   <ConsultancyAreasSection data={data} iconSet={sportsBrand.icons} />
 * onde data é o objeto "consultancy" do configSports.
 *
 * Props:
 *  - data: objeto de configuração da secção
 *  - iconSet (opcional): mapa de ícones vindo de fora (ex: sportsBrand.icons)
 */
export default function ConsultancyAreasSection({ data, iconSet }) {
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
          {panels.map((panel) => {
            const IconComponent =
              (iconSet && panel.iconKey && iconSet[panel.iconKey]) ||
              PANEL_ICONS[panel.iconKey] ||
              null;

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
