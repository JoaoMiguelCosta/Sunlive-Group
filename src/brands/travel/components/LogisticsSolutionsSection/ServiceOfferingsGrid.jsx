import { useMemo } from "react";

import styles from "./ServiceOfferingsGrid.module.css";
import LogisticsServiceCard from "./LogisticsServiceCard.jsx";
import { resolveTravelIcon } from "../../config/index.js";
import useAccordion from "../../../../shared/hooks/useAccordion.js";

export default function ServiceOfferingsGrid({
  services = [],
  icons = {},
  ui = {},
  allowMultiple = false,
}) {
  const servicesAriaLabel =
    ui?.servicesAriaLabel ?? "Serviços de logística e apoio à viagem";
  const openLabel = ui?.expandLabel ?? "Ver detalhes";
  const closeLabel = ui?.collapseLabel ?? "Recolher";
  const openDetailsLabel = ui?.openDetailsLabel ?? "Abrir detalhes de";
  const closeDetailsLabel = ui?.closeDetailsLabel ?? "Fechar detalhes de";

  const keyedServices = useMemo(() => {
    if (!Array.isArray(services)) return [];

    return services
      .filter((service) => service?.title)
      .map((service, index) => ({
        ...service,
        key: service.key || `svc-${index}`,
      }));
  }, [services]);

  const { isOpen, toggle } = useAccordion(keyedServices, { allowMultiple });

  if (keyedServices.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid} role="list" aria-label={servicesAriaLabel}>
        {keyedServices.map((service, index) => {
          const Icon = resolveTravelIcon(icons, service.iconKey);
          const open = isOpen(service.key);

          return (
            <div
              key={service.key}
              role="listitem"
              className={styles.cell}
              data-key={service.key}
              data-idx={index}
            >
              <LogisticsServiceCard
                id={service.key}
                icon={Icon}
                tag={service.tag}
                title={service.title}
                summary={service.summary}
                items={service.items}
                includesLabel={service.includesLabel || "Inclui:"}
                interactive
                isOpen={open}
                onToggle={() => toggle(service.key)}
                openLabel={openLabel}
                closeLabel={closeLabel}
                openDetailsLabel={openDetailsLabel}
                closeDetailsLabel={closeDetailsLabel}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
