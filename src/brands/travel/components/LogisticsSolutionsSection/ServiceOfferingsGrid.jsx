import { useMemo } from "react";
import styles from "./ServiceOfferingsGrid.module.css";
import ServiceCard from "../../shared/ui/ServiceCard/index.jsx";
import travelBrand from "../../config/index.js";
import useAccordion from "../../../../shared/hooks/useAccordion";

/**
 * ServiceOfferingsGrid — lista de serviços (cards interativos)
 * - 1 → 2 → (desktop) 3 por linha; 2.ª linha centrada quando houver 5
 * - Click/Enter/Space abre/fecha a área "Inclui"
 */
export default function ServiceOfferingsGrid({
  services: servicesOverride,
  icons: iconsOverride,
  allowMultiple = false,
}) {
  const servicesFromBrand =
    travelBrand?.sections?.logisticsSolutions?.services ?? [];
  const iconsFromBrand = travelBrand?.icons ?? {};

  const services = Array.isArray(servicesOverride)
    ? servicesOverride
    : servicesFromBrand;

  const icons = iconsOverride || iconsFromBrand;

  if (!Array.isArray(services) || services.length === 0) return null;

  const keyed = useMemo(
    () => services.map((s, i) => ({ ...s, key: s.key || `svc-${i}` })),
    [services],
  );

  const { isOpen, toggle } = useAccordion(keyed, { allowMultiple });

  return (
    <div className={styles.wrap}>
      <div
        className={styles.grid}
        role="list"
        aria-label="Serviços de Logística"
      >
        {keyed.map((svc, idx) => {
          const Icon = svc.iconKey ? icons[svc.iconKey] : undefined;
          const open = isOpen(svc.key);

          return (
            <div
              key={svc.key}
              role="listitem"
              className={styles.cell}
              data-key={svc.key}
              data-idx={idx}
            >
              <ServiceCard
                id={svc.key}
                interactive
                isOpen={open}
                onToggle={() => toggle(svc.key)}
                icon={Icon}
                title={svc.title}
                summary={svc.summary}
                items={svc.items}
                includesLabel={svc.includesLabel || "Inclui:"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
