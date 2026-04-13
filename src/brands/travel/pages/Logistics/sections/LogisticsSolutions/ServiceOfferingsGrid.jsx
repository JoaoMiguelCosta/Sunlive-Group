import { useMemo } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import { resolveTravelIcon } from "../../../../config/index.js";

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
  allowMultiple = false,
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
        };
      });
  }, [services]);

  const { isOpen, toggle } = useAccordion(normalizedServices, {
    allowMultiple,
  });

  if (normalizedServices.length === 0) return null;

  const hasIntro = Boolean(
    intro?.eyebrow || intro?.title || intro?.description,
  );

  return (
    <div
      className={styles.block}
      role="group"
      aria-label={ui?.servicesAriaLabel}
    >
      {hasIntro ? (
        <header className={styles.sectionHead}>
          <div className={styles.headGlow} aria-hidden="true" />

          <div className={styles.headContent}>
            {intro?.eyebrow ? (
              <p className={styles.sectionKicker}>{intro.eyebrow}</p>
            ) : null}

            {intro?.title ? (
              <h3 className={styles.sectionTitle}>{intro.title}</h3>
            ) : null}

            {intro?.description ? (
              <p className={styles.sectionDescription}>{intro.description}</p>
            ) : null}
          </div>
        </header>
      ) : null}

      <div
        className={styles.grid}
        role="list"
        aria-label={ui?.servicesAriaLabel}
      >
        {normalizedServices.map((service, index) => {
          const Icon = resolveTravelIcon(icons, service.iconKey);

          return (
            <div
              key={service.key}
              id={service.id}
              role="listitem"
              className={styles.cell}
              data-index={index + 1}
            >
              <LogisticsServiceCard
                id={service.id}
                icon={Icon}
                tag={service.tag}
                title={service.title}
                summary={service.summary}
                items={service.items}
                includesLabel={service.includesLabel ?? ui?.includesLabel}
                interactive
                isOpen={isOpen(service.id)}
                onToggle={() => toggle(service.id)}
                openLabel={ui?.expandLabel}
                closeLabel={ui?.collapseLabel}
                openDetailsLabel={ui?.openDetailsLabel}
                closeDetailsLabel={ui?.closeDetailsLabel}
                surfaceTone={service.surfaceTone}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
