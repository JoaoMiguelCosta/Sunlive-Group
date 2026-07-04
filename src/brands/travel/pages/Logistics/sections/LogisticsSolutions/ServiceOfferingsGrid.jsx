import { useMemo } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import { resolveTravelIcon } from "../../../../config/core/iconKeyMap.js";

import LogisticsServiceCard from "./LogisticsServiceCard.jsx";
import styles from "./ServiceOfferingsGrid.module.css";

function buildServiceId(service, index) {
  if (service?.anchorId) return service.anchorId;
  if (service?.id) return service.id;
  if (service?.key) return service.key;
  return `svc-${index}-${service?.title ?? "service"}`;
}

export default function ServiceOfferingsGrid({
  services = [],
  intro = null,
  icons = {},
  ui = {},
}) {
  const normalizedServices = useMemo(() => {
    if (!Array.isArray(services)) return [];

    return services
      .filter((service) => service?.title)
      .map((service, index) => {
        const id = buildServiceId(service, index);

        return {
          ...service,
          id,
          key: service?.key || id,
          defaultOpen: index === 0,
        };
      });
  }, [services]);

  const { isOpen, open } = useAccordion(normalizedServices, {
    allowMultiple: false,
  });

  if (normalizedServices.length === 0) return null;

  const hasIntro = Boolean(
    intro?.eyebrow || intro?.title || intro?.description,
  );

  return (
    <div className={styles.block}>
      {hasIntro ? (
        <header className={styles.sectionHead}>
          {intro?.eyebrow ? (
            <p className={styles.sectionKicker}>{intro.eyebrow}</p>
          ) : null}

          {intro?.title ? (
            <h2 className={styles.sectionTitle}>{intro.title}</h2>
          ) : null}

          {intro?.description ? (
            <p className={styles.sectionDescription}>{intro.description}</p>
          ) : null}
        </header>
      ) : null}

      <ul
        className={styles.explorer}
        role="list"
        aria-label={ui?.servicesAriaLabel}
      >
        {normalizedServices.map((service, index) => {
          const Icon = resolveTravelIcon(icons, service.iconKey);
          const active = isOpen(service.id);
          const triggerId = `${service.id}-trigger`;
          const panelId = `${service.id}-panel`;

          return (
            <li key={service.key} className={styles.item}>
              <h3 className={styles.itemHeading}>
                <button
                  type="button"
                  id={triggerId}
                  className={styles.trigger}
                  aria-expanded={active}
                  aria-controls={panelId}
                  data-active={active ? "true" : "false"}
                  onClick={() => open(service.id)}
                >
                  <span className={styles.triggerNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.triggerTitle}>{service.title}</span>
                  <span
                    className={styles.triggerIndicator}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={styles.panel}
                hidden={!active}
              >
                <LogisticsServiceCard
                  icon={Icon}
                  title={service.title}
                  summary={service.summary}
                  items={service.items}
                  includesLabel={service.includesLabel ?? ui?.includesLabel}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
