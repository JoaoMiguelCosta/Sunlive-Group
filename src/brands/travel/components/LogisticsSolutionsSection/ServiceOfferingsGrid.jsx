import styles from "./ServiceOfferingsGrid.module.css";
import ServiceCard from "../../../../shared/components/ServiceCard";
import travelBrand from "../../ConfigTravel.jsx";

/**
 * ServiceOfferingsGrid — lista de serviços (usa ServiceCard partilhado)
 * - 1 → 2 → (desktop) 3 cards por linha, com 2.ª linha centrada (5 itens)
 * - Alturas internas uniformes por Flex + line-clamp
 */
export default function ServiceOfferingsGrid({
  services: servicesOverride,
  icons: iconsOverride,
}) {
  const servicesFromConfig =
    travelBrand?.sections?.logisticsSolutions?.services || [];
  const iconsFromConfig = travelBrand?.icons || {};

  const services = Array.isArray(servicesOverride)
    ? servicesOverride
    : servicesFromConfig;

  const icons = iconsOverride || iconsFromConfig;

  if (!Array.isArray(services) || services.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <div
        className={styles.grid}
        role="list"
        aria-label="Serviços de Logística"
      >
        {services.map((svc, idx) => {
          const Icon = svc.iconKey ? icons[svc.iconKey] : undefined;
          return (
            <div
              key={svc.key || idx}
              role="listitem"
              className={styles.cell}
              data-key={svc.key}
              data-idx={idx}
            >
              <ServiceCard
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
