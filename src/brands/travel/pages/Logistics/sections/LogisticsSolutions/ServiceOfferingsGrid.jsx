import { useMemo } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import { resolveTravelIcon } from "../../../../config/index.js";

import LogisticsServiceCard from "./LogisticsServiceCard.jsx";
import styles from "./ServiceOfferingsGrid.module.css";

const DEFAULT_UI = {
  servicesAriaLabel: "Serviços de logística e apoio à viagem",
  expandLabel: "Ver detalhes",
  collapseLabel: "Recolher",
  openDetailsLabel: "Abrir detalhes de",
  closeDetailsLabel: "Fechar detalhes de",
};

const DEFAULT_INTRO = {
  eyebrow: "Módulos operacionais",
  title: "Serviços desenhados para uma execução fluida e coordenada",
  description:
    "Cada módulo cobre uma necessidade crítica da viagem e pode ser articulado numa operação única, com acompanhamento próximo e resposta ajustada ao grupo.",
};

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
  const mergedUi = { ...DEFAULT_UI, ...ui };
  const mergedIntro = { ...DEFAULT_INTRO, ...(intro ?? {}) };

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
    mergedIntro?.eyebrow || mergedIntro?.title || mergedIntro?.description,
  );

  return (
    <div
      className={styles.block}
      role="group"
      aria-label={mergedUi.servicesAriaLabel}
    >
      {hasIntro ? (
        <header className={styles.sectionHead}>
          <div className={styles.headGlow} aria-hidden="true" />

          <div className={styles.headContent}>
            {mergedIntro.eyebrow ? (
              <p className={styles.sectionKicker}>{mergedIntro.eyebrow}</p>
            ) : null}

            {mergedIntro.title ? (
              <h3 className={styles.sectionTitle}>{mergedIntro.title}</h3>
            ) : null}

            {mergedIntro.description ? (
              <p className={styles.sectionDescription}>
                {mergedIntro.description}
              </p>
            ) : null}
          </div>
        </header>
      ) : null}

      <div
        className={styles.grid}
        role="list"
        aria-label={mergedUi.servicesAriaLabel}
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
                includesLabel={service.includesLabel || "Inclui:"}
                interactive
                isOpen={isOpen(service.id)}
                onToggle={() => toggle(service.id)}
                openLabel={mergedUi.expandLabel}
                closeLabel={mergedUi.collapseLabel}
                openDetailsLabel={mergedUi.openDetailsLabel}
                closeDetailsLabel={mergedUi.closeDetailsLabel}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
