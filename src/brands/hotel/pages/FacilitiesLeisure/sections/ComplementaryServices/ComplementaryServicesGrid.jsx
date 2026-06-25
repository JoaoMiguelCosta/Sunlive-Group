import { useEffect, useMemo, useRef } from "react";

import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const complementaryServices = facilitiesLeisurePage.sections.complementaryServices;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import HotelComplementaryServiceCard from "../../../../shared/ui/HotelComplementaryServiceCard/HotelComplementaryServiceCard.jsx";

import styles from "./ComplementaryServicesGrid.module.css";

function DetailIconSlot({ icon = null, iconLabel = "" }) {
  if (icon) {
    return (
      <span className={styles.detailIconCircle} aria-label={iconLabel}>
        {icon}
      </span>
    );
  }

  return (
    <span className={styles.detailIconCircle} aria-hidden="true">
      <span className={styles.detailIconPlaceholder} />
    </span>
  );
}

export default function ComplementaryServicesGrid() {
  const services = complementaryServices?.services ?? null;

  const items = useMemo(() => {
    const sourceItems = Array.isArray(services?.items) ? services.items : [];

    return sourceItems.map((item) => {
      const iconKey = item?.icon?.key ?? null;
      const Icon = iconKey
        ? resolveHotelIcon(ICONS, iconKey)
        : null;

      return {
        ...item,
        icon: {
          ...item.icon,
          component: Icon ? <Icon /> : null,
        },
      };
    });
  }, [services]);

  const { isOpen, open } = useAccordion(items, { allowMultiple: false });

  const detailPanelRef = useRef(null);

  const activeItem = items.find((item) => isOpen(item.key)) ?? items[0] ?? null;
  const activeKey = activeItem?.key ?? null;
  const detailPanelId = `${services?.id ?? "complementary-services-grid"}-detail`;

  useEffect(() => {
    if (!activeKey) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth > 1100) return;

    const node = detailPanelRef.current;
    if (!node) return;

    const frame = window.requestAnimationFrame(() => {
      const top = node.getBoundingClientRect().top + window.scrollY - 96;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeKey]);

  if (!items.length) return null;

  return (
    <div id={services?.id} className={styles.block}>
      <div className={styles.grid}>
        {items.map((item) => {
          const selected = item.key === activeKey;

          return (
            <HotelComplementaryServiceCard
              key={item.key}
              title={item.title}
              description={item.description}
              badge={item.badge}
              icon={item.icon?.component ?? null}
              iconLabel={item.icon?.ariaLabel ?? item.title}
              isActive={selected}
              onClick={() => open(item.key)}
              ariaControls={detailPanelId}
            />
          );
        })}
      </div>

      {activeItem ? (
        <section
          key={activeItem.key}
          id={detailPanelId}
          ref={detailPanelRef}
          className={styles.detailPanel}
          aria-label={services?.detailPanelLabel ?? "Detalhes do serviço"}
        >
          <div className={styles.detailShell}>
            <header className={styles.detailHero}>
              <div className={styles.detailHeroInner}>
                <div className={styles.detailHeroLeft}>
                  <DetailIconSlot
                    icon={activeItem.icon?.component ?? null}
                    iconLabel={activeItem.icon?.ariaLabel ?? activeItem.title}
                  />

                  <div className={styles.detailHeroContent}>
                    <div className={styles.detailTop}>
                      <span className={styles.detailBadge}>
                        {activeItem.badge ?? "Disponível"}
                      </span>
                    </div>

                    <h3 className={styles.detailTitle}>
                      {activeItem.detailTitle ?? activeItem.title}
                    </h3>
                  </div>
                </div>
              </div>
            </header>

            <div className={styles.detailBody}>
              <div className={styles.detailMain}>
                {activeItem.detailDescription ? (
                  <p className={styles.detailDescription}>
                    {activeItem.detailDescription}
                  </p>
                ) : null}

                {activeItem.detailNote ? (
                  <div className={styles.detailNoteCard}>
                    <span className={styles.detailNoteLabel}>
                      Informação útil
                    </span>
                    <p className={styles.detailNote}>{activeItem.detailNote}</p>
                  </div>
                ) : null}
              </div>

              {Array.isArray(activeItem.highlights) &&
              activeItem.highlights.length ? (
                <aside className={styles.detailHighlights}>
                  <h4 className={styles.highlightsTitle}>O que inclui</h4>

                  <ul className={styles.highlightsList}>
                    {activeItem.highlights.map((point, index) => (
                      <li
                        key={`${activeItem.key}-${index}`}
                        className={styles.highlightItem}
                      >
                        <span
                          className={styles.highlightDot}
                          aria-hidden="true"
                        />
                        <span className={styles.highlightText}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
