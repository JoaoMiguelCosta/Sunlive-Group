import { useMemo } from "react";

import styles from "./ServiceOfferingsGrid.module.css";
import ServiceCard from "../../shared/ui/ServiceCard/index.jsx";
import travelBrand, { resolveTravelIcon } from "../../config/index.js";
import useAccordion from "../../../../shared/hooks/useAccordion";

export default function ServiceOfferingsGrid({
  services: servicesOverride,
  icons: iconsOverride,
  allowMultiple = false,
}) {
  const section = travelBrand?.sections?.logisticsSolutions ?? null;
  const servicesFromBrand = section?.services ?? [];
  const iconsFromBrand = travelBrand?.icons ?? {};
  const servicesAriaLabel =
    section?.ui?.servicesAriaLabel ?? "Serviços de Logística";

  const services = Array.isArray(servicesOverride)
    ? servicesOverride
    : servicesFromBrand;

  const icons = iconsOverride || iconsFromBrand;

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
              <ServiceCard
                id={service.key}
                interactive
                isOpen={open}
                onToggle={() => toggle(service.key)}
                icon={Icon}
                title={service.title}
                summary={service.summary}
                items={service.items}
                includesLabel={service.includesLabel || "Inclui:"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
