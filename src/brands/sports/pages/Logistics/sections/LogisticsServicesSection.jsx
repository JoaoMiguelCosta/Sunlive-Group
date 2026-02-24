// src/brands/sports/pages/Logistics/sections/LogisticsServicesSection.jsx
import styles from "./LogisticsServicesSection.module.css";

import ServiceFeaturePanel from "../../../shared/ui/ServiceFeaturePanel/ServiceFeaturePanel.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";
import { ICONS } from "../../../../../shared/config/BrandDefault.jsx";

const PANEL_ICONS = {
  transport: ICONS.TourBusIcon,
  plane: ICONS.PlaneIcon,
  soup: ICONS.SoupIcon,
  bed: ICONS.BedIcon,
  shirt: ICONS.ShirtIcon,
};

export default function LogisticsServicesSection({ data, iconSet }) {
  if (!data) return null;

  const { servicesIntro, servicesPanels } = data;
  if (!servicesPanels?.items?.length) return null;

  const panels = servicesPanels.items;

  const { isOpen, toggle } = useAccordion(panels, {
    allowMultiple: true,
  });

  const { id = "logistics-services-panels" } = servicesPanels;
  const ariaLabel = servicesIntro?.title || "Serviços Logísticos";

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
                tagLabel="Inclui:"
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
